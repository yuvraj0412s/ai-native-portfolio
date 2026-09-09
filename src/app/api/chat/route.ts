import { createGroq } from '@ai-sdk/groq';
import { createMistral } from '@ai-sdk/mistral';
import { streamText, type LanguageModel, type StreamTextResult } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import {
  logProviderError,
  SAFE_CHAT_ERROR,
  shouldUseFallback,
} from './provider-fallback';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getInternship';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSports';
import { getWeather } from './tools/getWeather';

export const maxDuration = 30;

const MISTRAL_MODEL = process.env.MISTRAL_MODEL ?? 'mistral-small-latest';
const GROQ_MODEL = process.env.GROQ_MODEL ?? 'openai/gpt-oss-20b';

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const tools = {
  getProjects,
  getPresentation,
  getResume,
  getContact,
  getSkills,
  getSports,
  getCrazy,
  getInternship,
  getWeather,
};

function startChat(
  model: LanguageModel,
  messages: Parameters<typeof streamText>[0]['messages'],
) {
  return streamText({
    model,
    messages,
    tools,
    toolCallStreaming: true,
    maxSteps: 2,
    // Fail over instead of retrying the same provider.
    maxRetries: 0,
  });
}

/**
 * Continue a stream after the first chunk has already been read from `reader`.
 * A second `fullStream` access would tee() and replay the first chunk
 * (AI SDK 4 StreamTextResult.teeStream).
 */
function continueFromPeekedChunk(
  result: StreamTextResult<typeof tools, never>,
  reader: ReadableStreamDefaultReader<unknown>,
  first: ReadableStreamReadResult<unknown>,
): StreamTextResult<typeof tools, never> {
  const reconstructed = new ReadableStream({
    async start(controller) {
      if (!first.done && first.value !== undefined) {
        controller.enqueue(first.value);
      }
    },
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      controller.enqueue(value);
    },
    cancel(reason) {
      return reader.cancel(reason);
    },
  });

  Object.defineProperty(result, 'fullStream', {
    get: () => reconstructed,
    configurable: true,
  });

  return result;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    messages.unshift(SYSTEM_PROMPT);

    const mistralResult = startChat(mistral(MISTRAL_MODEL), messages);
    const peekReader = mistralResult.fullStream.getReader();
    const firstChunk = await peekReader.read();

    const mistralError =
      !firstChunk.done &&
      firstChunk.value != null &&
      typeof firstChunk.value === 'object' &&
      'type' in firstChunk.value &&
      firstChunk.value.type === 'error'
        ? (firstChunk.value as { type: 'error'; error: unknown }).error
        : undefined;

    const canFallback =
      mistralError !== undefined &&
      shouldUseFallback(mistralError) &&
      Boolean(process.env.GROQ_API_KEY);

    if (canFallback) {
      await peekReader.cancel();
      logProviderError('mistral', MISTRAL_MODEL, mistralError, {
        fallbackAttempted: true,
      });
      console.log('[CHAT-API] Falling back to Groq', GROQ_MODEL);

      return startChat(groq(GROQ_MODEL), messages).toDataStreamResponse({
        getErrorMessage: () => SAFE_CHAT_ERROR,
      });
    }

    if (mistralError !== undefined) {
      logProviderError('mistral', MISTRAL_MODEL, mistralError, {
        fallbackAttempted: false,
      });
    } else {
      console.log('[CHAT-API] Primary: Mistral', MISTRAL_MODEL);
    }

    return continueFromPeekedChunk(
      mistralResult,
      peekReader,
      firstChunk,
    ).toDataStreamResponse({
      getErrorMessage: () => SAFE_CHAT_ERROR,
    });
  } catch (err) {
    console.error(
      '[CHAT-API] Global error:',
      err instanceof Error ? err.message : 'unknown',
    );
    return new Response(SAFE_CHAT_ERROR, { status: 500 });
  }
}

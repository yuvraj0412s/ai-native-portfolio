import { createMistral } from '@ai-sdk/mistral';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
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

// Explicitly pass the API key so Vercel's serverless runtime resolves it
// correctly at request time. Using the default named export from @ai-sdk/mistral
// was proven to cause 401 errors in production (see commit 524eb0c).
//
// Model selection: configurable via MISTRAL_MODEL env var.
// Defaults to mistral-small-latest (available on all Mistral subscription tiers;
// fully supports streaming, function/tool calling, and system prompts).
// Set MISTRAL_MODEL=mistral-large-latest in Vercel to use a higher-tier model.
const MISTRAL_MODEL = process.env.MISTRAL_MODEL ?? 'mistral-small-latest';

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

/** Logs the real error server-side, returns a safe string for the client. */
function safeErrorMessage(error: unknown): string {
  const raw =
    error == null
      ? 'Unknown error'
      : typeof error === 'string'
        ? error
        : error instanceof Error
          ? error.message
          : JSON.stringify(error);

  console.error('[CHAT-API] Mistral error:', raw);

  // Detect Mistral API-level errors and return a friendly message instead of
  // leaking subscription details or internal stack traces to the browser.
  const lower = raw.toLowerCase();
  if (
    lower.includes('subscription') ||
    lower.includes('not available') ||
    lower.includes('unauthorized') ||
    lower.includes('rate limit') ||
    lower.includes('payment') ||
    lower.includes('billing') ||
    lower.includes('quota')
  ) {
    return 'AI service is temporarily unavailable. Please try again later.';
  }

  return 'An unexpected error occurred. Please try again.';
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Using model:', MISTRAL_MODEL);

    messages.unshift(SYSTEM_PROMPT);

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

    const result = streamText({
      model: mistral(MISTRAL_MODEL),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: safeErrorMessage,
    });
  } catch (err) {
    console.error('[CHAT-API] Global error:', err);
    return new Response(
      'AI service is temporarily unavailable. Please try again later.',
      { status: 500 },
    );
  }
}

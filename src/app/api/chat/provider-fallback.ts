/**
 * Provider failover helpers for /api/chat.
 *
 * Mistral is always primary. Groq is used only for provider-level failures
 * (rate limits, auth, 5xx, timeouts). Application/programming errors do not
 * trigger fallback.
 */

type ErrorLike = {
  statusCode?: unknown;
  lastError?: unknown;
  responseHeaders?: Record<string, string>;
  message?: unknown;
  name?: unknown;
  cause?: unknown;
};

function asErrorLike(error: unknown): ErrorLike {
  if (error != null && typeof error === 'object') {
    return error as ErrorLike;
  }
  return {};
}

/** Unwrap AI SDK RetryError (if present) to the underlying provider error. */
function unwrapError(error: unknown): unknown {
  const nested = asErrorLike(error).lastError;
  return nested ?? error;
}

export function getProviderStatusCode(error: unknown): number | undefined {
  const status = asErrorLike(unwrapError(error)).statusCode;
  return typeof status === 'number' ? status : undefined;
}

function getSafeMessage(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  const msg = asErrorLike(error).message;
  return typeof msg === 'string' ? msg : String(error);
}

function getRetryAfter(error: unknown): string | undefined {
  const headers = asErrorLike(unwrapError(error)).responseHeaders;
  if (!headers) return undefined;
  return headers['retry-after'] ?? headers['Retry-After'];
}

/**
 * True when switching providers is appropriate.
 * False for malformed requests, validation errors, and other app bugs.
 */
export function shouldUseFallback(error: unknown): boolean {
  const status = getProviderStatusCode(error);
  if (status === 429 || status === 401 || status === 403) return true;
  if (status === 500 || status === 502 || status === 503 || status === 504) {
    return true;
  }
  if (status !== undefined && status >= 500) return true;

  const msg = getSafeMessage(error).toLowerCase();
  return (
    msg.includes('timeout') ||
    msg.includes('etimedout') ||
    msg.includes('econnreset') ||
    msg.includes('econnrefused') ||
    msg.includes('fetch failed') ||
    msg.includes('network') ||
    msg.includes('overloaded') ||
    msg.includes('rate limit') ||
    msg.includes('too many requests') ||
    msg.includes('service unavailable')
  );
}

/** Logs a safe diagnostic. Never logs keys, auth headers, or full request headers. */
export function logProviderError(
  provider: string,
  model: string,
  error: unknown,
  extra: { fallbackAttempted: boolean },
): void {
  const status = getProviderStatusCode(error) ?? 'n/a';
  const retryAfter = getRetryAfter(error);
  const name = asErrorLike(unwrapError(error)).name;
  const category =
    status === 429
      ? 'rate_limit'
      : status === 401 || status === 403
        ? 'auth'
        : typeof status === 'number' && status >= 500
          ? 'server'
          : 'other';

  console.warn(
    `[CHAT-API] provider=${provider} model=${model} status=${status}` +
      ` category=${category} fallbackAttempted=${extra.fallbackAttempted}` +
      (retryAfter ? ` retryAfter=${retryAfter}` : '') +
      (typeof name === 'string' ? ` name=${name}` : '') +
      ` msg=${getSafeMessage(error).slice(0, 120)}`,
  );
}

export const SAFE_CHAT_ERROR =
  'AI service is temporarily unavailable. Please try again later.';

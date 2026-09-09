import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Lightweight decision-table tests for provider failover.
 * Mirrors src/app/api/chat/provider-fallback.ts (kept in JS so it runs with
 * Node's built-in test runner — no extra test framework).
 */

function unwrapError(error) {
  return error?.lastError ?? error;
}

function getProviderStatusCode(error) {
  const status = unwrapError(error)?.statusCode;
  return typeof status === 'number' ? status : undefined;
}

function shouldUseFallback(error) {
  const status = getProviderStatusCode(error);
  if (status === 429 || status === 401 || status === 403) return true;
  if (status === 500 || status === 502 || status === 503 || status === 504) {
    return true;
  }
  if (status !== undefined && status >= 500) return true;

  const msg = (
    typeof error === 'string'
      ? error
      : error instanceof Error
        ? error.message
        : String(error?.message ?? error)
  ).toLowerCase();

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

describe('shouldUseFallback', () => {
  it('falls back on Mistral 429 rate limits', () => {
    assert.equal(shouldUseFallback({ statusCode: 429 }), true);
  });

  it('falls back on 401/403 so the public site stays up', () => {
    assert.equal(shouldUseFallback({ statusCode: 401 }), true);
    assert.equal(shouldUseFallback({ statusCode: 403 }), true);
  });

  it('falls back on 5xx and timeouts', () => {
    assert.equal(shouldUseFallback({ statusCode: 500 }), true);
    assert.equal(shouldUseFallback({ statusCode: 502 }), true);
    assert.equal(shouldUseFallback({ statusCode: 503 }), true);
    assert.equal(shouldUseFallback({ statusCode: 504 }), true);
    assert.equal(shouldUseFallback(new Error('request timeout')), true);
    assert.equal(shouldUseFallback(new Error('fetch failed')), true);
  });

  it('unwraps RetryError.lastError', () => {
    assert.equal(
      shouldUseFallback({ lastError: { statusCode: 429 } }),
      true,
    );
  });

  it('does not fall back on application/validation errors', () => {
    assert.equal(shouldUseFallback({ statusCode: 400 }), false);
    assert.equal(shouldUseFallback(new Error('Invalid tool arguments')), false);
    assert.equal(shouldUseFallback(new Error('messages must be an array')), false);
  });
});

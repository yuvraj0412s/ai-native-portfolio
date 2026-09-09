// Route-level ISR: response is cached for 1 hour then revalidated.
// Per-fetch `next: { revalidate }` is intentionally omitted — the Next.js
// data cache can seed itself from the build environment (no network access),
// causing a stale error to be served in production.
export const revalidate = 3600;

// Repository moved from Yuvi_portfolio → ai-native-portfolio (confirmed via
// GitHub API: old URL returns 301; `yuvraj0412s/ai-native-portfolio` → 200
// with stargazers_count: 25. See git remote redirect on push of 926be2f).
const REPO = 'yuvraj0412s/ai-native-portfolio';
const GITHUB_API = `https://api.github.com/repos/${REPO}`;

async function fetchStars(withAuth: boolean): Promise<Response> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (withAuth) {
    const token = process.env.GITHUB_TOKEN;
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  return fetch(GITHUB_API, { headers });
}

export async function GET() {
  try {
    // First attempt: with token (higher rate limit)
    let res = await fetchStars(true);

    // If the token is expired/invalid (401) or forbidden (403), retry without
    // auth. The repository is public so unauthenticated requests succeed up to
    // GitHub's 60 req/h anonymous limit — more than enough for a portfolio.
    if (res.status === 401 || res.status === 403) {
      console.warn('[GITHUB-STARS] Auth attempt failed (' + res.status + '), retrying without token');
      res = await fetchStars(false);
    }

    if (res.status === 404) {
      console.error('[GITHUB-STARS] Repository not found:', REPO);
      return Response.json({ stars: null, error: 'Repository not found' }, { status: 404 });
    }

    if (res.status === 429) {
      console.error('[GITHUB-STARS] Rate limited by GitHub');
      return Response.json({ stars: null, error: 'Rate limited' }, { status: 429 });
    }

    if (!res.ok) {
      console.error('[GITHUB-STARS] GitHub API error:', res.status);
      return Response.json({ stars: null, error: 'GitHub API error' }, { status: 502 });
    }

    const data = await res.json();
    const stars: number = data.stargazers_count ?? 0;

    return Response.json({ stars });
  } catch (err) {
    console.error('[GITHUB-STARS] Unexpected error:', err);
    return Response.json({ stars: null, error: 'Service unavailable' }, { status: 503 });
  }
}
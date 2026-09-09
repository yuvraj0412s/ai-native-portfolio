// Cache for 1 hour server-side so GitHub API is not hammered on every request.
export const revalidate = 3600;

const REPO = 'yuvraj0412s/Yuvi_portfolio';
const GITHUB_API = `https://api.github.com/repos/${REPO}`;

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const token = process.env.GITHUB_TOKEN;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(GITHUB_API, {
      headers,
      next: { revalidate: 3600 },
    });

    if (res.status === 404) {
      console.error('[GITHUB-STARS] Repository not found:', REPO);
      return Response.json({ stars: null, error: 'Repository not found' }, { status: 404 });
    }

    if (res.status === 403 || res.status === 429) {
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
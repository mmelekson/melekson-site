import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

// Generates a branded Open Graph / hero card at the edge.
// Two variants:
//   - default (1200x630) — social share card for OG/Twitter
//   - hero (1600x640)    — wider banner for in-post hero display
// Called as: /api/og?title=...&category=...&date=...&author=...&variant=hero
// All params optional; sensible defaults applied.
export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = (searchParams.get('title') || 'Myron Melekson').slice(0, 140);
    const category = (searchParams.get('category') || '').slice(0, 40);
    const date = (searchParams.get('date') || '').slice(0, 40);
    const author = (searchParams.get('author') || 'Myron Melekson').slice(0, 60);
    const variant = searchParams.get('variant') === 'hero' ? 'hero' : 'og';
    const width = variant === 'hero' ? 1600 : 1200;
    const height = variant === 'hero' ? 640 : 630;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px 80px',
            background: 'linear-gradient(135deg, #1c1917 0%, #292524 55%, #3a2e28 100%)',
            color: '#fafaf9',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Top row: site name + category pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: '#d97706',
                }}
              />
              <div style={{ fontSize: 28, color: '#d6d3d1', letterSpacing: 2, textTransform: 'uppercase' }}>
                melekson.com
              </div>
            </div>
            {category ? (
              <div
                style={{
                  fontSize: 24,
                  padding: '10px 22px',
                  borderRadius: 999,
                  background: 'rgba(217, 119, 6, 0.18)',
                  color: '#fbbf24',
                  border: '1px solid rgba(217, 119, 6, 0.45)',
                }}
              >
                {category}
              </div>
            ) : (
              <div />
            )}
          </div>

          {/* Title — biggest element */}
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 70 ? 60 : 76,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: -1,
              color: '#fafaf9',
              maxWidth: '100%',
            }}
          >
            {title}
          </div>

          {/* Bottom row: author + date */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 26, color: '#a8a29e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1c1917',
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                MM
              </div>
              <div style={{ color: '#e7e5e4' }}>{author}</div>
            </div>
            {date ? <div>{date}</div> : <div />}
          </div>
        </div>
      ),
      {
        width,
        height,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate OG image: ${e.message}`, { status: 500 });
  }
}

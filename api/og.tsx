import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract customizable query parameters
    const title = searchParams.get('title')?.slice(0, 80) || 'Gwyneth Ashley Mucio';
    const subtitle =
      searchParams.get('subtitle')?.slice(0, 120) ||
      'BSIT Student & Backend Developer • St. Dominic College of Asia';
    const badge = searchParams.get('badge')?.slice(0, 50) || '🌸 Digital Garden & Portfolio';
    const institution = searchParams.get('institution')?.slice(0, 60) || 'St. Dominic College of Asia';
    const tagsParam = searchParams.get('tags') || 'Java,SQL,Oracle APEX,Flutter';
    const tags = tagsParam
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 5);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FAF7F2',
            padding: '55px 65px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Top Row: Category Badge + Class Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FCE1E4',
                color: '#8A2E3B',
                fontSize: 22,
                fontWeight: 700,
                padding: '10px 24px',
                borderRadius: 9999,
                border: '1.5px solid rgba(138, 46, 59, 0.2)',
              }}
            >
              {badge}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFF3B0',
                color: '#7A5C12',
                fontSize: 18,
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: 9999,
              }}
            >
              Graduating Class of 2026
            </div>
          </div>

          {/* Middle: Title, Subtitle, Location */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: 960,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: '#26201B',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: '#6E6259',
                lineHeight: 1.35,
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#8A2E3B',
              }}
            >
              📍 {institution} • Bacoor, Cavite, PH
            </div>
          </div>

          {/* Bottom Row: Tech Tags + Domain */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '2px dashed #E5DCD0',
              paddingTop: 28,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              {tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#3D352E',
                    fontSize: 18,
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: 12,
                    border: '1px solid #E5DCD0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 700,
                color: '#8A2E3B',
              }}
            >
              gwynethashleymucio.vercel.app
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate Open Graph image: ${e.message}`, {
      status: 500,
    });
  }
}

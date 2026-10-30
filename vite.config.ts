import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

/**
 * Dev-server middleware that emulates the /api/og dynamic Open Graph generator
 * during local development, returning a scalable SVG preview matching the card design.
 */
function ogDevPlugin(): Plugin {
  return {
    name: 'vite-og-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/api/og')) {
          const parsedUrl = new URL(req.url, 'http://localhost:3000');
          const title = parsedUrl.searchParams.get('title') || 'Gwyneth Ashley Mucio';
          const subtitle =
            parsedUrl.searchParams.get('subtitle') ||
            'BSIT Student & Backend Developer • St. Dominic College of Asia';
          const badge = parsedUrl.searchParams.get('badge') || '🌸 Digital Garden & Portfolio';
          const institution = parsedUrl.searchParams.get('institution') || 'St. Dominic College of Asia';
          const tags = (parsedUrl.searchParams.get('tags') || 'Java,SQL,Oracle APEX,Flutter')
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
            .slice(0, 5);

          const escapeXml = (str: string) =>
            str.replace(/[<>&'"]/g, (c) => {
              switch (c) {
                case '<':
                  return '&lt;';
                case '>':
                  return '&gt;';
                case '&':
                  return '&amp;';
                case "'":
                  return '&apos;';
                case '"':
                  return '&quot;';
                default:
                  return c;
              }
            });

          const tagsSvg = tags
            .map(
              (tag, index) => `
                <g transform="translate(${index * 130}, 0)">
                  <rect width="118" height="42" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
                  <text x="59" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#3D352E" text-anchor="middle">${escapeXml(tag)}</text>
                </g>
              `
            )
            .join('');

          const svg = `
            <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
              <rect width="1200" height="630" fill="#FAF7F2" />
              <rect x="30" y="30" width="1140" height="570" rx="24" fill="#FAF7F2" stroke="#E5DCD0" stroke-width="2" />
              
              <!-- Badge -->
              <g transform="translate(70, 70)">
                <rect width="320" height="44" rx="22" fill="#FCE1E4" stroke="rgba(138, 46, 59, 0.2)" stroke-width="1.5" />
                <text x="160" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="700" fill="#8A2E3B" text-anchor="middle">${escapeXml(badge)}</text>
              </g>

              <!-- Graduating Badge -->
              <g transform="translate(860, 70)">
                <rect width="270" height="40" rx="20" fill="#FFF3B0" />
                <text x="135" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#7A5C12" text-anchor="middle">Graduating Class of 2026</text>
              </g>

              <!-- Main Title -->
              <text x="70" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#26201B">${escapeXml(title)}</text>
              
              <!-- Subtitle -->
              <text x="70" y="295" font-family="system-ui, -apple-system, sans-serif" font-size="25" font-weight="500" fill="#6E6259">${escapeXml(subtitle)}</text>
              
              <!-- Institution & Location -->
              <text x="70" y="348" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#8A2E3B">📍 ${escapeXml(institution)} • Bacoor, Cavite, PH</text>

              <!-- Bottom divider -->
              <line x1="70" y1="490" x2="1130" y2="490" stroke="#E5DCD0" stroke-width="2" stroke-dasharray="8 8" />

              <!-- Tags -->
              <g transform="translate(70, 520)">
                ${tagsSvg}
              </g>

              <!-- Domain -->
              <text x="1130" y="547" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#8A2E3B" text-anchor="end">gwynethashleymucio.vercel.app</text>
            </svg>
          `.trim();

          res.setHeader('Content-Type', 'image/svg+xml');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(svg);
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), ogDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

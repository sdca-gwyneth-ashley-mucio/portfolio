import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF7F2" />
      <stop offset="100%" stop-color="#F5EFE6" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect x="30" y="30" width="1140" height="570" rx="28" fill="#FAF7F2" stroke="#E5DCD0" stroke-width="2" />

  <!-- Badge: Digital Garden -->
  <g transform="translate(75, 75)">
    <rect width="360" height="46" rx="23" fill="#FCE1E4" stroke="rgba(138, 46, 59, 0.25)" stroke-width="1.5" />
    <text x="180" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="#8A2E3B" text-anchor="middle">🌸 BSIT Digital Garden &amp; Portfolio</text>
  </g>

  <!-- Graduating Tag -->
  <g transform="translate(830, 75)">
    <rect width="295" height="46" rx="23" fill="#FFF3B0" stroke="#E2D38A" stroke-width="1" />
    <text x="147" y="29" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#7A5C12" text-anchor="middle">🎓 Graduating Class of 2026</text>
  </g>

  <!-- Title -->
  <text x="75" y="245" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" fill="#26201B" letter-spacing="-0.02em">Gwyneth Ashley Mucio</text>

  <!-- Subtitle -->
  <text x="75" y="305" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="500" fill="#6E6259">BSIT Student &amp; Backend Developer • St. Dominic College of Asia</text>

  <!-- Location & Focus -->
  <text x="75" y="355" font-family="system-ui, -apple-system, sans-serif" font-size="21" font-weight="600" fill="#8A2E3B">📍 Bacoor, Cavite, PH  •  Specializing in Systems Analysis &amp; Database Design</text>

  <!-- Divider -->
  <line x1="75" y1="480" x2="1125" y2="480" stroke="#E5DCD0" stroke-width="2" stroke-dasharray="8 8" />

  <!-- Tech Stack Pills -->
  <g transform="translate(75, 515)">
    <g transform="translate(0, 0)">
      <rect width="105" height="44" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
      <text x="52" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#3D352E" text-anchor="middle">☕ Java</text>
    </g>
    <g transform="translate(120, 0)">
      <rect width="105" height="44" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
      <text x="52" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#3D352E" text-anchor="middle">🗄️ SQL</text>
    </g>
    <g transform="translate(240, 0)">
      <rect width="165" height="44" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
      <text x="82" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#3D352E" text-anchor="middle">⚡ Oracle APEX</text>
    </g>
    <g transform="translate(420, 0)">
      <rect width="120" height="44" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
      <text x="60" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#3D352E" text-anchor="middle">📱 Flutter</text>
    </g>
    <g transform="translate(555, 0)">
      <rect width="130" height="44" rx="12" fill="#FFFFFF" stroke="#E5DCD0" stroke-width="1.5" />
      <text x="65" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#3D352E" text-anchor="middle">🔥 Firebase</text>
    </g>
  </g>

  <!-- Domain Brand -->
  <text x="1125" y="545" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" fill="#8A2E3B" text-anchor="end">gwynethashleymucio.vercel.app</text>
</svg>
`;

const outputPath = path.resolve('public', 'og-image.png');
await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log(`[generate-og] Created static OG fallback image at ${outputPath} (1200x630 px)`);

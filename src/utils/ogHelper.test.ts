import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_OG_CONFIG,
  buildOgImageUrl,
  isValidOgImageUrl,
} from './ogHelper.ts';

test('buildOgImageUrl returns base URL when no custom params provided', () => {
  const url = buildOgImageUrl();
  assert.equal(url, DEFAULT_OG_CONFIG.dynamicEndpoint);
});

test('buildOgImageUrl constructs valid query params for custom title and badge', () => {
  const url = buildOgImageUrl({
    title: 'SDCANTEEN - Backend Project',
    badge: '🚀 Featured Project',
  });

  const parsed = new URL(url);
  assert.equal(parsed.pathname, '/og-image.png');
  assert.equal(parsed.searchParams.get('title'), 'SDCANTEEN - Backend Project');
  assert.equal(parsed.searchParams.get('badge'), '🚀 Featured Project');
});

test('buildOgImageUrl supports relative URLs for local dev', () => {
  const url = buildOgImageUrl({ title: 'Local Preview' }, { relative: true });
  assert.ok(url.startsWith('/og-image.png?title=Local+Preview'));
});

test('isValidOgImageUrl validates absolute URLs correctly', () => {
  assert.equal(isValidOgImageUrl('https://gwynethashleymucio.vercel.app/og-image.png'), true);
  assert.equal(isValidOgImageUrl('http://localhost:3000/og-image.png'), true);
  assert.equal(isValidOgImageUrl('/og-image.png'), false);
  assert.equal(isValidOgImageUrl('invalid-url'), false);
});

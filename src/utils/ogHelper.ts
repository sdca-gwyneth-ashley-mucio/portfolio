export interface OgImageParams {
  title?: string;
  subtitle?: string;
  badge?: string;
  institution?: string;
  tags?: string[];
}

export const DEFAULT_OG_CONFIG = {
  title: 'Gwyneth Ashley Mucio',
  subtitle: 'BSIT Student & Backend Developer • St. Dominic College of Asia',
  badge: '🌸 Digital Garden & Portfolio',
  institution: 'St. Dominic College of Asia',
  tags: ['Java', 'SQL', 'Oracle APEX', 'Flutter', 'Firebase'],
  domain: 'https://gwynethashleymucio.vercel.app',
  fallbackImageUrl: 'https://gwynethashleymucio.vercel.app/og-image.png',
  dynamicEndpoint: 'https://gwynethashleymucio.vercel.app/api/og',
} as const;

/**
 * Builds an absolute or relative Open Graph image URL with query parameters.
 */
export function buildOgImageUrl(
  params?: OgImageParams,
  options?: { relative?: boolean; baseUrl?: string }
): string {
  const base = options?.relative
    ? '/api/og'
    : options?.baseUrl || DEFAULT_OG_CONFIG.dynamicEndpoint;

  if (!params) {
    return base;
  }

  const searchParams = new URLSearchParams();

  if (params.title && params.title !== DEFAULT_OG_CONFIG.title) {
    searchParams.set('title', params.title);
  }
  if (params.subtitle && params.subtitle !== DEFAULT_OG_CONFIG.subtitle) {
    searchParams.set('subtitle', params.subtitle);
  }
  if (params.badge && params.badge !== DEFAULT_OG_CONFIG.badge) {
    searchParams.set('badge', params.badge);
  }
  if (params.institution && params.institution !== DEFAULT_OG_CONFIG.institution) {
    searchParams.set('institution', params.institution);
  }
  if (params.tags && params.tags.length > 0) {
    searchParams.set('tags', params.tags.join(','));
  }

  const queryString = searchParams.toString();
  return queryString ? `${base}?${queryString}` : base;
}

/**
 * Validates that an image URL meets Open Graph requirements (absolute HTTP/HTTPS URL).
 */
export function isValidOgImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

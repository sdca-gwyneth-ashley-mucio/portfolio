import {
  CERTIFICATIONS_DATA,
  PROJECTS_DATA,
  TECH_STACK_DATA,
} from '../data/portfolioData.ts';
import type { CertificationItem, TechStackItem } from '../data/portfolioData.ts';

/**
 * Returns the tech stack items for a single category, preserving data order.
 */
export function getTechByCategory(
  items: TechStackItem[],
  category: TechStackItem['category']
): TechStackItem[] {
  return items.filter((item) => item.category === category);
}

/**
 * Looks up a certification by id. Returns null when it doesn't exist or has
 * no scan yet, so callers never open an empty certificate viewer.
 */
export function getViewableCertificate(id: string | null): CertificationItem | null {
  if (!id) return null;
  const cert = CERTIFICATIONS_DATA.find((c) => c.id === id);
  return cert?.certificateImage ? cert : null;
}

/**
 * Live counts for the hero snapshot strip, derived from the data so the
 * numbers can never drift out of sync with the content.
 */
export function getPortfolioSummaryCounts() {
  return {
    projectsCount: PROJECTS_DATA.length,
    completedProjectsCount: PROJECTS_DATA.filter((p) => p.status === 'Completed').length,
    certificationsCount: CERTIFICATIONS_DATA.length,
    scannedCertificationsCount: CERTIFICATIONS_DATA.filter((c) => c.certificateImage).length,
    techCount: TECH_STACK_DATA.length,
  };
}

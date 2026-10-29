import {
  CERTIFICATIONS_DATA,
  EVIDENCE_MODAL_REGISTRY,
  EDUCATIONAL_BACKGROUND_DATA,
  EvidenceModalPayload,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  SKILLS_DATA,
  SkillCategoryFilter,
  SkillItem,
} from '../data/portfolioData';

/**
 * Filters skills by category ('All Skills', 'Professional Skills', or 'Academic & Technical Foundations').
 */
export function filterSkillsByCategory(
  skills: SkillItem[],
  category: SkillCategoryFilter
): SkillItem[] {
  if (category === 'All Skills') {
    return skills;
  }
  return skills.filter((skill) => skill.category === category);
}

/**
 * Resolves an evidence or modal payload by ID, returning a safe fallback if unknown.
 */
export function getEvidenceById(evidenceId: string): EvidenceModalPayload {
  const found = EVIDENCE_MODAL_REGISTRY[evidenceId];
  if (found) {
    return found;
  }
  return {
    id: evidenceId,
    type: 'certificate',
    title: 'Verified Portfolio Credential',
    subtitle: 'Gwyneth Ashley Mucio — BSIT Portfolio',
    holderName: PERSONAL_INFO_DATA.fullName,
    contextLabel: PERSONAL_INFO_DATA.institution,
    summary: 'Verified portfolio record for Gwyneth Ashley Mucio.',
    highlights: [
      `Holder: ${PERSONAL_INFO_DATA.fullName}`,
      `Institution: ${PERSONAL_INFO_DATA.institution}`,
    ],
    accentTheme: 'matcha',
  };
}

/**
 * Computes summary metrics for Gwyneth Ashley Mucio's portfolio.
 */
export function getPortfolioSummaryCounts() {
  const professionalSkillsCount = SKILLS_DATA.filter(
    (s) => s.category === 'Professional Skills'
  ).length;
  const technicalFoundationsCount = SKILLS_DATA.filter(
    (s) => s.category === 'Academic & Technical Foundations'
  ).length;

  return {
    fullName: PERSONAL_INFO_DATA.fullName,
    certificationsCount: CERTIFICATIONS_DATA.length,
    educationCount: EDUCATIONAL_BACKGROUND_DATA.length,
    courseworkCount: EDUCATIONAL_BACKGROUND_DATA[0].coursework?.length ?? 0,
    professionalSkillsCount,
    technicalFoundationsCount,
    totalSkillsCount: SKILLS_DATA.length,
    languagesCount: LANGUAGES_DATA.length,
    summarySentenceCount: PERSONAL_INFO_DATA.summarySentences.length,
  };
}

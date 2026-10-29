import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CAPSTONE_PROJECT_DATA,
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';
import {
  filterSkillsByCategory,
  getEvidenceById,
  getPortfolioSummaryCounts,
} from './portfolioLogic';

test('Personal information matches Gwyneth Ashley Mucio exact details and has at least 3 summary sentences', () => {
  assert.equal(PERSONAL_INFO_DATA.fullName, 'Gwyneth Ashley Mucio');
  assert.equal(PERSONAL_INFO_DATA.phone, '09754422395');
  assert.equal(PERSONAL_INFO_DATA.email, 'mucioashley@gmail.com');
  assert.equal(
    PERSONAL_INFO_DATA.address,
    'Blk 6 Lot 21, Habay 1, San Carlos Villa, Bacoor City, Cavite'
  );
  assert.ok(PERSONAL_INFO_DATA.summarySentences.length >= 3);
});

test('Educational background contains BSIT at St. Dominic College of Asia and HUMSS at St. Michael\'s Institute', () => {
  assert.equal(EDUCATIONAL_BACKGROUND_DATA.length, 2);
  assert.equal(
    EDUCATIONAL_BACKGROUND_DATA[0].institution,
    'St. Dominic College of Asia'
  );
  assert.equal(EDUCATIONAL_BACKGROUND_DATA[0].period, '2023–Present');
  assert.deepEqual(EDUCATIONAL_BACKGROUND_DATA[0].coursework, [
    'Process Design',
    'Project Management',
    'Database Management',
    'Systems Analysis',
    'Software Development',
  ]);
  assert.equal(
    EDUCATIONAL_BACKGROUND_DATA[1].institution,
    "St. Michael's Institute, Inc."
  );
  assert.equal(EDUCATIONAL_BACKGROUND_DATA[1].period, '2017–2023');
});

test('filterSkillsByCategory separates Professional Skills and Academic & Technical Foundations', () => {
  const all = filterSkillsByCategory(SKILLS_DATA, 'All Skills');
  const prof = filterSkillsByCategory(SKILLS_DATA, 'Professional Skills');
  const tech = filterSkillsByCategory(
    SKILLS_DATA,
    'Academic & Technical Foundations'
  );

  assert.equal(prof.length, 9);
  assert.equal(tech.length, 5);
  assert.equal(all.length, 14);
});

test('Certifications, Languages, and DC SPACE Capstone match exact specifications', () => {
  assert.equal(CERTIFICATIONS_DATA.length, 5);
  const certTitles = CERTIFICATIONS_DATA.map((c) => c.title);
  assert.deepEqual(certTitles, [
    'Microsoft Word Certification',
    'Microsoft PowerPoint Certification',
    'SQL Certification',
    'HTML and CSS Certification',
    'Cybersecurity Certification',
  ]);

  assert.equal(LANGUAGES_DATA.length, 2);
  assert.equal(LANGUAGES_DATA[0].language, 'Tagalog');
  assert.equal(LANGUAGES_DATA[0].proficiency, 'Native');
  assert.equal(LANGUAGES_DATA[1].language, 'English');
  assert.equal(LANGUAGES_DATA[1].proficiency, 'Intermediate');

  assert.ok(CAPSTONE_PROJECT_DATA.title.startsWith('DC SPACE:'));
  assert.equal(CAPSTONE_PROJECT_DATA.projectType, 'Capstone Project');
});

test('getEvidenceById and getPortfolioSummaryCounts return accurate records', () => {
  const sqlCert = getEvidenceById('ev-cert-sql');
  assert.equal(sqlCert.title, 'SQL Certification');
  assert.equal(sqlCert.holderName, 'Gwyneth Ashley Mucio');

  const counts = getPortfolioSummaryCounts();
  assert.equal(counts.certificationsCount, 5);
  assert.equal(counts.professionalSkillsCount, 9);
});

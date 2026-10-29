import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  PROJECTS_DATA,
  TECH_STACK_CATEGORIES,
  TECH_STACK_DATA,
} from '../data/portfolioData.ts';
import {
  getPortfolioSummaryCounts,
  getTechByCategory,
  getViewableCertificate,
} from './portfolioLogic.ts';

test('personal info exposes only public-safe contact details', () => {
  assert.equal(PERSONAL_INFO_DATA.fullName, 'Gwyneth Ashley Mucio');
  assert.equal(PERSONAL_INFO_DATA.email, 'mucioashley@gmail.com');
  assert.equal(PERSONAL_INFO_DATA.publicLocation, 'Bacoor City, Cavite');

  const serialized = JSON.stringify(PERSONAL_INFO_DATA);
  assert.ok(!/\d{11}/.test(serialized), 'no phone number should be present');
  assert.ok(!/Blk|Lot|Habay/i.test(serialized), 'no street address should be present');
});

test('resume PDF path points into /public', () => {
  assert.equal(PERSONAL_INFO_DATA.resumeUrl, '/Gwyneth_Ashley_Mucio_Resume.pdf');
});

test('education matches resume', () => {
  assert.equal(EDUCATIONAL_BACKGROUND_DATA.length, 2);
  assert.equal(EDUCATIONAL_BACKGROUND_DATA[0].institution, 'St. Dominic College of Asia');
  assert.equal(EDUCATIONAL_BACKGROUND_DATA[0].period, '2023–Present');
  assert.equal(EDUCATIONAL_BACKGROUND_DATA[1].institution, "St. Michael's Institute, Inc.");
});

test('projects list SDCANTEEN first with confirmed roles and statuses', () => {
  assert.deepEqual(
    PROJECTS_DATA.map((p) => [p.title, p.role, p.status]),
    [
      ['SDCANTEEN', 'Backend Developer', 'Completed'],
      ['DC SPACE', 'Documentation', 'Ongoing'],
    ]
  );
});

test('every tech item belongs to a known category', () => {
  for (const item of TECH_STACK_DATA) {
    assert.ok(TECH_STACK_CATEGORIES.includes(item.category), item.name);
  }
  assert.deepEqual(
    getTechByCategory(TECH_STACK_DATA, 'Frameworks & Platforms').map((t) => t.name),
    ['Flutter', 'Firebase', 'Oracle APEX']
  );
  assert.ok(!TECH_STACK_DATA.some((t) => t.name === 'LinkedIn'));
});

test('certificates: 5 listed, only scanned ones are viewable', () => {
  assert.equal(CERTIFICATIONS_DATA.length, 5);
  assert.equal(getViewableCertificate('cert-ms-word')?.date, 'March 14, 2024');
  assert.equal(getViewableCertificate('cert-database')?.title, 'Database Certification');
  assert.equal(getViewableCertificate('cert-html-css'), null);
  assert.equal(getViewableCertificate('cert-cybersecurity'), null);
  assert.equal(getViewableCertificate('does-not-exist'), null);
  assert.equal(getViewableCertificate(null), null);
});

test('summary counts are derived from data', () => {
  const counts = getPortfolioSummaryCounts();
  assert.equal(counts.projectsCount, 2);
  assert.equal(counts.completedProjectsCount, 1);
  assert.equal(counts.certificationsCount, 5);
  assert.equal(counts.scannedCertificationsCount, 3);
  assert.equal(counts.techCount, TECH_STACK_DATA.length);
});

test('languages', () => {
  assert.deepEqual(
    LANGUAGES_DATA.map((l) => `${l.language}:${l.proficiency}`),
    ['Tagalog:Native', 'English:Intermediate']
  );
});

import React, { useState } from 'react';
import {
  CAPSTONE_PROJECT_DATA,
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  SKILLS_DATA,
  SkillCategoryFilter,
} from './data/portfolioData';
import {
  filterSkillsByCategory,
  getEvidenceById,
} from './utils/portfolioLogic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EvidenceModal } from './components/EvidenceModal';
import {
  GraduationCap,
  Sparkles,
  Globe2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  BookOpen,
} from 'lucide-react';

const PASTEL_PILL_CLASSES: Record<
  'matcha' | 'blush' | 'butter' | 'lavender' | 'sky',
  string
> = {
  matcha: 'bg-[#D8E8D5] text-[#2E5A36]',
  blush: 'bg-[#FCE1E4] text-[#8A2E3B]',
  butter: 'bg-[#FFF3B0] text-[#7A5C12]',
  lavender: 'bg-[#EDE7F6] text-[#4A3570]',
  sky: 'bg-[#E0E7FF] text-[#2D3A8C]',
};

const SKILL_CATEGORIES: SkillCategoryFilter[] = [
  'All Skills',
  'Professional Skills',
  'Academic & Technical Foundations',
];

export default function App() {
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState<SkillCategoryFilter>('All Skills');
  const [activeEvidenceId, setActiveEvidenceId] = useState<string | null>(null);

  const filteredSkills = filterSkillsByCategory(
    SKILLS_DATA,
    selectedSkillCategory
  );

  const activeEvidencePayload = activeEvidenceId
    ? getEvidenceById(activeEvidenceId)
    : null;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D352E] pb-16">
      {/* Sticky Glassmorphic Navigation Bar */}
      <Navbar onOpenResume={() => setActiveEvidenceId('ev-resume')} />

      <main className="space-y-16 sm:space-y-20">
        {/* 🌸 HERO & PERSONAL INFORMATION SECTION */}
        <HeroSection onOpenEvidence={(id) => setActiveEvidenceId(id)} />

        {/* ✨ ABOUT ME / PROFESSIONAL SUMMARY SECTION */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🌱 ABOUT ME · PROFESSIONAL SUMMARY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              About Me / Professional Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Professional Summary Prose Card */}
            <div className="lg:col-span-8 cozy-card p-6 sm:p-9 flex flex-col justify-between">
              <div className="space-y-4 text-base sm:text-lg text-[#3D352E] leading-relaxed">
                {PERSONAL_INFO_DATA.summarySentences.map((sentence, idx) => (
                  <p key={idx}>{sentence}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6F66]">
                <span>
                  ✨ Motivated · Adaptable · Detail-Oriented · Collaborative &amp; Independent
                </span>
                <button
                  type="button"
                  onClick={() => setActiveEvidenceId('ev-resume')}
                  className="spring-btn rounded-full bg-[#D8E8D5] px-4 py-1.5 font-bold text-[#2E5A36] cursor-pointer"
                >
                  [ 📄 Open Full One-Page Resume ]
                </button>
              </div>
            </div>

            {/* Personal Information Card */}
            <div className="lg:col-span-4 cozy-card p-6 sm:p-8 bg-gradient-to-br from-white to-[#FCE1E4]/25 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#FCE1E4] px-3 py-1 text-xs font-bold text-[#8A2E3B] mb-3">
                  📇 Personal Information
                </span>
                <h3 className="font-heading text-xl font-bold text-[#3D352E] mb-4">
                  Direct Contact Details
                </h3>

                <div className="space-y-3.5 text-sm text-[#3D352E]">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5">
                    <p className="text-xs font-bold text-[#7A6F66] mb-0.5">
                      Full Name
                    </p>
                    <p className="font-heading font-bold text-base text-[#3D352E]">
                      {PERSONAL_INFO_DATA.fullName}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#2E5A36] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO_DATA.phone}`}
                        className="font-semibold hover:text-[#2E5A36] tabular-nums"
                      >
                        {PERSONAL_INFO_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#8A2E3B] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO_DATA.email}`}
                        className="font-semibold text-[#8A2E3B] hover:underline break-all"
                      >
                        {PERSONAL_INFO_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Address</p>
                      <p className="font-medium leading-snug">
                        {PERSONAL_INFO_DATA.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎓 EDUCATIONAL BACKGROUND SECTION */}
        <section
          id="education"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#FFF3B0] px-3.5 py-1 text-xs font-bold text-[#7A5C12] mb-2">
              🎓 ACADEMIC JOURNEY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Educational Background
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {EDUCATIONAL_BACKGROUND_DATA.map((edu, index) => (
              <article
                key={edu.id}
                className={`${
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                } cozy-card p-6 sm:p-8 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
                        PASTEL_PILL_CLASSES[edu.accent]
                      }`}
                    >
                      <GraduationCap className="h-4 w-4" />
                      {edu.statusBadge}
                    </span>
                    <span className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-1 text-xs font-bold text-[#3D352E] tabular-nums">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] mb-2">
                    {index + 1}. {edu.degreeOrTrack}
                  </h3>

                  <p className="text-base font-bold text-[#2E5A36]">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-sm text-[#7A6F66] mt-0.5">
                      📍 {edu.location}
                    </p>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#F0EAE1]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66] mb-3 flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4 text-[#2E5A36]" />
                        Relevant Coursework:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {edu.coursework.map((course) => (
                          <div
                            key={course}
                            className="rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-2.5 text-sm font-semibold text-[#3D352E] flex items-center gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#2E5A36] shrink-0" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
                  <span>Academic Record #{index + 1}</span>
                  <span className="font-semibold text-[#2E5A36]">
                    ✓ Verified Education History
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 💡 SKILLS & LANGUAGES SECTION */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#EDE7F6] px-3.5 py-1 text-xs font-bold text-[#4A3570] mb-2">
                💡 COMPETENCIES &amp; COMMUNICATION
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                Skills &amp; Languages
              </h2>
            </div>

            {/* Interactive Skill Filter Buttons */}
            <div
              role="group"
              aria-label="Filter skills by category"
              className="flex flex-wrap items-center gap-2"
            >
              {SKILL_CATEGORIES.map((category) => {
                const isActive = selectedSkillCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedSkillCategory(category)}
                    aria-pressed={isActive}
                    className={`spring-btn rounded-full px-4 py-2 text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#3D352E] text-white shadow-sm'
                        : 'bg-white border border-[#F0EAE1] text-[#7A6F66] hover:text-[#3D352E] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filteredSkills.map((skill) => (
              <article
                key={skill.id}
                className="cozy-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        PASTEL_PILL_CLASSES[skill.accent]
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#3D352E] mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-[#7A6F66] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dedicated Languages Sub-Section */}
          <div className="cozy-card p-6 sm:p-8 bg-gradient-to-r from-white via-[#FAF7F2] to-[#E0E7FF]/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E0E7FF] px-3 py-1 text-xs font-bold text-[#2D3A8C] mb-1.5">
                  <Globe2 className="h-3.5 w-3.5" />
                  LANGUAGES
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E]">
                  Spoken &amp; Written Languages
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {LANGUAGES_DATA.map((lang) => (
                <div
                  key={lang.id}
                  className="rounded-2xl bg-white border border-[#F0EAE1] p-5 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="font-heading text-lg font-bold text-[#3D352E]">
                      {lang.language} –{' '}
                      <span className="text-[#2E5A36]">{lang.proficiency}</span>
                    </p>
                    <p className="text-sm text-[#7A6F66] mt-1">
                      {lang.description}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3.5 py-1 text-xs font-bold shrink-0 ${
                      PASTEL_PILL_CLASSES[lang.accent]
                    }`}
                  >
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 PROJECTS / CAPSTONE PROJECT SECTION */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🚀 PROJECTS · CAPSTONE SHOWCASE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Projects
            </h2>
          </div>

          <div className="cozy-card p-6 sm:p-10 bg-gradient-to-br from-white via-white to-[#D8E8D5]/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3B0] px-4 py-1 text-xs font-bold text-[#7A5C12]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Project Type: {CAPSTONE_PROJECT_DATA.projectType}
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E] leading-snug">
                  {CAPSTONE_PROJECT_DATA.title}
                </h3>

                <p className="text-base sm:text-lg text-[#3D352E] leading-relaxed">
                  {CAPSTONE_PROJECT_DATA.description}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66] mb-2.5">
                    Key Capstone Focus Pillars:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CAPSTONE_PROJECT_DATA.coreFocusAreas.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full bg-white border border-[#F0EAE1] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#2E5A36]"
                      >
                        ✓ {pillar}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveEvidenceId(CAPSTONE_PROJECT_DATA.evidenceId)
                    }
                    className="spring-btn rounded-full bg-[#3D352E] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#2E5A36] cursor-pointer"
                  >
                    [ 📊 View Capstone Intelligence Workflow ]
                  </button>
                </div>
              </div>

              {/* Right 5 Cols: Visual Architecture Card for DC SPACE */}
              <div className="lg:col-span-5 rounded-3xl border border-[#F0EAE1] bg-[#FAF7F2] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2E5A36]">
                    ✨ {CAPSTONE_PROJECT_DATA.shortTitle} Overview
                  </span>
                  <span className="rounded-full bg-[#D8E8D5] px-3 py-0.5 text-xs font-bold text-[#2E5A36]">
                    {CAPSTONE_PROJECT_DATA.projectType}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
                    <p className="text-xs font-bold text-[#2D3A8C] mb-1">
                      01 · Event-Related Data Analysis
                    </p>
                    <p className="text-xs text-[#7A6F66]">
                      Processes event-related data to uncover patterns that inform crowd flow and venue readiness.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
                    <p className="text-xs font-bold text-[#8A2E3B] mb-1">
                      02 · Predictive Crowd Management
                    </p>
                    <p className="text-xs text-[#7A6F66]">
                      Forecasts crowd conditions to assist organizers in proactive safety and congestion prevention.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
                    <p className="text-xs font-bold text-[#2E5A36] mb-1">
                      03 · Adaptive Event Optimization
                    </p>
                    <p className="text-xs text-[#7A6F66]">
                      Delivers data-driven insights to strengthen event planning and overall operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎀 CERTIFICATIONS SECTION */}
        <section
          id="certifications"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#FCE1E4] px-3.5 py-1 text-xs font-bold text-[#8A2E3B] mb-2">
                🎀 VERIFIED CREDENTIALS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                Certifications
              </h2>
            </div>
            <p className="text-sm text-[#7A6F66]">
              Click any <strong className="text-[#3D352E]">[ ↗ View Certificate ]</strong> button to inspect the credential details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <article
                key={cert.id}
                className="cozy-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
                        PASTEL_PILL_CLASSES[cert.accent]
                      }`}
                    >
                      <span>{cert.badgeEmoji}</span>
                      <span>{cert.categoryLabel}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#7A6F66] tabular-nums">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#3D352E] mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-[#7A6F66] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#7A6F66]">
                    Holder: Gwyneth Ashley Mucio
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveEvidenceId(cert.evidenceId)}
                    className={`spring-btn rounded-full px-4 py-2 text-xs font-bold cursor-pointer whitespace-nowrap shrink-0 ${
                      PASTEL_PILL_CLASSES[cert.accent]
                    }`}
                  >
                    [ ↗ View Certificate ]
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 🌸 COZY FOOTER */}
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
          <div className="cozy-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#7A6F66]">
            <div>
              <p className="font-heading font-bold text-base text-[#3D352E]">
                🍵 {PERSONAL_INFO_DATA.fullName}
              </p>
              <p className="mt-0.5">
                BSIT Student · {PERSONAL_INFO_DATA.institution} ·{' '}
                {PERSONAL_INFO_DATA.address}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveEvidenceId('ev-contact')}
                className="hover:text-[#2E5A36] font-semibold cursor-pointer"
              >
                {PERSONAL_INFO_DATA.email}
              </button>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${PERSONAL_INFO_DATA.phone}`}
                className="hover:text-[#2E5A36] font-semibold tabular-nums"
              >
                {PERSONAL_INFO_DATA.phone}
              </a>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setActiveEvidenceId('ev-resume')}
                className="hover:text-[#2E5A36] font-semibold cursor-pointer"
              >
                One-Page Resume
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Interactive Certificate, Capstone & One-Page Resume Lightbox Modal */}
      <EvidenceModal
        evidence={activeEvidencePayload}
        onClose={() => setActiveEvidenceId(null)}
      />
    </div>
  );
}

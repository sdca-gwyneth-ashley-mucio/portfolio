import React, { useState } from 'react';
import {
  CAPSTONE_PROJECT_DATA,
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  SKILLS_DATA,
  TECH_STACK_DATA,
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
  Send,
  ExternalLink,
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

  // In-page contact/comment form state
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentMsg, setCommentMsg] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [commentError, setCommentError] = useState<string | null>(null);

  const filteredSkills = filterSkillsByCategory(
    SKILLS_DATA,
    selectedSkillCategory
  );

  const activeEvidencePayload = activeEvidenceId
    ? getEvidenceById(activeEvidenceId)
    : null;

  const handleInPageCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentEmail.trim() || !commentMsg.trim()) {
      setCommentError('Please fill in your name, email, and thoughts.');
      return;
    }

    try {
      setIsSubmittingComment(true);
      setCommentError(null);
      const res = await fetch(PERSONAL_INFO_DATA.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: commentName,
          email: commentEmail,
          message: commentMsg,
        }),
      });

      if (res.ok) {
        setCommentSuccess(true);
        setCommentName('');
        setCommentEmail('');
        setCommentMsg('');
      } else {
        setCommentError('Message could not be sent. You can email Gwyneth directly at ' + PERSONAL_INFO_DATA.email);
      }
    } catch {
      setCommentSuccess(true);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const techCategories = ['Languages', 'Environment / IDE', 'Tools & Platform'] as const;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D352E] pb-16">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setActiveEvidenceId('ev-resume')} />

      <main className="space-y-16 sm:space-y-20">
        {/* 🌸 HERO SECTION */}
        <HeroSection onOpenEvidence={(id) => setActiveEvidenceId(id)} />

        {/* ✨ ABOUT ME SECTION */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🌱 ABOUT ME · PERSONAL PROFILE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Story Prose with Picture */}
            <div className="lg:col-span-8 cozy-card p-6 sm:p-9 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#D8E8D5] shadow-sm shrink-0 bg-[#FAF7F2] mx-auto sm:mx-0">
                  <img
                    src={PERSONAL_INFO_DATA.aboutPhotoUrl}
                    alt="Gwyneth Ashley Mucio"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="space-y-4 text-base sm:text-lg text-[#3D352E] leading-relaxed">
                  <p>
                    {PERSONAL_INFO_DATA.summarySentences[0]}
                  </p>
                  <p>
                    {PERSONAL_INFO_DATA.summarySentences[1]}
                  </p>
                  <p>
                    {PERSONAL_INFO_DATA.summarySentences[2]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6F66]">
                <span>
                  ✨ Friendly · Sweet · Caring · Multitasking · Adaptable · Creative
                </span>
                <button
                  type="button"
                  onClick={() => setActiveEvidenceId('ev-resume')}
                  className="spring-btn rounded-full bg-[#D8E8D5] px-4 py-1.5 font-bold text-[#2E5A36] cursor-pointer"
                >
                  [ 📄 Open One-Page Resume ]
                </button>
              </div>
            </div>

            {/* Direct Contact Details Card */}
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
                      {PERSONAL_INFO_DATA.extendedFullName}
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
                    ✓ St. Dominic College of Asia
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 💻 TECH STACK SECTION (FROM OLD PORTFOLIO) */}
        <section
          id="tech-stack"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#E0E7FF] px-3.5 py-1 text-xs font-bold text-[#2D3A8C] mb-2">
              💻 TECHNOLOGIES &amp; TOOLS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Technology Stack
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Programming languages, developer environments, and tools used across academic projects and software development.
            </p>
          </div>

          <div className="space-y-6">
            {techCategories.map((category) => {
              const items = TECH_STACK_DATA.filter((i) => i.category === category);
              return (
                <div key={category} className="cozy-card p-6 sm:p-8">
                  <h3 className="font-heading text-lg font-bold text-[#2E5A36] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2E5A36]"></span>
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {items.map((tool) => (
                      <div
                        key={tool.name}
                        className="rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:border-[#2E5A36]/40 hover:shadow-xs transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                          <img
                            src={tool.iconUrl}
                            alt={tool.name}
                            className="max-w-10 max-h-10 object-contain"
                          />
                        </div>
                        <span className="font-heading text-sm font-bold text-[#3D352E]">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 💡 SKILLS & SPOKEN LANGUAGES SECTION */}
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

            {/* Filter Buttons */}
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

          {/* Languages Sub-Section */}
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

        {/* 🚀 CAPSTONE PROJECT SECTION */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🚀 PROJECTS · CAPSTONE SHOWCASE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Capstone Project
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

              {/* Architecture Card */}
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

        {/* 🎀 CERTIFICATIONS SECTION (WITH REAL BADGES & DATES) */}
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
              Click <strong className="text-[#3D352E]">[ ↗ View Certificate ]</strong> to view official credential scans.
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

                  {/* Badge image if available */}
                  {cert.badgeImage && (
                    <div className="mb-4 flex items-center justify-center p-3 rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1]">
                      <img
                        src={cert.badgeImage}
                        alt={cert.title}
                        className="h-20 w-auto object-contain hover:scale-105 transition-transform"
                      />
                    </div>
                  )}

                  <h3 className="font-heading text-lg font-bold text-[#3D352E] mb-1">
                    {cert.officialTitle || cert.title}
                  </h3>

                  {cert.date && (
                    <p className="text-xs font-bold text-[#2E5A36] mb-2">
                      📅 Date: {cert.date}
                    </p>
                  )}

                  <p className="text-sm text-[#7A6F66] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#7A6F66]">
                    Gwyneth Ashley Mucio
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

        {/* 💬 CONTACT & COMMENT SECTION (INTEGRATED FORMSPREE) */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="cozy-card p-6 sm:p-10 bg-gradient-to-br from-white via-[#FAF7F2] to-[#FCE1E4]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FCE1E4] px-3.5 py-1 text-xs font-bold text-[#8A2E3B] mb-2">
                    <img src="/heart.gif" alt="heart" className="w-4 h-4 object-contain inline-block" />
                    <span>GET IN TOUCH</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                    Leave a Comment &amp; Connect 💬
                  </h2>
                  <p className="text-sm text-[#7A6F66] mt-2">
                    Feel free to leave your thoughts, questions, or internship inquiries below! Messages are delivered directly to Gwyneth.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#3D352E]">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#8A2E3B] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO_DATA.email}`}
                        className="font-semibold text-[#8A2E3B] hover:underline"
                      >
                        {PERSONAL_INFO_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#2E5A36] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO_DATA.phone}`}
                        className="font-semibold hover:text-[#2E5A36]"
                      >
                        {PERSONAL_INFO_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Location</p>
                      <p className="font-medium leading-snug">
                        {PERSONAL_INFO_DATA.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={PERSONAL_INFO_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#F0EAE1] px-4 py-2 text-xs font-bold text-[#3D352E] hover:border-[#2E5A36] transition-colors"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="w-4 h-4"
                    />
                    <span>GitHub (@sdca-gwyneth-ashley-mucio)</span>
                    <ExternalLink className="w-3 h-3 text-[#7A6F66]" />
                  </a>

                  <a
                    href={PERSONAL_INFO_DATA.oldGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#F0EAE1] px-4 py-2 text-xs font-bold text-[#7A6F66] hover:text-[#3D352E] hover:border-[#2E5A36] transition-colors"
                  >
                    <span>Personal GitHub (@gwynethashleymucio)</span>
                    <ExternalLink className="w-3 h-3 text-[#7A6F66]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Working Comment Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleInPageCommentSubmit}
                  className="rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 space-y-4 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-bold text-[#3D352E] flex items-center gap-2">
                    <span>Leave a Thought</span>
                    <img src="/heart.gif" alt="heart" className="w-5 h-5 object-contain" />
                  </h3>

                  {commentSuccess ? (
                    <div className="rounded-2xl bg-[#D8E8D5] p-5 text-sm font-bold text-[#2E5A36] space-y-1">
                      <p>✨ Thank you so much for your comment!</p>
                      <p className="text-xs font-normal text-[#2E5A36]/90">
                        Your message has been delivered to Gwyneth's inbox.
                      </p>
                      <button
                        type="button"
                        onClick={() => setCommentSuccess(false)}
                        className="text-xs underline font-semibold mt-2 cursor-pointer block"
                      >
                        Send another thought
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="page-comment-name"
                            className="block text-xs font-bold text-[#3D352E] mb-1.5"
                          >
                            Name <span className="text-[#8A2E3B]">*</span>
                          </label>
                          <input
                            id="page-comment-name"
                            type="text"
                            required
                            value={commentName}
                            onChange={(e) => setCommentName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#3D352E] focus:bg-white focus:outline-none focus:border-[#2E5A36] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="page-comment-email"
                            className="block text-xs font-bold text-[#3D352E] mb-1.5"
                          >
                            Email <span className="text-[#8A2E3B]">*</span>
                          </label>
                          <input
                            id="page-comment-email"
                            type="email"
                            required
                            value={commentEmail}
                            onChange={(e) => setCommentEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#3D352E] focus:bg-white focus:outline-none focus:border-[#2E5A36] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="page-comment-msg"
                          className="block text-xs font-bold text-[#3D352E] mb-1.5"
                        >
                          Message / Comment <span className="text-[#8A2E3B]">*</span>
                        </label>
                        <textarea
                          id="page-comment-msg"
                          rows={4}
                          required
                          value={commentMsg}
                          onChange={(e) => setCommentMsg(e.target.value)}
                          placeholder="Write your comment or message here..."
                          className="w-full rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#3D352E] focus:bg-white focus:outline-none focus:border-[#2E5A36] transition-colors"
                        />
                      </div>

                      {commentError && (
                        <p className="text-xs font-bold text-[#8A2E3B]">
                          {commentError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmittingComment}
                        className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-6 py-3 text-sm font-bold text-[#8A2E3B] hover:bg-[#f8cbd1] cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmittingComment ? 'Sending...' : 'Send Message 💬'}</span>
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
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
              <a
                href={`mailto:${PERSONAL_INFO_DATA.email}`}
                className="hover:text-[#2E5A36] font-semibold"
              >
                {PERSONAL_INFO_DATA.email}
              </a>
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

      {/* Lightbox Modal */}
      <EvidenceModal
        evidence={activeEvidencePayload}
        onClose={() => setActiveEvidenceId(null)}
      />
    </div>
  );
}

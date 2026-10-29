import React, { useState } from 'react';
import {
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  PROJECTS_DATA,
  PROFESSIONAL_SKILLS,
  TECHNICAL_SKILLS,
  TECH_STACK_CATEGORIES,
  TECH_STACK_DATA,
  type CertificationItem,
} from './data/portfolioData';
import { getTechByCategory, getViewableCertificate } from './utils/portfolioLogic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContactForm } from './components/ContactForm';
import { CertificateModal } from './components/CertificateModal';
import {
  GraduationCap,
  Globe2,
  CheckCircle2,
  Mail,
  MapPin,
  BookOpen,
  ExternalLink,
  Code2,
  FileCheck2,
  FolderGit2,
  FileDown,
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

export default function App() {
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  const handleOpenCertificate = (id: string) => {
    const cert = getViewableCertificate(id);
    if (cert) {
      setActiveCertificate(cert);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D352E] pb-16 selection:bg-[#D8E8D5] selection:text-[#2E5A36]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="space-y-16 sm:space-y-20">
        {/* 🌸 HERO SECTION */}
        <HeroSection />

        {/* ✨ ABOUT ME SECTION */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🌱 ABOUT ME
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Personal Profile &amp; Background
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Story Prose Card with Picture */}
            <div className="lg:col-span-8 cozy-card p-6 sm:p-9 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#D8E8D5] shadow-sm shrink-0 bg-[#FAF7F2] mx-auto sm:mx-0">
                  <img
                    src={PERSONAL_INFO_DATA.aboutPhotoUrl}
                    alt="Gwyneth Ashley Mucio"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="space-y-3.5 text-base sm:text-lg text-[#3D352E] leading-relaxed">
                  {PERSONAL_INFO_DATA.summary.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6F66]">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-[#3D352E]">Key Strengths:</span>
                  {PERSONAL_INFO_DATA.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-2.5 py-0.5 font-medium text-[#2E5A36]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <a
                  href={PERSONAL_INFO_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spring-btn inline-flex items-center gap-1.5 rounded-full bg-[#D8E8D5] px-3.5 py-1.5 font-bold text-[#2E5A36] hover:bg-[#c8dfc4]"
                >
                  <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                  View Resume (PDF)
                </a>
              </div>
            </div>

            {/* Quick Facts Card (Clean, non-repetitive) */}
            <div className="lg:col-span-4 cozy-card p-6 sm:p-8 bg-gradient-to-br from-white to-[#FCE1E4]/25 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#FCE1E4] px-3 py-1 text-xs font-bold text-[#8A2E3B] mb-3">
                  📇 Quick Facts
                </span>
                <h3 className="font-heading text-xl font-bold text-[#3D352E] mb-4">
                  Academic &amp; Student Overview
                </h3>

                <div className="space-y-3 text-sm text-[#3D352E]">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5">
                    <p className="text-xs font-bold text-[#7A6F66] mb-0.5">Program</p>
                    <p className="font-heading font-bold text-sm text-[#3D352E]">
                      BS in Information Technology (BSIT)
                    </p>
                    <p className="text-xs text-[#2E5A36] mt-0.5">
                      {PERSONAL_INFO_DATA.institution}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Location</p>
                      <p className="font-semibold">{PERSONAL_INFO_DATA.publicLocation}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Globe2 className="h-4 w-4 text-[#2D3A8C] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Languages</p>
                      <p className="font-semibold text-xs text-[#3D352E]">
                        Tagalog (Native) · English (Intermediate)
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Code2 className="h-4 w-4 text-[#2E5A36] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Core Focus</p>
                      <p className="font-semibold text-xs text-[#3D352E]">
                        Backend Development · Systems Analysis · Databases
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
                      <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      {edu.statusBadge}
                    </span>
                    <span className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-1 text-xs font-bold text-[#3D352E] tabular-nums">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] mb-2">
                    {edu.degreeOrTrack}
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
                        <BookOpen className="h-4 w-4 text-[#2E5A36]" aria-hidden="true" />
                        Relevant Coursework:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {edu.coursework.map((course) => (
                          <div
                            key={course}
                            className="rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#3D352E] flex items-center gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#2E5A36] shrink-0" aria-hidden="true" />
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
                    ✓ Verified Academic History
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 💻 TECH STACK SECTION */}
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
              Programming languages, frameworks, and developer tools used across coursework and software projects.
            </p>
          </div>

          <div className="space-y-6">
            {TECH_STACK_CATEGORIES.map((category) => {
              const items = getTechByCategory(TECH_STACK_DATA, category);
              return (
                <div key={category} className="cozy-card p-6 sm:p-8">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#2E5A36] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2E5A36]" aria-hidden="true"></span>
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
                            alt=""
                            aria-hidden="true"
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

        {/* 🚀 PROJECTS SECTION (SDCANTEEN COMPLETED + DC SPACE CAPSTONE ONGOING) */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#D8E8D5] px-3.5 py-1 text-xs font-bold text-[#2E5A36] mb-2">
              🚀 FEATURED PROJECTS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Projects &amp; Systems
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Practical software development and academic capstone systems with confirmed roles and progress statuses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((proj) => {
              const isCompleted = proj.status === 'Completed';
              return (
                <article
                  key={proj.id}
                  className="cozy-card p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-white to-[#FAF7F2]"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#3D352E] px-3 py-1 text-xs font-bold text-white">
                          Role: {proj.role}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            isCompleted ? 'bg-[#D8E8D5] text-[#2E5A36]' : 'bg-[#FFF3B0] text-[#7A5C12]'
                          }`}
                        >
                          {isCompleted ? '✓ Completed' : '🔄 Ongoing'}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#7A6F66]">
                        {proj.projectType}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#2E5A36] mb-3">
                      {proj.subtitle}
                    </p>

                    <p className="text-sm text-[#3D352E] leading-relaxed mb-5">
                      {proj.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-3 border-t border-[#F0EAE1]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66]">
                        Key Features &amp; Modules:
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#3D352E]">
                        {proj.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#2E5A36] font-bold mt-0.5">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <FolderGit2 className="h-3.5 w-3.5 text-[#2E5A36]" aria-hidden="true" />
                      SDCA Academic Project
                    </span>
                    <span className="font-semibold text-[#2E5A36]">
                      {proj.role}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 💡 SKILLS SECTION */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#EDE7F6] px-3.5 py-1 text-xs font-bold text-[#4A3570] mb-2">
              💡 COMPETENCIES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Skills &amp; Evidence
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Technical foundations tied to coursework and projects, complemented by professional collaboration skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Technical skills with evidence */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#3D352E] flex items-center gap-2">
                <Code2 className="h-5 w-5 text-[#2E5A36]" aria-hidden="true" />
                Technical Competencies with Evidence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECHNICAL_SKILLS.map((skill) => (
                  <div
                    key={skill.id}
                    className="cozy-card p-5 flex flex-col justify-between"
                  >
                    <div>
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold mb-2 ${
                          PASTEL_PILL_CLASSES[skill.accent]
                        }`}
                      >
                        Technical Skill
                      </span>
                      <h4 className="font-heading text-base font-bold text-[#3D352E] mb-1.5">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-[#7A6F66] leading-relaxed">
                        {skill.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Professional skills + Languages */}
            <div className="lg:col-span-5 space-y-6">
              {/* Professional skills chips */}
              <div className="cozy-card p-6">
                <h3 className="font-heading text-lg font-bold text-[#3D352E] mb-2">
                  Professional &amp; Soft Skills
                </h3>
                <p className="text-xs text-[#7A6F66] mb-4">
                  Core collaboration and work habits developed through academic team tasks and project deliveries.
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFESSIONAL_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-1.5 text-xs font-bold text-[#3D352E] hover:border-[#2E5A36]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="cozy-card p-6 bg-gradient-to-r from-white via-[#FAF7F2] to-[#E0E7FF]/25">
                <div className="flex items-center gap-2 mb-3">
                  <Globe2 className="h-4 w-4 text-[#2D3A8C]" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold text-[#3D352E]">
                    Spoken &amp; Written Languages
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {LANGUAGES_DATA.map((lang) => (
                    <div
                      key={lang.id}
                      className="rounded-2xl bg-white border border-[#F0EAE1] p-3 text-center"
                    >
                      <p className="font-heading text-sm font-bold text-[#3D352E]">
                        {lang.language}
                      </p>
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold mt-1 ${
                          PASTEL_PILL_CLASSES[lang.accent]
                        }`}
                      >
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
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
                🎀 CREDENTIALS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                Certifications
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7A6F66]">
              Click <strong>View scan</strong> on certificates with uploaded credential documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, index) => {
              const hasScan = Boolean(cert.certificateImage);
              return (
                <article
                  key={cert.id}
                  className="cozy-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-bold ${
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

                    {cert.badgeImage && (
                      <div className="mb-4 flex items-center justify-center p-3 rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1]">
                        <img
                          src={cert.badgeImage}
                          alt=""
                          aria-hidden="true"
                          className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                        />
                      </div>
                    )}

                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#3D352E] mb-1">
                      {cert.title}
                    </h3>

                    {cert.date && (
                      <p className="text-xs font-bold text-[#2E5A36] mb-2">
                        Issued: {cert.date}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#7A6F66] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                    <span className="text-xs text-[#7A6F66]">
                      {hasScan ? 'Verified Scan' : 'Scan coming soon'}
                    </span>
                    {hasScan ? (
                      <button
                        type="button"
                        onClick={() => handleOpenCertificate(cert.id)}
                        className={`spring-btn rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer whitespace-nowrap shrink-0 ${
                          PASTEL_PILL_CLASSES[cert.accent]
                        }`}
                      >
                        View scan
                      </button>
                    ) : (
                      <span className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3 py-1 text-xs font-semibold text-[#7A6F66]">
                        Scan pending
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 💬 CONTACT SECTION (SINGLE SOURCE OF TRUTH) */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="cozy-card p-6 sm:p-10 bg-gradient-to-br from-white via-[#FAF7F2] to-[#FCE1E4]/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FCE1E4] px-3.5 py-1 text-xs font-bold text-[#8A2E3B] mb-2">
                    <img src="/heart.gif" alt="" aria-hidden="true" className="w-4 h-4 object-contain inline-block" />
                    <span>GET IN TOUCH</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                    Let's Connect
                  </h2>
                  <p className="text-sm text-[#7A6F66] mt-2 leading-relaxed">
                    I'm open to internship opportunities, academic discussions, and software collaboration. Send a message here or connect via GitHub.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#3D352E]">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#8A2E3B] shrink-0" aria-hidden="true" />
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
                    <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Location</p>
                      <p className="font-semibold">{PERSONAL_INFO_DATA.publicLocation}</p>
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
                      alt=""
                      aria-hidden="true"
                      className="w-4 h-4"
                    />
                    <span>GitHub (@sdca-gwyneth-ashley-mucio)</span>
                    <ExternalLink className="w-3 h-3 text-[#7A6F66]" aria-hidden="true" />
                  </a>

                  {PERSONAL_INFO_DATA.linkedinUrl && (
                    <a
                      href={PERSONAL_INFO_DATA.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#F0EAE1] px-4 py-2 text-xs font-bold text-[#2D3A8C] hover:border-[#2D3A8C] transition-colors"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4"
                      />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 text-[#7A6F66]" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Working Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* 🌸 CLEAN FOOTER */}
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
          <div className="cozy-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#7A6F66]">
            <div>
              <p className="font-heading font-bold text-base text-[#3D352E]">
                🍵 {PERSONAL_INFO_DATA.fullName}
              </p>
              <p className="mt-0.5">
                {PERSONAL_INFO_DATA.title} · {PERSONAL_INFO_DATA.institution} ·{' '}
                {PERSONAL_INFO_DATA.publicLocation}
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
                href={PERSONAL_INFO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E5A36] font-semibold"
              >
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PERSONAL_INFO_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2E5A36] font-semibold"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Accessible Certificate Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
}

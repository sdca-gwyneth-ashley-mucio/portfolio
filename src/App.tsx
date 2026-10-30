import React, { useState } from 'react';
import { motion } from 'motion/react';
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
import { SocialPreviewModal } from './components/SocialPreviewModal';
import { DcSpaceSlideshow } from './components/DcSpaceSlideshow';
import { LocationPin } from './components/icons/LocationPin';
import {
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  SOFT_SPRING,
} from './utils/motionVariants';
import {
  GraduationCap,
  Globe2,
  CheckCircle2,
  Mail,
  BookOpen,
  ExternalLink,
  Code2,
  FolderGit2,
  FileDown,
  Share2,
} from 'lucide-react';

const PASTEL_PILL_CLASSES: Record<
  'matcha' | 'blush' | 'butter' | 'lavender' | 'sky',
  string
> = {
  matcha: 'bg-[#FCE1E4] text-[#8A2E3B]',
  blush: 'bg-[#FCE1E4] text-[#8A2E3B]',
  butter: 'bg-[#FFF3B0] text-[#7A5C12]',
  lavender: 'bg-[#EDE7F6] text-[#4A3570]',
  sky: 'bg-[#E0E7FF] text-[#2D3A8C]',
};

export default function App() {
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);
  const [socialPreviewOpen, setSocialPreviewOpen] = useState(false);

  const handleOpenCertificate = (id: string) => {
    const cert = getViewableCertificate(id);
    if (cert) {
      setActiveCertificate(cert);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D352E] pb-16 selection:bg-[#FCE1E4] selection:text-[#8A2E3B]">
      {/* WCAG 2.2 SC 2.4.1 Bypass Blocks: Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#8A2E3B] focus:text-white focus:font-bold focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FCE1E4]"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="space-y-16 sm:space-y-20 outline-none">
        {/* HERO SECTION */}
        <HeroSection />

        {/* FEATURED PROJECTS SECTION */}
        <motion.section
          id="projects"
          aria-labelledby="projects-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <h2 id="projects-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Featured Projects
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Practical software development and academic capstone systems with confirmed roles and progress statuses.
            </p>
          </div>

          <div className="space-y-8">
            {PROJECTS_DATA.map((proj) => {
              const isCompleted = proj.status === 'Completed';
              const isDcSpace = proj.id === 'proj-dc-space';

              if (isDcSpace) {
                return (
                  <motion.article
                    key={proj.id}
                    whileHover={{ y: -3 }}
                    transition={SOFT_SPRING}
                    className="cozy-card p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white via-white to-[#FAF7F2]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left Column: Details & Modules */}
                      <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div>
                          {/* Header Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-[#3D352E] px-3 py-1 text-xs font-bold text-white">
                                Role: {proj.role}
                              </span>
                              <span className="rounded-full px-3 py-1 text-xs font-bold inline-flex items-center gap-1.5 bg-[#FFF3B0] text-[#7A5C12]">
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-[#7A5C12] animate-pulse"
                                  aria-hidden="true"
                                />
                                Ongoing
                              </span>
                            </div>
                            <span className="text-xs font-bold text-[#7A6F66]">
                              {proj.projectType}
                            </span>
                          </div>

                          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E] mb-1">
                            {proj.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-[#8A2E3B] mb-3">
                            {proj.subtitle}
                          </p>

                          <p className="text-sm text-[#3D352E] leading-relaxed mb-6">
                            {proj.description}
                          </p>

                          {/* Features list */}
                          <div className="space-y-2 pt-4 border-t border-[#F0EAE1]">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66]">
                              Key Features &amp; Modules:
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-[#3D352E]">
                              {proj.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span
                                    className="text-[#8A2E3B] font-bold mt-0.5"
                                    aria-hidden="true"
                                  >
                                    •
                                  </span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
                          <span className="inline-flex items-center gap-1 font-medium">
                            <FolderGit2
                              className="h-3.5 w-3.5 text-[#8A2E3B]"
                              aria-hidden="true"
                            />
                            {proj.projectType}
                          </span>
                          <span className="font-semibold text-[#8A2E3B]">
                            {proj.role}
                          </span>
                        </div>
                      </div>

                      {/* Right Column: Full-Width Slideshow */}
                      <div className="lg:col-span-7">
                        <DcSpaceSlideshow />
                      </div>
                    </div>
                  </motion.article>
                );
              }

              // SDCANTEEN: Full Width with 2-Column Responsive Features Grid
              return (
                <motion.article
                  key={proj.id}
                  whileHover={{ y: -3 }}
                  transition={SOFT_SPRING}
                  className="cozy-card p-6 sm:p-8 bg-gradient-to-br from-white via-white to-[#FAF7F2]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#3D352E] px-3 py-1 text-xs font-bold text-white">
                        Role: {proj.role}
                      </span>
                      <span className="rounded-full px-3 py-1 text-xs font-bold inline-flex items-center gap-1.5 bg-[#FCE1E4] text-[#8A2E3B]">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#8A2E3B]"
                          aria-hidden="true"
                        />
                        Completed
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#7A6F66]">
                      {proj.projectType}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#8A2E3B] mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="text-sm text-[#3D352E] leading-relaxed mb-6 max-w-4xl">
                    {proj.description}
                  </p>

                  {/* Features in 2-column grid */}
                  <div className="pt-4 border-t border-[#F0EAE1]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66] mb-3">
                      Key Modules &amp; Systems Implemented:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 rounded-xl border border-[#F0EAE1] bg-white/70 p-3 text-xs sm:text-sm text-[#3D352E]"
                        >
                          <span
                            className="text-[#8A2E3B] font-bold mt-0.5"
                            aria-hidden="true"
                          >
                            ✔
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <FolderGit2
                        className="h-3.5 w-3.5 text-[#8A2E3B]"
                        aria-hidden="true"
                      />
                      {proj.projectType}
                    </span>
                    <span className="font-semibold text-[#8A2E3B]">
                      {proj.role}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* TECH STACK SECTION */}
        <motion.section
          id="tech-stack"
          aria-labelledby="tech-stack-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <h2 id="tech-stack-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
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
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#8A2E3B] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8A2E3B]" aria-hidden="true"></span>
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
                    {items.map((tool) => (
                      <motion.div
                        key={tool.name}
                        role="listitem"
                        whileHover={{ y: -3, scale: 1.03 }}
                        transition={SOFT_SPRING}
                        className="rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:border-[#8A2E3B]/40 hover:shadow-xs transition-colors group cursor-default"
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* COMPETENCIES / SKILLS SECTION */}
        <motion.section
          id="skills"
          aria-labelledby="skills-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <h2 id="skills-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Skills &amp; Competencies
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Technical foundations tied to coursework and projects, complemented by professional collaboration skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Technical skills */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#3D352E] flex items-center gap-2">
                <Code2 className="h-5 w-5 text-[#8A2E3B]" aria-hidden="true" />
                Technical Competencies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECHNICAL_SKILLS.map((skill) => (
                  <motion.div
                    key={skill.id}
                    whileHover={{ y: -3 }}
                    transition={SOFT_SPRING}
                    className="cozy-card p-5 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#3D352E] mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-[#7A6F66] leading-relaxed">
                        {skill.evidence}
                      </p>
                    </div>
                  </motion.div>
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
                <div className="flex flex-wrap gap-2" role="list" aria-label="Professional and Soft Skills">
                  {PROFESSIONAL_SKILLS.map((skill) => (
                    <motion.span
                      key={skill}
                      role="listitem"
                      whileHover={{ scale: 1.04 }}
                      transition={SOFT_SPRING}
                      className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-1.5 text-xs font-bold text-[#3D352E] hover:border-[#8A2E3B]/40 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
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
                <div className="grid grid-cols-2 gap-3" role="list" aria-label="Spoken and Written Languages">
                  {LANGUAGES_DATA.map((lang) => (
                    <div
                      key={lang.id}
                      role="listitem"
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
        </motion.section>

        {/* CERTIFICATIONS SECTION */}
        <motion.section
          id="certifications"
          aria-labelledby="certifications-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 id="certifications-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                Certifications &amp; Credentials
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7A6F66]">
              Click <strong>View certificate</strong> to inspect available credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, index) => {
              const hasScan = Boolean(cert.certificateImage);
              return (
                <motion.article
                  key={cert.id}
                  whileHover={{ y: -4 }}
                  transition={SOFT_SPRING}
                  className="cozy-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-bold ${
                          PASTEL_PILL_CLASSES[cert.accent]
                        }`}
                      >
                        <span>{cert.categoryLabel}</span>
                      </span>
                      <span className="text-xs font-semibold text-[#7A6F66] tabular-nums" aria-label={`Certificate index ${index + 1}`}>
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
                      <p className="text-xs font-bold text-[#8A2E3B] mb-2">
                        Issued: {cert.date}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#7A6F66] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                    <span className="text-xs text-[#7A6F66]">
                      {hasScan ? 'Verified Credential' : 'Document Pending'}
                    </span>
                    {hasScan ? (
                      <motion.button
                        type="button"
                        onClick={() => handleOpenCertificate(cert.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        transition={SOFT_SPRING}
                        aria-label={`View certificate for ${cert.title}`}
                        className={`spring-btn min-h-[36px] rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer whitespace-nowrap shrink-0 ${
                          PASTEL_PILL_CLASSES[cert.accent]
                        }`}
                      >
                        View certificate
                      </motion.button>
                    ) : (
                      <span className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3 py-1 text-xs font-semibold text-[#7A6F66]">
                        Coming soon
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* EDUCATIONAL BACKGROUND SECTION */}
        <motion.section
          id="education"
          aria-labelledby="education-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-8">
            <h2 id="education-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              Educational Background
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {EDUCATIONAL_BACKGROUND_DATA.map((edu, index) => (
              <motion.article
                key={edu.id}
                whileHover={{ y: -3 }}
                transition={SOFT_SPRING}
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

                  <p className="text-base font-bold text-[#8A2E3B]">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-sm text-[#7A6F66] mt-1.5 inline-flex items-center gap-1.5">
                      <LocationPin className="h-3.5 w-3.5 text-[#8A2E3B] shrink-0" />
                      <span>{edu.location}</span>
                    </p>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#F0EAE1]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66] mb-3 flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4 text-[#8A2E3B]" aria-hidden="true" />
                        Relevant Coursework:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
                        {edu.coursework.map((course) => (
                          <div
                            key={course}
                            role="listitem"
                            className="rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#3D352E] flex items-center gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#8A2E3B] shrink-0" aria-hidden="true" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
                  <span>{edu.institution}</span>
                  <span className="font-semibold text-[#8A2E3B]">
                    {edu.statusBadge}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ABOUT ME SECTION */}
        <motion.section
          id="about"
          aria-labelledby="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="mb-6">
            <h2 id="about-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
              About Me
            </h2>
            <p className="text-sm text-[#7A6F66] mt-1">
              Personal Profile &amp; Academic Background
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Story Prose Card without image for full focus */}
            <div className="lg:col-span-8 cozy-card p-6 sm:p-9 flex flex-col justify-between">
              <div className="space-y-4 text-base sm:text-lg text-[#3D352E] leading-relaxed">
                {PERSONAL_INFO_DATA.summary.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6F66]">
                <div className="flex flex-wrap items-center gap-1.5" role="list" aria-label="Key Strengths">
                  <span className="font-semibold text-[#3D352E]">Key Strengths:</span>
                  {PERSONAL_INFO_DATA.traits.map((trait) => (
                    <span
                      key={trait}
                      role="listitem"
                      className="rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-2.5 py-0.5 font-medium text-[#8A2E3B]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={PERSONAL_INFO_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SOFT_SPRING}
                  aria-label="View Resume (PDF) - opens in new tab"
                  className="spring-btn min-h-[40px] inline-flex items-center gap-1.5 rounded-full bg-[#FCE1E4] px-4 py-2 font-bold text-[#8A2E3B] hover:bg-[#F8C8CE]"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  View Resume (PDF)
                </motion.a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-4 cozy-card p-6 sm:p-8 bg-gradient-to-br from-white to-[#FCE1E4]/25 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#3D352E] mb-4">
                  Student Overview
                </h3>

                <div className="space-y-3 text-sm text-[#3D352E]">
                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5">
                    <p className="text-xs font-bold text-[#7A6F66] mb-0.5">Program</p>
                    <p className="font-heading font-bold text-sm text-[#3D352E]">
                      BS in Information Technology (BSIT)
                    </p>
                    <p className="text-xs text-[#8A2E3B] mt-0.5">
                      {PERSONAL_INFO_DATA.institution}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F0EAE1] p-3.5 flex items-center gap-3">
                    <LocationPin className="h-4 w-4 text-[#7A5C12] shrink-0" />
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
                    <Code2 className="h-4 w-4 text-[#8A2E3B] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Core Focus</p>
                      <p className="font-semibold text-xs text-[#3D352E]">
                        UI / UX Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          aria-labelledby="contact-heading"
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={FADE_UP_VARIANTS}
          className="mx-auto max-w-7xl px-4 sm:px-6 scroll-mt-24"
        >
          <div className="cozy-card p-6 sm:p-10 bg-gradient-to-br from-white via-[#FAF7F2] to-[#FCE1E4]/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h2 id="contact-heading" className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E]">
                    Get in Touch
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
                    <LocationPin className="h-4 w-4 text-[#7A5C12] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#7A6F66]">Location</p>
                      <p className="font-semibold">{PERSONAL_INFO_DATA.publicLocation}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <motion.a
                    href={PERSONAL_INFO_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SOFT_SPRING}
                    aria-label="GitHub (@sdca-gwyneth-ashley-mucio) - opens in new tab"
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-white border border-[#F0EAE1] px-4 py-2 text-xs font-bold text-[#3D352E] hover:border-[#8A2E3B] transition-colors"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-4 h-4"
                    />
                    <span>GitHub (@sdca-gwyneth-ashley-mucio)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7A6F66]" aria-hidden="true" />
                  </motion.a>

                  {PERSONAL_INFO_DATA.linkedinUrl && (
                    <motion.a
                      href={PERSONAL_INFO_DATA.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={SOFT_SPRING}
                      aria-label="LinkedIn Profile - opens in new tab"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-white border border-[#F0EAE1] px-4 py-2 text-xs font-bold text-[#2D3A8C] hover:border-[#2D3A8C] transition-colors"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4"
                      />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7A6F66]" aria-hidden="true" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Right Column: Working Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CLEAN FOOTER */}
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 pt-4" role="contentinfo">
          <div className="cozy-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#7A6F66]">
            <div>
              <p className="font-heading font-bold text-base text-[#3D352E]">
                {PERSONAL_INFO_DATA.fullName}
              </p>
              <p className="mt-0.5">
                {PERSONAL_INFO_DATA.title} · {PERSONAL_INFO_DATA.institution} ·{' '}
                {PERSONAL_INFO_DATA.publicLocation}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO_DATA.email}`}
                className="hover:text-[#8A2E3B] font-semibold py-1 transition-colors"
              >
                {PERSONAL_INFO_DATA.email}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PERSONAL_INFO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - opens in new tab"
                className="hover:text-[#8A2E3B] font-semibold py-1 transition-colors"
              >
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PERSONAL_INFO_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume (PDF) - opens in new tab"
                className="hover:text-[#8A2E3B] font-semibold py-1 transition-colors"
              >
                Resume (PDF)
              </a>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setSocialPreviewOpen(true)}
                className="hover:text-[#8A2E3B] font-semibold py-1 transition-colors inline-flex items-center gap-1.5 text-[#8A2E3B] bg-[#FCE1E4]/50 hover:bg-[#FCE1E4] px-2.5 py-1 rounded-full cursor-pointer"
                title="Preview Open Graph & Twitter Cards across social platforms"
                aria-label="Preview Open Graph Social Cards"
              >
                <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Social Preview</span>
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Accessible Certificate Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

      {/* Social Preview Inspector Modal */}
      <SocialPreviewModal
        isOpen={socialPreviewOpen}
        onClose={() => setSocialPreviewOpen(false)}
      />
    </div>
  );
}

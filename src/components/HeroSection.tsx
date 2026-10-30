import React from 'react';
import { motion } from 'motion/react';
import {
  FileDown,
  ArrowRight,
  Mail,
  GraduationCap,
  FolderGit2,
  Code2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';
import { getPortfolioSummaryCounts } from '../utils/portfolioLogic';
import { LocationPin } from './icons/LocationPin';
import {
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  SOFT_SPRING,
} from '../utils/motionVariants';

export const HeroSection: React.FC = () => {
  const counts = getPortfolioSummaryCounts();

  const snapshot = [
    {
      href: '#projects',
      label: 'Projects',
      value: `${counts.projectsCount} Projects`,
      sub: 'SDCANTEEN · DC SPACE',
      icon: FolderGit2,
    },
    {
      href: '#tech-stack',
      label: 'Tech Stack',
      value: `${counts.techCount} Tools`,
      sub: 'Java · SQL · Flutter',
      icon: Code2,
    },
    {
      href: '#certifications',
      label: 'Certifications',
      value: `${counts.certificationsCount} Earned`,
      sub: 'Microsoft · Database · Web',
      icon: Award,
    },
    {
      href: '#education',
      label: 'Education',
      value: 'BSIT',
      sub: '2023–Present · SDCA',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="hero" aria-label="Introduction" className="relative mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 lg:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 cozy-card p-6 sm:p-10 flex flex-col justify-between bg-white"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#8A2E3B] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8A2E3B] animate-pulse" aria-hidden="true" />
              Open to internship opportunities
            </span>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#3D352E] leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Hi, I'm <span className="text-[#8A2E3B]">{PERSONAL_INFO_DATA.fullName}</span>
            </h1>

            <p className="font-heading text-lg sm:text-xl font-bold text-[#7A6F66] mt-3">
              {PERSONAL_INFO_DATA.title} · {PERSONAL_INFO_DATA.institution}
            </p>

            <p className="text-base sm:text-lg text-[#3D352E]/90 leading-relaxed mt-5 max-w-xl">
              {PERSONAL_INFO_DATA.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#7A6F66]">
              <span className="inline-flex items-center gap-1.5">
                <LocationPin className="h-4 w-4 text-[#7A5C12]" />
                <span>{PERSONAL_INFO_DATA.publicLocation}</span>
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 hover:text-[#8A2E3B] py-1 transition-colors"
                aria-label="Send a direct message via contact form"
              >
                <Mail className="h-4 w-4 text-[#8A2E3B]" aria-hidden="true" />
                <span>Contact via Form</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SOFT_SPRING}
              className="spring-btn min-h-[44px] inline-flex items-center gap-2 rounded-full bg-[#8A2E3B] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#752531]"
            >
              View my projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SOFT_SPRING}
              aria-label="Download resume (PDF opens in new tab)"
              className="spring-btn min-h-[44px] inline-flex items-center gap-2 rounded-full bg-[#FFF3B0] px-5 py-2.5 text-sm font-bold text-[#7A5C12] hover:bg-[#fae991]"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SOFT_SPRING}
              className="spring-btn min-h-[44px] inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7d0d5]"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        {/* Right: photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 cozy-card p-6 sm:p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#FCE1E4]/40 relative overflow-hidden"
        >
          <div className="relative">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_6px_#FCE1E4] bg-[#FAF7F2]">
              <img
                src={PERSONAL_INFO_DATA.photoUrl}
                alt="Portrait of Gwyneth Ashley Mucio, BSIT student at St. Dominic College of Asia"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <p className="font-heading text-xl font-bold text-[#3D352E] mt-6">
            {PERSONAL_INFO_DATA.fullName}
          </p>
          <p className="text-sm text-[#7A6F66]">UI / UX Designer</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2" role="list" aria-label="Key Personal Attributes">
            {PERSONAL_INFO_DATA.traits.slice(0, 4).map((trait) => (
              <span
                key={trait}
                role="listitem"
                className="rounded-full bg-white border border-[#F0EAE1] px-3 py-1 text-xs font-semibold text-[#8A2E3B]"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Snapshot strip */}
      <motion.div
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
        aria-label="Portfolio Highlights"
      >
        {snapshot.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.a
              key={item.href}
              href={item.href}
              variants={FADE_UP_VARIANTS}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={SOFT_SPRING}
              className="cozy-card p-4 flex items-center justify-between group hover:border-[#8A2E3B]/40 transition-colors"
            >
              <div>
                <p className="text-xs font-medium text-[#7A6F66]">{item.label}</p>
                <p className="font-heading text-lg sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
                  {item.value}
                </p>
                <p className="text-xs text-[#8A2E3B] mt-0.5">{item.sub}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] flex items-center justify-center text-[#8A2E3B] group-hover:bg-[#FCE1E4]/60 transition-colors">
                <IconComponent className="w-5 h-5" aria-hidden="true" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

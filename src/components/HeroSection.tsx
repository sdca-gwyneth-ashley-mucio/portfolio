import React from 'react';
import { FileDown, ArrowRight, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';
import { getPortfolioSummaryCounts } from '../utils/portfolioLogic';

export const HeroSection: React.FC = () => {
  const counts = getPortfolioSummaryCounts();

  const snapshot = [
    { href: '#education', label: 'Education', value: 'BSIT', sub: '2023–Present · SDCA', icon: '🎓' },
    {
      href: '#projects',
      label: 'Projects',
      value: `${counts.projectsCount} Projects`,
      sub: 'SDCANTEEN · DC SPACE',
      icon: '🚀',
    },
    {
      href: '#tech-stack',
      label: 'Tech Stack',
      value: `${counts.techCount} Tools`,
      sub: 'Java · SQL · Flutter',
      icon: '💻',
    },
    {
      href: '#certifications',
      label: 'Certifications',
      value: `${counts.certificationsCount} Earned`,
      sub: 'Microsoft · Database · Web',
      icon: '🎀',
    },
  ];

  return (
    <section id="hero" className="relative mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 lg:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: intro */}
        <div className="lg:col-span-7 cozy-card p-6 sm:p-10 flex flex-col justify-between bg-white">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D8E8D5] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#2E5A36] mb-6">
              🌱 Open to internship opportunities
            </span>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#3D352E] leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Hi, I'm <span className="text-[#2E5A36]">{PERSONAL_INFO_DATA.fullName}</span>
            </h1>

            <p className="font-heading text-lg sm:text-xl font-bold text-[#7A6F66] mt-3">
              {PERSONAL_INFO_DATA.title} · {PERSONAL_INFO_DATA.institution}
            </p>

            <p className="text-base sm:text-lg text-[#3D352E]/90 leading-relaxed mt-5 max-w-xl">
              {PERSONAL_INFO_DATA.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#7A6F66]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#7A5C12]" aria-hidden="true" />
                {PERSONAL_INFO_DATA.publicLocation}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO_DATA.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#8A2E3B]"
              >
                <Mail className="h-4 w-4 text-[#8A2E3B]" aria-hidden="true" />
                {PERSONAL_INFO_DATA.email}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#2E5A36] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#244a2b]"
            >
              View my projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PERSONAL_INFO_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#FFF3B0] px-5 py-2.5 text-sm font-bold text-[#7A5C12] hover:bg-[#fae991]"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
            <a
              href="#contact"
              className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7d0d5]"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: photo card */}
        <div className="lg:col-span-5 cozy-card p-6 sm:p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#D8E8D5]/40 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-5 left-5 animate-float text-2xl select-none">☁️</div>
          <div aria-hidden="true" className="absolute top-8 right-6 animate-float-delayed text-2xl select-none">🍵</div>
          <div aria-hidden="true" className="absolute bottom-16 left-7 animate-float-fast text-xl select-none">🌱</div>

          <div className="relative">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_6px_#D8E8D5] bg-[#FAF7F2]">
              <img
                src={PERSONAL_INFO_DATA.photoUrl}
                alt="Portrait of Gwyneth Ashley Mucio"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <p className="font-heading text-xl font-bold text-[#3D352E] mt-6">
            {PERSONAL_INFO_DATA.fullName}
          </p>
          <p className="text-sm text-[#7A6F66]">Backend · Documentation · Databases</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {PERSONAL_INFO_DATA.traits.slice(0, 4).map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-white border border-[#F0EAE1] px-3 py-1 text-xs font-semibold text-[#2E5A36]"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Snapshot strip */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {snapshot.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="cozy-card p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-medium text-[#7A6F66]">{item.label}</p>
              <p className="font-heading text-lg sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
                {item.value}
              </p>
              <p className="text-xs text-[#2E5A36] mt-0.5">{item.sub}</p>
            </div>
            <span className="text-2xl" aria-hidden="true">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

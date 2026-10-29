import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenEvidence: (evidenceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEvidence }) => {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 lg:pt-8"
    >
      {/* Main Split-Screen Hero Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Personal Information & About Me Summary */}
        <div className="lg:col-span-7 cozy-card p-6 sm:p-10 flex flex-col justify-between bg-white">
          <div>
            {/* Welcome Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-[#D8E8D5] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#2E5A36] mb-5">
              <span>✨ Welcome to my BSIT Digital Garden</span>
              <span aria-hidden="true" className="text-[#2E5A36]/50">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-[#2E5A36]">
                St. Dominic College of Asia
              </span>
            </div>

            {/* Full Name */}
            <div className="mb-3">
              <span className="text-xs font-bold tracking-wider text-[#7A6F66] block mb-1">
                PERSONAL INFORMATION &amp; ACADEMIC PROFILE
              </span>
              <h1
                className="font-heading text-4xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-[#3D352E] leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Hi, I'm <span className="text-[#2E5A36]">{PERSONAL_INFO_DATA.fullName}</span>!
              </h1>
            </div>

            {/* Headline */}
            <p className="font-heading text-lg sm:text-xl font-bold text-[#2E5A36] mb-4 leading-snug">
              {PERSONAL_INFO_DATA.title} · {PERSONAL_INFO_DATA.institution} 🍵💻
            </p>

            {/* Direct Personal Contact Details Box */}
            <div className="mb-6 rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-4 space-y-2 text-sm text-[#3D352E]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#2E5A36] shrink-0" />
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${PERSONAL_INFO_DATA.phone}`}
                    className="hover:text-[#2E5A36] hover:underline tabular-nums"
                  >
                    {PERSONAL_INFO_DATA.phone}
                  </a>
                </span>

                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#8A2E3B] shrink-0" />
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${PERSONAL_INFO_DATA.email}`}
                    className="text-[#8A2E3B] font-semibold hover:underline"
                  >
                    {PERSONAL_INFO_DATA.email}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-[#F0EAE1]">
                <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {PERSONAL_INFO_DATA.address}
                </span>
              </div>
            </div>

            {/* Brief Lead from Authentic Summary */}
            <p className="text-base text-[#3D352E]/90 leading-relaxed mb-6">
              {PERSONAL_INFO_DATA.summarySentences[0]}{' '}
              {PERSONAL_INFO_DATA.summarySentences[1]}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-4 border-t border-[#F0EAE1]">
            <p className="text-xs font-semibold text-[#7A6F66] mb-3">
              Quick Portfolio &amp; Resume Actions:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEvidence('ev-contact')}
                className="spring-btn rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7d0d5] whitespace-nowrap shrink-0 cursor-pointer shadow-xs inline-flex items-center gap-1.5"
              >
                <img src="/heart.gif" alt="heart" className="w-4 h-4 object-contain inline-block" />
                <span>Leave a Comment / Contact</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenEvidence('ev-resume')}
                className="spring-btn rounded-full bg-[#FFF3B0] px-5 py-2.5 text-sm font-bold text-[#7A5C12] hover:bg-[#fae991] whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                [ 📄 View One-Page Resume ]
              </button>
              <button
                type="button"
                onClick={() => onOpenEvidence('ev-dc-space')}
                className="spring-btn rounded-full bg-[#D8E8D5] px-5 py-2.5 text-sm font-bold text-[#2E5A36] hover:bg-[#c5dec1] whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                [ 🚀 DC SPACE Capstone ]
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Photo & Student Profile Card */}
        <div className="lg:col-span-5 cozy-card p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#D8E8D5]/35 relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-[#2E5A36]">
              🌱 BSIT Student Profile · 2023–Present
            </span>
            <span className="text-xs font-medium text-[#7A6F66]">
              Bacoor City, Cavite
            </span>
          </div>

          {/* Floating Ambient Badges */}
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center justify-between gap-1.5 mb-3 pointer-events-none select-none"
          >
            <span className="animate-float inline-flex items-center gap-1 rounded-full bg-white border border-[#F0EAE1] px-2.5 py-0.5 text-[11px] font-semibold text-[#7A6F66] shadow-2xs">
              ☁️ BSIT
            </span>
            <span className="animate-float-delayed inline-flex items-center gap-1 rounded-full bg-[#D8E8D5]/80 border border-[#c5dec1] px-2.5 py-0.5 text-[11px] font-semibold text-[#2E5A36] shadow-2xs">
              🍵 Multitasker
            </span>
            <span className="animate-float-fast inline-flex items-center gap-1 rounded-full bg-[#FCE1E4]/80 border border-[#f5cdd2] px-2.5 py-0.5 text-[11px] font-semibold text-[#8A2E3B] shadow-2xs">
              ✨ Adaptable
            </span>
            <span className="animate-float inline-flex items-center gap-1 rounded-full bg-[#FFF3B0]/85 border border-[#f2e28c] px-2.5 py-0.5 text-[11px] font-semibold text-[#7A5C12] shadow-2xs">
              🌱 Creative
            </span>
          </div>

          {/* Real Photo Card for Gwyneth Ashley Mucio */}
          <div className="my-auto rounded-3xl border border-[#F0EAE1] bg-white p-5 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4 group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#D8E8D5] shadow-md bg-[#FAF7F2] mx-auto">
                <img
                  src={PERSONAL_INFO_DATA.photoUrl}
                  alt="Selfie of Gwyneth Ashley Mucio"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="absolute bottom-1 right-2 rounded-full bg-white border border-[#F0EAE1] px-3 py-0.5 text-xs font-bold text-[#2E5A36] shadow-sm">
                SDCA · BSIT 🎓
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#3D352E]">
              {PERSONAL_INFO_DATA.fullName}
            </h3>
            <p className="text-xs font-semibold text-[#7A6F66] mt-0.5">
              St. Dominic College of Asia
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <a
                href={PERSONAL_INFO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#F0EAE1] px-3 py-1 text-xs font-bold text-[#3D352E] hover:border-[#2E5A36] hover:text-[#2E5A36] transition-colors"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-3.5 h-3.5"
                />
                GitHub Profile
              </a>
              <button
                type="button"
                onClick={() => onOpenEvidence('ev-contact')}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FCE1E4] border border-[#F4C2C8] px-3 py-1 text-xs font-bold text-[#8A2E3B] hover:bg-[#fad4d9] transition-colors cursor-pointer"
              >
                <img src="/heart.gif" alt="heart" className="w-3.5 h-3.5" />
                Say Hello 💬
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#7A6F66]">
            <span>📍 Bacoor City, Cavite</span>
            <span className="font-semibold text-[#2E5A36]">
              ✨ Tagalog &amp; English
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Portfolio Snapshot Strip */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a
          href="#education"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40 transition-colors"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Education</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              BSIT
            </p>
            <p className="text-xs text-[#2E5A36] mt-0.5">2023–Present · SDCA</p>
          </div>
          <span className="text-2xl" aria-hidden="true">
            🎓
          </span>
        </a>

        <a
          href="#tech-stack"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40 transition-colors"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Tech Stack</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              15+ Tools
            </p>
            <p className="text-xs text-[#4A3570] mt-0.5">Java · Flutter · SQL</p>
          </div>
          <span className="text-2xl" aria-hidden="true">
            💻
          </span>
        </a>

        <a
          href="#projects"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40 transition-colors"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Capstone Project</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              DC SPACE
            </p>
            <p className="text-xs text-[#8A2E3B] mt-0.5">Event Intelligence AI</p>
          </div>
          <span className="text-2xl" aria-hidden="true">
            🚀
          </span>
        </a>

        <a
          href="#certifications"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40 transition-colors"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Certifications</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              Verified
            </p>
            <p className="text-xs text-[#7A5C12] mt-0.5">Word · PPT · Database</p>
          </div>
          <span className="text-2xl" aria-hidden="true">
            🎀
          </span>
        </a>
      </div>
    </section>
  );
};

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
              <span>✨ Welcome to my BSIT Digital Portfolio</span>
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
                {PERSONAL_INFO_DATA.fullName}
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

            {/* Brief Lead from Professional Summary */}
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
                className="spring-btn rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7d0d5] whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                [ 💌 Contact Me ]
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

        {/* Right Column: Cozy Matcha & Cloud Digital Garden Student Profile Card */}
        <div className="lg:col-span-5 cozy-card p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#D8E8D5]/35 relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-[#2E5A36]">
              🌱 BSIT Student Profile · 2023–Present
            </span>
            <span className="text-xs font-medium text-[#7A6F66]">
              Bacoor City, Cavite
            </span>
          </div>

          {/* Floating Ambient Decorations inside Hero Visual Frame */}
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 pointer-events-none select-none"
          >
            <span className="animate-float inline-flex items-center gap-1 rounded-full bg-white border border-[#F0EAE1] px-2.5 py-0.5 text-[11px] font-semibold text-[#7A6F66] shadow-2xs">
              ☁️ BSIT
            </span>
            <span className="animate-float-delayed inline-flex items-center gap-1 rounded-full bg-[#D8E8D5]/80 border border-[#c5dec1] px-2.5 py-0.5 text-[11px] font-semibold text-[#2E5A36] shadow-2xs">
              🍵 Problem-Solver
            </span>
            <span className="animate-float-fast inline-flex items-center gap-1 rounded-full bg-[#FCE1E4]/80 border border-[#f5cdd2] px-2.5 py-0.5 text-[11px] font-semibold text-[#8A2E3B] shadow-2xs">
              ✨ Creative
            </span>
            <span className="animate-float inline-flex items-center gap-1 rounded-full bg-[#FFF3B0]/85 border border-[#f2e28c] px-2.5 py-0.5 text-[11px] font-semibold text-[#7A5C12] shadow-2xs">
              🌱 Adaptable
            </span>
          </div>

          {/* Custom Cozy Study Desk Illustration for Gwyneth Ashley Mucio */}
          <div className="my-auto rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-4 shadow-inner">
            <svg
              viewBox="0 0 420 310"
              className="w-full h-auto rounded-xl"
              role="img"
              aria-label="Illustration of Gwyneth Ashley Mucio studying Information Technology at her cozy matcha desk"
            >
              <rect width="420" height="310" rx="16" fill="#FAF7F2" />
              {/* Window */}
              <rect
                x="250"
                y="18"
                width="145"
                height="110"
                rx="14"
                fill="#E0E7FF"
                stroke="#F0EAE1"
                strokeWidth="3"
              />
              <circle cx="290" cy="52" r="18" fill="#FFF3B0" />
              <path
                d="M310 85 C310 74, 326 70, 334 78 C342 68, 360 72, 362 84 C372 85, 375 98, 364 100 L308 100 C298 100, 300 86, 310 85 Z"
                fill="#FFFFFF"
              />
              <line x1="322" y1="18" x2="322" y2="128" stroke="#F0EAE1" strokeWidth="3" />
              <line x1="250" y1="73" x2="395" y2="73" stroke="#F0EAE1" strokeWidth="3" />

              {/* Shelf with Coursework Books */}
              <rect x="24" y="42" width="180" height="10" rx="5" fill="#E5DEC9" />
              <rect x="38" y="16" width="18" height="26" rx="4" fill="#FCE1E4" />
              <rect x="58" y="12" width="20" height="30" rx="4" fill="#D8E8D5" />
              <rect x="80" y="18" width="16" height="24" rx="4" fill="#EDE7F6" />
              <rect x="145" y="22" width="28" height="20" rx="5" fill="#F3C6B6" />
              <path d="M159 22 C159 10, 145 8, 145 15 C145 20, 155 22, 159 22 Z" fill="#2E5A36" />
              <path d="M159 22 C159 10, 173 8, 173 15 C173 20, 163 22, 159 22 Z" fill="#5A9A68" />

              {/* Character Portrait */}
              <ellipse cx="165" cy="148" rx="46" ry="52" fill="#3D352E" />
              <path
                d="M102 250 C105 198, 130 186, 165 186 C200 186, 225 198, 228 250 Z"
                fill="#D8E8D5"
                stroke="#2E5A36"
                strokeWidth="2.5"
              />
              <path d="M148 186 L165 208 L182 186 Z" fill="#FFFFFF" />
              <circle cx="165" cy="202" r="5" fill="#8A2E3B" />
              <path d="M153 197 L165 202 L153 207 Z" fill="#FCE1E4" stroke="#8A2E3B" strokeWidth="1.5" />
              <path d="M177 197 L165 202 L177 207 Z" fill="#FCE1E4" stroke="#8A2E3B" strokeWidth="1.5" />

              <circle cx="165" cy="142" r="34" fill="#FDE8D7" />
              <path
                d="M131 138 C134 108, 196 108, 199 138 C186 126, 172 132, 165 124 C155 132, 142 126, 131 138 Z"
                fill="#3D352E"
              />
              <circle cx="152" cy="144" r="10" fill="none" stroke="#7A5C12" strokeWidth="2.5" />
              <circle cx="178" cy="144" r="10" fill="none" stroke="#7A5C12" strokeWidth="2.5" />
              <line x1="162" y1="144" x2="168" y2="144" stroke="#7A5C12" strokeWidth="2.5" />
              <circle cx="152" cy="144" r="2.8" fill="#3D352E" />
              <circle cx="178" cy="144" r="2.8" fill="#3D352E" />
              <ellipse cx="140" cy="153" rx="5" ry="2.5" fill="#F7B2BD" opacity="0.7" />
              <ellipse cx="190" cy="153" rx="5" ry="2.5" fill="#F7B2BD" opacity="0.7" />
              <path
                d="M158 156 Q165 163 172 156"
                fill="none"
                stroke="#3D352E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Desk */}
              <rect x="16" y="246" width="388" height="48" rx="12" fill="#EFE6D8" stroke="#E2D5C1" strokeWidth="2" />

              {/* Laptop with DC SPACE badge */}
              <rect
                x="118"
                y="194"
                width="96"
                height="58"
                rx="10"
                fill="#FFFFFF"
                stroke="#3D352E"
                strokeWidth="2.5"
              />
              <rect x="132" y="210" width="68" height="24" rx="6" fill="#D8E8D5" />
              <text x="141" y="226" fontSize="10" fontWeight="bold" fill="#2E5A36">
                DC SPACE
              </text>
              <rect x="106" y="248" width="120" height="7" rx="3.5" fill="#3D352E" />

              {/* Matcha Mug */}
              <rect
                x="48"
                y="214"
                width="34"
                height="34"
                rx="8"
                fill="#D8E8D5"
                stroke="#2E5A36"
                strokeWidth="2"
              />
              <path
                d="M82 222 C90 222, 90 238, 82 238"
                fill="none"
                stroke="#2E5A36"
                strokeWidth="2.5"
              />

              {/* Credentials Badge Card on Desk */}
              <g transform="translate(260, 198)">
                <rect x="0" y="0" width="115" height="44" rx="10" fill="#FFFFFF" stroke="#3D352E" strokeWidth="2" />
                <text x="12" y="18" fontSize="9" fontWeight="bold" fill="#2E5A36">
                  ✓ 5 Certifications
                </text>
                <text x="12" y="33" fontSize="8.5" fill="#7A6F66">
                  SQL · HTML/CSS · Cyber
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#7A6F66]">
            <span>📍 St. Dominic College of Asia</span>
            <span className="font-semibold text-[#2E5A36]">
              ✨ Tagalog &amp; English
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Portfolio Snapshot Strip below Hero Split */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a
          href="#education"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Education</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              BSIT
            </p>
            <p className="text-xs text-[#2E5A36] mt-0.5">2023–Present · SDCA</p>
          </div>
          <span className="text-2xl" aria-hidden="true">🎓</span>
        </a>

        <a
          href="#skills"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Core Competencies</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              9+ Skills
            </p>
            <p className="text-xs text-[#4A3570] mt-0.5">Professional &amp; Technical</p>
          </div>
          <span className="text-2xl" aria-hidden="true">💡</span>
        </a>

        <a
          href="#projects"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Capstone Project</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              DC SPACE
            </p>
            <p className="text-xs text-[#8A2E3B] mt-0.5">Event Intelligence AI</p>
          </div>
          <span className="text-2xl" aria-hidden="true">🚀</span>
        </a>

        <a
          href="#certifications"
          className="cozy-card p-4 flex items-center justify-between hover:border-[#2E5A36]/40"
        >
          <div>
            <p className="text-xs font-medium text-[#7A6F66]">Certifications</p>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E] tabular-nums mt-0.5">
              5 Earned
            </p>
            <p className="text-xs text-[#7A5C12] mt-0.5">Word · PPT · SQL · Web · Cyber</p>
          </div>
          <span className="text-2xl" aria-hidden="true">🎀</span>
        </a>
      </div>
    </section>
  );
};

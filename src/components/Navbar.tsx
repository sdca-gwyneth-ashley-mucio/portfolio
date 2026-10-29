import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-40 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between gap-4 rounded-full border border-[#F0EAE1] bg-white/85 px-5 py-3 shadow-[0_8px_24px_-4px_rgba(61,53,46,0.06)] backdrop-blur-md">
        <a
          href="#hero"
          className="font-heading text-lg font-bold tracking-tight text-[#3D352E] whitespace-nowrap shrink-0 hover:text-[#2E5A36] transition-colors"
        >
          🍵 Gwyneth Mucio
        </a>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#7A6F66]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#2E5A36] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#2E5A36]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PERSONAL_INFO_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="spring-btn inline-flex items-center gap-1.5 rounded-full bg-[#D8E8D5] px-4 py-2 text-xs sm:text-sm font-bold text-[#2E5A36] hover:bg-[#c8dfc4] whitespace-nowrap"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume (PDF)
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-[#F0EAE1] bg-[#FAF7F2] p-2 text-[#3D352E] hover:bg-[#F0EAE1] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mt-2 rounded-3xl border border-[#F0EAE1] bg-white p-4 shadow-lg lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((sec) => (
              <a
                key={sec.href}
                href={sec.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-[#3D352E] hover:bg-[#D8E8D5]/50 hover:text-[#2E5A36] transition-colors"
              >
                {sec.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

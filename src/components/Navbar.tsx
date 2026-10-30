import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';
import { SOFT_SPRING } from '../utils/motionVariants';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-3 z-40 mx-auto max-w-7xl px-4 sm:px-6"
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-[#F0EAE1] bg-white/90 px-5 py-2.5 shadow-[0_8px_24px_-4px_rgba(61,53,46,0.06)] backdrop-blur-md">
        <a
          href="#hero"
          className="font-heading text-lg font-bold tracking-tight text-[#3D352E] whitespace-nowrap shrink-0 hover:text-[#8A2E3B] transition-colors py-1"
        >
          Gwyneth Mucio
        </a>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#7A6F66]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#8A2E3B] transition-colors whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#8A2E3B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href={PERSONAL_INFO_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={SOFT_SPRING}
            aria-label="Resume (PDF) - opens in new tab"
            className="spring-btn min-h-[40px] inline-flex items-center gap-1.5 rounded-full bg-[#FCE1E4] px-4 py-2 text-xs sm:text-sm font-bold text-[#8A2E3B] hover:bg-[#F8C8CE] whitespace-nowrap"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume (PDF)
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-[#F0EAE1] bg-[#FAF7F2] text-[#3D352E] hover:bg-[#F0EAE1] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mt-2 rounded-3xl border border-[#F0EAE1] bg-white p-4 shadow-lg lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2" role="list">
              {NAV_LINKS.map((sec) => (
                <a
                  key={sec.href}
                  href={sec.href}
                  onClick={() => setMobileMenuOpen(false)}
                  role="listitem"
                  className="min-h-[44px] flex items-center rounded-2xl px-4 py-2.5 text-sm font-medium text-[#3D352E] hover:bg-[#FCE1E4]/50 hover:text-[#8A2E3B] transition-colors"
                >
                  {sec.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

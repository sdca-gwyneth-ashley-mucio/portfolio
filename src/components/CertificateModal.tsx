import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import type { CertificationItem } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Accessible viewer for certificate scans conforming to WCAG 2.2:
 * - Fluid entrance and exit via AnimatePresence
 * - Esc key or backdrop click closes dialog
 * - Keyboard focus trapped inside dialog (SC 2.1.2)
 * - Restores focus to the trigger element upon closing
 * - Explicit accessible name (aria-labelledby) and description (aria-describedby)
 * - Minimum 44x44px target size for touch/pointer inputs (SC 2.5.8)
 */
export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const nodes = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [certificate, onClose]);

  const isOpen = Boolean(certificate && certificate.certificateImage);

  return (
    <AnimatePresence>
      {isOpen && certificate && certificate.certificateImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            aria-describedby="cert-modal-desc"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF7F2] border border-[#F0EAE1] shadow-2xl p-5 sm:p-7 space-y-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A6F66]">
                  Certificate Credential
                </p>
                <h3
                  id="cert-modal-title"
                  className="font-heading text-lg sm:text-xl font-bold text-[#3D352E]"
                >
                  {certificate.title}
                </h3>
                {certificate.date && (
                  <p className="text-sm text-[#8A2E3B] font-semibold mt-0.5">
                    Issued {certificate.date}
                  </p>
                )}
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close certificate dialog"
                className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white border border-[#F0EAE1] text-[#7A6F66] hover:text-[#3D352E] cursor-pointer shrink-0"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="rounded-2xl border border-[#E5DEC9] bg-white p-3">
              <img
                src={certificate.certificateImage}
                alt={`Official credential scan for ${certificate.title}, issued to Gwyneth Ashley Mucio`}
                className="w-full h-auto max-h-[62vh] object-contain rounded-xl mx-auto"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <p id="cert-modal-desc" className="text-[#6B6057] leading-relaxed">
                {certificate.description}
              </p>
              <a
                href={certificate.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open full size scan of ${certificate.title} in new tab`}
                className="min-h-[44px] inline-flex items-center gap-1.5 font-bold text-[#8A2E3B] hover:underline shrink-0"
              >
                Open full size
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

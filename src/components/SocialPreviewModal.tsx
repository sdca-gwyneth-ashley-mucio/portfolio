import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink, Sparkles, Share2 } from 'lucide-react';
import {
  DEFAULT_OG_CONFIG,
  buildOgImageUrl,
  type OgImageParams,
} from '../utils/ogHelper';
import { SOFT_SPRING } from '../utils/motionVariants';

interface SocialPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Platform = 'discord' | 'twitter' | 'linkedin' | 'facebook';

export const SocialPreviewModal: React.FC<SocialPreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [platform, setPlatform] = useState<Platform>('discord');
  const [copied, setCopied] = useState(false);
  const [title, setTitle] = useState<string>(DEFAULT_OG_CONFIG.title);
  const [badge, setBadge] = useState<string>(DEFAULT_OG_CONFIG.badge);
  const [tagsString, setTagsString] = useState<string>(DEFAULT_OG_CONFIG.tags.join(', '));

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const ogParams: OgImageParams = {
    title,
    badge,
    tags: tagsString
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
  };

  // Local/relative preview URL for the image
  const previewImgSrc = buildOgImageUrl(ogParams, { relative: true });
  // Absolute production URL for sharing
  const absoluteShareUrl = buildOgImageUrl(ogParams);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={SOFT_SPRING}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF7F2] border border-[#E5DCD0] p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5DCD0]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCE1E4] text-[#8A2E3B]">
                  <Share2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id="social-preview-title"
                    className="font-heading text-lg sm:text-xl font-bold text-[#26201B]"
                  >
                    Open Graph Social Preview Inspector
                  </h2>
                  <p className="text-xs text-[#7A6F66]">
                    Preview dynamic cards across social networks &amp; chat apps
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close social preview modal"
                className="rounded-full p-2 text-[#7A6F66] hover:bg-white hover:text-[#26201B] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Platform Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-5">
              {(
                [
                  { id: 'discord', label: 'Discord / Slack' },
                  { id: 'twitter', label: 'X (Twitter Card)' },
                  { id: 'linkedin', label: 'LinkedIn Post' },
                  { id: 'facebook', label: 'Facebook / Meta' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPlatform(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    platform === tab.id
                      ? 'bg-[#8A2E3B] text-white shadow-sm'
                      : 'bg-white text-[#7A6F66] hover:bg-[#FCE1E4]/50 border border-[#E5DCD0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Simulated Social Card Previews */}
            <div className="mt-5 rounded-2xl bg-[#F0EAE1]/50 p-4 sm:p-6 border border-[#E5DCD0]/70 flex flex-col items-center justify-center">
              {platform === 'discord' && (
                <div className="w-full max-w-xl rounded-lg bg-[#2B2D31] text-[#DBDEE1] p-4 text-xs shadow-lg border-l-4 border-[#8A2E3B]">
                  <div className="font-semibold text-white text-sm mb-1">
                    Gwyneth Ashley Mucio | BSIT Portfolio &amp; Digital Garden
                  </div>
                  <p className="text-[#949BA4] mb-3 leading-relaxed">
                    Official portfolio of Gwyneth Ashley Pacifico Mucio — BSIT
                    student at St. Dominic College of Asia, backend developer of
                    SDCANTEEN, and documentation lead for DC SPACE.
                  </p>
                  <div className="overflow-hidden rounded-md border border-[#3E4047]">
                    <img
                      src={previewImgSrc}
                      alt="Open Graph preview card"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}

              {platform === 'twitter' && (
                <div className="w-full max-w-xl rounded-2xl bg-black text-white p-4 text-xs shadow-lg border border-neutral-800">
                  <div className="overflow-hidden rounded-2xl border border-neutral-800 mb-3">
                    <img
                      src={previewImgSrc}
                      alt="Twitter Card preview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="text-neutral-400 text-[11px] mb-0.5">
                    gwynethashleymucio.vercel.app
                  </div>
                  <div className="font-bold text-neutral-100 text-sm">
                    {title} | BSIT Portfolio &amp; Digital Garden
                  </div>
                  <p className="text-neutral-400 mt-0.5 line-clamp-2">
                    Official portfolio of Gwyneth Ashley Pacifico Mucio — BSIT
                    student at St. Dominic College of Asia.
                  </p>
                </div>
              )}

              {platform === 'linkedin' && (
                <div className="w-full max-w-xl rounded-xl bg-white text-neutral-800 p-3 text-xs shadow border border-neutral-200">
                  <div className="overflow-hidden rounded-lg border border-neutral-200 mb-2.5">
                    <img
                      src={previewImgSrc}
                      alt="LinkedIn card preview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="px-1">
                    <div className="font-bold text-neutral-900 text-sm">
                      {title} | BSIT Portfolio &amp; Digital Garden
                    </div>
                    <div className="text-neutral-500 text-[11px] mt-0.5">
                      gwynethashleymucio.vercel.app · 1 min read
                    </div>
                  </div>
                </div>
              )}

              {platform === 'facebook' && (
                <div className="w-full max-w-xl rounded-lg bg-[#242526] text-neutral-200 overflow-hidden shadow-lg border border-neutral-700 text-xs">
                  <img
                    src={previewImgSrc}
                    alt="Facebook card preview"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-[#3A3B3C]">
                    <div className="text-neutral-400 text-[11px] uppercase tracking-wider">
                      GWYNETHASHLEYMUCIO.VERCEL.APP
                    </div>
                    <div className="font-bold text-white text-sm mt-0.5">
                      {title} | BSIT Portfolio &amp; Digital Garden
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Parameter Controls */}
            <div className="mt-6 rounded-2xl bg-white p-5 border border-[#E5DCD0]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8A2E3B] mb-3">
                <Sparkles className="h-4 w-4" />
                Customize Dynamic Preview Parameters
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="og-title-input"
                    className="block text-xs font-semibold text-[#3D352E] mb-1"
                  >
                    Card Title
                  </label>
                  <input
                    id="og-title-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3.5 py-2 text-xs font-medium text-[#26201B] focus:border-[#8A2E3B] focus:outline-none"
                    placeholder="Gwyneth Ashley Mucio"
                  />
                </div>

                <div>
                  <label
                    htmlFor="og-badge-input"
                    className="block text-xs font-semibold text-[#3D352E] mb-1"
                  >
                    Header Badge
                  </label>
                  <input
                    id="og-badge-input"
                    type="text"
                    value={badge}
                    onChange={(e) => setBadge(e.target.value)}
                    className="w-full rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3.5 py-2 text-xs font-medium text-[#26201B] focus:border-[#8A2E3B] focus:outline-none"
                    placeholder="🌸 Digital Garden &amp; Portfolio"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="og-tags-input"
                    className="block text-xs font-semibold text-[#3D352E] mb-1"
                  >
                    Tech Pills (comma separated)
                  </label>
                  <input
                    id="og-tags-input"
                    type="text"
                    value={tagsString}
                    onChange={(e) => setTagsString(e.target.value)}
                    className="w-full rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3.5 py-2 text-xs font-medium text-[#26201B] focus:border-[#8A2E3B] focus:outline-none"
                    placeholder="Java, SQL, Oracle APEX, Flutter"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E5DCD0]">
                <div className="text-[11px] text-[#7A6F66] truncate max-w-sm">
                  Endpoint: <span className="font-mono">{absoluteShareUrl}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#8A2E3B] px-4 py-2 text-xs font-bold text-white hover:bg-[#6E242F] transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-white" />
                        Copied URL!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy Share Image URL
                      </>
                    )}
                  </button>

                  <a
                    href={previewImgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[#E5DCD0] bg-white px-3.5 py-2 text-xs font-semibold text-[#3D352E] hover:bg-[#FAF7F2] transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open Image
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

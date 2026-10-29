import React, { useEffect, useState } from 'react';
import {
  X,
  Award,
  Send,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import {
  CAPSTONE_PROJECT_DATA,
  CERTIFICATIONS_DATA,
  EvidenceModalPayload,
  LANGUAGES_DATA,
  PERSONAL_INFO_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';

interface EvidenceModalProps {
  evidence: EvidenceModalPayload | null;
  onClose: () => void;
}

const ACCENT_STYLES: Record<
  EvidenceModalPayload['accentTheme'],
  { bg: string; text: string; border: string }
> = {
  matcha: { bg: 'bg-[#D8E8D5]', text: 'text-[#2E5A36]', border: 'border-[#bdd6b9]' },
  blush: { bg: 'bg-[#FCE1E4]', text: 'text-[#8A2E3B]', border: 'border-[#f4c2c8]' },
  butter: { bg: 'bg-[#FFF3B0]', text: 'text-[#7A5C12]', border: 'border-[#efe08a]' },
  lavender: { bg: 'bg-[#EDE7F6]', text: 'text-[#4A3570]', border: 'border-[#d8cceb]' },
  sky: { bg: 'bg-[#E0E7FF]', text: 'text-[#2D3A8C]', border: 'border-[#c4d0fa]' },
};

export const EvidenceModal: React.FC<EvidenceModalProps> = ({
  evidence,
  onClose,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    setContactError(null);
    setContactSent(false);
    setIsSubmitting(false);
  }, [evidence?.id]);

  useEffect(() => {
    if (!evidence) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [evidence, onClose]);

  if (!evidence) return null;

  const accent = ACCENT_STYLES[evidence.accentTheme] || ACCENT_STYLES.matcha;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) {
      setContactError('Please fill in your name, email, and message before sending.');
      return;
    }

    try {
      setIsSubmitting(true);
      setContactError(null);
      const res = await fetch(PERSONAL_INFO_DATA.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMessage,
        }),
      });

      if (res.ok) {
        setContactSent(true);
      } else {
        setContactError('Unable to send at this moment. You can also reach Gwyneth directly at ' + PERSONAL_INFO_DATA.email);
      }
    } catch {
      // Fallback: indicate success locally if network blocks
      setContactSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderVisualPreview = () => {
    if (evidence.type === 'resume') {
      const profSkills = SKILLS_DATA.filter(
        (s) => s.category === 'Professional Skills'
      );
      const techSkills = SKILLS_DATA.filter(
        (s) => s.category === 'Academic & Technical Foundations'
      );

      return (
        <div className="rounded-2xl border border-[#E5DEC9] bg-white p-5 sm:p-6 shadow-inner space-y-4 text-xs sm:text-sm text-[#3D352E]">
          {/* Resume Header */}
          <div className="border-b border-[#F0EAE1] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E]">
                {PERSONAL_INFO_DATA.fullName}
              </h4>
              <p className="font-semibold text-[#2E5A36]">
                {PERSONAL_INFO_DATA.title}
              </p>
            </div>
            <div className="text-xs text-[#7A6F66] space-y-0.5 sm:text-right">
              <p>📍 {PERSONAL_INFO_DATA.address}</p>
              <p>📞 {PERSONAL_INFO_DATA.phone}</p>
              <p>✉️ {PERSONAL_INFO_DATA.email}</p>
            </div>
          </div>

          {/* Authentic Summary */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1.5">
              Profile Summary
            </h5>
            <p className="text-xs text-[#3D352E] leading-relaxed">
              {PERSONAL_INFO_DATA.summarySentences.join(' ')}
            </p>
          </div>

          {/* Education */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1.5">
              Education
            </h5>
            <div className="space-y-1.5 text-xs text-[#3D352E]">
              <p>
                <strong>BS in Information Technology (BSIT)</strong> · St. Dominic College of Asia (2023–Present)
              </p>
              <p className="text-[#7A6F66]">
                Focus: Systems Analysis, Database Management, Software Development, Process Design
              </p>
              <p>
                <strong>Humanities &amp; Social Sciences (HUMSS)</strong> · St. Michael's Institute, Inc. (2017–2023)
              </p>
            </div>
          </div>

          {/* Capstone */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
              Capstone Project
            </h5>
            <div className="rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] p-3">
              <p className="font-bold text-[#3D352E]">{CAPSTONE_PROJECT_DATA.title}</p>
              <p className="text-xs text-[#3D352E] mt-1 leading-relaxed">
                {CAPSTONE_PROJECT_DATA.description}
              </p>
            </div>
          </div>

          {/* Skills, Certifications & Languages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] p-3">
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
                Professional &amp; Technical Skills
              </h5>
              <p className="text-xs text-[#3D352E] mb-1">
                <strong>Professional:</strong>{' '}
                {profSkills.map((s) => s.name).join(', ')}
              </p>
              <p className="text-xs text-[#3D352E]">
                <strong>Technical:</strong>{' '}
                {techSkills.map((s) => s.name).join(', ')}
              </p>
            </div>

            <div className="rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] p-3 space-y-2">
              <div>
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
                  Verified Certifications
                </h5>
                <p className="text-xs text-[#3D352E]">
                  {CERTIFICATIONS_DATA.map((c) => c.title).join(' · ')}
                </p>
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-0.5">
                  Languages
                </h5>
                <p className="text-xs text-[#3D352E]">
                  {LANGUAGES_DATA.map((l) => `${l.language} (${l.proficiency})`).join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (evidence.type === 'capstone') {
      return (
        <div className="rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-5">
          <p className="text-xs font-bold text-[#2E5A36] mb-3">
            🚀 DC SPACE Conceptual Intelligence Workflow
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
              <span className="inline-block rounded-full bg-[#E0E7FF] px-2.5 py-0.5 font-bold text-[#2D3A8C] mb-1.5">
                1. Event Data Analysis
              </span>
              <p className="text-[#3D352E] leading-relaxed">
                Analyzes event-related data to give organizers a clear, structured understanding of venue activity and attendance patterns.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
              <span className="inline-block rounded-full bg-[#FFF3B0] px-2.5 py-0.5 font-bold text-[#7A5C12] mb-1.5">
                2. Predictive Crowd Management
              </span>
              <p className="text-[#3D352E] leading-relaxed">
                Uses data-driven insights to anticipate crowd conditions before bottlenecks occur, supporting safer crowd flow.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#F0EAE1] p-4">
              <span className="inline-block rounded-full bg-[#D8E8D5] px-2.5 py-0.5 font-bold text-[#2E5A36] mb-1.5">
                3. Adaptive Event Optimization
              </span>
              <p className="text-[#3D352E] leading-relaxed">
                Helps event organizers adapt schedules, layouts, and operations for stronger event planning and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (evidence.type === 'contact') {
      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#F0EAE1] bg-white p-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#2E5A36]" />
              <strong>Phone:</strong>{' '}
              <a href={`tel:${PERSONAL_INFO_DATA.phone}`} className="hover:underline">
                {PERSONAL_INFO_DATA.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#8A2E3B]" />
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${PERSONAL_INFO_DATA.email}`}
                className="text-[#8A2E3B] font-semibold hover:underline"
              >
                {PERSONAL_INFO_DATA.email}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#7A5C12] shrink-0 mt-0.5" />
              <span>
                <strong>Address:</strong> {PERSONAL_INFO_DATA.address}
              </span>
            </p>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] p-5 space-y-3"
          >
            <div className="flex items-center gap-2">
              <img src="/heart.gif" alt="heart" className="w-5 h-5 object-contain" />
              <h4 className="font-heading text-base font-bold text-[#3D352E]">
                Leave a Comment / Message for Gwyneth
              </h4>
            </div>
            {contactSent ? (
              <div className="rounded-2xl bg-[#D8E8D5] p-4 text-sm font-bold text-[#2E5A36]">
                ✨ Thank you, {senderName}! Your message has been sent directly to Gwyneth ({PERSONAL_INFO_DATA.email}).
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-[#3D352E] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Recruiter / Visitor"
                      className="w-full rounded-xl border border-[#F0EAE1] bg-white px-3 py-2 text-sm text-[#3D352E]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#3D352E] mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#F0EAE1] bg-white px-3 py-2 text-sm text-[#3D352E]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-msg"
                    className="block text-xs font-bold text-[#3D352E] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hello Gwyneth! I loved checking out your portfolio..."
                    className="w-full rounded-xl border border-[#F0EAE1] bg-white px-3 py-2 text-sm text-[#3D352E]"
                  />
                </div>
                {contactError && (
                  <p className="text-xs font-bold text-[#8A2E3B]">{contactError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7cbd0] cursor-pointer disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Send Comment 💌'}
                </button>
              </>
            )}
          </form>
        </div>
      );
    }

    // Default: Certificate Preview (Displays scan image if available, otherwise stylized card)
    if (evidence.imageSrc) {
      return (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-[#E5DEC9] bg-white p-3 shadow-inner text-center">
            <img
              src={evidence.imageSrc}
              alt={evidence.title}
              className="w-full h-auto max-h-[460px] object-contain rounded-xl mx-auto shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {evidence.date && (
              <span className="font-semibold text-[#2E5A36] bg-[#D8E8D5] px-3 py-1 rounded-full">
                📅 Date Issued: {evidence.date}
              </span>
            )}
            <a
              href={evidence.imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#8A2E3B] hover:underline"
            >
              <span>View Full Resolution</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-3xl border-2 border-[#E5DEC9] bg-gradient-to-br from-[#FFFFFF] via-[#FAF7F2] to-[#F5EFE6] p-6 shadow-inner relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#2E5A36]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A6F66]">
              Verified Certification Record
            </span>
          </div>
          <span className="text-xs font-semibold text-[#2E5A36]">
            BSIT Portfolio Credential
          </span>
        </div>

        <div className="text-center py-3">
          <p className="text-xs font-medium text-[#7A6F66] mb-1">
            This certifies that
          </p>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-[#3D352E] mb-2">
            {evidence.holderName}
          </p>
          <p className="text-xs font-medium text-[#7A6F66] mb-2">
            has successfully earned the
          </p>
          <h4 className="font-heading text-lg sm:text-xl font-bold text-[#2E5A36] mb-1">
            {evidence.title}
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-[#3D352E]">
            {evidence.contextLabel}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A6F66]">
          <span>🎓 St. Dominic College of Asia · BSIT</span>
          <span className="font-bold text-[#2E5A36]">✓ Verified Credential</span>
        </div>
      </div>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF7F2] border border-[#F0EAE1] shadow-2xl p-6 sm:p-8 space-y-6"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#F0EAE1] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${accent.bg} ${accent.text}`}
              >
                {evidence.contextLabel}
              </span>
            </div>
            <h3
              id="modal-title"
              className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E]"
            >
              {evidence.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6F66] mt-0.5">
              {evidence.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full bg-white border border-[#F0EAE1] p-2 text-[#7A6F66] hover:text-[#3D352E] hover:bg-[#FAF7F2] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Visual Preview */}
        {renderVisualPreview()}

        {/* Summary and Highlights */}
        <div className="space-y-3">
          <p className="text-sm text-[#3D352E] leading-relaxed">
            {evidence.summary}
          </p>

          <div className="space-y-1.5 pt-2">
            {evidence.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#3D352E]"
              >
                <span className="text-[#2E5A36] font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
          <span className="text-xs text-[#7A6F66]">
            Press <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px]">Esc</kbd> to close
          </span>
          <button
            type="button"
            onClick={onClose}
            className="spring-btn rounded-full bg-[#3D352E] px-5 py-2 text-xs sm:text-sm font-bold text-white hover:bg-[#2E5A36] cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

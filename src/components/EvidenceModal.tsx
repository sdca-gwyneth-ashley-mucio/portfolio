import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle2,
  Award,
  FileText,
  Send,
  Printer,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import {
  CAPSTONE_PROJECT_DATA,
  CERTIFICATIONS_DATA,
  EDUCATIONAL_BACKGROUND_DATA,
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
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    setContactError(null);
    setContactSent(false);
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) {
      setContactError('Please fill in your name, email, and message before sending.');
      return;
    }
    setContactError(null);
    setContactSent(true);
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
              <p>📞 {PERSONAL_INFO_DATA.phone}</p>
              <p>✉️ {PERSONAL_INFO_DATA.email}</p>
              <p>📍 {PERSONAL_INFO_DATA.address}</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
              About Me / Professional Summary
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed text-[#3D352E]">
              {PERSONAL_INFO_DATA.summarySentences.join(' ')}
            </p>
          </div>

          {/* Education */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1.5">
              Educational Background
            </h5>
            <div className="space-y-2">
              {EDUCATIONAL_BACKGROUND_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] p-3"
                >
                  <div className="flex flex-wrap justify-between font-bold text-[#3D352E]">
                    <span>{edu.degreeOrTrack}</span>
                    <span className="text-[#2E5A36] tabular-nums">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[#7A6F66]">
                    {edu.institution}
                    {edu.location ? ` — ${edu.location}` : ''}
                  </p>
                  {edu.coursework && (
                    <p className="text-xs text-[#3D352E] mt-1">
                      <strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
              Projects ({CAPSTONE_PROJECT_DATA.projectType})
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
                <strong>Foundations:</strong>{' '}
                {techSkills.map((s) => s.name).join(', ')}
              </p>
            </div>

            <div className="rounded-xl bg-[#FAF7F2] border border-[#F0EAE1] p-3 space-y-2">
              <div>
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E5A36] mb-1">
                  Certifications
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
            <h4 className="font-heading text-base font-bold text-[#3D352E]">
              Send a Direct Message to Gwyneth
            </h4>
            {contactSent ? (
              <div className="rounded-2xl bg-[#D8E8D5] p-4 text-sm font-bold text-[#2E5A36]">
                ✨ Thank you, {senderName}! Your message for Gwyneth Ashley Mucio ({PERSONAL_INFO_DATA.email}) has been recorded.
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
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Recruiter / Instructor"
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
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hello Gwyneth! I reviewed your BSIT portfolio and DC SPACE capstone project..."
                    className="w-full rounded-xl border border-[#F0EAE1] bg-white px-3 py-2 text-sm text-[#3D352E]"
                  />
                </div>
                {contactError && (
                  <p className="text-xs font-bold text-[#8A2E3B]">{contactError}</p>
                )}
                <button
                  type="submit"
                  className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#FCE1E4] px-5 py-2.5 text-sm font-bold text-[#8A2E3B] hover:bg-[#f7cbd0] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      );
    }

    // Default: Styled Certificate Credential Card for Gwyneth Ashley Mucio
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D352E]/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="evidence-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${accent.bg} ${accent.text} mb-2`}
            >
              {evidence.type === 'certificate' ? (
                <Award className="h-3.5 w-3.5" />
              ) : (
                <FileText className="h-3.5 w-3.5" />
              )}
              {evidence.contextLabel}
            </span>
            <h3
              id="evidence-modal-title"
              className="font-heading text-xl sm:text-2xl font-bold text-[#3D352E]"
            >
              {evidence.title}
            </h3>
            <p className="text-sm font-medium text-[#7A6F66] mt-0.5">
              {evidence.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="spring-btn rounded-full border border-[#F0EAE1] bg-[#FAF7F2] p-2 text-[#3D352E] hover:bg-[#FCE1E4] hover:text-[#8A2E3B] cursor-pointer shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-5">{renderVisualPreview()}</div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-[#FAF7F2] border border-[#F0EAE1] p-4">
            <p className="text-xs font-bold text-[#7A6F66] uppercase tracking-wider mb-1">
              Overview
            </p>
            <p className="text-sm text-[#3D352E] leading-relaxed">
              {evidence.summary}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[#7A6F66] uppercase tracking-wider mb-2">
              Key Highlights:
            </p>
            <ul className="space-y-2">
              {evidence.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#3D352E]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#2E5A36] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3">
          {evidence.type === 'resume' ? (
            <button
              type="button"
              onClick={() => window.print()}
              className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#D8E8D5] px-4 py-2 text-xs sm:text-sm font-bold text-[#2E5A36] cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              Print / Save One-Page Resume
            </button>
          ) : (
            <span className="text-xs text-[#7A6F66]">
              Portfolio Holder: <strong className="text-[#3D352E]">{evidence.holderName}</strong>
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="spring-btn rounded-full bg-[#3D352E] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#2E5A36] cursor-pointer"
          >
            Done Viewing ✓
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';
import { SOFT_SPRING } from '../utils/motionVariants';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * WCAG 2.2 Compliant Contact Form
 * - Full keyboard and screen reader accessibility
 * - Explicit error identification (SC 3.3.1) and field associations (aria-invalid, aria-describedby)
 * - Accessible name and autocomplete for redundant entry prevention (SC 3.3.7)
 * - Minimum touch target sizing of >= 44x44px (SC 2.5.8)
 * - Subtle spring micro-interactions on submission
 */
export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message before sending.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError(null);
    try {
      const res = await fetch(PERSONAL_INFO_DATA.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setError(
        `Sorry, your message couldn't be sent right now. Please email me directly at ${PERSONAL_INFO_DATA.email}.`
      );
    }
  };

  const inputClass =
    'w-full min-h-[44px] rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#3D352E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8A2E3B]/30 focus:border-[#8A2E3B] transition-colors';

  if (status === 'sent') {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 shadow-sm"
      >
        <div className="rounded-2xl bg-[#FCE1E4] p-5 text-sm text-[#8A2E3B] space-y-1">
          <p className="font-bold flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            Thank you — your message was delivered!
          </p>
          <p>I'll get back to you by email as soon as I can.</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 min-h-[44px] inline-flex items-center text-sm font-semibold text-[#8A2E3B] underline cursor-pointer"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const hasNameError = status === 'error' && !name.trim();
  const hasEmailError = status === 'error' && !email.trim();
  const hasMessageError = status === 'error' && !message.trim();

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      className="rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <h3 id="contact-form-title" className="font-heading text-lg font-bold text-[#3D352E]">
        Leave a message
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-[#3D352E] mb-1.5">
            Name <span className="text-[#8A2E3B]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={hasNameError}
            aria-describedby={hasNameError ? 'contact-form-error' : undefined}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputClass} ${hasNameError ? 'border-[#8A2E3B] bg-[#FCE1E4]/20' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-[#3D352E] mb-1.5">
            Email <span className="text-[#8A2E3B]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={hasEmailError}
            aria-describedby={hasEmailError ? 'contact-form-error' : undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputClass} ${hasEmailError ? 'border-[#8A2E3B] bg-[#FCE1E4]/20' : ''}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-[#3D352E] mb-1.5">
          Message <span className="text-[#8A2E3B]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={hasMessageError}
          aria-describedby={hasMessageError ? 'contact-form-error' : undefined}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Internship opportunities, questions, or just saying hi…"
          className={`${inputClass} min-h-[110px] ${hasMessageError ? 'border-[#8A2E3B] bg-[#FCE1E4]/20' : ''}`}
        />
      </div>

      {status === 'error' && error && (
        <p id="contact-form-error" role="alert" aria-live="assertive" className="text-sm font-semibold text-[#8A2E3B]">
          {error}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={SOFT_SPRING}
        className="spring-btn min-h-[44px] inline-flex items-center gap-2 rounded-full bg-[#8A2E3B] px-6 py-3 text-sm font-bold text-white hover:bg-[#752531] cursor-pointer disabled:opacity-60 disabled:cursor-wait"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </motion.button>
    </form>
  );
};

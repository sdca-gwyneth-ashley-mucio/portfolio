import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { PERSONAL_INFO_DATA } from '../data/portfolioData';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Comment / contact form that posts to Formspree.
 * Shows success ONLY when Formspree confirms delivery; any failure shows an
 * error with the email fallback so no message is silently lost.
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
      setError('Please fill in your name, email, and message.');
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
    'w-full rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#3D352E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A36]/30 focus:border-[#2E5A36] transition-colors';

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 shadow-sm"
      >
        <div className="rounded-2xl bg-[#D8E8D5] p-5 text-sm text-[#2E5A36] space-y-1">
          <p className="font-bold">Thank you — your message was delivered!</p>
          <p>I'll get back to you by email as soon as I can.</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-[#2E5A36] underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-[#F0EAE1] bg-white p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <h3 className="font-heading text-lg font-bold text-[#3D352E] flex items-center gap-2">
        Leave a message
        <img src="/heart.gif" alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-[#3D352E] mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-[#3D352E] mb-1.5">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-[#3D352E] mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Internship opportunities, questions, or just saying hi…"
          className={inputClass}
        />
      </div>

      {status === 'error' && error && (
        <p role="alert" className="text-sm font-semibold text-[#8A2E3B]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="spring-btn inline-flex items-center gap-2 rounded-full bg-[#2E5A36] px-6 py-3 text-sm font-bold text-white hover:bg-[#244a2b] cursor-pointer disabled:opacity-60 disabled:cursor-wait"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

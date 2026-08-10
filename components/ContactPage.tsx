'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { sendContactEmail, type ContactFormData } from '@/app/actions/contact';
import { film } from '@/data/film';

const initialData: ContactFormData = { name: '', email: '', inquiryType: 'General inquiry', message: '', website: '' };

export default function ContactPage() {
  const [formData, setFormData] = useState(initialData);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (field: keyof ContactFormData, value: string) => setFormData((current) => ({ ...current, [field]: value }));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const result = await sendContactEmail(formData);
    if (result.success) {
      setStatus('success');
      setFormData(initialData);
    } else {
      setStatus('error');
      setError(result.error || 'Message could not be sent.');
    }
  }

  return (
    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
      <aside>
        <a href={`mailto:${film.contactEmail}`} className="break-all text-lg font-semibold underline decoration-accent decoration-2 underline-offset-4">{film.contactEmail}</a>
        <p className="mt-6 text-sm leading-7 text-muted">For press, festival, screening, partnership, and general production inquiries.</p>
        <a href={film.imdbUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm font-semibold">IMDb ↗</a>
      </aside>

      <form onSubmit={submit} className="space-y-6" noValidate>
        {status === 'success' && <div role="status" className="flex gap-3 bg-panel p-4 text-sm"><CheckCircle2 className="text-navy dark:text-accent" size={20} />Message sent. The production team will be in touch.</div>}
        {status === 'error' && <div role="alert" className="flex gap-3 bg-panel p-4 text-sm text-red-700 dark:text-red-300"><AlertCircle size={20} />{error}</div>}
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Name<input required maxLength={100} autoComplete="name" value={formData.name} onChange={(event) => update('name', event.target.value)} className="min-h-12 border border-line bg-panel px-4 font-normal text-ink" /></label>
          <label className="grid gap-2 text-sm font-semibold">Email<input required maxLength={254} type="email" autoComplete="email" value={formData.email} onChange={(event) => update('email', event.target.value)} className="min-h-12 border border-line bg-panel px-4 font-normal text-ink" /></label>
        </div>
        <label className="grid gap-2 text-sm font-semibold">Inquiry
          <select value={formData.inquiryType} onChange={(event) => update('inquiryType', event.target.value)} className="min-h-12 border border-line bg-panel px-4 font-normal text-ink">
            <option>General inquiry</option><option>Press</option><option>Festival</option><option>Screening</option><option>Partnership</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">Message<textarea required minLength={10} maxLength={4000} rows={7} value={formData.message} onChange={(event) => update('message', event.target.value)} className="border border-line bg-panel p-4 font-normal text-ink" /></label>
        <label className="absolute -left-[9999px]" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={formData.website} onChange={(event) => update('website', event.target.value)} /></label>
        <button disabled={status === 'sending'} className="inline-flex min-h-12 items-center gap-3 bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-navy disabled:opacity-50">
          <Send size={17} />{status === 'sending' ? 'Sending…' : 'Send inquiry'}
        </button>
      </form>
    </div>
  );
}

'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { SOCIAL_LINKS } from '../constants';
import { sendContactEmail, type ContactFormData } from '@/app/actions/contact';
import { User, Mail, MessageSquare, Briefcase, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage(): React.ReactElement {
  const searchParams = useSearchParams();
  const inquiry = searchParams.get('inquiry');

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    inquiryType: inquiry || 'General Inquiry',
    role: 'Other',
    message: ''
  });

  const inquiryOptions = [
    'General Inquiry',
    'Project Request'
  ];

  const roleOptions = [
    'Producer',
    'Investor',
    'Director',
    'Support',
    'Project Partnership',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
    <div className="pt-32 pb-12 px-6 bg-white dark:bg-[#0a0a0a] min-h-app flex flex-col items-center justify-center text-center relative overflow-hidden pb-safe">
        <div className="max-w-md reveal-up active relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-chinese-red/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-chinese-red" />
            </div>
          </div>
          <h2 className="font-display text-5xl mb-6 text-chinese-red">Message Sent</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm uppercase tracking-[0.3em] font-bold leading-relaxed mb-12">
            Your inquiry about <span className="text-chinese-red">Enemy Alien</span> has been received. We will get back to you shortly.
          </p>
          <button 
            onClick={() => setSubmitStatus('idle')}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-muted hover:text-chinese-red transition-all border-b border-gold/20 pb-2 font-bold"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-view-anchor" className="pt-24 pb-20 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-app flex flex-col relative overflow-hidden pb-safe">
      
      <div className="max-w-3xl mx-auto w-full flex-grow relative z-10">
        <header className="mb-12 text-left reveal-up active">
          <h1 className="font-display text-4xl md:text-6xl font-normal tracking-tighter text-neutral-900 dark:text-white leading-none uppercase">Get in <span className="text-chinese-red">Touch</span></h1>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-2xl">
            For inquiries regarding <span className="text-chinese-red font-bold">Enemy Alien</span>, including production, development, and partnership opportunities, please contact us.
          </p>
        </header>
        
        <div className="w-full reveal-up active">
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-sm flex items-center gap-3 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inquiry Type Dropdown */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-chinese-red font-bold">
                  <Briefcase className="w-3 h-3" /> Inquiry Type
                </label>
                <div className="relative group">
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full appearance-none bg-neutral-50 dark:bg-neutral-900/50 border border-gold/20 px-4 py-4 focus:outline-none focus:border-chinese-red transition-all font-medium text-neutral-900 dark:text-white rounded-sm cursor-pointer"
                  >
                    {inquiryOptions.map(opt => (
                      <option key={opt} value={opt} className="bg-white dark:bg-black">{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-muted pointer-events-none group-hover:text-chinese-red transition-colors" />
                </div>
              </div>

              {/* Role Dropdown */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-chinese-red font-bold">
                  <User className="w-3 h-3" /> Your Role
                </label>
                <div className="relative group">
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full appearance-none bg-neutral-50 dark:bg-neutral-900/50 border border-gold/20 px-4 py-4 focus:outline-none focus:border-chinese-red transition-all font-medium text-neutral-900 dark:text-white rounded-sm cursor-pointer"
                  >
                    {roleOptions.map(opt => (
                      <option key={opt} value={opt} className="bg-white dark:bg-black">{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-muted pointer-events-none group-hover:text-chinese-red transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-muted font-bold">
                  <User className="w-3 h-3 text-chinese-red" /> Full Name
                </label>
                <div className="relative">
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-50 dark:bg-neutral-900/50 border border-gold/20 px-4 py-4 focus:outline-none focus:border-chinese-red transition-all font-medium text-neutral-900 dark:text-white rounded-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600" 
                    placeholder="Enter your name" 
                    id="name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-muted font-bold">
                  <Mail className="w-3 h-3 text-chinese-red" /> Email Address
                </label>
                <div className="relative">
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-50 dark:bg-neutral-900/50 border border-gold/20 px-4 py-4 focus:outline-none focus:border-chinese-red transition-all font-medium text-neutral-900 dark:text-white rounded-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600" 
                    placeholder="example@email.com" 
                    id="email"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-muted font-bold">
                  <MessageSquare className="w-3 h-3 text-chinese-red" /> Your Message
                </label>
                <textarea 
                  required 
                  rows={6} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-neutral-50 dark:bg-neutral-900/50 border border-gold/20 px-4 py-4 focus:outline-none focus:border-chinese-red transition-all font-medium resize-none text-neutral-900 dark:text-white rounded-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600" 
                  placeholder="Tell us about your project or inquiry..."
                  id="message"
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className={`w-full py-6 bg-chinese-red text-white transition-all duration-500 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-red-700 disabled:opacity-20 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm border border-gold/20 shadow-xl flex items-center justify-center gap-4`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Submit Inquiry</span>
                )}
              </button>
            </div>
          </form>

          {/* Minimal Footer Info */}
          <div className="mt-20 pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-widest text-chinese-red font-bold">Official Representation</p>
              <div className="flex flex-col gap-2">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">Aaron Kogan Management / Filmclusive</p>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">{SOCIAL_LINKS.phone}</p>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  {SOCIAL_LINKS.displayEmails.map(email => (
                    <span key={email} className="text-sm font-normal text-neutral-600 dark:text-neutral-400">{email}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-[10px] uppercase tracking-widest text-gold-muted hover:text-chinese-red transition-colors font-bold border-b border-gold/10 pb-1">Instagram</a>
              <a href={SOCIAL_LINKS.imdb} target="_blank" className="text-[10px] uppercase tracking-widest text-gold-muted hover:text-chinese-red transition-colors font-bold border-b border-gold/10 pb-1">IMDB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

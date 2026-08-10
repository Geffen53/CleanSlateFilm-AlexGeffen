
import * as React from 'react';

export default function TermsPage(): React.ReactElement {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white uppercase">Terms of <span className="text-chinese-red">Service</span></h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-xl font-normal leading-relaxed max-w-3xl">
            Governing guidelines for intellectual property, usage rights, and professional engagement regarding the <span className="text-chinese-red font-medium">Enemy Alien</span> brand.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 reveal-up active">
          <div className="space-y-12">
            <section aria-labelledby="ownership-rights">
              <h2 id="ownership-rights" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Ownership & Copyright</h2>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                All intellectual property rights and legal ownership of all photographs and motion sequences created during our engagement remain protected by copyright.
              </p>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                We reserve the right to use any photos for portfolio display, marketing, and self-promotion. We assume this right for all captured imagery unless specifically instructed otherwise in writing prior to or following the session.
              </p>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                We aim to provide credit to those featured in our marketing materials when possible, though it is not always feasible.
              </p>
            </section>

            <section aria-labelledby="client-usage">
              <h2 id="client-usage" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Usage & Removal</h2>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Upon agreement, participants are granted specific rights to use their delivered media for personal use and their own professional marketing.
              </p>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Subjects have the right to request the removal of specific images featuring their likeness from our public portfolio or social media. We will honor these requests promptly and without discrimination.
              </p>
            </section>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="commercial-resale">
              <h2 id="commercial-resale" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Commercial Resale & Licensing</h2>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Licensing for third-party use is handled on a case-by-case basis. Media may not be sold or licensed to third parties without explicit written consent.
              </p>
            </section>

            <section aria-labelledby="legal-jurisdiction" className="bg-neutral-50 dark:bg-neutral-900/30 p-10 border border-gold/10 shadow-sm relative overflow-hidden">
              <h2 id="legal-jurisdiction" className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold border-b border-gold/20 pb-4 mb-8">Legal Jurisdiction</h2>
              <p className="text-neutral-700 dark:text-neutral-400 font-normal leading-relaxed mb-4">
                These terms are governed by the laws of the State of California, USA. Engagement with our marketing materials constitutes acceptance of these terms.
              </p>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-widest text-gold-muted font-bold">Last Revised: February 2026</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

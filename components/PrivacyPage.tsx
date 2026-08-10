import * as React from 'react';

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9]">Privacy <br/><span className="text-chinese-red">Policy</span></h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xl font-normal leading-relaxed max-w-3xl">
            This policy outlines how data and imagery are handled by the <span className="text-chinese-red font-medium">Enemy Alien</span> marketing team. We prioritize your privacy and the security of your professional communications.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 reveal-up active">
          <div className="space-y-12">
            <section aria-labelledby="photo-usage-privacy">
              <h2 id="photo-usage-privacy" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Photo Usage & Marketing</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Captured images are used for promotional purposes, social media, and general marketing to celebrate the film's legacy. We assume consent for this usage unless you specifically instruct us otherwise in writing.
              </p>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                We make a professional effort to credit individuals featured in our marketing when possible, though we cannot guarantee credit for every photo due to the volume of images and available information.
              </p>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                If you find a photo featuring your face or image that you wish to have removed from our public platforms, you may request its removal at any time. We will honor these requests without discrimination.
              </p>
            </section>

            <section aria-labelledby="data-handling">
              <h2 id="data-handling" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Data Handling</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Personal information shared through contact forms is used exclusively for consultation and updates regarding the film. We do not disclose your personal contact information to third parties or sell your details to data brokers.
              </p>
            </section>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="security">
              <h2 id="security" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Information Security</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                All communications via this site are processed through secure protocols. We utilize industry-standard encryption to protect your data and maintain the confidentiality of our engagement.
              </p>
            </section>

            <section aria-labelledby="privacy-contact" className="bg-neutral-50 dark:bg-neutral-900/40 p-10 border border-gold/10 shadow-sm relative overflow-hidden">
              <h2 id="privacy-contact" className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold border-b border-gold/20 pb-4 mb-8">Support</h2>
              <div className="space-y-4">
                <p className="text-neutral-800 dark:text-neutral-400 font-normal mb-4">Direct all privacy and removal inquiries via our:</p>
                <a href="/contact" className="text-chinese-red text-xl font-bold hover:underline underline-offset-8 transition-all">Contact Form</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
import * as React from 'react';
import VideoPlaceholder from '@/components/VideoPlaceholder';

export default function AboutPage(): React.ReactElement {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-screen relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 space-y-8 lg:space-y-12 reveal-up active">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-gold/10">
              <div className="aspect-[3/4] w-full flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="mx-auto w-16 h-16 rounded-full border border-chinese-red/20 dark:border-gold/20 flex items-center justify-center bg-white/70 dark:bg-black/20">
                    <span className="font-display text-2xl tracking-tight text-chinese-red">EA</span>
                  </div>
                  <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-gold-muted font-bold">
                    Historical Artwork
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:space-y-10">
              <div className="flex flex-col gap-6 border-b border-gold/10 pb-8 lg:pb-10">
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.4em] text-chinese-red font-bold">Release Year</h4>
                  <p className="text-xs font-normal text-neutral-900 dark:text-white uppercase tracking-widest">2026</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.4em] text-chinese-red font-bold">Production</h4>
                  <p className="text-xs font-normal text-neutral-900 dark:text-white uppercase tracking-widest">Independent Film</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.4em] text-chinese-red font-bold">Focus</h4>
                  <p className="text-xs font-normal text-neutral-900 dark:text-white uppercase tracking-widest">Historical Drama</p>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-gold/10">
                <h3 className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">Key Elements</h3>
                <ul className="text-[9px] md:text-[11px] leading-relaxed space-y-4 font-normal text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                  <li><span className="text-chinese-red dark:text-chinese-red font-bold">The Yamamoto Family</span></li>
                  <li><span className="text-chinese-red dark:text-chinese-red font-bold">Community Leaders</span></li>
                  <li><span className="text-chinese-red dark:text-chinese-red font-bold">Historical Consultants</span></li>
                  <li><span className="text-chinese-red dark:text-chinese-red font-bold">Supporting Cast</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <div className="lg:col-span-9 space-y-20 reveal-up">
            <header className="border-b border-gold/10 pb-16">
              <h1 className="font-display text-5xl md:text-8xl font-normal tracking-tighter mb-4 text-neutral-900 dark:text-white leading-[0.85] uppercase">
                About the <span className="text-chinese-red">Film</span>
              </h1>
              <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-gold-muted font-bold mb-12">
                Asian-American history and resilience
              </p>

              <div className="max-w-3xl space-y-8 text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed text-base md:text-lg">
                <p>
                  <span className="italic">Enemy Alien</span> is a historical drama that chronicles the Yamamoto family's experience during the Japanese-American internment of World War II.
                </p>
                <p>
                  The film is a moving exploration of Asian-American history and resilience, featuring a dedicated cast that brings the Yamamoto family's story to life. It tells the journey of a family forced from their home and into internment camps, highlighting their struggle to maintain dignity and hope in the face of adversity.
                </p>
                <p>
                  With its moving story and historical significance, the film captures the emotional weight of the era while exploring themes of justice, resilience, and the endurance of the human spirit.
                </p>
              </div>
            </header>

            <section className="space-y-12">
              <div className="flex items-center gap-6">
                <h2 className="text-[10px] uppercase tracking-[0.6em] text-chinese-red font-bold whitespace-nowrap">
                  The Historical Basis
                </h2>
                <div className="h-px w-full bg-gold/20"></div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                The film is based on extensive historical research and personal accounts from those who lived through the internment. Every scene is crafted with a commitment to authenticity and respect for the individuals whose lives were forever changed by these events.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-chinese-red font-bold flex items-center gap-4">
                Production Trivia <div className="h-px flex-1 bg-gold/20"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-normal text-chinese-red uppercase tracking-tight">Authentic Settings</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2 leading-relaxed">
                    The internment camp sets were painstakingly recreated to capture the stark reality and challenging conditions faced by Japanese-Americans during WWII.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-chinese-red uppercase tracking-tight">Historical Accuracy</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2 leading-relaxed">
                    The film has been recognized for its powerful storytelling and historical accuracy, garnering praise for its contribution to Asian-American historical cinema.
                  </p>
                </div>
              </div>
            </section>

            <footer className="pt-12 flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center justify-center px-12 py-5 bg-chinese-red text-white hover:bg-red-700 transition-all duration-700 uppercase tracking-[0.3em] text-[10px] font-bold shadow-xl rounded-2xl border border-gold/20"
              >
                Inquire for Screenings
              </button>
              <button
                onClick={() => window.location.href = '/blog'}
                className="inline-flex items-center justify-center px-12 py-5 border border-gold/30 text-neutral-900 dark:text-gold hover:bg-gold/5 transition-all duration-700 uppercase tracking-[0.3em] text-[10px] font-bold rounded-2xl"
              >
                Historical Blog
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

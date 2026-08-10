'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import BarbedWire from '@/components/BarbedWire';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';

export default function Home() {
  const router = useRouter();
  const [isTrailerOpen, setIsTrailerOpen] = React.useState(false);
  const videoUrl = "https://landingstorage.filmclusive.com/personal-projects/enemy-alien/12.14.22_EA_Sizzle%202023%20(2026)_website.mp4";

  const navigateTo = (path: string) => {
    router.push(path);
  };

  React.useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <React.Fragment>
      <Hero 
        onExplore={() => {
          const element = document.getElementById('trailer');
          element?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onWatchTrailer={() => setIsTrailerOpen(true)}
      />

      {/* New Trailer Section - Now Second Section */}
      <section id="trailer" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white transition-colors duration-500 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,37,0,0.15),_transparent_70%)]"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <h3 className="text-xs uppercase tracking-[0.6em] text-chinese-red mb-6 font-black">Official Trailer</h3>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tighter uppercase font-black leading-[0.9]">
                Experience <br /> The <span className="text-chinese-red">Truth</span>.
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed font-medium">
                Watch the official trailer for Enemy Alien and witness the journey of the Senzaki family through one of America's darkest chapters.
              </p>
              <button
                onClick={() => setIsTrailerOpen(true)}
                className="group flex items-center gap-6 px-10 py-5 bg-white text-black hover:bg-chinese-red hover:text-white transition-all duration-500 uppercase tracking-[0.4em] text-xs font-black rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <div className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
                Play Trailer
              </button>
            </div>
            
            <div className="reveal-up">
              <div 
                onClick={() => setIsTrailerOpen(true)}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-black"
              >
                {/* Auto-playing Preview Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-20 h-20 rounded-full bg-chinese-red/90 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] uppercase tracking-[0.2em] font-black text-white/80">
                    Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Synopsis Section */}
      <section id="synopsis" className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-500 relative border-b border-neutral-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center reveal-up">
           <p className="font-sans text-xl md:text-3xl uppercase tracking-[0.15em] md:tracking-[0.2em] text-neutral-800 dark:text-neutral-200 font-bold leading-relaxed">
            After the attack on Pearl Harbor, a Japanese American family in Los Angeles is forced into incarceration by the United States government. Over the next four decades, one survivor becomes part of the movement that forces the nation to confront the injustice and demand redress.
          </p>
        </div>
      </section>

      {/* Featured Characters Teaser */}
      <section className="py-32 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16 reveal-up">
            <h3 className="text-chinese-red uppercase tracking-[0.3em] text-xs font-black mb-6">Characters</h3>
            <h2 className="font-display text-4xl md:text-6xl text-neutral-900 dark:text-white mb-8 uppercase tracking-tighter font-black">The <span className="text-chinese-red">Senzaki</span> Family</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
              Meet the family at the center of the struggle for identity and justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Harry", role: "The Survivor" },
              { name: "Ken", role: "The Pragmatist" },
              { name: "Yoshi", role: "The Patriarch" },
              { name: "Amiko", role: "The Anchor" }
            ].map((char, i) => (
              <div key={char.name} className="reveal-up group bg-[var(--color-desert-sand)] dark:bg-neutral-900/60 p-10 border border-neutral-200 dark:border-white/5 rounded-sm hover:border-chinese-red transition-all" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-2">{char.name}</h3>
                <p className="text-chinese-red uppercase tracking-[0.2em] text-[10px] font-black mb-6">{char.role}</p>
                <Link href="/characters" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-chinese-red transition-colors font-black">View Profile →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Timeline Teaser */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] text-neutral-900 dark:text-neutral-200 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <BarbedWire wireSpacing={150} color="#777" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-12 text-neutral-900 dark:text-white transition-colors duration-500 tracking-tighter uppercase font-black leading-none">
                A <span className="text-chinese-red">National</span> <br /> Reckoning.
              </h2>
              <div className="space-y-10">
                <div className="flex gap-8 items-start">
                  <span className="font-display text-3xl md:text-4xl text-chinese-red font-black">1941</span>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-medium leading-relaxed">Pearl Harbor and the beginning of the forced removal of Japanese Americans.</p>
                </div>
                <div className="flex gap-8 items-start">
                  <span className="font-display text-3xl md:text-4xl text-chinese-red font-black">1988</span>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-medium leading-relaxed">The Civil Liberties Act and a formal apology from the United States government.</p>
                </div>
              </div>
              <div className="pt-16">
                <button
                  onClick={() => navigateTo('/history')}
                  className="px-12 py-5 bg-chinese-red text-white hover:bg-red-900 transition-all uppercase tracking-[0.3em] text-xs font-black rounded-sm shadow-xl"
                >
                  Discover the History
                </button>
              </div>
            </div>
            <div className="reveal-up hidden lg:block">
              <div className="aspect-[4/5] bg-white/40 dark:bg-black/40 backdrop-blur-sm border-2 border-chinese-red/20 rounded-sm flex items-center justify-center p-16 text-center italic text-2xl text-neutral-800 dark:text-neutral-200 font-serif leading-relaxed">
                "Those who cannot remember the past are condemned to repeat it."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-500 relative">
        <div className="max-w-screen-xl mx-auto text-center reveal-up">
          <h2 className="font-display text-4xl md:text-7xl tracking-tighter text-neutral-900 dark:text-white uppercase mb-12 font-black leading-tight">
            Experience the <span className="text-chinese-red">Injustice</span>. <br /> Witness the <span className="text-chinese-red">Redemption</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
            <Link
              href="/access"
              className="px-16 py-6 bg-chinese-red text-white hover:bg-red-900 transition-all uppercase tracking-[0.4em] text-xs font-black rounded-sm shadow-2xl"
            >
              Industry Access
            </Link>
            <Link
              href="/story"
              className="px-16 py-6 border-4 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-[0.4em] text-xs font-black rounded-sm"
            >
              Series Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      <AnimatePresence>
        {isTrailerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full h-full flex items-center justify-center"
            >
              <VideoPlayer 
                src={videoUrl} 
                autoPlay={true} 
                onClose={() => setIsTrailerOpen(false)}
                isTheaterMode={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}

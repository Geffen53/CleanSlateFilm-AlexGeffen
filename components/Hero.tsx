
import * as React from 'react';
import Link from 'next/link';
import DustStorm from './DustStorm';
import BarbedWire from './BarbedWire';
import { Play } from 'lucide-react';

interface HeroProps {
  onExplore?: () => void;
  onWatchTrailer?: () => void;
}

export default function Hero({ onExplore, onWatchTrailer }: HeroProps): React.ReactElement {
  return (
    <div className="relative min-h-app w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black pt-safe pt-16 md:pt-24 pb-10 pb-safe">
      {/* Native Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#3d2b1f]/40 z-10 mix-blend-color"></div> {/* Sepia/Dust tint */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover grayscale contrast-125 brightness-[0.6]"
        >
          <source src="https://landingstorage.filmclusive.com/personal-projects/enemy-alien/12.14.22_EA_Sizzle%202023%20(2026)_website.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-black z-20"></div>
      </div>

      {/* Atmospheric Effects */}
      <DustStorm />
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        <BarbedWire className="opacity-40" wireSpacing={300} color="#333" />
      </div>

      {/* Sales-Focused Content Overlay - Centered & Immersive */}
      <div className="relative z-30 space-y-8 md:space-y-12 max-w-6xl reveal-up active w-full">
        <div className="space-y-4 md:space-y-8 px-4">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.1em] leading-[1] md:leading-[0.95] font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase border-b-4 border-chinese-red inline-block pb-6">
            Enemy <span className="text-chinese-red">Alien</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs md:text-sm lg:text-base uppercase tracking-[0.5em] text-neutral-200 font-extrabold leading-relaxed drop-shadow-lg">
              When a nation imprisons its own citizens, <br className="hidden md:block" />
              <span className="text-chinese-red">loyalty</span> becomes a question no <span className="text-gold">family</span> can escape.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 px-8 md:px-6 mt-12">
          <button
            onClick={onWatchTrailer}
            className="group w-full md:w-auto px-10 md:px-14 py-4 md:py-6 bg-white text-black text-xs uppercase tracking-[0.6em] font-black hover:bg-chinese-red hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-3"
            aria-label="Watch Trailer"
          >
            <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            Watch Trailer
          </button>
          
          <Link
            href="/story"
            className="w-full md:w-auto px-10 md:px-14 py-4 md:py-6 bg-chinese-red text-white text-xs uppercase tracking-[0.6em] font-black hover:bg-red-800 transition-all duration-500 shadow-2xl active:scale-95 border border-white/10 text-center"
            aria-label="Explore the Story"
          >
            Explore Story
          </Link>
          
          <Link
            href="/characters"
            className="w-full md:w-auto px-10 md:px-14 py-4 md:py-6 border-2 border-white/40 text-white text-xs uppercase tracking-[0.6em] font-black hover:bg-white/10 hover:border-white transition-all duration-500 active:scale-95 backdrop-blur-md text-center"
            aria-label="Meet the characters"
          >
            Characters
          </Link>
        </div>

        <div className="mt-8 md:mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 transition-opacity duration-700 px-6">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-neutral-400">
            Los Angeles
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-neutral-400">
            Santa Anita
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-neutral-400">
            Manzanar
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-neutral-400">
            Tule Lake
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-neutral-400">
            Redress 1988
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      {onExplore && (
        <button
          onClick={onExplore}
          className="absolute left-1/2 -translate-x-1/2 z-40 text-white/70 hover:text-white transition-colors animate-bounce p-2"
          style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 32px)' }}
          aria-label="Scroll down"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

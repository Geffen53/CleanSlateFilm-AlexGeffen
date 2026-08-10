import * as React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useRouter } from 'next/navigation';
import BarbedWire from './BarbedWire';

interface FooterProps {
  theme: 'light' | 'dark' | 'system';
  onSetTheme: (theme: 'light' | 'dark' | 'system') => void;
  openBanner: () => void;
}

export default function Footer({ theme, onSetTheme, openBanner }: FooterProps): React.ReactElement {
  const router = useRouter();

  const handleNav = (path: string) => {
    router.push(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const focusClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm";

  return (
    <footer className="bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] pt-20 pb-12 px-6 md:px-12 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden" role="contentinfo" aria-label="Main footer">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chinese-red/20 to-transparent"></div>

      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-32 opacity-10 pointer-events-none">
        <BarbedWire color="#555" wireSpacing={200} />
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-16">

          {/* Brand Identity */}
          <div className="flex-1 max-sm:max-w-xs">
            <button
              onClick={() => handleNav('/')}
              className={`group mb-6 block text-left ${focusClasses}`}
              aria-label="Enemy Alien Home"
            >
              <h2 className="font-display text-2xl tracking-[0.4em] uppercase font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-chinese-red transition-all">ENEMY ALIEN</h2>
              <span className="block text-[8px] uppercase tracking-[0.6em] opacity-40 dark:opacity-30 text-neutral-900 dark:text-white">A Historical Limited Series</span>
            </button>
            <p className="text-neutral-600 dark:text-neutral-500 text-[11px] leading-relaxed font-normal tracking-wide uppercase max-w-sm">
              Exploring the struggle for justice and the lasting consequences of incarceration.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-20">
            <div>
              <h3 id="footer-sitemap-heading" className="text-[9px] uppercase tracking-[0.4em] text-chinese-red mb-6 font-medium">Sitemap</h3>
              <nav className="flex flex-col space-y-3 text-[10px] uppercase tracking-widest font-normal text-neutral-500 dark:text-neutral-400" aria-labelledby="footer-sitemap-heading">
                <button onClick={() => handleNav('/')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>Home</button>
                <button onClick={() => handleNav('/story')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>Story</button>
                <button onClick={() => handleNav('/characters')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>Characters</button>
                <button onClick={() => handleNav('/history')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>History</button>
                <button onClick={() => handleNav('/access')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>Access</button>
                <button onClick={() => handleNav('/faq')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>FAQ</button>
                <button onClick={() => handleNav('/contact')} className={`hover:text-chinese-red transition-colors text-left focus:underline ${focusClasses}`}>Contact</button>
              </nav>
            </div>

            <div>
              <h3 id="footer-social-heading" className="text-[9px] uppercase tracking-[0.4em] text-chinese-red mb-6 font-medium">Social</h3>
              <div className="flex flex-col space-y-3 text-[10px] uppercase tracking-widest font-normal text-neutral-500 dark:text-neutral-400" aria-labelledby="footer-social-heading">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Instagram</a>
                <a href={SOCIAL_LINKS.imdb} target="_blank" rel="noopener noreferrer" className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>IMDB</a>
              </div>
            </div>
          </div>

          {/* Contact & Settings */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h3 className="text-[9px] uppercase tracking-[0.4em] text-chinese-red mb-4 font-medium">Production Inquiries</h3>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-4 font-bold">Mas / James</p>
              <button 
                onClick={() => handleNav('/contact')}
                className={`group flex items-center gap-3 py-3 px-6 bg-chinese-red text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-red-700 transition-all shadow-xl rounded-sm ${focusClasses}`}
              >
                Send Inquiry
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            <div className="mt-8 flex flex-col items-start md:items-end gap-6">
              {/* 3-way Theme Toggle */}
              <div className="flex items-center bg-neutral-200/50 dark:bg-neutral-900/50 p-1 rounded-sm" role="group" aria-label="Theme selection">
                <button
                  onClick={() => onSetTheme('light')}
                  className={`p-2 rounded-sm transition-all ${theme === 'light' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-chinese-red'} ${focusClasses}`}
                  aria-label="Light mode"
                  aria-pressed={theme === 'light'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                </button>
                <button
                  onClick={() => onSetTheme('system')}
                  className={`p-2 rounded-sm transition-all ${theme === 'system' ? 'bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm' : 'text-neutral-500 hover:text-chinese-red'} ${focusClasses}`}
                  aria-label="System preference"
                  aria-pressed={theme === 'system'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                </button>
                <button
                  onClick={() => onSetTheme('dark')}
                  className={`p-2 rounded-sm transition-all ${theme === 'dark' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-chinese-red'} ${focusClasses}`}
                  aria-label="Dark mode"
                  aria-pressed={theme === 'dark'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                </button>
              </div>

              <button
                onClick={scrollToTop}
                className={`flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-neutral-400 hover:text-chinese-red transition-all group ${focusClasses}`}
                aria-label="Scroll back to top"
              >
                Top
                <div className="w-8 h-8 rounded-sm border border-neutral-700 flex items-center justify-center group-hover:border-chinese-red transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6" /></svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 gap-4">
          <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 text-center md:text-left">
            © 2026 Enemy Alien Series. All rights reserved.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <button onClick={() => handleNav('/accessibility')} className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Accessibility</button>
            <button onClick={() => handleNav('/privacy')} className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Privacy</button>
            <button onClick={openBanner} className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Privacy Preferences</button>
            <button onClick={() => handleNav('/do-not-sell')} className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Do Not Sell or Share</button>
            <button onClick={() => handleNav('/terms')} className={`hover:text-chinese-red transition-colors focus:underline ${focusClasses}`}>Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

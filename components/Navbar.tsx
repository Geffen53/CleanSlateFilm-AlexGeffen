import * as React from 'react';
import { createPortal } from 'react-dom';
import { SOCIAL_LINKS } from '../constants';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

type DropdownNavLink = {
  type: 'dropdown';
  name: string;
  items: { name: string; path: string }[];
};

type LinkNavLink = {
  type: 'link';
  name: string;
  path: string;
};

type NavLink = DropdownNavLink | LinkNavLink;

export default function Navbar({ currentPath, onNavigate }: NavbarProps): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const mobileMenuRef = useFocusTrap(isMobileMenuOpen);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
        const top = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        const restoredScrollY = top ? Math.abs(parseInt(top, 10)) : 0;
        window.scrollTo(0, restoredScrollY);
      };
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    }
  }, [isMobileMenuOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const navBackgroundClasses = isMobileMenuOpen
    ? 'border-b border-neutral-200 dark:border-white/10 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] !py-3'
    : isScrolled || currentPath !== '/'
      ? 'border-b border-neutral-200 dark:border-neutral-800 bg-[var(--color-desert-sand)]/95 dark:bg-[var(--color-desert-night)]/95 backdrop-blur-md !py-3'
      : 'bg-transparent';

  const linkBaseClasses = "px-5 py-2.5 rounded-sm text-[9px] uppercase tracking-[0.3em] font-medium transition-all duration-500 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2";

  const getLinkClasses = (path: string) => {
    const isActive = currentPath === path;
    const isHero = currentPath === '/' && !isScrolled;

    if (isActive) {
      return `${linkBaseClasses} bg-chinese-red text-white dark:bg-chinese-red dark:text-white shadow-lg`;
    }

    if (isHero) {
      return `${linkBaseClasses} text-white hover:bg-white/10 hover:border-white/20`;
    }

    return `${linkBaseClasses} text-neutral-600 dark:text-neutral-400 hover:text-chinese-red hover:bg-black/5 dark:hover:bg-white/5`;
  };

  const isHero = currentPath === '/' && !isScrolled;

  const isDropdownActive = (items: { name: string, path: string }[]) => {
    return items.some(item => currentPath === item.path.split('#')[0]);
  };

  const dropdownButtonClasses = (items: { name: string, path: string }[]) => {
    const isActive = isDropdownActive(items);
    if (isActive) {
      return `${linkBaseClasses} bg-chinese-red text-white dark:bg-chinese-red dark:text-white shadow-lg`;
    }
    if (isHero) {
      return `${linkBaseClasses} text-white hover:bg-white/10 hover:border-white/20`;
    }
    return `${linkBaseClasses} text-neutral-600 dark:text-neutral-400 hover:text-chinese-red hover:bg-black/5 dark:hover:bg-white/5`;
  };

  const navLinks: NavLink[] = [
    {
      type: 'dropdown' as const,
      name: 'Story',
      items: [
        { name: 'Overview', path: '/story' },
        { name: 'Episode Guide', path: '/story#episodes' },
        { name: 'Themes', path: '/story#themes' },
      ]
    },
    {
      type: 'dropdown' as const,
      name: 'Characters',
      items: [
        { name: 'Main Characters', path: '/characters' },
        { name: 'Community', path: '/characters#community' },
      ]
    },
    {
      type: 'dropdown' as const,
      name: 'History',
      items: [
        { name: 'Timeline', path: '/history' },
        { name: 'Locations', path: '/history#locations' },
        { name: 'Research', path: '/history#research' },
      ]
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1100] transition-all duration-700 px-6 py-4 md:px-12 md:py-6 pt-safe ${navBackgroundClasses}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center relative z-[130] gap-4 md:gap-0">

        {/* Left Logo */}
        <div className="flex-initial w-full md:w-auto flex justify-between items-center">
          <button
            onClick={() => handleNav('/')}
            className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 text-left"
            aria-label="Go to Homepage"
          >
            <h2 className={`font-display text-2xl md:text-3xl tracking-[0.2em] uppercase font-bold transition-all duration-500 
              ${isMobileMenuOpen ? 'text-chinese-red' : ''} 
              ${!isMobileMenuOpen && (isScrolled || currentPath !== '/') ? 'text-neutral-900 dark:text-white' : 'text-white'}
              `}>ENEMY ALIEN</h2>
            <span className={`block text-[8px] uppercase tracking-[0.4em] opacity-40 -mt-1 group-hover:opacity-80 transition-opacity 
              ${isMobileMenuOpen ? 'text-neutral-600 dark:text-neutral-400' : ''}
              ${!isMobileMenuOpen && (isScrolled || currentPath !== '/') ? 'text-neutral-500 dark:text-neutral-400' : 'text-white'}
              `}>A Historical Limited Series</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 relative z-[1200] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
                <div className={`h-px w-6 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-chinese-red' : (isScrolled || currentPath !== '/' ? 'bg-neutral-900 dark:bg-white' : 'bg-white')}`} />
                <div className={`h-px w-4 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : (isScrolled || currentPath !== '/' ? 'bg-chinese-red' : 'bg-chinese-red')}`} />
                <div className={`h-px w-6 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-chinese-red' : (isScrolled || currentPath !== '/' ? 'bg-neutral-900 dark:bg-white' : 'bg-white')}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end gap-1 lg:gap-2 max-w-2xl">
          {navLinks.map(link => {
            if (link.type === 'dropdown') {
              return (
                <div key={link.name} className="relative group pb-4 -mb-4">
                  <button
                    className={dropdownButtonClasses(link.items)}
                    aria-haspopup="menu"
                    aria-expanded={isDropdownActive(link.items)}
                    aria-current={isDropdownActive(link.items) ? 'page' : undefined}
                  >
                    {link.name}
                  </button>
                  <div
                    role="menu"
                    aria-label={`${link.name} submenu`}
                    className="absolute left-0 top-full pt-2 w-56 rounded-sm transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                  >
                    <div className="border border-neutral-200 dark:border-neutral-800 bg-[var(--color-desert-sand)]/95 dark:bg-[var(--color-desert-night)]/95 backdrop-blur-xl shadow-2xl p-2">
                      {link.items.map((item) => (
                        <button
                          key={item.name}
                          role="menuitem"
                          onClick={() => handleNav(item.path)}
                          className="w-full text-left px-4 py-3 rounded-sm text-[9px] uppercase tracking-[0.3em] font-medium text-neutral-600 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-chinese-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                          aria-current={currentPath === item.path.split('#')[0] ? 'page' : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleNav(link.path)}
                className={getLinkClasses(link.path)}
                aria-current={currentPath === link.path ? 'page' : undefined}
              >
                {link.name}
              </button>
            );
          })}
          
          <a
            href="https://filmclusive.com/enemyalien"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-chinese-red text-white text-[9px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-red-900 transition-all shadow-lg active:scale-95"
          >
            Request Access
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mounted &&
        createPortal(
          <>
            <div
              className={cn(
                'fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-300 md:hidden',
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              )}
              aria-hidden="true"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-hidden={!isMobileMenuOpen}
              className={cn(
                'fixed inset-0 z-[1010] md:hidden pt-safe pb-safe bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] text-neutral-900 dark:text-white transform transition-transform duration-500 ease-out overflow-y-auto overscroll-contain',
                isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
              )}
            >
              <div className="min-h-app flex flex-col">
                <div className="flex flex-col items-center gap-4 px-6 pt-24 pb-10">
                  {navLinks
                    .flatMap((link) => (link.type === 'dropdown' ? link.items : [link]))
                    .map((link, idx) => (
                      <button
                        key={link.name}
                        onClick={() => handleNav(link.path)}
                        className={cn(
                          'font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white/90 px-3 py-2 rounded-sm',
                          isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                          currentPath === link.path ? 'text-chinese-red' : 'text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                        )}
                        style={{ transitionDelay: `${idx * 40}ms` }}
                        aria-current={currentPath === link.path ? 'page' : undefined}
                      >
                        {link.name}
                      </button>
                    ))}

                  <a
                    href="https://filmclusive.com/enemyalien"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-8 px-10 py-4 bg-chinese-red text-white text-xs uppercase tracking-[0.4em] font-bold rounded-sm shadow-2xl transition-all duration-500 active:scale-95",
                      isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    )}
                    style={{ transitionDelay: `${navLinks.flatMap(l => l.type === 'dropdown' ? l.items : [l]).length * 40}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Access
                  </a>
                </div>

                <div
                  className={cn(
                    'mt-auto p-8 pb-safe border-t border-neutral-200 dark:border-neutral-800 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] transition-opacity duration-500',
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <div className="flex flex-col gap-6 text-center">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-chinese-red">Enemy Alien</p>
                      <p className="text-neutral-600 dark:text-neutral-500 text-xs">A Story of the 442nd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </nav>
  );
}

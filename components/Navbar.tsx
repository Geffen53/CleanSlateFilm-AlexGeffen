'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import IntentLink from './IntentLink';
import OfficialTitle from './OfficialTitle';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate border-b border-line/70 bg-paper/95 backdrop-blur-md">
      <div className="page-shell relative z-10 flex h-14 items-center justify-between">
        <IntentLink href="/" aria-label="Clean Slate home" className="wordmark rounded-md px-2 py-1 text-[1.65rem] transition hover:bg-panel">
          <span className="block w-36 sm:w-44 lg:w-40">
            <OfficialTitle onLight priority sizes="10rem" />
          </span>
        </IntentLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path || (link.path !== '/' && pathname.startsWith(`${link.path}/`));
            return (
              <IntentLink
                key={link.path}
                href={link.path}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-2 py-2 text-[0.68rem] font-medium transition xl:px-2.5 ${active ? 'bg-panel text-ink shadow-sm' : 'text-muted hover:bg-panel hover:text-ink'}`}
              >
                {link.name}
              </IntentLink>
            );
          })}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            className="grid h-11 w-11 touch-manipulation place-items-center rounded-md bg-paper/80 transition hover:bg-panel"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="fixed inset-x-0 bottom-0 top-14 z-40 bg-black/35 lg:hidden" />
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="fixed right-0 top-14 z-50 h-[calc(100svh-3.5rem)] w-[min(100%,24rem)] overflow-y-auto border-l border-line bg-paper py-3 shadow-2xl lg:hidden">
            <div className="page-shell grid grid-cols-1 gap-1 pb-4">
              {NAV_LINKS.map((link) => (
                <IntentLink
                  key={link.path}
                  href={link.path}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition ${pathname === link.path || (link.path !== '/' && pathname.startsWith(`${link.path}/`)) ? 'bg-panel text-ink shadow-sm' : 'text-muted hover:bg-panel hover:text-ink'}`}
                >
                  {link.name}
                </IntentLink>
              ))}
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}

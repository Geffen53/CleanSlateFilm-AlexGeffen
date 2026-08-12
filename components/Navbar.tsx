'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import IntentLink from './IntentLink';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur-md">
      <div className="page-shell flex h-16 items-center justify-between">
        <IntentLink href="/" aria-label="Clean Slate home" className="wordmark rounded-md px-2 py-1 text-2xl transition hover:bg-panel">
          Clean Slate
        </IntentLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path;
            return (
              <IntentLink
                key={link.path}
                href={link.path}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-xs font-medium transition ${active ? 'bg-panel text-ink shadow-sm' : 'text-muted hover:bg-panel hover:text-ink'}`}
              >
                {link.name}
              </IntentLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            className="grid h-11 w-11 place-items-center rounded-md transition hover:bg-panel"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line bg-paper py-2 xl:hidden">
          <div className="page-shell grid gap-1">
            {NAV_LINKS.map((link) => (
              <IntentLink
                key={link.path}
                href={link.path}
                className={`rounded-md px-3 py-3 text-sm font-medium transition ${pathname === link.path ? 'bg-panel text-ink shadow-sm' : 'text-muted hover:bg-panel hover:text-ink'}`}
              >
                {link.name}
              </IntentLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

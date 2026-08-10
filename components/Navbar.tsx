'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link href="/" prefetch aria-label="Clean Slate home" className="wordmark text-xl leading-none">
          Clean<br />Slate
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                prefetch
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 text-xs font-medium transition ${active ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {link.name}
                {active && <span className="mt-1 block h-0.5 bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            className="grid h-11 w-11 place-items-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line bg-paper py-4 lg:hidden">
          <div className="page-shell grid">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                prefetch
                className={`border-b border-line py-4 text-base font-medium ${pathname === link.path ? 'text-navy dark:text-accent' : 'text-ink'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

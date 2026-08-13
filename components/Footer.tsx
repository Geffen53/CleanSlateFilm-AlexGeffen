import Link from 'next/link';
import { film } from '@/data/film';
import { NAV_LINKS } from '@/constants';
import ThemeSelector from './ThemeSelector';
import PrivacyPreferencesButton from './PrivacyPreferencesButton';

export default function Footer() {
  return (
    <footer className="section-rule bg-panel py-9" aria-label="Site footer">
      <div className="page-shell grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" prefetch={false} className="wordmark text-[1.9rem]">Clean Slate</Link>
          <p className="mt-3 max-w-md text-xs leading-5 text-muted">{film.descriptor}</p>
          <a className="mt-3 inline-block text-xs font-semibold underline decoration-accent decoration-2 underline-offset-4" href={`mailto:${film.contactEmail}`}>
            {film.contactEmail}
          </a>
        </div>
        <nav aria-label="Footer navigation" className="flex max-w-xl flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          {NAV_LINKS.map((link) => <Link key={link.path} href={link.path} prefetch={false}>{link.name}</Link>)}
        </nav>
      </div>
      <div className="page-shell mt-7 flex flex-col gap-4 border-t border-line pt-5 text-[0.68rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4"><p>© 2026 Clean Slate. All rights reserved.</p><ThemeSelector /></div>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          <Link href="/accessibility" prefetch={false}>Accessibility</Link>
          <Link href="/privacy" prefetch={false}>Privacy</Link>
          <PrivacyPreferencesButton />
          <Link href="/do-not-sell" prefetch={false}>Do not sell or share</Link>
          <Link href="/terms" prefetch={false}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}

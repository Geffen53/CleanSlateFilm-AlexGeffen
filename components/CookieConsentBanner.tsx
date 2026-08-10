'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Shield, X } from 'lucide-react';
import { useCookieConsent } from '@/context/cookie-consent';
import { useGpcDetection } from '@/hooks/useGpcDetection';

export function CookieConsentBanner({ className = '' }: { className?: string }) {
  const { preferences, showBanner, acceptAll, rejectNonEssential, updatePreferences, closeBanner } = useCookieConsent();
  const { gpcEnabled, gpcChecked } = useGpcDetection();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (gpcChecked && gpcEnabled && preferences?.analytics !== false) updatePreferences({ analytics: false });
  }, [gpcChecked, gpcEnabled, preferences?.analytics, updatePreferences]);

  if (!mounted || !showBanner) return null;

  return (
    <aside aria-label="Privacy choices" className={`fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl border border-line bg-panel p-4 shadow-2xl shadow-black/20 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="flex min-w-0 items-center gap-3 text-left">
          <Shield size={20} className="shrink-0 text-navy dark:text-accent" />
          <span><strong className="block text-sm">Privacy choices</strong><span className="block text-xs leading-5 text-muted">Essential storage only. Analytics require consent.</span></span>
          <ChevronDown size={16} className={`shrink-0 transition ${expanded ? 'rotate-180' : ''}`} />
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={acceptAll} className="min-h-10 bg-ink px-4 text-xs font-semibold text-paper">Accept all</button>
          <button type="button" onClick={rejectNonEssential} className="min-h-10 border border-line px-4 text-xs font-semibold">Essential only</button>
          {preferences && <button type="button" onClick={closeBanner} aria-label="Close privacy choices" className="grid h-10 w-10 place-items-center"><X size={17} /></button>}
        </div>
      </div>
      {expanded && (
        <div className="mt-4 grid gap-4 border-t border-line pt-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><p className="text-sm font-semibold">Anonymous analytics</p><p className="mt-1 text-xs leading-5 text-muted">Optional page and device measurements used to improve the site. Global Privacy Control keeps this disabled.</p></div>
          <button
            type="button"
            role="switch"
            aria-checked={preferences?.analytics === true}
            disabled={gpcEnabled}
            onClick={() => updatePreferences({ analytics: preferences?.analytics !== true })}
            className={`relative h-7 w-12 rounded-full transition ${preferences?.analytics === true ? 'bg-navy dark:bg-accent' : 'bg-line'} disabled:opacity-50`}
          >
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${preferences?.analytics === true ? 'left-6' : 'left-1'}`} />
            <span className="sr-only">Toggle anonymous analytics</span>
          </button>
          <p className="text-xs text-muted sm:col-span-2">Read the <Link href="/privacy" className="font-semibold text-ink underline decoration-accent underline-offset-4">privacy policy</Link> or manage a <Link href="/do-not-sell" className="font-semibold text-ink underline decoration-accent underline-offset-4">privacy request</Link>.</p>
        </div>
      )}
    </aside>
  );
}

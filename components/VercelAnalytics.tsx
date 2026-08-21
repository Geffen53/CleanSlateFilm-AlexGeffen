'use client';

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCookieConsentState } from '@/context/cookie-consent';
import { useGpcDetection } from '@/hooks/useGpcDetection';

export function VercelAnalytics() {
  const { preferences } = useCookieConsentState();
  const { gpcEnabled, gpcChecked } = useGpcDetection();
  const [hasOptedIn, setHasOptedIn] = useState(false);
  const consentRef = useRef(false);
  const analyticsAllowed = gpcChecked && !gpcEnabled && preferences?.analytics === true;

  // Keep the callback live after consent is withdrawn. The SDK remains mounted
  // after first opt-in so it can reject any later event without re-injecting a
  // second script when the visitor changes preferences.
  consentRef.current = analyticsAllowed;

  useEffect(() => {
    if (analyticsAllowed) setHasOptedIn(true);
  }, [analyticsAllowed]);

  const beforeSend = useCallback((event: BeforeSendEvent) => {
    if (!consentRef.current) return null;

    try {
      const url = new URL(event.url, window.location.origin);
      return { ...event, url: `${url.origin}${url.pathname}` };
    } catch {
      return null;
    }
  }, []);

  if (!hasOptedIn) return null;

  return <Analytics beforeSend={beforeSend} />;
}

'use client';

import { useCookieConsentActions } from '@/context/cookie-consent';

export default function PrivacyPreferencesButton() {
  const { openBanner } = useCookieConsentActions();
  return <button type="button" onClick={openBanner}>Privacy preferences</button>;
}

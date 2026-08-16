export type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
};

export const COOKIE_CONSENT_KEY = 'cookie-consent-preferences';

export function getCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  try {
    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== 'object') return null;
    const value = parsed as Partial<CookiePreferences>;
    if (value.essential !== true || typeof value.analytics !== 'boolean') return null;
    return { essential: true, analytics: value.analytics };
  } catch {
    return null;
  }
}

export function setCookieConsent(preferences: CookiePreferences) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
}

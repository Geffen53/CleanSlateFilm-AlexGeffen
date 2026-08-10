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
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

export function setCookieConsent(preferences: CookiePreferences) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
}

export function clearAllCookies() {
  if (typeof window === 'undefined') return;
  
  // Clear local storage
  localStorage.clear();
  
  // Clear all cookies
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
  }
}

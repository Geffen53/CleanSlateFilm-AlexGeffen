'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getCookieConsent, setCookieConsent, CookiePreferences } from '@/utils/cookie-consent';

interface CookieConsentState {
  preferences: CookiePreferences | null;
  showBanner: boolean;
}

interface CookieConsentActions {
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  openBanner: () => void;
  closeBanner: () => void;
}

const CookieConsentStateContext = createContext<CookieConsentState | undefined>(undefined);
const CookieConsentActionsContext = createContext<CookieConsentActions | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = getCookieConsent();
    if (stored) {
      setPreferences(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const prefs = { essential: true, analytics: true };
    setPreferences(prefs);
    setCookieConsent(prefs);
    setShowBanner(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const prefs = { essential: true, analytics: false };
    setPreferences(prefs);
    setCookieConsent(prefs);
    setShowBanner(false);
  }, []);

  const updatePreferences = useCallback((newPrefs: Partial<CookiePreferences>) => {
    setPreferences((current) => {
      const updated = {
        essential: true,
        analytics: current?.analytics ?? false,
        ...newPrefs,
      };
      setCookieConsent(updated);
      return updated;
    });
  }, []);

  const openBanner = useCallback(() => setShowBanner(true), []);
  const closeBanner = useCallback(() => setShowBanner(false), []);
  const state = useMemo(() => ({ preferences, showBanner }), [preferences, showBanner]);
  const actions = useMemo(
    () => ({ acceptAll, rejectNonEssential, updatePreferences, openBanner, closeBanner }),
    [acceptAll, rejectNonEssential, updatePreferences, openBanner, closeBanner],
  );

  return (
    <CookieConsentActionsContext.Provider value={actions}>
      <CookieConsentStateContext.Provider value={state}>{children}</CookieConsentStateContext.Provider>
    </CookieConsentActionsContext.Provider>
  );
}

export function useCookieConsentState() {
  const context = useContext(CookieConsentStateContext);
  if (context === undefined) {
    throw new Error('useCookieConsentState must be used within a CookieConsentProvider');
  }
  return context;
}

export function useCookieConsentActions() {
  const context = useContext(CookieConsentActionsContext);
  if (context === undefined) {
    throw new Error('useCookieConsentActions must be used within a CookieConsentProvider');
  }
  return context;
}

'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getCookieConsent, setCookieConsent, CookiePreferences } from '@/utils/cookie-consent';

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  openBanner: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
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

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        showBanner,
        acceptAll,
        rejectNonEssential,
        updatePreferences,
        openBanner,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

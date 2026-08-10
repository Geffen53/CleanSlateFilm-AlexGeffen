'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { CookieConsentProvider } from '@/context/cookie-consent';

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const updateAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    updateAppHeight();
    window.addEventListener('resize', updateAppHeight);
    window.addEventListener('orientationchange', updateAppHeight);
    return () => {
      window.removeEventListener('resize', updateAppHeight);
      window.removeEventListener('orientationchange', updateAppHeight);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CookieConsentProvider>
        {children}
      </CookieConsentProvider>
    </ThemeProvider>
  );
}

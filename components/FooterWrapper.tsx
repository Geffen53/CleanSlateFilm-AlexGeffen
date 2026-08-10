'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/context/cookie-consent';

export default function FooterWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { openBanner } = useCookieConsent();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Footer 
      theme={(theme as 'light' | 'dark' | 'system') || 'system'} 
      onSetTheme={(t) => setTheme(t)} 
      openBanner={openBanner}
    />
  );
}

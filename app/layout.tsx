import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import NavbarWrapper from '@/components/NavbarWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import '../index.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Enemy Alien | The WWII Story Never Told',
  description: 'Follow the journey of the Yamamoto family as they are uprooted from their lives and forced into internment camps. Enemy Alien is a landmark of cinema and Asian-American history.',
  keywords: 'Enemy Alien, Japanese Internment, WWII history, Asian-American experience, historical drama, Yamamoto family, internment camps',
  openGraph: {
    type: 'website',
    title: 'Enemy Alien | The WWII Story Never Told',
    description: 'Follow the journey of the Yamamoto family as they are uprooted from their lives and forced into internment camps. Enemy Alien is a landmark of cinema and Asian-American history.',
    images: [
      {
        url: '/masmoriya_A_close_up_shot_from_the_waist_up_photorealistic_hype_0123f083-5447-4ed4-90fe-07b7d5fe84af.png',
        width: 1200,
        height: 630,
        alt: 'Enemy Alien — A Story of Family and Resilience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enemy Alien | The WWII Story Never Told',
    description: 'Follow the journey of the Yamamoto family as they are uprooted from their lives and forced into internment camps.',
    images: ['/masmoriya_A_close_up_shot_from_the_waist_up_photorealistic_hype_0123f083-5447-4ed4-90fe-07b7d5fe84af.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col transition-colors duration-500">
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white dark:focus:bg-neutral-900 focus:text-black dark:focus:text-white focus:px-6 focus:py-3 focus:font-bold focus:shadow-2xl border border-black/5 dark:border-white/10"
            >
              Skip to main content
            </a>
            <NavbarWrapper />
            <main id="main-content" className="flex-grow outline-none" tabIndex={-1}>
              {children}
            </main>
            <FooterWrapper />
            <CookieConsentBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Providers } from './providers';
import NavbarWrapper from '@/components/NavbarWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { CookieConsentProvider } from '@/context/cookie-consent';
import { film } from '@/data/film';
import '../index.css';

const progress = localFont({
  src: '../public/ProgressPersonalUse-EaJdz.ttf',
  variable: '--font-progress',
  display: 'swap',
});

const shareTitle = "Clean Slate | Short Film - Geffen & Huckabay";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f6' },
    { media: '(prefers-color-scheme: dark)', color: '#090d0e' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cleanslatefilm.com'),
  title: { default: 'Clean Slate | A Short Film', template: '%s | Clean Slate' },
  description: `${film.synopsis} ${film.descriptor}`,
  keywords: ['Clean Slate', 'Alex Geffen', 'Cass Huckabay', 'sci-fi short film', 'thriller', 'Huckabay Productions'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'video.movie',
    title: shareTitle,
    description: 'Alex Geffen | Cass Huckabay',
    url: '/',
    images: [{ url: '/media/stills/trevor-crib.jpg', width: 1800, height: 1012, alt: 'Trevor at the crib in Clean Slate' }],
  },
  twitter: { card: 'summary_large_image', title: shareTitle, description: 'Alex Geffen | Cass Huckabay', images: ['/media/stills/trevor-crib.jpg'] },
};

// Keep this project statically renderable. A future request-time data source,
// cookie read, or server-only mutation must fail the build until its threat,
// rate-limit, and cost boundary is reviewed explicitly.
export const dynamic = 'error';

const movieJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: film.title,
  description: film.synopsis,
  image: 'https://cleanslatefilm.com/media/clean-slate-poster.jpg',
  dateCreated: '2025',
  duration: 'PT15M',
  genre: ['Science fiction', 'Thriller', 'Drama'],
  inLanguage: 'en',
  director: [{ '@type': 'Person', name: 'Alex Geffen' }, { '@type': 'Person', name: 'Cass Huckabay' }],
};

// Keep the trusted structured-data sink safe if a future metadata value contains
// markup-like characters. Escaping `<` prevents an early `</script>` terminator.
const movieJsonLdString = JSON.stringify(movieJsonLd).replace(/</g, '\\u003c');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${progress.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <Providers>
          <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-5 py-3 text-sm text-paper focus:translate-y-0">Skip to content</a>
          <NavbarWrapper />
          <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
          <CookieConsentProvider>
            <FooterWrapper />
            <CookieConsentBanner />
          </CookieConsentProvider>
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: movieJsonLdString }} />
      </body>
    </html>
  );
}

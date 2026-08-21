/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

// Keep the public site static and deliberately narrow: it has no third-party
// scripts, frames, forms, or browser capabilities. `unsafe-inline` is limited
// to Next/React's generated inline bootstrap and the trusted JSON-LD block;
// there is no user-controlled HTML sink in this application.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? '' : " 'unsafe-eval'"}`,
  "style-src 'self'",
  "style-src-attr 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "media-src 'self' https://media.cleanslatefilm.com",
  "connect-src 'self'",
  "frame-src 'none'",
  "worker-src 'none'",
  isProduction ? 'upgrade-insecure-requests' : '',
].filter(Boolean).join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  ...(isProduction ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000' }] : []),
];

const nextConfig = {
  poweredByHeader: false,
  // Keep dependency and build resolution inside this repository. This avoids
  // accidentally inheriting a parent workspace lockfile during deployment.
  turbopack: { root: process.cwd() },
  images: {
    // Avoid an unbounded public image-optimization endpoint and its per-request
    // compute/bandwidth exposure. The site ships a fixed local media catalog.
    unoptimized: true,
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=2592000',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [{ source: '/videos', destination: '/#trailer', permanent: true }];
  },
};

export default nextConfig;

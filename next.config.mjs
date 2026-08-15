/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    formats: ['image/webp'],
    // Keep a source-sized candidate for the 1,800px press stills. Without it,
    // full-frame viewing can upscale the 1,600px variant on larger screens.
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1280, 1600, 1800, 2400],
    imageSizes: [160, 256, 384],
    qualities: [75, 90],
    minimumCacheTTL: 2_592_000,
  },
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

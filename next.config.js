/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'api.havenly.solutions' },
      { protocol: 'https', hostname: 'api.havenly.co.za' }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.sentry-cdn.com https://api.mapbox.com; " +
                   "style-src 'self' 'unsafe-inline' https://api.mapbox.com https://fonts.googleapis.com; " +
                   "img-src 'self' data: https: blob: *.mapbox.com; " +
                   "font-src 'self' https://fonts.gstatic.com data:; " +
                   "connect-src 'self' https://api.havenly.solutions https://*.sentry.io https://*.mapbox.com https://events.mapbox.com; " +
                   "worker-src 'self' blob:; " +
                   "child-src 'self' blob:; " +
                   "frame-ancestors 'none';"
          },
        ],
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  nextConfig,
  {
    org: "havenly-solutions",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
  }
);

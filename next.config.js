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
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.sentry-cdn.com https://browser.sentry-cdn.com https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: https://*.havenly.solutions",
              "connect-src 'self' https://*.havenly.solutions wss://*.havenly.solutions https://api.havenly.solutions wss://api.havenly.solutions https://*.sentry.io https://sentry.io https://*.ingest.sentry.io https://vercel.live https://va.vercel-scripts.com",
              "frame-src 'self' https://vercel.live",
              "frame-ancestors 'self' https://havenly.solutions https://dashboard.havenly.solutions"
            ].join('; ')
          },
        ],
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: '/sitempas',
        destination: '/sitemap.xml',
      },
      {
        source: '/sitemaps',
        destination: '/sitemap.xml',
      }
    ]
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

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://havenly.solutions',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/sentry-example-page'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/sentry-example-page'],
      },
    ],
  },
}

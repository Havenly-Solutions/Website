/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://havenly.solutions',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api'],
      },
    ],
  },
}

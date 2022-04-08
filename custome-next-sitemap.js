const { websiteUrl } = require('./utils')

module.exports = {
  siteUrl: websiteUrl,
  generateRobotsTxt: true,
  sitemapSize: 3000,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${websiteUrl}server-sitemap.xml`,
    ],
  },
}
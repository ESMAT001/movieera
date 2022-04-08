const { websiteUrl } = require('./utils')

module.exports = {
  siteUrl: websiteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${websiteUrl}server-sitemap.xml`,
    ],
  },
}
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.dhanavel.com/',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/secret-page'],
  additionalPaths: async (config) => [
    await config.transform(config, '/custom-page'),
  ],
};

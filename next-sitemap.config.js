/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://stroginomassage.ru/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: '*', allow: '/'},
            {userAgent: 'Googlebot-Image', disallow: '/'},
        ],
    },
    exclude: ['/server-sitemap.xml'],
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        }
    },
}
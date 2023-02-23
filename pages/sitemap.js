import sitemap from 'sitemap';

const sitemap = sm.createSitemap({
  hostname: 'https://dovah03.github.io/React-Next-portfoli',
  cacheTime: 600000, //600 sec (10 min) cache purge period 
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
    { url: '/portfolio/portfolioWebsite', changefreq: 'monthly', priority: 0.5 },
    { url: '/portfolio/Isoqualtech', changefreq: 'monthly', priority: 0.5 },
    { url: '/portfolio/opencvapp', changefreq: 'monthly', priority: 0.5 },
    { url: '/portfolio/crudapp', changefreq: 'monthly', priority: 0.5 },
    { url: '/portfolio/aiassistant', changefreq: 'monthly', priority: 0.5 },
  ],
});

export function getSitemap() {
  return sitemap.toString();
}
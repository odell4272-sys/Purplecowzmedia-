const SITE_URL = 'https://purplecowz.com';

const ROUTES = ['', '/about', '/services', '/portfolio', '/d1-community-partners', '/contact'];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8
  }));
}

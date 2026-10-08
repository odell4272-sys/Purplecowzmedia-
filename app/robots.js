export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://purplecowz.com/sitemap.xml',
    host: 'https://purplecowz.com'
  };
}

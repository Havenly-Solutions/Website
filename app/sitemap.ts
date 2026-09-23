import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const ROUTES = ['', '/how-it-works', '/features', '/communities', '/safe-hub', '/partners', '/about', '/contact', '/faq', '/pre-register', '/privacy-policy', '/terms', '/cookie-policy', '/eula', '/acceptable-use-policy', '/disclaimer'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({ url: `${SITE.url}${path}`, lastModified, changeFrequency: path === '' || path === '/pre-register' ? 'weekly' : 'monthly', priority: path === '' ? 1 : path === '/pre-register' ? 0.9 : 0.6 }));
}

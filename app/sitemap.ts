import type { MetadataRoute } from 'next';
import { allPeople, getPersonSlug } from '@/data/people';

const siteUrl = 'https://cleanslatefilm.com';

const publicRoutes = [
  '/',
  '/film',
  '/cast-crew',
  '/press',
  '/show-times',
  '/creative-consultants',
  '/contact',
  '/accessibility',
  '/privacy',
  '/terms',
  '/do-not-sell',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const profileRoutes = [...new Set(allPeople.map((person) => getPersonSlug(person)))].map((slug) => `/cast-crew/${slug}`);

  return [...publicRoutes, ...profileRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/cast-crew/') ? 0.5 : 0.8,
  }));
}

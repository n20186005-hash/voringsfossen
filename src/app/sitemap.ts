import type { MetadataRoute } from 'next';

const baseUrl = 'https://voringsfossen.org';
const lastModified = new Date('2026-08-31');

const locales = [
  { locale: 'it', path: `${baseUrl}/` },
  { locale: 'en', path: `${baseUrl}/en` },
  { locale: 'fr', path: `${baseUrl}/fr` },
  { locale: 'zh-Hant', path: `${baseUrl}/zh-Hant` },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    it: `${baseUrl}/`,
    en: `${baseUrl}/en`,
    fr: `${baseUrl}/fr`,
    'zh-Hant': `${baseUrl}/zh-Hant`,
    'x-default': `${baseUrl}/`,
  };

  return locales.map(({ locale, path }) => ({
    url: path,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: locale === 'it' ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}

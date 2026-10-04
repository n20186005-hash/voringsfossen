import type { MetadataRoute } from 'next';
import { intentGuides } from '@/content/intent-guides';
import { SITE_URL, languageAlternates, localizedUrl, type SiteLocale } from '@/lib/site';

const lastModified = new Date('2026-10-04');
const homeLocales: SiteLocale[] = ['en', 'fr', 'it', 'no', 'zh-Hant'];

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages: MetadataRoute.Sitemap = homeLocales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: { languages: languageAlternates() },
  }));

  const guidePages: MetadataRoute.Sitemap = intentGuides.map(({ slug }) => {
    const url = `${SITE_URL}/en/${slug}`;
    return {
      url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: url, 'x-default': url } },
    };
  });

  return [...homePages, ...guidePages];
}

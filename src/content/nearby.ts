import en from './nearby/en.json';
import fr from './nearby/fr.json';
import it from './nearby/it.json';
import no from './nearby/no.json';
import zhHant from './nearby/zh-Hant.json';
import type { SiteLocale } from '@/lib/site';

export const nearbyContent = { en, fr, it, no, 'zh-Hant': zhHant };
export const nearbySlugs = en.guides.map(({ slug }) => slug);
export function getNearby(locale: SiteLocale, slug: string) {
  return nearbyContent[locale].guides.find((guide) => guide.slug === slug);
}

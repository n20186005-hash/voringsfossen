export const SITE_URL = 'https://www.voringsfossen.org';
export const SITE_NAME = 'Vøringsfossen Visitor Guide';
export const MAPS_URL = 'https://maps.app.goo.gl/AgNGvjGEwqCpBbdt8';
export const HERO_IMAGE_PATH = '/gallery/images%20(1).jpg';

export const localeMeta = {
  en: {hrefLang: 'en', htmlLang: 'en', ogLocale: 'en_US', label: 'English'},
  fr: {hrefLang: 'fr-FR', htmlLang: 'fr-FR', ogLocale: 'fr_FR', label: 'Français'},
  it: {hrefLang: 'it-IT', htmlLang: 'it-IT', ogLocale: 'it_IT', label: 'Italiano'},
  no: {hrefLang: 'nb-NO', htmlLang: 'nb-NO', ogLocale: 'nb_NO', label: 'Norsk'},
  'zh-Hant': {hrefLang: 'zh-Hant', htmlLang: 'zh-Hant', ogLocale: 'zh_TW', label: '繁體中文'},
} as const;

export type SiteLocale = keyof typeof localeMeta;

export function localizedPath(locale: SiteLocale, path = '') {
  const suffix = path && !path.startsWith('/') ? `/${path}` : path;
  return `/${locale}${suffix}`;
}

export function localizedUrl(locale: SiteLocale, path = '') {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = '') {
  return {
    en: localizedUrl('en', path),
    'fr-FR': localizedUrl('fr', path),
    'it-IT': localizedUrl('it', path),
    'nb-NO': localizedUrl('no', path),
    'zh-Hant': localizedUrl('zh-Hant', path),
    'x-default': localizedUrl('en', path),
  };
}

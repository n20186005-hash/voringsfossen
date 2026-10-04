import { setRequestLocale } from 'next-intl/server';
import { SITE_NAME, languageAlternates, localizedUrl, type SiteLocale } from '@/lib/site';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteLocale = locale as SiteLocale;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const path = '/cookie-settings';

  return {
    title: `${messages.cookieSettings.title} | ${SITE_NAME}`,
    robots: { index: false, follow: true },
    alternates: {
      canonical: localizedUrl(siteLocale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}

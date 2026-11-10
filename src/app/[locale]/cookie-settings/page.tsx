import { setRequestLocale } from 'next-intl/server';
import { SITE_NAME, languageAlternates, localizedUrl, type SiteLocale } from '@/lib/site';
import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';

function CookieInformation() {
  const t = useTranslations('cookieSettings');
  const back = useTranslations('header');
  const locale = useLocale();
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-20">
      <a href={`/${locale}`} className="underline underline-offset-4">← {back('backToHome')}</a>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-10 mb-7">{t('title')}</h1>
      <p className="leading-8">{t('description')}</p>
      <ul className="mt-8 space-y-4">
        <li><a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google — Privacy</a></li>
        <li><a className="underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare — Privacy</a></li>
      </ul>
    </main>
  );
}

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
  return <CookieInformation />;
}


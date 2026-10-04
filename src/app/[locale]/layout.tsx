import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import {
  HERO_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  languageAlternates,
  localeMeta,
  localizedUrl,
  type SiteLocale,
} from '@/lib/site';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const heroImage = `${SITE_URL}${HERO_IMAGE_PATH}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteLocale = locale as SiteLocale;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const selfUrl = localizedUrl(siteLocale);

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: selfUrl,
      languages: languageAlternates(),
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: SITE_NAME,
      locale: localeMeta[siteLocale].ogLocale,
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 900,
          alt: 'Vøringsfossen waterfall and viewpoints in Eidfjord, Norway',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [heroImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const siteLocale = locale as SiteLocale;
  setRequestLocale(siteLocale);
  const messages = await getMessages() as any;
  const htmlLanguage = localeMeta[siteLocale].htmlLang;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/en`,
        logo: `${SITE_URL}/icons/icon.svg`,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/en`,
        name: SITE_NAME,
        inLanguage: Object.values(localeMeta).map(({htmlLang}) => htmlLang),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang={htmlLanguage} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3a7a8d" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HXM22WWPKP');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(e){console.error('Service worker registration failed:',e);});});}`,
          }}
        />
      </body>
    </html>
  );
}

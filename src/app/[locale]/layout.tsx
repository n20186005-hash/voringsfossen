import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const baseUrl = 'https://voringsfossen.org';
const heroImage = `${baseUrl}/gallery/images%20(1).jpg`;
const mapsUrl = 'https://maps.app.goo.gl/PZQzhiFGsZvDZa5Y7';
const govtTourismUrl = 'https://www.visitnorway.com/';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const itUrl = `${baseUrl}/`;
  const enUrl = `${baseUrl}/en`;
  const frUrl = `${baseUrl}/fr`;
  const zhUrl = `${baseUrl}/zh-Hant`;
  const selfUrl = locale === 'it' ? itUrl : locale === 'en' ? enUrl : locale === 'fr' ? frUrl : zhUrl;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: selfUrl,
      languages: {
        'it': itUrl,
        'en': enUrl,
        'fr': frUrl,
        'zh-Hant': zhUrl,
        'x-default': itUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: 'Vøringsfossen',
      locale: locale === 'zh-Hant' ? 'zh_TW' : locale,
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 800,
          alt: 'Vøringsfossen - Main view in Eidfjord, Norway',
        },
      ],
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

  setRequestLocale(locale);
  const messages = await getMessages() as any;

  const faqItems = messages?.faq?.items || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${baseUrl}/#attraction`,
        name: 'Vøringsfossen',
        alternateName: ['Vøringsfossen', 'Eidfjord Vøringsfossen'],
        description: messages.meta.description,
        url: baseUrl,
        image: [heroImage],
        isAccessibleForFree: true,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Vøringsfossen',
          addressLocality: 'Eidfjord',
          addressRegion: 'Vestland',
          postalCode: '5785',
          addressCountry: 'NO',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 60.4265721,
          longitude: 7.2324114,
        },
        hasMap: mapsUrl,
        sameAs: [mapsUrl, govtTourismUrl],
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: faqItems.map((item: { q: string; a: string }) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Vøringsfossen Guide',
        url: baseUrl,
        logo: `${baseUrl}/icons/icon.svg`,
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Vøringsfossen Guide',
        inLanguage: locale === 'zh-Hant' ? 'zh-Hant' : locale,
        publisher: { '@id': `${baseUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang={locale === 'zh-Hant' ? 'zh-Hant' : locale} suppressHydrationWarning>
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

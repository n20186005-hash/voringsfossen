import { getMessages, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import InfoSection from '@/components/InfoSection';
import Gallery from '@/components/Gallery';
import FacilitiesSection from '@/components/FacilitiesSection';
import LegendsSection from '@/components/LegendsSection';
import TransportSection from '@/components/TransportSection';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import MapEmbed from '@/components/MapEmbed';
import IntentGuides from '@/components/IntentGuides';
import Footer from '@/components/Footer';
import { HERO_IMAGE_PATH, MAPS_URL, SITE_URL, localeMeta, localizedUrl, type SiteLocale } from '@/lib/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteLocale = locale as SiteLocale;
  setRequestLocale(siteLocale);
  const messages = await getMessages() as any;
  const faqItems = (messages?.faq?.items || []) as Array<{ q: string; a: string }>;
  const selfUrl = localizedUrl(siteLocale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        '@id': `${SITE_URL}/#attraction`,
        name: 'Vøringsfossen',
        alternateName: ['Voringsfossen', 'Voringfossen', 'Vøringsfossen waterfall'],
        description: messages.meta.description,
        url: selfUrl,
        image: [`${SITE_URL}${HERO_IMAGE_PATH}`],
        isAccessibleForFree: true,
        publicAccess: true,
        address: {
          '@type': 'PostalAddress',
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
        hasMap: MAPS_URL,
        sameAs: [
          MAPS_URL,
          'https://www.nasjonaleturistveger.no/en/routes/hardangervidda/voringsfossen/',
          'https://www.hardangerfjord.com/',
          'https://www.visitnorway.com/listings/voringsfossen/158686/',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${selfUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${selfUrl}#webpage`,
        url: selfUrl,
        name: messages.meta.title,
        description: messages.meta.description,
        inLanguage: localeMeta[siteLocale].htmlLang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#attraction` },
        breadcrumb: { '@id': `${selfUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${selfUrl}#breadcrumb`,
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Vøringsfossen', item: selfUrl }],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        {locale === 'en' && <IntentGuides />}
        <InfoSection />
        <TransportSection />
        <Gallery />
        <FacilitiesSection />
        <LegendsSection />
        <Reviews />
        <FAQSection />
        <SourcesSection />
        <MapEmbed />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

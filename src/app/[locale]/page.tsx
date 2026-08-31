import { setRequestLocale } from 'next-intl/server';
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
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
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
    </>
  );
}

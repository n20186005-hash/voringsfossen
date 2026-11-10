import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getNearby, nearbyContent, nearbySlugs } from '@/content/nearby';
import { SITE_NAME, SITE_URL, languageAlternates, localeMeta, localizedUrl, type SiteLocale } from '@/lib/site';

type Params = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return Object.keys(localeMeta).flatMap((locale) => nearbySlugs.map((slug) => ({ locale, slug })));
}
function resolve(locale: string, slug: string) {
  if (!(locale in localeMeta)) notFound();
  const selected = locale as SiteLocale;
  const guide = getNearby(selected, slug);
  if (!guide) notFound();
  return { selected, guide, ui: nearbyContent[selected].ui };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const { selected, guide } = resolve(locale, slug);
  const canonical = localizedUrl(selected, `/nearby/${slug}`);
  return {
    title: `${guide.title} | ${SITE_NAME}`,
    description: guide.description,
    alternates: { canonical, languages: languageAlternates(`/nearby/${slug}`) },
    openGraph: { title: guide.title, description: guide.description, url: canonical, siteName: SITE_NAME, type: 'article', locale: localeMeta[selected].ogLocale, images: [] },
    twitter: { card: 'summary', title: guide.title, description: guide.description, images: [] },
  };
}
export default async function NearbyPage({ params }: Params) {
  const { locale, slug } = await params;
  const { selected, guide, ui } = resolve(locale, slug);
  setRequestLocale(selected);
  const canonical = localizedUrl(selected, `/nearby/${slug}`);
  const related = nearbyContent[selected].guides.filter((item) => item.slug !== slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: guide.title, description: guide.description, url: canonical, inLanguage: localeMeta[selected].htmlLang, dateModified: '2026-11-10', author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }, publisher: { '@id': `${SITE_URL}/#organization` }, mainEntityOfPage: canonical, citation: guide.sources.map((source) => source.url) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Vøringsfossen', item: localizedUrl(selected) },
        { '@type': 'ListItem', position: 2, name: guide.title, item: canonical },
      ] },
      { '@type': 'FAQPage', mainEntity: guide.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
  return (
    <>
      <Header />
      <main className="nearby-page">
        <section className="nearby-hero">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm mb-7"><a href={`/${selected}`}>Vøringsfossen</a><span aria-hidden="true"> / </span><span>{ui.nearby}</span></nav>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">{guide.title}</h1>
            <p className="text-lg leading-8 max-w-3xl">{guide.intro}</p>
          </div>
        </section>
        <article className="max-w-5xl mx-auto px-5 sm:px-8 py-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">{ui.tips}</h2>
            <ul className="grid sm:grid-cols-3 gap-4">{guide.tips.map((tip) => <li key={tip} className="nearby-card leading-7">{tip}</li>)}</ul>
          </section>
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">{ui.facts}</h2>
            <dl className="nearby-facts">{guide.facts.map(([label, value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}</dl>
          </section>
          {guide.sections.map(([heading, text]) => (
            <section key={heading} className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{heading}</h2>
              <p className="leading-8" style={{ color: 'var(--text-secondary)' }}>{text}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">{ui.route}</h2>
            <ol className="list-decimal pl-6 space-y-4 leading-8">{guide.steps.map((step) => <li key={step} className="pl-2">{step}</li>)}</ol>
          </section>
          <section className="space-y-4">{guide.faq.map(([q, a]) => <details key={q} className="nearby-card"><summary className="font-semibold cursor-pointer">{q}</summary><p className="mt-4 leading-8">{a}</p></details>)}</section>
          <section className="nearby-card">
            <h2 className="font-display text-2xl font-semibold mb-4">{ui.sources}</h2>
            <p className="text-sm mb-5">{ui.checked}</p>
            <ul className="space-y-3">{guide.sources.map((source) => <li key={source.url}><a className="underline underline-offset-4" href={source.url} target="_blank" rel="noopener noreferrer">{source.name} ↗</a></li>)}</ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold mb-5">{ui.related}</h2>
            <div className="grid sm:grid-cols-2 gap-5">{related.map((item) => <a className="nearby-card" key={item.slug} href={`/${selected}/nearby/${item.slug}`}><h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3><p className="text-sm leading-7">{item.description}</p></a>)}</div>
          </section>
          <section className="pb-8">
            <h2 className="font-display text-2xl font-semibold mb-5">{ui.map}</h2>
            <a className="nearby-map-link" href={guide.map} target="_blank" rel="noopener noreferrer">{ui.map} ↗</a>
            <p className="mt-7"><a className="underline underline-offset-4" href={`/${selected}`}>← {ui.back}</a></p>
          </section>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  );
}

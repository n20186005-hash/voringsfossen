import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { intentGuideMap, intentGuides } from '@/content/intent-guides';
import { HERO_IMAGE_PATH, MAPS_URL, SITE_NAME, SITE_URL, localizedUrl } from '@/lib/site';

export function generateStaticParams() {
  return intentGuides.map(({ slug }) => ({ locale: 'en', slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = locale === 'en' ? intentGuideMap.get(slug) : undefined;
  if (!guide) return {};

  const canonical = localizedUrl('en', `/${slug}`);
  const image = `${SITE_URL}${HERO_IMAGE_PATH}`;

  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: {
      canonical,
      languages: { en: canonical, 'x-default': canonical },
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'article',
      images: [{ url: image, width: 1200, height: 900, alt: `${guide.title} at Vøringsfossen` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.description,
      images: [image],
    },
  };
}

export default async function IntentGuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = locale === 'en' ? intentGuideMap.get(slug) : undefined;
  if (!guide) notFound();

  setRequestLocale('en');
  const canonical = localizedUrl('en', `/${guide.slug}`);
  const related = intentGuides.filter((item) => item.slug !== guide.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        headline: guide.title,
        description: guide.description,
        url: canonical,
        inLanguage: 'en',
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        mainEntityOfPage: { '@id': `${canonical}#webpage` },
        about: { '@id': `${SITE_URL}/#attraction` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: guide.metaTitle,
        description: guide.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Vøringsfossen', item: `${SITE_URL}/en` },
          { '@type': 'ListItem', position: 2, name: guide.title, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: guide.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header showLanguageToggle={false} />
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24" style={{ background: '#0f2015' }}>
          <div className="absolute inset-0 opacity-30">
            <img
              src="/gallery/images (1).jpg"
              alt=""
              width="4618"
              height="3464"
              className="w-full h-full object-cover"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-[#0f2015]/95" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-white">
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
              <a href="/en" className="hover:text-white">Vøringsfossen</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{guide.eyebrow}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">{guide.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
              {guide.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl">{guide.intro}</p>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 border-b" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-3">
            {guide.quickFacts.map((fact) => (
              <div key={fact} className="rounded-lg px-4 py-3 text-sm font-medium" style={{ background: 'var(--card-bg)', color: 'var(--text-secondary)' }}>
                {fact}
              </div>
            ))}
          </div>
        </section>

        <article className="section-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-8" style={{ color: 'var(--text-secondary)' }}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-none" style={{ background: 'var(--accent)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className="rounded-2xl p-6 sm:p-8" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Check before you travel</h2>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                Road status, seasonal closures and transport can change quickly. Confirm current information with Norwegian Scenic Routes, Statens vegvesen and Visit Eidfjord.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2.5 rounded-full text-white text-sm font-semibold" style={{ background: 'var(--accent)' }}>
                  Open Google Maps
                </a>
                <a href="https://www.nasjonaleturistveger.no/en/routes/hardangervidda/voringsfossen/" target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2.5 rounded-full text-sm font-semibold" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  Official visitor update
                </a>
              </div>
            </aside>

            <section id="faq">
              <h2 className="font-display text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Frequently asked questions</h2>
              <div className="space-y-4">
                {guide.faq.map((item) => (
                  <details key={item.q} className="rounded-xl p-5" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                    <summary className="font-semibold cursor-pointer" style={{ color: 'var(--text-primary)' }}>{item.q}</summary>
                    <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>More Vøringsfossen guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((item) => (
                  <a key={item.slug} href={`/en/${item.slug}`} className="rounded-xl p-5 transition-shadow hover:shadow-md" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>{item.eyebrow}</span>
                    <h3 className="font-display text-lg font-semibold mt-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

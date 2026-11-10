import { useLocale } from 'next-intl';
import { nearbyContent } from '@/content/nearby';
import type { SiteLocale } from '@/lib/site';

export default function NearbyGuides() {
  const locale = useLocale() as SiteLocale;
  const { ui, guides } = nearbyContent[locale];
  return (
    <section id="nearby" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">{ui.nearby}</h2>
        <p className="max-w-3xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ui.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-5">
          {guides.map((guide, index) => (
            <a key={guide.slug} href={`/${locale}/nearby/${guide.slug}`} className="nearby-card">
              <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>0{index + 1}</span>
              <h3 className="font-display text-2xl mt-3 mb-4 font-semibold">{guide.title}</h3>
              <p className="text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>{guide.description}</p>
              <span className="inline-block mt-5 font-semibold text-sm" style={{ color: 'var(--accent)' }}>{ui.read} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

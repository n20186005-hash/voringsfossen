import { intentGuides } from '@/content/intent-guides';

export default function IntentGuides() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--accent)' }}>
          Plan with confidence
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
          Vøringsfossen visitor guides
        </h2>
        <p className="max-w-3xl leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          Find focused, practical answers for parking, routes, viewpoints, hiking, seasonal closures and travel from Bergen or Eidfjord.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {intentGuides.map((guide) => (
            <a
              key={guide.slug}
              href={`/en/${guide.slug}`}
              className="group rounded-xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                {guide.eyebrow}
              </span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-3" style={{ color: 'var(--text-primary)' }}>
                {guide.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {guide.description}
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                Read guide <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

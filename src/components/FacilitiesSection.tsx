import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

const facilityIcons: Record<string, ReactNode> = {
  wc: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 8v7h4" />
    </>
  ),
  parking: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 17V7h4.5a3 3 0 0 1 0 6H9" />
    </>
  ),
  dining: (
    <>
      <path d="M5 2v7a2 2 0 0 0 2 2v11" />
      <path d="M7 2v6" />
      <path d="M5 4h4" />
      <path d="M18 2c2 2 2 5 0 8v12" />
    </>
  ),
  shopping: (
    <>
      <path d="M6 7h12l1 14H5L6 7z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </>
  ),
  fuel: (
    <>
      <path d="M5 22V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v18" />
      <path d="M5 9h10" />
      <path d="M15 13h2a2 2 0 0 1 2 2v4a1 1 0 0 0 1 1" />
      <path d="M18 4v14" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M10 8h5l1.5 5.5L21 15" />
      <path d="M10 8v6l2.5 3L11 22" />
      <circle cx="8" cy="14" r="4" />
    </>
  ),
};

const facilityKeys = ['wc', 'parking', 'dining', 'shopping', 'fuel', 'accessibility'] as const;

export default function FacilitiesSection() {
  const t = useTranslations('facilities');

  return (
    <section id="facilities" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-14 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilityKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl p-6 sm:p-7 transition-shadow hover:shadow-md"
              style={{
                background: 'var(--card-bg)',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'var(--accent)' }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {facilityIcons[key]}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t(`${key}.title`)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t(`${key}.content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

const transportIcons: Record<string, ReactNode> = {
  airport: (
    <>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </>
  ),
  bus: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="3" />
      <path d="M3 10h18" />
      <circle cx="8" cy="20" r="1.5" />
      <circle cx="16" cy="20" r="1.5" />
    </>
  ),
  taxi: (
    <>
      <path d="M5 11 7 6h10l2 5" />
      <rect x="2" y="11" width="20" height="8" rx="2" />
      <rect x="9" y="7" width="6" height="3" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
  car: (
    <>
      <path d="M4 12 6 7h12l2 5" />
      <rect x="2" y="11" width="20" height="7" rx="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  train: (
    <>
      <rect x="3" y="3" width="18" height="11" rx="3" />
      <path d="M3 9h18" />
      <path d="M9 20h6" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="16" cy="18" r="1.5" />
    </>
  ),
  shuttle: (
    <>
      <rect x="2" y="6" width="13" height="10" rx="2" />
      <path d="M15 8h3l4 4v4h-7" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
};

const transportKeys = ['airport', 'bus', 'taxi', 'car', 'train', 'shuttle'] as const;

export default function TransportSection() {
  const t = useTranslations('transport');

  return (
    <section id="transport" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-center text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-8 mx-auto" style={{ background: 'var(--accent)' }} />
        <p
          className="text-center text-base leading-relaxed max-w-3xl mx-auto mb-14"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {transportKeys.map((key) => (
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
                    {transportIcons[key]}
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

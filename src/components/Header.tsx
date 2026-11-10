'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { nearbyContent } from '@/content/nearby';
import type { SiteLocale } from '@/lib/site';

export default function Header({ showLanguageToggle = true }: { showLanguageToggle?: boolean }) {
  const t = useTranslations('header');
  const locale = useLocale();
  const prefix = `/${locale}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={prefix || '/'} className="font-display text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          Vøringsfossen
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {(['transport', 'facilities', 'gallery', 'reviews', 'map'] as const).map((section) => (
            <a
              key={section}
              href={`${prefix}#${section}`}
              className="text-sm font-medium transition-colors"
              style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <details className="md:hidden mobile-nav">
            <summary aria-label={t('menu')} className="cursor-pointer px-2 py-2 rounded-md" style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}>☰</summary>
            <nav className="mobile-nav-panel">
              {(['transport', 'facilities', 'gallery', 'reviews', 'map'] as const).map((section) => <a key={section} href={`${prefix}#${section}`}>{t(section)}</a>)}
              <a href={`${prefix}#nearby`}>{nearbyContent[locale as SiteLocale].ui.nearby}</a>
            </nav>
          </details>
          <ThemeToggle />
          {showLanguageToggle && <LanguageToggle />}
        </div>
      </div>
    </header>
  );
}


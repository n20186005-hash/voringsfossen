import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import LocaleLayout, { generateMetadata as localizedMetadata } from '../[locale]/layout';

const englishParams = () => Promise.resolve({ locale: 'en' });

export function generateMetadata(): Promise<Metadata> {
  return localizedMetadata({ params: englishParams() });
}

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout params={englishParams()}>{children}</LocaleLayout>;
}

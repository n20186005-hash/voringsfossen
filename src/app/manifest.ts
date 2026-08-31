import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vøringsfossen Waterfall - Visitor Guide',
    short_name: 'Vøringsfossen',
    description: 'Comprehensive visitor guide to Vøringsfossen Waterfall in Eidfjord, Vestland, Norway.',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0f2015',
    theme_color: '#3a7a8d',
    categories: ['travel', 'tourism', 'nature'],
    icons: [
      { src: '/icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
    ],
  };
}

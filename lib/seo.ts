import type { Metadata } from 'next';

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Havenly Solutions`, description, url: path, type: 'website', locale: 'en_ZA', siteName: 'Havenly Solutions' },
  };
}

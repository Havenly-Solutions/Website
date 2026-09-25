import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { BANNERS } from '@/lib/content';
import { SiteNav } from './SiteNav';

type Props = {
  slug: keyof typeof BANNERS | string;
  crumb: string;
  title: string;
  intro?: string;
  right?: ReactNode;
  children?: ReactNode;
};

/** Dark rounded frame with the navigation bar and this page's own banner photo behind it. */
export function PageHero({ slug, crumb, title, intro, right, children }: Props) {
  const banner = BANNERS[slug];
  return (
    <header className="frame has-bg banner-photo">
      <div className="bg" aria-hidden="true">
        <Image src={banner.src} alt="" fill priority sizes="100vw" quality={72} style={{ objectPosition: banner.position }} />
      </div>
      <SiteNav />
      <div className="banner">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / {crumb}
        </nav>
        <div className="banner-row">
          <div>
            <h1>{title}</h1>
            {intro ? <p>{intro}</p> : null}
          </div>
          {right}
        </div>
        {children}
      </div>
    </header>
  );
}

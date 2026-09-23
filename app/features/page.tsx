import { FeatureGrid } from '@/components/FeatureGrid';
import { PageHero } from '@/components/PageHero';
import { FinalCta } from '@/components/Sections';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Features',
  description: 'SOS, trusted contacts, messaging, voice and video calling, community chat, a community feed, missing-person reporting, Jabu and more.',
  path: '/features',
});

export default function Page() {
  return (
    <>
      <PageHero slug="features" crumb="Features" title="Features" intro="Safety, communication, community and information in one connected experience."
        right={<div className="banner-actions"><Link className="btn btn-light" href="/pre-register">Pre-Register</Link></div>} />
      <section className="sec"><div className="wrap"><FeatureGrid /></div></section>
      <FinalCta />
    </>
  );
}

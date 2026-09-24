import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ChatSection, FeedSection, FinalCta, JabuSection, MissingSection } from '@/components/Sections';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'For Communities',
  description: 'How Havenly Solutions can help your community communicate and respond: community chat, an information feed and missing-person awareness.',
  path: '/communities',
});

export default function Page() {
  return (
    <>
      <PageHero slug="communities" crumb="For Communities" title="How could Havenly Solutions help your community communicate and respond?" intro="Community chat, an information feed and missing-person awareness, connected to the rest of the platform.">
        <div className="banner-actions" style={{ marginTop: 20 }}>
          <Link className="btn btn-light" href="/contact">Talk to us about your community</Link>
          <Link className="btn btn-line-d" href="/register">Pre-Register</Link>
        </div>
      </PageHero>
      <div style={{ height: 32 }} />
      <ChatSection />
      <FeedSection />
      <MissingSection />
      <JabuSection />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card band">
            <div><h2>Community partners</h2><p className="muted" style={{ marginTop: 6 }}>Organizations that help strengthen community-level communication and support can partner with Havenly Solutions.</p></div>
            <div className="right"><Link className="btn btn-dark" href="/partners#apply">Become a Havenly Solutions Partner</Link></div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

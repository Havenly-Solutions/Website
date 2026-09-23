import Link from 'next/link';
import { FaqList } from '@/components/Faq';
import { PageHero } from '@/components/PageHero';
import { FAQ } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'FAQ',
  description: 'Straight answers about Havenly Solutions, the app, the planned launch on 13 October 2026, partnerships and privacy.',
  path: '/faq',
});

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Page() {
  return (
    <>
      <PageHero slug="faq" crumb="FAQ" title="Frequently asked questions" intro="Straight answers about Havenly Solutions, the app and the launch." />
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <FaqList />
          <p className="muted" style={{ marginTop: 24 }}>Something we have not answered? <Link className="tlink" href="/contact">Contact us</Link>.</p>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
    </>
  );
}

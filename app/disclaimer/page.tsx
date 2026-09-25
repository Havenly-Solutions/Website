import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { DISCLAIMER_INTRO, DISCLAIMER_SECTIONS, DISCLAIMER_UPDATED } from '@/components/legal/disclaimer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Disclaimer',
  description: 'Disclaimer for the Havenly Solutions website and mobile application.',
  path: '/disclaimer',
});

export default function Page() {
  return (
    <>
      <PageHero slug="disclaimer" crumb="Disclaimer" title="Disclaimer" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={DISCLAIMER_UPDATED} intro={DISCLAIMER_INTRO} sections={DISCLAIMER_SECTIONS} toc={false} />
      </div></section>
    </>
  );
}

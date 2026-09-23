import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { AUP_INTRO, AUP_SECTIONS, AUP_UPDATED } from '@/components/legal/acceptable-use';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Acceptable Use Policy',
  description: 'Rules for acceptable use of the Havenly Solutions website and services.',
  path: '/acceptable-use-policy',
});

export default function Page() {
  return (
    <>
      <PageHero slug="acceptable-use-policy" crumb="Acceptable Use Policy" title="Acceptable Use Policy" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={AUP_UPDATED} intro={AUP_INTRO} sections={AUP_SECTIONS} />
      </div></section>
    </>
  );
}

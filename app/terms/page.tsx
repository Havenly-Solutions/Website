import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { TERMS_INTRO, TERMS_SECTIONS, TERMS_UPDATED } from '@/components/legal/terms';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms of Use',
  description: 'The terms that govern your use of the Havenly Solutions website and services.',
  path: '/terms',
});

export default function Page() {
  return (
    <>
      <PageHero slug="terms" crumb="Terms of Use" title="Terms of Use" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={TERMS_UPDATED} intro={TERMS_INTRO} sections={TERMS_SECTIONS} />
      </div></section>
    </>
  );
}

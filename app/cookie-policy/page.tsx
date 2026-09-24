import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { COOKIE_INTRO, COOKIE_SECTIONS, COOKIE_UPDATED } from '@/components/legal/cookie-policy';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Cookie Policy',
  description: 'What cookies the Havenly Solutions website uses and how to control them.',
  path: '/cookie-policy',
});

export default function Page() {
  return (
    <>
      <PageHero slug="cookie-policy" crumb="Cookie Policy" title="Cookie Policy" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={COOKIE_UPDATED} intro={COOKIE_INTRO} sections={COOKIE_SECTIONS} />
      </div></section>
    </>
  );
}

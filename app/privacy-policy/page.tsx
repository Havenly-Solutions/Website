import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { PRIVACY_INTRO, PRIVACY_SECTIONS, PRIVACY_UPDATED } from '@/components/legal/privacy-policy';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Havenly Solutions collects, uses, shares and protects personal information.',
  path: '/privacy-policy',
});

export default function Page() {
  return (
    <>
      <PageHero slug="privacy-policy" crumb="Privacy Policy" title="Privacy Policy" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={PRIVACY_UPDATED} intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} />
      </div></section>
    </>
  );
}

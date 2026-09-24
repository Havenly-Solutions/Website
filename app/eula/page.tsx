import { LegalDoc } from '@/components/LegalDoc';
import { PageHero } from '@/components/PageHero';
import { EULA_INTRO, EULA_SECTIONS, EULA_UPDATED } from '@/components/legal/eula';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'End User Licence Agreement',
  description: 'The licence terms for using the Havenly Solutions mobile application.',
  path: '/eula',
});

export default function Page() {
  return (
    <>
      <PageHero slug="eula" crumb="End User Licence Agreement" title="End User Licence Agreement" />
      <section className="sec"><div className="wrap">
        <LegalDoc updated={EULA_UPDATED} intro={EULA_INTRO} sections={EULA_SECTIONS} />
      </div></section>
    </>
  );
}

import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Photo } from '@/components/Photo';
import { FinalCta, Principles } from '@/components/Sections';
import { SITE } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description: 'Havenly Solutions (Pty) Ltd is a South African technology company building around people, community and safety.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <PageHero slug="about" crumb="About" title="Building technology around people, community and safety." intro="Havenly Solutions (Pty) Ltd is a South African technology company based in Johannesburg." />
      <section className="sec">
        <div className="wrap g2-photo">
          <div>
            <h2>Technology that feels human.</h2>
            <p className="muted" style={{ marginTop: 12 }}>We build technology that helps connect people, trusted relationships, communities, information, emergency workflows and approved response organizations.</p>
            <p className="stmt">Safety should not feel complicated, and people should not feel disconnected when something important happens.</p>
            <p className="muted" style={{ marginTop: 16 }}>Planned launch: {SITE.launchLabel}.</p>
            <p style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link className="btn btn-dark" href="/pre-register">Pre-Register</Link>
              <Link className="btn btn-line" href="/partners">Partner with us</Link>
            </p>
          </div>
          <Photo src="/images/photos/red.jpg" alt="A young girl in a red headwrap raising her fist, with hills and the city behind her" minHeight={380} position="42% center" />
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><div><h2>Our approach</h2></div></div>
          <Principles />
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap g2-photo">
          <Photo src="/images/photos/bw.jpg" alt="Black and white photograph of young people in caps and plaid skirts dancing on a dusty road" minHeight={420} position="center 40%" />
          <div>
            <h2>Safety does not stop with one person.</h2>
            <p className="muted" style={{ marginTop: 12 }}>Havenly Solutions is designed around the idea that communities look out for each other. Its features connect the people you trust, the information your community shares and, where approved, the organizations that can help.</p>
            <p style={{ marginTop: 16 }}><Link className="btn btn-line" href="/communities">See how it supports communities</Link></p>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

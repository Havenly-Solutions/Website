import { Countdown } from '@/components/Countdown';
import { PageHero } from '@/components/PageHero';
import { Photo } from '@/components/Photo';
import { PreRegisterForm } from '@/components/forms/PreRegisterForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Pre-Register',
  description: 'Pre-register for Havenly Solutions and receive launch information. Planned launch 13 October 2026 at 20:30 SAST.',
  path: '/pre-register',
});

export default function Page() {
  return (
    <>
      <PageHero slug="pre-register" crumb="Pre-Register" title="Be ready for Havenly Solutions." intro="Join the Havenly Solutions community before launch. Planned launch: 13 October 2026 at 20:30 SAST." right={<Countdown size="sm" />} />
      <section className="sec">
        <div className="wrap g2-photo" style={{ alignItems: 'start' }}>
          <div className="form-card"><PreRegisterForm /></div>
          <div>
            <Photo src="/images/photos/bead.jpg" alt="A smiling young girl wearing a beaded headband, necklace and earrings" minHeight={280} />
            <h2 style={{ fontSize: 'var(--t-lg)', margin: '20px 0 8px' }}>What pre-registration means</h2>
            <p className="muted">Pre-registering tells us you want to be part of the launch and lets us send you launch information. It does not create an account, and it does not give you access to the app yet. We will never ask for a password or payment details.</p>
          </div>
        </div>
      </section>
    </>
  );
}

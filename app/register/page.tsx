import { Countdown } from '@/components/Countdown';
import { PageHero } from '@/components/PageHero';
import { Photo } from '@/components/Photo';
import { RegisterForm } from '@/components/forms/RegisterForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Register',
  description: 'Register your interest in Havenly Solutions and receive launch updates. Planned launch 13 October 2026.',
  path: '/register',
});

export default function Page() {
  return (
    <>
      <PageHero slug="register" crumb="Register" title="Be ready for Havenly Solutions." intro="Join the Havenly Solutions community before launch. Planned launch: 13 October 2026." right={<Countdown size="sm" />} />
      <section className="sec">
        <div className="wrap g2-photo" style={{ alignItems: 'start' }}>
          <div className="form-card"><RegisterForm /></div>
          <div>
            <Photo src="/images/photos/bead.jpg" alt="A smiling young girl wearing a beaded headband, necklace and earrings" minHeight={280} />
            <h2 style={{ fontSize: 'var(--t-lg)', margin: '20px 0 8px' }}>What registering means</h2>
            <p className="muted">Registering tells us you want to be part of the launch and lets us send you launch information. It does not create an account, and it does not give you access to the app yet. We will never ask for a password or payment details.</p>
          </div>
        </div>
      </section>
    </>
  );
}

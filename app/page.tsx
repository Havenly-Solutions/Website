import Link from 'next/link';
import type { Metadata } from 'next';
import { ChatSection, CommSection, ContactsSection, FaqPreview, FeedSection, JabuSection, MissingSection, PartnerCta, Pillars, ResilienceSection, ResponderSection, SosSection, StepsSection, TrustSection, WhySection } from '@/components/Sections';
import { Countdown } from '@/components/Countdown';
import { HomeHero } from '@/components/HomeHero';
import { RegisterForm } from '@/components/forms/RegisterForm';
import { Photo } from '@/components/Photo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Havenly Solutions | Connected safety for the people and communities that matter' },
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="sec" style={{ padding: '24px 0 0' }}>
        <div className="wrap">
          <div className="card band">
            <div><h2>Be ready for Havenly Solutions.</h2><p className="muted" style={{ marginTop: 6 }}>Join the Havenly Solutions community before launch.</p></div>
            <div className="right">
              <Countdown size="sm" light />
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link className="btn btn-dark" href="/register">Register</Link>
                <span className="xs">Planned Launch: {SITE.launchLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div><h2>When something important happens, communication matters.</h2></div>
          <div>
            <p className="muted">Modern people often have messaging apps, phone contacts, social networks, emergency numbers, community groups and separate information channels. But these tools are often disconnected.</p>
            <div className="chips" style={{ margin: '16px 0' }}>
              {['Messaging apps', 'Phone contacts', 'Social networks', 'Emergency numbers', 'Community groups', 'Separate information channels'].map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
            <p className="muted">The concept behind Havenly Solutions is to bring important safety and community communication functions together in one ecosystem.</p>
            <p className="stmt">Havenly Solutions is designed to connect the people, information and response pathways that matter.</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div><h2>Havenly Solutions is more than an SOS button.</h2><p>Six connected pillars, working together in one ecosystem.</p></div>
            <Link className="btn btn-line" href="/features">All features</Link>
          </div>
          <Pillars />
        </div>
      </section>

      <SosSection />
      <StepsSection />
      <ContactsSection />
      <CommSection />
      <ChatSection />
      <FeedSection />
      <MissingSection />
      <JabuSection />
      <ResilienceSection />
      <ResponderSection />
      <TrustSection />
      <WhySection />

      <section className="sec" style={{ paddingTop: 0 }} id="register">
        <div className="wrap">
          <div className="panel">
            <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 24 }}>
              <div><h2>The launch is getting closer.</h2><p style={{ margin: '8px auto 0' }}>Prepare before you need it. Planned launch: 13 October 2026.</p></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}><Countdown size="lg" /></div>
            <div className="g2-photo" style={{ alignItems: 'stretch' }}>
              <Photo src="/images/photos/red.jpg" alt="A young girl in a red headwrap raising her fist, with hills and the city behind her" minHeight={360} position="38% center" />
              <div className="form-card"><RegisterForm /></div>
            </div>
          </div>
        </div>
      </section>

      <PartnerCta />
      <FaqPreview />
    </>
  );
}

import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact Havenly Solutions for general, partnership, press or pre-launch enquiries.',
  path: '/contact',
});

export default function Page() {
  return (
    <>
      <PageHero slug="contact" crumb="Contact" title="Contact" intro="Send us a message and choose the topic that fits. This form is not monitored around the clock. In an emergency call 10111, or 112 from a mobile." />
      <section className="sec">
        <div className="wrap cgrid">
          <div className="form-card"><ContactForm /></div>
          <div className="grid" style={{ gap: 12 }}>
            <div className="card">
              <h3>Reach us directly</h3>
              <div className="contact-list">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
                <span>{SITE.locality}, {SITE.country}</span>
              </div>
            </div>
            <div className="card"><h3>General enquiries</h3><p>Questions about Havenly Solutions and the app.</p></div>
            <div className="card"><h3>Partnership enquiries</h3><p>Organizations can also use the <Link className="tlink" href="/partners#apply">partnership enquiry form</Link>.</p></div>
            <div className="card"><h3>Press and media</h3><p>Interview and information requests.</p></div>
            <div className="card"><h3>Customer and pre-launch enquiries</h3><p>Questions about pre-registration and the launch.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

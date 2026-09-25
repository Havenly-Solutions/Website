import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { ResponderSection } from '@/components/Sections';
import { PartnerEnquiryForm } from '@/components/forms/PartnerEnquiryForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Partners',
  description: 'Partner with Havenly Solutions: response partners, community partners and service or technology partners. Submit a partnership enquiry.',
  path: '/partners',
});

export default function Page() {
  return (
    <>
      <PageHero slug="partners" crumb="Partners" title="Partner with Havenly Solutions." intro="We are building an ecosystem of approved response and service organizations."
        right={<div className="banner-actions"><Link className="btn btn-light" href="#apply">Become a Havenly Solutions Partner</Link></div>} />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><h2>Ways to partner</h2><p>No organization is listed as a partner until a partnership has been formally confirmed.</p></div></div>
          <div className="grid g3">
            <div className="card"><div className="ico"><Icon name="shield" /></div><h3>Response partners</h3><p>Organizations capable of supporting emergency or security response.</p></div>
            <div className="card"><div className="ico"><Icon name="users" /></div><h3>Community partners</h3><p>Organizations helping strengthen community-level communication and support.</p></div>
            <div className="card"><div className="ico"><Icon name="building" /></div><h3>Service and technology partners</h3><p>Organizations providing services that can support the Havenly Solutions ecosystem.</p></div>
          </div>
        </div>
      </section>

      <ResponderSection />

      <section className="sec" id="apply" style={{ paddingTop: 0, scrollMarginTop: 16 }}>
        <div className="wrap">
          <div className="sec-head"><div><h2>Partnership enquiry</h2><p>Tell us about your organization. A member of the Havenly Solutions team will review your enquiry and contact you.</p></div></div>
          <div className="form-card" style={{ maxWidth: 760 }}><PartnerEnquiryForm /></div>
        </div>
      </section>
    </>
  );
}

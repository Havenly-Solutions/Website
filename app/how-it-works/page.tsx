import { PageHero } from '@/components/PageHero';
import { ContactsSection, FinalCta, ResilienceSection, ResponderSection, SosSection, StepsSection, TrustSection } from '@/components/Sections';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'How It Works',
  description: 'See how Havenly Solutions works: a central SOS control, a five-step emergency workflow, trusted contacts, resilience and approved responder integrations.',
  path: '/how-it-works',
});

export default function Page() {
  return (
    <>
      <PageHero slug="how-it-works" crumb="How It Works" title="How Havenly Solutions works" intro="From a simple SOS control to coordinated communication with the people and organizations that matter." />
      <div style={{ height: 32 }} />
      <SosSection />
      <StepsSection />
      <ContactsSection />
      <ResilienceSection />
      <ResponderSection />
      <TrustSection />
      <FinalCta />
    </>
  );
}

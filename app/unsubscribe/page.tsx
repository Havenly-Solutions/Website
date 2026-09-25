import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHero } from '@/components/PageHero';
import { UnsubscribeForm } from '@/components/forms/UnsubscribeForm';

export const metadata: Metadata = {
  title: 'Email Unsubscribe',
  description: 'Manage your email subscription preferences for Havenly Solutions.',
};

export default function UnsubscribePage() {
  return (
    <>
      <PageHero
        slug="privacy-policy"
        crumb="Unsubscribe"
        title="Email Unsubscribe"
        intro="Manage your email communication preferences for Havenly Solutions."
      />
      <section className="sec">
        <div className="wrap">
          <div className="panel light" style={{ background: 'var(--card)', color: 'var(--ink)', border: '1px solid var(--line)', padding: 'clamp(24px, 4vw, 48px)' }}>
            <Suspense fallback={<p className="muted" style={{ textAlign: 'center' }}>Loading form…</p>}>
              <UnsubscribeForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

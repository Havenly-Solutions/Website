"use client";

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    if (!key || key === 'YOUR_POSTHOG_KEY') {
      console.warn('PostHog key is missing or placeholder. Skipping initialization.');
      return;
    }

    // Initialize PostHog
    posthog.init(key, {
      api_host: host,
      person_profiles: 'identified_only',
      capture_pageview: false,
      persistence: 'localStorage+cookie',
      opt_out_capturing_by_default: true, // Respect privacy by default
    });

    // Check for existing consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.analytics) {
          posthog.opt_in_capturing();
        } else {
          posthog.opt_out_capturing();
        }
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

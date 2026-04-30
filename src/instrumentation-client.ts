import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration()
  ],
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.05 : 1.0,
  replaysOnErrorSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/api\.havenly\.solutions\/api/, /^http:\/\/localhost:3005\/api/],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

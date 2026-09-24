'use client';

export const OPEN_COOKIE_SETTINGS = 'hs:open-cookie-settings';

export function CookieSettingsButton({ className, children = 'Cookie settings' }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}>
      {children}
    </button>
  );
}

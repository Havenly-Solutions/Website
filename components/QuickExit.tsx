'use client';

import { useEffect } from 'react';

const SAFE_URL = 'https://www.google.com';
const leave = () => window.location.replace(SAFE_URL);

/** Leaves the site immediately: click the button, or press Escape twice. Uses replace() so the page is not left in history. */
export function QuickExit() {
  useEffect(() => {
    let last = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (document.querySelector('[data-cookie-modal]')) return;
      const now = Date.now();
      if (now - last < 800) leave();
      last = now;
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <button className="exit" type="button" onClick={leave} aria-label="Quick exit: leave this site now">
      Quick exit
    </button>
  );
}

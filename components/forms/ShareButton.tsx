'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

export function ShareButton() {
  const [note, setNote] = useState('');
  const share = async () => {
    const text = `Havenly Solutions launches on 13 October 2026. Pre-register:`;
    const url = `${SITE.url}/register`;
    try {
      if (navigator.share) await navigator.share({ title: 'Havenly Solutions', text, url });
      else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        setNote('Link copied.');
      }
    } catch {
      /* the visitor dismissed the share sheet */
    }
  };
  return (
    <>
      <button className="btn btn-line btn-sm share" type="button" onClick={share}>Share Havenly Solutions with someone you trust</button>
      <p className="xs" role="status">{note}</p>
    </>
  );
}

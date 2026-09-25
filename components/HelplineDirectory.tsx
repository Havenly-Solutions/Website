'use client';

import { useMemo, useState } from 'react';
import { HELPLINES, HELPLINE_CATEGORIES } from '@/lib/content';

export function HelplineDirectory() {
  const [cat, setCat] = useState<(typeof HELPLINE_CATEGORIES)[number]>('All');
  const [query, setQuery] = useState('');
  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HELPLINES.filter(
      (h) => (cat === 'All' || h.cat === cat) && (!q || `${h.cat} ${h.name} ${h.text} ${h.number}`.toLowerCase().includes(q)),
    );
  }, [cat, query]);

  return (
    <>
      <div className="tools">
        <input className="search" type="search" placeholder="Search helplines" aria-label="Search helplines" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="chips" role="group" aria-label="Filter helplines">
          {HELPLINE_CATEGORIES.map((c) => (
            <button key={c} className="chip" type="button" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="dir" aria-live="polite">
        {items.length === 0 ? (
          <div className="empty">No helplines match your search. Try another word or choose All.</div>
        ) : (
          items.map((h) => (
            <div className="dir-item" key={h.name}>
              <div>
                <h4>{h.name}</h4>
                <p>{h.text}</p>
              </div>
              <a className="num" href={`tel:${h.number.replace(/\s/g, '')}`} aria-label={`Call ${h.name} on ${h.number}`}>{h.number}</a>
            </div>
          ))
        )}
      </div>
    </>
  );
}

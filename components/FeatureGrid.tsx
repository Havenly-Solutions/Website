'use client';

import { useState } from 'react';
import { FEATURES, FEATURE_CATEGORIES } from '@/lib/content';
import { Icon } from './Icon';

export function FeatureGrid() {
  const [cat, setCat] = useState<(typeof FEATURE_CATEGORIES)[number]>('All');
  const items = FEATURES.filter((f) => cat === 'All' || f.cat === cat);
  return (
    <>
      <div className="tools">
        <div className="chips" role="group" aria-label="Filter features">
          {FEATURE_CATEGORIES.map((c) => (
            <button key={c} className="chip" type="button" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="grid g3">
        {items.map((f) => (
          <div className="card" key={f.title}>
            <span className="tag">{f.cat}</span>
            <div className="ico"><Icon name={f.icon} /></div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

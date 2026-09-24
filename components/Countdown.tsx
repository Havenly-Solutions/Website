'use client';

import { useEffect, useState } from 'react';
import { LAUNCH_MS } from '@/lib/site';

type Props = { size?: 'sm' | 'lg'; light?: boolean; showLabel?: boolean };
const two = (n: number) => (n < 10 ? `0${n}` : String(n));

/** Live countdown to launch (13 October 2026). Renders a launch message instead of negative values. */
export function Countdown({ size = 'sm', light = false, showLabel = true }: Props) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, LAUNCH_MS - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (left === 0) return <p className="live-msg">Havenly Solutions is now live.</p>;

  const d = left === null ? null : Math.floor(left / 864e5);
  const h = left === null ? null : Math.floor((left % 864e5) / 36e5);
  const m = left === null ? null : Math.floor((left % 36e5) / 6e4);
  const s = left === null ? null : Math.floor((left % 6e4) / 1e3);
  const units: [string, string][] = [
    [d === null ? '--' : String(d), 'days'],
    [h === null ? '--' : two(h), 'hours'],
    [m === null ? '--' : two(m), 'minutes'],
    [s === null ? '--' : two(s), 'seconds'],
  ];

  return (
    <div>
      {showLabel ? <span className="cl">Havenly Solutions Launches In</span> : null}
      <div className={`count ${size}${light ? ' light' : ''}`} role="timer" aria-label="Time until Havenly Solutions launches">
        {units.map(([value, label]) => (
          <div key={label}>
            <b>{value}</b>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

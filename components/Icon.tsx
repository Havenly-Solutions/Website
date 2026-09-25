import type { ReactNode } from 'react';

const PATHS: Record<string, ReactNode> = {
  l: <path d="M15 6l-6 6 6 6" />,
  r: <path d="M9 6l6 6-6 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>),
  shield: <path d="M12 21s7-3.5 7-9.5V5.5L12 3 5 5.5v6C5 17.5 12 21 12 21z" />,
  users: (<><circle cx="9" cy="8.5" r="3.2" /><path d="M3 20v-1.5A4.5 4.5 0 017.5 14h3A4.5 4.5 0 0115 18.5V20M16 5.6a3.2 3.2 0 010 5.8M18.5 14.4A4.5 4.5 0 0121 18.5V20" /></>),
  msg: <path d="M20 15a2 2 0 01-2 2H8l-4 3.5V6a2 2 0 012-2h12a2 2 0 012 2z" />,
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9S14.6 18.4 12 21c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" /></>),
  lock: (<><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /></>),
  file: (<><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5M9 15l2 2 4-4" /></>),
  bell: <path d="M6 9a6 6 0 1112 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9zM10 20a2 2 0 004 0" />,
  building: <path d="M5 21V4.5A1.5 1.5 0 016.5 3h7A1.5 1.5 0 0115 4.5V21M15 9h2.5a1.5 1.5 0 011.5 1.5V21M3 21h18M9 7.5h2M9 11.5h2M9 15.5h2" />,
  signal: <path d="M5 19.5a10 10 0 010-15M8.5 16a5.5 5.5 0 010-8M12 12h.01M15.5 8a5.5 5.5 0 010 8M19 4.5a10 10 0 010 15" />,
  video: (<><rect x="3" y="6.5" width="12.5" height="11" rx="2.5" /><path d="M15.5 10.5l5.5-3v9l-5.5-3" /></>),
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" /></>),
  eye: (<><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>),
  share: (<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" /></>),
  home: <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" />,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className ? `i ${className}` : 'i'} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {PATHS[name] ?? null}
    </svg>
  );
}

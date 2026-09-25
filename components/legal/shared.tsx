import { SITE } from '@/lib/site';

export function ContactBlock({ postal = false }: { postal?: boolean }) {
  return (
    <p>
      <strong>{SITE.legalName}</strong><br />
      Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
      Phone: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
      {postal ? <>{SITE.locality}, {SITE.region}, {SITE.country}</> : <>{SITE.locality}, {SITE.country}</>}
    </p>
  );
}

export const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

import type { ReactNode } from 'react';

export type LegalSection = { id: string; title: string; body: ReactNode };

export function LegalDoc({ updated, intro, sections, toc = true }: { updated: string; intro?: ReactNode; sections: LegalSection[]; toc?: boolean }) {
  return (
    <article className="doc">
      <p className="sub">Last updated {updated}</p>
      {intro}
      {toc && sections.length > 3 ? (
        <nav className="legal-toc" aria-label="Table of contents">
          <h2>Table of contents</h2>
          <ol>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
        </nav>
      ) : null}
      {sections.map((s, i) => (
        <section key={s.id} id={s.id}>
          <h2>{toc && sections.length > 3 ? `${i + 1}. ` : ''}{s.title}</h2>
          {s.body}
        </section>
      ))}
    </article>
  );
}

import Link from 'next/link';
import { FAQ } from '@/lib/content';

export function FaqList({ limit }: { limit?: number }) {
  const items = typeof limit === 'number' ? FAQ.slice(0, limit) : FAQ;
  return (
    <div>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="body">
            {item.a}
            {item.link ? (
              <>
                {' '}
                <Link className="tlink" href={item.link.href}>{item.link.label}</Link>
              </>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}

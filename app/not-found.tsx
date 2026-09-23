import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero slug="home" crumb="Page not found" title="We could not find that page." intro="The page may have moved, or the address may be mistyped.">
        <div className="banner-actions" style={{ marginTop: 20 }}>
          <Link className="btn btn-light" href="/">Back to home</Link>
          <Link className="btn btn-line-d" href="/contact">Contact us</Link>
        </div>
      </PageHero>
      <div style={{ height: 48 }} />
    </>
  );
}

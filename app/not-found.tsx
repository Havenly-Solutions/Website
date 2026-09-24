import Image from 'next/image';
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
      <div className="error-page">
        <div className="wrap">
          <div className="error-shell">
            <div className="error-visual">
              <span className="error-badge">Jabu says “Let’s reset”</span>
              <Image src="/images/brand/jabu.png" alt="Jabu mascot" width={244} height={440} priority style={{ width: 'min(80%, 260px)', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
            </div>
            <div className="error-copy">
              <span className="eyebrow">404 error</span>
              <h1>This route is not in reach.</h1>
              <p>Jabu couldn’t find the page you were looking for, but the Havenly site is still here to help you get back to the right place.</p>
              <div className="error-actions">
                <Link className="btn btn-red" href="/">Return home</Link>
                <Link className="btn btn-line-d" href="/contact">Contact support</Link>
              </div>
              <div className="error-card">
                <strong>Quick guidance</strong>
                Try the homepage, browse the features, or head to the registration page to keep moving safely.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

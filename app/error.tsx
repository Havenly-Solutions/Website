'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error-page">
      <div className="wrap">
        <div className="error-shell light">
          <div className="error-visual">
            <span className="error-badge">Jabu is checking it</span>
            <Image src="/images/brand/jabu.png" alt="Jabu mascot" width={244} height={440} priority style={{ width: 'min(80%, 260px)', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
          </div>
          <div className="error-copy">
            <span className="eyebrow">Unexpected issue</span>
            <h1>Something went wrong.</h1>
            <p>The Havenly site hit a temporary issue. Jabu is working through the problem, and you can retry or head back to a safe place.</p>
            <div className="error-actions">
              <button className="btn btn-dark" type="button" onClick={reset}>Try again</button>
              <Link className="btn btn-line" href="/">Back to home</Link>
            </div>
            <div className="error-card">
              <strong>Need a hand?</strong>
              If this keeps happening, contact us and we’ll help you get back on track.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

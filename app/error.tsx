'use client';

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <h1 style={{ fontSize: 'var(--t-xl)' }}>Something went wrong.</h1>
        <p className="muted" style={{ margin: '10px 0 20px' }}>Please try again. If the problem continues, contact us.</p>
        <button className="btn btn-dark" type="button" onClick={reset}>Try again</button>
      </div>
    </section>
  );
}

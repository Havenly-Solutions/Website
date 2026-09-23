'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

const CARDS = [
  { href: '/how-it-works', title: 'Emergency SOS', text: 'A central SOS control and a coordinated workflow.', cta: 'How it works', thumb: '/images/brand/app-launch-screen.png', cover: false },
  { href: '/communities', title: 'For communities', text: 'Community chat, a feed and missing-person awareness.', cta: 'Explore', thumb: '/images/photos/community.jpg', cover: true },
  { href: '/safe-hub', title: 'Safe Hub', text: 'Helplines and safety guides, open to everyone.', cta: 'Open', thumb: '/images/photos/red.jpg', cover: true },
  { href: '/partners', title: 'Partner with us', text: 'Response, community and technology partners.', cta: 'Apply', thumb: '/images/brand/logo.png', cover: false },
];

export function HeroSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);

  const step = useCallback(() => {
    const first = track.current?.firstElementChild as HTMLElement | null;
    return first ? first.getBoundingClientRect().width + 10 : 250;
  }, []);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.min(CARDS.length, Math.round(el.scrollLeft / step()) + 1));
  }, [step]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });

  return (
    <>
      <div className="smeta" aria-hidden="false">
        <span>{`0${index}`}</span>
        <span className="bar"><b style={{ width: `${(index / CARDS.length) * 100}%` }} /></span>
        <span>{`0${CARDS.length}`}</span>
        <span className="arrows">
          <button className={index > 1 ? 'arrow on' : 'arrow'} type="button" aria-label="Previous highlight" onClick={() => scrollBy(-1)}><Icon name="l" /></button>
          <button className={index < CARDS.length ? 'arrow on' : 'arrow'} type="button" aria-label="Next highlight" onClick={() => scrollBy(1)}><Icon name="r" /></button>
        </span>
      </div>
      <div className="track" ref={track} tabIndex={0} aria-label="Highlights">
        {CARDS.map((c) => (
          <Link key={c.href} className="scard" href={c.href}>
            <span className={c.cover ? 'th cover' : 'th'} style={{ backgroundImage: `url(${c.thumb})` }} />
            <span>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <span className="go">{c.cta}</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

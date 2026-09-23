import Image from 'next/image';
import Link from 'next/link';
import { BANNERS } from '@/lib/content';
import { SITE } from '@/lib/site';
import { Countdown } from './Countdown';
import { HeroSlider } from './HeroSlider';
import { SiteNav } from './SiteNav';

export function HomeHero() {
  const banner = BANNERS.home;
  return (
    <header className="frame has-bg">
      <div className="bg" aria-hidden="true">
        <Image src={banner.src} alt="" fill priority sizes="100vw" quality={72} style={{ objectPosition: banner.position }} />
      </div>
      <SiteNav />
      <div className="hero">
        <div className="hero-fig">
          <div className="hero-tag">
            <b>Jabu</b>
            Controlled Havenly Solutions information, designed to help you find what you need.
          </div>
          <Image className="jabu" src="/images/brand/jabu.png" alt="Jabu, the mascot: an armoured guardian character in sunglasses with arms crossed" width={244} height={440} priority />
        </div>
        <div className="hero-copy">
          <h1>Connected safety for the people and communities that matter.</h1>
          <p className="sub">Havenly Solutions brings emergency SOS, trusted communication, community connection and coordinated response into one connected platform.</p>
          <p className="sub2">Havenly Solutions is designed to help people stay connected, informed and better prepared when everyday situations become urgent.</p>
          <div className="launch">
            <span className="cap">Planned Launch: {SITE.launchLabel}</span>
            <Countdown size="sm" />
          </div>
          <div className="hero-cta">
            <Link className="btn btn-light" href="/pre-register">Pre-Register for Havenly Solutions</Link>
            <Link className="btn btn-line-d" href="/how-it-works">Explore Havenly Solutions</Link>
          </div>
          <HeroSlider />
        </div>
      </div>
    </header>
  );
}

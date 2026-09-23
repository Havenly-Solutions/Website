import Image from 'next/image';
import Link from 'next/link';
import { PILLARS, PRINCIPLES, STEPS } from '@/lib/content';
import { SITE } from '@/lib/site';
import { Icon } from './Icon';
import { Photo } from './Photo';
import { FaqList } from './Faq';

const Card = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className="card">
    <div className="ico"><Icon name={icon} /></div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export function Pillars() {
  return <div className="grid g3">{PILLARS.map((p) => <Card key={p.title} {...p} />)}</div>;
}
export function Principles() {
  return <div className="grid g3">{PRINCIPLES.map((p) => <Card key={p.title} {...p} />)}</div>;
}

export function PhoneMock() {
  return (
    <div className="phone-fig">
      <Image
        src="/images/brand/phone.png"
        alt="Illustration of the home screen with a large central SOS button and bottom navigation bar"
        width={320}
        height={640}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </div>
  );
}

export function SosSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><div className="panel"><div className="split">
      <div>
        <h2>When seconds matter, SOS should be simple.</h2>
        <p style={{ marginTop: 12, fontSize: 'var(--t-sm)' }}>The Home Screen is designed around a prominently positioned SOS control. The button is deliberately central and easy to identify, so you do not need to search through menus when under stress.</p>
        <p style={{ marginTop: 10, fontSize: 'var(--t-sm)' }}>Activating SOS can initiate the emergency workflow configured in Havenly Solutions. Depending on the situation and available configuration, the workflow may involve:</p>
        <ul className="bul"><li>relevant trusted contacts</li><li>community pathways</li><li>emergency information</li><li>configured responder integrations</li><li>operational monitoring</li></ul>
        <p style={{ marginTop: 16 }}><span className="tag red" style={{ margin: 0 }}>Where supported and configured.</span></p>
      </div>
      <PhoneMock />
    </div></div></div></section>
  );
}

export function StepsSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="sec-head"><div><h2>How SOS works</h2><p>Five steps from the moment SOS is activated.</p></div></div>
      <ol className="steps s5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {STEPS.map((s) => <li className="step-c" key={s}><h4>{s}</h4></li>)}
      </ol>
      <p className="stmt">The goal is coordinated communication, not unnecessary data sharing.</p>
    </div></section>
  );
}

export function ContactsSection() {
  const rows = [
    ['msg', 'Messaging', 'Direct communication with people in your trusted network.'],
    ['phone', 'Voice calls', 'Relationship-based calling, subject to permissions.'],
    ['video', 'Video calls', 'Relationship-based video, subject to permissions.'],
  ];
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap g2-photo">
      <div>
        <h2>Stay connected to people you trust.</h2>
        <p className="muted" style={{ marginTop: 12 }}>Users can establish relationships that may support messaging, voice calls and video calls. Communication is based on relationships and permissions, rather than exposing communication capabilities indiscriminately.</p>
        <p className="stmt">You decide who becomes part of your trusted network.</p>
      </div>
      <div className="grid" style={{ gap: 12 }}>
        {rows.map(([icon, title, text]) => (
          <div className="card" key={title} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 16 }}>
            <div className="ico" style={{ margin: 0 }}><Icon name={icon} /></div>
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export function CommSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="sec-head"><div><h2>One place to communicate.</h2></div></div>
      <div className="grid g3">
        <Card icon="msg" title="Message" text="Quick direct communication." />
        <Card icon="phone" title="Voice" text="Talk when typing is not enough." />
        <Card icon="video" title="Video" text="See the person when seeing them matters." />
      </div>
    </div></section>
  );
}

export function ChatSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap g2-photo">
      <Photo src="/images/photos/dance.jpg" alt="Women from a community dancing and laughing together outdoors" minHeight={340} />
      <div>
        <h2>Your community can stay connected.</h2>
        <p className="muted" style={{ marginTop: 12 }}>Havenly Solutions includes community-level communication designed for relevant community conversation. Potential uses include:</p>
        <ul className="bul"><li>community announcements</li><li>safety information</li><li>checking on people nearby</li><li>sharing relevant local information</li><li>coordinating community support</li></ul>
        <p className="stmt">Community chat is not a replacement for official emergency services.</p>
      </div>
    </div></section>
  );
}

export function FeedSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><div className="card" style={{ padding: 'clamp(20px,4vw,40px)' }}><div className="g2-photo tight">
      <Image className="feedimg" src="/images/brand/news.png" alt="The News Feed with a missing-person alert at the top and community posts below" width={319} height={701} />
      <div>
        <h2>Important information should be easy to see.</h2>
        <ul className="list light" style={{ marginTop: 16 }}>
          <li><Icon name="search" /><span><b>Missing Person Information</b><span className="muted">Shown at the top of the feed and visually emphasised. Additional missing-person posts sit in a horizontally swipeable collection.</span></span></li>
          <li><Icon name="users" /><span><b>Community Posts</b><span className="muted">Everyday posts from your community appear underneath.</span></span></li>
        </ul>
      </div>
    </div></div></div></section>
  );
}

export function MissingSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap split">
      <div><h2>When someone is missing, information can matter.</h2></div>
      <div>
        <p className="muted">Havenly Solutions supports a structured missing-person reporting workflow. Users may be able to:</p>
        <ul className="bul"><li>create a report</li><li>provide relevant information</li><li>attach suitable media</li><li>share information through the community and feed system</li></ul>
        <p className="muted" style={{ marginTop: 14 }}>This is a community-awareness capability. It cannot guarantee that a missing person will be found.</p>
      </div>
    </div></section>
  );
}

export function JabuSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><div className="panel"><div className="split jb">
      <Image className="jabu-img" src="/images/brand/jabu.png" alt="Jabu, the mascot: an armoured guardian character in sunglasses with arms crossed and an HS shield on his backpack" width={244} height={440} />
      <div>
        <h2>Meet Jabu.</h2>
        <p style={{ marginTop: 6, font: '500 var(--t-md)/1.4 var(--head)', color: '#fff' }}>Controlled Havenly Solutions information, designed to help you find what you need.</p>
        <p style={{ marginTop: 12, fontSize: 'var(--t-sm)' }}>Jabu is a controlled information and guidance experience that works from approved and scoped Havenly Solutions information, such as:</p>
        <ul className="bul"><li>community information</li><li>approved Havenly Solutions resources</li><li>relevant community guidance</li><li>supported information associated with Havenly Solutions features</li></ul>
        <p className="stmt">Useful information, with boundaries.</p>
      </div>
    </div></div></div></section>
  );
}

export function ResilienceSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="sec-head"><div><h2>Built with resilience in mind.</h2><p>Havenly Solutions includes work designed to provide additional emergency resilience where normal connectivity may be unreliable.</p></div></div>
      <div className="grid g3">
        <Card icon="signal" title="Offline SOS" text="Designed to support emergency handling in limited-connectivity conditions." />
        <Card icon="share" title="Bluetooth Relay" text="Supported nearby devices can participate in emergency relay pathways." />
        <Card icon="shield" title="Background Emergency Support" text="Configured emergency and background mechanisms can support the overall workflow when available." />
      </div>
      <p className="stmt">Designed to provide additional resilience, not a guarantee of connectivity or emergency response.</p>
    </div></section>
  );
}

export function ResponderSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap split">
      <div>
        <h2>Connecting Havenly Solutions to approved response organizations.</h2>
        <p className="stmt">Havenly Solutions manages the connection.</p>
      </div>
      <div>
        <p className="muted">Integrations can be supported with categories such as:</p>
        <div className="chips" style={{ margin: '14px 0' }}>
          {['Emergency services', 'Private security providers', 'Medical response providers', 'Community response organizations', 'Other approved organizations'].map((c) => <span className="chip" key={c}>{c}</span>)}
        </div>
        <p className="muted">External responders do not gain access to the entire Havenly Solutions system. They receive the relevant information required for the particular emergency workflow or service relationship.</p>
        <p style={{ marginTop: 18 }}><Link className="btn btn-dark" href="/partners#apply">Become a Havenly Solutions Partner</Link></p>
      </div>
    </div></section>
  );
}

export function TrustSection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="sec-head"><div><h2>Your safety matters. So does your privacy.</h2></div></div>
      <div className="grid g4">
        <Card icon="lock" title="Controlled access" text="Different people and organizations have different permissions." />
        <Card icon="file" title="Purpose-based information sharing" text="Information should be shared for a specific purpose." />
        <Card icon="eye" title="Data minimization" text="External providers should receive only the information relevant and necessary for an incident or service." />
        <Card icon="building" title="Operational control" text="Responder integrations are managed through controlled operational systems." />
      </div>
      <div className="card" style={{ marginTop: 16, borderColor: 'var(--red-d)' }}>
        <h3 style={{ fontSize: 'var(--t-lg)' }}>Havenly Solutions does not replace emergency services.</h3>
        <p style={{ marginTop: 6, maxWidth: '80ch' }}>The app is designed to help users communicate and coordinate relevant emergency information. Where approved integrations are available, Havenly Solutions can connect emergency workflows with participating response organizations.</p>
      </div>
    </div></section>
  );
}

export function WhySection() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="sec-head"><div><h2>Why Havenly Solutions</h2><p>Building technology around people, community and safety.</p></div><Link className="btn btn-line" href="/about">About us</Link></div>
      <Principles />
    </div></section>
  );
}

export function PartnerCta() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><div className="card band">
      <div><h2>Partner with Havenly Solutions.</h2><p className="muted" style={{ marginTop: 6 }}>Are you a response, community or technology organization? Tell us how you could work with us.</p></div>
      <div className="right"><Link className="btn btn-dark" href="/partners#apply">Become a Havenly Solutions Partner</Link></div>
    </div></div></section>
  );
}

export function FinalCta() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><div className="panel" style={{ textAlign: 'center' }}>
      <h2>Be ready before you need it.</h2>
      <p style={{ margin: '10px auto 0', maxWidth: '60ch', fontSize: 'var(--t-sm)' }}>Havenly Solutions is building a connected safety and community experience designed to help people stay connected, informed and prepared.</p>
      <p style={{ marginTop: 14, fontSize: 'var(--t-sm)', color: '#fff' }}>Planned launch: {SITE.launchLabel}</p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 18 }}>
        <Link className="btn btn-light" href="/pre-register">Pre-Register for Havenly Solutions</Link>
        <Link className="btn btn-line-d" href="/partners#apply">Partner with Havenly Solutions</Link>
      </div>
    </div></div></section>
  );
}

export function FaqPreview() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap faq-grid">
      <div><h2>Common questions</h2><p className="muted" style={{ marginTop: 8 }}>More answers on the <Link className="tlink" href="/faq">FAQ page</Link>.</p></div>
      <FaqList limit={6} />
    </div></section>
  );
}

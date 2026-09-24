import { HelplineDirectory } from '@/components/HelplineDirectory';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Safe Hub',
  description: 'Free helplines and practical safety guides for anyone in South Africa. No account or sign-up needed.',
  path: '/safe-hub',
});

const NOW = [
  { small: 'SAPS emergency', num: '10111', href: 'tel:10111' },
  { small: 'From any mobile', num: '112', href: 'tel:112' },
  { small: 'GBV Command Centre, free', num: '0800 428 428', href: 'tel:0800428428' },
];

export default function Page() {
  return (
    <>
      <PageHero slug="safe-hub" crumb="Safe Hub" title="Safe Hub" intro="Helplines and safety guides for anyone in South Africa. No account and no sign-up needed.">
        <div className="now dk" style={{ marginTop: 24, maxWidth: 720 }}>
          {NOW.map((n) => <a key={n.num} href={n.href}><small>{n.small}</small><b>{n.num}</b></a>)}
        </div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><h2>Helplines</h2><p>Call, or find the right service by type. Numbers starting 0800 are free to call.</p></div></div>
          <HelplineDirectory />
          <p className="xs" style={{ marginTop: 12 }}>Havenly Solutions does not replace emergency services. These are independent services and are not operated by Havenly Solutions.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><div><h2>Safety guides</h2><p>Short, practical guidance. Open the ones that fit your situation.</p></div></div>
          <div>
            <details><summary>Make a simple safety plan</summary><div className="body">A plan you have thought through in advance is easier to follow under stress.<ul><li>Decide on a safe place you can go, and how you would get there.</li><li>Memorise the numbers you may need. Do not rely only on your phone.</li><li>Keep copies of important documents, or ask a trusted person to hold them.</li><li>Agree a code word with someone you trust that means “I need help”.</li><li>Keep a small bag with essentials somewhere you can reach it.</li></ul></div></details>
            <details><summary>Supporting someone who is being abused</summary><div className="body"><ul><li>Listen without judging and believe what they tell you.</li><li>Let them decide what to do. Pressure can make things less safe.</li><li>Share the helplines above and offer to help them plan.</li><li>Do not confront the abuser on their behalf without a plan for their safety.</li></ul></div></details>
            <details><summary>Keep your phone and messages private</summary><div className="body"><ul><li>Use a screen lock and biometric unlock, and keep your PIN to yourself.</li><li>A shared phone or account can show your calls, messages and browsing.</li><li>On this site, use Quick exit (or press Esc twice) to leave at once.</li></ul></div></details>
            <details><summary>Keep evidence safely</summary><div className="body"><ul><li>Keep messages, photos and voice notes with their dates. Do not delete them.</li><li>Store a copy with someone you trust or somewhere the other person cannot reach.</li><li>After an assault, get medical care as soon as you can. Some treatments work best within 72 hours.</li></ul></div></details>
            <details><summary>Using Havenly Solutions safely</summary><div className="body"><ul><li>Choose trusted contacts carefully. You decide who becomes part of your trusted network.</li><li>Community chat and the feed are not a replacement for official emergency services.</li><li>In immediate danger, call 10111, or 112 from a mobile.</li></ul></div></details>
          </div>
        </div>
      </section>
    </>
  );
}

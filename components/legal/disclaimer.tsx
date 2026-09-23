import Link from 'next/link';
import type { LegalSection } from '../LegalDoc';

export const DISCLAIMER_UPDATED = 'September 20, 2026';

export const DISCLAIMER_INTRO = null;

export const DISCLAIMER_SECTIONS: LegalSection[] = [
  { id: 'website', title: 'Website disclaimer', body: (
    <>
      <p>The information provided by Havenly Solutions (Pty) Ltd (“we”, “us”, or “our”) on the Site and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.</p>
      <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.</p>
    </>
  ) },
  { id: 'emergency', title: 'Not an emergency service', body: (
    <p>Havenly Solutions does not replace emergency services. Nothing on the Site or in the App is a monitored emergency channel. If you are in immediate danger, call 10111, or 112 from a mobile.</p>
  ) },
  { id: 'external', title: 'External links disclaimer', body: (
    <p>The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties, or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>
  ) },
  { id: 'more', title: 'Related documents', body: (
    <p>This Disclaimer should be read together with our <Link href="/terms">Terms of Use</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>
  ) },
];

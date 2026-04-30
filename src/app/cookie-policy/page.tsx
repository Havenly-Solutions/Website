'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 selection:bg-[#4C2A85]/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-400 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A2E]">Legal</span>
        </div>

        <div className="relative mb-20">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-[#C0392B] rounded-full hidden md:block" />
          <h1 className="font-display font-black text-[#1A1A2E] text-5xl md:text-7xl mb-6 tracking-tight">
            Cookie <span className="text-[#C0392B]">Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <span className="text-sm">Last updated: April 30, 2026</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-sm">Version 1.0</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">What are cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cookies set by the website owner (in this case, Havenly Solutions (Pty) Ltd) are called &quot;first-party cookies.&quot; 
              Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies 
              enable third-party features or functionality to be provided on or through the website.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">Why do we use cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons 
              in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Other cookies also enable us to track and target the interests of our users to enhance the experience on our 
              Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">Types of cookies we use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#C0392B] pl-6">
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">Essential Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are strictly necessary to provide you with services available through our Website and 
                  to use some of its features, such as access to secure areas. Because these cookies are strictly necessary 
                  to deliver the Website, you cannot refuse them without impacting our site functionality.
                </p>
              </div>

              <div className="border-l-4 border-[#1A1A2E] pl-6">
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies help us understand how visitors interact with our Website by collecting and reporting 
                  information anonymously. This helps us improve the site performance and user experience.
                </p>
              </div>

              <div className="border-l-4 border-[#0B6E4F] pl-6">
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">Marketing Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements. 
                  They help measure the effectiveness of advertising campaigns.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">How can I control cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by 
              clicking on the &quot;Preferences&quot; button in our cookie banner or by adjusting your web browser controls.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Cookie Preference Center allows you to select which categories of cookies you accept or reject. 
              Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may also set or amend your web browser controls to accept or refuse cookies. The specific types of 
              first- and third-party cookies served through our Website and the purposes they perform are described above.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">Managing cookies in your browser</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most browsers allow you to view, manage, and delete cookies. Here are links to cookie management guides 
              for popular browsers:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline">Microsoft Edge</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">Other tracking technologies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies 
              from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny 
              graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In many instances, these technologies are reliant on cookies to function properly, and so declining cookies 
              will impair their functioning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">How often will we update this Cookie Policy?</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies 
              we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy 
              regularly to stay informed about our use of cookies and related technologies.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm mb-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-4">Contact us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about our use of cookies or other technologies, please contact us:
            </p>
            <div className="text-gray-600 space-y-2">
              <p><strong>Havenly Solutions (Pty) Ltd</strong></p>
              <p>36A Benmore Road</p>
              <p>Johannesburg, Gauteng, 2010</p>
              <p>South Africa</p>
              <p>Phone: 070 368 7327</p>
              <p>Email: info@havenly.solutions</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-gray-400 text-sm text-center">
            This Cookie Policy was created using Termly&apos;s{' '}
            <a href="https://termly.io/products/cookie-consent-manager/" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:underline">
              Cookie Consent Manager
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
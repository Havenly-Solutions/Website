import Link from 'next/link';
import type { LegalSection } from '../LegalDoc';
import { ContactBlock } from './shared';

export const TERMS_UPDATED = 'September 20, 2026';

export const TERMS_INTRO = (
  <p>We are Havenly Solutions (Pty) Ltd (“<strong>Company</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” “<strong>our</strong>”). We operate the website at <Link href="/">havenly.solutions</Link> and the Havenly Solutions mobile application, as well as any other related products and services that refer or link to these legal terms (the “<strong>Legal Terms</strong>”) (collectively, the “<strong>Services</strong>”). These Legal Terms constitute a legally binding agreement made between you and Havenly Solutions (Pty) Ltd concerning your access to and use of the Services. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
);

export const TERMS_SECTIONS: LegalSection[] = [
  { id: 'services', title: 'Our Services', body: (
    <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
  ) },
  { id: 'ip', title: 'Intellectual property rights', body: (
    <>
      <h3>Our intellectual property</h3>
      <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the “Content”), as well as the trademarks, service marks, and logos contained therein (the “Marks”). Our Content and Marks are protected by copyright and trademark laws around the world, and are provided “AS IS” for your personal, non-commercial use only.</p>
      <h3>Your use of our Services</h3>
      <p>Subject to your compliance with these Legal Terms, including the “Prohibited Activities” section below, we grant you a non-exclusive, non-transferable, revocable licence to access the Services, and to download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.</p>
      <p>Except as set out in this section, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose without our express prior written permission.</p>
      <h3>Your submissions</h3>
      <p><strong>Submissions:</strong> by directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (“Submissions”), you agree to assign to us all intellectual property rights in such Submission, and that we may use it for any lawful purpose without acknowledgment or compensation to you.</p>
    </>
  ) },
  { id: 'userreps', title: 'User representations', body: (
    <p>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your access to the Services.</p>
  ) },
  { id: 'prohibited', title: 'Prohibited activities', body: (
    <>
      <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
      <ul>
        <li>Systematically retrieve data or other content to create or compile a collection, compilation, database, or directory without written permission from us.</li>
        <li>Trick, defraud, or mislead us or other users, especially in any attempt to learn sensitive account information such as passwords.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
        <li>Use any information obtained from the Services to harass, abuse, or harm another person.</li>
        <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
        <li>Engage in unauthorized framing of or linking to the Services.</li>
        <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party’s use of the Services.</li>
        <li>Engage in any automated use of the system, such as scripts to send messages, or data mining, robots, or similar extraction tools.</li>
        <li>Delete the copyright or other proprietary rights notice from any Content.</li>
        <li>Attempt to impersonate another user or person, or use the username of another user.</li>
        <li>Upload or transmit any passive or active information collection or transmission mechanism, including 1×1 pixels, web bugs, or similar devices.</li>
        <li>Interfere with, disrupt, or create an undue burden on the Services or connected networks.</li>
        <li>Harass, annoy, intimidate, or threaten any of our employees or agents.</li>
        <li>Attempt to bypass any measures designed to prevent or restrict access to the Services.</li>
        <li>Copy or adapt the Services’ software, or reverse engineer, decompile, or disassemble it except as permitted by law.</li>
        <li>Use a buying or purchasing agent to make purchases on the Services.</li>
        <li>Use the Services as part of any effort to compete with us, or for any revenue-generating endeavour not endorsed by us.</li>
      </ul>
    </>
  ) },
  { id: 'ugc', title: 'User generated contributions', body: (
    <p>The Services may provide you with the opportunity to create, submit, post, or transmit content and materials to us, including text, video, audio, photographs, comments, or other material (“Contributions”). By providing Contributions, you represent that they are original to you or that you have the necessary rights and licences to submit them, and that they do not violate applicable law, this Agreement, or the rights of any third party.</p>
  ) },
  { id: 'license', title: 'Contribution licence', body: (
    <p>You and the Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings). By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you. We do not assert any ownership over your Contributions; you retain full ownership of them, and you are solely responsible for them.</p>
  ) },
  { id: 'sitemanage', title: 'Services management', body: (
    <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) refuse, restrict, or disable access to any Contribution; (4) remove from the Services or otherwise disable files and content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Services to protect our rights and property and facilitate their proper functioning.</p>
  ) },
  { id: 'terms', title: 'Term and termination', body: (
    <p>These Legal Terms remain in full force and effect while you use the Services. We reserve the right to, without notice or liability, deny access to and use of the Services to any person for any reason, including breach of these Legal Terms. If we terminate or suspend your account for any reason, you are prohibited from registering a new account under your name or a false or borrowed name.</p>
  ) },
  { id: 'modifications', title: 'Modifications and interruptions', body: (
    <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice, and we have no obligation to update any information. We cannot guarantee the Services will be available at all times; we may experience hardware, software, or other problems or need to perform maintenance, resulting in interruptions, delays, or errors.</p>
  ) },
  { id: 'law', title: 'Governing law', body: <p>These Legal Terms are governed by and defined following the laws of South Africa. Havenly Solutions (Pty) Ltd and yourself irrevocably consent that the courts of South Africa shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p> },
  { id: 'disputes', title: 'Dispute resolution', body: (
    <p>To expedite resolution and control the cost of any dispute related to these Legal Terms, the parties agree to first attempt to negotiate any dispute informally before initiating any formal proceedings. Such informal negotiations commence upon written notice from one party to the other.</p>
  ) },
  { id: 'corrections', title: 'Corrections', body: <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time, without prior notice.</p> },
  { id: 'disclaimer', title: 'Disclaimer', body: (
    <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES’ CONTENT. See also our <Link href="/disclaimer">Disclaimer</Link>.</p>
  ) },
  { id: 'liability', title: 'Limitations of liability', body: (
    <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Some jurisdictions do not allow limitations on implied warranties or exclusion of certain damages; if these laws apply to you, some or all of the above disclaimers or limitations may not apply, and you may have additional rights.</p>
  ) },
  { id: 'indemnification', title: 'Indemnification', body: (
    <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand made by any third party due to or arising out of your use of the Services or breach of these Legal Terms.</p>
  ) },
  { id: 'userdata', title: 'User data', body: (
    <p>We will maintain certain data that you transmit to the Services for the purpose of managing performance, as well as data relating to your use of the Services. Although we perform regular routine backups, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.</p>
  ) },
  { id: 'electronic', title: 'Electronic communications, transactions, and signatures', body: (
    <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.</p>
  ) },
  { id: 'misc', title: 'Miscellaneous', body: (
    <p>These Legal Terms and any policies or operating rules posted by us constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision shall not operate as a waiver. If any provision is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity of any remaining provisions.</p>
  ) },
  { id: 'contact', title: 'Contact us', body: (
    <>
      <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
      <ContactBlock postal />
    </>
  ) },
];

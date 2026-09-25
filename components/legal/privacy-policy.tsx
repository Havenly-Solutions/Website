import Link from 'next/link';
import type { LegalSection } from '../LegalDoc';
import { ContactBlock } from './shared';

export const PRIVACY_UPDATED = 'September 20, 2026';

export const PRIVACY_INTRO = (
  <>
    <p>This Privacy Notice for Havenly Solutions (Pty) Ltd (“<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) describes how and why we might access, collect, store, use, and/or share (“<strong>process</strong>”) your personal information when you use our services (“<strong>Services</strong>”), including when you visit our website, download and use our mobile application, or otherwise engage with us.</p>
    <p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.</p>
  </>
);

export const PRIVACY_SECTIONS: LegalSection[] = [
  { id: 'summary', title: 'Summary of key points', body: (
    <>
      <p><em>This summary provides key points from our Privacy Notice. You can find out more details about any of these topics in the sections below.</em></p>
      <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
      <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information, such as your racial or ethnic origins, sexual orientation, or religious beliefs.</p>
      <p><strong>Do we collect any information from third parties?</strong> We do not currently purchase or collect information about you from data brokers or other third parties.</p>
      <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
      <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties, described in more detail below.</p>
      <p><strong>What are your rights?</strong> Depending on where you are located, applicable privacy law may give you certain rights regarding your personal information.</p>
      <p><strong>How do you exercise your rights?</strong> The easiest way is to contact us using the details at the end of this notice. We will consider and act upon any request in accordance with applicable data protection laws.</p>
    </>
  ) },
  { id: 'infocollect', title: 'What information do we collect?', body: (
    <>
      <h3>Personal information you disclose to us</h3>
      <p><em>In short: we collect personal information that you provide to us.</em></p>
      <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services (such as pre-registering or submitting a partnership enquiry), or otherwise when you contact us. The personal information we collect depends on the context of your interactions with us and the Services, and may include: names, email addresses, mobile phone numbers, and any other similar information you choose to provide.</p>
      <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
      <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
      <h3>Information automatically collected</h3>
      <p><em>In short: some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
      <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
      <p>Like many businesses, we also collect information through cookies and similar technologies. See our <Link href="/cookie-policy">Cookie Policy</Link> for details.</p>
    </>
  ) },
  { id: 'infouse', title: 'How do we process your information?', body: (
    <>
      <p><em>In short: we process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></p>
      <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including to: facilitate account creation and authentication where applicable; respond to your enquiries and offer support; send administrative information, such as launch updates; process and respond to partnership enquiries; protect our Services, for example through fraud monitoring and prevention; identify usage trends; and comply with our legal obligations.</p>
    </>
  ) },
  { id: 'whoshare', title: 'When and with whom do we share your personal information?', body: (
    <>
      <p><em>In short: we may share information in specific situations described in this section and/or with the third parties listed below.</em></p>
      <p>We may need to share your personal information in the following situations:</p>
      <ul>
        <li><strong>Business transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
        <li><strong>Service providers.</strong> We may share your information with vendors who perform services for us, such as delivering pre-registration and enquiry submissions, provided they are bound by confidentiality and data-protection obligations.</li>
        <li><strong>Approved responder organizations.</strong> Where a partnership is formally confirmed and a specific emergency or service workflow requires it, we may share the minimum information necessary for that workflow with the participating organization.</li>
      </ul>
    </>
  ) },
  { id: 'cookies', title: 'Do we use cookies and other tracking technologies?', body: (
    <>
      <p><em>In short: we may use cookies and other tracking technologies to collect and store your information.</em></p>
      <p>We may use cookies and similar tracking technologies to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
      <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <Link href="/cookie-policy">Cookie Policy</Link>.</p>
    </>
  ) },
  { id: 'intltransfers', title: 'Is your information transferred internationally?', body: (
    <p><em>In short: we may transfer, store, and process your information in countries other than your own.</em> Our servers and the servers of the third parties with whom we may share your personal information may be located outside South Africa. Regardless of location, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law, including POPIA.</p>
  ) },
  { id: 'inforetain', title: 'How long do we keep your information?', body: (
    <p><em>In short: we keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice, unless otherwise required by law.</em> When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
  ) },
  { id: 'infominors', title: 'Do we collect information from minors?', body: (
    <p><em>In short: we do not knowingly collect data from or market to children under 18 years of age.</em> By using the Services, you represent that you are at least 18, or that you are the parent or guardian of such a minor and consent to such minor dependant’s use of the Services. If we learn that personal information from users under 18 has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under 18, please contact us using the details below.</p>
  ) },
  { id: 'privacyrights', title: 'What are your privacy rights?', body: (
    <>
      <p><em>In short: you may review, change, or terminate your account at any time, and you have certain rights under applicable law.</em></p>
      <p><strong>Withdrawing your consent.</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can do this by contacting us using the details in the “How can you contact us” section below. This will not affect the lawfulness of processing before your withdrawal.</p>
      <p><strong>Account information.</strong> If you would at any time like to review, change, or terminate the information associated with your submissions, you can contact us and we will deactivate or delete the relevant information from our active records, except where we must retain it to prevent fraud, troubleshoot problems, assist with investigations, enforce our legal terms, or comply with legal requirements.</p>
    </>
  ) },
  { id: 'dnt', title: 'Controls for Do-Not-Track features', body: (
    <p>Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals. If a standard for online tracking is adopted that we must follow in future, we will inform you in a revised version of this Privacy Notice.</p>
  ) },
  { id: 'policyupdates', title: 'Do we make updates to this notice?', body: (
    <p><em>In short: yes, we will update this notice as necessary to stay compliant with relevant laws.</em> The updated version will be indicated by an updated “Last updated” date. We encourage you to review this Privacy Notice frequently.</p>
  ) },
  { id: 'contact', title: 'How can you contact us about this notice?', body: (
    <>
      <p>If you have questions or comments about this notice, you may contact us at:</p>
      <ContactBlock postal />
    </>
  ) },
  { id: 'request', title: 'How can you review, update, or delete the data we collect from you?', body: (
    <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To make such a request, please contact us using the details above.</p>
  ) },
];

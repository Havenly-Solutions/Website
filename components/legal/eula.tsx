import Link from 'next/link';
import type { LegalSection } from '../LegalDoc';
import { ContactBlock, Ext } from './shared';

export const EULA_UPDATED = 'May 13, 2026';

export const EULA_INTRO = (
  <>
    <p>Havenly Solutions is licensed to You (End-User) by Havenly Solutions (Pty) Ltd, located and registered in South Africa (“<strong>Licensor</strong>”), for use only under the terms of this License Agreement.</p>
    <p>By downloading the Licensed Application from Apple’s software distribution platform (“App Store”) and Google’s software distribution platform (“Play Store”), and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement. App Store and Play Store are referred to in this License Agreement as “<strong>Services</strong>.”</p>
    <p>The parties of this License Agreement acknowledge that the Services are not a Party to this License Agreement and are not bound by any provisions or obligations with regard to the Licensed Application, such as warranty, liability, maintenance and support thereof. Havenly Solutions (Pty) Ltd, not the Services, is solely responsible for the Licensed Application and the content thereof.</p>
    <p>This License Agreement may not provide for usage rules for the Licensed Application that are in conflict with the latest <Ext href="https://www.apple.com/legal/internet-services/itunes/us/terms.html">Apple Media Services Terms and Conditions</Ext> and <Ext href="https://play.google.com/intl/en_US/about/play-terms/">Google Play Terms of Service</Ext> (“<strong>Usage Rules</strong>”). Havenly Solutions (Pty) Ltd acknowledges that it had the opportunity to review the Usage Rules and this License Agreement is not conflicting with them.</p>
    <p>Havenly Solutions when purchased or downloaded through the Services, is licensed to You for use only under the terms of this License Agreement. The Licensor reserves all rights not expressly granted to You. Havenly Solutions is to be used on devices that operate with Apple’s operating systems (“iOS” and “Mac OS”) or Google’s operating system (“Android”).</p>
  </>
);

export const EULA_SECTIONS: LegalSection[] = [
  { id: 'application', title: 'The Application', body: (
    <p>Havenly Solutions (“<strong>Licensed Application</strong>”) is a piece of software created to help reduce crime, kidnappings, gender-based violence and rape, and to communicate community issues, built for the people, by the people. It is customized for iOS and Android mobile devices (“<strong>Devices</strong>”). It is used to trigger SOS alerts, catch up on community news and communicate peer to peer.</p>
  ) },
  { id: 'scope', title: 'Scope of License', body: (
    <>
      <p>2.1 You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any Devices that You (End-User) own or control and as permitted by the Usage Rules, with the exception that such Licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.</p>
      <p>2.2 This license will also govern any updates of the Licensed Application provided by Licensor that replace, repair, and/or supplement the first Licensed Application, unless a separate license is provided for such update, in which case the terms of that new license will govern.</p>
      <p>2.3 You may not share or make the Licensed Application available to third parties (unless to the degree allowed by the Usage Rules, and with Havenly Solutions (Pty) Ltd’s prior written consent), sell, rent, lend, lease or otherwise redistribute the Licensed Application.</p>
      <p>2.4 You may not reverse engineer, translate, disassemble, integrate, decompile, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Licensed Application, or any part thereof (except with Havenly Solutions (Pty) Ltd’s prior written consent).</p>
      <p>2.5 You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Licensed Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the Usage Rules, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time. If you sell your Devices to a third party, you must remove the Licensed Application from the Devices before doing so.</p>
      <p>2.6 Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</p>
      <p>2.7 Licensor reserves the right to modify the terms and conditions of licensing.</p>
      <p>2.8 Nothing in this license should be interpreted to restrict third-party terms. When using the Licensed Application, You must ensure that You comply with applicable third-party terms and conditions.</p>
    </>
  ) },
  { id: 'requirements', title: 'Technical Requirements', body: (
    <>
      <p>3.1 The Licensed Application requires a firmware version 1.0.0 or higher. Licensor recommends using the latest version of the firmware.</p>
      <p>3.2 Licensor attempts to keep the Licensed Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted rights to claim such an update.</p>
      <p>3.3 You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Licensed Application satisfies the technical specifications mentioned above.</p>
      <p>3.4 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.</p>
    </>
  ) },
  { id: 'support', title: 'Maintenance and Support', body: (
    <>
      <p>4.1 The Licensor is solely responsible for providing any maintenance and support services for this Licensed Application. You can reach the Licensor at the email address listed in the App Store or Play Store Overview for this Licensed Application.</p>
      <p>4.2 Havenly Solutions (Pty) Ltd and the End-User acknowledge that the Services have no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.</p>
    </>
  ) },
  { id: 'datause', title: 'Use of Data', body: (
    <>
      <p>You acknowledge that Licensor will be able to access and adjust Your downloaded Licensed Application content and Your personal information, and that Licensor’s use of such material and information is subject to Your legal agreements with Licensor and Licensor’s privacy policy: <Link href="/privacy-policy">https://www.havenly.solutions/privacy-policy</Link>.</p>
      <p>You acknowledge that the Licensor may periodically collect and use technical data and related information about your device, system, and application software, and peripherals, offer product support, facilitate the software updates, and for purposes of providing other services to you (if any) related to the Licensed Application. Licensor may also use this information to improve its products or to provide services or technologies to you, as long as it is in a form that does not personally identify you.</p>
    </>
  ) },
  { id: 'ugc', title: 'User-Generated Contributions', body: (
    <>
      <p>The Licensed Application may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Licensed Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, “Contributions”). Contributions may be viewable by other users of the Licensed Application and through third-party websites or applications. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:</p>
      <ol>
        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
        <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Licensed Application, and other users of the Licensed Application to use your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
        <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness or each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
        <li>Your Contributions are not false, inaccurate, or misleading.</li>
        <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
        <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
        <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
        <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
        <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
        <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
        <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
        <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
        <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of this License Agreement, or any applicable law or regulation.</li>
      </ol>
      <p>Any use of the Licensed Application in violation of the foregoing violates this License Agreement and may result in, among other things, termination or suspension of your rights to use the Licensed Application.</p>
    </>
  ) },
  { id: 'contribution', title: 'Contribution License', body: (
    <>
      <p>By posting your Contributions to any part of the Licensed Application or making Contributions accessible to the Licensed Application by linking your account from the Licensed Application to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use copy, reproduce, disclose, sell, resell, publish, broad cast, retitle, archive, store, cache, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial advertising, or otherwise, and to prepare derivative works of, or incorporate in other works, such as Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.</p>
      <p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>
      <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area in the Licensed Application. You are solely responsible for your Contributions to the Licensed Application and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
      <p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to recategorize any Contributions to place them in more appropriate locations in the Licensed Application; and (3) to prescreen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>
    </>
  ) },
  { id: 'liability', title: 'Liability', body: (
    <>
      <p>8.1 Licensor’s responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health.</p>
      <p>8.2 Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this License Agreement. To avoid data loss, You are required to make use of backup functions of the Licensed Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Licensed Application, You will not have access to the Licensed Application.</p>
    </>
  ) },
  { id: 'warranty', title: 'Warranty', body: (
    <>
      <p>9.1 Licensor warrants that the Licensed Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Licensed Application works as described in the user documentation.</p>
      <p>9.2 No warranty is provided for the Licensed Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Havenly Solutions (Pty) Ltd’s sphere of influence that affect the executability of the Licensed Application.</p>
      <p>9.3 You are required to inspect the Licensed Application immediately after installing it and notify Havenly Solutions (Pty) Ltd about issues discovered without delay by email provided in <a href="#contact">Contact Information</a>. The defect report will be taken into consideration and further investigated if it has been emailed within a period of ten (10) days after discovery.</p>
      <p>9.4 If we confirm that the Licensed Application is defective, Havenly Solutions (Pty) Ltd reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</p>
      <p>9.5 In the event of any failure of the Licensed Application to conform to any applicable warranty, You may notify the Services Store Operator, and Your Licensed Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the Services Store Operator will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other losses, claims, damages, liabilities, expenses, and costs attributable to any negligence to adhere to any warranty.</p>
      <p>9.6 If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Licensed Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.</p>
    </>
  ) },
  { id: 'productclaims', title: 'Product Claims', body: (
    <>
      <p>Havenly Solutions (Pty) Ltd and the End-User acknowledge that Havenly Solutions (Pty) Ltd, and not the Services, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User’s possession and/or use of that Licensed Application, including, but not limited to:</p>
      <ul>
        <li>(i) product liability claims;</li>
        <li>(ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and</li>
        <li>(iii) claims arising under consumer protection, privacy, or similar legislation.</li>
      </ul>
    </>
  ) },
  { id: 'compliance', title: 'Legal Compliance', body: (
    <p>You represent and warrant that You are not located in a country that is subject to a US Government embargo, or that has been designated by the US Government as a “terrorist supporting” country; and that You are not listed on any US Government list of prohibited or restricted parties.</p>
  ) },
  { id: 'contact', title: 'Contact Information', body: (
    <>
      <p>For general inquiries, complaints, questions or claims concerning the Licensed Application, please contact:</p>
      <ContactBlock />
    </>
  ) },
  { id: 'termination', title: 'Termination', body: (
    <p>The license is valid until terminated by Havenly Solutions (Pty) Ltd or by You. Your rights under this license will terminate automatically and without notice from Havenly Solutions (Pty) Ltd if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Licensed Application, and destroy all copies, full or partial, of the Licensed Application.</p>
  ) },
  { id: 'thirdparty', title: 'Third-Party Terms of Agreements and Beneficiary', body: (
    <>
      <p>Havenly Solutions (Pty) Ltd represents and warrants that Havenly Solutions (Pty) Ltd will comply with applicable third-party terms of agreement when using Licensed Application.</p>
      <p>In Accordance with Section 9 of the “Instructions for Minimum Terms of Developer’s End-User License Agreement,” both Apple and Google and their subsidiaries shall be third-party beneficiaries of this End User License Agreement and — upon Your acceptance of the terms and conditions of this License Agreement, both Apple and Google will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.</p>
    </>
  ) },
  { id: 'ipr', title: 'Intellectual Property Rights', body: (
    <p>Havenly Solutions (Pty) Ltd and the End-User acknowledge that, in the event of any third-party claim that the Licensed Application or the End-User’s possession and use of that Licensed Application infringes on the third party’s intellectual property rights, Havenly Solutions (Pty) Ltd, and not the Services, will be solely responsible for the investigation, defense, settlement, and discharge or any such intellectual property infringement claims.</p>
  ) },
  { id: 'law', title: 'Applicable Law', body: <p>This License Agreement is governed by the laws of South Africa excluding its conflicts of law rules.</p> },
  { id: 'misc', title: 'Miscellaneous', body: (
    <>
      <p>17.1 If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</p>
      <p>17.2 Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</p>
    </>
  ) },
];

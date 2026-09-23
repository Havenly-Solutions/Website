import Link from 'next/link';
import type { LegalSection } from '../LegalDoc';
import { ContactBlock } from './shared';

export const AUP_UPDATED = 'September 20, 2026';

export const AUP_INTRO = (
  <>
    <p>This Acceptable Use Policy (“<strong>Policy</strong>”) is part of our Terms of Use (“<strong>Legal Terms</strong>”) and should be read alongside them: <Link href="/terms">havenly.solutions/terms</Link>. If you do not agree with these Legal Terms, please refrain from using our Services. Your continued use of our Services implies acceptance of these Legal Terms.</p>
    <p>This Policy applies to any and all: (a) uses of our Services; (b) forms, materials, consent tools, comments, posts, and all other content available on the Services (“<strong>Content</strong>”); and (c) material which you contribute to the Services, including any upload, post, review, disclosure, ratings, comments, or chat, in any forum, chatroom, review, or interactive feature (“<strong>Contribution</strong>”).</p>
  </>
);

export const AUP_SECTIONS: LegalSection[] = [
  { id: 'whoweare', title: 'Who we are', body: (
    <p>We are Havenly Solutions (Pty) Ltd (“<strong>Company</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”), a company registered in South Africa. We operate the website at <Link href="/">havenly.solutions</Link> (the “<strong>Site</strong>”), the mobile application Havenly Solutions (the “<strong>App</strong>”), as well as any other related products and services that refer or link to this Policy (collectively, the “<strong>Services</strong>”).</p>
  ) },
  { id: 'useofservices', title: 'Use of the Services', body: (
    <>
      <p>When you use the Services, you warrant that you will comply with this Policy and with all applicable laws. You also acknowledge that you may not:</p>
      <ul>
        <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
        <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
        <li>Engage in unauthorised framing of or linking to the Services.</li>
        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        <li>Make improper use of our Services, including our support services, or submit false reports of abuse or misconduct.</li>
        <li>Engage in any automated use of the Services, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
        <li>Interfere with, disrupt, or create an undue burden on the Services or the networks the Services connect to.</li>
        <li>Attempt to impersonate another user or person, or use the username of another user.</li>
        <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
        <li>Use the Services as part of any effort to compete with us, or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
        <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising the Services, except as expressly permitted by applicable law.</li>
        <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to any portion of the Services.</li>
        <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
        <li>Delete the copyright or other proprietary rights notice from any Content.</li>
        <li>Copy or adapt the Services’ software, including but not limited to HTML, JavaScript, or other code.</li>
        <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party’s uninterrupted use and enjoyment of the Services.</li>
        <li>Upload or transmit any material that acts as a passive or active information collection or transmission mechanism, such as clear graphics interchange formats, 1×1 pixels, web bugs, or similar devices.</li>
        <li>Use, launch, develop, or distribute any automated system, including any spider, robot, scraper, or offline reader that accesses the Services, except as may be the result of standard search engine or browser usage.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
        <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
        <li>Sell or otherwise transfer your profile.</li>
      </ul>
    </>
  ) },
  { id: 'contributions', title: 'Contributions', body: (
    <>
      <p>In this Policy, “Contribution” means any data, information, software, text, code, music, scripts, sound, graphics, photos, videos, tags, messages, interactive features, or other materials that you post, share, upload, submit, or otherwise provide on or through the Services, or any other content, materials, or data you provide to us or use with the Services.</p>
      <p>Some areas of the Services may allow users to upload, transmit, or post Contributions. We may but are under no obligation to review or moderate Contributions, and we expressly exclude our liability for any loss or damage resulting from any user’s breach of this Policy. Please report any Contribution that you believe breaches this Policy; we will determine, in our sole discretion, whether a Contribution is in breach.</p>
      <p>You warrant that you are the creator and owner of, or have the necessary licences, rights, consents, releases, and permissions to use, all your Contributions; that they comply with applicable laws and are original and true; that they do not and will not infringe the proprietary rights of any third party; and that you have the verifiable consent of each identifiable individual person in your Contributions to use their name or likeness.</p>
      <p>You also agree that you will not post, transmit, or upload any Contribution that: breaches applicable laws, regulations, or this Policy; is defamatory, obscene, offensive, hateful, insulting, intimidating, bullying, abusive, or threatening to any person or group; is false, inaccurate, or misleading; involves child sexual abuse material or otherwise fails to protect minors; promotes violence or incites physical harm; is discriminatory based on a protected characteristic; bullies, intimidates, humiliates, or insults any person; promotes or facilitates terrorism; infringes a third party’s intellectual property, publicity, or privacy rights; misrepresents your identity or affiliation; or contains unsolicited or unauthorised advertising, promotional material, chain letters, or spam.</p>
      <p>You may not use our Services to offer, present, promote, sell, give away, or otherwise make available to others any good or service involving illegal activity, controlled substances, regulated weapons, sexually oriented material, stolen goods, or any transaction requiring pre-approval you have not obtained.</p>
    </>
  ) },
  { id: 'reviews', title: 'Review and ratings', body: (
    <p>When your Contribution is a review or rating, you also agree that you have firsthand experience with the product or service being reviewed; your Contribution is true to your experience; you are not affiliated with a competitor if posting a negative review, or otherwise linked to a product or service if posting a positive review; you cannot make conclusions as to legality of conduct; you will not post false or misleading statements; and you will not organise a campaign encouraging others to post reviews.</p>
  ) },
  { id: 'reporting', title: 'Reporting a breach of this Policy', body: (
    <>
      <p>We may but are under no obligation to review or moderate the Contributions made on the Services, and we expressly exclude our liability for any loss or damage resulting from any user’s breach of this Policy.</p>
      <p>If you consider that any Service, Content, or Contribution breaches this Policy, please contact us using the details below, or refer to our <Link href="/terms">Terms of Use</Link> for our copyright infringement reporting process if it infringes a third party’s intellectual property rights. We will reasonably determine whether a Service, Content, or Contribution breaches this Policy.</p>
    </>
  ) },
  { id: 'consequences', title: 'Consequences of breaching this Policy', body: (
    <p>The consequences of violating our Policy vary depending on the severity of the breach and the user’s history on the Services. We may give you a warning and/or remove the infringing Contribution; however, if your breach is serious or continues, we have the right to suspend or terminate your access to and use of our Services and, if applicable, disable your account. We may also notify law enforcement or issue legal proceedings when we believe there is a genuine risk to an individual or a threat to public safety. We exclude our liability for all action we may take in response to any breach of this Policy.</p>
  ) },
  { id: 'complaints', title: 'Complaints and removal of legitimate content', body: (
    <p>If you consider that Content or a Contribution has been mistakenly removed or blocked, please contact us using the details below and we will promptly review our decision. The Content or Contribution may stay down while we conduct the review process.</p>
  ) },
  { id: 'disclaimer', title: 'Disclaimer', body: (
    <p>Havenly Solutions (Pty) Ltd is under no obligation to monitor users’ activities, and we disclaim any responsibility for any user’s misuse of the Services. If we become aware that any Content or Contribution violates this Policy, we may, in addition to removing such Content or Contribution and blocking your account, report such breach to the police or an appropriate regulatory authority.</p>
  ) },
  { id: 'contact', title: 'How can you contact us about this Policy?', body: (
    <>
      <p>If you have any further questions or comments, or wish to report any problematic Content or Contribution, you may contact us by:</p>
      <ContactBlock />
    </>
  ) },
];

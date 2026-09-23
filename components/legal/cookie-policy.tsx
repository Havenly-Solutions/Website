import { CookieSettingsButton } from '../CookieSettingsButton';
import type { LegalSection } from '../LegalDoc';
import { ContactBlock, Ext } from './shared';

export const COOKIE_UPDATED = 'May 13, 2026';

export const COOKIE_INTRO = (
  <>
    <p>This Cookie Policy explains how Havenly Solutions (Pty) Ltd (“<strong>Company</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” and “<strong>our</strong>”) uses cookies and similar technologies to recognize you when you visit our website at <a href="https://www.havenly.solutions">https://www.havenly.solutions</a> (“<strong>Website</strong>”). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
    <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>
  </>
);

export const COOKIE_SECTIONS: LegalSection[] = [
  { id: 'what', title: 'What are cookies?', body: (
    <>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      <p>Cookies set by the website owner (in this case, Havenly Solutions (Pty) Ltd) are called “first-party cookies.” Cookies set by parties other than the website owner are called “third-party cookies.” Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
    </>
  ) },
  { id: 'why', title: 'Why do we use cookies?', body: (
    <p>We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as “essential” or “strictly necessary” cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>
  ) },
  { id: 'control', title: 'How can I control cookies?', body: (
    <>
      <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Preference Center. The Cookie Preference Center allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
      <p><CookieSettingsButton className="btn btn-dark btn-sm">Open the Cookie Preference Center</CookieSettingsButton></p>
      <p>The Cookie Preference Center can be found in the notification banner and on our Website. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</p>
      <p>The categories of cookies served through our Website, and the purposes they perform, are:</p>
      <ul>
        <li><strong>Strictly necessary:</strong> keep the Website working and remember your cookie choice. These cannot be switched off.</li>
        <li><strong>Preferences:</strong> remember settings you choose, when you allow them.</li>
        <li><strong>Analytics:</strong> help us understand how the Website is used so we can improve it, when you allow them.</li>
      </ul>
    </>
  ) },
  { id: 'browser', title: 'How can I control cookies on my browser?', body: (
    <>
      <p>As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser’s help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>
      <ul>
        <li><Ext href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">Chrome</Ext></li>
        <li><Ext href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Internet Explorer</Ext></li>
        <li><Ext href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop">Firefox</Ext></li>
        <li><Ext href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">Safari</Ext></li>
        <li><Ext href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">Edge</Ext></li>
        <li><Ext href="https://help.opera.com/en/latest/web-preferences/">Opera</Ext></li>
      </ul>
      <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>
      <ul>
        <li><Ext href="http://www.aboutads.info/choices/">Digital Advertising Alliance</Ext></li>
        <li><Ext href="https://youradchoices.ca/">Digital Advertising Alliance of Canada</Ext></li>
        <li><Ext href="http://www.youronlinechoices.com/">European Interactive Digital Advertising Alliance</Ext></li>
      </ul>
    </>
  ) },
  { id: 'beacons', title: 'What about other tracking technologies, like web beacons?', body: (
    <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called “tracking pixels” or “clear gifs”). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>
  ) },
  { id: 'flash', title: 'Do you use Flash cookies or Local Shared Objects?', body: (
    <>
      <p>Websites may also use so-called “Flash Cookies” (also known as Local Shared Objects or “LSOs”) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
      <p>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <Ext href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">Website Storage Settings Panel</Ext>. You can also control Flash Cookies by going to the <Ext href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html">Global Storage Settings Panel</Ext> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to “information” on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>
      <p>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>
    </>
  ) },
  { id: 'advertising', title: 'Do you serve targeted advertising?', body: (
    <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.</p>
  ) },
  { id: 'updates', title: 'How often will you update this Cookie Policy?', body: (
    <>
      <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
      <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
    </>
  ) },
  { id: 'contact', title: 'Where can I get further information?', body: (
    <>
      <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
      <ContactBlock />
    </>
  ) },
];

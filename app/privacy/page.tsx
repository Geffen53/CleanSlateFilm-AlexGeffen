import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { film } from '@/data/film';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How the Clean Slate film website handles contact information, browser preferences, embedded media, and privacy requests.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      copy="How the Clean Slate film website handles information, browser preferences, and third-party media."
      lastUpdated="August 15, 2026"
      sections={[
        {
          title: 'Scope',
          body: (
            <>
              <p>This policy applies to the public Clean Slate website at cleanslatefilm.com and its pages, galleries, video player, press materials, and contact links. It does not govern the separate privacy practices of services that we link to or embed.</p>
              <p>The site does not require an account, collect payment, or ask you to create a profile to view the film information.</p>
            </>
          ),
        },
        {
          title: 'Information you choose to provide',
          body: (
            <>
              <p>The live contact experience opens your email application rather than submitting an inquiry through a website form. If you email the production team, we receive the address, message, and other information you choose to include so we can respond to the request.</p>
              <p>Your email provider, device, and mail application may process that message under their own policies. Please do not send passwords, payment details, government identifiers, or other sensitive information through the contact address.</p>
            </>
          ),
        },
        {
          title: 'Technical information',
          body: (
            <>
              <p>When a page is requested, the hosting, delivery, and security services that make the site available may process routine technical details such as an IP address, browser or device type, requested URL, referrer, and request time. These details can be used to deliver pages, protect the site, diagnose failures, and maintain reliability.</p>
              <p>The current site code does not intentionally use advertising pixels, behavioral advertising networks, or a user account database. Infrastructure providers may have their own retention and security practices.</p>
            </>
          ),
        },
        {
          title: 'Browser storage and privacy choices',
          body: (
            <>
              <p>The site stores a theme preference and your privacy-choice record in your browser so the experience can remember display settings and whether optional measurement is allowed. The consent record is essential to the privacy control itself; it does not contain a profile or contact database.</p>
              <p>Optional Vercel Web Analytics remain off until you choose to enable them. The site does not load the analytics script while your choice is unknown, declined, or blocked by Global Privacy Control. You can reopen the control with <strong>Privacy preferences</strong> in the footer.</p>
            </>
          ),
        },
        {
          title: 'Optional Vercel Web Analytics',
          body: (
            <>
              <p>When enabled, Vercel Web Analytics helps us understand aggregate page visits and which parts of the film site are useful. It is designed to be cookieless and to use anonymous, short-lived visitor measurements rather than a cross-site profile. We do not send custom events, contact messages, email addresses, account identifiers, or advertising data through the integration.</p>
              <p>Vercel may process an event timestamp, page URL and route, referrer, approximate location, device type, operating system and browser version, and analytics script version. We strip query strings and fragments from URLs before an event is sent. Vercel describes its Web Analytics data practices in its <a href="https://vercel.com/docs/analytics/privacy-policy" rel="noreferrer">Privacy and Compliance documentation</a>.</p>
            </>
          ),
        },
        {
          title: 'Embedded media and external links',
          body: (
            <>
              <p>The trailer is streamed from the Clean Slate media host. Loading or interacting with the player, or following links to services such as Instagram, IMDb, or email applications, can involve systems operated by other companies.</p>
              <p>Those providers may use cookies or similar technologies and may process information under their own notices. Review their policies and settings before using a linked service. We do not control their independent processing.</p>
            </>
          ),
        },
        {
          title: 'How information is used',
          body: (
            <ul>
              <li>To publish and maintain the website, gallery, trailer, and press materials.</li>
              <li>To respond to press, festival, screening, partnership, and production inquiries.</li>
              <li>To protect the site, investigate technical failures, and keep the service reliable.</li>
              <li>To remember your theme and privacy choices and honor browser privacy signals.</li>
            </ul>
          ),
        },
        {
          title: 'Sharing and disclosure',
          body: (
            <>
              <p>We may rely on hosting, content-delivery, security, email, and media providers to operate the site. They receive only the information needed for their service and may process it under their own terms. We may also disclose information when required to comply with law, protect rights or safety, or investigate abuse.</p>
              <p>We do not sell personal information or share it for cross-context behavioral advertising.</p>
            </>
          ),
        },
        {
          title: 'Retention and security',
          body: (
            <>
              <p>We keep inquiry messages and contact details for as long as reasonably needed to respond, coordinate production or press work, maintain records, or resolve a dispute. Technical logs and provider records follow the retention practices of the services that hold them.</p>
              <p>No website or email service can promise absolute security. Please use care when deciding what to send, and contact us if you believe information was sent to us by mistake.</p>
            </>
          ),
        },
        {
          title: 'Your choices and privacy requests',
          body: (
            <>
              <p>Depending on where you live, you may have rights to request access to, correction of, deletion of, or limits on certain uses of personal information. You may also be able to opt out of sale or sharing, use a browser-level signal such as Global Privacy Control, or ask an authorized agent to submit a request.</p>
              <p>To make a request, email <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a> with the request type and enough context for us to find the relevant interaction. We may ask for reasonable information to confirm the request and will not use that information for another purpose. We will follow any response, appeal, or verification requirements that apply to your request.</p>
              <p>For the separate opt-out page, see <a href="/do-not-sell">Do not sell or share</a>.</p>
            </>
          ),
        },
        {
          title: 'Children',
          body: (
            <p>This film website is not directed to children, and we do not knowingly request personal information from children. If you believe a child has sent us personal information, contact us so we can review and remove it when appropriate.</p>
          ),
        },
        {
          title: 'Changes to this policy',
          body: (
            <p>We may update this policy when the website, providers, or privacy practices change. The date above identifies the latest review. Continuing to use the site after an update means the revised policy is available for your review.</p>
          ),
        },
        {
          title: 'Contact',
          body: (
            <p>Questions about this policy or a privacy request can be sent to <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a>.</p>
          ),
        },
      ]}
    />
  );
}

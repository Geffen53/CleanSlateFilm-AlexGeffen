import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { film } from '@/data/film';

export const metadata: Metadata = {
  title: 'Do not sell or share',
  description: 'Privacy choices and opt-out instructions for the Clean Slate film website.',
};

export default function DoNotSellPage() {
  return (
    <LegalPage
      title="Do not sell or share"
      copy="Your choices about the sale, sharing, and optional measurement of information on this site."
      lastUpdated="August 15, 2026"
      sections={[
        {
          title: 'Our commitment',
          body: (
            <>
              <p>Clean Slate does not sell personal information and does not share personal information for cross-context behavioral advertising. We do not run an advertising marketplace, maintain a member profile, or use a contact list to target ads.</p>
              <p>Privacy laws can define “sale” and “share” differently. This page uses both terms broadly so you have a clear way to tell us not to use your information for those purposes.</p>
            </>
          ),
        },
        {
          title: 'What the site handles',
          body: (
            <ul>
              <li>An email address and message only when you choose to contact the production team.</li>
              <li>A browser theme preference and an essential record of your privacy choices.</li>
              <li>Routine technical request data that hosting, delivery, and security providers may process to serve and protect the site.</li>
            </ul>
          ),
        },
        {
          title: 'Optional analytics',
          body: (
            <p>Optional anonymous analytics are designed to stay off until you enable them through the privacy choices control. The core pages do not require analytics. You can change the setting at any time with <strong>Privacy preferences</strong> in the footer; changing the setting does not create an account or send us a request to sell your information.</p>
          ),
        },
        {
          title: 'Global Privacy Control',
          body: (
            <p>When your browser sends a Global Privacy Control (GPC) signal, the site recognizes it as a request to keep optional analytics disabled. If you want to make a separate request about information you sent by email or about a provider’s independent processing, contact us directly.</p>
          ),
        },
        {
          title: 'Embedded media and other providers',
          body: (
            <>
              <p>The YouTube trailer and links to services such as Instagram, IMDb, email applications, and a media host can involve independent providers. When you load or interact with those services, they may receive technical information under their own policies.</p>
              <p>We do not instruct those providers to use Clean Slate contact information for targeted advertising. To avoid a provider’s independent processing, do not load or interact with its embedded player or follow its link.</p>
            </>
          ),
        },
        {
          title: 'How to make a request',
          body: (
            <>
              <p>Email <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a> with “Do not sell or share” in the subject and a short description of your request. You can ask us to opt out of sale or sharing, access or delete information you provided, correct an error, or explain how a request was handled.</p>
              <p>We may ask for reasonable details to identify the relevant interaction and prevent someone else from changing it. Please do not send a government identifier, password, or other sensitive information. An authorized agent may contact us with proof that they are permitted to act for you.</p>
            </>
          ),
        },
        {
          title: 'Review and response',
          body: (
            <p>We review requests in good faith and follow any verification, response, or appeal requirements that apply to the requester’s location. If we cannot complete a request, we will explain the reason and any next step available under applicable law.</p>
          ),
        },
        {
          title: 'More privacy information',
          body: (
            <p>For the broader categories, purposes, retention practices, and third-party disclosures, read the <a href="/privacy">Privacy policy</a>. Questions can be sent to <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a>.</p>
          ),
        },
      ]}
    />
  );
}

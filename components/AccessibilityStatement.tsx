import LegalPage from './LegalPage';
import { film } from '@/data/film';

export default function AccessibilityStatement() {
  return (
    <LegalPage
      title="Accessibility"
      copy="A practical accessibility statement for the Clean Slate film website."
      lastUpdated="August 15, 2026"
      sections={[
        {
          title: 'Our commitment',
          body: (
            <>
              <p>Clean Slate is committed to making this website usable by people with different access needs. We design toward the Web Content Accessibility Guidelines (WCAG) 2.2 AA, while recognizing that a small film site may still have gaps.</p>
              <p>Accessibility is an ongoing practice rather than a one-time certification. We review reported barriers and include accessible structure in future updates.</p>
            </>
          ),
        },
        {
          title: 'What we work to provide',
          body: (
            <ul>
              <li>Semantic headings, landmarks, labels, and a skip link for keyboard and assistive-technology users.</li>
              <li>Visible focus indicators, usable link and button targets, and layouts that adapt to smaller screens and zoom.</li>
              <li>Alternative text for meaningful site imagery, with decorative images kept out of the reading experience.</li>
              <li>Readable color contrast, sentence-case copy, and reduced-motion behavior when a device preference requests it.</li>
            </ul>
          ),
        },
        {
          title: 'Media and downloadable materials',
          body: (
            <>
              <p>The trailer is delivered through an HTML video player, and the press kit is hosted as a downloadable PDF. These services and files can have limitations that are outside the site shell, including player controls, captions, document tagging, or keyboard behavior.</p>
              <p>If a video, image, or document prevents you from getting the information you need, contact us. We can help identify an alternate way to access the relevant press or film information when available.</p>
            </>
          ),
        },
        {
          title: 'Report a barrier',
          body: (
            <>
              <p>Email <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a> with the page address, what you were trying to do, and the barrier you encountered. You may also include the browser, device, assistive technology, or preferred format if it is relevant; please do not send sensitive personal information.</p>
              <p>We review reports as the production team is able and use them to prioritize practical fixes.</p>
            </>
          ),
        },
        {
          title: 'Third-party services',
          body: (
            <p>Links and services such as the media host, Instagram, IMDb, and email applications are operated by their respective providers. Their accessibility features, content, and support processes are governed by those providers, not by Clean Slate.</p>
          ),
        },
      ]}
    />
  );
}

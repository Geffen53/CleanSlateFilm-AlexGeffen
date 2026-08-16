import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { film } from '@/data/film';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms for using the Clean Slate film website, its media, and its press materials.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      copy="The ground rules for visiting this site and using Clean Slate materials."
      lastUpdated="August 15, 2026"
      sections={[
        {
          title: 'Agreement',
          body: (
            <p>By visiting cleanslatefilm.com, you agree to use the website lawfully and to follow these terms. If you do not agree, please do not use the site. These terms apply to the public website and do not replace a separate written license, festival agreement, or rights-holder permission.</p>
          ),
        },
        {
          title: 'Permitted use',
          body: (
            <ul>
              <li>View the site, trailer, gallery, and film information for personal, editorial, educational, or festival-review purposes.</li>
              <li>Download the press kit when the download is offered and use it only within the permission granted by the relevant rights holders.</li>
              <li>Link to the public site accurately without suggesting endorsement, sponsorship, or a relationship that does not exist.</li>
            </ul>
          ),
        },
        {
          title: 'Film materials and rights',
          body: (
            <>
              <p>Clean Slate, its title treatment, film stills, behind-the-scenes photography, poster artwork, written copy, video, music, logos, names, and other materials belong to Clean Slate, Huckabay Productions, or their respective rights holders. Viewing or downloading a material does not transfer ownership or grant a license.</p>
              <p>Do not remove credits or notices, alter a still or poster in a misleading way, sell or re-license a material, use it to train or promote an unrelated product, or imply that a person or rights holder endorses your use without written permission.</p>
            </>
          ),
        },
        {
          title: 'Press and screening requests',
          body: (
            <p>Permission questions, screening requests, festival requests, and commercial uses should be sent to <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a>. A press-kit download is not a blanket license, and any use remains subject to the rights held by the relevant photographer, filmmaker, performer, composer, or other contributor.</p>
          ),
        },
        {
          title: 'Contact and submissions',
          body: (
            <p>The contact link opens your email application. Do not send confidential scripts, passwords, payment details, or material you do not have the right to share. If you send an inquiry, you confirm that it is accurate and that you have authority to provide any personal information included in it.</p>
          ),
        },
        {
          title: 'Third-party services',
          body: (
            <p>The site links to or uses services such as a media host, Instagram, IMDb, and email applications. Those services are not controlled by Clean Slate. Their availability, content, privacy practices, accessibility, and terms are governed by their own providers.</p>
          ),
        },
        {
          title: 'Accuracy and availability',
          body: (
            <p>Festival selections, production details, release information, links, and media availability can change. We try to keep published information current, but the site is provided for general information and may contain errors, interruptions, or outdated material. We may change, suspend, or remove a page or feature without notice.</p>
          ),
        },
        {
          title: 'No warranties',
          body: (
            <p>To the fullest extent permitted by law, the website and its materials are provided as available, without a promise that they will be uninterrupted, error-free, secure, or suitable for a particular purpose. Nothing in these terms limits a consumer right or other protection that cannot legally be limited.</p>
          ),
        },
        {
          title: 'Limitation of responsibility',
          body: (
            <p>To the extent permitted by law, Clean Slate and its production team are not responsible for losses arising from reliance on site information, third-party services, unavailable media, unauthorized use of materials, or events outside our reasonable control. This does not exclude responsibility that applicable law does not allow us to exclude.</p>
          ),
        },
        {
          title: 'Changes and contact',
          body: (
            <>
              <p>We may revise these terms when the site or its materials change. The date above identifies the latest review, and the updated terms apply when posted.</p>
              <p>Questions about permissions or these terms can be sent to <a href={`mailto:${film.contactEmail}`}>{film.contactEmail}</a>.</p>
            </>
          ),
        },
      ]}
    />
  );
}

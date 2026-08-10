
import * as React from 'react';
import { SOCIAL_LINKS } from '../constants';

export default function AccessibilityPage(): React.ReactElement {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9]">Accessibility <br/><span className="text-chinese-red">Statement</span></h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xl font-normal leading-relaxed max-w-3xl">
            We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 reveal-up active">
          <div className="space-y-12">
            <section aria-labelledby="conformance-status">
              <h2 id="conformance-status" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Conformance Status</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed">
                Our platform is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard, specifically regarding alternative text for high-volume visual archives.
              </p>
            </section>

            <section aria-labelledby="limitations">
              <h2 id="limitations" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Known Limitations & Assistance</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Despite our best efforts to ensure accessibility, there may be some limitations. We have a vast collection of photographs, and as a result, not all images may yet have comprehensive alternative text descriptions.
              </p>
              <div className="bg-neutral-50 dark:bg-neutral-900/30 p-6 border-l-2 border-chinese-red mb-12">
                <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed italic font-medium">
                  If you encounter a specific photograph or visual element for which you require a description or further assistance, please reach out to us directly. We are committed to providing you with the information you need and will respond to your request as a priority.
                </p>
              </div>
            </section>

            <section aria-labelledby="technical-specs">
              <h2 id="technical-specs" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Technical Specifications</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                Accessibility of this site relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-400 font-normal space-y-2">
                <li>HTML5 / Semantic Markup</li>
                <li>WAI-ARIA / Screen Reader Support</li>
                <li>CSS3 / Responsive & High Contrast</li>
                <li>JavaScript / Focus Management Hooks</li>
              </ul>
            </section>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="measures">
              <h2 id="measures" className="text-[10px] uppercase tracking-[0.6em] text-chinese-red border-b border-gold/20 pb-4 mb-8 font-bold">Key Accessibility Features</h2>
              <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-400 font-normal space-y-4">
                <li><strong>Keyboard Navigation:</strong> All interactive elements are reachable and operable via keyboard.</li>
                <li><strong>Skip to Content:</strong> A skip link is available to bypass repetitive navigation.</li>
                <li><strong>Focus Management:</strong> Modals and menus trap focus appropriately and restore it on close.</li>
                <li><strong>Visual Indicators:</strong> Clear focus visible styles for all interactive components.</li>
                <li><strong>Good Faith Effort:</strong> Continuous monitoring and manual remediation of high-priority flows.</li>
              </ul>
            </section>

            <section aria-labelledby="feedback" className="bg-neutral-50 dark:bg-neutral-900/40 p-10 border border-gold/10 shadow-sm relative overflow-hidden">
              <h2 id="feedback" className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold border-b border-gold/20 pb-4 mb-8">Feedback & Contact</h2>
              <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed mb-8">
                We welcome your feedback on the accessibility of the <span className="text-chinese-red font-medium">Enemy Alien</span> portfolio. Please let us know if you encounter accessibility barriers:
              </p>
              <div className="space-y-4">
                <a href="/contact" className="text-chinese-red text-lg md:text-xl font-bold hover:underline underline-offset-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm transition-all">
                  Contact Form
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-500 text-[10px] uppercase tracking-widest font-bold mt-10">
                Direct feedback to our support team. We aim to respond within 2-5 business days.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Accessibility' };

export default function AccessibilityPage() {
  return <><PageIntro title="Accessibility" copy="We are committed to making this website usable for everyone." compact /><section className="section-rule bg-panel py-12 md:py-16"><div className="page-shell max-w-3xl space-y-6 text-sm leading-7 text-muted"><p>The site uses semantic structure, keyboard-accessible navigation, visible focus styles, alternative text, responsive typography, and reduced-motion support.</p><p>If you encounter an accessibility issue, email <a className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a> with the page and issue you experienced.</p></div></section></>;
}

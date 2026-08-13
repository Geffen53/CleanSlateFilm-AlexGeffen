import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Accessibility' };

export default function AccessibilityPage() {
  return <LegalPage title="Accessibility" copy="We are committed to making this website usable for everyone." sections={[{ title: 'Built for access', body: <p>The site uses semantic structure, keyboard-accessible navigation, visible focus styles, alternative text, responsive typography, and reduced-motion support.</p> }, { title: 'Report an issue', body: <p>Email <a className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a> with the page and issue you experienced.</p> }]} />;
}

import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Terms' };

export default function TermsPage() {
  return <LegalPage title="Terms" copy="Guidelines for using this website and its materials." sections={[{ title: 'Film materials', body: <p>Film stills, photography, artwork, written materials, and downloadable press materials remain the property of their respective rights holders. Press use does not transfer ownership.</p> }, { title: 'Accuracy and availability', body: <p>Festival, production, and release information may change. Video playback and other materials are available only when officially published.</p> }, { title: 'Contact', body: <p>Request permissions through <a className="text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a>.</p> }]} />;
}

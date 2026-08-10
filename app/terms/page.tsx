import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Terms' };

export default function TermsPage() {
  return <><PageIntro title="Terms" copy="Guidelines for using this website and its materials." compact /><section className="section-rule bg-panel py-20"><div className="page-shell max-w-3xl space-y-8 text-sm leading-7 text-muted"><section><h2 className="mb-3 text-xl font-semibold text-ink">Film materials</h2><p>Film stills, photography, artwork, written materials, and downloadable press materials remain the property of their respective rights holders. Press use does not transfer ownership.</p></section><section><h2 className="mb-3 text-xl font-semibold text-ink">Accuracy and availability</h2><p>Festival, production, and release information may change. Video playback and other materials are available only when officially published.</p></section><section><h2 className="mb-3 text-xl font-semibold text-ink">Contact</h2><p>Request permissions through <a className="text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:cleanslateproduction@gmail.com">cleanslateproduction@gmail.com</a>.</p></section></div></section></>;
}

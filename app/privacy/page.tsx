import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return <><PageIntro title="Privacy" copy="How information shared with this website is handled." compact /><section className="section-rule bg-panel py-12 md:py-16"><div className="page-shell max-w-3xl space-y-8 text-sm leading-7 text-muted"><section><h2 className="mb-3 text-xl font-semibold text-ink">Contact inquiries</h2><p>The contact link opens your email application. The website does not collect or submit inquiry contents through a site form.</p></section><section><h2 className="mb-3 text-xl font-semibold text-ink">Preferences</h2><p>The site may store theme and privacy preferences in your browser. We do not publish or sell contact information.</p></section><section><h2 className="mb-3 text-xl font-semibold text-ink">Questions</h2><p>Email <a className="text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a>.</p></section></div></section></>;
}

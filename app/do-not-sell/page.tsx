import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Do Not Sell or Share' };

export default function DoNotSellPage() {
  return <><PageIntro title="Do not sell or share" copy="Your privacy choices for information shared with this website." compact /><section className="section-rule bg-panel py-12 md:py-16"><div className="page-shell max-w-3xl space-y-6 text-sm leading-7 text-muted"><p>We do not sell personal information.</p><p>For a privacy request, email <a className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a>.</p></div></section></>;
}

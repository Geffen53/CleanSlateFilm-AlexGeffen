import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Do Not Sell or Share' };

export default function DoNotSellPage() {
  return <LegalPage title="Do not sell or share" copy="Your privacy choices for information shared with this website." sections={[{ title: 'Our practice', body: <p>We do not sell personal information.</p> }, { title: 'Privacy requests', body: <p>Email <a className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a>.</p> }]} />;
}

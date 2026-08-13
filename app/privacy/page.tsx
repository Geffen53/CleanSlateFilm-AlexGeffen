import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return <LegalPage title="Privacy" copy="How information shared with this website is handled." sections={[{ title: 'Contact inquiries', body: <p>The contact link opens your email application. The website does not collect or submit inquiry contents through a site form.</p> }, { title: 'Preferences', body: <p>The site may store theme and privacy preferences in your browser. We do not publish or sell contact information.</p> }, { title: 'Questions', body: <p>Email <a className="text-ink underline decoration-accent decoration-2 underline-offset-4" href="mailto:CleanSlateProduction@gmail.com">CleanSlateProduction@gmail.com</a>.</p> }]} />;
}

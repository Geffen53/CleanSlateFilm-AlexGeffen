import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Contact', description: 'Contact the Clean Slate production team.' };

export default function Contact() {
  return (
    <>
      <PageIntro title="Contact" copy="Connect with the Clean Slate team for press, festival, screening, and production inquiries." compact />
      <section className="section-rule bg-panel py-20 md:py-28"><div className="page-shell"><ContactPage /></div></section>
    </>
  );
}

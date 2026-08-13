import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Contact', description: 'Contact the Clean Slate production team.' };

export default function Contact() {
  return (
    <>
      <PageIntro title="Contact" copy="For press, festival, screening, partnership, and production inquiries." compact />
      <section className="section-rule bg-panel py-9 md:py-12"><div className="page-shell"><ContactPage /></div></section>
    </>
  );
}

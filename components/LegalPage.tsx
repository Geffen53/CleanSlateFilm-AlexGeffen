import type { ReactNode } from 'react';
import PageIntro from './PageIntro';

type LegalSection = { title: string; body: ReactNode };

export default function LegalPage({ title, copy, sections }: { title: string; copy: string; sections: LegalSection[] }) {
  return (
    <>
      <PageIntro title={title} copy={copy} compact />
      <section className="section-rule bg-panel py-9 md:py-12">
        <div className="page-shell max-w-3xl divide-y divide-line">
          {sections.map((section) => (
            <section key={section.title} className="py-5 first:pt-0 last:pb-0">
              <h2 className="text-base font-semibold text-ink">{section.title}</h2>
              <div className="mt-2 text-sm leading-6 text-muted">{section.body}</div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

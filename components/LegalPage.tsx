import type { ReactNode } from 'react';
import PageIntro from './PageIntro';

export type LegalSection = { id?: string; title: string; body: ReactNode };

type LegalPageProps = {
  title: string;
  copy: string;
  sections: LegalSection[];
  lastUpdated?: string;
};

function sectionId(title: string, index: number) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `legal-${slug || 'section'}-${index + 1}`;
}

export default function LegalPage({ title, copy, sections, lastUpdated }: LegalPageProps) {
  const linkedSections = sections.map((section, index) => ({ ...section, id: section.id ?? sectionId(section.title, index) }));

  return (
    <>
      <PageIntro title={title} copy={copy} compact />
      <section className="section-rule bg-panel py-9 md:py-12">
        <div className="page-shell grid gap-8 lg:grid-cols-[12rem_minmax(0,48rem)] lg:gap-14">
          <aside className="hidden lg:block">
            <nav aria-label={`${title} sections`} className="sticky top-20">
              <p className="section-kicker">On this page</p>
              <ol className="mt-3 space-y-2 border-l border-line pl-3 text-xs leading-5 text-muted">
                {linkedSections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="transition hover:text-ink">{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <article className="max-w-3xl">
            {lastUpdated ? <p className="mb-6 text-xs text-muted">Last updated {lastUpdated}.</p> : null}
            <div className="divide-y divide-line">
              {linkedSections.map((section) => (
                <section id={section.id} key={section.id} className="scroll-mt-20 py-7 first:pt-0 last:pb-0">
                  <h2 className="text-base font-semibold text-ink">{section.title}</h2>
                  <div className="legal-copy mt-3">{section.body}</div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

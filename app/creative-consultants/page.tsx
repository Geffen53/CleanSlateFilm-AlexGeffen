import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { creativeConsultants } from '@/data/consultants';

export const metadata: Metadata = {
  title: 'Creative Consultants',
  description: 'Creative consultants supporting Clean Slate from development through its festival journey.',
};

export default function CreativeConsultantsPage() {
  return (
    <>
      <PageIntro title="Creative Consultants" copy="Partners who helped shape the film and its path to audiences." compact />
      <section className="section-rule bg-navy py-12 text-white md:py-16">
        <div className="page-shell divide-y divide-white/15">
          {creativeConsultants.map((consultant) => (
            <article key={consultant.name} className="grid gap-6 py-8 first:pt-0 last:pb-0 md:grid-cols-[minmax(14rem,0.75fr)_1.25fr] md:items-center">
              <div className="flex min-h-24 items-center">
                {consultant.logo ? (
                  <Image src={consultant.logo} alt={consultant.name} width={600} height={220} className="h-auto max-h-28 w-auto max-w-full object-contain object-left" />
                ) : (
                  <h2 className="font-display text-4xl uppercase leading-none">{consultant.name}</h2>
                )}
              </div>
              <div>
                <p className="max-w-xl text-sm leading-7 text-white/75">{consultant.description}</p>
                <a href={consultant.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md px-1 text-sm font-semibold text-[#eee9d8] underline decoration-white/30 underline-offset-4 transition hover:text-white">
                  Visit {consultant.name}<ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

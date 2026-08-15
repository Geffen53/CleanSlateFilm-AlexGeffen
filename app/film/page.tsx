import type { Metadata } from 'next';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import FilmFacts from '@/components/FilmFacts';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import StillLightbox from '@/components/StillLightbox';
import { film, filmmakers, statements, stills } from '@/data/film';

export const metadata: Metadata = { title: 'The Film', description: film.synopsis };

export default function FilmPage() {
  return (
    <>
      <PageIntro title="Clean Slate" copy={film.descriptor} compact officialTitle />
      <section className="bg-panel py-9 md:py-12">
        <div className="page-shell grid gap-7 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden rounded-md bg-navy">
              <StillLightbox src="/media/stills/eric-trevor.jpg" alt="Eric and Trevor confront each other" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="text-lg font-semibold leading-snug md:text-2xl">{film.synopsis}</p>
          </Reveal>
          <details className="group lg:col-span-12">
            <summary className="action-secondary w-full cursor-pointer justify-between sm:w-auto">
              Production details
              <ChevronDown size={17} className="ml-3 transition group-open:rotate-180" />
            </summary>
            <div className="mt-4"><FilmFacts /></div>
          </details>
        </div>
      </section>

      <section className="py-9 md:py-12">
        <div className="page-shell">
          <h2 className="section-title">Director statements</h2>
          <div className="mt-6 space-y-10">
            {statements.map((statement) => {
              const filmmaker = filmmakers.find((person) => person.name === statement.name);

              return (
                <Reveal key={statement.name} className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-12 lg:gap-10">
                  {filmmaker?.image && (
                    <div className="relative col-span-1 aspect-[4/5] min-w-0 overflow-hidden rounded-md bg-panel sm:max-w-xs lg:col-span-3 lg:max-w-none">
                      <Image src={filmmaker.image} alt={`${statement.name}, ${filmmaker.role}`} fill quality={90} sizes="(min-width: 1024px) 25vw, 320px" className="object-cover object-top" />
                    </div>
                  )}
                  <div className="contents lg:col-span-9 lg:block">
                    <div className="col-span-1 min-w-0">
                      <p className="text-xs font-medium text-muted">{statement.role}</p>
                      <h3 className="mt-1 font-display text-3xl">{statement.name}</h3>
                    </div>
                    <div className="col-span-2 mt-5 space-y-3 text-sm leading-6 text-muted md:text-base">
                      <p className="text-xs font-medium text-muted">Director&apos;s Statement</p>
                      {statement.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden"><StillLightbox src={stills[8].src} alt={stills[8].alt} width={stills[8].width} height={stills[8].height} sizes="100vw" className="h-auto w-full" /></section>
    </>
  );
}

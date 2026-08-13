import type { Metadata } from 'next';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import FilmFacts from '@/components/FilmFacts';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { film, filmmakers, statements, stills } from '@/data/film';

export const metadata: Metadata = { title: 'The Film', description: film.synopsis };

export default function FilmPage() {
  return (
    <>
      <PageIntro title="Clean Slate" copy={film.descriptor} compact />
      <section className="bg-panel py-9 md:py-12">
        <div className="page-shell grid gap-7 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden rounded-md bg-navy">
              <Image src="/media/stills/eric-trevor.jpg" alt="Eric and Trevor confront each other" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="text-lg font-semibold leading-snug md:text-2xl">{film.synopsis}</p>
            <p className="body-copy mt-3">{film.descriptor}</p>
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
          <h2 className="section-title">Behind the film</h2>
          <div className="mt-6 grid gap-7 lg:grid-cols-2">
            {filmmakers.map((person) => (
              <article key={person.name} className="grid gap-4 sm:grid-cols-[150px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-panel">
                  <Image src={person.image!} alt={person.name} fill sizes="180px" className="object-cover" />
                </div>
                <div><p className="mb-1 text-xs font-medium text-muted">{person.role}</p><h3 className="text-xl font-semibold">{person.name}</h3><p className="mt-3 text-sm leading-6 text-muted">{person.bio}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-9 text-white md:py-12">
        <div className="page-shell space-y-8">
          {statements.map((statement) => (
            <Reveal key={statement.name} className="grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-4"><p className="text-xs font-medium text-white/60">{statement.role}</p><h2 className="mt-1 font-display text-3xl">{statement.name}</h2></div>
              <div className="space-y-3 text-sm leading-6 text-white/80 lg:col-span-8 md:text-base">{statement.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden"><Image src={stills[8].src} alt={stills[8].alt} width={stills[8].width} height={stills[8].height} sizes="100vw" className="h-auto w-full" /></section>
    </>
  );
}

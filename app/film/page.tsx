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
      <section className="bg-panel py-12 md:py-16">
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden rounded-md bg-navy">
              <Image src="/media/stills/eric-trevor.jpg" alt="Eric and Trevor confront each other" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="text-xl font-semibold leading-snug md:text-2xl">{film.synopsis}</p>
            <p className="body-copy mt-4">{film.descriptor}</p>
          </Reveal>
          <details className="group lg:col-span-12">
            <summary className="action-secondary w-full cursor-pointer justify-between sm:w-auto">
              Production details
              <ChevronDown size={17} className="ml-3 transition group-open:rotate-180" />
            </summary>
            <div className="mt-5"><FilmFacts /></div>
          </details>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="page-shell">
          <h2 className="section-title">Behind the film</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {filmmakers.map((person) => (
              <article key={person.name} className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-panel">
                  <Image src={person.image!} alt={person.name} fill sizes="180px" className="object-cover" />
                </div>
                <div><p className="mb-2 text-sm font-medium text-muted">{person.role}</p><h3 className="text-2xl font-semibold">{person.name}</h3><p className="mt-4 text-sm leading-7 text-muted">{person.bio}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-white md:py-16">
        <div className="page-shell space-y-12">
          {statements.map((statement) => (
            <Reveal key={statement.name} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4"><p className="font-display text-lg text-white/70">{statement.role}</p><h2 className="mt-2 font-display text-4xl">{statement.name}</h2></div>
              <div className="space-y-4 text-sm leading-7 text-white/80 lg:col-span-8 md:text-base">{statement.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden"><Image src={stills[8].src} alt={stills[8].alt} width={stills[8].width} height={stills[8].height} sizes="100vw" className="h-auto w-full" /></section>
    </>
  );
}

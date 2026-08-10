import type { Metadata } from 'next';
import Image from 'next/image';
import FilmFacts from '@/components/FilmFacts';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { film, filmmakers, statements, stills } from '@/data/film';

export const metadata: Metadata = { title: 'The Film', description: film.synopsis };

export default function FilmPage() {
  return (
    <>
      <PageIntro title="Clean Slate" copy={film.descriptor} compact />
      <section className="bg-panel py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
              <Image src="/media/stills/eric-trevor.jpg" alt="Eric and Trevor confront each other" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-2xl font-semibold leading-snug tracking-tight">{film.synopsis}</p>
            <p className="body-copy mt-6">{film.descriptor}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="page-shell">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Behind the film</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {filmmakers.map((person) => (
              <article key={person.name} className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-panel">
                  <Image src={person.image!} alt={person.name} fill sizes="180px" className="object-cover" />
                </div>
                <div><p className="mb-2 text-sm font-medium text-muted">{person.role}</p><h3 className="text-2xl font-semibold">{person.name}</h3><p className="mt-4 text-sm leading-7 text-muted">{person.bio}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="page-shell space-y-16">
          {statements.map((statement) => (
            <Reveal key={statement.name} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{statement.role}</p><h2 className="mt-4 text-3xl font-semibold">{statement.name}</h2></div>
              <div className="space-y-5 text-base leading-8 text-white/80 lg:col-span-8">{statement.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="page-shell"><h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-5xl">Production details</h2><FilmFacts /></div></section>
      <section className="relative h-72 overflow-hidden rounded-2xl md:h-auto md:aspect-[16/7]"><Image src={stills[8].src} alt={stills[8].alt} fill sizes="100vw" className="object-cover" /></section>
    </>
  );
}

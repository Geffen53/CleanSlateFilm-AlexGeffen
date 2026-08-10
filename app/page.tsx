import Image from 'next/image';
import Reveal from '@/components/Reveal';
import FilmFacts from '@/components/FilmFacts';
import IntentLink from '@/components/IntentLink';
import { festivals, film, stills } from '@/data/film';

export default function HomePage() {
  return (
    <>
      <section className="paper-surface pt-20">
        <div className="page-shell grid min-h-[620px] items-center gap-8 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-14">
          <Reveal className="relative z-10 py-8">
            <h1 className="wordmark text-[clamp(4.2rem,13vw,9rem)]">Clean<br />Slate</h1>
            <p className="mt-5 text-sm font-medium text-muted">A film by Alex Geffen & Cass Huckabay</p>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 md:text-xl">{film.tagline}</p>
            <p className="body-copy mt-5 max-w-xl">{film.synopsis}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <IntentLink href="/film" className="bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy">Discover the film</IntentLink>
              <IntentLink href="/videos" className="border border-line px-6 py-3 text-sm font-semibold transition hover:bg-panel">Trailer</IntentLink>
            </div>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-xl md:justify-self-end">
            <div className="relative aspect-[3/4] max-h-[690px] overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-black/20">
              <Image src="/media/clean-slate-poster.jpg" alt="Clean Slate poster" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-rule bg-panel py-20 md:py-28">
        <div className="page-shell">
          <Reveal>
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{film.descriptor}</h2>
          </Reveal>
          <div className="mt-14"><FilmFacts /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="page-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Inside the story</h2>
            <IntentLink href="/press#gallery" className="hidden text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 sm:block">View gallery</IntentLink>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            {stills.slice(3, 6).map((still, index) => (
              <Reveal key={still.src} className={index === 0 ? 'md:col-span-7' : 'md:col-span-5'}>
                <figure>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-panel">
                    <Image src={still.src} alt={still.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.02]" />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted">{still.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <div className="page-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Festival journey</p>
          <div className="mt-8 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {festivals.map((festival) => (
              <div key={festival.name} className="bg-navy p-6">
                <p className="text-xs text-accent">{festival.recognition}</p>
                <h3 className="mt-3 font-semibold leading-6">{festival.name}</h3>
                <p className="mt-3 text-xs leading-5 text-white/65">{festival.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

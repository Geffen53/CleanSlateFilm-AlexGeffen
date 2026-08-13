import Image from 'next/image';
import Reveal from '@/components/Reveal';
import IntentLink from '@/components/IntentLink';
import FestivalCard from '@/components/FestivalCard';
import { festivals, film, stills } from '@/data/film';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-14 text-white">
        <Image
          src="/media/stills/eric-trevor.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,11,12,0.92)_0%,rgba(5,11,12,0.72)_55%,rgba(5,11,12,0.42)_100%)]" />

        <div className="page-shell grid grid-cols-[minmax(0,1fr)_5.25rem] items-center gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_7rem] md:min-h-[calc(100svh-3.5rem)] md:grid-cols-[minmax(0,1fr)_clamp(13rem,22vw,20rem)] md:gap-10 md:py-10">
          <Reveal className="relative z-10 max-w-3xl md:py-2">
            <h1 className="font-sans text-3xl leading-[1.02] tracking-tight md:text-5xl">Your second chance isn't what you think</h1>
            <p className="mt-2 text-xs font-medium text-white/70 md:mt-3 md:text-sm">A film by Alex Geffen & Cass Huckabay</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base md:mt-4 md:text-lg md:leading-8">{film.synopsis}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <IntentLink href="/film" className="action-primary !bg-paper !text-ink hover:!bg-white">Discover the film</IntentLink>
              <IntentLink href="/videos" className="action-secondary !bg-black/25 !text-white !shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] hover:!bg-white/15">Trailer</IntentLink>
            </div>
          </Reveal>
          <Reveal className="relative w-full justify-self-end">
            <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-navy shadow-2xl shadow-black/40 ring-1 ring-white/20">
              <Image src="/media/clean-slate-poster.jpg" alt="Clean Slate poster" fill priority sizes="(min-width: 768px) 22rem, 7rem" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-rule bg-panel py-9 md:py-12">
        <div className="page-shell grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal><h2 className="max-w-4xl text-xl font-semibold leading-tight md:text-3xl">{film.descriptor}</h2></Reveal>
          <IntentLink href="/film" className="action-secondary w-fit">About the film</IntentLink>
        </div>
      </section>

      <section className="py-9 md:py-12">
        <div className="page-shell">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="section-title">Inside the story</h2>
            <IntentLink href="/press#gallery" className="compact-link hidden sm:inline-flex">View gallery</IntentLink>
          </div>
          <div className="grid gap-3 md:grid-cols-12">
            {stills.slice(0, 5).map((still, index) => (
              <Reveal key={still.src} className={index === 0 || index === 3 ? 'md:col-span-7' : index === 4 ? 'md:col-span-12' : 'md:col-span-5'}>
                <div className="overflow-hidden rounded-md bg-panel">
                  <Image src={still.src} alt={still.alt} width={still.width} height={still.height} sizes={index === 4 ? '100vw' : '(min-width: 768px) 58vw, 100vw'} className="h-auto w-full transition duration-500 hover:scale-[1.01]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-9 text-white md:py-12">
        <div className="page-shell">
          <h2 className="section-title text-white">Festival journey</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {festivals.map((festival) => (
              <FestivalCard key={festival.name} festival={festival} surface="navy" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

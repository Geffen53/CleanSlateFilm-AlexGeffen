import Image from 'next/image';
import Reveal from '@/components/Reveal';
import IntentLink from '@/components/IntentLink';
import FestivalCard from '@/components/FestivalCard';
import OfficialTitle from '@/components/OfficialTitle';
import StillLightbox from '@/components/StillLightbox';
import TrailerPlayer from '@/components/TrailerPlayer';
import { festivals, film, stills } from '@/data/film';

const heroActionClass = 'action-secondary !bg-black/25 !text-[#eee9d8] !shadow-[inset_0_0_0_1px_rgba(238,233,216,0.45)] hover:!bg-[#eee9d8]/15';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-14 text-[#eee9d8]">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
          src={film.heroVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <Image
          src="/media/trailer-artwork.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="-z-30 object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,11,12,0.92)_0%,rgba(5,11,12,0.72)_55%,rgba(5,11,12,0.42)_100%)]" />

        <div className="page-shell grid min-w-0 grid-cols-1 items-center gap-6 py-8 lg:min-h-[calc(100svh-3.5rem)] lg:py-10">
          <Reveal className="relative z-10 min-w-0 max-w-3xl lg:py-2">
            <h1 className="min-w-0">
              <span className="hero-title-frame">
                <OfficialTitle priority sizes="(min-width: 1024px) 48rem, 100vw" className="max-w-none" />
              </span>
            </h1>
            <p className="mt-2 text-xs font-medium text-[#eee9d8]/70 md:mt-3 md:text-sm">A film by Alex Geffen & Cass Huckabay</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#eee9d8]/85 sm:text-base md:mt-4 md:text-lg md:leading-8">{film.synopsis}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <IntentLink href="/film" className={heroActionClass}>Discover the film</IntentLink>
              <a href="#trailer" className={heroActionClass}>Watch the trailer</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="trailer" className="bg-panel py-9 md:py-12" aria-labelledby="trailer-heading">
        <div className="page-shell">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Official trailer</p>
              <h2 id="trailer-heading" className="section-title mt-1">Watch Clean Slate</h2>
            </div>
            <p className="max-w-sm text-xs leading-5 text-muted">Select play to begin. Player controls appear once playback starts.</p>
          </div>
          <div className="overflow-hidden rounded-md bg-navy shadow-[0_16px_40px_rgba(5,11,12,0.14)]">
            <TrailerPlayer src={film.trailerUrl} poster="/media/trailer-artwork.jpg" label="Clean Slate official trailer" />
          </div>
        </div>
      </section>

      <section className="py-9 md:py-12">
        <div className="page-shell">
          <div className="mb-5 lg:flex lg:items-end lg:justify-between lg:gap-4">
            <h2 className="section-title text-center lg:flex-1 lg:text-left">Inside the story</h2>
          </div>
          <div className="grid gap-3 lg:grid-cols-12">
            {stills.slice(0, 5).map((still, index) => (
              <Reveal key={still.src} className={index === 0 || index === 3 ? 'lg:col-span-7' : index === 4 ? 'lg:col-span-12' : 'lg:col-span-5'}>
                <div className="overflow-hidden rounded-md bg-panel">
                  <StillLightbox src={still.src} alt={still.alt} width={still.width} height={still.height} sizes={index === 4 ? '100vw' : '(min-width: 1024px) 58vw, 100vw'} className="h-auto w-full transition duration-500 hover:scale-[1.01]" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 flex justify-center sm:justify-end">
            <IntentLink href="/press#gallery" className="compact-link">View gallery</IntentLink>
          </div>
        </div>
      </section>

      <section className="bg-navy py-9 text-[#eee9d8] md:py-12">
        <div className="page-shell">
          <h2 className="section-title text-[#eee9d8]">Festival journey</h2>
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

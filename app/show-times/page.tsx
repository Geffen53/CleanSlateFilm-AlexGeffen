import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = {
  title: 'Showtimes',
  description: 'Upcoming Clean Slate festival screenings and show times.',
};

const screenings = [
  {
    name: 'Genre Blast Film Festival',
    date: 'September 4, 2026',
    time: '11:20 a.m.',
    location: 'Alamo Drafthouse, Winchester, Virginia',
    image: '/media/festivals/genre-blast-2026.avif',
    alt: 'Official Genre Blast Film Festival 2026 poster artwork',
    url: 'https://www.genreblast.com/',
  },
  {
    name: 'Coronado Island Film Festival',
    date: 'November 4–8, 2026',
    time: 'Show time TBD',
    location: 'Coronado Island, California',
    image: '/media/festivals/coronado-island-film-festival.png',
    alt: 'Coronado Island Film Festival poster artwork',
    url: 'https://coronadofilmfest.com/',
  },
  {
    name: 'IULM Sogni Elettrici',
    date: 'October 26–30, 2026',
    time: 'Show time TBD',
    location: 'IULM – Open Space, Via Carlo Bo 7, Milano, Lombardia 20143, Italy',
    image: '/media/festivals/iulm-sogni-elettrici-2026.jpg',
    alt: 'IULM Sogni Elettrici 2026 festival poster artwork',
  },
] as const;

export default function ShowingsPage() {
  return (
    <>
      <PageIntro title="Showtimes" copy="Find Clean Slate at these upcoming festival screenings." compact />
      <section className="section-rule bg-panel py-9 md:py-12">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          {screenings.map((screening) => (
            <article key={screening.name} className="overflow-hidden rounded-md bg-paper shadow-sm">
              <div className="relative aspect-[4/3] bg-[#eee9d8]">
                {'url' in screening ? <a href={screening.url} target="_blank" rel="noreferrer" aria-label={`Visit ${screening.name} website`} className="block h-full transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy">
                  <Image src={screening.image} alt={screening.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
                </a> : <Image src={screening.image} alt={screening.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />}
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Screening</p>
                <h2 className="mt-2 font-display text-2xl leading-tight text-ink">{screening.name}</h2>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div><dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Date</dt><dd className="mt-1">{screening.date}</dd></div>
                  <div><dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Time</dt><dd className="mt-1">{screening.time}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Location</dt><dd className="mt-1">{screening.location}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

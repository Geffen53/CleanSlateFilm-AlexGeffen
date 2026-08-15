import Image from 'next/image';
import { ExternalLink, Instagram, Mail } from 'lucide-react';
import { film, filmmakers } from '@/data/film';

const inquiryHref = `mailto:${film.contactEmail}?subject=${encodeURIComponent('Clean Slate inquiry')}`;

export default function ContactPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <h2 className="section-title">Start a conversation</h2>
      </div>
      <div className="lg:justify-self-end">
        <p className="max-w-xl text-sm leading-6 text-muted">
          Press, festival, screening, partnership, and production inquiries go directly to the Clean Slate team.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          <a href={inquiryHref} className="action-primary gap-2"><Mail size={17} />Send an inquiry</a>
          <a href={film.imdbUrl} target="_blank" rel="noreferrer" className="action-secondary gap-2">IMDb <ExternalLink size={15} /></a>
        </div>
        <a href={`mailto:${film.contactEmail}`} className="mt-3 inline-block break-all text-xs text-muted transition hover:text-ink">
          {film.contactEmail}
        </a>
        <div className="mt-5 grid max-w-md grid-cols-2 gap-3">
          {filmmakers.map((filmmaker, index) => {
            const instagramUrl = index === 0 ? 'https://www.instagram.com/alexandergeffen/' : 'https://www.instagram.com/casshuckabay/';
            const handle = index === 0 ? '@Alexandergeffen' : '@casshuckabay';

            return (
              <a key={filmmaker.name} href={instagramUrl} target="_blank" rel="noreferrer" className="group min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-panel">
                  <Image src={filmmaker.image} alt={`${filmmaker.name} headshot`} fill sizes="(min-width: 1024px) 13rem, 50vw" className="object-cover transition duration-300 group-hover:scale-[1.02]" />
                </div>
                <span className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs text-muted transition group-hover:text-ink"><Instagram size={17} />{handle}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

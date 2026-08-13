import { ExternalLink, Instagram, Mail } from 'lucide-react';
import { film } from '@/data/film';

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
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <a href="https://www.instagram.com/alexandergeffen/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md text-muted transition hover:text-ink"><Instagram size={17} />@Alexandergeffen</a>
          <a href="https://www.instagram.com/casshuckabay/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md text-muted transition hover:text-ink"><Instagram size={17} />@casshuckabay</a>
        </div>
      </div>
    </div>
  );
}

import { ExternalLink, Mail } from 'lucide-react';
import { film } from '@/data/film';

const inquiryHref = `mailto:${film.contactEmail}?subject=${encodeURIComponent('Clean Slate inquiry')}`;

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <p className="eyebrow">Production contact</p>
        <h2 className="section-title mt-2">Start a conversation</h2>
      </div>
      <div className="lg:justify-self-end">
        <p className="max-w-xl text-sm leading-6 text-muted">
          Press, festival, screening, partnership, and production inquiries go directly to the Clean Slate team.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={inquiryHref} className="action-primary gap-2"><Mail size={17} />Send an inquiry</a>
          <a href={film.imdbUrl} target="_blank" rel="noreferrer" className="action-secondary gap-2">IMDb <ExternalLink size={15} /></a>
        </div>
        <a href={`mailto:${film.contactEmail}`} className="mt-4 inline-block break-all text-sm text-muted transition hover:text-ink">
          {film.contactEmail}
        </a>
      </div>
    </div>
  );
}

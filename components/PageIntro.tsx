import Reveal from './Reveal';
import OfficialTitle from './OfficialTitle';

export default function PageIntro({ title, copy, compact = false, officialTitle = false }: { title: string; copy: string; compact?: boolean; officialTitle?: boolean }) {
  return (
    <header className={`page-shell pt-20 md:pt-24 ${compact ? 'pb-6 md:pb-8' : 'pb-8 md:pb-10'}`}>
      <Reveal>
        <h1 className={officialTitle ? 'max-w-3xl' : 'display-title'}>
          {officialTitle ? <OfficialTitle onLight priority sizes="(min-width: 768px) 48rem, 100vw" /> : title}
        </h1>
        <p className="body-copy mt-3 max-w-2xl">{copy}</p>
      </Reveal>
    </header>
  );
}

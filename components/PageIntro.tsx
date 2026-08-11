import Reveal from './Reveal';

export default function PageIntro({ title, copy, compact = false }: { title: string; copy: string; compact?: boolean }) {
  return (
    <header className={`page-shell pt-24 md:pt-28 ${compact ? 'pb-8 md:pb-10' : 'pb-10 md:pb-12'}`}>
      <Reveal>
        <h1 className="display-title">{title}</h1>
        <p className="body-copy mt-4 max-w-3xl">{copy}</p>
      </Reveal>
    </header>
  );
}

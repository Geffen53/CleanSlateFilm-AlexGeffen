import Reveal from './Reveal';

export default function PageIntro({ title, copy, compact = false }: { title: string; copy: string; compact?: boolean }) {
  return (
    <header className={`page-shell pt-20 md:pt-24 ${compact ? 'pb-6 md:pb-8' : 'pb-8 md:pb-10'}`}>
      <Reveal>
        <h1 className="display-title">{title}</h1>
        <p className="body-copy mt-3 max-w-2xl">{copy}</p>
      </Reveal>
    </header>
  );
}

import Reveal from './Reveal';

export default function PageIntro({ title, copy, compact = false }: { title: string; copy: string; compact?: boolean }) {
  return (
    <header className={`page-shell pt-32 md:pt-40 ${compact ? 'pb-12 md:pb-16' : 'pb-14 md:pb-20'}`}>
      <Reveal>
        <h1 className={compact ? 'max-w-4xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl' : 'display-title'}>{title}</h1>
        <p className="body-copy mt-6 max-w-3xl">{copy}</p>
      </Reveal>
    </header>
  );
}

import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import PageIntro from '@/components/PageIntro';
import { btsImages, festivals, film, stills } from '@/data/film';

export const metadata: Metadata = { title: 'Press & Gallery', description: 'Press materials, film stills, behind-the-scenes photography and festival selections for Clean Slate.' };

export default function PressPage() {
  return (
    <>
      <PageIntro title="Press & Gallery" copy="Official stills, production photography, festival milestones and press materials from Clean Slate." compact />
      <section className="bg-navy py-14 text-white">
        <div className="page-shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-2xl font-semibold">Clean Slate press kit</h2><p className="mt-2 text-sm text-white/65">Web-optimized PDF · 26 pages</p></div>
          <a href={film.pressKit} download className="inline-flex items-center justify-center gap-3 bg-accent px-6 py-3 text-sm font-semibold text-[#101820]"><Download size={17} />Download EPK</a>
        </div>
      </section>
      <section className="py-20 md:py-28"><div className="page-shell"><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Selections & recognition</h2><div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">{festivals.map((festival) => <article key={festival.name} className="bg-panel p-7"><p className="mb-3 text-sm font-medium text-muted">{festival.recognition}</p><h3 className="text-xl font-semibold leading-7">{festival.name}</h3><p className="mt-4 text-sm leading-6 text-muted">{festival.location && <>{festival.location}<br /></>}{festival.date}</p></article>)}</div></div></section>
      <section id="gallery" className="section-rule bg-panel py-20 md:py-28"><div className="page-shell"><h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-5xl">Film stills</h2><GalleryGrid images={stills} /></div></section>
      <section className="py-20 md:py-28"><div className="page-shell"><h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-5xl">Behind the scenes</h2><GalleryGrid images={btsImages} /></div></section>
    </>
  );
}

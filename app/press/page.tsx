import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import FestivalCard from '@/components/FestivalCard';
import PageIntro from '@/components/PageIntro';
import { btsImages, festivals, film, stills } from '@/data/film';

export const metadata: Metadata = { title: 'Press & Gallery', description: 'Press materials, film stills, behind-the-scenes photography and festival selections for Clean Slate.' };

export default function PressPage() {
  return (
    <>
      <PageIntro title="Press & Gallery" copy="Official stills, production photography, festival milestones and press materials from Clean Slate." compact />
      <section className="bg-navy py-8 text-white md:py-10">
        <div className="page-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-2xl font-semibold">Clean Slate press kit</h2><p className="mt-2 text-sm text-white/65">Web-optimized PDF · 26 pages</p></div>
          <a href={film.pressKit} download className="action-secondary gap-3"><Download size={17} />Download EPK</a>
        </div>
      </section>
      <section className="py-12 md:py-16"><div className="page-shell"><h2 className="section-title">Selections & recognition</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{festivals.map((festival) => <FestivalCard key={festival.name} festival={festival} />)}</div></div></section>
      <section id="gallery" className="render-deferred section-rule bg-panel py-12 md:py-16"><div className="page-shell"><h2 className="section-title mb-8">Film stills</h2><GalleryGrid images={stills} /></div></section>
      <section className="render-deferred py-12 md:py-16"><div className="page-shell"><h2 className="section-title mb-8">Behind the scenes</h2><GalleryGrid images={btsImages} /></div></section>
    </>
  );
}

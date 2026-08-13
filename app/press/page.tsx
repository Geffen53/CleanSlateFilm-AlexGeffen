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
      <PageIntro title="Press & Gallery" copy="Official stills, production photography, festival milestones and press materials." compact />
      <section className="bg-navy py-6 text-white md:py-8">
        <div className="page-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-xl font-semibold">Press kit</h2><p className="mt-1 text-xs text-white/65">Web-optimized PDF · 26 pages</p></div>
          <a href={film.pressKit} download className="action-secondary gap-3"><Download size={17} />Download press kit</a>
        </div>
      </section>
      <section className="py-9 md:py-12"><div className="page-shell"><h2 className="section-title">Selections & recognition</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{festivals.map((festival) => <FestivalCard key={festival.name} festival={festival} />)}</div></div></section>
      <section id="gallery" className="render-deferred section-rule bg-panel py-9 md:py-12"><div className="page-shell"><h2 className="section-title mb-5">Film stills</h2><GalleryGrid images={stills} /></div></section>
      <section className="render-deferred py-9 md:py-12"><div className="page-shell"><h2 className="section-title mb-5">Behind the scenes</h2><GalleryGrid images={btsImages} /></div></section>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section id="press-gallery" className="bg-navy py-7 text-white md:py-9">
        <div className="page-shell grid gap-6 lg:mx-auto lg:max-w-4xl lg:grid-cols-[minmax(0,clamp(12rem,20vw,18rem))_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div className="order-2 mx-auto w-full max-w-[12rem] sm:max-w-[15rem] lg:order-1 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-black/20 ring-1 ring-white/15">
              <Image src="/media/clean-slate-poster.jpg" alt="Clean Slate theatrical poster" fill priority quality={90} sizes="(min-width: 1024px) 18rem, 15rem" className="object-contain" />
            </div>
          </div>
          <div className="order-1 flex flex-col items-center gap-4 text-center lg:order-2 lg:items-start lg:text-left">
            <div><h2 className="text-xl font-semibold">Press kit</h2><p className="mt-1 text-xs text-white/65">Web-optimized PDF · 26 pages</p></div>
            <a href={film.pressKit} download className="action-secondary gap-3"><Download size={17} />Download press kit</a>
          </div>
        </div>
      </section>
      <section className="py-9 md:py-12"><div className="page-shell"><h2 className="section-title">Selections & recognition</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{festivals.map((festival) => <FestivalCard key={festival.name} festival={festival} />)}</div></div></section>
      <section id="gallery" className="render-deferred section-rule bg-panel py-9 md:py-12"><div className="page-shell"><h2 className="section-title mb-5">Film stills</h2><GalleryGrid images={stills} /></div></section>
      <section className="render-deferred py-9 md:py-12"><div className="page-shell"><h2 className="section-title mb-5">Behind the scenes</h2><GalleryGrid images={btsImages} /></div></section>
    </>
  );
}

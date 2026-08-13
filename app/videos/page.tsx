import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/PageIntro';
import { film } from '@/data/film';

export const metadata: Metadata = { title: 'Videos', description: 'Official video from Clean Slate.' };

export default function VideosPage() {
  return (
    <>
      <PageIntro title="Videos" copy="Watch the official trailer." compact />
      <section className="pb-10 md:pb-14">
        <div className="page-shell">
          <article className="bg-panel p-2.5 md:p-4">
            <div className="relative aspect-video overflow-hidden rounded-md bg-navy">
              {film.trailerUrl ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={film.trailerUrl}
                  title="Clean Slate official trailer"
                  loading="eager"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <Image src="/media/trailer-artwork.jpg" alt="Clean Slate official trailer artwork" fill priority sizes="100vw" className="object-cover" />
              )}
            </div>
            <div className="flex flex-col gap-2 px-1.5 py-4 sm:flex-row sm:items-end sm:justify-between md:px-2">
              <div><h2 className="text-xl font-semibold">Official trailer</h2></div>
            </div>
          </article>
          {!film.trailerUrl && <p className="mt-4 max-w-xl text-xs leading-5 text-muted">No playback is currently published. The official player will appear when the approved trailer source is available.</p>}
        </div>
      </section>
    </>
  );
}

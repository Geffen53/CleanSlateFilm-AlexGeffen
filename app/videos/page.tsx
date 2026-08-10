import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/PageIntro';
import { film } from '@/data/film';

export const metadata: Metadata = { title: 'Videos', description: 'Official video from Clean Slate.' };

export default function VideosPage() {
  return (
    <>
      <PageIntro title="Videos" copy="Official video from Clean Slate will be available here." compact />
      <section className="pb-24 md:pb-32">
        <div className="page-shell">
          <article className="bg-panel p-3 md:p-5">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
              <Image src="/media/trailer-artwork.jpg" alt="Clean Slate official trailer artwork" fill priority sizes="100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-6 sm:flex-row sm:items-end sm:justify-between md:px-4">
              <div><p className="mb-2 text-sm text-muted">Official trailer</p><h2 className="text-2xl font-semibold">Clean Slate</h2></div>
              <p className="text-sm text-muted">Video forthcoming</p>
            </div>
          </article>
          {!film.trailerUrl && <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">No playback is currently published. This page will activate the official player when the approved trailer source becomes available.</p>}
        </div>
      </section>
    </>
  );
}

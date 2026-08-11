import Image from 'next/image';
import type { GalleryImage } from '@/data/types';

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <figure key={image.src} className="mb-3 break-inside-avoid overflow-hidden rounded-md bg-paper">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1800}
            height={image.height ?? 1012}
            quality={75}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full transition duration-500 hover:scale-[1.01]"
          />
        </figure>
      ))}
    </div>
  );
}

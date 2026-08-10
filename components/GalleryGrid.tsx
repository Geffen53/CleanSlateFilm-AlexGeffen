import Image from 'next/image';
import type { GalleryImage } from '@/data/types';

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <figure key={image.src} className={index % 5 === 0 ? 'sm:col-span-2' : ''}>
          <div className={`relative overflow-hidden rounded-2xl bg-panel ${index % 5 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index % 5 === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <figcaption className="pb-4 pt-2 text-xs text-muted">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

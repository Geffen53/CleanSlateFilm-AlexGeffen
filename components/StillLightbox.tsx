'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type StillLightboxProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: 75 | 90;
  sizes?: string;
  className?: string;
};

export default function StillLightbox({
  src,
  alt,
  width = 1800,
  height = 1012,
  fill = false,
  priority = false,
  quality = 90,
  sizes,
  className,
}: StillLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeViewer = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeViewer, isOpen]);

  const image = fill ? (
    <Image src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} className={className} />
  ) : (
    <Image src={src} alt={alt} width={width} height={height} priority={priority} quality={quality} sizes={sizes} className={className} />
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View ${alt} full frame`}
        className={`group ${fill ? 'relative h-full w-full' : 'relative block w-full'} cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left`}
      >
        {image}
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} full frame`}
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-navy/95 p-4 text-[#eee9d8] sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeViewer}
            aria-label="Close full-frame image"
            className="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-[#eee9d8]/10 text-[#eee9d8] transition hover:bg-[#eee9d8]/20"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div
            className="relative flex h-[calc(100svh-2rem)] w-full max-w-[110rem] items-center justify-center sm:h-[calc(100svh-4rem)]"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeViewer();
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={quality}
              sizes="100vw"
              onClick={closeViewer}
              className="h-auto max-h-full w-auto max-w-full cursor-zoom-out rounded-md object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

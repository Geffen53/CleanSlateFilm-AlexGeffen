
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageObject {
  imageUrl: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}

interface RotatingImageProps {
  images: (string | ImageObject)[];
  alt: string;
  className?: string;
  transitionDuration?: number;
  rotationInterval?: number;
  initialOffset?: number;
}

export const RotatingImage = ({ 
  images, 
  alt, 
  className = "", 
  transitionDuration = 2000,
  rotationInterval = 5000,
  initialOffset = 0
}: RotatingImageProps) => {
  const [currentIndex, setIndex] = React.useState(0);

  // Handle the rotation timing
  React.useEffect(() => {
    if (images.length <= 1) return;

    let interval: any;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, rotationInterval);
    }, initialOffset);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [images.length, rotationInterval, initialOffset]);

  const currentImage = images[currentIndex];
  if (!currentImage) return <div className={`bg-neutral-900 ${className}`} />;

  const src = typeof currentImage === 'string' ? currentImage : currentImage.imageUrl;
  if (!src) return <div className={`bg-neutral-900 ${className}`} />;
  
  const blurDataURL = typeof currentImage === 'string' ? undefined : currentImage.blurDataURL;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: transitionDuration / 1000,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={src} 
            alt={alt} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            aria-hidden={alt === "" ? "true" : "false"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

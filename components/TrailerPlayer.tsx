'use client';

import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

type TrailerPlayerProps = {
  src: string;
  poster: string;
  label: string;
};

export default function TrailerPlayer({ src, poster, label }: TrailerPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const startPlayback = () => {
    void videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video">
      <video
        ref={videoRef}
        className="block h-full w-full"
        src={src}
        poster={poster}
        controls={hasStarted}
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setHasStarted(true)}
      />
      {!hasStarted ? (
        <button
          type="button"
          onClick={startPlayback}
          aria-label={`Play ${label.toLowerCase()}`}
          className="absolute left-1/2 top-1/2 inline-flex min-h-16 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#eee9d8] text-navy shadow-[0_8px_24px_rgba(5,11,12,0.32)] transition hover:scale-105 hover:bg-[#eee9d8]/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eee9d8]"
        >
          <Play size={28} fill="currentColor" strokeWidth={1.75} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}

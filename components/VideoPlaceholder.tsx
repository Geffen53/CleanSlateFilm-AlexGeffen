'use client';

import * as React from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './ui/VideoPlayer';

interface VideoPlaceholderProps {
  title: string;
  embedUrl?: string;
  videoUrl?: string;
  caption?: string;
}

export default function VideoPlaceholder({ title, embedUrl, videoUrl, caption }: VideoPlaceholderProps) {
  const [isTheaterMode, setIsTheaterMode] = React.useState(false);

  // If it's a direct video URL (MP4)
  if (videoUrl) {
    return (
      <>
        <div className="w-full overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-950 shadow-2xl border border-black/5 dark:border-white/10 group cursor-pointer" onClick={() => setIsTheaterMode(true)}>
          <div className="aspect-video relative flex items-center justify-center bg-black overflow-hidden">
            {/* 30s Frame Placeholder */}
            <video 
              src={`${videoUrl}#t=30`} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              preload="metadata"
              muted
              playsInline
            />
            
            <div className="absolute inset-0 bg-neutral-900/20 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30"></div>
              <div className="text-center z-20">
                <div className="mx-auto w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 group-hover:bg-chinese-red group-hover:border-chinese-red transition-all duration-500">
                  <Play size={24} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_rgba(215,35,35,0.1),_transparent_70%)] z-15"></div>
          </div>
          <div className="px-6 py-5 border-t border-black/5 dark:border-white/10 flex justify-between items-center">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 dark:text-white">{title}</h4>
              {caption && <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 dark:text-white/60 mt-1">{caption}</p>}
            </div>
            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-chinese-red">Play Video</span>
          </div>
        </div>

        {/* Theater Mode Modal */}
        <AnimatePresence>
          {isTheaterMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full h-full flex items-center justify-center"
              >
                <VideoPlayer 
                  src={videoUrl} 
                  autoPlay={true} 
                  onClose={() => setIsTheaterMode(false)}
                  isTheaterMode={true}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  if (embedUrl) {
    return (
      <div className="w-full overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-950 shadow-2xl border border-black/5 dark:border-white/10">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {caption ? (
          <div className="px-6 py-5 border-t border-black/5 dark:border-white/10">
            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 dark:text-white/60">{caption}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-950 shadow-2xl border border-black/5 dark:border-white/10">
      <div className="aspect-video flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),_transparent_55%)]" />
        <div className="relative z-10 text-center px-8">
          <div className="mx-auto w-20 h-20 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center bg-black/5 dark:bg-black/20 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900 dark:text-white/70">
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
          <h3 className="mt-6 font-display text-2xl md:text-3xl tracking-tight text-neutral-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-white/50">
            Video coming soon
          </p>
        </div>
      </div>
      <div className="px-6 py-5 border-t border-black/5 dark:border-white/10">
        <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 dark:text-white/60">{caption ?? 'Placeholder embed — swap in a YouTube/Vimeo link when ready.'}</p>
      </div>
    </div>
  );
}


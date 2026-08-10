'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoPlayer from './ui/VideoPlayer';

export default function TrailerPage(): React.ReactElement {
  const [isTheaterMode, setIsTheaterMode] = React.useState(false);
  const videoUrl = "https://landingstorage.filmclusive.com/personal-projects/enemy-alien/12.14.22_EA_Sizzle%202023%20(2026)_website.mp4";

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-screen relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-16 reveal-up active text-center">
          <h3 className="text-[10px] uppercase tracking-[0.8em] text-gold-muted mb-6 font-bold">The Official Trailer</h3>
          <h1 className="font-display text-5xl md:text-8xl font-normal tracking-tighter text-neutral-900 dark:text-white leading-[0.9] uppercase">
            Experience <br /> the <span className="text-chinese-red">Journey</span>
          </h1>
        </header>

        <div className="reveal-up active">
          {/* Trailer Preview/Trigger */}
          <div 
            onClick={() => setIsTheaterMode(true)}
            className="group relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl bg-black border border-gold/20 cursor-pointer"
          >
            {/* 30s Frame Placeholder */}
            <video 
              src={`${videoUrl}#t=30`} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
              preload="metadata"
              muted
              playsInline
            />

            <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/40"></div>
              <div className="text-center z-20 space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 group-hover:bg-chinese-red group-hover:border-chinese-red transition-all duration-500">
                  <Play size={40} className="text-white ml-2" fill="currentColor" />
                </div>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-bold">Click to Play Trailer</p>
              </div>
            </div>
            
            {/* Hover Effect Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,_rgba(215,35,35,0.15),_transparent_70%)] z-15"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 reveal-up active">
          <div className="p-12 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/40 border border-gold/10 relative overflow-hidden">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-chinese-red mb-6 font-bold">About the Trailer</h4>
            <p className="text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-light">
              This trailer showcases the film's moving story and historical significance, capturing the Yamamoto family's resilience during one of the most challenging periods in American history.
            </p>
          </div>
          <div className="p-12 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/40 border border-gold/10 flex flex-col justify-center items-center text-center">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold-muted mb-6 font-bold">Watch More</h4>
            <div className="flex flex-col gap-4 w-full">
              <button className="w-full py-5 border border-gold/20 dark:border-gold/30 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-chinese-red hover:text-white hover:border-chinese-red transition-all transition-colors duration-500">
                The History of the Internment
              </button>
              <button className="w-full py-5 border border-gold/20 dark:border-gold/30 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-chinese-red hover:text-white hover:border-chinese-red transition-all transition-colors duration-500">
                Historical Featurette
              </button>
            </div>
          </div>
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
    </div>
  );
}

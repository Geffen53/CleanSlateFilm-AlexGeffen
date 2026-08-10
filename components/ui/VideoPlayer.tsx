'use client';

import * as React from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  RotateCw,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  onClose?: () => void;
  isTheaterMode?: boolean;
}

export default function VideoPlayer({ 
  src, 
  poster, 
  className, 
  autoPlay = false,
  onClose,
  isTheaterMode = false
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [showControls, setShowControls] = React.useState(true);
  const controlsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = (Number(e.target.value) / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setProgress(Number(e.target.value));
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
    }
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "group relative bg-black overflow-hidden flex items-center justify-center",
        isTheaterMode ? "w-full h-full max-w-6xl max-h-[80vh] rounded-3xl shadow-2xl border border-white/10" : "w-full aspect-video rounded-3xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        playsInline
        autoPlay={autoPlay}
      />

      {/* Center Play Button Overlay (Visible when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePlay}
            className="absolute z-10 p-6 bg-chinese-red/90 text-white rounded-full hover:bg-chinese-red transition-colors backdrop-blur-sm"
          >
            <Play size={40} fill="currentColor" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Controls Container */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-none p-4 md:p-8"
      >
        {/* Header (Close Button) */}
        <div className="flex justify-end pointer-events-auto">
          {onClose && (
            <button 
              onClick={onClose}
              className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="space-y-4 pointer-events-auto">
          {/* Progress Bar */}
          <div className="relative group/progress">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 md:h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-chinese-red hover:h-2.5 transition-all"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={togglePlay} className="text-white hover:text-chinese-red transition-colors">
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </button>

              <div className="hidden md:flex items-center gap-4">
                <button onClick={() => skip(-10)} className="text-white hover:text-chinese-red transition-colors">
                  <RotateCcw size={20} />
                </button>
                <button onClick={() => skip(10)} className="text-white hover:text-chinese-red transition-colors">
                  <RotateCw size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 text-white text-[10px] md:text-xs font-bold tracking-widest tabular-nums">
                <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
                <span className="opacity-40">/</span>
                <span className="opacity-60">{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 group/volume">
                <button onClick={toggleMute} className="text-white hover:text-chinese-red transition-colors">
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-0 group-hover/volume:w-16 md:group-hover/volume:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white transition-all overflow-hidden"
                />
              </div>

              <button onClick={toggleFullscreen} className="text-white hover:text-chinese-red transition-colors">
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

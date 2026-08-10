'use client';

import * as React from 'react';

interface LanternProps {
  className?: string;
  size?: number;
}

export default function Lantern({ className = '', size = 40 }: LanternProps) {
  return (
    <div className={`relative inline-block animate-[sway_4s_easeInOutSine_infinite] ${className}`} style={{ width: size, height: size * 1.5 }}>
      <svg
        viewBox="0 0 40 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Top Handle/String */}
        <line x1="20" y1="0" x2="20" y2="5" stroke="#C5A059" strokeWidth="2" />
        
        {/* Lantern Body */}
        <path
          d="M5 15C5 10 10 5 20 5C30 5 35 10 35 15V45C35 50 30 55 20 55C10 55 5 50 5 45V15Z"
          fill="#D32F2F"
          stroke="#FFD700"
          strokeWidth="1.5"
        />
        
        {/* Decorative Ribs */}
        <path d="M12 5.5V54.5" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
        <path d="M20 5V55" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
        <path d="M28 5.5V54.5" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
        
        {/* Horizontal Bands */}
        <rect x="5" y="12" width="30" height="2" fill="#FFD700" />
        <rect x="5" y="46" width="30" height="2" fill="#FFD700" />
        
        {/* Tassels */}
        <line x1="15" y1="55" x2="15" y2="65" stroke="#FFD700" strokeWidth="1" />
        <line x1="20" y1="55" x2="20" y2="68" stroke="#FFD700" strokeWidth="1" />
        <line x1="25" y1="55" x2="25" y2="65" stroke="#FFD700" strokeWidth="1" />
        
        {/* Glow Effect (Internal) */}
        <ellipse cx="20" cy="30" rx="8" ry="12" fill="url(#lanternGlow)" />
        <defs>
          <radialGradient id="lanternGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 30) rotate(90) scale(15 10)">
            <stop stopColor="#FFD700" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

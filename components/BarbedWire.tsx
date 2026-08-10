import * as React from 'react';

const BarbedWire: React.FC<{
    className?: string;
    color?: string;
    wireSpacing?: number;
    rotation?: number;
}> = ({
    className = '',
    color = 'currentColor',
    wireSpacing = 150,
    rotation = 0
}) => {
    const strokeColor = color === 'currentColor' ? 'currentColor' : color;
    
    return (
        <div className={`absolute pointer-events-none w-full h-full overflow-hidden ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
            {/* Horizontal Wires */}
            <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-60" preserveAspectRatio="none">
                <defs>
                    <pattern id="barbedWirePattern" x="0" y="0" width={wireSpacing} height="100" patternUnits="userSpaceOnUse">
                        {/* Top Wire */}
                        <path
                            d={`M0,30 Q${wireSpacing/4},25 ${wireSpacing/2},30 T${wireSpacing},30`}
                            stroke={strokeColor}
                            className="dark:stroke-neutral-400"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        {/* Top Barbs */}
                        <path d="M20,25 L30,35 M30,25 L20,35" stroke={strokeColor} className="dark:stroke-neutral-400" strokeWidth="2" fill="none" />
                        <path d={`M${wireSpacing/2},25 L${wireSpacing/2+10},35 M${wireSpacing/2+10},25 L${wireSpacing/2},35`} stroke={strokeColor} className="dark:stroke-neutral-400" strokeWidth="2" fill="none" />

                        {/* Bottom Wire */}
                        <path
                            d={`M0,70 Q${wireSpacing/4},75 ${wireSpacing/2},70 T${wireSpacing},70`}
                            stroke={strokeColor}
                            className="dark:stroke-neutral-400"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        {/* Bottom Barbs */}
                        <path d="M40,65 L50,75 M50,65 L40,75" stroke={strokeColor} className="dark:stroke-neutral-400" strokeWidth="2" fill="none" />
                        <path d={`M${wireSpacing-20},65 L${wireSpacing-10},75 M${wireSpacing-10},65 L${wireSpacing-20},75`} stroke={strokeColor} className="dark:stroke-neutral-400" strokeWidth="2" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#barbedWirePattern)" />
            </svg>
        </div>
    );
}; // Updated to simpler pattern to avoid complexity issues with SVG generation tool

export default BarbedWire;

'use client';

import * as React from 'react';

export default function AccessPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-black text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-8 tracking-tighter uppercase">
          Industry <span className="text-chinese-red">Access</span>
        </h1>
        
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto mt-20 text-center space-y-8">
            <p className="text-neutral-400 uppercase tracking-widest text-sm">
              This section is reserved for production partners and industry professionals.
            </p>
            <div className="space-y-4">
              <input 
                type="password" 
                placeholder="PASSWORD" 
                className="w-full bg-neutral-900 border border-neutral-800 px-6 py-4 text-center tracking-[0.5em] focus:outline-none focus:border-chinese-red transition-colors"
              />
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-chinese-red py-4 font-bold tracking-widest uppercase hover:bg-red-900 transition-colors"
              >
                Enter Portal
              </button>
            </div>
            <p className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">
              Contact Mas Moriya for access credentials.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-8">
              <h2 className="text-chinese-red uppercase tracking-[0.3em] font-bold text-xs border-b border-chinese-red/20 pb-2">Scripts</h2>
              <ul className="space-y-4">
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Pilot Script</button></li>
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Series Outline</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-chinese-red uppercase tracking-[0.3em] font-bold text-xs border-b border-chinese-red/20 pb-2">Pitch Materials</h2>
              <ul className="space-y-4">
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Series Bible</button></li>
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Visual References</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-chinese-red uppercase tracking-[0.3em] font-bold text-xs border-b border-chinese-red/20 pb-2">Production</h2>
              <ul className="space-y-4">
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Historical Research Archive</button></li>
                <li><button className="text-neutral-400 hover:text-white transition-colors text-left uppercase tracking-widest text-sm">Development Notes</button></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

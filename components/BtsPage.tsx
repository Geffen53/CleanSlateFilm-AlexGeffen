import * as React from 'react';

export default function BtsPage(): React.ReactElement {
  const btsPhotos = [
    { title: 'Internment Camp Set Construction', caption: 'Recreating the challenging conditions of the internment camps with historical accuracy.' },
    { title: 'Lead Actors & Director', caption: 'The cast and director discussing the emotional weight of a pivotal scene.' },
    { title: 'The Internment Camp Arrival', caption: 'Preparing for the powerful scenes depicting the family’s arrival at the camp.' },
    { title: 'Cinematic Visuals', caption: 'Ensuring the visual tone reflects both the harsh reality of the camps and the resilience of the family.' },
    { title: 'Cast Gathering', caption: 'A candid moment with the cast dedicated to telling this important historical story.' },
    { title: 'Soundtrack Recording', caption: 'Recording the moving orchestral score that underscores the film’s emotional depth.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-screen relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9] uppercase">
            Behind <br /> the <span className="text-chinese-red">Scenes</span>
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xl font-normal leading-relaxed max-w-3xl">
            A rare look into the production of <span className="text-chinese-red font-medium">Enemy Alien</span>, from the massive studio sets to the intimate moments on set.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {btsPhotos.map((photo, idx) => (
            <div key={idx} className="reveal-up active group" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-gold/10 relative shadow-xl hover:border-chinese-red/20 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-center p-12 opacity-40 group-hover:opacity-100 transition-opacity">
                   <p className="text-[10px] uppercase tracking-[0.6em] text-chinese-red font-bold">Archival Image Placeholder</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-chinese-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <h3 className="text-white text-xl font-normal mb-2 uppercase tracking-tight">{photo.title}</h3>
                  <p className="text-white/80 text-[10px] uppercase tracking-widest leading-relaxed font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-24 bg-neutral-50 dark:bg-neutral-900/40 rounded-[4rem] text-center reveal-up active border border-gold/10 relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-6xl mb-8 tracking-tighter text-neutral-900 dark:text-white">The Production <span className="text-chinese-red">Legacy</span></h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-[0.6em] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Enemy Alien is a powerful and technically ambitious production, utilizing historical research and detailed sets to bring this important story to a new generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-chinese-red text-white text-[10px] uppercase tracking-[0.6em] font-bold rounded-2xl shadow-xl transition-all border border-gold/20 hover:bg-red-700">
              Read Production Notes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

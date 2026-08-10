'use client';

import * as React from 'react';

const timelineEvents = [
  { year: "1941", event: "Japan attacks Pearl Harbor. Fear and suspicion spread across the United States." },
  { year: "1942", event: "Executive Order 9066 authorizes the forced removal of Japanese Americans from the West Coast." },
  { year: "1942–1945", event: "More than 120,000 people are incarcerated in government camps across the country." },
  { year: "1945", event: "World War II ends and the camps begin to close." },
  { year: "1946–1960s", event: "Former internees rebuild their lives while many avoid discussing the trauma of incarceration." },
  { year: "1980", event: "The U.S. government establishes the Commission on Wartime Relocation and Internment of Civilians to investigate the events of World War II." },
  { year: "1988", event: "President Ronald Reagan signs the Civil Liberties Act, formally apologizing for the incarceration and providing reparations to survivors." }
];

const locations = [
  {
    name: "Santa Anita Assembly Center",
    description: "A former racetrack converted into temporary housing for thousands of Japanese Americans. Families were forced to live in converted horse stalls while awaiting relocation to permanent camps."
  },
  {
    name: "Manzanar",
    description: "Located in the California desert, Manzanar became one of the most well-known incarceration camps. Harsh conditions and rising tensions led to violent clashes between internees and military police."
  },
  {
    name: "Tule Lake",
    description: "Originally a relocation center, Tule Lake later became a segregation camp for those labeled disloyal. It became the most volatile camp in the system."
  }
];

export default function HistoryPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] min-h-screen transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-8 text-neutral-900 dark:text-white tracking-tighter uppercase">
          Historical <span className="text-chinese-red">Archive</span>
        </h1>

        {/* Timeline */}
        <section id="timeline" className="mb-32 scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            Historical <span className="text-chinese-red">Timeline</span>
          </h2>
          <div className="space-y-8">
            {timelineEvents.map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                <div className="font-display text-3xl text-chinese-red font-bold w-48 shrink-0">{item.year}</div>
                <div className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="mb-32 scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            The <span className="text-chinese-red">Camps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="p-8 bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">{loc.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            Historical <span className="text-chinese-red">Research</span>
          </h2>
          <div className="bg-white/50 dark:bg-neutral-900 p-12 border border-neutral-200 dark:border-neutral-800 rounded-sm">
            <div className="max-w-3xl space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p>
                Enemy Alien is based on extensive historical research into the incarceration of Japanese Americans during World War II.
              </p>
              <p>
                Sources include government records, historical archives, oral histories from survivors, and academic scholarship documenting the experiences of those held in assembly centers and relocation camps.
              </p>
              <p>
                The series aims to portray the complexity of this history while remaining faithful to the lived experiences of those affected.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

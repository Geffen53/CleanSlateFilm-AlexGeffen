'use client';

import * as React from 'react';

const mainCharacters = [
  {
    name: "Harry Senzaki",
    role: "The Survivor",
    description: "A young Japanese American whose faith in his country is shaken when he is forced into incarceration. Harry’s journey spans decades as he grapples with anger, silence, and ultimately the responsibility to speak about the past."
  },
  {
    name: "Ken Senzaki",
    role: "The Pragmatist",
    description: "Harry’s older brother. Pragmatic and protective of his family, Ken believes cooperation with authorities is the only way to survive."
  },
  {
    name: "Yoshi Senzaki",
    role: "The Patriarch",
    description: "The family patriarch and an immigrant who has spent decades building a life in America. His arrest after Pearl Harbor becomes the catalyst that changes everything."
  },
  {
    name: "Amiko Senzaki",
    role: "The Anchor",
    description: "The emotional center of the family. Through war, incarceration, and the difficult years after release, she struggles to hold the family together."
  }
];

const communityCharacters = [
  {
    name: "Kimiko",
    description: "A young woman searching for hope in the middle of uncertainty. Her optimism challenges Harry’s growing anger."
  },
  {
    name: "Hayashi",
    description: "A veteran who once served the United States military. His incarceration forces him to question everything he believed about loyalty and citizenship."
  },
  {
    name: "Ichiro",
    description: "Harry’s closest friend inside the camps. Humor and defiance help him survive the chaos around them."
  }
];

export default function CharactersPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-8 text-neutral-900 dark:text-white tracking-tighter uppercase">
          The <span className="text-chinese-red">Characters</span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl leading-relaxed">
          At the center of Enemy Alien is a family struggling to navigate loyalty, identity, and survival during one of the most turbulent periods in American history.
        </p>

        {/* Main Characters */}
        <section id="main" className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            The <span className="text-chinese-red">Senzaki Family</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainCharacters.map((char) => (
              <div key={char.name} className="p-10 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] border border-neutral-200 dark:border-neutral-800 rounded-sm group hover:border-chinese-red/50 transition-colors">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{char.name}</h3>
                <p className="text-chinese-red uppercase tracking-[0.3em] text-[10px] font-bold mb-6">{char.role}</p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{char.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community */}
        <section id="community" className="scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            The <span className="text-chinese-red">Community</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityCharacters.map((char) => (
              <div key={char.name} className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-sm">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">{char.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{char.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

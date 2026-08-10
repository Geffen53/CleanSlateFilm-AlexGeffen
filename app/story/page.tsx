'use client';

import * as React from 'react';
import EpisodeList from '@/components/EpisodeList';

export default function StoryPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[var(--color-desert-sand)] dark:bg-[var(--color-desert-night)] min-h-screen transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto">
        {/* Overview Section */}
        <section id="overview" className="mb-32">
          <h1 className="font-display text-5xl md:text-7xl mb-8 text-neutral-900 dark:text-white tracking-tighter uppercase">
            The <span className="text-chinese-red">Story</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="text-2xl font-light italic text-neutral-900 dark:text-white border-l-4 border-chinese-red pl-6">
                Enemy Alien is a ten-episode historical limited series that examines one of the most consequential civil liberties violations in American history.
              </p>
              <p>
                Following the attack on Pearl Harbor, more than 120,000 Japanese Americans were removed from their homes and placed into incarceration camps across the United States. Entire communities were uprooted, families separated, and citizens labeled enemies by their own government.
              </p>
              <p>
                The series follows the Senzaki family as they navigate incarceration, internal divisions within the camps, and the long road toward justice that unfolds decades later.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Phases */}
        <section className="mb-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            Narrative <span className="text-chinese-red">Phases</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
              <h3 className="text-chinese-red uppercase tracking-[0.3em] text-xs font-bold mb-2">Part One</h3>
              <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Incarceration</h4>
              <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">1941–1945</p>
              <p className="text-neutral-600 dark:text-neutral-400">The Senzaki family is forced into assembly centers and relocation camps where tensions between loyalty, resistance, and survival threaten to tear the community apart.</p>
            </div>
            <div className="p-8 bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
              <h3 className="text-chinese-red uppercase tracking-[0.3em] text-xs font-bold mb-2">Part Two</h3>
              <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Silence</h4>
              <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">1945–1960s</p>
              <p className="text-neutral-600 dark:text-neutral-400">When the war ends, former internees return to communities that have moved on without them. Many choose silence in order to rebuild their lives.</p>
            </div>
            <div className="p-8 bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
              <h3 className="text-chinese-red uppercase tracking-[0.3em] text-xs font-bold mb-2">Part Three</h3>
              <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Redress</h4>
              <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">1970s–1988</p>
              <p className="text-neutral-600 dark:text-neutral-400">A new generation begins to demand accountability. Survivors are called to testify about the past, culminating in a national reckoning and the passage of historic legislation.</p>
            </div>
          </div>
        </section>

        {/* Episode Guide */}
        <section id="episodes" className="mb-32 scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest text-center">
            Episode <span className="text-chinese-red">Guide</span>
          </h2>
          <EpisodeList />
        </section>

        {/* Themes Section */}
        <section id="themes" className="scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-neutral-900 dark:text-white uppercase tracking-widest">
            Key <span className="text-chinese-red">Themes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Loyalty and Identity</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">What does it mean to remain loyal to a nation that has imprisoned you?</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Silence and Memory</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">For decades after the war, many former internees chose not to speak about their experiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Community Division</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">Inside the camps, differing views on resistance and survival fractured families and friendships.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Justice and Accountability</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">The fight for redress forced the United States to confront a difficult chapter in its history.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import * as React from 'react';

const episodes = [
    {
        id: 1,
        title: "Santa Anita",
        synopsis: "Following Pearl Harbor, the Senzaki family is forced from their home and into an assembly center where tensions quickly escalate."
    },
    {
        id: 2,
        title: "Manzanar",
        synopsis: "Transfer to a desert camp exposes new divisions within the community."
    },
    {
        id: 3,
        title: "Loyalty",
        synopsis: "A controversial questionnaire forces internees to declare their allegiance."
    },
    {
        id: 4,
        title: "Segregation",
        synopsis: "Families are divided as those labeled disloyal are sent to Tule Lake."
    },
    {
        id: 5,
        title: "War’s End",
        synopsis: "As World War II ends, the camps close and survivors face an uncertain future."
    },
    {
        id: 6,
        title: "Starting Over",
        synopsis: "Returning home proves far more difficult than anyone imagined."
    },
    {
        id: 7,
        title: "The Next Generation",
        synopsis: "Young activists begin questioning the silence surrounding incarceration."
    },
    {
        id: 8,
        title: "Breaking the Silence",
        synopsis: "Survivors testify before a government commission investigating the wartime camps."
    },
    {
        id: 9,
        title: "The Political Fight",
        synopsis: "A national debate emerges over apology and reparations."
    },
    {
        id: 10,
        title: "Civil Liberties Act",
        synopsis: "Decades after the war, the United States government finally acknowledges the injustice."
    }
];

export default function EpisodeList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
                <div key={episode.id} className="reveal-up group relative bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-500 rounded-sm">
                    <div className="absolute top-0 right-0 p-4 opacity-5 font-display text-8xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:opacity-10 transition-opacity select-none">
                        {episode.id}
                    </div>
                    <h3 className="text-chinese-red uppercase tracking-[0.3em] text-[10px] font-bold mb-3">Episode {episode.id}</h3>
                    <h2 className="font-display text-2xl text-neutral-900 dark:text-white mb-4 transition-colors group-hover:text-chinese-red">{episode.title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{episode.synopsis}</p>
                </div>
            ))}
        </div>
    );
}

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';

interface BlogPageProps {
  onNavigate?: (path: string) => void;
}

interface BlogSection {
  header?: string;
  text: string[];
  mediaTitle?: string;
}

interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  sections: BlogSection[];
  quote?: string;
}

const articles: Article[] = [
  {
    id: 'historical-impact',
    title: 'The Historical Impact of Enemy Alien',
    date: 'February 2026',
    excerpt: 'Exploring the Yamamoto family’s journey and the enduring legacy of Japanese-American resilience during WWII.',
    sections: [
      {
        text: [
          'Enemy Alien stands as a powerful testament to Japanese-American history. The film provides a poignant look into the lives of the Yamamoto family and thousands of others during the WWII internment.',
          'The film provides an essential look into the lives of Japanese-Americans, balancing the pain of injustice with the strength of family and community.',
        ],
        mediaTitle: 'Historical archival documents',
      },
      {
        header: 'A Story of Resilience',
        text: [
          'The struggle for dignity and justice in the face of wartime hysteria remains a powerful theme that resonates today.',
          'The Yamamoto family represents the resilience of the human spirit when faced with the loss of freedom and home.',
        ],
      },
    ],
    quote: 'A story of resilience that transcends tragedy.',
  },
  {
    id: 'the-yamamoto-family-story',
    title: 'The Moving Story of the Yamamoto Family',
    date: 'January 2026',
    excerpt: 'A deep dive into the historical research and true stories that shaped this moving drama.',
    sections: [
      {
        text: [
          'From the quiet moments of family life to the stark reality of the camps, Enemy Alien is a testament to the resilience of the Yamamoto family.',
          'The narrative drives the emotional journey of every character, highlighting their strength and perseverance.',
        ],
        mediaTitle: 'Production stills and research notes',
      },
    ],
    quote: 'A history that must be remembered.',
  },
];

export default function BlogPage({ onNavigate }: BlogPageProps): React.ReactElement {
  const params = useParams();
  const id = params?.id as string | undefined;
  const router = useRouter();
  const article = articles.find(a => a.id === id);

  const handleContact = () => {
    if (onNavigate) onNavigate('/contact');
    else router.push('/contact');
  };

  const handleArticleClick = (articleId: string) => {
    if (onNavigate) onNavigate(`/blog/${articleId}`);
    else router.push(`/blog/${articleId}`);
  };

  if (id && article) {
    return (
      <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-chinese-red mb-6 block font-bold">{article.date}</span>
            <h1 className="font-display text-4xl md:text-7xl font-normal tracking-tighter text-neutral-900 dark:text-white leading-[0.9] mb-12 max-w-4xl uppercase">
              {article.title}
            </h1>
          </header>

          <div className="space-y-24">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-12">
                {section.header ? (
                  <h2 className="font-display text-3xl md:text-5xl text-neutral-900 dark:text-white tracking-tighter border-b border-gold/20 pb-4">
                    {section.header}
                  </h2>
                ) : null}

                <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:col-span-7 space-y-8 ${idx % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                    {section.text.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-800 dark:text-neutral-300 font-normal leading-relaxed text-xl">
                        {p}
                      </p>
                    ))}
                  </div>

                  {section.mediaTitle ? (
                    <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-900 shadow-xl hover:scale-[1.02] transition-transform duration-700 border border-gold/10">
                        <div className="w-full h-full flex items-center justify-center text-center px-10">
                          <p className="text-[10px] uppercase tracking-[0.5em] text-chinese-red font-bold leading-relaxed">
                            {section.mediaTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                {idx === 0 && article.quote ? (
                  <div className="my-20 p-12 md:p-16 bg-neutral-50 dark:bg-neutral-900/40 rounded-[3rem] border border-gold/10 text-center">
                    <p className="font-display text-3xl md:text-5xl text-chinese-red leading-[1.1] italic max-w-4xl mx-auto">
                      "{article.quote}"
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                      <div className="h-[1px] w-8 bg-gold"></div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-gold-muted font-bold">Historical Perspective</span>
                      <div className="h-[1px] w-8 bg-gold"></div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-gold/20 text-center">
            <h2 className="font-display text-4xl md:text-6xl mb-10 text-neutral-900 dark:text-white tracking-tighter">
              Experience the <br className="hidden md:block" />
              <span className="text-chinese-red">story</span>.
            </h2>
            <button
              onClick={handleContact}
              className="px-12 py-6 bg-chinese-red text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:tracking-[0.8em] transition-all rounded-full shadow-2xl border border-gold/20"
            >
              Get Updates
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9] uppercase">
            Film <br />
            <span className="text-chinese-red">Blog</span>
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xl font-normal leading-relaxed max-w-3xl">
            Insights into the production, history, and legacy of Enemy Alien.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 reveal-up active">
          {articles.map((a) => (
            <button
              key={a.id}
              onClick={() => handleArticleClick(a.id)}
              className="group text-left border border-gold/10 p-8 md:p-12 hover:bg-chinese-red/[0.02] dark:hover:bg-chinese-red/[0.05] transition-all duration-500 rounded-[2.5rem] flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] mb-8 bg-neutral-100 dark:bg-neutral-900 border border-gold/10">
                <div className="w-full h-full flex items-center justify-center text-center px-10">
                  <p className="text-[9px] uppercase tracking-[0.5em] text-chinese-red leading-relaxed font-bold">
                    {a.title}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] uppercase tracking-[0.4em] text-gold-muted font-bold">{a.date}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-neutral-900 dark:text-white group-hover:text-chinese-red transition-all leading-tight">
                {a.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mb-8 uppercase tracking-widest text-[10px] line-clamp-2">
                {a.excerpt}
              </p>
              <div className="mt-auto">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-chinese-red/20 pb-2 group-hover:border-chinese-red transition-all text-chinese-red">
                  Read Article
                </span>
              </div>
            </button>
          ))}
        </div>

        <section className="mt-24 bg-neutral-50 dark:bg-neutral-900/30 p-12 md:p-24 text-center reveal-up active rounded-[3rem] border border-gold/10">
          <h2 className="font-display text-4xl md:text-7xl mb-8 text-neutral-900 dark:text-white tracking-tighter leading-none">
            Stay <br className="hidden md:block" />
            <span className="text-chinese-red">Connected</span>.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal mb-12 max-w-xl mx-auto uppercase tracking-[0.4em] text-xs">
            Join our mailing list to receive exclusive content and updates about the film.
          </p>
          <button
            onClick={handleContact}
            className="px-12 py-6 bg-chinese-red text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:tracking-[0.8em] transition-all rounded-full shadow-2xl border border-gold/20"
          >
            Subscribe
          </button>
        </section>
      </div>
    </div>
  );
}

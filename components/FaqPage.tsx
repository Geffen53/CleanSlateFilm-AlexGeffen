import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function FaqPage(): React.ReactElement {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const router = useRouter();

  const faqs = [
    {
      question: 'Where can I watch Enemy Alien?',
      answer:
        'The film is available on various streaming platforms, digital retailers, and educational cinema collections. Check your local listings for theatrical screenings and special events.',
    },
    {
      question: 'Is there a digital restoration available?',
      answer:
        'Yes, the film has been released in 4K high-definition, capturing every detail of the historical period and its emotional depth.',
    },
    {
      question: 'What awards did the film win?',
      answer:
        'The film has received critical acclaim for its portrayal of Japanese-American history and resilience. It remains a powerful exploration of the internment camp experience.',
    },
    {
      question: 'Who are the lead actors?',
      answer:
        "The film stars an ensemble cast portraying the Yamamoto family's journey through the injustices of WWII internment.",
    },
    {
      question: 'What is the historical basis for the film?',
      answer:
        "The film is based on true accounts and historical records of the Japanese-American internment during World War II, focusing on the Yamamoto family's resilience.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="mb-20 reveal-up active">
          <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9] uppercase">
            Frequently <br />
            Asked <span className="text-chinese-red">Questions</span>
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xl font-normal leading-relaxed max-w-3xl">
            Information regarding the film, its production, and where to experience it.
          </p>
        </header>

        <div className="max-w-4xl space-y-4 reveal-up active">
          {faqs.map((faq, index) => (
            <div key={index} className="group border-b border-gold/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full py-8 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                <h2
                  className={`text-[11px] md:text-xs uppercase tracking-[0.5em] font-bold transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-chinese-red'
                      : 'text-neutral-400 dark:text-neutral-500 group-hover:text-chinese-red'
                  }`}
                >
                  {faq.question}
                </h2>
                <div className={`ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-chinese-red' : 'text-gold'}`} aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 bg-neutral-50 dark:bg-neutral-900/40 p-12 border border-gold/10 shadow-sm text-center reveal-up active rounded-[2.5rem] relative overflow-hidden">
          <h2 className="font-display text-3xl mb-6 text-neutral-900 dark:text-white transition-colors duration-500">More Questions?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-normal mb-8 max-w-xl mx-auto uppercase tracking-widest text-xs">
            Reach out to our team for media inquiries and screening requests.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="px-10 py-5 bg-chinese-red text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:tracking-[0.7em] hover:bg-red-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 rounded-sm border border-gold/20 shadow-xl"
          >
            Contact Us
          </button>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

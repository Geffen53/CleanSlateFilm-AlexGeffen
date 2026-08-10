import * as React from 'react';

export default function WatchPage(): React.ReactElement {
  const [activeCity, setActiveCity] = React.useState('Los Angeles');

  const streamingPlatforms = [
    { name: 'Amazon Prime Video', type: 'SVOD / Buy / Rent', link: '#' },
    { name: 'Apple TV', type: 'Buy / Rent', link: '#' },
    { name: 'YouTube Movies', type: 'Buy / Rent', link: '#' },
    { name: 'Vudu', type: 'Buy / Rent', link: '#' },
    { name: 'Google Play', type: 'Buy / Rent', link: '#' },
  ];

  const theatricalScreenings = [
    { city: 'Los Angeles', location: 'TCL Chinese Theatre', date: 'March 15, 2026', time: '7:30 PM', link: '#' },
    { city: 'Los Angeles', location: 'The Egyptian Theatre', date: 'March 16, 2026', time: '8:00 PM', link: '#' },
    { city: 'Los Angeles', location: 'Academy Museum', date: 'March 18, 2026', time: '2:00 PM', link: '#' },
    { city: 'New York', location: 'Film Forum', date: 'March 22, 2026', time: '8:00 PM', link: '#' },
    { city: 'New York', location: 'Lincoln Center', date: 'March 23, 2026', time: '6:30 PM', link: '#' },
    { city: 'New York', location: 'Metrograph', date: 'March 25, 2026', time: '9:00 PM', link: '#' },
    { city: 'San Francisco', location: 'Castro Theatre', date: 'April 5, 2026', time: '7:00 PM', link: '#' },
    { city: 'San Francisco', location: 'Roxie Theater', date: 'April 6, 2026', time: '7:30 PM', link: '#' },
    { city: 'San Francisco', location: 'SFMOMA', date: 'April 8, 2026', time: '1:00 PM', link: '#' },
  ];

  const cities = Array.from(new Set(theatricalScreenings.map(s => s.city)));
  const filteredScreenings = theatricalScreenings.filter(s => s.city === activeCity);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-12 reveal-up active">
          <h1 className="font-display text-5xl md:text-7xl font-normal tracking-tighter mb-6 text-neutral-900 dark:text-white leading-[0.9] uppercase">
            Watch Now
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg font-normal leading-relaxed max-w-2xl">
            Experience the moving story and historical significance of Enemy Alien on the big screen or from the comfort of your home.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Digital Streaming Section */}
          <section className="lg:col-span-4 reveal-up active">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[9px] uppercase tracking-[0.5em] text-chinese-red font-bold whitespace-nowrap">
                Stream / Rent / Buy
              </h2>
              <div className="h-px w-full bg-gold/20"></div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900/40 rounded-3xl border border-gold/10 p-2 shadow-sm overflow-hidden">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  className="flex items-center justify-between p-4 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 group rounded-2xl"
                >
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-chinese-red transition-colors">{platform.name}</h3>
                    <p className="text-[9px] uppercase tracking-widest text-gold-muted font-bold mt-0.5">{platform.type}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold/50 group-hover:text-chinese-red transition-colors">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </section>

          {/* Theatrical Section */}
          <section className="lg:col-span-8 reveal-up active">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-[9px] uppercase tracking-[0.5em] text-chinese-red font-bold whitespace-nowrap">
                  Theatrical Showtimes
                </h2>
                <div className="h-px w-full bg-gold/20"></div>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {cities.map(city => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all whitespace-nowrap border ${
                      activeCity === city 
                        ? 'bg-chinese-red text-white border-chinese-red' 
                        : 'bg-transparent text-gold-muted border-gold/20 hover:border-gold'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gold/10 bg-neutral-50 dark:bg-neutral-900/40 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gold/10">
                      <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-gold-muted font-bold">Venue</th>
                      <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-gold-muted font-bold">Date & Time</th>
                      <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-gold-muted font-bold text-right">Tickets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/5">
                    {filteredScreenings.map((screening, idx) => (
                      <tr key={idx} className="group hover:bg-white dark:hover:bg-neutral-800 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-chinese-red transition-colors">{screening.location}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[11px] text-neutral-600 dark:text-neutral-400 whitespace-nowrap">{screening.date} <span className="text-gold mx-2">•</span> {screening.time}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a 
                            href={screening.link}
                            className="inline-block px-5 py-2 bg-chinese-red/10 hover:bg-chinese-red text-chinese-red hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold rounded-lg transition-all whitespace-nowrap"
                          >
                            Reserve
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="p-10 md:p-16 bg-neutral-100 dark:bg-black text-neutral-900 dark:text-white rounded-[3rem] text-center reveal-up active border border-gold/20 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(211,47,47,0.1),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1),_transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl mb-6 tracking-tighter">Bring the <span className="text-chinese-red">Magic</span> Home</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-[0.5em] mb-8 max-w-lg mx-auto leading-relaxed">
              Available on 4K Ultra HD, Blu-ray, and DVD with exclusive behind-the-scenes content.
            </p>
            <button className="px-10 py-4 bg-chinese-red text-white text-[10px] uppercase tracking-[0.5em] font-bold rounded-full hover:bg-red-700 transition-all border border-gold/20 shadow-xl">
              Order Physical Edition
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

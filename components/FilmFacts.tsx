import { film } from '@/data/film';

export default function FilmFacts() {
  return (
    <dl className="grid grid-cols-2 gap-x-5 sm:grid-cols-3 lg:grid-cols-4">
      {film.facts.map(([label, value]) => (
        <div key={label} className="border-t border-line py-2.5">
          <dt className="section-kicker mb-1">{label}</dt>
          <dd className="text-xs leading-5 sm:text-sm">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

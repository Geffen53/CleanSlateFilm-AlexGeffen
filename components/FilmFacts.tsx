import { film } from '@/data/film';

export default function FilmFacts() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
      {film.facts.map(([label, value]) => (
        <div key={label} className="border-t border-line py-5">
          <dt className="eyebrow mb-2">{label}</dt>
          <dd className="text-sm leading-6">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

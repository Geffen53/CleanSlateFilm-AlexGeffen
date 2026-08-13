import { producerGroups } from '@/data/producers';

export default function ProducerSection() {
  return (
    <section className="section-rule py-9 md:py-12">
      <div className="page-shell">
        <h2 className="section-title">Producers</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {producerGroups.map((group) => (
            <div key={group.role}>
              <h3 className="text-sm font-semibold text-muted">{group.role}</h3>
              <ul className="mt-3 space-y-2">
                {group.names.map((name) => <li key={name} className="text-sm leading-6">{name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

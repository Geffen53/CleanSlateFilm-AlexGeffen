import Image from 'next/image';
import Link from 'next/link';
import type { Person } from '@/data/types';

export default function PersonTile({ person, href, showBio = true }: { person: Person; href?: string; showBio?: boolean }) {
  const portrait = (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy/10">
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover grayscale-[0.12] transition duration-700 group-hover:scale-[1.025]"
          style={{ objectPosition: person.imagePosition ?? 'center' }}
        />
      ) : (
        <div className="flex h-full items-end bg-navy p-6 text-paper"><span className="wordmark text-4xl">CS</span></div>
      )}
    </div>
  );

  return (
    <article className="group">
      {href ? <Link href={href} aria-label={`View ${person.name}'s profile`}>{portrait}</Link> : portrait}
      <div className="pt-4">
        <p className="text-xs font-medium leading-5 text-muted sm:text-sm">{person.role}</p>
        <h3 className="mt-1 break-words text-base font-semibold leading-tight tracking-tight sm:text-xl">
          {href ? <Link href={href} className="hover:text-navy dark:hover:text-accent">{person.name}</Link> : person.name}
        </h3>
        {person.knownFor && <p className="mt-2 text-xs leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">{person.knownFor}</p>}
        {showBio && <p className="mt-3 text-xs leading-6 text-muted sm:mt-4 sm:text-sm sm:leading-7">{person.bio}</p>}
      </div>
    </article>
  );
}

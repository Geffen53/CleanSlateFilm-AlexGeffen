import Image from 'next/image';
import Link from 'next/link';
import type { PersonPreview } from '@/data/people';

export default function PersonTile({ person, href, showRole = true }: { person: PersonPreview; href?: string; showRole?: boolean }) {
  const portrait = (
    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 28vw, 45vw"
          quality={90}
          className="object-cover object-top grayscale-[0.12] transition duration-700"
        />
      ) : (
        <div className="flex h-full items-end bg-navy p-6 text-paper"><span className="wordmark text-4xl">CS</span></div>
      )}
    </div>
  );

  return (
    <article className="group">
      {href ? <Link href={href} prefetch={false} aria-label={`View ${person.name}'s profile`}>{portrait}</Link> : portrait}
      <div className="pt-2.5">
        {showRole && <p className="text-[0.68rem] font-medium leading-4 text-muted sm:text-xs">{person.role}</p>}
        <h3 className="mt-1 break-words text-sm font-semibold leading-tight sm:text-lg">
          {href ? <Link href={href} prefetch={false} className="rounded-sm transition hover:text-navy dark:hover:text-accent">{person.name}</Link> : person.name}
        </h3>
        {person.knownFor && <p className="mt-1.5 text-[0.68rem] leading-4 text-muted sm:text-xs sm:leading-5">{person.knownFor}</p>}
      </div>
    </article>
  );
}

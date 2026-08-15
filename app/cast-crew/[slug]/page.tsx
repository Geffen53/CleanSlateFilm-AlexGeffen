import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allPeople, findPersonBySlug, getPersonSlug } from '@/data/people';

type ProfilePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPeople.map((person) => ({ slug: getPersonSlug(person) }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = findPersonBySlug(slug);
  return person ? { title: person.name, description: `${person.name}, ${person.role} on Clean Slate.` } : {};
}

export default async function CastProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const person = findPersonBySlug(slug);
  if (!person) notFound();

  return (
    <article className="page-shell pb-12 pt-20 md:pt-24">
      <Link href="/cast-crew" prefetch={false} className="compact-link -ml-2">← Cast & Crew</Link>
      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
          {person.image ? (
            <Image src={person.image} alt={person.name} fill priority quality={90} sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-top" />
          ) : (
            <div className="flex h-full items-end bg-navy p-8 text-paper"><span className="wordmark text-5xl">CS</span></div>
          )}
        </div>
        <div className="lg:pt-4">
          <p className="text-sm font-medium text-muted">{person.role}</p>
          <h1 className="display-title mt-1">{person.name}</h1>
          {person.knownFor && <p className="mt-4 text-base leading-6 text-muted">{person.knownFor}</p>}
          <div className="mt-7 border-t border-line pt-5">
            <h2 className="text-lg font-semibold">Biography</h2>
            <p className="body-copy mt-3">{person.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

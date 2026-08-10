import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cast } from '@/data/cast';

type ProfilePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cast.map((person) => ({ slug: person.slug! }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = cast.find((member) => member.slug === slug);
  return person ? { title: person.name, description: `${person.name} plays ${person.role} in Clean Slate.` } : {};
}

export default async function CastProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const person = cast.find((member) => member.slug === slug);
  if (!person) notFound();

  return (
    <article className="page-shell pb-24 pt-32 md:pb-32 md:pt-40">
      <Link href="/cast-crew" className="text-sm font-semibold text-muted hover:text-ink">← Cast & Crew</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy/10">
          <Image src={person.image!} alt={person.name} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" style={{ objectPosition: person.imagePosition ?? 'center' }} />
        </div>
        <div className="lg:pt-8">
          <p className="text-base font-medium text-muted">{person.role}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">{person.name}</h1>
          {person.knownFor && <p className="mt-6 text-lg leading-8 text-muted">{person.knownFor}</p>}
          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-xl font-semibold">Biography</h2>
            <p className="body-copy mt-5">{person.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

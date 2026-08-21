import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cast } from '@/data/cast';
import { allPeople, findPersonBySlug, findPersonProfileBySlug, getPersonProfiles, getPersonSlug } from '@/data/people';

type ProfilePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const profileSlugs = getPersonProfiles().map((profile) => ({ slug: profile.name.toLowerCase().replaceAll(' ', '-') }));
  const profileNames = new Set(getPersonProfiles().map((profile) => profile.name));
  return [...profileSlugs, ...allPeople.filter((person) => !profileNames.has(person.name)).map((person) => ({ slug: getPersonSlug(person) }))];
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = findPersonProfileBySlug(slug);
  const person = profile ? undefined : findPersonBySlug(slug);
  return profile ? { title: profile.name, description: `${profile.name}, cast and crew on Clean Slate.` } : person ? { title: person.name, description: `${person.name}, ${person.role} on Clean Slate.` } : {};
}

export default async function CastProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = findPersonProfileBySlug(slug);
  const person = profile ? undefined : findPersonBySlug(slug);
  if (!profile && !person) notFound();

  if (profile) {
    return (
      <article className="page-shell pb-12 pt-20 md:pt-24">
        <Link href="/cast-crew" prefetch={false} className="compact-link -ml-2">← Cast & Crew</Link>
        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
            <Image src={profile.image!} alt={profile.name} fill priority quality={90} sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-top" />
          </div>
          <div className="lg:pt-4">
            <h1 className="display-title">{profile.name}</h1>
            {profile.knownFor && <p className="mt-4 text-base leading-6 text-muted">{profile.knownFor}</p>}
            <div className="mt-7 space-y-7 border-t border-line pt-5">
              {profile.roles.map((role, index) => {
                const castRole = cast.some((castMember) => castMember === role);
                const displayName = index === 0 ? profile.name : 'Alex';
                const bio = index === 0 ? role.bio : role.bio.replaceAll(profile.name, displayName);
                return <section key={`${role.role}-${role.bio}`}><h2 className="text-lg font-semibold">{castRole ? `${displayName} as ${role.role}` : role.role}</h2><p className="body-copy mt-3">{bio}</p></section>;
              })}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="page-shell pb-12 pt-20 md:pt-24">
      <Link href="/cast-crew" prefetch={false} className="compact-link -ml-2">← Cast & Crew</Link>
      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
          {person!.image ? (
            <Image src={person!.image} alt={person!.name} fill priority quality={90} sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-top" />
          ) : (
            <div className="flex h-full items-end bg-navy p-8 text-paper"><span className="wordmark text-5xl">CS</span></div>
          )}
        </div>
        <div className="lg:pt-4">
          <p className="text-sm font-medium text-muted">{person!.role ? `${person!.name} as ${person!.role}` : 'Actor'}</p>
          <h1 className="display-title mt-1">{person!.name}</h1>
          {person!.knownFor && <p className="mt-4 text-base leading-6 text-muted">{person!.knownFor}</p>}
          <div className="mt-7 border-t border-line pt-5">
            <h2 className="text-lg font-semibold">Biography</h2>
            <p className="body-copy mt-3">{person!.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

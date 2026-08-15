import { cast } from './cast';
import { crewDepartments } from './crew';
import { filmmakers } from './film';
import type { Person } from './types';

export type PersonPreview = Pick<Person, 'name' | 'role' | 'image' | 'imagePosition' | 'knownFor'>;
export type PersonProfile = { name: string; image?: string; imagePosition?: string; knownFor?: string; roles: Person[] };

export const crew = crewDepartments.flatMap((department) => department.people);
export const allPeople = [...cast, ...crew];
const canonicalProfileNames = new Set(['Alex Geffen', 'Cass Huckabay']);
const profileSources = [...cast, ...crew, ...filmmakers];

function slugify(value: string) {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getPersonSlug(person: Person) {
  if (canonicalProfileNames.has(person.name)) return slugify(person.name);
  if (person.slug) return person.slug;
  const nameSlug = slugify(person.name);
  return cast.some((member) => member.name === person.name) ? `${nameSlug}-${slugify(person.role)}` : nameSlug;
}

export function getPersonProfiles(): PersonProfile[] {
  return [...canonicalProfileNames].map((name) => {
    const roles = profileSources.filter((person) => person.name === name);
    const castEntry = cast.find((person) => person.name === name);
    return { name, image: castEntry?.image, imagePosition: castEntry?.imagePosition, knownFor: castEntry?.knownFor, roles };
  });
}

export function findPersonProfileBySlug(slug: string) {
  return getPersonProfiles().find((profile) => slugify(profile.name) === slug);
}

export function getPersonPreview({ name, role, image, imagePosition, knownFor }: Person): PersonPreview {
  return { name, role, image, imagePosition, knownFor };
}

export function findPersonBySlug(slug: string) {
  return allPeople.find((person) => getPersonSlug(person) === slug) ?? profileSources.find((person) => getPersonSlug(person) === slug);
}

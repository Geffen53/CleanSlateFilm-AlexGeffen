import { cast } from './cast';
import { crewDepartments } from './crew';
import type { Person } from './types';

export type PersonPreview = Pick<Person, 'name' | 'role' | 'image' | 'imagePosition' | 'knownFor'>;

export const crew = crewDepartments.flatMap((department) => department.people);
export const allPeople = [...cast, ...crew];

function slugify(value: string) {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getPersonSlug(person: Person) {
  if (person.slug) return person.slug;
  const nameSlug = slugify(person.name);
  return cast.some((member) => member.name === person.name) ? `${nameSlug}-${slugify(person.role)}` : nameSlug;
}

export function getPersonPreview({ name, role, image, imagePosition, knownFor }: Person): PersonPreview {
  return { name, role, image, imagePosition, knownFor };
}

export function findPersonBySlug(slug: string) {
  return allPeople.find((person) => getPersonSlug(person) === slug);
}

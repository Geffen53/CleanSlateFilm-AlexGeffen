import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import PersonTile from '@/components/PersonTile';
import Reveal from '@/components/Reveal';
import { cast } from '@/data/cast';
import { crewDepartments } from '@/data/crew';
import { getPersonPreview, getPersonSlug } from '@/data/people';

export const metadata: Metadata = { title: 'Cast & Crew', description: 'Meet the cast and production team behind Clean Slate.' };

export default function CastCrewPage() {
  return (
    <>
      <PageIntro title="Cast & Crew" copy="Meet the performers and filmmakers who brought Clean Slate from the page to the screen." />
      <section className="bg-panel py-12 md:py-16">
        <div className="page-shell"><h2 className="section-title">Cast</h2><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">{cast.map((person) => <Reveal key={person.name}><PersonTile person={getPersonPreview(person)} href={`/cast-crew/${person.slug}`} /></Reveal>)}</div></div>
      </section>
      {crewDepartments.map((department, departmentIndex) => (
        <section key={department.name} className={`render-deferred section-rule py-12 md:py-16 ${departmentIndex % 2 ? 'bg-panel' : ''}`}>
          <div className="page-shell"><h2 className="section-title">{department.name}</h2><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">{department.people.map((person) => <PersonTile key={`${department.name}-${person.name}`} person={getPersonPreview(person)} href={`/cast-crew/${getPersonSlug(person)}`} />)}</div></div>
        </section>
      ))}
    </>
  );
}

import Image from 'next/image';
import type { Festival } from '@/data/types';

type FestivalCardProps = {
  festival: Festival;
  surface?: 'paper' | 'navy';
};

export default function FestivalCard({ festival, surface = 'paper' }: FestivalCardProps) {
  const imageClass = 'h-28 w-full object-contain object-center sm:h-32';
  const laurelLinkClass = 'block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current';

  const laurel = surface === 'navy' ? (
    <Image src={festival.laurelLight} alt={`${festival.name} ${festival.recognition} laurel`} width={720} height={320} className={imageClass} />
  ) : (
    <>
      <Image src={festival.laurelDark} alt={`${festival.name} ${festival.recognition} laurel`} width={720} height={320} className={`${imageClass} dark:hidden ${festival.name === 'Brooklyn SciFi Film Festival' ? 'brightness-0' : ''}`} />
      <Image src={festival.laurelLight} alt="" aria-hidden width={720} height={320} className={`${imageClass} hidden dark:block`} />
    </>
  );

  return (
    <article className={`${surface === 'navy' ? 'rounded-md bg-[#eee9d8]/[0.06]' : 'rounded-md bg-panel'} p-3.5 text-center`}>
      {festival.url ? (
        <a href={festival.url} target="_blank" rel="noreferrer" className={laurelLinkClass} aria-label={`Visit ${festival.name} website`}>
          {laurel}
        </a>
      ) : (
        laurel
      )}
      <p className={`mt-3 text-[0.68rem] font-medium ${surface === 'navy' ? 'text-[#eee9d8]/70' : 'text-muted'}`}>{festival.recognition}</p>
      <h3 className="mt-1 text-sm font-semibold leading-5">{festival.name}</h3>
      <p className={`mt-1.5 text-[0.68rem] leading-4 ${surface === 'navy' ? 'text-[#eee9d8]/65' : 'text-muted'}`}>
        {festival.location ? <>{festival.location}<br /></> : null}
        {festival.date}
      </p>
    </article>
  );
}

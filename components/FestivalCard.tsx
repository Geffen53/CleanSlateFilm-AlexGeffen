import Image from 'next/image';
import type { Festival } from '@/data/types';

type FestivalCardProps = {
  festival: Festival;
  surface?: 'paper' | 'navy';
};

export default function FestivalCard({ festival, surface = 'paper' }: FestivalCardProps) {
  const imageClass = 'h-28 w-full object-contain object-left sm:h-32';

  return (
    <article className={surface === 'navy' ? 'rounded-md bg-white/[0.06] p-5' : 'rounded-md bg-panel p-5'}>
      {surface === 'navy' ? (
        <Image src={festival.laurelLight} alt={`${festival.name} ${festival.recognition} laurel`} width={720} height={320} className={imageClass} />
      ) : (
        <>
          <Image src={festival.laurelDark} alt={`${festival.name} ${festival.recognition} laurel`} width={720} height={320} className={`${imageClass} dark:hidden`} />
          <Image src={festival.laurelLight} alt="" aria-hidden width={720} height={320} className={`${imageClass} hidden dark:block`} />
        </>
      )}
      <p className={`mt-4 text-xs font-medium ${surface === 'navy' ? 'text-white/70' : 'text-muted'}`}>{festival.recognition}</p>
      <h3 className="mt-2 text-base font-semibold leading-6">{festival.name}</h3>
      <p className={`mt-2 text-xs leading-5 ${surface === 'navy' ? 'text-white/65' : 'text-muted'}`}>
        {festival.location ? <>{festival.location}<br /></> : null}
        {festival.date}
      </p>
    </article>
  );
}

import Image from 'next/image';

export default function OfficialTitle({
  className = '',
  sizes = '100vw',
  priority = false,
  onLight = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLight?: boolean;
}) {
  return (
    <Image
      src="/media/clean-slate-title.png"
      alt="Clean Slate"
      width={1800}
      height={181}
      priority={priority}
      quality={90}
      sizes={sizes}
      className={`official-title ${onLight ? 'official-title-on-light' : ''} ${className}`.trim()}
    />
  );
}

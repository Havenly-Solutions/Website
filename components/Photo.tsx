import Image from 'next/image';

type Props = { src: string; alt: string; minHeight?: number; position?: string; sizes?: string };

export function Photo({ src, alt, minHeight = 340, position, sizes = '(max-width: 980px) 100vw, 50vw' }: Props) {
  return (
    <div className="fig-photo" style={{ minHeight: `min(${minHeight}px, 45vh)` }}>
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectPosition: position }} />
    </div>
  );
}

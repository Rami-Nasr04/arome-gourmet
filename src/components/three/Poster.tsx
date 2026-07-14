import { cn } from '@/lib/utils';

interface PosterProps {
  src: string;
  alt?: string;
  className?: string;
  /** Posters that are the page's LCP must load eagerly. */
  eager?: boolean;
}

export default function Poster({ src, alt = '', className, eager = false }: PosterProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('absolute inset-0 h-full w-full object-cover', className)}
    />
  );
}

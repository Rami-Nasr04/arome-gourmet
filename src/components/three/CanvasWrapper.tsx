import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { cn } from '@/lib/utils';
import { useWebGLSupported } from '@/hooks/useWebGLSupported';
import Poster from './Poster';

interface CanvasWrapperProps {
  poster: string;
  posterAlt?: string;
  /** width / height — reserves layout space so the canvas causes no CLS. */
  aspect?: number;
  className?: string;
  /** LCP scenes (homepage hero) load their poster eagerly. */
  eagerPoster?: boolean;
  children: React.ReactNode;
}

/**
 * Perf-tuned 3D mount point: space is reserved via aspect-ratio, the poster
 * shows immediately (and is the WebGL-unsupported fallback), and the Canvas
 * mounts only when scrolled near — unmounting again off-screen so three.js
 * resources are disposed.
 */
export default function CanvasWrapper({
  poster,
  posterAlt = '',
  aspect = 16 / 9,
  className,
  eagerPoster = false,
  children,
}: CanvasWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const webgl = useWebGLSupported();

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: '200px',
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ aspectRatio: aspect }}
      className={cn('relative w-full overflow-hidden', className)}
    >
      <Poster src={poster} alt={posterAlt} eager={eagerPoster} />
      {webgl && inView && (
        <div className="absolute inset-0">
          <Canvas
            dpr={[1, 2]}
            frameloop="demand"
            gl={{ powerPreference: 'high-performance', antialias: false }}
          >
            <Suspense fallback={null}>{children}</Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
}

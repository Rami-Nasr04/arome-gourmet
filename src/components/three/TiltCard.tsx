import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface TiltCardProps {
  maxTilt?: number;
  className?: string;
  children: React.ReactNode;
}

/** Pointer-driven 3D tilt via CSS transform. Inert for touch pointers and
 *  when the user prefers reduced motion. */
export default function TiltCard({ maxTilt = 8, className, children }: TiltCardProps) {
  const reduced = usePrefersReducedMotion();
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * maxTilt);
    rotateY.set(px * maxTilt);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}

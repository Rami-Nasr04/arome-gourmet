import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5">
      {/* transform-origin has no logical-property form; rtl: variant is the RTL path */}
      <div
        className="h-full origin-left bg-gold rtl:origin-right"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

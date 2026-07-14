import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface CounterProps {
  to: number;
  suffix?: string;
  label: string;
}

function Counter({ to, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(() => (reduced ? to : 0));

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, to]);

  // Reduced-motion (or pre-animation SSR markup): the final value is always in the HTML.
  const shown = reduced ? to : value;

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span ref={ref} className="font-display text-4xl font-semibold tabular-nums text-gold-soft md:text-5xl">
        {shown}
        {suffix}
      </span>
      <span className="text-sm text-primary-foreground/75">{label}</span>
    </div>
  );
}

export default function StatsBand() {
  const { t } = useTranslation('home');

  return (
    <div className="bg-bean-deep py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          <Counter to={90} label={t('stats.coffee')} />
          <Counter to={91} suffix="%" label={t('stats.back')} />
          <Counter to={20} suffix="+" label={t('stats.countries')} />
        </div>
      </Container>
    </div>
  );
}

import { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ORIGINS } from '@/lib/data/origins';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Stamp from '@/components/ui/Stamp';
import CanvasWrapper from '@/components/three/CanvasWrapper';
import globePoster from '@/assets/globe-poster.svg';

const OriginsGlobe = lazy(() => import('@/components/three/OriginsGlobe'));

export default function OriginsSection() {
  const { t } = useTranslation('common');
  const [selectedId, setSelectedId] = useState('ethiopia');
  const selected = ORIGINS.find((o) => o.id === selectedId) ?? ORIGINS[0];

  const stampData = [
    selected.species,
    selected.altitude && `ALT ${selected.altitude}`,
    selected.process,
    selected.grade,
  ].filter((v): v is string => Boolean(v));

  return (
    // Scoped dark theme: immersive 3D moments sit on warm espresso.
    <Section data-theme="dark" className="bg-background text-foreground">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {t('originsSection.eyebrow')}
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold md:text-4xl">
          {t('originsSection.title')}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{t('originsSection.subtitle')}</p>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[3fr_2fr]">
          <CanvasWrapper
            poster={globePoster}
            posterAlt=""
            aspect={4 / 3}
            camera={{ position: [0, 0, 2.6], fov: 45 }}
            className="rounded-[var(--radius)]"
          >
            <OriginsGlobe selectedId={selectedId} onSelect={setSelectedId} />
          </CanvasWrapper>

          <div className="flex flex-col items-start gap-4">
            <Stamp
              country={t(selected.nameKey)}
              data={stampData}
              className="bg-card/60"
            />
            <p className="text-sm text-muted-foreground">{selected.notes}</p>
          </div>
        </div>

        {/* Keyboard / screen-reader / SEO path: every origin, always in the HTML. */}
        <ul
          aria-label={t('originsSection.listLabel')}
          className="mt-8 flex flex-wrap gap-2"
        >
          {ORIGINS.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => setSelectedId(o.id)}
                aria-pressed={o.id === selectedId}
                className={cn(
                  'min-h-11 touch-manipulation rounded-full border border-border px-4 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  o.id === selectedId && 'border-gold bg-gold-soft/20 text-accent',
                )}
              >
                {t(o.nameKey)}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import LinkButton from '@/components/ui/LinkButton';
import CanvasWrapper from '@/components/three/CanvasWrapper';
import heroPoster from '@/assets/hero-poster.svg';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function HeroSection() {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <CanvasWrapper fill poster={heroPoster} eagerPoster>
          <HeroScene />
        </CanvasWrapper>
      </div>
      {/* readability scrims: parchment fade under the header, espresso fade at the base */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary/90 to-transparent"
      />

      <Container className="relative z-10 py-32">
        <h1 className="max-w-3xl font-display text-5xl font-semibold text-primary-foreground md:text-7xl">
          {t('hero.title')}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <LinkButton to="/green-coffee" variant="accent" size="lg">
            {tc('cta.explore')}
          </LinkButton>
          <LinkButton
            to="/cuppa-joy"
            variant="outline"
            size="lg"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            {tc('cta.discover')}
          </LinkButton>
        </div>
        <a
          href="#intro"
          className="mt-6 inline-block text-sm text-primary-foreground/70 underline underline-offset-4 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {t('hero.skip')}
        </a>
      </Container>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-1 text-primary-foreground/70">
        <span className="font-mono text-[11px] uppercase tracking-widest">
          {t('hero.scrollCue')}
        </span>
        <ChevronDown aria-hidden="true" className="size-5 animate-bounce" />
      </div>
    </section>
  );
}

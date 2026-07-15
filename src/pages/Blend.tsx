import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';

export function Component() {
  const { t } = useTranslation('blend');

  return (
    <>
      <Seo pageKey="blend" path="/blend" />
      {/* Teaser page: one centered moment, dark immersive treatment. */}
      <div className="relative">
        <Section
          data-theme="dark"
          className="flex min-h-[80vh] items-center bg-background pt-32 text-foreground"
        >
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {t('eyebrow')}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">{t('title')}</h1>
              <p className="mt-6 leading-relaxed text-muted-foreground">{t('body')}</p>
              <LinkButton to="/contact" variant="accent" size="lg" className="mt-8">
                {t('cta')}
              </LinkButton>
            </Reveal>
          </Container>
        </Section>
        {/* Header-legibility scrim — outside the dark scope so it fades from the page theme. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/90 via-background/50 to-transparent"
        />
      </div>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';
import ProductFormats from '@/components/cuppa/ProductFormats';

export function Component() {
  const { t } = useTranslation('cuppa');

  return (
    <>
      <Seo pageKey="cuppa" path="/cuppa-joy" />
      {/* Brand hero: the retail moment gets the dark immersive treatment. */}
      <div className="relative">
        <div data-theme="dark" className="border-b border-border bg-background pb-16 pt-36 text-foreground">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {t('subtitle')}
              </p>
              <h1 className="mt-4 font-display text-5xl font-semibold tracking-wide md:text-7xl">
                {t('title')}
              </h1>
            </Reveal>
          </Container>
        </div>
        {/* Header-legibility scrim — outside the dark scope so it fades from the page theme. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/90 via-background/50 to-transparent"
        />
      </div>

      <Section>
        <Container>
          <Reveal className="max-w-3xl space-y-5">
            <p className="leading-relaxed text-foreground">{t('story.p1')}</p>
            <p className="leading-relaxed text-muted-foreground">{t('story.p2')}</p>
          </Reveal>
        </Container>
      </Section>

      <ProductFormats />

      <Section>
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">{t('cta.body')}</p>
            <LinkButton to="/contact" variant="primary" size="lg" className="mt-7">
              {t('cta.button')}
            </LinkButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

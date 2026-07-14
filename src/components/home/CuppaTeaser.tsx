import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';

export default function CuppaTeaser() {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <Section data-theme="dark" className="bg-background text-foreground">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t('cuppaTeaser.eyebrow')}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            {t('cuppaTeaser.title')}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t('cuppaTeaser.body')}</p>
          <LinkButton to="/cuppa-joy" variant="accent" size="lg" className="mt-7">
            {tc('cta.discover')}
          </LinkButton>
        </Reveal>
      </Container>
    </Section>
  );
}

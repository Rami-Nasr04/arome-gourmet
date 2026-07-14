import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function IntroSection() {
  const { t } = useTranslation('home');

  return (
    <Section id="intro">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t('intro.eyebrow')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('intro.title')}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{t('intro.body')}</p>
          <p className="mt-4 leading-relaxed text-foreground">{t('intro.cuppa')}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

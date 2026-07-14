import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';

export default function ClosingCta() {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <Section>
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('closing.title')}
          </h2>
          <p className="mt-4 text-muted-foreground">{t('closing.body')}</p>
          <LinkButton to="/contact" variant="primary" size="lg" className="mt-7">
            {tc('cta.contact')}
          </LinkButton>
        </Reveal>
      </Container>
    </Section>
  );
}

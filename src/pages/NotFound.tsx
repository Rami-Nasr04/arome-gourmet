import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import LinkButton from '@/components/ui/LinkButton';

export function Component() {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo pageKey="notFound" path="/404" />
      <Section className="flex min-h-[70vh] items-center pt-32">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p aria-hidden="true" className="font-mono text-6xl font-medium tracking-widest text-gold tabular-nums">
              404
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('notFound.title')}
            </h1>
            <p className="mt-4 text-muted-foreground">{t('notFound.body')}</p>
            <LinkButton to="/" variant="primary" size="lg" className="mt-7">
              {t('notFound.cta')}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

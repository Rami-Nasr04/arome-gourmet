import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export function Component() {
  const { t } = useTranslation('cross');
  const { t: tc } = useTranslation('common');

  return (
    <>
      <Seo pageKey="cross" path="/cross-shipment" />
      <PageHero eyebrow={tc('nav.cross')} title={t('title')} subtitle={t('subtitle')} />

      <Section>
        <Container>
          <Reveal className="max-w-3xl space-y-5">
            <p className="leading-relaxed text-foreground">{t('explainer.p1')}</p>
            <p className="leading-relaxed text-muted-foreground">{t('explainer.p2')}</p>
            <p className="inline-block rounded-sm border-2 border-jute bg-card px-4 py-2 font-mono text-sm uppercase tracking-widest text-foreground tabular-nums">
              {t('dhl.label')} <span aria-hidden="true" className="text-jute">·</span>{' '}
              {t('dhl.number')}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-card">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('request.title')}
            </h2>
            <p className="mt-3 text-muted-foreground">{t('request.subtitle')}</p>
          </Reveal>
          {/* CrossShipmentForm mounts here (Task 22). */}
        </Container>
      </Section>
    </>
  );
}

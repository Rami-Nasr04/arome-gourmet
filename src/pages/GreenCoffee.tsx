import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';
import SpeciesSection from '@/components/green/SpeciesSection';
import SpecialtyLotsSection from '@/components/green/SpecialtyLotsSection';
import OriginsSection from '@/components/home/OriginsSection';

export function Component() {
  const { t } = useTranslation('green');
  const { t: tc } = useTranslation('common');

  return (
    <>
      <Seo pageKey="green" path="/green-coffee" />
      <PageHero eyebrow={tc('nav.green')} title={t('title')} subtitle={t('subtitle')} />

      <Section>
        <Container>
          <Reveal className="max-w-3xl space-y-5">
            <p className="leading-relaxed text-foreground">{t('intro.p1')}</p>
            <p className="leading-relaxed text-muted-foreground">{t('intro.p2')}</p>
          </Reveal>
        </Container>
      </Section>

      <SpeciesSection />
      <SpecialtyLotsSection />
      <OriginsSection />

      <Section className="bg-card">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('consolidation.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">{t('consolidation.body')}</p>
            <LinkButton to="/cross-shipment" variant="outline" size="lg" className="mt-7">
              {t('consolidation.cta')}
            </LinkButton>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('quote.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">{t('quote.body')}</p>
            {/* Pre-tags B2B interest for the contact form (read in Task 22). */}
            <LinkButton to="/contact?interest=green-coffee" variant="primary" size="lg" className="mt-7">
              {t('quote.cta')}
            </LinkButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

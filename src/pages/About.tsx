import { useTranslation } from 'react-i18next';
import Seo from '@/components/seo/Seo';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';
import ProcessSection from '@/components/about/ProcessSection';
import PartnersBand from '@/components/home/PartnersBand';
import StatsBand from '@/components/home/StatsBand';

export function Component() {
  const { t } = useTranslation('about');
  const { t: tc } = useTranslation('common');

  return (
    <>
      <Seo pageKey="about" path="/about" />
      <PageHero eyebrow={tc('nav.about')} title={t('title')} subtitle={t('subtitle')} />

      <Section>
        <Container>
          <Reveal className="max-w-3xl space-y-5">
            <p className="leading-relaxed text-foreground">{t('story.p1')}</p>
            <p className="leading-relaxed text-muted-foreground">{t('story.p2')}</p>
          </Reveal>
        </Container>
      </Section>

      <ProcessSection />
      <StatsBand />
      <PartnersBand />

      <Section>
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">{t('cta.body')}</p>
            <LinkButton to="/contact" variant="primary" size="lg" className="mt-7">
              {tc('cta.contact')}
            </LinkButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

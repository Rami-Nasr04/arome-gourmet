import { useTranslation } from 'react-i18next';
import { ORIGINS, SPECIALTY_LOTS } from '@/lib/data/origins';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Stamp from '@/components/ui/Stamp';

/** Named specialty lots as export stamps (spec §8.3.4). */
export default function SpecialtyLotsSection() {
  const { t } = useTranslation('green');
  const { t: tc } = useTranslation('common');

  return (
    <Section>
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t('lots.eyebrow')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('lots.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('lots.subtitle')}</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTY_LOTS.map((lot) => {
            const origin = ORIGINS.find((o) => o.id === lot.origin);
            return (
              <li key={`${lot.origin}-${lot.lot}`}>
                <Reveal className="h-full">
                  <div className="flex h-full flex-col gap-3">
                    <Stamp
                      country={origin ? `${tc(origin.nameKey)} / ${lot.lot}` : lot.lot}
                      data={[]}
                    />
                    <p className="text-sm text-muted-foreground">{lot.note}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

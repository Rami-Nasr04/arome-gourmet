import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

interface SpeciesCardProps {
  name: string;
  facts: string[];
  body: string;
}

/** Export-stamp-style species card: stenciled name + mono data row, jute hairline. */
function SpeciesCard({ name, facts, body }: SpeciesCardProps) {
  return (
    <div className="flex h-full flex-col rounded-sm border-2 border-jute bg-card p-6">
      <h3 className="font-mono text-xl font-medium uppercase tracking-widest text-foreground">
        {name}
      </h3>
      <div className="mt-2 flex flex-wrap gap-x-2 font-mono text-xs uppercase tracking-wider text-accent tabular-nums">
        {facts.map((fact, i) => (
          <span key={fact}>
            {i > 0 && <span aria-hidden="true" className="me-2 text-jute">·</span>}
            {fact}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

/** Arabica vs Robusta explainer (spec §8.3.3). */
export default function SpeciesSection() {
  const { t } = useTranslation('green');
  const species = ['arabica', 'robusta'] as const;

  return (
    <Section className="bg-card">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('species.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('species.intro')}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {species.map((key) => (
            <Reveal key={key}>
              <SpeciesCard
                name={t(`species.${key}.name`)}
                facts={t(`species.${key}.facts`, { returnObjects: true }) as string[]}
                body={t(`species.${key}.body`)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

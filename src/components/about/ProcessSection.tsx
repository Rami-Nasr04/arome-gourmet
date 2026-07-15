import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

interface ProcessStep {
  title: string;
  body: string;
}

/** Numbered roasting steps — numbering is real here (an actual sequence). */
export default function ProcessSection() {
  const { t } = useTranslation('about');
  const steps = t('process.steps', { returnObjects: true }) as ProcessStep[];

  return (
    <Section data-theme="dark" className="bg-background text-foreground">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{t('process.title')}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('process.intro')}</p>
        </Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.title}>
              <li className="flex h-full gap-4 rounded-[var(--radius)] border border-border bg-card p-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-2xl font-medium tabular-nums text-gold"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

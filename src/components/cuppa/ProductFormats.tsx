import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/three/TiltCard';

interface ProductFormat {
  name: string;
  formats: string[];
  body: string;
}

/** CUPPA JOY product formats as tilt cards (spec §8.6). */
export default function ProductFormats() {
  const { t } = useTranslation('cuppa');
  const items = t('products.items', { returnObjects: true }) as ProductFormat[];

  return (
    <Section className="bg-card">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t('products.eyebrow')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('products.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('products.subtitle')}</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.name} className="h-full">
              <Reveal className="h-full">
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col rounded-[var(--radius)] border border-border bg-background p-6 shadow-sm">
                    <h3 className="font-mono text-lg font-medium uppercase tracking-widest text-foreground">
                      {item.name}
                    </h3>
                    <div className="mt-2 space-y-1 font-mono text-xs uppercase tracking-wider text-accent tabular-nums">
                      {item.formats.map((format) => (
                        <p key={format}>{format}</p>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">{t('products.valve')}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Link } from 'react-router-dom';
import { Flame, Leaf, Ship } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';

const PILLARS = [
  { key: 'green', to: '/green-coffee', Icon: Leaf },
  { key: 'roast', to: '/about', Icon: Flame },
  { key: 'cross', to: '/cross-shipment', Icon: Ship },
] as const;

export default function PillarsSection() {
  const { t } = useTranslation('home');

  return (
    <Section className="pt-0">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            {t('pillars.title')}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ key, to, Icon }) => (
            <Reveal key={key}>
              <Link to={to} className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                <Card className="h-full transition-colors group-hover:border-gold">
                  <Icon aria-hidden="true" className="size-8 text-bean" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`pillars.${key}.body`)}
                  </p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

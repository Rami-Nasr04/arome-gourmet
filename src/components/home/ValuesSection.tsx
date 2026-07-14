import { BadgeCheck, Sprout, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const VALUES = [
  { key: 'natural', Icon: Sprout },
  { key: 'delivery', Icon: Truck },
  { key: 'quality', Icon: BadgeCheck },
] as const;

export default function ValuesSection() {
  const { t } = useTranslation('home');

  return (
    <div className="border-y border-border bg-card py-10">
      <Container>
        <Reveal>
          <ul className="grid gap-6 text-center sm:grid-cols-3">
            {VALUES.map(({ key, Icon }) => (
              <li key={key} className="flex flex-col items-center gap-2">
                <Icon aria-hidden="true" className="size-7 text-accent" />
                <span className="font-medium text-foreground">{t(`values.${key}`)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}

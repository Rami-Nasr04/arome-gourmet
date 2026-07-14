import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

export default function PartnersBand() {
  const { t } = useTranslation('home');

  const partners = [
    { name: t('partners.jobin'), country: t('partners.jobinCountry') },
    { name: t('partners.aziende'), country: t('partners.aziendeCountry') },
  ];

  return (
    <div className="border-y border-border bg-card py-10">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t('partners.eyebrow')}
          </p>
          <ul className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12">
            {partners.map((p) => (
              <li key={p.name} className="text-center">
                <span className="font-display text-lg font-semibold text-foreground">{p.name}</span>
                <span className="ms-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {p.country}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}

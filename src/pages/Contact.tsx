import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT } from '@/lib/constants';
import { normalizePhone } from '@/lib/format';
import Seo from '@/components/seo/Seo';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { FacebookIcon, InstagramIcon } from '@/components/ui/BrandIcons';
import ContactForm from '@/components/forms/ContactForm';

const MAP_SRC =
  'https://maps.google.com/maps?q=33.85964685216587,35.55284631337&z=16&output=embed';

export function Component() {
  const { t } = useTranslation('contact');
  const { t: tc } = useTranslation('common');
  const [searchParams] = useSearchParams();
  const prefill =
    searchParams.get('interest') === 'green-coffee' ? t('form.interestPrefill') : '';

  const phones = [
    { label: t('details.management'), value: CONTACT.management },
    { label: t('details.landline'), value: CONTACT.landline },
    { label: t('details.hotline'), value: CONTACT.hotline },
  ];

  return (
    <>
      <Seo pageKey="contact" path="/contact" />
      <PageHero eyebrow={tc('nav.contact')} title={t('title')} subtitle={t('subtitle')} />

      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
                {t('details.title')}
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                {phones.map((p) => (
                  <li key={p.label} className="flex items-center gap-3">
                    <Phone aria-hidden="true" className="size-4 shrink-0 text-bean" />
                    <span className="text-muted-foreground">{p.label}</span>
                    <a
                      dir="ltr"
                      href={`tel:${normalizePhone(p.value)}`}
                      className="tabular-nums text-foreground hover:text-accent"
                    >
                      {p.value}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-bean" />
                  <span className="text-muted-foreground">{t('details.email')}</span>
                  <a href={`mailto:${CONTACT.email}`} className="text-foreground hover:text-accent">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bean" />
                  <span className="text-muted-foreground">{t('details.address')}</span>
                  <span className="text-foreground">{tc('footer.address')}</span>
                </li>
              </ul>

              <h2 className="mt-10 font-mono text-xs uppercase tracking-widest text-accent">
                {t('socials')}
              </h2>
              <div className="mt-3 flex gap-2">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] border border-border text-foreground hover:border-gold hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <FacebookIcon className="size-5" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] border border-border text-foreground hover:border-gold hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <InstagramIcon className="size-5" />
                </a>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mb-5 font-display text-2xl font-semibold text-foreground">
                {t('form.title')}
              </h2>
              <ContactForm defaultMessage={prefill} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <iframe
              src={MAP_SRC}
              title={t('map.title')}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-video w-full rounded-[var(--radius)] border border-border"
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

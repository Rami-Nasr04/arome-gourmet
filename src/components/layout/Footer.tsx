import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT } from '@/lib/constants';
import { normalizePhone } from '@/lib/format';
import { NAV_ITEMS } from './navItems';

interface BrandIconProps {
  className?: string;
}

// lucide-react removed brand icons; these mirror its former stroke style.
function FacebookIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation('common');

  const phones = [
    { label: t('footer.management'), value: CONTACT.management },
    { label: t('footer.landline'), value: CONTACT.landline },
    { label: t('footer.hotline'), value: CONTACT.hotline },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          {/* TODO(logo): swap to logo.svg when the vectorized asset lands */}
          <img src="/logo.png" alt={t('a11y.logoAlt')} className="h-12 w-auto" />
          <p className="mt-3 font-display text-lg text-bean-deep">{t('tagline')}</p>
        </div>

        <nav aria-label={t('a11y.footerNav')}>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t('footer.quickLinks')}
          </h2>
          <ul className="mt-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-8 items-center text-sm text-foreground hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t('footer.contact')}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {phones.map((p) => (
              <li key={p.label} className="flex items-center gap-2">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-bean" />
                <span className="text-muted-foreground">{p.label}</span>
                <a dir="ltr" href={`tel:${normalizePhone(p.value)}`} className="tabular-nums text-foreground hover:text-accent">
                  {p.value}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="size-4 shrink-0 text-bean" />
              <a href={`mailto:${CONTACT.email}`} className="text-foreground hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bean" />
              <span className="text-foreground">{t('footer.address')}</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-background hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-background hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Arome Gourmet · {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

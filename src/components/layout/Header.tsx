import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import Nav from './Nav';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          {/* TODO(logo): swap to logo.svg + cream dark-bg variant when the vectorized asset lands */}
          <img src="/logo.png" alt={t('a11y.logoAlt')} className="h-10 w-auto" />
        </Link>
        <Nav />
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            to="/contact"
            className="ms-1 hidden h-9 items-center justify-center rounded-[var(--radius)] bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-bean-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            {t('cta.contact')}
          </Link>
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}

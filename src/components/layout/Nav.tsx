import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from './navItems';

export default function Nav() {
  const { t } = useTranslation('common');

  return (
    <nav aria-label={t('a11y.mainNav')} className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            cn(
              'relative rounded px-3 py-2 text-sm text-foreground transition-colors hover:text-accent',
              isActive &&
                'font-semibold text-accent after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:bg-gold after:content-[""]',
            )
          }
        >
          {t(item.key)}
          {item.soon && (
            <span className="ms-1.5 rounded-full border border-gold-soft bg-gold-soft/30 px-1.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-accent">
              {t('soon')}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

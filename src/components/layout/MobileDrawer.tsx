import { useState } from 'react';
import { Drawer } from 'vaul';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from './navItems';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button
          type="button"
          aria-label={t('a11y.openMenu')}
          className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-primary/60" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl border-t border-border bg-background p-6 pb-10">
          <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-border" />
          <div className="mb-2 flex items-center justify-between">
            <Drawer.Title className="font-display text-lg text-foreground">
              {t('a11y.menuTitle')}
            </Drawer.Title>
            <Drawer.Close asChild>
              <button
                type="button"
                aria-label={t('a11y.closeMenu')}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] text-foreground hover:bg-card"
              >
                <X className="size-5" />
              </button>
            </Drawer.Close>
          </div>
          <nav aria-label={t('a11y.mainNav')} className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex min-h-11 touch-manipulation items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-base text-foreground hover:bg-card',
                    isActive && 'font-semibold text-accent',
                  )
                }
              >
                {t(item.key)}
                {item.soon && (
                  <span className="rounded-full border border-gold-soft bg-gold-soft/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {t('soon')}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

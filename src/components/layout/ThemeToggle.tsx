import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('a11y.toggleTheme')}
      className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-[var(--radius)] text-foreground transition-colors hover:bg-card hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  );
}

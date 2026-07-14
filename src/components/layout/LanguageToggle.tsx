import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation('common');

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      aria-label={t('a11y.switchLang')}
      className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-[var(--radius)] px-2 text-base font-semibold text-foreground transition-colors hover:bg-card hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {language === 'en' ? 'ع' : 'EN'}
    </button>
  );
}

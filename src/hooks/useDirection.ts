import { useTranslation } from 'react-i18next';
import { resolveDir } from '@/i18n/direction';

/**
 * Reactive `'ltr' | 'rtl'` for the currently active i18next language.
 * Re-renders whenever the language changes.
 */
export function useDirection(): 'ltr' | 'rtl' {
  const { i18n } = useTranslation();
  return resolveDir(i18n.language);
}

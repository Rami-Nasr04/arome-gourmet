import { createContext, useEffect, useState, type ReactNode } from 'react';
import i18n, { type SupportedLanguage } from './config';
import { resolveDir } from './direction';

export interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

// eslint-disable-next-line react-refresh/only-export-components -- context object must live alongside its provider for useLanguage to consume
export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'i18nextLng';

function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang === 'en' || lang === 'ar';
}

function normalizeLanguage(lang: string): SupportedLanguage {
  const base = lang.split('-')[0];
  return isSupportedLanguage(base) ? base : 'en';
}

function applyToDocument(lang: SupportedLanguage): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  document.documentElement.dir = resolveDir(lang);
}

function persistLanguage(lang: SupportedLanguage): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
}

export interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<SupportedLanguage>(() =>
    normalizeLanguage(i18n.language),
  );

  // Apply on mount for the initial language (covers the language resolved by
  // the detector/SSR default before any change event has fired).
  useEffect(() => {
    applyToDocument(language);
    persistLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
  }, []);

  useEffect(() => {
    const handleLanguageChanged = (lang: string) => {
      const normalized = normalizeLanguage(lang);
      setLanguageState(normalized);
      applyToDocument(normalized);
      persistLanguage(normalized);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    void i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enGreen from './locales/en/green.json';
import enCross from './locales/en/cross.json';
import enBlend from './locales/en/blend.json';
import enCuppa from './locales/en/cuppa.json';
import enContact from './locales/en/contact.json';
import enSeo from './locales/en/seo.json';

import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arAbout from './locales/ar/about.json';
import arGreen from './locales/ar/green.json';
import arCross from './locales/ar/cross.json';
import arBlend from './locales/ar/blend.json';
import arCuppa from './locales/ar/cuppa.json';
import arContact from './locales/ar/contact.json';
import arSeo from './locales/ar/seo.json';

export const SUPPORTED_LANGUAGES = ['en', 'ar'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const NAMESPACES = [
  'common',
  'home',
  'about',
  'green',
  'cross',
  'blend',
  'cuppa',
  'contact',
  'seo',
] as const;

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    green: enGreen,
    cross: enCross,
    blend: enBlend,
    cuppa: enCuppa,
    contact: enContact,
    seo: enSeo,
  },
  ar: {
    common: arCommon,
    home: arHome,
    about: arAbout,
    green: arGreen,
    cross: arCross,
    blend: arBlend,
    cuppa: arCuppa,
    contact: arContact,
    seo: arSeo,
  },
} as const;

// vite-react-ssg prerenders in Node, where `window`/`navigator`/`localStorage` don't exist.
// Only wire up the browser language detector when running in a browser; in Node, force `en`
// so prerendered HTML is always English (no detector = no window/navigator access at init).
const isBrowser = typeof window !== 'undefined';

const instance = i18n.use(initReactI18next);
if (isBrowser) {
  instance.use(LanguageDetector);
}

void instance.init({
  resources,
  fallbackLng: 'en',
  lng: isBrowser ? undefined : 'en',
  supportedLngs: [...SUPPORTED_LANGUAGES],
  ns: [...NAMESPACES],
  defaultNS: 'common',
  detection: {
    order: ['localStorage', 'navigator'],
    // LanguageProvider owns writing the persisted choice, not the detector.
    caches: [],
  },
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;

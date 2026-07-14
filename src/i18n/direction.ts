export const RTL_LANGS = new Set(['ar']);

export function resolveDir(lang: string): 'ltr' | 'rtl' {
  return RTL_LANGS.has(lang.split('-')[0]) ? 'rtl' : 'ltr';
}

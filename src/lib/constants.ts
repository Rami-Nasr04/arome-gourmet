export const CONTACT = {
  email: 'info@aromegourmet.com',
  /** Display formats match the existing brand material (audit). */
  management: '+961 03 230 161',
  landline: '+961 01 687 493',
  hotline: '+961 79 418 733',
  address: 'Mkalles – Mansourieh Industrial Zone, Lebanon',
  facebook: 'https://www.facebook.com/Arome-gourmet-100314294698579/',
  instagram: 'https://www.instagram.com/aromeetdelices',
  dhlAccount: '963770567',
} as const;

/** Canonical origin for SEO URLs. Set VITE_SITE_URL per deployment (e.g. preview hosts); production default. */
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://aromegourmet.com';

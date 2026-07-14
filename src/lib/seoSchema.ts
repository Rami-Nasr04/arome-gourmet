import { SITE_URL } from './constants';

/**
 * Homepage JSON-LD @graph (from the approved SEO spec):
 * Organization + LocalBusiness + CUPPA JOY Brand + WebSite.
 * Geo coordinates confirmed by the client (Mkalles office).
 */
export const HOME_JSON_LD: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Arome Gourmet',
      alternateName: ['Arome et Delices', 'Arome Trading International'],
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 772,
        height: 501,
      },
      description:
        'Family-owned Lebanese coffee company: premium single-origin green coffee importing, small-batch roasting and blending, and the CUPPA JOY retail brand.',
      email: 'info@aromegourmet.com',
      telephone: '+9611687493',
      foundingLocation: 'Lebanon',
      sameAs: [
        'https://www.facebook.com/Arome-gourmet-100314294698579/',
        'https://www.instagram.com/aromeetdelices',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+9611687493',
          contactType: 'sales',
          areaServed: ['LB', 'Middle East', 'Europe'],
          availableLanguage: ['en', 'ar'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+96179418733',
          contactType: 'customer service',
          availableLanguage: ['en', 'ar'],
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'Arome Gourmet',
      image: `${SITE_URL}/logo.png`,
      url: `${SITE_URL}/`,
      telephone: '+9611687493',
      email: 'info@aromegourmet.com',
      priceRange: '$$',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Industrial Zone, Mkalles – Mansourieh',
        addressLocality: 'Mansourieh',
        addressRegion: 'Mount Lebanon',
        addressCountry: 'LB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.85964685216587,
        longitude: 35.55284631337,
      },
      areaServed: [
        { '@type': 'Country', name: 'Lebanon' },
        { '@type': 'Place', name: 'Middle East' },
        { '@type': 'Place', name: 'Europe' },
      ],
      knowsAbout: [
        'green coffee',
        'coffee roasting',
        'coffee blending',
        'single origin coffee',
        'coffee import export',
      ],
      sameAs: [
        'https://www.facebook.com/Arome-gourmet-100314294698579/',
        'https://www.instagram.com/aromeetdelices',
      ],
    },
    {
      '@type': 'Brand',
      '@id': `${SITE_URL}/#cuppajoy`,
      name: 'CUPPA JOY',
      description:
        "Arome Gourmet's premium roasted coffee brand — beans from the highlands of Ethiopia and Brazil, blended for the authentic Lebanese taste.",
      logo: `${SITE_URL}/logo.png`,
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Arome Gourmet',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en', 'ar'],
    },
  ],
};

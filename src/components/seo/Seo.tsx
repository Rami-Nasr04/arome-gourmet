import { Head } from 'vite-react-ssg';
import { useTranslation } from 'react-i18next';
import { SITE_URL } from '@/lib/constants';

interface SeoProps {
  /** seo-namespace key prefix, e.g. "home" → home.title / home.description */
  pageKey: string;
  /** route path with leading slash, e.g. "/green-coffee" */
  path: string;
  ogImage?: string;
}

export default function Seo({ pageKey, path, ogImage = '/og-card.jpg' }: SeoProps) {
  const { t, i18n } = useTranslation('seo');
  const url = `${SITE_URL}${path === '/' ? '/' : `${path}/`}`;
  const title = t(`${pageKey}.title`);
  const description = t(`${pageKey}.description`);
  const isAr = i18n.language.startsWith('ar');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* Language is client state (no /ar routes yet); alternates point at the same URL. */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arome Gourmet" />
      <meta property="og:locale" content={isAr ? 'ar_LB' : 'en_US'} />
      <meta property="og:locale:alternate" content={isAr ? 'en_US' : 'ar_LB'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

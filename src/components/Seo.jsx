import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, PAGES, NOT_FOUND } from '../lib/site';

function Seo({ path, notFound = false }) {
  const meta = notFound ? NOT_FOUND : PAGES[path];
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={notFound ? 'noindex, follow' : 'index, follow'} />
      {!notFound && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {!notFound && <meta property="og:url" content={url} />}
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}

export default Seo;

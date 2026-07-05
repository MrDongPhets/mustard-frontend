import { useEffect } from 'react';

const SITE_URL = 'https://mustarddigitals.com';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;
const SITE_NAME = 'MUSTARD Digitals';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Per-route SEO tags: title, description, canonical, Open Graph, Twitter Card.
 * Updates the existing static tags in index.html in place (instead of appending
 * new ones), so every route ends up with exactly one of each tag — the way a
 * client-only SPA needs it, since there's no server render to swap them out.
 *
 * `path` must start with "/" (e.g. "/contact", "/services/web-design").
 */
export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);

    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
  }, [title, description, path, image, noindex]);

  return null;
}

import { useEffect } from 'react';

const defaults = {
  title: 'Myron Melekson — Aventura community builder and civic reporter',
  description: 'Myron Melekson is an Aventura community builder, a voice on AI and the economy, and a fact-first civic reporter.',
  ogTitle: 'Myron Melekson — Aventura community builder and civic reporter',
  ogDescription: 'Aventura community builder. A voice on AI and the economy. Fact-first civic reporting.',
  ogUrl: 'https://melekson.com',
  ogImage: 'https://melekson.com/myron-hero-1600.jpg',
};

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function useSEO({ title, description, ogTitle, ogDescription, ogUrl, ogImage } = {}) {
  useEffect(() => {
    document.title = title || defaults.title;
    setMeta('meta[name="description"]', 'content', description || defaults.description);
    setMeta('meta[property="og:title"]', 'content', ogTitle || title || defaults.ogTitle);
    setMeta('meta[property="og:description"]', 'content', ogDescription || description || defaults.ogDescription);
    setMeta('meta[property="og:url"]', 'content', ogUrl || defaults.ogUrl);
    setMeta('meta[property="og:image"]', 'content', ogImage || defaults.ogImage);
    setMeta('meta[name="twitter:title"]', 'content', ogTitle || title || defaults.ogTitle);
    setMeta('meta[name="twitter:description"]', 'content', ogDescription || description || defaults.ogDescription);
    setMeta('meta[name="twitter:image"]', 'content', ogImage || defaults.ogImage);

    return () => {
      document.title = defaults.title;
      setMeta('meta[name="description"]', 'content', defaults.description);
      setMeta('meta[property="og:title"]', 'content', defaults.ogTitle);
      setMeta('meta[property="og:description"]', 'content', defaults.ogDescription);
      setMeta('meta[property="og:url"]', 'content', defaults.ogUrl);
      setMeta('meta[property="og:image"]', 'content', defaults.ogImage);
      setMeta('meta[name="twitter:title"]', 'content', defaults.ogTitle);
      setMeta('meta[name="twitter:description"]', 'content', defaults.ogDescription);
      setMeta('meta[name="twitter:image"]', 'content', defaults.ogImage);
    };
  }, [title, description, ogTitle, ogDescription, ogUrl, ogImage]);
}

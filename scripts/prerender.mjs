// Post-build prerender: turns the Vite SPA output into per-route static HTML files
// with per-route <title>, <meta description>, Open Graph, Twitter, and canonical tags.
//
// How it works:
//   1. Reads dist/index.html as the template (Vite already injected the correct JS/CSS refs)
//   2. For each route (homepage, about, writing index, each blog post, etc.),
//      writes dist/<route>/index.html with customized meta tags
//   3. Vercel serves the static per-route HTML directly (takes precedence over the SPA rewrite),
//      so social crawlers (LinkedIn, Twitter, iMessage, Slack) see the right card for each URL
//   4. Googlebot renders React normally once the page loads
//
// Per-post OG images point to /api/og?title=...&category=...&date=... (Vercel edge function)
// so every blog post gets a unique branded social card generated at the edge.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { content } from '../src/data/content.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '../dist');
const SITE = 'https://melekson.com';
const DEFAULT_IMAGE = `${SITE}/myron-hero-1600.jpg`;
const DEFAULT_DESCRIPTION =
  'Founder of Mpower Sourcing (AI-enhanced staffing) and Mpower Agents (AI automation). Fractional COO, builder, and community leader in Aventura, South Florida.';

const template = readFileSync(resolve(DIST, 'index.html'), 'utf8');

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function ogImageUrl(post) {
  const params = new URLSearchParams({
    title: post.title,
    category: post.category || '',
    date: post.date || '',
    author: 'Myron Melekson',
  });
  return `${SITE}/api/og?${params.toString()}`;
}

function apply(html, meta) {
  const title = esc(meta.title);
  const desc = esc(meta.description);
  const canonical = meta.canonical;
  const ogTitle = esc(meta.ogTitle || meta.title);
  const ogDesc = esc(meta.ogDescription || meta.description);
  const ogImage = meta.ogImage || DEFAULT_IMAGE;

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${desc}"`
    )
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`)
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${ogTitle}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${ogDesc}"`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${canonical}"`
    )
    .replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${ogImage}"`
    )
    .replace(
      /<meta property="og:image:width" content="[^"]*"/,
      `<meta property="og:image:width" content="${meta.ogImage ? 1200 : 1600}"`
    )
    .replace(
      /<meta property="og:image:height" content="[^"]*"/,
      `<meta property="og:image:height" content="${meta.ogImage ? 630 : 1600}"`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${ogTitle}"`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${ogDesc}"`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*"/,
      `<meta name="twitter:image" content="${ogImage}"`
    );
}

function writeRoute(path, html) {
  const dir = path === '/' ? DIST : resolve(DIST, '.' + path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html, 'utf8');
}

// Static routes
const routes = [
  {
    path: '/',
    meta: {
      title: 'Myron Melekson — Founder of Mpower Sourcing & Mpower Agents | Aventura, FL',
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE}/`,
    },
  },
  {
    path: '/about',
    meta: {
      title: 'About Myron Melekson — Founder, Builder, South Florida',
      description:
        'Myron Melekson is a founder, operator, and community leader based in Aventura, Florida. CEO of Mpower Sourcing and Mpower Agents. 20 years building companies, teams, and communities.',
      canonical: `${SITE}/about`,
    },
  },
  {
    path: '/writing',
    meta: {
      title: 'Writing — Myron Melekson',
      description:
        'Essays on AI, operations, founder life, fractional leadership, and building community in South Florida.',
      canonical: `${SITE}/writing`,
    },
  },
  {
    path: '/reviews',
    meta: {
      title: 'Reviews — Myron Melekson',
      description:
        'What clients, colleagues, and people Myron Melekson has coached and worked with say about working together.',
      canonical: `${SITE}/reviews`,
    },
  },
  {
    path: '/media',
    meta: {
      title: 'Media — Myron Melekson',
      description:
        'Podcasts, interviews, videos, and press featuring Myron Melekson on entrepreneurship, AI, and building.',
      canonical: `${SITE}/media`,
    },
  },
  {
    path: '/updates',
    meta: {
      title: 'Updates — Myron Melekson',
      description:
        'The latest on what Myron is building across Mpower Sourcing, Mpower Agents, and the Aventura tech ecosystem.',
      canonical: `${SITE}/updates`,
    },
  },
];

// Blog posts
for (const post of content.writing?.posts || []) {
  routes.push({
    path: `/writing/${post.slug}`,
    meta: {
      title: `${post.title} — Myron Melekson`,
      description: post.excerpt || DEFAULT_DESCRIPTION,
      canonical: `${SITE}/writing/${post.slug}`,
      ogImage: ogImageUrl(post),
    },
  });
}

for (const r of routes) {
  const html = apply(template, r.meta);
  writeRoute(r.path, html);
}

console.log(`✓ Prerendered ${routes.length} routes (${routes.length - 6} posts + 6 static)`);

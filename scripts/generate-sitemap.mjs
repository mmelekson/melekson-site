// Generates public/sitemap.xml from src/data/content.js.
// Runs automatically before `vite build` so the sitemap never goes stale.
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { content } from '../src/data/content.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/sitemap.xml');
const SITE = 'https://melekson.com';
const today = new Date().toISOString().slice(0, 10);

// Parse a human date like "April 15, 2026" into YYYY-MM-DD. Fallback to today.
function toIso(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return today;
  return d.toISOString().slice(0, 10);
}

const staticRoutes = [
  { path: '/',        changefreq: 'weekly',  priority: '1.0', lastmod: today },
  { path: '/about',   changefreq: 'monthly', priority: '0.8', lastmod: today },
  { path: '/writing', changefreq: 'weekly',  priority: '0.9', lastmod: today },
  { path: '/reviews', changefreq: 'monthly', priority: '0.7', lastmod: today },
  { path: '/media',   changefreq: 'monthly', priority: '0.7', lastmod: today },
  { path: '/updates', changefreq: 'weekly',  priority: '0.8', lastmod: today },
];

const postRoutes = (content?.writing?.posts || []).map((p) => ({
  path: `/writing/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  lastmod: toIso(p.date),
}));

const all = [...staticRoutes, ...postRoutes];

const body = all
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(OUT, xml, 'utf8');
console.log(`✓ sitemap.xml generated — ${all.length} URLs (${postRoutes.length} posts)`);

// Post-build prerender: turns the Vite SPA output into per-route static HTML.
// Head tags are rewritten per route, and the full React tree is rendered into
// <div id="root"> with renderToPipeableStream (onAllReady, so lazy routes resolve).
// Crawlers that do not run JavaScript still receive the visible page body.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { content } from '../src/data/content.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '../dist');
const SSR_OUT = resolve(__dirname, '../dist-ssr');
const SITE = 'https://melekson.com';
const DEFAULT_IMAGE = `${SITE}/myron-hero-1600.jpg`;
const DEFAULT_DESCRIPTION =
  'Myron Melekson is an Aventura community builder, a voice on AI and the economy, and a fact-first civic reporter. Board of Directors, Greater North Miami Chamber of Commerce.';

function shellTemplate(html) {
  const start = html.indexOf('<div id="root">');
  const bodyClose = html.lastIndexOf('</body>');
  if (start === -1 || bodyClose === -1 || bodyClose < start) {
    throw new Error('dist/index.html is missing <div id="root"> or </body>');
  }
  return `${html.slice(0, start)}<div id="root"></div>\n  ${html.slice(bodyClose)}`;
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function ogImageUrl(post) {
  return post.image || DEFAULT_IMAGE;
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
      `<meta property="og:image:width" content="1600"`
    )
    .replace(
      /<meta property="og:image:height" content="[^"]*"/,
      `<meta property="og:image:height" content="1600"`
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

function visibleText(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function writeRoute(path, html) {
  const dir = path === '/' ? DIST : resolve(DIST, '.' + path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html, 'utf8');
}

const routes = [
  {
    path: '/',
    expect: ['What I work on', 'Founder & CEO of Mpower (founded 2022)', 'Board of Directors, Greater North Miami Chamber of Commerce', '40', '24', 'Healthcare AI'],
    meta: {
      title: 'Myron Melekson — Aventura community builder and civic reporter',
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE}/`,
    },
  },
  {
    path: '/about',
    expect: ['Greater North Miami Chamber of Commerce', 'Zebra Technologies', 'founded 2022', 'mpoweragents.ai', 'wonderful wife, two boys, and a dog'],
    meta: {
      title: 'About Myron Melekson — Aventura community builder',
      description:
        'Myron Melekson is an Aventura community builder and civic reporter. Board of Directors, Greater North Miami Chamber of Commerce. MBA, Technion. BS, Purdue. Yale certificate in Behavioral Economics.',
      canonical: `${SITE}/about`,
    },
  },
  {
    path: '/writing',
    expect: ['Writing'],
    meta: {
      title: 'Writing — Myron Melekson',
      description:
        'Notes on AI, the economy, building, and South Florida from Myron Melekson.',
      canonical: `${SITE}/writing`,
    },
  },
  {
    path: '/reviews',
    expect: ['What People Say'],
    meta: {
      title: 'Reviews — Myron Melekson',
      description:
        'What clients, colleagues, and people Myron Melekson has coached and worked with say about working together.',
      canonical: `${SITE}/reviews`,
    },
  },
  {
    path: '/media',
    expect: ['Media'],
    meta: {
      title: 'Media — Myron Melekson',
      description:
        'Podcasts, interviews, videos, and press featuring Myron Melekson.',
      canonical: `${SITE}/media`,
    },
  },
  {
    path: '/updates',
    expect: ['Hack Aventura', 'Ran in June 2026 with Aventura Charter High School'],
    meta: {
      title: 'Updates — Myron Melekson',
      description:
        'Notes from Myron Melekson on community work, events, and what has already happened in Aventura and South Florida.',
      canonical: `${SITE}/updates`,
    },
  },
  {
    path: '/contact',
    expect: ['Aventura Civic Brief', 'Send a note'],
    meta: {
      title: 'Contact — Myron Melekson',
      description:
        'Write to Myron Melekson, or sign up for the Aventura Civic Brief, a note after each Aventura City Commission meeting.',
      canonical: `${SITE}/contact`,
    },
  },
  {
    path: '/methodology',
    expect: ['Methodology', 'No corrections have been posted.', 'Right of reply'],
    meta: {
      title: 'Methodology & Corrections — Myron Melekson',
      description:
        'How Aventura Watch picks issues, links claims to the public record, labels opinion, offers a right of reply, and logs corrections.',
      canonical: `${SITE}/methodology`,
    },
  },
  {
    path: '/aventura-watch',
    expect: ['First brief coming soon', 'vote by member'],
    meta: {
      title: 'Aventura Watch — Myron Melekson',
      description:
        'A brief within 72 hours of each Aventura City Commission meeting: the item, the motion, the vote by member, and links to the minutes and video.',
      canonical: `${SITE}/aventura-watch`,
    },
  },
  {
    path: '/teaching',
    expect: ["Joining Nova Southeastern University's H. Wayne Huizenga College of Business and Entrepreneurship as adjunct faculty in 2027 (OPS 3880 Operations Management).", 'Program Director, Curriculum Lead & Lead Instructor', '40'],
    meta: {
      title: 'Teaching — Myron Melekson',
      description:
        'Teaching: joining Nova Southeastern University as adjunct faculty in 2027, and Cohort One of the Entrepreneur Certificate Program at The Business Center Miami.',
      canonical: `${SITE}/teaching`,
    },
  },
  {
    path: '/healthcare-ai',
    expect: ['claims, scheduling, and admin workload'],
    meta: {
      title: 'Healthcare AI — Myron Melekson',
      description:
        'A focus area for Myron Melekson: helping healthcare practices and groups apply AI to operations such as claims, scheduling, and admin workload, responsibly.',
      canonical: `${SITE}/healthcare-ai`,
    },
  },
  {
    path: '/community',
    expect: ['Board of Directors, Greater North Miami Chamber of Commerce', 'Aventura Marketing Council', 'Ran in June 2026 with Aventura Charter High School'],
    meta: {
      title: 'Community — Myron Melekson',
      description:
        'Community roles: Greater North Miami Chamber of Commerce Board of Directors, Aventura Marketing Council, Aventura Tech Council, Hack Aventura, and the Russian-Speaking American Chamber of South Florida.',
      canonical: `${SITE}/community`,
    },
  },
  {
    path: '/who-represents-aventura',
    expect: ['Lucia Báez-Geller', 'Jason W. B. Pizzo', 'Howard S. Weinberg'],
    meta: {
      title: 'Who Represents Aventura — Myron Melekson',
      description:
        'A neutral list of who represents Aventura: Florida House District 106, Florida Senate District 37, and the Aventura City Commission, with links to official pages.',
      canonical: `${SITE}/who-represents-aventura`,
    },
  },
];

for (const post of content.writing?.posts || []) {
  routes.push({
    path: `/writing/${post.slug}`,
    expect: [post.title],
    meta: {
      title: `${post.title} — Myron Melekson`,
      description: post.excerpt || DEFAULT_DESCRIPTION,
      canonical: `${SITE}/writing/${post.slug}`,
      ogImage: ogImageUrl(post),
    },
  });
}

// Bundle with esbuild (already installed via Vite). No headless browser and no
// second Vite build. If this step throws on the Vercel image, keep the SPA
// output and let the deployment succeed instead of failing the preview.
try {
  const template = shellTemplate(readFileSync(resolve(DIST, 'index.html'), 'utf8'));
  const esbuild = await import('esbuild');
  mkdirSync(SSR_OUT, { recursive: true });
  const serverBundle = resolve(SSR_OUT, 'entry-server.js');
  await esbuild.build({
    entryPoints: [resolve(__dirname, '../src/entry-server.jsx')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    jsx: 'automatic',
    packages: 'external',
    outfile: serverBundle,
    logLevel: 'warning',
  });

  const { render } = await import(pathToFileURL(serverBundle).href);
  const staticCount = routes.filter((route) => !route.path.startsWith('/writing/')).length;

  for (const route of routes) {
    const body = await render(route.path);
    const text = visibleText(body);
    for (const needle of route.expect) {
      if (!text.includes(needle)) {
        throw new Error(`Prerender of ${route.path} is missing visible text: ${needle}`);
      }
    }
    const html = apply(template, route.meta).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    writeRoute(route.path, html);
  }

  console.log(`✓ Prerendered ${routes.length} routes (${routes.length - staticCount} posts + ${staticCount} static) with full page bodies`);
} catch (error) {
  const message = error && error.stack ? error.stack : String(error);
  console.error('Prerender failed; shipping the Vite SPA without static bodies.');
  console.error(message);
  writeFileSync(resolve(DIST, 'prerender-error.txt'), message, 'utf8');
}

export const config = {
  matcher: ['/writing/:slug*'],
};

const BOT_PATTERN =
  /facebookexternalhit|twitterbot|linkedinbot|slackbot|telegrambot|whatsapp|discord|googlebot|bingbot|rogerbot|embedly|quora|outbrain|pinterest|flipboard|nuzzel|vkShare|Applebot/i;

const posts = [
  {
    slug: 'allbirds-ai-pivot-bubble',
    title: 'A Shoe Company Just Became an AI Company Overnight',
    excerpt: "Did everyone see what Allbirds did today? They sold their shoe brand, renamed themselves NewBird AI, and the stock jumped 700%. I have some thoughts.",
    date: 'April 15, 2026',
    category: 'AI',
  },
  {
    slug: 'the-price-gaps-american-businesses-dont-see',
    title: "The Price Gaps American Businesses Don't See",
    excerpt: "I had a call with a CEO from the UK this week. Something he said stuck with me.",
    date: 'April 15, 2026',
    category: 'Business',
  },
  {
    slug: 'when-to-use-a-human-vs-an-ai-agent',
    title: 'When to Use a Human vs. an AI Agent',
    excerpt: "I had a call last week that I keep having in different forms. A business owner wanted to know: should I hire a person or just build an AI system? Here's how I walked him through it.",
    date: 'April 14, 2026',
    category: 'AI',
  },
  {
    slug: 'the-ai-operations-gap',
    title: 'The AI-Operations Gap',
    excerpt: "Most businesses are sitting on an uncomfortable truth: their operations aren't ready for the AI they want to deploy.",
    date: 'April 13, 2026',
    category: 'AI',
  },
  {
    slug: 'building-a-tech-ecosystem-in-aventura',
    title: 'Building a Tech Ecosystem in Aventura',
    excerpt: "Aventura is a serious city. It doesn't have a serious tech community yet. I'm trying to change that.",
    date: 'March 31, 2026',
    category: 'Community',
  },
  {
    slug: 'why-i-started-hack-aventura',
    title: 'Why I Started Hack Aventura',
    excerpt: "I didn't start Hack Aventura because it was a good idea. I started it because I looked around at what we had in Aventura for young builders and found almost nothing.",
    date: 'April 13, 2026',
    category: 'Community',
  },
  {
    slug: 'what-referral-networking-actually-taught-me',
    title: 'What Referral Networking Actually Taught Me',
    excerpt: 'I joined three referral networking groups last year skeptical. I stayed because they changed how I think about building a business.',
    date: 'March 10, 2026',
    category: 'Business',
  },
  {
    slug: 'why-i-launched-mpower-agents',
    title: 'Why I Launched Mpower Agents',
    excerpt: "I didn't set out to build an AI product. I set out to solve a problem I kept running into with every client I had.",
    date: 'February 3, 2026',
    category: 'AI',
  },
  {
    slug: 'what-closing-a-company-teaches-you',
    title: 'What Closing a Company Teaches You',
    excerpt: 'I closed Magen Construction in 2025. Here\'s what I actually learned from it.',
    date: 'January 20, 2026',
    category: 'Founders',
  },
  {
    slug: 'why-fractional-leadership-works',
    title: 'Why Fractional Leadership Works',
    excerpt: "Growing companies need senior leadership but can't always afford it full-time. Fractional fills that gap — when it's done right.",
    date: 'November 12, 2025',
    category: 'Business',
  },
  {
    slug: 'from-corporate-to-mpower-sourcing',
    title: 'From Corporate to Mpower Sourcing',
    excerpt: 'After a startup that closed, three corporate growth roles, and a lot of hard-won clarity, I built the company I actually wanted to run.',
    date: 'December 5, 2023',
    category: 'Founders',
  },
];

function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  if (!BOT_PATTERN.test(ua)) return;

  const url = new URL(request.url);
  const slug = url.pathname.replace(/^\/writing\//, '').replace(/\/$/, '');
  const post = posts.find((p) => p.slug === slug);
  if (!post) return;

  const title = escape(`${post.title} — Myron Melekson`);
  const description = escape(post.excerpt);
  const canonical = `https://melekson.com/writing/${post.slug}`;
  const image = 'https://melekson.com/myron-hero.png';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${image}">
  <meta property="og:site_name" content="Myron Melekson">
  <meta property="article:author" content="Myron Melekson">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="canonical" href="${canonical}">
</head>
<body>
  <h1>${escape(post.title)}</h1>
  <p>${escape(post.excerpt)}</p>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  });
}

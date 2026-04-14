import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { content } from '../data/content';

function readingTime(body) {
  const words = body.join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const categoryColor = {
  Community: 'bg-blue-100 text-blue-800',
  Business: 'bg-green-100 text-green-800',
  AI: 'bg-indigo-100 text-indigo-800',
  Founders: 'bg-yellow-100 text-yellow-800',
  Personal: 'bg-warm-100 text-warm-600',
};

export default function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const posts = content.writing.posts;
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-heading text-2xl text-warm-900 mb-4">Post not found</p>
          <Link to="/" className="text-accent hover:text-accent-light font-medium">
            &larr; Back home
          </Link>
        </div>
      </div>
    );
  }

  const title = `${post.title} — Myron Melekson`;
  const canonical = `https://melekson.com/writing/${post.slug}`;
  const minutes = readingTime(post.body);
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://melekson.com/myron-hero.png" />
        <meta property="og:site_name" content="Myron Melekson" />
        <meta property="article:author" content="Myron Melekson" />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://melekson.com/myron-hero.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": "Myron Melekson",
            "url": "https://melekson.com"
          },
          "publisher": {
            "@type": "Person",
            "name": "Myron Melekson",
            "url": "https://melekson.com"
          },
          "url": canonical,
          "image": "https://melekson.com/myron-hero.png",
          "mainEntityOfPage": canonical,
        })}</script>
      </Helmet>

      <article className="min-h-screen pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/#writing"
            className="inline-flex items-center gap-2 text-sm text-warm-500 hover:text-accent transition-colors mb-10 block"
          >
            &larr; All writing
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-sm text-warm-400">{post.date}</span>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[post.category] || 'bg-warm-100 text-warm-600'}`}>
                {post.category}
              </span>
              <span className="text-xs text-warm-400">{minutes} min read</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl text-warm-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-warm-500 text-lg">{content.nav.name}</p>
          </div>

          <hr className="border-warm-200 mb-10" />

          {/* Body */}
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-warm-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <hr className="border-warm-200 mt-12 mb-8" />

          {/* Share + CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-12">
            <a
              href={linkedInShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-warm-200 text-warm-600 px-4 py-2 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Share on LinkedIn
            </a>
            <a
              href="https://calendly.com/mpower-myron/video-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-warm-50 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
            >
              Book a call with Myron &rarr;
            </a>
          </div>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-warm-100 pt-8">
              {prev && (
                <Link
                  to={`/writing/${prev.slug}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-warm-200 hover:border-accent/40 transition-colors"
                >
                  <span className="text-xs text-warm-400 uppercase tracking-wide">&larr; Previous</span>
                  <span className="font-heading text-warm-900 text-sm group-hover:text-accent transition-colors leading-snug">
                    {prev.title}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  to={`/writing/${next.slug}`}
                  className={`group flex flex-col gap-1 p-4 rounded-xl border border-warm-200 hover:border-accent/40 transition-colors ${!prev ? 'sm:col-start-2' : ''}`}
                >
                  <span className="text-xs text-warm-400 uppercase tracking-wide text-right">Next &rarr;</span>
                  <span className="font-heading text-warm-900 text-sm group-hover:text-accent transition-colors leading-snug text-right">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </article>
    </>
  );
}

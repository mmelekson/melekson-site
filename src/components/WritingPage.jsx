import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const categoryColor = {
  Community: 'bg-blue-100 text-blue-800',
  Business: 'bg-green-100 text-green-800',
  AI: 'bg-indigo-100 text-indigo-800',
  Founders: 'bg-yellow-100 text-yellow-800',
  Personal: 'bg-warm-100 text-warm-600',
};

export default function WritingPage() {
  const { writing } = content;
  const ref = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Writing — Myron Melekson</title>
        <meta name="description" content="Weekly thoughts on building, AI, South Florida, and what it means to keep going. By Myron Melekson." />
        <link rel="canonical" href="https://melekson.com/writing" />
        <meta property="og:title" content="Writing — Myron Melekson" />
        <meta property="og:description" content="Weekly thoughts on building, AI, South Florida, and what it means to keep going." />
        <meta property="og:url" content="https://melekson.com/writing" />
        <meta property="og:image" content="https://melekson.com/myron-hero.png" />
      </Helmet>

      <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Writing</p>
          <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-3">
            {writing.heading}
          </h1>
          <p className="fade-in text-warm-500 mb-12 text-lg">
            {writing.subheading}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {writing.posts.map((post) => (
              <Link
                key={post.slug}
                to={`/writing/${post.slug}`}
                className="fade-in group block bg-white rounded-xl p-6 border border-warm-200 hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-warm-400">{post.date}</span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[post.category] || 'bg-warm-100 text-warm-600'}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-heading text-xl text-warm-900 mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-warm-600 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

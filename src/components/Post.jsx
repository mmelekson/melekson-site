import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { content } from '../data/content';

export default function Post() {
  const { slug } = useParams();
  const post = content.writing.posts.find(p => p.slug === slug);

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

  return (
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
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-warm-400">{post.date}</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-warm-100 text-warm-600">
              {post.category}
            </span>
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

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Link to="/" className="text-sm text-warm-500 hover:text-accent transition-colors">
            &larr; Back home
          </Link>
          <a
            href="https://calendly.com/mpower-myron/video-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-warm-50 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
          >
            Book a call with Myron &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

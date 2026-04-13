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

export default function Writing() {
  const { writing } = content;
  const ref = useFadeIn();

  if (!writing.posts.length) return null;

  return (
    <section id="writing" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {writing.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {writing.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {writing.posts.map((post) => (
            <Link
              key={post.slug}
              to={`/writing/${post.slug}`}
              className="fade-in group block bg-warm-50 rounded-xl p-6 border border-warm-200 hover:border-accent/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-warm-400">{post.date}</span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[post.category] || 'bg-warm-100 text-warm-600'}`}>
                  {post.category}
                </span>
              </div>
              <h3 className="font-heading text-xl text-warm-900 mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
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
  );
}

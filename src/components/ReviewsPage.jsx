import { Helmet } from 'react-helmet-async';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function ReviewsPage() {
  const { testimonials } = content;
  const ref = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Reviews — Myron Melekson</title>
        <meta name="description" content="What clients, colleagues, and people Myron Melekson has coached and worked with say about working together." />
        <link rel="canonical" href="https://melekson.com/reviews" />
        <meta property="og:title" content="Reviews — Myron Melekson" />
        <meta property="og:description" content="What clients, colleagues, and people Myron has coached and worked with say about working together." />
        <meta property="og:url" content="https://melekson.com/reviews" />
        <meta property="og:image" content="https://melekson.com/myron-hero.png" />
      </Helmet>

      <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Reviews</p>
          <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-3">
            {testimonials.heading}
          </h1>
          <p className="fade-in text-warm-500 mb-12 text-lg">
            {testimonials.subheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.items.map((item, i) => (
              <div
                key={i}
                className="fade-in flex flex-col bg-white border border-warm-200 rounded-xl p-6 hover:border-warm-300 transition-colors"
              >
                <div className="text-accent text-3xl font-serif leading-none mb-3 select-none">&ldquo;</div>
                <p className="text-warm-700 leading-relaxed text-sm flex-1 mb-6 break-words hyphens-auto">
                  {item.quote}
                </p>
                <div className="border-t border-warm-200 pt-4">
                  <p className="font-heading text-warm-900 text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-accent mt-0.5">{item.role}</p>
                  <p className="text-xs text-warm-400 mt-0.5">{item.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

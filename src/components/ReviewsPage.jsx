import { useState, useEffect, useCallback, useRef } from 'react';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

function ReviewCard({ item }) {
  return (
    <div className="flex flex-col bg-white border border-warm-200 rounded-xl p-6 hover:border-warm-300 transition-colors h-full">
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
  );
}

export default function ReviewsPage() {
  const { testimonials } = content;
  const ref = useFadeIn();
  useSEO({
    title: 'Reviews — Myron Melekson',
    description: 'What clients, colleagues, and people Myron Melekson has coached and worked with say about working together.',
    ogUrl: 'https://melekson.com/reviews',
  });
  const items = testimonials.items;

  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  // Responsive: 1 on mobile, 3 on md+
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  // Reset to page 0 if perPage changes and page is out of range
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [perPage, totalPages]);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [paused, next, totalPages]);

  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Reviews</p>
          <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-3">
            {testimonials.heading}
          </h1>
          <p className="fade-in text-warm-500 mb-12 text-lg">
            {testimonials.subheading}
          </p>

          <div
            className="fade-in"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            ref={containerRef}
          >
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 min-h-[280px]">
              {visible.map((item, i) => (
                <ReviewCard key={`${page}-${i}`} item={item} />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="text-warm-400 hover:text-warm-900 transition-colors p-2 text-xl"
                aria-label="Previous"
              >
                ←
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === page ? 'bg-accent' : 'bg-warm-300 hover:bg-warm-400'}`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="text-warm-400 hover:text-warm-900 transition-colors p-2 text-xl"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}

import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Testimonials() {
  const { testimonials } = content;
  const ref = useFadeIn();

  if (!testimonials?.items?.length) return null;

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {testimonials.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-12 text-lg">
          {testimonials.subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.map((item, i) => (
            <div
              key={i}
              className="fade-in flex flex-col bg-warm-50 border border-warm-200 rounded-xl p-6 hover:border-warm-300 transition-colors"
            >
              {/* Quote mark */}
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
  );
}

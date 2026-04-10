import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const categoryColor = {
  Event: 'bg-accent/10 text-accent',
  Community: 'bg-blue-100 text-blue-800',
  Press: 'bg-purple-100 text-purple-800',
  Milestone: 'bg-yellow-100 text-yellow-800',
};

export default function Updates() {
  const { updates } = content;
  const ref = useFadeIn();

  return (
    <section id="updates" className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {updates.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {updates.subheading}
        </p>

        <div className="space-y-8">
          {updates.items.map((item) => (
            <div
              key={item.id}
              className="fade-in border-l-2 border-warm-200 pl-6 relative"
            >
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm text-warm-400">{item.date}</span>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    categoryColor[item.category] || 'bg-warm-100 text-warm-600'
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <h3 className="font-heading text-lg text-warm-900 mb-1">
                {item.title}
              </h3>
              <p className="text-warm-600 leading-relaxed">{item.body}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  Read more &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

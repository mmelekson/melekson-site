import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Media() {
  const { media } = content;
  const ref = useFadeIn();

  if (!media.items.length) return null;

  return (
    <section id="media" className="py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {media.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {media.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {media.items.map((item, i) => (
            <div key={i} className="fade-in bg-white rounded-xl border border-warm-200 overflow-hidden hover:border-warm-300 transition-colors">
              {item.type === 'video' && item.embedId && (
                <div className="aspect-video bg-warm-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}`}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-warm-400 mb-2 block">
                  {item.type === 'video' ? 'Interview' : item.type === 'podcast' ? 'Podcast' : 'Press'}
                </span>
                <h3 className="font-heading text-lg text-warm-900 mb-1">{item.title}</h3>
                {item.show && <p className="text-sm text-warm-500 mb-3">{item.show}</p>}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
                  >
                    Watch / Listen &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

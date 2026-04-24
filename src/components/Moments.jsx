import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Moments() {
  const { moments } = content;
  const ref = useFadeIn();

  if (!moments.photos.length) return null;

  return (
    <section id="moments" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {moments.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {moments.subheading}
        </p>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {moments.photos.map((photo, i) => (
            <div key={i} className="fade-in break-inside-avoid rounded-xl overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption || ''}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full object-cover"
              />
              {photo.caption && (
                <p className="text-xs text-warm-500 mt-2 px-1">{photo.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

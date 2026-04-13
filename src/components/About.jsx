import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function About() {
  const { about } = content;
  const ref = useFadeIn();

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-8">
          {about.heading}
        </h2>
        <div className="space-y-5">
          {about.body.map((paragraph, i) => (
            <p key={i} className="fade-in text-warm-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        {/* Stats strip */}
        <div className="fade-in mt-10 grid grid-cols-3 gap-4 border-t border-warm-200 pt-10 mb-8">
          <div>
            <p className="font-heading text-3xl text-accent">20+</p>
            <p className="text-sm text-warm-500 mt-1">Years building</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-accent">3</p>
            <p className="text-sm text-warm-500 mt-1">Active companies</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-accent">SF</p>
            <p className="text-sm text-warm-500 mt-1">South Florida</p>
          </div>
        </div>

        <div className="fade-in flex flex-wrap gap-3">
          {about.credentials.map((cred, i) => (
            <span
              key={i}
              className="text-sm bg-warm-100 text-warm-600 px-4 py-2 rounded-full"
            >
              {cred}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

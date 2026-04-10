import { content } from '../data/content';

export default function Hero() {
  const { hero, nav } = content;

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-warm-500 mb-4 tracking-wide uppercase">
              {nav.name}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-900 leading-tight mb-4">
              {hero.headline}
            </h1>
            <p className="font-heading text-3xl sm:text-4xl lg:text-5xl text-accent mb-6">
              {hero.subheadline}
            </p>
            <p className="text-lg text-warm-500 mb-8">
              {hero.tagline}
            </p>
            <a
              href={hero.cta.href}
              className="inline-block bg-accent text-warm-50 px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
            >
              {hero.cta.label}
            </a>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-warm-200 border-2 border-dashed border-warm-300 flex items-center justify-center">
              <p className="text-warm-400 text-sm text-center px-4">
                Your photo here<br />
                <span className="text-xs">/assets/myron-hero.jpg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

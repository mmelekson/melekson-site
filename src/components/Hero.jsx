import { useEffect, useRef } from 'react';
import { content } from '../data/content';

export default function Hero() {
  const { hero, nav } = content;
  const ref = useRef(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll('.fade-in');
    if (!elements) return;
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 120);
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-warm-50 to-warm-100 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="fade-in text-sm font-medium text-warm-500 mb-4 tracking-wide uppercase">
              {nav.name}
            </p>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-900 leading-tight mb-4">
              {hero.headline}
            </h1>
            <p className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl text-accent mb-6">
              {hero.subheadline}
            </p>
            <p className="fade-in text-lg text-warm-500 mb-8">
              {hero.tagline}
            </p>
            <div className="fade-in flex flex-wrap gap-3">
              <a
                href={hero.cta.href}
                className="inline-block bg-accent text-warm-50 px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
              >
                {hero.cta.label}
              </a>
              <a
                href="https://calendly.com/mpower-myron/video-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-warm-50 transition-colors"
              >
                Book a call
              </a>
            </div>

            {/* Email capture */}
            <form
              action="https://formspree.io/f/xdayozlz"
              method="POST"
              className="fade-in mt-6 flex gap-2 max-w-sm"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm focus:outline-none focus:border-accent placeholder:text-warm-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-warm-900 text-warm-50 rounded-lg text-sm font-medium hover:bg-warm-700 transition-colors whitespace-nowrap"
              >
                Get my posts
              </button>
            </form>
          </div>

          <div className="fade-in flex justify-center md:justify-end">
            <img
              src="/myron-hero.png"
              alt="Myron Melekson"
              className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl object-cover object-top shadow-lg"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in flex justify-center mt-16">
          <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-warm-400 hover:text-warm-600 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

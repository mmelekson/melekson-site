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
    <section className="min-h-screen flex items-center pt-20 pb-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 w-full">
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
            <a
              href={hero.cta.href}
              className="fade-in inline-block bg-accent text-warm-50 px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
            >
              {hero.cta.label}
            </a>
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

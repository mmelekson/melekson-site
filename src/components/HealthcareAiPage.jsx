import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

export default function HealthcareAiPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Healthcare AI — Myron Melekson',
    description:
      'A focus area for Myron Melekson: helping healthcare practices and groups apply AI to operations such as claims, scheduling, and admin workload, responsibly.',
    ogUrl: 'https://melekson.com/healthcare-ai',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Focus</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Healthcare AI</h1>
        <div className="fade-in space-y-4 text-warm-700 text-lg leading-relaxed">
          <p>
            This is a focus area: helping healthcare practices and groups apply AI to operations such as claims, scheduling, and admin workload, responsibly.
          </p>
          <p>
            The work is the operating side of a practice. It is not a claim about clinical outcomes, and this page does not name clients or report results.
          </p>
        </div>
        {/* TODO(myron): Add any public talks or case studies you want listed. None are published here until you name them. */}
        <p className="fade-in mt-10 text-sm text-warm-500">
          <Link to="/teaching" className="text-accent hover:underline">Teaching</Link>
          {' · '}
          <Link to="/contact" className="text-accent hover:underline">Contact</Link>
        </p>
      </div>
    </section>
  );
}

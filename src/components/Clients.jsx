import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Clients() {
  const { clients } = content;
  const ref = useFadeIn();

  return (
    <section id="clients" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {clients.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {clients.subheading}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.items.map((client) => (
            <div
              key={client.name}
              className="fade-in bg-white rounded-xl p-6 border border-warm-200 hover:border-warm-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-warm-50 flex items-center justify-center mb-4 overflow-hidden">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="w-10 h-10 object-contain" />
                ) : (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
              </div>
              <h3 className="font-heading text-lg text-warm-900 mb-1">
                {client.name}
              </h3>
              <p className="text-xs font-medium text-accent mb-2">{client.role}</p>
              <p className="text-warm-600 text-sm leading-relaxed mb-3">
                {client.description}
              </p>
              <p className="text-xs text-warm-400">{client.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

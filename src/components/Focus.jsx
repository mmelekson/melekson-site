import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

const areas = [
  {
    title: 'Teaching',
    href: '/teaching',
    text: 'Adjunct faculty joining in 2027, and the Entrepreneur Certificate Program at The Business Center Miami.',
  },
  {
    title: 'Healthcare AI',
    href: '/healthcare-ai',
    text: 'A focus area: helping healthcare practices and groups apply AI to operations, responsibly.',
  },
  {
    title: 'Community',
    href: '/community',
    text: 'GNMCC, local chambers, the Aventura Tech Council, and Hack Aventura.',
  },
  {
    title: 'Contact',
    href: '/contact',
    text: 'A note, a correction, or the Aventura Civic Brief.',
  },
];

export default function Focus() {
  const ref = useFadeIn();

  return (
    <section id="work" className="py-16 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-3">What I work on</h2>
        <p className="fade-in text-warm-600 text-lg mb-8 max-w-2xl">
          Teaching, healthcare AI, community service, and a fact-first civic record. One site for the work.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <Link
              key={area.href}
              to={area.href}
              className="fade-in block bg-warm-50 border border-warm-200 rounded-xl p-5 hover:border-accent transition-colors"
            >
              <h3 className="font-heading text-xl text-warm-900 mb-2">{area.title}</h3>
              <p className="text-warm-600 text-sm leading-relaxed">{area.text}</p>
            </Link>
          ))}
          <div className="fade-in bg-warm-50 border border-warm-200 rounded-xl p-5">
            <h3 className="font-heading text-xl text-warm-900 mb-2">Writing / Books</h3>
            <p className="text-warm-600 text-sm leading-relaxed mb-3">
              Essays on AI, the economy, and building, and the book in progress.
            </p>
            <div className="flex flex-col gap-1">
              <Link to="/writing" className="text-sm font-medium text-accent hover:underline">Writing</Link>
              <Link to="/#book" className="text-sm font-medium text-accent hover:underline">The book</Link>
            </div>
          </div>
          <div className="fade-in bg-warm-50 border border-warm-200 rounded-xl p-5">
            <h3 className="font-heading text-xl text-warm-900 mb-2">Civic</h3>
            <p className="text-warm-600 text-sm leading-relaxed mb-3">
              A brief after each Aventura City Commission meeting, and a list of who represents the city.
            </p>
            <div className="flex flex-col gap-1">
              <Link to="/aventura-watch" className="text-sm font-medium text-accent hover:underline">Aventura Watch</Link>
              <Link to="/who-represents-aventura" className="text-sm font-medium text-accent hover:underline">Who Represents Aventura</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

const covered = [
  'The item, as it appears on the agenda or in the minutes.',
  'The motion.',
  'The vote by member.',
  'Links to the minutes and the video.',
];

export default function AventuraWatchPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Aventura Watch — Myron Melekson',
    description:
      'A brief within 72 hours of each Aventura City Commission meeting: the item, the motion, the vote by member, and links to the minutes and video.',
    ogUrl: 'https://melekson.com/aventura-watch',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Series</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Aventura Watch</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-8">
          A brief within 72 hours of each Aventura City Commission meeting. It sticks to the record of that meeting.
        </p>

        <div className="fade-in bg-white border border-warm-200 rounded-xl p-6 mb-8">
          <h2 className="font-heading text-2xl text-warm-900 mb-4">What each brief covers</h2>
          <ul className="space-y-2 text-warm-700">
            {covered.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="fade-in text-warm-800 text-lg font-medium mb-6">First brief coming soon.</p>

        <p className="fade-in text-warm-600 leading-relaxed mb-8">
          How issues are chosen, how opinion is labeled, and how to reply or ask for a correction are on the{' '}
          <Link to="/methodology" className="text-accent hover:underline">methodology page</Link>.
          The offices that represent the city are listed, with links to their official pages, on{' '}
          <Link to="/who-represents-aventura" className="text-accent hover:underline">Who Represents Aventura</Link>.
          The note that follows each meeting is the{' '}
          <Link to="/contact" className="text-accent hover:underline">Aventura Civic Brief</Link>.
        </p>
      </div>
    </section>
  );
}

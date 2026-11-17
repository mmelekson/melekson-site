import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

export default function CommunityPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Community — Myron Melekson',
    description:
      'Community roles: Greater North Miami Chamber of Commerce Board of Directors, Aventura Marketing Council, Aventura Tech Council, Hack Aventura, and the Russian-Speaking American Chamber of South Florida.',
    ogUrl: 'https://melekson.com/community',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Community</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Community</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-10">
          Boards, chambers, and student builders in and around Aventura.
        </p>

        <div className="space-y-6">
          {/* TODO(myron): Sunbiz's officer list for The Greater North Miami Chamber of Commerce, Inc. (document N00623), retrieved 2026-11-17, does not list you. Confirm the exact board title. Public site: https://greaternorthmiami.org/ */}
          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Greater North Miami Chamber of Commerce</h2>
            <p className="text-warm-700 leading-relaxed">Board of Directors.</p>
            <p className="mt-3 text-sm">
              <a href="https://greaternorthmiami.org/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">greaternorthmiami.org</a>
            </p>
          </section>

          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Aventura Marketing Council / Chamber of Commerce</h2>
            <p className="text-warm-700 leading-relaxed">Member.</p>
          </section>

          {/* TODO(myron): "Champion" is not a confirmed formal title. Confirm the role at the Aventura Tech Council. */}
          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Aventura Tech Council</h2>
            <p className="text-warm-700 leading-relaxed">Champion.</p>
          </section>

          {/* TODO(myron): Confirm Hack Aventura ran before it is described in the past tense. Until then this stays neutral. */}
          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Hack Aventura</h2>
            <p className="text-warm-700 leading-relaxed">
              Planned for June 2026 with Aventura City of Excellence School / Aventura Charter High School.
            </p>
          </section>

          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Russian-Speaking American Chamber of South Florida</h2>
            <p className="text-warm-700 leading-relaxed">Member.</p>
            <p className="mt-3 text-sm">
              <a href="https://racsouthflorida.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">racsouthflorida.com</a>
            </p>
          </section>
        </div>

        <p className="fade-in mt-10 text-sm text-warm-500">
          Civic reporting is separate: <Link to="/aventura-watch" className="text-accent hover:underline">Aventura Watch</Link>
          {' and '}
          <Link to="/who-represents-aventura" className="text-accent hover:underline">Who Represents Aventura</Link>.
        </p>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

// TODO(myron): myfloridahouse.gov rejected requests from this environment ("Request Rejected"), so the House profile URL was not opened here. Confirm https://www.myfloridahouse.gov/Sections/Representatives/details.aspx?MemberId=5098&LegislativeTermId=92 is Rep. Lucia Báez-Geller. Member id 5098 and term 92 came from a directory that pointed at the official House site on November 16, 2026.
const HOUSE_URL =
  'https://www.myfloridahouse.gov/Sections/Representatives/details.aspx?MemberId=5098&LegislativeTermId=92';
const SENATE_URL = 'https://www.flsenate.gov/Senators/s37';
const CITY_URL = 'https://www.cityofaventura.com/200/City-Commission';

// Full names and seats were read from https://www.cityofaventura.com/200/City-Commission on November 17, 2026.
const commissioners = [
  { name: 'Gustavo Blachman', seat: 'Seat 1' },
  { name: 'Cindy Orlinsky', seat: 'Seat 2' },
  { name: 'Clifford B. Ain', seat: 'Seat 3' },
  { name: 'Paul A. Kruss', seat: 'Seat 4' },
  { name: 'Rachel S. Friedland, Esq.', seat: 'Seat 5' },
  { name: 'Amit Bloom', seat: 'Seat 6' },
];

function ExternalLink({ href, children }) {
  return (
    <a href={href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function WhoRepresentsPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Who Represents Aventura — Myron Melekson',
    description:
      'A neutral list of who represents Aventura: Florida House District 106, Florida Senate District 37, and the Aventura City Commission, with links to official pages.',
    ogUrl: 'https://melekson.com/who-represents-aventura',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Reference</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Who Represents Aventura</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-10">
          Aventura residents are represented at city hall and in the Florida Legislature. This page names the offices and links to the official pages. It does not score, rank, or characterize anyone.
        </p>

        <div className="space-y-8">
          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Florida House</h2>
            <p className="text-warm-700 leading-relaxed">
              State House District 106 is held by Rep. Lucia Báez-Geller (D), elected November 3, 2026.
            </p>
            <p className="mt-3 text-sm">
              <ExternalLink href={HOUSE_URL}>Official profile on myfloridahouse.gov</ExternalLink>
            </p>
          </section>

          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Florida Senate</h2>
            <p className="text-warm-700 leading-relaxed">
              State Senate District 37 is held by Sen. Jason W. B. Pizzo (NPA). The Florida Senate lists his party as no party affiliation.
            </p>
            <p className="mt-3 text-sm">
              <ExternalLink href={SENATE_URL}>Official profile on flsenate.gov</ExternalLink>
            </p>
          </section>

          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">City of Aventura</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              Aventura is led by Mayor Howard S. Weinberg, Esq., and Commissioners Blachman, Orlinsky, Ain, Kruss, Friedland, and Bloom. The city’s commission page gives these full names and seats:
            </p>
            <ul className="space-y-2 text-warm-700 mb-4">
              <li>
                <ExternalLink href={CITY_URL}>Mayor Howard S. Weinberg, Esq.</ExternalLink>
              </li>
              {commissioners.map((person) => (
                <li key={person.seat}>
                  <ExternalLink href={CITY_URL}>{person.name}</ExternalLink>
                  <span className="text-warm-500"> — Commissioner, {person.seat}</span>
                </li>
              ))}
            </ul>
            <p className="text-warm-600 text-sm leading-relaxed">
              The city describes a commission-manager government. The City Commission is the legislative body. The mayor presides at meetings and casts a vote with the same weight as any commissioner. The city manager is the chief executive and runs day-to-day operations.
            </p>
            <p className="mt-3 text-sm text-warm-500">
              Roster checked against{' '}
              <ExternalLink href={CITY_URL}>cityofaventura.com/200/City-Commission</ExternalLink>{' '}
              on November 17, 2026.
            </p>
          </section>
        </div>

        <p className="fade-in mt-10 text-sm text-warm-500">
          How this site uses these records is on the <Link to="/methodology" className="text-accent hover:underline">methodology page</Link>.
          Meeting briefs will be posted on <Link to="/aventura-watch" className="text-accent hover:underline">Aventura Watch</Link>.
        </p>
      </div>
    </section>
  );
}

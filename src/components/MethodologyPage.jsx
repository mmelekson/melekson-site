import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

// TODO(myron): myfloridahouse.gov rejected requests from the environment that prepared this page ("Request Rejected"). Confirm the House roll-call URL below still opens Rep. Lucia Báez-Geller's voting record. Member id 5098 and legislative term 92 came from a directory that pointed at the official House site on November 16, 2026.
const HOUSE_VOTES =
  'https://www.myfloridahouse.gov/Sections/Representatives/votingrecords.aspx?MemberId=5098&LegislativeTermId=92';

const records = [
  {
    label: 'Florida House roll calls',
    href: HOUSE_VOTES,
    detail: 'The vote record for the representative of District 106, on myfloridahouse.gov.',
  },
  {
    label: 'Florida Senate',
    href: 'https://www.flsenate.gov/Senators/s37',
    detail: 'The official page for Senate District 37, on flsenate.gov.',
  },
  {
    label: 'Aventura City Commission agendas',
    href: 'https://www.cityofaventura.com/AgendaCenter/City-Commission-Meetings-2/',
    detail: 'Agendas for City Commission meetings, on cityofaventura.com.',
  },
  {
    label: 'Minutes and recaps',
    href: 'https://www.cityofaventura.com/159/Agendas-Minutes-Recaps',
    detail: 'The city page for agendas, minutes, and meeting recaps.',
  },
  {
    label: 'Meeting video',
    href: 'https://www.cityofaventura.com/477/Watch-AVTV',
    detail: 'AVTV, the city’s page for live and on-demand commission video.',
  },
];

export default function MethodologyPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Methodology & Corrections — Myron Melekson',
    description:
      'How Aventura Watch picks issues, links claims to the public record, labels opinion, offers a right of reply, and logs corrections.',
    ogUrl: 'https://melekson.com/methodology',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Standards</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Methodology & Corrections</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-10">
          This site reports what the public record says about Aventura. Party is not a reason to cover a matter, and it is not a reason to skip one. Nothing here asks you to support or oppose anyone.
        </p>

        <div className="space-y-10 text-warm-700 leading-relaxed">
          <section className="fade-in">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">How an issue is picked</h2>
            <p className="mb-4">An item is in scope when one of these is true:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>It is on a published agenda of the Aventura City Commission.</li>
              <li>It is a recorded vote of the Florida House member for District 106, the Florida Senate member for District 37, or the Aventura City Commission, and the matter applies to Aventura.</li>
            </ol>
            <p className="mt-4">
              A claim that cannot be linked to a primary record is not published. Selection is not made by personality, and this site does not rate officials.
            </p>
          </section>

          <section className="fade-in">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Primary records</h2>
            <p className="mb-4">Every factual claim in a brief links to one of these sources, or to the specific document they host:</p>
            <ul className="space-y-3">
              {records.map((record) => (
                <li key={record.href}>
                  <a href={record.href} className="text-accent hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    {record.label}
                  </a>
                  <span className="text-warm-600"> — {record.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="fade-in">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Opinion is labeled</h2>
            <p>
              The item, the motion, and the vote by member are the record. They are not opinion. Any paragraph that interprets the record is marked <span className="font-medium text-warm-900">Opinion</span>, in the brief, before the sentence it covers.
            </p>
          </section>

          <section className="fade-in">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Right of reply</h2>
            <p>
              An official named in a brief has a standing right of reply. Send it to{' '}
              <a href="mailto:myron@melekson.com" className="text-accent hover:underline">myron@melekson.com</a>.
              A reply that addresses the record is linked from the brief, unedited, with the date it arrived.
            </p>
          </section>

          <section className="fade-in">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Corrections</h2>
            {/* TODO(myron): The log is empty on purpose. Confirm these columns — date, page, what was wrong, correction — before the first entry is posted. */}
            <p className="mb-4">
              When a published fact is wrong, the correction is listed here with the date, the page, what was wrong, and what it was changed to. The original page is updated and points back to this log.
            </p>
            <div className="overflow-x-auto border border-warm-200 rounded-xl bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Corrections log</caption>
                <thead className="text-warm-500 border-b border-warm-200">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Date</th>
                    <th scope="col" className="px-4 py-3 font-medium">Page</th>
                    <th scope="col" className="px-4 py-3 font-medium">What was wrong</th>
                    <th scope="col" className="px-4 py-3 font-medium">Correction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-warm-600">No corrections have been posted.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className="fade-in text-sm text-warm-500">
            The series this method applies to is <Link to="/aventura-watch" className="text-accent hover:underline">Aventura Watch</Link>.
            Offices and official pages are listed on <Link to="/who-represents-aventura" className="text-accent hover:underline">Who Represents Aventura</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

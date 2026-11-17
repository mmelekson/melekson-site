import { Link } from 'react-router-dom';

const credentials = [
  'Board of Directors, Greater North Miami Chamber of Commerce',
  'Program Director, Business Center Miami Entrepreneur Certificate Program',
  'Joining Nova Southeastern University in 2027',
];

const stats = [
  { value: '40', label: 'Attended Cohort One' },
  { value: '24', label: 'Earned certificates' },
  { value: '2010', label: 'Started at Arrow' },
  { value: 'June 2026', label: 'Hack Aventura' },
];

const cards = [
  {
    title: 'Teaching',
    href: '/teaching',
    text: 'Cohort One of the Entrepreneur Certificate Program, and joining Nova Southeastern University in 2027.',
  },
  {
    title: 'Healthcare AI',
    href: '/healthcare-ai',
    text: 'Helping practices apply AI to claims, scheduling, and admin workload, responsibly.',
  },
  {
    title: 'Community',
    href: '/community',
    text: 'GNMCC board, the Aventura Tech Council, and Hack Aventura.',
  },
];

// TODO(myron): Confirm the years that were not previously printed on the site: Arrow in Aug 2010, independent supply-chain consulting in 2012–2013, Q-IT in 2015–2018, and Myron Consulting from 2018.
const timeline = [
  { when: 'Aug 2010', what: 'Arrow Electronics, after Purdue' },
  { when: '2012–2013', what: 'Independent supply-chain consulting' },
  { when: 'Zebra', what: 'Zebra Technologies' },
  { when: '2015–2018', what: 'Q-IT (AI/ML)' },
  { when: '2018', what: 'Myron Consulting' },
  { when: '2022', what: 'Formalized as Mpower Sourcing' },
  { when: 'Jun–Aug 2026', what: 'Entrepreneur Certificate Program, Cohort One' },
  { when: 'Board', what: 'Greater North Miami Chamber of Commerce' },
  { when: '2027', what: 'Joining Nova Southeastern University' },
];

export default function HomeStory() {
  return (
    <>
      <section className="border-y border-warm-200 bg-white">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <p key={item} className="text-sm leading-relaxed text-warm-700">
              {item}
            </p>
          ))}
          <p className="text-sm leading-relaxed text-warm-700">
            Founder & CEO of Mpower (founded 2022).{' '}
            <a className="text-accent hover:underline" href="https://mpowersourcing.com" target="_blank" rel="noopener noreferrer">mpowersourcing.com</a>
            {' · '}
            <a className="text-accent hover:underline" href="https://mpoweragents.ai" target="_blank" rel="noopener noreferrer">mpoweragents.ai</a>
          </p>
        </div>
      </section>

      <section className="bg-accent text-warm-50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-warm-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-3xl text-warm-900">What I work on</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="rounded-2xl border border-warm-200 bg-white p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-heading text-2xl text-warm-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-600">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl text-warm-900">Career</h2>
          <ol className="mt-8 space-y-5 border-l border-warm-200 pl-6">
            {timeline.map((item) => (
              <li key={item.when + item.what} className="relative">
                <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-xs font-medium uppercase tracking-wide text-warm-400">{item.when}</p>
                <p className="text-warm-800">{item.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

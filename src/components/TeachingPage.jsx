import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';
import { PhotoGallery } from './PhotoGallery';

const topics = [
  'Financial Foundations',
  'Pricing, Profit & Financial Tools',
  'Funding & Capital Readiness',
  'Marketing & Sales Engine',
  'Brand & Story',
  'Website & Digital Presence',
  'AI for Your Business',
  'Growth, Wealth & Resilience',
  'Pitch & Launch Day',
];

export default function TeachingPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Teaching — Myron Melekson',
    description:
      'Teaching: joining Nova Southeastern University as adjunct faculty in 2027, and Cohort One of the Entrepreneur Certificate Program at The Business Center Miami.',
    ogUrl: 'https://melekson.com/teaching',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Teaching</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Teaching</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-10">
          Classroom work and a certificate program for entrepreneurs in North Miami.
        </p>

        <div className="space-y-8">
          {/* TODO(myron): Finalize the NSU adjunct appointment, including JSON-LD, once hiring completes. */}
          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">Nova Southeastern University</h2>
            <p className="text-warm-700 leading-relaxed">
              Joining Nova Southeastern University's H. Wayne Huizenga College of Business and Entrepreneurship as adjunct faculty in 2027 (OPS 3880 Operations Management).
            </p>
            <p className="text-warm-700 leading-relaxed mt-3">
              The course is undergraduate, in Decision Sciences, Winter II 2027 (March 8 to May 2, 2027).
            </p>
          </section>

          <section className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-3">The Business Center Miami</h2>
            <p className="text-warm-700 leading-relaxed">
              The Business Center Miami is in North Miami and affiliated with the Greater North Miami Chamber of Commerce. Cohort One of the Entrepreneur Certificate Program ran June 15 to Aug 31, 2026. It was a 12-week program on Monday mornings. I was Program Director, Curriculum Lead & Lead Instructor.
            </p>
            <p className="text-warm-700 leading-relaxed mt-3">
              I built the full 12-week curriculum kit: decks, facilitator guides, worksheets, and evaluations. I taught Week 10, “AI for Your Business,” on Aug 17, 2026. Participants watched AI working on real businesses in the room.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-warm-50 p-4">
                <p className="font-heading text-3xl text-accent">40</p>
                <p className="mt-1 text-xs text-warm-500">Attended at least one session</p>
              </div>
              <div className="rounded-xl bg-warm-50 p-4">
                <p className="font-heading text-3xl text-accent">24</p>
                <p className="mt-1 text-xs text-warm-500">Earned certificates</p>
              </div>
              <div className="rounded-xl bg-warm-50 p-4">
                <p className="font-heading text-2xl text-accent">Aug 31</p>
                <p className="mt-1 text-xs text-warm-500">Pitch & Launch Day, 2026</p>
              </div>
            </div>
            <p className="text-warm-700 leading-relaxed mt-4">
              40 people attended at least one session. 24 earned certificates at Pitch & Launch Day on Aug 31, 2026.
            </p>
            <p className="text-warm-700 leading-relaxed mt-3">Cohort Two is being planned.</p>
            <h3 className="font-heading text-lg text-warm-900 mt-6 mb-3">Topics in the program</h3>
            {/* TODO(myron): These are the topics provided for the site. A week number is stated only for Week 10 and for Pitch & Launch Day. */}
            <ul className="space-y-2 text-warm-700">
              {topics.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>
                    {topic}
                    {topic === 'AI for Your Business' ? ' — Week 10, Aug 17, 2026' : ''}
                    {topic === 'Pitch & Launch Day' ? ' — Aug 31, 2026' : ''}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <PhotoGallery items={content.photos.teaching} />

        <p className="fade-in mt-10 text-sm text-warm-500">
          <Link to="/community" className="text-accent hover:underline">Community</Link>
          {' · '}
          <Link to="/healthcare-ai" className="text-accent hover:underline">Healthcare AI</Link>
        </p>
      </div>
    </section>
  );
}

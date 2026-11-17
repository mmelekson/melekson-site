import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function TeachingBlock() {
  const ref = useFadeIn();

  return (
    <section id="teaching" className="py-16" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Teaching</p>
        <h2 className="fade-in font-heading text-3xl text-warm-900 mb-4">In the classroom</h2>
        <div className="fade-in space-y-4 text-warm-700 leading-relaxed text-lg">
          <p>
            Joining Nova Southeastern University, H. Wayne Huizenga College of Business and Entrepreneurship, as adjunct faculty in 2027. Decision Sciences. The course is OPS 3880 Operations Management (undergraduate), Winter II 2027 (March 8 to May 2, 2027).
          </p>
          <p>
            Cohort One of the Entrepreneur Certificate Program at The Business Center Miami ran June 15 to Aug 31, 2026. I built the 12-week curriculum kit and taught Week 10, “AI for Your Business.” Cohort Two is being planned.
          </p>
        </div>
        <p className="fade-in mt-6">
          <Link to="/teaching" className="text-sm font-medium text-accent hover:underline">Teaching, in full</Link>
        </p>
      </div>
    </section>
  );
}

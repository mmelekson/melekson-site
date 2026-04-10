import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const statusColor = {
  Active: 'bg-green-100 text-green-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
};

export default function Projects() {
  const { projects } = content;
  const ref = useFadeIn();

  return (
    <section id="building" className="py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {projects.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-10 text-lg">
          {projects.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="fade-in bg-white rounded-xl p-6 border border-warm-200 hover:border-warm-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium uppercase tracking-wider text-warm-400">
                  {project.label}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    statusColor[project.status] || 'bg-accent/10 text-accent'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="font-heading text-xl text-warm-900 mb-2">
                {project.name}
              </h3>
              <p className="text-warm-600 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  {project.link_label} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

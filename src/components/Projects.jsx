import { useState } from 'react';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const statusColor = {
  Active: 'bg-green-100 text-green-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
};

const icons = {
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cpu: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  link: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  handshake: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  zap: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'building', label: 'Building' },
  { key: 'network', label: 'Network' },
  { key: 'community', label: 'Community' },
];

const tabMap = {
  building: ['Company', 'Product', 'Partnership'],
  network: ['Networking', 'Chamber'],
  community: ['Community Initiative', 'Event'],
};

export default function Projects() {
  const { projects } = content;
  const ref = useFadeIn();
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? projects.items
    : projects.items.filter(p => tabMap[activeTab]?.includes(p.label));

  return (
    <section id="building" className="py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-2">
          {projects.heading}
        </h2>
        <p className="fade-in text-warm-500 mb-8 text-lg">
          {projects.subheading}
        </p>

        {/* Tabs */}
        <div className="fade-in flex gap-2 mb-8 overflow-x-auto pb-1 no-scrollbar whitespace-nowrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-accent text-warm-50'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 border border-warm-200 hover:border-warm-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                {project.logo ? (
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border border-warm-100">
                    <img src={project.logo} alt={project.name} className="w-8 h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                ) : project.icon && icons[project.icon] ? (
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                    {icons[project.icon]}
                  </div>
                ) : null}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

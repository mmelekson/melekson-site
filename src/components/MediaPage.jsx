import { Helmet } from 'react-helmet-async';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const typeLabel = {
  video: 'Video',
  podcast: 'Podcast',
  article: 'Article',
  press: 'Press',
  profile: 'Profile',
};

const typeIcon = {
  podcast: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  article: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  press: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  profile: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  video: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  ),
};

export default function MediaPage() {
  const { media } = content;
  const ref = useFadeIn();

  return (
    <>
    <Helmet>
      <title>Media & Interviews — Myron Melekson</title>
      <meta name="description" content="Podcast appearances, video interviews, press mentions, and profiles featuring Myron Melekson — founder, builder, and community leader in South Florida." />
      <link rel="canonical" href="https://melekson.com/media" />
      <meta property="og:title" content="Media & Interviews — Myron Melekson" />
      <meta property="og:description" content="Podcast appearances, video interviews, press mentions, and profiles featuring Myron Melekson." />
      <meta property="og:url" content="https://melekson.com/media" />
      <meta property="og:image" content="https://melekson.com/myron-hero.png" />
    </Helmet>
    <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Archive</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-3">
          {media.heading}
        </h1>
        <p className="fade-in text-warm-500 mb-12 text-lg max-w-2xl">
          {media.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {media.items.map((item, i) => (
            <div key={i} className="fade-in bg-white rounded-xl border border-warm-200 overflow-hidden hover:border-warm-300 transition-colors">
              {/* Vimeo embed */}
              {item.type === 'video' && item.vimeoId && (
                <div className="aspect-video bg-warm-100">
                  <iframe
                    src={`https://player.vimeo.com/video/${item.vimeoId}`}
                    title={item.title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {/* YouTube embed */}
              {item.type === 'video' && item.embedId && (
                <div className="aspect-video bg-warm-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}`}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent">{typeIcon[item.type]}</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-warm-400">
                    {typeLabel[item.type] || item.type}
                  </span>
                  {item.date && <span className="text-xs text-warm-300">&middot; {item.date}</span>}
                </div>
                <h3 className="font-heading text-lg text-warm-900 mb-1">{item.title}</h3>
                {item.show && <p className="text-sm text-warm-500 mb-2">{item.show}</p>}
                {item.description && <p className="text-sm text-warm-600 leading-relaxed mb-3">{item.description}</p>}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
                  >
                    {item.type === 'podcast' ? 'Listen' : item.type === 'article' ? 'Read' : item.type === 'profile' ? 'View' : 'Watch'} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const icons = {
  LinkedIn: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

export default function Connect() {
  const { connect } = content;
  const ref = useFadeIn();

  return (
    <section id="connect" className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-900 mb-4">
          {connect.heading}
        </h2>
        <p className="fade-in text-warm-600 text-lg mb-10 max-w-xl mx-auto">
          {connect.body}
        </p>
        {/* TODO(myron): Removed the Mpower Calendly button (https://calendly.com/mpower-myron/video-call) from this section. Say if you want a personal scheduling link here. */}

        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          {connect.links.map((link) => {
            const external = link.href.startsWith('http');
            return (
              <a
                key={link.platform}
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-2 bg-warm-100 hover:bg-warm-200 text-warm-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {icons[link.platform]}
                {link.label}
              </a>
            );
          })}
        </div>
        <p className="fade-in mt-8 text-warm-600">
          {connect.mpower}{' '}
          <a href="https://mpowersourcing.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">mpowersourcing.com</a>
          {' · '}
          <a href="https://mpoweragents.ai" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">mpoweragents.ai</a>
        </p>
      </div>
    </section>
  );
}

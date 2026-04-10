import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Book() {
  const { book } = content;
  const ref = useFadeIn();

  return (
    <section id="book" className="py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="fade-in bg-warm-900 rounded-2xl p-8 sm:p-12 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Mock book cover */}
          <div className="flex justify-center">
            <div className="w-48 h-64 sm:w-56 sm:h-72 bg-warm-800 rounded-lg border border-warm-700 flex flex-col items-center justify-center p-6 shadow-2xl">
              <p className="font-heading text-xl text-warm-100 text-center leading-tight mb-4">
                Keep<br />Building
              </p>
              <div className="w-12 h-px bg-warm-600 mb-4" />
              <p className="text-warm-400 text-xs text-center">
                Myron Melekson
              </p>
              <p className="text-warm-600 text-[10px] mt-auto">Coming Soon</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-warm-400 mb-3 block">
              {book.status}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-warm-50 mb-4">
              {book.heading}
            </h2>
            <p className="text-warm-300 leading-relaxed text-lg mb-6">
              {book.teaser}
            </p>
            <a
              href={book.cta_href}
              className="inline-block bg-warm-50 text-warm-900 px-6 py-3 rounded-lg font-medium hover:bg-warm-100 transition-colors"
            >
              {book.cta_label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

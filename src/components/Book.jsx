import { useState, useEffect, useCallback, useRef } from 'react';
import { content } from '../data/content';
import { useFadeIn } from '../hooks/useFadeIn';

const quotes = [
  "He stared at my screen for a moment. 'Why do you have the Matrix on your computer screen?' That was it. That was the whole comment. And in that moment — not angrily, not dramatically, just clearly — I thought: Why is this man managing me?",
  "For six to eight weeks, our team kept showing up without pay. They kept coming in, kept working. They believed in what we were building enough to show up for free when we had nothing left to give them. I don't know what to say about that except that it was one of the most humbling things I've ever witnessed.",
];

export default function Book() {
  const { book } = content;
  const ref = useFadeIn();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const next = useCallback(() => setCurrent(i => (i + 1) % quotes.length), []);
  const prev = () => setCurrent(i => (i - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    if (paused || quotes.length <= 1) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section id="book" className="py-20 bg-warm-900" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="fade-in text-xs font-medium uppercase tracking-wider text-warm-400 mb-3 block">
          {book.status}
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl text-warm-50 mb-2">
          Keep Building
        </h2>
        <p className="fade-in text-warm-400 text-sm mb-16">From the book in progress</p>

        <div
          className="fade-in"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="min-h-[220px] flex items-center justify-center mb-10 px-4 sm:px-8">
            <p className="font-heading text-xl sm:text-2xl text-warm-100 leading-relaxed">
              &ldquo;{quotes[current]}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <button
              onClick={prev}
              className="text-warm-400 hover:text-warm-100 transition-colors p-2 text-xl"
              aria-label="Previous quote"
            >
              ←
            </button>
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-accent' : 'bg-warm-600 hover:bg-warm-400'}`}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-warm-400 hover:text-warm-100 transition-colors p-2 text-xl"
              aria-label="Next quote"
            >
              →
            </button>
          </div>
        </div>

        <div className="fade-in border-t border-warm-700 pt-10">
          <p className="text-warm-300 leading-relaxed mb-8">{book.teaser}</p>

          {submitted ? (
            <p className="text-warm-100 font-medium">You're on the list. I'll be in touch.</p>
          ) : (
            <form
              ref={formRef}
              action="https://formspree.io/f/xdayozlz"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const data = new FormData(formRef.current);
                await fetch('https://formspree.io/f/xdayozlz', { method: 'POST', body: data, headers: { Accept: 'application/json' } });
                setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="source" value="book-section" />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 rounded-lg border border-warm-600 bg-warm-800 text-warm-100 text-sm focus:outline-none focus:border-warm-400 placeholder:text-warm-500"
              />
              <select
                name="interest"
                required
                className="px-4 py-2.5 rounded-lg border border-warm-600 bg-warm-800 text-warm-100 text-sm focus:outline-none focus:border-warm-400"
              >
                <option value="">I want to…</option>
                <option value="pre-order">Pre-order the book</option>
                <option value="editor">Be an editor / early reader</option>
                <option value="both">Both</option>
              </select>
              <button
                type="submit"
                className="px-5 py-2.5 bg-warm-50 text-warm-900 rounded-lg text-sm font-medium hover:bg-warm-100 transition-colors whitespace-nowrap"
              >
                Count me in
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

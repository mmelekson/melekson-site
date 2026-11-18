import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

// TODO(myron): The contact form and the Aventura Civic Brief signup both post to the existing Formspree form https://formspree.io/f/xdayozlz (the same endpoint the homepage and book forms already use). No paid service was added. Split the Civic Brief onto its own form if you want a separate list.
const FORMSPREE = 'https://formspree.io/f/xdayozlz';

function useFormState() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return { status, onSubmit };
}

const fieldClass =
  'w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm focus:outline-none focus:border-accent placeholder:text-warm-400';

export default function ContactPage() {
  const ref = useFadeIn();
  const contact = useFormState();
  const brief = useFormState();
  useSEO({
    title: 'Contact — Myron Melekson',
    description:
      'Write to Myron Melekson, or sign up for the Aventura Civic Brief, a note after each Aventura City Commission meeting.',
    ogUrl: 'https://melekson.com/contact',
  });

  return (
    <section className="min-h-screen pt-40 pb-20 bg-warm-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">Contact</p>
        <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-4">Get in touch</h1>
        <p className="fade-in text-warm-600 text-lg leading-relaxed mb-12">
          For a question, a correction, or a reply from an official named in a brief, use the form or email{' '}
          <a href="mailto:myron@melekson.com" className="text-accent hover:underline">myron@melekson.com</a>.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Send a note</h2>
            <p className="text-warm-600 text-sm leading-relaxed mb-5">
              Name, email, and a message. It comes straight to me.
            </p>
            {contact.status === 'sent' ? (
              <p className="text-warm-800 font-medium">Received. I&apos;ll read it.</p>
            ) : (
              <form action={FORMSPREE} method="POST" onSubmit={contact.onSubmit} className="space-y-3">
                <input type="hidden" name="source" value="contact" />
                <input type="hidden" name="_subject" value="melekson.com contact" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-warm-600 mb-1">Name</label>
                  <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-warm-600 mb-1">Email</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-warm-600 mb-1">Message</label>
                  <textarea id="contact-message" name="message" required rows={5} className={fieldClass} />
                </div>
                <button
                  type="submit"
                  disabled={contact.status === 'sending'}
                  className="px-5 py-2.5 bg-accent text-warm-50 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors disabled:opacity-60"
                >
                  {contact.status === 'sending' ? 'Sending…' : 'Send'}
                </button>
                {contact.status === 'error' && (
                  <p className="text-sm text-warm-600">That didn&apos;t go through. Email myron@melekson.com instead.</p>
                )}
              </form>
            )}
          </div>

          <div className="fade-in bg-white border border-warm-200 rounded-xl p-6">
            <h2 className="font-heading text-2xl text-warm-900 mb-2">Aventura Civic Brief</h2>
            <p className="text-warm-600 text-sm leading-relaxed mb-5">
              A short note within 72 hours of each Aventura City Commission meeting: the item, the motion, the vote by member, and links to the minutes and video.{' '}
              <Link to="/aventura-watch/2026-11-17-commission" className="text-accent hover:underline">Aventura Watch Brief No. 1</Link>
            </p>
            {brief.status === 'sent' ? (
              <p className="text-warm-800 font-medium">You&apos;re on the list for the Aventura Civic Brief.</p>
            ) : (
              <form action={FORMSPREE} method="POST" onSubmit={brief.onSubmit} className="space-y-3">
                <input type="hidden" name="source" value="aventura-civic-brief" />
                <input type="hidden" name="_subject" value="Aventura Civic Brief signup" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div>
                  <label htmlFor="brief-email" className="block text-sm text-warm-600 mb-1">Email</label>
                  <input id="brief-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                </div>
                <button
                  type="submit"
                  disabled={brief.status === 'sending'}
                  className="px-5 py-2.5 bg-warm-900 text-warm-50 rounded-lg text-sm font-medium hover:bg-warm-700 transition-colors disabled:opacity-60"
                >
                  {brief.status === 'sending' ? 'Sending…' : 'Sign up'}
                </button>
                {brief.status === 'error' && (
                  <p className="text-sm text-warm-600">That didn&apos;t go through. Email myron@melekson.com and ask to be added.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

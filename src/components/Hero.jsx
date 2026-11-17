import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <img
          src="/myron-hero-800.jpg"
          srcSet="/myron-hero-800.jpg 800w, /myron-hero-1600.jpg 1600w"
          sizes="(max-width: 768px) 100vw, 420px"
          width="800"
          height="800"
          alt="Myron Melekson"
          fetchpriority="high"
          decoding="async"
          className="mx-auto aspect-square w-full max-w-sm rounded-2xl object-cover object-top shadow-md md:col-start-2 md:max-w-none"
        />
        <div className="md:col-start-1 md:row-start-1">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-warm-500">Myron Melekson</p>
          <h1 className="font-heading text-4xl leading-tight text-warm-900 sm:text-5xl">
            I don't wait for the future I want to live in.
          </h1>
          <p className="mt-3 font-heading text-3xl text-accent sm:text-4xl">I build it.</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-warm-600 sm:text-lg">
            Aventura community builder. A voice on AI and the economy. Fact-first civic reporting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/teaching"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-warm-50 transition-colors hover:bg-accent-light"
            >
              Teaching
            </Link>
            <Link
              to="/community"
              className="rounded-lg border border-accent px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-warm-50"
            >
              Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

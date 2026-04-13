import { content } from '../data/content';

export default function Footer() {
  const { footer, nav } = content;

  return (
    <footer className="py-12 border-t border-warm-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-lg text-warm-900">{footer.name}</p>
            <p className="text-sm text-warm-400 mt-1">
              {footer.location} &middot; {footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-warm-500 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-warm-300 mt-8 text-center">
          &copy; {footer.year} {footer.name}
        </p>
      </div>
    </footer>
  );
}

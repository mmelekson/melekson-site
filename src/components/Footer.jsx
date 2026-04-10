import { content } from '../data/content';

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="py-10 border-t border-warm-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-heading text-lg text-warm-900">{footer.name}</p>
        <p className="text-sm text-warm-400 mt-1">
          {footer.location} &middot; {footer.tagline}
        </p>
        <p className="text-xs text-warm-300 mt-4">
          &copy; {footer.year} {footer.name}
        </p>
      </div>
    </footer>
  );
}

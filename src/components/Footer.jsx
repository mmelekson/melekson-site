const primary = [
  { label: 'About', href: '/about' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Healthcare AI', href: '/healthcare-ai' },
  { label: 'Community', href: '/community' },
  { label: 'Aventura Watch', href: '/aventura-watch' },
  { label: 'Contact', href: '/contact' },
];

const secondary = [
  { label: 'Writing', href: '/writing' },
  { label: 'Media', href: '/media' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Who Represents Aventura', href: '/who-represents-aventura' },
  { label: 'Methodology', href: '/methodology' },
  { label: 'The book', href: '/#book' },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-200 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-heading text-lg text-warm-900">Myron Melekson</p>
        <p className="mt-1 text-sm text-warm-400">Aventura, FL · Community builder. Civic reporter.</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {primary.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-warm-700 hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {secondary.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-warm-500 hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-warm-300">© 2026 Myron Melekson</p>
      </div>
    </footer>
  );
}

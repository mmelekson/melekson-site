import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  { label: 'About', href: '/about' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Healthcare AI', href: '/healthcare-ai' },
  { label: 'Community', href: '/community' },
  {
    label: 'Civic',
    children: [
      { label: 'Aventura Watch', href: '/aventura-watch' },
      { label: 'Who Represents Aventura', href: '/who-represents-aventura' },
      { label: 'Methodology', href: '/methodology' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

const linkClass = (active) =>
  `text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
    active ? 'text-accent' : 'text-warm-700 hover:text-accent'
  }`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [civicOpen, setCivicOpen] = useState(false);
  const civicRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setCivicOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const go = (event, href) => {
    event.preventDefault();
    navigate(href);
    setOpen(false);
    setCivicOpen(false);
  };

  const civicActive = items.find((item) => item.children)?.children.some((child) => child.href === pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-warm-200 bg-warm-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a href="/" onClick={(event) => go(event, '/')} className="flex items-center gap-3 shrink-0">
          <img src="/favicon.svg" alt="" className="h-7 w-7 rounded-md object-contain" />
          <span className="font-heading text-xl text-warm-900">Myron Melekson</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {items.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                ref={civicRef}
                onMouseEnter={() => setCivicOpen(true)}
                onMouseLeave={() => setCivicOpen(false)}
              >
                <button
                  type="button"
                  className={linkClass(civicActive)}
                  aria-expanded={civicOpen}
                  aria-haspopup="true"
                  onClick={() => setCivicOpen((value) => !value)}
                >
                  Civic
                </button>
                {civicOpen && (
                  <div className="absolute right-0 top-full z-10 pt-2">
                    <div role="menu" className="min-w-64 rounded-xl border border-warm-200 bg-white py-2 shadow-sm">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={(event) => go(event, child.href)}
                          className={`block px-4 py-2 text-sm hover:bg-warm-50 ${pathname === child.href ? 'text-accent' : 'text-warm-700'}`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => go(event, item.href)}
                className={linkClass(pathname === item.href)}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <button
          type="button"
          className="p-1 text-warm-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-warm-200 bg-warm-50 px-6 py-4 lg:hidden">
          {items.map((item) =>
            item.children ? (
              <div key={item.label} className="pt-2">
                <p className="text-xs font-medium uppercase tracking-wide text-warm-400">Civic</p>
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={(event) => go(event, child.href)}
                    className={`block py-2 pl-3 text-sm ${pathname === child.href ? 'text-accent' : 'text-warm-700'}`}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => go(event, item.href)}
                className={`block py-2 text-sm ${pathname === item.href ? 'text-accent' : 'text-warm-700'}`}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}

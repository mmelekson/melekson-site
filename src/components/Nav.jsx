import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { content } from '../data/content';

export default function Nav() {
  const { nav } = content;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const primary = nav.links.filter((link) => link.row !== 'civic');
  const civic = nav.links.filter((link) => link.row === 'civic');

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
    } else if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
    setOpen(false);
  };

  const linkClass = (href) => {
    const current = href.startsWith('/') && location.pathname === href;
    return `text-sm font-medium transition-colors ${current ? 'text-accent' : 'text-warm-600 hover:text-accent'}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/favicon.svg" alt="Myron Melekson" className="w-7 h-7 object-contain rounded-md" />
          <span className="font-heading text-xl text-warm-900">{nav.name}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex flex-wrap justify-end gap-x-5 gap-y-1">
          {primary.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-warm-700 p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>

        <div className="hidden md:flex flex-wrap justify-end gap-x-5 gap-y-1 pb-3">
          {civic.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-warm-200 bg-warm-50 px-6 py-4 space-y-3">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block ${linkClass(link.href)}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

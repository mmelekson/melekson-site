import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">404</p>
        <h1 className="font-heading text-4xl text-warm-900 mb-4">Page not found</h1>
        <p className="text-warm-500 mb-8">This page doesn't exist or was moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent text-warm-50 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
        >
          &larr; Back home
        </Link>
      </div>
    </div>
  );
}

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Moments from './components/Moments';
import Book from './components/Book';
import Connect from './components/Connect';
import Footer from './components/Footer';

// Code-split non-homepage routes so the initial bundle stays lean.
const AboutPage = lazy(() => import('./components/AboutPage'));
const Post = lazy(() => import('./components/Post'));
const MediaPage = lazy(() => import('./components/MediaPage'));
const WritingPage = lazy(() => import('./components/WritingPage'));
const ReviewsPage = lazy(() => import('./components/ReviewsPage'));
const UpdatesPage = lazy(() => import('./components/UpdatesPage'));
const NotFound = lazy(() => import('./components/NotFound'));

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Moments />
      <Book />
      <Connect />
    </>
  );
}

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-warm-300 border-t-accent rounded-full animate-spin" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/writing/:slug" element={<Post />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

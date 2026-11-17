import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HomeStory from './components/HomeStory';
import Book from './components/Book';
import Footer from './components/Footer';

// Code-split non-homepage routes so the initial bundle stays lean.
const AboutPage = lazy(() => import('./components/AboutPage'));
const Post = lazy(() => import('./components/Post'));
const MediaPage = lazy(() => import('./components/MediaPage'));
const WritingPage = lazy(() => import('./components/WritingPage'));
const ReviewsPage = lazy(() => import('./components/ReviewsPage'));
const UpdatesPage = lazy(() => import('./components/UpdatesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const MethodologyPage = lazy(() => import('./components/MethodologyPage'));
const AventuraWatchPage = lazy(() => import('./components/AventuraWatchPage'));
const WhoRepresentsPage = lazy(() => import('./components/WhoRepresentsPage'));
const TeachingPage = lazy(() => import('./components/TeachingPage'));
const HealthcareAiPage = lazy(() => import('./components/HealthcareAiPage'));
const CommunityPage = lazy(() => import('./components/CommunityPage'));
const NotFound = lazy(() => import('./components/NotFound'));

function HomePage() {
  return (
    <>
      <Hero />
      <HomeStory />
      <Book />
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/aventura-watch" element={<AventuraWatchPage />} />
            <Route path="/who-represents-aventura" element={<WhoRepresentsPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/healthcare-ai" element={<HealthcareAiPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

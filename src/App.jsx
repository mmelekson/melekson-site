import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import AboutPage from './components/AboutPage';
import Post from './components/Post';
import NotFound from './components/NotFound';
import MediaPage from './components/MediaPage';
import WritingPage from './components/WritingPage';
import ReviewsPage from './components/ReviewsPage';
import UpdatesPage from './components/UpdatesPage';
import Moments from './components/Moments';
import Book from './components/Book';
import Connect from './components/Connect';
import Footer from './components/Footer';

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

export default function App() {
  return (
    <>
      <Nav />
      <main>
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
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

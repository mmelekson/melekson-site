import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { Writable } from 'node:stream';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Focus from './components/Focus';
import TeachingBlock from './components/TeachingBlock';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Moments from './components/Moments';
import Book from './components/Book';
import Connect from './components/Connect';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import Post from './components/Post';
import MediaPage from './components/MediaPage';
import WritingPage from './components/WritingPage';
import ReviewsPage from './components/ReviewsPage';
import UpdatesPage from './components/UpdatesPage';
import ContactPage from './components/ContactPage';
import MethodologyPage from './components/MethodologyPage';
import AventuraWatchPage from './components/AventuraWatchPage';
import WhoRepresentsPage from './components/WhoRepresentsPage';
import TeachingPage from './components/TeachingPage';
import HealthcareAiPage from './components/HealthcareAiPage';
import CommunityPage from './components/CommunityPage';
import NotFound from './components/NotFound';

function HomePage() {
  return (
    <>
      <Hero />
      <Focus />
      <TeachingBlock />
      <About />
      <Projects />
      <Clients />
      <Moments />
      <Book />
      <Connect />
    </>
  );
}

function Shell({ url }) {
  return (
    <StaticRouter location={url}>
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/aventura-watch" element={<AventuraWatchPage />} />
          <Route path="/who-represents-aventura" element={<WhoRepresentsPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/healthcare-ai" element={<HealthcareAiPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </StaticRouter>
  );
}

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    let settled = false;
    const done = (error) => {
      if (settled) return;
      settled = true;
      if (error) reject(error);
      else resolve(html);
    };
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    const { pipe } = renderToPipeableStream(<Shell url={url} />, {
      onAllReady() {
        pipe(writable);
        writable.on('finish', () => done());
        writable.on('error', done);
      },
      onError(error) {
        done(error);
      },
    });
  });
}

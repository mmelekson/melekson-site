import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Updates from './components/Updates';
import Writing from './components/Writing';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Media from './components/Media';
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
      <Writing />
      <Media />
      <Moments />
      <Updates />
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
          <Route path="/writing/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

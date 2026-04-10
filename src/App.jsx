import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Updates from './components/Updates';
import Book from './components/Book';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Updates />
        <Book />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_45%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Contact />

        <footer className="border-t border-white/10 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Creator.Dev — Built with love, code, and coffee.
        </footer>
      </main>
    </div>
  );
}

export default App;

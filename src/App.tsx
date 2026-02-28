import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './assets/index.css';

function AppContent() {
  return (
    <>
      <ScrollProgress />
      <div className="animated-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

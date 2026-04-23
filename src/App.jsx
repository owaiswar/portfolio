import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import CanvasContainer from './components/CanvasContainer';
import CustomCursor from './components/CustomCursor';

// Simple Error Boundary for the 3D Canvas
const SceneErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const handleError = (error) => {
      console.error("3D Scene Error:", error);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) return <div className="fixed inset-0 bg-dark z-0" />;
  return children;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-dark selection:bg-primary selection:text-dark min-h-screen">
      <CustomCursor />
      
      <SceneErrorBoundary>
        <CanvasContainer />
      </SceneErrorBoundary>
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>
      
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Owais. Built with passion & 3D magic.</p>
      </footer>
    </main>
  );
}

export default App;

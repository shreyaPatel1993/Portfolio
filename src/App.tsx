import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Prevent scrolling during splash screen
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div 
      className="min-h-screen" 
      style={{ backgroundColor: '#020617', color: '#e2e8f0' }}
    >
      <div className="no-print">
        <AnimatedBackground />
      </div>
      
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="no-print"
          >
            <Navbar />
            
            <div className="relative z-10">
              <Hero />
              
              <div id="achievements">
                <Achievements />
              </div>
              
              <Experience />
              
              <div id="skills">
                <Skills />
              </div>
              
              <Footer />
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
              style={{ scaleX: scrollProgress }}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

// Custom hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalHeight;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

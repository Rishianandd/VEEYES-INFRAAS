import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import QuoteModal from './components/QuoteModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Memberships from './pages/Memberships';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleNavigateSection = (sectionId) => {
    if (sectionId === 'projects') {
      setActivePage('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'about':
        return <About onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'services':
        return <Services onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'projects':
        return (
          <Projects
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        );
      case 'leadership':
        return <Leadership onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'memberships':
        return <Memberships onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'home':
      default:
        return (
          <Home
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenQuote={() => setIsQuoteOpen(true)}
            onNavigateSection={handleNavigateSection}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Glassmorphism Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content View with Smooth Page Transitions */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Simple Corporate Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Contact / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Floating WhatsApp / Phone Action Button */}
      <WhatsAppWidget />
    </div>
  );
}

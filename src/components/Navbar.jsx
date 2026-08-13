import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote, onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'memberships', label: 'Memberships' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (['about', 'services', 'projects', 'leadership', 'memberships'].includes(id)) {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'home') {
      setActivePage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => onNavigateSection(id), 100);
      } else {
        onNavigateSection(id);
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(11, 79, 156, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 10px 30px -5px rgba(11, 79, 156, 0.08)' : 'none',
        padding: scrolled ? '12px 0' : '18px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <img
            src="/img/veyes-logo.png"
            alt="VEEYES INFRAAS"
            style={{
              height: scrolled ? '44px' : '50px',
              width: 'auto',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: scrolled ? '1.35rem' : '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--primary-blue)',
                transition: 'all 0.3s ease',
                lineHeight: 1.1
              }}
            >
              VEEYES <span style={{ color: 'var(--primary-green)' }}>INFRAAS</span>
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--charcoal-muted)',
                marginTop: '2px'
              }}
            >
              Builder & Infrastructure
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          {navItems.map((item) => {
            const isActive = (item.id === activePage);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--primary-blue)' : scrolled ? 'var(--dark-charcoal)' : '#1D232A',
                  transition: 'color 0.2s ease',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, var(--primary-blue) 0%, var(--primary-green) 100%)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            className="btn-primary desktop-cta"
            onClick={onOpenQuote}
            style={{
              padding: '10px 22px',
              fontSize: '0.92rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <span>Contact Us</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--primary-blue)',
              background: 'rgba(11, 79, 156, 0.08)',
              border: '1px solid rgba(11, 79, 156, 0.15)'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Contact Details Sub-Bar below Navigation */}
      <div
        style={{
          borderTop: scrolled ? '1px solid rgba(11, 79, 156, 0.08)' : '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: scrolled ? 'rgba(248, 250, 252, 0.96)' : 'rgba(15, 23, 42, 0.55)',
          color: scrolled ? 'var(--dark-charcoal)' : 'rgba(255, 255, 255, 0.92)',
          fontSize: '0.82rem',
          padding: '8px 0',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px 24px'
          }}
        >
          {/* Phone Numbers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={14} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
            <a
              href="https://wa.me/919444385611"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
            >
              +91 94443 85611 / +91 93810 45611
            </a>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={14} style={{ color: 'var(--secondary-blue)', flexShrink: 0 }} />
            <a
              href="mailto:vebuild98@gmail.com"
              style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
            >
              vebuild98@gmail.com
            </a>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={14} style={{ color: 'var(--light-green)', flexShrink: 0 }} />
            <span style={{ fontWeight: 500 }}>
              Sairam Villas, Plot No. 61, Gajalakshmi St, Lakshmi Nagar, Mudichur Road, Chennai – 600048
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-light)',
              overflow: 'hidden'
            }}
          >
            <div
              className="container"
              style={{
                paddingTop: '20px',
                paddingBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--dark-charcoal)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="btn-green"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                style={{
                  marginTop: '12px',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 993px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

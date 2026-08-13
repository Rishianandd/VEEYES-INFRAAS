import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid rgba(11, 79, 156, 0.08)' : '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: scrolled ? '0 10px 30px -5px rgba(11, 79, 156, 0.08)' : 'none'
        }}
      >
        {/* Desktop Contact Details Top Bar */}
        <div
          className="desktop-top-bar"
          style={{
            borderBottom: scrolled ? '1px solid rgba(11, 79, 156, 0.08)' : '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: scrolled ? 'rgba(248, 250, 252, 0.96)' : 'rgba(15, 23, 42, 0.65)',
            color: scrolled ? 'var(--dark-charcoal)' : 'rgba(255, 255, 255, 0.92)',
            fontSize: '0.8rem',
            padding: '6px 0',
            transition: 'all 0.3s ease'
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            {/* Left: Phone & Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
                <a
                  href="https://wa.me/919444385611"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
                >
                  +91 94443 85611 / +91 93810 45611
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} style={{ color: 'var(--secondary-blue)', flexShrink: 0 }} />
                <a
                  href="mailto:vebuild98@gmail.com"
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
                >
                  vebuild98@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Address */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} style={{ color: 'var(--light-green)', flexShrink: 0 }} />
              <span style={{ fontWeight: 500 }}>
                Sairam Villas, Plot No. 61, Mudichur Road, Chennai – 600048
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: scrolled ? '10px' : '14px',
            paddingBottom: scrolled ? '10px' : '14px',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <img
              src="/img/veyes-logo.png"
              alt="VEEYES INFRAAS"
              style={{
                height: scrolled ? '42px' : '48px',
                width: 'auto',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: scrolled ? '1.25rem' : '1.4rem',
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
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--charcoal-muted)',
                  marginTop: '1px'
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
                    cursor: 'pointer',
                    padding: '4px 0'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
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

          {/* Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              className="btn-primary desktop-cta"
              onClick={onOpenQuote}
              style={{
                padding: '9px 20px',
                fontSize: '0.9rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary-blue)',
                background: 'rgba(11, 79, 156, 0.08)',
                border: '1px solid rgba(11, 79, 156, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}
            >
              <Menu size={22} />
              <span>MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Side Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Semi-Transparent Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 2000
              }}
            />

            {/* Slide-Out Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '88%',
                maxWidth: '380px',
                backgroundColor: '#FFFFFF',
                zIndex: 2001,
                boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
              }}
            >
              {/* Drawer Top Header */}
              <div
                style={{
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-light)',
                  backgroundColor: 'var(--light-gray)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/img/veyes-logo.png" alt="Logo" style={{ height: '36px', width: 'auto' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary-blue)', fontSize: '1.1rem' }}>
                    VEEYES <span style={{ color: 'var(--primary-green)' }}>INFRAAS</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    padding: '8px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--dark-charcoal)',
                    background: 'rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Items */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--charcoal-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Navigation
                </span>
                {navItems.map((item) => {
                  const isActive = (item.id === activePage);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? 'var(--primary-blue)' : 'var(--dark-charcoal)',
                        backgroundColor: isActive ? 'var(--blue-tint-light)' : 'transparent',
                        borderLeft: isActive ? '4px solid var(--primary-blue)' : '4px solid transparent',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={18} style={{ color: isActive ? 'var(--primary-blue)' : '#94A3B8' }} />
                    </button>
                  );
                })}

                {/* Primary CTA Button in Side Menu */}
                <button
                  className="btn-green"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  style={{
                    marginTop: '16px',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <span>Request Quote / Inquire</span>
                  <ArrowRight size={18} />
                </button>

                {/* Contact & Location Details Section inside Side Menu */}
                <div
                  style={{
                    marginTop: '24px',
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--blue-tint-light)',
                    border: '1px solid rgba(11, 79, 156, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--primary-blue)', textTransform: 'uppercase' }}>
                    Contact Information
                  </span>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--green-tint-medium)', color: 'var(--primary-green)' }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Phone / WhatsApp</div>
                      <a
                        href="https://wa.me/919444385611"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-charcoal)', textDecoration: 'none' }}
                      >
                        +91 94443 85611
                      </a>
                      <br />
                      <a
                        href="tel:+919381045611"
                        style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dark-charcoal)', textDecoration: 'none' }}
                      >
                        +91 93810 45611
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--blue-tint-medium)', color: 'var(--primary-blue)' }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Email Address</div>
                      <a
                        href="mailto:vebuild98@gmail.com"
                        style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary-blue)', textDecoration: 'none', wordBreak: 'break-all' }}
                      >
                        vebuild98@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--green-tint-medium)', color: 'var(--primary-green)' }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Office Address</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--dark-charcoal)', lineHeight: 1.4 }}>
                        Sairam Villas, Plot No. 61, Gajalakshmi St, Lakshmi Nagar, Mudichur Road, Chennai – 600048
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .desktop-top-bar, .desktop-nav, .desktop-cta {
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
          .desktop-top-bar {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}


import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigateSection, onOpenQuote }) {
  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-charcoal)',
        color: '#94A3B8',
        paddingTop: '60px',
        paddingBottom: '30px',
        borderTop: '3px solid var(--primary-blue)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '40px'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img src="/img/veyes-logo.png" alt="VEEYES INFRAAS" style={{ height: '44px', width: 'auto' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--white)' }}>
                  VEEYES <span style={{ color: 'var(--light-green)' }}>INFRAAS</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Builder & Infrastructure
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
              Delivering premium residential, commercial, and turnkey construction solutions with quality, integrity, and over 25 years of trusted expertise across Chennai.
            </p>
          </div>

          {/* Quick Navigation */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigateSection('hero')}
              style={{ background: 'none', border: 'none', color: '#CBD5E1', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Home
            </button>
            <button
              onClick={() => onNavigateSection('about-preview')}
              style={{ background: 'none', border: 'none', color: '#CBD5E1', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              About
            </button>
            <button
              onClick={() => onNavigateSection('services')}
              style={{ background: 'none', border: 'none', color: '#CBD5E1', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Services
            </button>
            <button
              onClick={() => onNavigateSection('featured-projects')}
              style={{ background: 'none', border: 'none', color: '#CBD5E1', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Projects
            </button>
            <button
              onClick={() => onNavigateSection('why-choose')}
              style={{ background: 'none', border: 'none', color: '#CBD5E1', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Why VEEYES
            </button>
            <button
              onClick={onOpenQuote}
              style={{ background: 'none', border: 'none', color: 'var(--light-green)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Contact Us
            </button>
          </div>

          {/* Contact Snippet */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', maxWidth: '280px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Phone size={16} style={{ color: 'var(--light-green)', flexShrink: 0 }} />
              <span>+91 94443 85611 / +91 93810 45611</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Mail size={16} style={{ color: 'var(--secondary-blue)', flexShrink: 0 }} />
              <a href="mailto:vebuild98@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                vebuild98@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ color: 'var(--primary-green)', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ lineHeight: 1.55 }}>
                Sairam Villas, Plot No. 61, Gajalakshmi St,<br />
                Lakshmi Nagar, Mudichur Road,<br />
                Chennai – 600048
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#64748B'
          }}
        >
          © {new Date().getFullYear()} VEEYES INFRAAS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

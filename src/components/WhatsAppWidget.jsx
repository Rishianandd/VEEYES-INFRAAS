import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppWidget() {
  const whatsappUrl = 'https://wa.me/919444385611';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp +91 94443 85611"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        padding: '14px 22px',
        borderRadius: '50px',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '0.95rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.45)';
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Phone size={18} style={{ color: '#FFFFFF', strokeWidth: 2.5 }} />
      </div>
      <span>+91 94443 85611</span>
    </a>
  );
}

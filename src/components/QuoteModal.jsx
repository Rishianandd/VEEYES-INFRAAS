import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, Shield, Building, PhoneCall, Mail, Calculator, MapPin } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Commercial IT Park / Corporate Tower',
    budgetRange: '₹10 Cr - ₹50 Cr',
    location: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'VY-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setSubmitted(true);

    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Commercial IT Park / Corporate Tower',
      budgetRange: '₹10 Cr - ₹50 Cr',
      location: '',
      details: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: 'rgba(29, 35, 42, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '92vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            border: '1px solid var(--border-light)',
            position: 'relative'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '28px 32px',
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div className="badge-pill badge-green" style={{ marginBottom: '8px', color: 'var(--white)', backgroundColor: 'rgba(98, 179, 72, 0.3)', border: '1px solid rgba(255,255,255,0.3)' }}>
                Direct Consultation
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', fontWeight: 800 }}>
                Contact & Project Consultation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', marginTop: '4px' }}>
                Email us directly at <a href="mailto:vebuild98@gmail.com" style={{ color: 'var(--light-green)', fontWeight: 700, textDecoration: 'underline' }}>vebuild98@gmail.com</a>
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ padding: '32px' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '30px 10px' }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--green-tint-light)',
                    color: 'var(--primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    border: '2px solid var(--primary-green)'
                  }}
                >
                  <CheckCircle2 size={48} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 20px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry has been received and forwarded to <strong style={{ color: 'var(--primary-blue)' }}>vebuild98@gmail.com</strong>.
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--blue-tint-light)',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'inline-block',
                    marginBottom: '28px',
                    border: '1px solid rgba(11, 79, 156, 0.15)'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--charcoal-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Reference Ticket Number:
                  </span>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.05em' }}>
                    {referenceId}
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px' }}>
                  A Senior Project Engineer will contact you within <strong>4 business hours</strong> with initial technical feedback.
                </p>

                <button className="btn-primary" onClick={handleReset}>
                  Done
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Er. Anand Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 94443 85611"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Chennai, Bangalore, Hyd"
                      value={formData.location}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Project Category *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>Residential Construction (Villas, Houses, Apartments)</option>
                      <option>Commercial Office & Business Facilities</option>
                      <option>Turnkey EPC Construction</option>
                      <option>Renovation & Remodeling</option>
                      <option>Interior Design & Execution</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Estimated Budget Scale *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>Below ₹50 Lakhs</option>
                      <option>₹50 Lakhs - ₹2 Crore</option>
                      <option>₹2 Crore - ₹10 Crore</option>
                      <option>Above ₹10 Crore</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                    Project Requirements & Scope Summary
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Provide details such as built-up area (sq. ft.), timeline requirements, site status, or specific architectural guidelines..."
                    value={formData.details}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--light-gray)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '16px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748B' }}>
                    <Shield size={16} style={{ color: 'var(--primary-green)' }} />
                    <span>Strict Commercial Non-Disclosure Guarantee</span>
                  </div>
                  <button type="submit" className="btn-primary" style={{ padding: '14px 28px' }}>
                    <span>Submit Quote Request</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* Office Address Strip */}
          <div
            style={{
              padding: '14px 32px 20px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              color: 'var(--charcoal-muted)',
              fontSize: '0.83rem'
            }}
          >
            <MapPin size={15} style={{ color: 'var(--primary-green)', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: 1.55 }}>
              <strong style={{ color: 'var(--dark-charcoal)', fontWeight: 700 }}>Registered Office: </strong>
              Sairam Villas, Plot No. 61, Gajalakshmi Street, Lakshmi Nagar, Mudichur Road, Chennai – 600048
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

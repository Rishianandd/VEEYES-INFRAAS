import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Building2, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'New Project Tender Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* PAGE HEADER */}
      <section style={{ background: 'linear-gradient(135deg, var(--dark-charcoal) 0%, var(--primary-blue) 100%)', color: 'var(--white)', padding: '80px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            Get In Touch
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '20px' }}>
            Contact VEEYES INFRAAS
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6 }}>
            Our engineering & tendering teams are ready to discuss your commercial, residential, or heavy infrastructure projects.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            {/* Contact Form Card */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
              <div className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
                Direct Inquiry
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                Send Us a Message
              </h2>
              <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
                Fill out the form below and our project team will get back to you within 4 business hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 20px' }}
                >
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--green-tint-light)',
                      color: 'var(--primary-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}
                  >
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                    Message Dispatched Successfully!
                  </h3>
                  <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our tendering division has received your inquiry and will reach out shortly.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'New Project Tender Inquiry', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--light-gray)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>New Project Tender Inquiry</option>
                      <option>Commercial Building EPC</option>
                      <option>Luxury Residential High-Rise</option>
                      <option>Industrial Logistics Facility</option>
                      <option>Civil Infrastructure Work</option>
                      <option>Vendor / Supplier Empanelment</option>
                      <option>Careers & HR</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--dark-charcoal)' }}>
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe your project location, scale, requirements, or tendering timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

                  <button type="submit" className="btn-primary" style={{ padding: '14px 28px', justifyContent: 'center' }}>
                    <span>Send Inquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Corporate Info Cards & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '20px' }}>
                  Corporate Headquarters
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <MapPin size={22} style={{ color: 'var(--primary-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-charcoal)' }}>Office Address</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', lineHeight: 1.5 }}>
                        VEEYES INFRAAS Corporate Tower, No. 42, Infrastructure Corridor, Prime Business District, Chennai, Tamil Nadu - 600096
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Phone size={22} style={{ color: 'var(--primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-charcoal)' }}>Direct Phone Lines</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)' }}>+91 98400 12345 / +91 44 2800 5678</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Mail size={22} style={{ color: 'var(--secondary-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-charcoal)' }}>Official Email</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)' }}>info@veyesinfraas.com / tenders@veyesinfraas.com</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Clock size={22} style={{ color: 'var(--light-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-charcoal)' }}>Working Hours</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)' }}>Monday - Saturday: 9:00 AM - 6:30 PM (IST)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div
                style={{
                  backgroundColor: 'var(--blue-tint-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 28px',
                  border: '1px solid rgba(11, 79, 156, 0.12)'
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '12px' }}>
                  Departmental Inquiries
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                  <div><strong>Tenders & Bidding:</strong> tenders@veyesinfraas.com</div>
                  <div><strong>Careers & HR:</strong> hr@veyesinfraas.com</div>
                  <div><strong>Vendor Empanelment:</strong> procurement@veyesinfraas.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

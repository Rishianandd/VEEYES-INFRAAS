import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Shield } from 'lucide-react';
import { membershipsData } from '../data/membershipsData';
import { fadeUp, scaleUp } from '../utils/motionVariants';

export default function Memberships({ onOpenQuote }) {
  return (
    <div className="blueprint-overlay" style={{ paddingTop: '90px', backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      {/* 1. HERO BANNER */}
      <section style={{ position: 'relative', padding: '110px 0 90px', backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("img/hero_background.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, filter: 'brightness(0.7)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.95) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="badge-pill badge-green" style={{ marginBottom: '22px' }}>
            Affiliations & Credentials
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Professional Memberships & <span style={{ color: 'var(--light-green)' }}>Industry Recognition</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.75, maxWidth: '760px', margin: '0 auto' }}
          >
            VEEYES INFRAAS is recognized by leading construction and business bodies across India, reflecting our commitment to ethics, quality, and professional excellence.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. MEMBERSHIP CARDS — BAI, CNI, RMB */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>Industry Bodies</div>
            <h2 className="section-title">Our Professional Memberships</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Trusted affiliations that reflect our adherence to industry standards, ethical practices, and professional excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
            {membershipsData.map((m, idx) => (
              <motion.div
                key={m.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.15} variants={fadeUp}
                whileHover={{ y: -8 }}
                className="glass-card"
                style={{ padding: '44px 36px', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                {/* Logo Container */}
                <div style={{ height: '96px', width: '100%', maxWidth: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-subtle)', margin: '0 auto 32px' }}>
                  <img src={m.logo} alt={m.name} loading="lazy" style={{ maxHeight: '70px', width: 'auto', objectFit: 'contain' }} />
                </div>

                <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>{m.type}</div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>{m.name}</h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {m.acronym}
                </div>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '28px' }}>{m.description}</p>

                <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Key Benefits
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', textAlign: 'left', width: '100%' }}>
                  {m.benefits.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--dark-charcoal)', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '22px', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--primary-blue)', fontWeight: 700 }}>
                    <ShieldCheck size={18} />
                    <span>Verified Active Member</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 3. WHY THESE MEMBERSHIPS MATTER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>Our Commitment</div>
            <h2 className="section-title">Why These Affiliations Matter</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our memberships demonstrate our dedication to professional standards, ethical contracting, and continuous industry growth.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Industry Standards Compliance', desc: 'Our affiliations ensure we follow national construction codes, safety norms, and ethical business practices at all times.', icon: Award },
              { title: 'Ethical Business Conduct', desc: 'Membership in credible bodies holds us accountable to fair pricing, transparent contracts, and honest client relationships.', icon: ShieldCheck },
              { title: 'Continuous Learning', desc: 'Active participation in industry events, workshops, and seminars keeps our team updated with the latest construction practices.', icon: Sparkles },
              { title: 'Client Confidence', desc: 'When you work with VEEYES INFRAAS, you partner with a company recognized by India\'s leading construction and business organizations.', icon: Shield }
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div key={i} variants={scaleUp} whileHover={{ y: -6 }} className="glass-card" style={{ padding: '36px 28px', borderRadius: 'var(--radius-lg)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--blue-tint-light)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                    <IconComp size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

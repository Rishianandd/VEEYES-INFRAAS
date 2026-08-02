import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Mail,
  ArrowRight
} from 'lucide-react';
import { leadershipData } from '../data/leadershipData';
import { fadeUp, slideLeft, slideRight } from '../utils/motionVariants';

export default function Leadership({ onOpenQuote }) {
  const leadershipTimeline = [
    {
      year: '2001',
      title: 'Founded VEEYES INFRAAS',
      desc: 'V. Yoganand established VEEYES INFRAAS in Chennai with a vision to deliver reliable, high-quality construction built on integrity, transparency, and engineering excellence.'
    },
    {
      year: '2005',
      title: 'Residential Portfolio Growth',
      desc: 'Expanded the residential construction portfolio with multiple successful villa, apartment, and independent house projects across Chennai.'
    },
    {
      year: '2010',
      title: 'Commercial Construction Leadership',
      desc: 'Led the company into commercial construction, delivering office buildings, retail spaces, and commercial complexes to modern industry standards.'
    },
    {
      year: '2015',
      title: 'Turnkey & Renovation Expansion',
      desc: 'Introduced complete turnkey EPC services and professional renovation & remodeling — providing clients end-to-end project accountability.'
    },
    {
      year: '2019',
      title: 'Interior Solutions Division',
      desc: 'Launched a dedicated interior design and contracting division, adding premium interior solutions to the company\'s comprehensive service offering.'
    },
    {
      year: '2026',
      title: '25+ Years of Trusted Excellence',
      desc: 'Celebrating 25+ years of quality construction, with 50+ projects delivered and over 100 satisfied clients across Chennai and Tamil Nadu.'
    }
  ];

  const executiveAwards = [
    { title: 'Trusted Construction Company Award', issuer: 'Builders Association of India', year: '2023' },
    { title: 'Quality Excellence in Residential Construction', issuer: 'Construction Network of India', year: '2022' },
    { title: 'Best Turnkey Project Execution', issuer: 'Tamil Nadu Builders Forum', year: '2021' },
    { title: 'Community Builder Recognition', issuer: 'Rotary Means Business', year: '2020' }
  ];

  return (
    <div className="blueprint-overlay" style={{ paddingTop: '90px', backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      {/* 1. HERO BANNER */}
      <section style={{ position: 'relative', padding: '110px 0 90px', backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("img/hero_background.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, filter: 'brightness(0.7)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.95) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="badge-pill badge-green" style={{ marginBottom: '22px' }}>
            Our Leadership
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Led by Vision, <span style={{ color: 'var(--light-green)' }}>Driven by Quality</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.75, maxWidth: '760px', margin: '0 auto' }}
          >
            Since 2001, VEEYES INFRAAS has been guided by experienced leadership committed to quality construction, client satisfaction, and engineering integrity across Chennai.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. FOUNDER SPOTLIGHT */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '54px 44px', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', alignItems: 'center' }}>
              {/* Founder Portrait Card */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}
                style={{
                  position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                  background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-charcoal) 100%)',
                  padding: '48px 36px', color: 'var(--white)', textAlign: 'center', boxShadow: 'var(--shadow-hover)'
                }}
              >
                <div style={{ width: '140px', height: '140px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--light-green) 100%)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '3.2rem', fontWeight: 800, margin: '0 auto 28px', boxShadow: '0 12px 30px rgba(0,0,0,0.35)', border: '4px solid rgba(255,255,255,0.25)' }}>
                  VY
                </div>
                <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--white)', marginBottom: '8px' }}>V. Yoganand</h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--light-green)', marginBottom: '20px' }}>Founder & Managing Director</div>
                <div className="badge-pill" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.35)', fontSize: '0.9rem', padding: '8px 20px' }}>
                  25+ Years Construction Experience
                </div>
              </motion.div>

              {/* Message & Vision */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                <div className="badge-pill badge-blue" style={{ marginBottom: '18px' }}>Founder's Message</div>
                <h2 className="section-title" style={{ fontSize: '2.3rem', marginBottom: '24px' }}>Building Trust Through Quality</h2>
                <div style={{ position: 'relative', marginBottom: '32px' }}>
                  <Quote size={48} style={{ color: 'var(--primary-blue)', opacity: 0.18, position: 'absolute', top: '-18px', left: '-18px' }} />
                  <p style={{ fontSize: '1.18rem', fontStyle: 'italic', color: 'var(--dark-charcoal)', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
                    "Our commitment is to build durable, functional, and aesthetically pleasing spaces that exceed customer expectations — while maintaining transparency, safety, and engineering excellence in everything we do."
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '36px' }}>
                  {['Zero Quality Compromise', 'Client-First Approach', 'Transparent Contracting', 'On-Time Delivery'].map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--dark-charcoal)' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--primary-green)' }} />
                      <span style={{ fontSize: '0.9rem' }}>{pt}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary" onClick={onOpenQuote}>
                  <span>Connect With Us</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 3. AWARDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>Recognition</div>
            <h2 className="section-title">Awards & Industry Recognition</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '28px' }}>
            {executiveAwards.map((award, idx) => (
              <motion.div
                key={idx} whileHover={{ y: -6 }} className="glass-card"
                style={{ padding: '34px 28px', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'flex-start', gap: '18px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--green-tint-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={28} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {award.year} • {award.issuer}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark-charcoal)', margin: 0 }}>{award.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. PROFESSIONAL TIMELINE */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>Our Journey</div>
            <h2 className="section-title">Leadership Timeline</h2>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {leadershipTimeline.map((evt, idx) => (
              <motion.div
                key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} variants={fadeUp}
                className="glass-card"
                style={{ padding: '32px 36px', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '28px', borderLeft: '5px solid var(--primary-blue)' }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-blue)', minWidth: '140px' }}>
                  {evt.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '8px' }}>{evt.title}</h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: 1.65 }}>{evt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

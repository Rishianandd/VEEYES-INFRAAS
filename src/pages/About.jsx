import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  Eye,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2,
  HardHat,
  Building2,
  Quote,
  Sparkles,
  TrendingUp,
  Clock,
  Users,
  Layers,
  ThumbsUp
} from 'lucide-react';
import StatCounter from '../components/StatCounter';
import { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer } from '../utils/motionVariants';

export default function About({ onOpenQuote }) {
  const timelineEvents = [
    {
      year: '2001',
      title: 'Foundation of VEEYES INFRAAS',
      desc: 'V. Yoganand established VEEYES INFRAAS in Chennai with a clear mission: to deliver reliable, high-quality construction with complete transparency and client trust.'
    },
    {
      year: '2005',
      title: 'Residential Construction Expertise',
      desc: 'Successfully completed multiple premium villa and independent house projects across Chennai, building a strong reputation for quality craftsmanship.'
    },
    {
      year: '2010',
      title: 'Commercial Construction Expansion',
      desc: 'Expanded into commercial office complexes and retail spaces, delivering projects that combine structural integrity with modern business requirements.'
    },
    {
      year: '2015',
      title: 'Turnkey & Renovation Services Launch',
      desc: 'Introduced complete turnkey construction and professional renovation & remodeling services, providing clients a single point of accountability from design to delivery.'
    },
    {
      year: '2019',
      title: 'Interior Solutions Division',
      desc: 'Established a dedicated interior design and execution division, offering customized interiors with premium finishes and superior craftsmanship for both residential and commercial clients.'
    },
    {
      year: '2026',
      title: '25+ Years of Trusted Excellence',
      desc: 'Celebrating over 25 years of trusted construction across Chennai, with 50+ delivered projects, 100+ satisfied clients, and a commitment to quality that only grows stronger.'
    }
  ];

  const companyHighlights = [
    { title: 'Established in 2001', desc: 'Over 25 years of continuous operation and proven construction expertise across Chennai.' },
    { title: 'Residential Specialists', desc: 'Villas, apartments, and independent houses designed for lasting comfort and value.' },
    { title: 'Commercial Builders', desc: 'Office buildings, commercial complexes, and retail spaces built to modern industry standards.' },
    { title: 'Turnkey Execution', desc: 'Complete project management from architectural design to final handover with zero compromise.' },
    { title: 'Renovation Experts', desc: 'Professional renovation and remodeling that modernizes spaces while staying on budget.' },
    { title: 'Interior Solutions', desc: 'Customized interior design and execution with premium finishes and attention to detail.' },
    { title: 'Quality-Driven', desc: 'Premium materials, rigorous quality checks, and skilled craftsmanship on every project.' },
    { title: 'Trusted by Chennai', desc: 'A reliable construction partner with a growing base of satisfied clients across the city.' }
  ];

  return (
    <div
      className="blueprint-overlay"
      style={{ paddingTop: '90px', position: 'relative', backgroundColor: 'var(--white)', overflow: 'hidden' }}
    >
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative', padding: '110px 0 90px',
          backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/img/hero_background.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, filter: 'brightness(0.7)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.95) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="badge-pill badge-green" style={{ marginBottom: '22px' }}>
            About VEEYES INFRAAS
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Chennai's Trusted Construction Partner <span style={{ color: 'var(--light-green)' }}>Since 2001</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.75, maxWidth: '760px', margin: '0 auto' }}
          >
            For over 25 years, VEEYES INFRAAS has been building homes, commercial spaces, and infrastructure across Chennai with quality, integrity, and unwavering commitment to customer satisfaction.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. COMPANY STORY */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '70px', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
              <div className="badge-pill badge-blue" style={{ marginBottom: '16px' }}>Our Story</div>
              <h2 className="section-title">Built on Quality, Trust & 25 Years of Experience</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-muted)', lineHeight: 1.8, marginBottom: '22px' }}>
                VEEYES INFRAAS is a leading construction and infrastructure company based in Chennai, Tamil Nadu, delivering high-quality residential, commercial, industrial, interior, renovation, and turnkey construction services since 2001.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                With over 25 years of experience, we provide end-to-end construction solutions combining innovative engineering, premium materials, skilled craftsmanship, and efficient project management to deliver projects on time without compromising quality.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {['Established 2001', '25+ Years Experience', 'Chennai-Based', '50+ Projects Delivered'].map((fact, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: 'var(--dark-charcoal)' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--primary-green)' }} />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)', border: '1px solid var(--border-light)' }}
            >
              <img src="/img/hero_construction_bg.png" alt="VEEYES INFRAAS Construction" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 3. VISION & MISSION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '70px', alignItems: 'center' }}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)', border: '1px solid var(--border-light)' }}
            >
              <img src="/img/cf661530a209fec.jpg" alt="VEEYES INFRAAS Vision and Mission" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {/* Vision */}
              <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--blue-tint-light)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Eye size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-charcoal)' }}>Our Vision</h3>
                </div>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  To become one of South India's most trusted construction companies by delivering world-class residential, commercial, and infrastructure projects built on quality, integrity, innovation, and long-term client relationships.
                </p>
              </div>
              {/* Mission */}
              <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--green-tint-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-charcoal)' }}>Our Mission</h3>
                </div>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  To provide reliable, innovative, and sustainable construction solutions through quality workmanship, advanced engineering practices, and exceptional customer service — ensuring every project is completed on schedule and within budget.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. CORE VALUES */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>What We Stand For</div>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              The principles that guide every project, every decision, and every relationship at VEEYES INFRAAS.
            </p>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}
          >
            {[
              { title: 'Quality First', desc: 'We never compromise on materials, workmanship, or structural standards.', icon: Award, color: 'var(--primary-blue)' },
              { title: 'Integrity & Transparency', desc: 'Honest pricing, clear timelines, and open communication throughout every project.', icon: ShieldCheck, color: 'var(--primary-green)' },
              { title: 'Customer Satisfaction', desc: 'Our success is measured by the satisfaction and trust of every client we serve.', icon: ThumbsUp, color: 'var(--secondary-blue)' },
              { title: 'Engineering Excellence', desc: 'Advanced construction techniques and precision engineering on every build.', icon: HardHat, color: 'var(--primary-blue)' },
              { title: 'Safety & Reliability', desc: 'Rigorous site safety standards protecting every worker and stakeholder.', icon: Heart, color: 'var(--primary-green)' },
              { title: 'Innovation', desc: 'Embracing modern methods and materials for smarter, better construction.', icon: Sparkles, color: 'var(--secondary-blue)' },
              { title: 'Timely Delivery', desc: 'Every project milestoned and managed to deliver on time without compromise.', icon: Clock, color: 'var(--primary-blue)' },
              { title: 'Professionalism', desc: 'A dedicated, skilled team committed to the highest standards of conduct.', icon: Users, color: 'var(--primary-green)' }
            ].map((value, idx) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={scaleUp}
                  whileHover={{ y: -8 }}
                  className="glass-card"
                  style={{ padding: '36px 28px', borderRadius: 'var(--radius-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--blue-tint-light)', color: value.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>{value.title}</h3>
                  <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. CHAIRMAN'S MESSAGE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '54px 44px', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                <div className="badge-pill badge-blue" style={{ marginBottom: '18px' }}>Founder's Message</div>
                <h2 className="section-title" style={{ fontSize: '2.3rem', marginBottom: '24px' }}>A Message from Our Founder</h2>
                <div style={{ position: 'relative', marginBottom: '28px' }}>
                  <Quote size={44} style={{ color: 'var(--primary-blue)', opacity: 0.18, position: 'absolute', top: '-15px', left: '-15px' }} />
                  <p style={{ fontSize: '1.18rem', fontStyle: 'italic', color: 'var(--dark-charcoal)', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
                    "Our commitment is simple: to build durable, functional, and aesthetically pleasing spaces that exceed customer expectations while maintaining transparency, safety, and engineering excellence every single day."
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-blue)' }}>Sridhar K</h4>
                  <div style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Founder & Chairman, VEEYES INFRAAS</div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}
                style={{ backgroundColor: 'var(--blue-tint-light)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(11, 79, 156, 0.12)' }}
              >
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '18px' }}>
                  25+ Years of Construction Leadership
                </h4>
                <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Since founding VEEYES INFRAAS in 2001, V. Yoganand has led the company to become a trusted construction name across Chennai, maintaining a perfect record of client satisfaction across all project categories.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-green)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <CheckCircle2 size={20} />
                  <span>Direct Leadership on Every Project</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. TIMELINE */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>Our Journey</div>
            <h2 className="section-title">25 Years of Growth & Excellence</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From our founding in 2001 to today — a story of continuous growth, innovation, and unwavering quality.
            </p>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '26px', width: '4px', backgroundColor: 'var(--blue-tint-medium)', borderRadius: '2px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {timelineEvents.map((evt, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} variants={fadeUp} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', boxShadow: '0 6px 18px rgba(11, 79, 156, 0.35)', flexShrink: 0, zIndex: 2 }}>
                    {evt.year.slice(2)}'
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Year {evt.year}</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>{evt.title}</h3>
                    <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>{evt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 7. COMPANY HIGHLIGHTS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>Company Profile</div>
            <h2 className="section-title">Company Highlights</h2>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '28px' }}
          >
            {companyHighlights.map((hl, idx) => (
              <motion.div key={idx} variants={scaleUp} className="glass-card" style={{ padding: '34px 28px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle2 size={24} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark-charcoal)' }}>{hl.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, margin: 0 }}>{hl.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8. WHY CHOOSE US */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>The VEEYES Advantage</div>
            <h2 className="section-title">Why Choose VEEYES INFRAAS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '32px' }}>
            {[
              { title: '25+ Years of Industry Experience', desc: 'A proven track record of delivering quality construction projects across Chennai since 2001.' },
              { title: 'Chennai-Based Trusted Builder', desc: 'Deep local expertise and a strong network of suppliers, engineers, and craftsmen in Tamil Nadu.' },
              { title: 'End-to-End Turnkey Solutions', desc: 'Complete project management from initial design to final handover — one team, zero hassle.' },
              { title: 'Premium Quality Materials', desc: 'We source only certified, high-grade materials backed by rigorous quality control processes.' },
              { title: 'Transparent Process', desc: 'Clear billing, honest timelines, and open communication so you\'re always informed and in control.' },
              { title: 'Customer-Centric Approach', desc: 'Your vision drives every decision we make, ensuring results that genuinely exceed expectations.' }
            ].map((pillar, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="glass-card" style={{ padding: '36px 28px', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '12px' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, margin: 0 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STATISTICS */}
      <section style={{ backgroundColor: 'var(--primary-blue)', padding: '90px 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--white)', marginBottom: '10px' }}>VEEYES INFRAAS in Numbers</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.88)' }}>25 years of delivering quality construction across Chennai.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '28px' }}>
            <StatCounter endValue={25} suffix="+" label="Years of Experience" sublabel="Since 2001" icon={Award} />
            <StatCounter endValue={50} suffix="+" label="Projects Delivered" sublabel="Residential & Commercial" icon={Building2} />
            <StatCounter endValue={100} suffix="+" label="Happy Clients" sublabel="Across Chennai" icon={Users} />
            <StatCounter endValue={5} suffix="M+" label="Sq. Ft. Built" sublabel="Delivered On Time" icon={TrendingUp} />
          </div>
        </div>
      </section>
    </div>
  );
}

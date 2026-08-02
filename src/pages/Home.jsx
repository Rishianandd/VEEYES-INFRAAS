import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Clock,
  ThumbsUp,
  Building2,
  Home as HomeIcon,
  HardHat,
  Layers,
  Paintbrush,
  MapPin
} from 'lucide-react';
import StatCounter from '../components/StatCounter';
import { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer } from '../utils/motionVariants';

export default function Home({ onOpenProject, onOpenQuote, onNavigateSection }) {
  // Featured Projects — 3 representative projects
  const featuredProjects = [
    {
      id: 'veyes-villa-project',
      title: 'Premium Villa Development',
      location: 'Mudichur Road, Chennai',
      image: 'img/hero_background.png',
      category: 'Residential',
      status: 'Completed',
      description: 'A thoughtfully designed gated villa community combining modern architecture with functional layouts and premium finishes.'
    },
    {
      id: 'veyes-commercial-complex',
      title: 'Commercial Office Complex',
      location: 'GST Road, Chennai',
      image: 'img/cf661530a209fec.jpg',
      category: 'Commercial',
      status: 'Completed',
      description: 'A modern commercial building delivering efficient office spaces, durable construction, and premium corporate aesthetics.'
    },
    {
      id: 'veyes-turnkey-project',
      title: 'Turnkey Industrial Build',
      location: 'Sriperumbudur, Chennai',
      image: 'img/WhatsApp Image 2026-08-02 at 9.40.36 PM.jpeg',
      category: 'Turnkey',
      status: 'Completed',
      description: 'End-to-end turnkey execution from design to final handover, delivered on schedule with zero cost overruns.'
    }
  ];

  // 5 Featured Services matching real VEEYES INFRAAS offerings
  const featuredServices = [
    {
      title: 'Residential Construction',
      desc: 'Premium villas, apartments, and independent houses built with durable materials and efficient project management.',
      icon: HomeIcon
    },
    {
      title: 'Commercial Construction',
      desc: 'Office buildings, commercial complexes, and retail spaces executed with quality, safety, and operational efficiency.',
      icon: Building2
    },
    {
      title: 'Turnkey Construction',
      desc: 'Complete end-to-end project delivery — from architectural planning to structural construction and final handover.',
      icon: Layers
    },
    {
      title: 'Renovation & Remodeling',
      desc: 'Structural upgrades, interior modernization, and complete property makeovers delivered on time and within budget.',
      icon: HardHat
    }
  ];

  // Why Choose VEEYES
  const whyChooseItems = [
    { title: '25+ Years Experience', icon: Award, desc: 'Established in 2001 with a proven track record of quality construction across Chennai.' },
    { title: 'Quality Materials', icon: ShieldCheck, desc: 'We use only premium materials backed by rigorous quality checks and supplier standards.' },
    { title: 'Innovation', icon: Sparkles, desc: 'Modern construction techniques, advanced engineering practices, and efficient execution.' },
    { title: 'Experienced Team', icon: Users, desc: 'Skilled engineers, architects, and craftsmen dedicated to delivering excellence on every site.' },
    { title: 'Timely Delivery', icon: Clock, desc: 'Every project is managed to strict milestones, ensuring on-schedule completion.' },
    { title: 'Customer Satisfaction', icon: ThumbsUp, desc: 'Transparent processes, clear communication, and a client-first approach on every project.' }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '130px',
          paddingBottom: '100px',
          overflow: 'hidden',
          backgroundColor: 'var(--dark-charcoal)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("img/hero_background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65) contrast(1.1)',
            transform: 'scale(1.05)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.94) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, color: 'var(--white)' }}>
          <div style={{ maxWidth: '850px', marginBottom: '70px' }}>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.5rem)',
                fontWeight: 800,
                color: 'var(--white)',
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '28px'
              }}
            >
              Building Tomorrow's Infrastructure with <span style={{ color: 'var(--light-green)' }}>Excellence</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeUp}
              style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: 1.75,
                marginBottom: '44px',
                maxWidth: '740px'
              }}
            >
              Delivering premium residential, commercial, industrial, and turnkey construction solutions with engineering excellence, superior quality, and over 25 years of trusted experience.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
            >
              <button className="btn-green" onClick={() => onNavigateSection('featured-projects')}>
                <span>Explore Projects</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline-white" onClick={onOpenQuote}>
                <span>Contact Us</span>
              </button>
            </motion.div>
          </div>

          {/* Animated Counters */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={scaleUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '28px'
            }}
          >
            <StatCounter endValue={50} suffix="+" label="Projects Delivered" icon={Building2} />
            <StatCounter endValue={100} suffix="+" label="Happy Clients" icon={Users} />
            <StatCounter endValue={25} suffix="+" label="Years Experience" icon={Award} />
            <StatCounter endValue={5} suffix="M+" label="Sq.ft Built" icon={Sparkles} />
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. ABOUT PREVIEW */}
      <section id="about-preview" className="section-padding blueprint-overlay" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '70px', alignItems: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-light)'
              }}
            >
              <img
                src="img/hero_construction_bg.png"
                alt="VEEYES INFRAAS Construction Project"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
            >
              <div className="badge-pill badge-blue" style={{ marginBottom: '18px' }}>
                About VEEYES INFRAAS
              </div>
              <h2 className="section-title">Chennai's Trusted Construction Partner Since 2001</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-muted)', lineHeight: 1.8, marginBottom: '36px' }}>
                For over two decades, VEEYES INFRAAS has been delivering reliable construction solutions across Chennai. From dream homes and commercial developments to renovation and turnkey projects, we combine quality craftsmanship, innovative engineering, and timely execution to build spaces that inspire confidence and long-term value.
              </p>
              <button className="btn-primary" onClick={onOpenQuote}>
                <span>Learn More</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 3. FEATURED SERVICES */}
      <section id="services" className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>What We Do</div>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              End-to-end construction solutions built on quality, precision, and 25 years of trusted expertise.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '36px',
              marginBottom: '60px'
            }}
          >
            {featuredServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="glass-card"
                  style={{ padding: '40px 32px', borderRadius: 'var(--radius-lg)' }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--blue-tint-light)',
                      color: 'var(--primary-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px'
                    }}
                  >
                    <IconComp size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '14px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.98rem', lineHeight: 1.7, margin: 0 }}>
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn-secondary" onClick={onOpenQuote}>
              <span>View All Services</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. FEATURED PROJECTS */}
      <section id="featured-projects" className="section-padding blueprint-overlay" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>Our Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A selection of our completed residential, commercial, and turnkey construction projects across Chennai.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', marginBottom: '60px' }}>
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.1}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="glass-card"
                style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => onOpenProject && onOpenProject(project)}
              >
                <div style={{ position: 'relative', height: '290px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
                    <span className="badge-pill badge-blue">{project.category}</span>
                  </div>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.96rem', color: 'var(--charcoal-muted)', marginBottom: '14px' }}>
                    <MapPin size={18} style={{ color: 'var(--primary-blue)' }} />
                    <span>{project.location}</span>
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary" onClick={onOpenQuote}>
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. WHY CHOOSE VEEYES */}
      <section id="why-choose" className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div className="badge-pill badge-green" style={{ marginBottom: '14px' }}>The VEEYES Advantage</div>
            <h2 className="section-title">Why Choose VEEYES INFRAAS</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Trusted by homeowners, businesses, and developers across Chennai for over 25 years.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '28px' }}
          >
            {whyChooseItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  whileHover={{ y: -6 }}
                  className="glass-card"
                  style={{ padding: '36px 28px', borderRadius: 'var(--radius-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      backgroundColor: 'var(--blue-tint-light)', color: 'var(--primary-blue)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px'
                    }}
                  >
                    <IconComp size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. MEMBERSHIPS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '10px' }}>Industry Affiliations</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-charcoal)' }}>
              Professional Memberships
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
            {[
              { src: 'img/bai.png', alt: 'Builders Association of India (BAI)' },
              { src: 'img/cni.png', alt: 'Construction Network of India (CNI)' },
              { src: 'img/rmb.png', alt: 'Rotary Means Business (RMB)' }
            ].map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: '#FFFFFF', padding: '20px 36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-subtle)' }}
              >
                <img src={logo.src} alt={logo.alt} loading="lazy" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0B4F9C 0%, #1E63B7 50%, #62B348 100%)',
          color: 'var(--white)',
          padding: '110px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', fontWeight: 800, color: 'var(--white)', marginBottom: '20px' }}
          >
            Let's Build Your Vision Together
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px', margin: '0 auto 40px' }}
          >
            Whether you're planning your dream home, commercial building, renovation, or turnkey project, VEEYES INFRAAS is ready to transform your vision into reality with quality, precision, and trust.
          </motion.p>
          <button
            className="btn-green"
            onClick={onOpenQuote}
            style={{ backgroundColor: 'var(--white)', color: 'var(--primary-blue)', boxShadow: '0 12px 30px rgba(0,0,0,0.22)' }}
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

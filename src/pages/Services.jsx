import React from 'react';
import { motion } from 'framer-motion';
import {
  Home as HomeIcon,
  Building2,
  Layers,
  HardHat,
  Paintbrush,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { fadeUp, slideLeft, slideRight } from '../utils/motionVariants';

export default function Services({ onOpenQuote }) {
  const servicesList = [
    {
      id: 'residential-construction',
      title: 'Residential Construction',
      icon: HomeIcon,
      image: '/img/Perungalthur -  Neukundram Road.jpeg',
      description: 'We specialize in constructing premium villas, independent houses, and residential developments that combine functionality with aesthetic excellence. Every project is carefully planned from foundation to completion using durable materials, modern construction techniques, and efficient project management to deliver homes that stand the test of time.',
      benefits: [
        'Custom architectural planning & design',
        'Premium quality materials throughout',
        'Structural strength & weather resilience',
        'On-time delivery within agreed budget'
      ],
      ctaText: 'Inquire About Residential Construction'
    },
    {
      id: 'commercial-construction',
      title: 'Commercial Construction',
      icon: Building2,
      image: '/img/VEEYES INFRAAS Office.jpeg',
      description: 'We design and construct corporate office buildings, commercial complexes, retail spaces, and business facilities. Our experienced engineers ensure every commercial project is executed with quality, safety, durability, and operational efficiency.',
      benefits: [
        'Corporate office buildings & branch facilities',
        'Retail spaces & commercial developments',
        'Structural safety & code compliance standards',
        'Operational layout & energy-efficient build'
      ],
      ctaText: 'Inquire About Commercial Construction'
    },
    {
      id: 'turnkey-construction',
      title: 'Turnkey Construction',
      icon: Layers,
      image: '/img/Tirupur, avinashi road, Tirupur..jpeg',
      description: 'Our turnkey construction services provide complete end-to-end project execution — from architectural planning and structural design to construction, finishing, and final handover. We manage every phase of the project with single-point accountability.',
      benefits: [
        'Single point of accountability from start to finish',
        'Architectural design to final handover',
        'Fixed budget & timeline commitment',
        'Zero compromise on quality at any phase'
      ],
      ctaText: 'Inquire About Turnkey Construction'
    },
    {
      id: 'renovation-remodeling',
      title: 'Renovation & Remodeling',
      icon: HardHat,
      image: '/img/Tirupur,  palladam Road.jpeg',
      description: 'We transform existing residential and commercial properties through professional renovation and remodeling solutions. From structural strengthening to interior modernization and elevation upgrades, we create functional and visually appealing spaces.',
      benefits: [
        'Residential & commercial property renovation',
        'Structural upgrades & elevation makeovers',
        'Interior modernization & utility refitting',
        'Budget-friendly execution with no hidden costs'
      ],
      ctaText: 'Inquire About Renovation'
    },
    {
      id: 'interior-solutions',
      title: 'Interior Solutions',
      icon: Paintbrush,
      image: '/img/Tirupur,Kangayam Road.jpeg',
      description: 'Our interior design and contracting services deliver elegant, practical, and modern spaces that reflect our clients\' lifestyle and business requirements. We deliver customized interior solutions with attention to detail and superior craftsmanship.',
      benefits: [
        'Customized interior design & spatial planning',
        'Premium joinery & quality material choices',
        'Residential & corporate interior fitouts',
        'Superior finish & attention to detail'
      ],
      ctaText: 'Inquire About Interior Solutions'
    }
  ];

  return (
    <div className="blueprint-overlay" style={{ paddingTop: '90px', backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{ position: 'relative', padding: '110px 0 90px', backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/img/hero_background.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, filter: 'brightness(0.7)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.95) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="badge-pill badge-green" style={{ marginBottom: '22px' }}>
            Our Services
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Comprehensive Construction & <span style={{ color: 'var(--light-green)' }}>Infrastructure Services</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.75, maxWidth: '760px', margin: '0 auto' }}
          >
            From residential homes and commercial buildings to turnkey projects, renovation, and interior solutions — VEEYES INFRAAS delivers end-to-end construction excellence across Chennai.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. SERVICE CATEGORIES */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 80px' }}>
            <div className="badge-pill badge-blue" style={{ marginBottom: '14px' }}>What We Build</div>
            <h2 className="section-title">Our Construction Services</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Five specialized service verticals designed for quality, functionality, and value — backed by 25 years of Chennai construction expertise.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '110px' }}>
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              const isEven = index % 2 === 0;
              return (
                <React.Fragment key={service.id}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={isEven ? slideLeft : slideRight}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '70px', alignItems: 'center' }}
                  >
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        order: isEven ? 1 : 2,
                        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                        boxShadow: 'var(--shadow-hover)', border: '1px solid var(--border-light)',
                        position: 'relative', height: '390px'
                      }}
                    >
                      <img src={service.image} alt={service.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '24px', left: '24px', width: '60px', height: '60px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}>
                        <IconComp size={30} />
                      </div>
                    </motion.div>

                    {/* Text */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      <div className="badge-pill badge-green" style={{ marginBottom: '18px' }}>Service 0{index + 1}</div>
                      <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '18px' }}>{service.title}</h3>
                      <p style={{ fontSize: '1.08rem', color: 'var(--charcoal-muted)', lineHeight: 1.75, marginBottom: '32px' }}>{service.description}</p>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Key Features & Benefits
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px', marginBottom: '40px' }}>
                        {service.benefits.map((benefit, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.94rem', color: 'var(--dark-charcoal)', fontWeight: 600 }}>
                            <CheckCircle2 size={18} style={{ color: 'var(--primary-green)', flexShrink: 0, marginTop: '3px' }} />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <button className="btn-primary" onClick={onOpenQuote}>
                        <span>{service.ctaText}</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                  {index < servicesList.length - 1 && <div className="section-divider" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

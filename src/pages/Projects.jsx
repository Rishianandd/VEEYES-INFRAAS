import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { fadeUp } from '../utils/motionVariants';

export default function Projects({ onOpenProject, onOpenQuote }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { id: 'All', label: 'All Projects' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Infrastructure', label: 'Infrastructure' },
    { id: 'Completed', label: 'Completed' },
    { id: 'Ongoing', label: 'Ongoing' }
  ];

  const filteredProjects = projectsData.filter((p) => {
    let matchesFilter = true;
    if (selectedFilter === 'All') {
      matchesFilter = true;
    } else if (selectedFilter === 'Completed' || selectedFilter === 'Ongoing') {
      matchesFilter = p.status === selectedFilter;
    } else {
      matchesFilter = p.category === selectedFilter;
    }

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="blueprint-overlay" style={{ paddingTop: '90px', backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 90px',
          backgroundColor: 'var(--dark-charcoal)',
          color: 'var(--white)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("img/hero_background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            filter: 'brightness(0.7)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(11, 79, 156, 0.88) 0%, rgba(29, 35, 42, 0.95) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="badge-pill badge-green"
            style={{ marginBottom: '22px' }}
          >
            Engineering Portfolio
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 4.8vw, 4rem)',
              fontWeight: 800,
              color: 'var(--white)',
              lineHeight: 1.15,
              marginBottom: '24px'
            }}
          >
            Landmark Infrastructure & <span style={{ color: 'var(--light-green)' }}>Architectural Showcase</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.92)',
              lineHeight: 1.75,
              maxWidth: '760px',
              margin: '0 auto'
            }}
          >
            Explore our delivered Grade-A IT parks, luxury oceanfront towers, turnkey logistics parks, and elevated civil expressways.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. PROJECT FILTER & MASONRY GALLERY */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          {/* Filter Bar & Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
              backgroundColor: 'var(--light-gray)',
              padding: '28px 36px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              marginBottom: '60px'
            }}
          >
            {/* Category Filter Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {filterOptions.map((opt) => {
                const isActive = selectedFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFilter(opt.id)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      backgroundColor: isActive ? 'var(--primary-blue)' : 'var(--white)',
                      color: isActive ? 'var(--white)' : 'var(--dark-charcoal)',
                      border: isActive ? 'none' : '1px solid var(--border-light)',
                      boxShadow: isActive ? '0 6px 18px rgba(11, 79, 156, 0.22)' : 'none'
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search */}
            <div style={{ position: 'relative', minWidth: '280px' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--charcoal-muted)' }} />
              <input
                type="text"
                placeholder="Search location, client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 46px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--white)',
                  fontSize: '0.94rem'
                }}
              />
            </div>
          </div>

          {/* 3. MASONRY GRID OF PROJECT CARDS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '40px'
            }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.1}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onClick={() => onOpenProject(project)}
              >
                {/* Large Image with Hover Zoom */}
                <div>
                  <div style={{ position: 'relative', height: '290px', overflow: 'hidden', backgroundColor: 'var(--dark-charcoal)' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />

                    {/* Status Badge */}
                    <div style={{ position: 'absolute', top: '18px', left: '18px', display: 'flex', gap: '10px' }}>
                      <span className="badge-pill badge-blue" style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.18)' }}>
                        {project.categoryLabel || project.category}
                      </span>
                      <span
                        className="badge-pill"
                        style={{
                          backgroundColor: project.status === 'Completed' ? 'var(--green-tint-light)' : 'var(--blue-tint-light)',
                          color: project.status === 'Completed' ? 'var(--primary-green)' : 'var(--primary-blue)',
                          border: project.status === 'Completed' ? '1px solid var(--border-green)' : '1px solid rgba(11,79,156,0.15)',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.18)'
                        }}
                      >
                        {project.status === 'Completed' ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>Completed</span>
                          </>
                        ) : (
                          <>
                            <Clock size={14} />
                            <span>Ongoing</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-charcoal)', marginBottom: '10px' }}>
                      {project.title}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.94rem', color: 'var(--charcoal-muted)', marginBottom: '18px' }}>
                      <MapPin size={16} style={{ color: 'var(--primary-blue)' }} />
                      <span>{project.location}</span>
                    </div>

                    <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, marginBottom: '28px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {project.description}
                    </p>

                    {/* Mini Gallery Preview */}
                    {project.gallery && (
                      <div style={{ marginBottom: '28px' }}>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, marginBottom: '10px' }}>
                          Gallery Preview
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {project.gallery.map((imgSrc, gIdx) => (
                            <img
                              key={gIdx}
                              src={imgSrc}
                              alt="Gallery Thumbnail"
                              loading="lazy"
                              style={{
                                width: '60px',
                                height: '45px',
                                objectFit: 'cover',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-light)'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div style={{ padding: '0 32px 32px' }}>
                  <button
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '14px 24px', fontSize: '0.98rem' }}
                  >
                    <span>View Project Details</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '90px 20px', color: 'var(--charcoal-muted)' }}>
              <h3>No projects found matching your filter options.</h3>
              <p>Try selecting "All Projects" or clearing your search query.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

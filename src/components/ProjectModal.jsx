import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building2, UserCheck, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: 'rgba(29, 35, 42, 0.75)',
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
            maxWidth: '850px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            border: '1px solid var(--border-light)',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--dark-charcoal)',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <X size={20} />
          </button>

          {/* Modal Header Image */}
          <div style={{ position: 'relative', height: '320px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--dark-charcoal)' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(29, 35, 42, 0.9) 0%, rgba(29, 35, 42, 0.2) 60%, transparent 100%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '28px',
                right: '28px',
                color: 'var(--white)'
              }}
            >
              <div className="badge-pill badge-green" style={{ marginBottom: '12px' }}>
                {project.categoryLabel || project.category}
              </div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--white)', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div style={{ padding: '32px' }}>
            {/* Quick Specs Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                backgroundColor: 'var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                marginBottom: '28px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={22} style={{ color: 'var(--primary-blue)' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-charcoal)' }}>{project.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Layers size={22} style={{ color: 'var(--primary-green)' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Total Built Area</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-charcoal)' }}>{project.area}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={22} style={{ color: 'var(--secondary-blue)' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Completion</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-charcoal)' }}>{project.completionYear} ({project.status})</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <UserCheck size={22} style={{ color: 'var(--light-green)' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 600 }}>Client Partner</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-charcoal)' }}>{project.client}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-blue)' }}>
              Project Scope & Architectural Engineering
            </h4>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--charcoal-muted)', marginBottom: '28px' }}>
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && (
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--dark-charcoal)' }}>
                  Technical Highlights & Engineering Standards
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  {project.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: 'var(--blue-tint-light)',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(11, 79, 156, 0.1)'
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark-charcoal)' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action inside Modal */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
              <button
                className="btn-secondary"
                onClick={onClose}
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                Close View
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

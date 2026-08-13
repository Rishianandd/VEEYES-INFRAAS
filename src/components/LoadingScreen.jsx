import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3500; // 3.5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculated);

      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #07172C 0%, #0B3C78 50%, #0B4F9C 100%)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-heading)',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Background Glow Elements */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.65, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(98, 179, 72, 0.35) 0%, rgba(11, 79, 156, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{
          scale: [1.25, 1, 1.25],
          opacity: [0.4, 0.75, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30, 99, 183, 0.45) 0%, rgba(11, 79, 156, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Content Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          zIndex: 2,
          padding: '48px 56px',
          borderRadius: '28px',
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          maxWidth: '90vw',
          width: '420px'
        }}
      >
        {/* Animated Brand Logo Container */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Continuous Rotating Outer Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '105px',
              height: '105px',
              borderRadius: '50%',
              border: '2.5px solid transparent',
              borderTopColor: '#62B348',
              borderRightColor: '#1E63B7',
              boxShadow: '0 0 20px rgba(98, 179, 72, 0.5)'
            }}
          />

          <motion.img
            src="/img/veyes-logo.png"
            alt="VEEYES INFRAAS Logo"
            animate={{ scale: [0.95, 1.03, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              height: '64px',
              width: 'auto',
              filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.3))'
            }}
          />
        </div>

        {/* Brand Name & Subtitle */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '1.9rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
              fontFamily: 'var(--font-heading)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>VEEYES</span>
            <span style={{ color: '#62B348' }}>INFRAAS</span>
          </h1>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: '6px',
              margin: 0
            }}
          >
            Builder & Infrastructure
          </p>
        </div>

        {/* 10-Second Progress Bar Section */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.05 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #1E63B7 0%, #62B348 100%)',
                borderRadius: '999px',
                boxShadow: '0 0 12px rgba(98, 179, 72, 0.9)'
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            <span>Loading Experience...</span>
            <span style={{ color: '#62B348', fontWeight: 700 }}>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

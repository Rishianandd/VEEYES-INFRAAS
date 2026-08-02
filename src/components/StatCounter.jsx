import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function StatCounter({ endValue, suffix = '', label, sublabel, icon: Icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)' }}
      style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-15px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: 'var(--green-tint-light)',
          opacity: 0.5,
          zIndex: 0
        }}
      />
      {Icon && (
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--blue-tint-light)',
            color: 'var(--primary-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            zIndex: 1
          }}
        >
          <Icon size={24} />
        </div>
      )}
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.6rem',
          fontWeight: 800,
          color: 'var(--primary-blue)',
          lineHeight: 1.1,
          marginBottom: '6px',
          zIndex: 1
        }}
      >
        {count}
        <span style={{ color: 'var(--primary-green)' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--dark-charcoal)',
          marginBottom: '4px',
          zIndex: 1
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: '0.85rem', color: 'var(--charcoal-muted)', zIndex: 1 }}>
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      whileHover={{ y: -4 }}
      style={{
        padding: '16px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {Icon && (
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            color: 'var(--light-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <Icon size={26} />
        </div>
      )}
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.6rem, 3.8vw, 3.6rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '6px',
          letterSpacing: '-0.02em'
        }}
      >
        {count}
        <span style={{ color: 'var(--light-green)' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}

// Framer Motion Reusable Animation Variants for VEEYES INFRAAS

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: customDelay
    }
  })
};

export const slideLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: customDelay
    }
  })
};

export const slideRight = {
  hidden: { opacity: 0, x: 45 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: customDelay
    }
  })
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: customDelay
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--shadow-card)' },
  hover: {
    y: -8,
    boxShadow: 'var(--shadow-hover)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

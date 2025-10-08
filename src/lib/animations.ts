import { Variants } from 'framer-motion';

// Enhanced easing curves for professional feel
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  elegant: [0.23, 1, 0.32, 1],
  professional: [0.4, 0, 0.2, 1],
  subtle: [0.25, 0.46, 0.45, 0.94]
} as const;

// Professional animation variants
export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.elegant
    }
  }
};

export const fadeInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -80,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easings.professional
    }
  }
};

export const fadeInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 80,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easings.professional
    }
  }
};

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.bouncy
    }
  }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const slideInFromBottom: Variants = {
  initial: { 
    opacity: 0, 
    y: 100,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: easings.elegant
    }
  }
};

// Smooth scroll reveal animation
export const scrollReveal: Variants = {
  initial: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    filter: 'blur(6px)'
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: easings.elegant
    }
  }
};

// Professional hover animations
export const buttonHover = {
  scale: 1.05,
  y: -2,
  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
  transition: {
    duration: 0.3,
    ease: easings.smooth
  }
};

export const buttonTap = {
  scale: 0.98,
  y: 0,
  transition: {
    duration: 0.1,
    ease: easings.professional
  }
};

export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  transition: {
    duration: 0.4,
    ease: easings.elegant
  }
};

// Magnetic hover effect
export const magneticHover = {
  scale: 1.1,
  rotate: [0, 2, -2, 0],
  transition: {
    duration: 0.3,
    ease: easings.bouncy
  }
};

// Smooth page transitions
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.professional
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: easings.professional
    }
  }
};
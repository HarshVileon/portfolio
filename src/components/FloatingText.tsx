import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

export default function FloatingText({ 
  text, 
  delay = 0, 
  duration = 20, 
  className = '', 
  size = 'md',
  opacity = 0.3 
}: FloatingTextProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  // Random starting position
  const startX = Math.random() * (windowSize.width - 200);
  const startY = Math.random() * (windowSize.height - 100);
  
  // Random end position
  const endX = Math.random() * (windowSize.width - 200);
  const endY = Math.random() * (windowSize.height - 100);

  return (
    <motion.div
      className={`fixed pointer-events-none z-5 font-light tracking-wide ${sizeClasses[size]} ${className}`}
      initial={{ 
        x: startX, 
        y: startY, 
        opacity: 0,
        scale: 0.8
      }}
      animate={{ 
        x: [startX, endX, startX + 100, endX - 50, startX],
        y: [startY, endY, startY - 50, endY + 30, startY],
        opacity: [0, opacity, opacity, opacity, 0],
        scale: [0.8, 1, 1.1, 0.9, 0.8],
        rotate: [0, 5, -3, 2, 0]
      }}
      transition={{ 
        duration, 
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.8))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'blur(0.5px)'
      }}
    >
      {text}
    </motion.div>
  );
}
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const inspirationalWords = [
  'Create', 'Innovate', 'Build', 'Design', 'Code', 'Dream', 'Achieve', 'Excel'
];

export default function MouseFollowText() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 20);
      
      // Show text when mouse moves
      setIsVisible(true);
      
      // Hide after inactivity
      const timeout = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timeout);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % inspirationalWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-30 text-2xl font-light tracking-widest select-none"
      style={{ 
        x: springX, 
        y: springY,
        background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(147, 51, 234, 0.8))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))'
      }}
      animate={{ 
        opacity: isVisible ? 0.6 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.3 }}
    >
      {inspirationalWords[currentWord]}
    </motion.div>
  );
}
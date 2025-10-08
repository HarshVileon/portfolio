import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const techWords = [
  'React', 'Node.js', 'TypeScript', 'Laravel', 'WordPress', 'JavaScript',
  'Innovation', 'Excellence', 'Quality', 'Creativity', 'Performance', 'Scalable',
  'Modern', 'Responsive', 'Dynamic', 'Elegant', 'Powerful', 'Intuitive'
];

const FloatingWord = ({ word, index }: { word: string; index: number }) => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Create unique animation path for each word
  const animationPath = {
    x: [
      Math.random() * windowSize.width * 0.1,
      Math.random() * windowSize.width * 0.9,
      Math.random() * windowSize.width * 0.2,
      Math.random() * windowSize.width * 0.8,
      Math.random() * windowSize.width * 0.1
    ],
    y: [
      Math.random() * windowSize.height * 0.2,
      Math.random() * windowSize.height * 0.8,
      Math.random() * windowSize.height * 0.3,
      Math.random() * windowSize.height * 0.7,
      Math.random() * windowSize.height * 0.2
    ]
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-5 font-light tracking-wider select-none"
      initial={{ 
        x: animationPath.x[0], 
        y: animationPath.y[0], 
        opacity: 0,
        scale: 0.7
      }}
      animate={{ 
        x: animationPath.x,
        y: animationPath.y,
        opacity: [0, 0.15, 0.25, 0.15, 0],
        scale: [0.7, 1, 1.2, 0.9, 0.7],
        rotate: [0, 10, -5, 8, 0]
      }}
      transition={{ 
        duration: 25 + index * 2,
        delay: index * 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        fontSize: `${0.8 + Math.random() * 0.8}rem`,
        background: `linear-gradient(${45 + index * 20}deg, 
          rgba(139, 92, 246, ${0.4 + Math.random() * 0.3}), 
          rgba(147, 51, 234, ${0.3 + Math.random() * 0.4}), 
          rgba(59, 130, 246, ${0.2 + Math.random() * 0.3}))`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: `blur(${0.3 + Math.random() * 0.4}px) brightness(${1.2 + Math.random() * 0.3})`
      }}
    >
      {word}
    </motion.div>
  );
};

export default function FloatingWords() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {techWords.map((word, index) => (
        <FloatingWord key={`${word}-${index}`} word={word} index={index} />
      ))}
    </div>
  );
}
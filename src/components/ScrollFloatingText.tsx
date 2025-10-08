import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFloatingTextProps {
  texts: string[];
  section: string;
}

export default function ScrollFloatingText({ texts, section }: ScrollFloatingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {texts.map((text, index) => {
        const yOffset = useTransform(
          scrollYProgress, 
          [0, 1], 
          [100 + index * 50, -100 - index * 30]
        );
        
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.2, 0.8, 1],
          [0, 0.3, 0.3, 0]
        );
        
        const scale = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [0.8, 1.2, 0.8]
        );

        return (
          <motion.div
            key={`${section}-${text}-${index}`}
            className="absolute text-lg font-light tracking-wide select-none"
            style={{
              x: `${20 + (index % 3) * 30}%`,
              y: yOffset,
              opacity,
              scale,
              background: `linear-gradient(${120 + index * 30}deg, 
                rgba(139, 92, 246, 0.4), 
                rgba(147, 51, 234, 0.3), 
                rgba(59, 130, 246, 0.4))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.3px)'
            }}
            animate={{
              rotate: [0, 5, -3, 2, 0],
              x: [`${20 + (index % 3) * 30}%`, `${25 + (index % 3) * 30}%`, `${20 + (index % 3) * 30}%`]
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.div>
        );
      })}
    </div>
  );
}
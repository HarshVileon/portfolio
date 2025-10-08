import { motion, useScroll, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface SmoothScrollContainerProps {
  children: ReactNode;
}

export default function SmoothScrollContainer({ children }: SmoothScrollContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}
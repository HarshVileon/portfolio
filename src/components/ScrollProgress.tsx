import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 origin-left z-50 shadow-lg shadow-violet-500/50"
        style={{ scaleX }}
      />
      
      {/* Animated glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 origin-left z-49 blur-sm"
        style={{ 
          scaleX,
          opacity: 0.6
        }}
      />
      
      {/* Progress percentage indicator */}
      <motion.div
        className="fixed top-4 right-6 z-50 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-500/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span 
          className="text-violet-300 text-sm font-medium"
          style={{
            color: useSpring(scrollYProgress.get() > 0.5 ? "#A855F7" : "#8B5CF6")
          }}
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.span>
      </motion.div>
    </>
  );
}
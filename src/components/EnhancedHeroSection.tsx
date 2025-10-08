import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer, buttonHover, easings } from '@/lib/animations';
import ScrollFloatingText from './ScrollFloatingText';

const heroFloatingTexts = [
  'Innovation', 'Excellence', 'Creativity', 'Performance', 'Modern', 'Scalable'
];

export default function EnhancedHeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Smooth parallax transforms
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.8, 0]), {
    stiffness: 100,
    damping: 30
  });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-purple-900/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(0, 0, 0, 1), rgba(147, 51, 234, 0.2))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(0, 0, 0, 1), rgba(139, 92, 246, 0.2))",
              "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(0, 0, 0, 1), rgba(147, 51, 234, 0.2))"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating text with smooth animations */}
      <ScrollFloatingText texts={heroFloatingTexts} section="hero" />

      {/* Enhanced floating elements with smooth parallax */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-violet-400/40 rounded-full backdrop-blur-sm"
        style={{ 
          y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 }),
          rotate: useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), { stiffness: 100, damping: 30 }),
          opacity: useSpring(useTransform(scrollYProgress, [0, 0.8], [0.7, 0]), { stiffness: 100, damping: 30 })
        }}
        animate={{
          scale: [1, 1.1, 1],
          borderColor: ["rgba(139, 92, 246, 0.4)", "rgba(147, 51, 234, 0.6)", "rgba(139, 92, 246, 0.4)"]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-lg"
        style={{ 
          y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 100, damping: 30 }),
          rotate: useSpring(useTransform(scrollYProgress, [0, 1], [0, -270]), { stiffness: 100, damping: 30 }),
          opacity: useSpring(useTransform(scrollYProgress, [0, 0.8], [0.8, 0]), { stiffness: 100, damping: 30 })
        }}
        animate={{
          rotateY: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content with enhanced animations */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ 
          y: textY, 
          opacity,
          willChange: 'transform'
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Enhanced animated title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl md:text-9xl font-black tracking-tight leading-none"
          >
            <motion.span 
              className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ 
                backgroundSize: "300% 300%",
                filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))"
              }}
            >
              Meet Team
            </motion.span>
            <motion.span 
              className="block text-white mt-4"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: easings.elegant }}
              style={{ filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))" }}
            >
              Harnish
            </motion.span>
          </motion.h1>

          {/* Enhanced typewriter effect */}
          <motion.div
            variants={fadeInUp}
            className="text-2xl md:text-4xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 3, delay: 1.2, ease: easings.professional }}
              className="inline-block overflow-hidden whitespace-nowrap"
              style={{
                borderRight: "3px solid #8B5CF6",
                animation: "blink 1s infinite"
              }}
            >
              Full-stack software developers from India
            </motion.span>
          </motion.div>

          {/* Enhanced description */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1.2, ease: easings.elegant }}
          >
            Crafting exceptional digital experiences with cutting-edge technology. 
            We transform ideas into powerful, scalable solutions that drive success.
          </motion.p>

          {/* Enhanced CTA buttons with professional hover effects */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1.2, ease: easings.elegant }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4, ease: easings.smooth }}
              />
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: easings.smooth }}
              />
            </motion.button>
            
            <motion.button
              className="group px-10 py-5 border-2 border-violet-400 text-violet-300 rounded-full font-semibold text-lg hover:bg-violet-500/20 transition-all duration-500 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#A855F7",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 1.2, ease: easings.elegant }}
        style={{ opacity: useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0]), { stiffness: 100, damping: 30 }) }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-violet-400 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm"
          animate={{ 
            y: [0, 15, 0],
            borderColor: ["#8B5CF6", "#A855F7", "#8B5CF6"]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-4 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full mt-2"
            animate={{ 
              scaleY: [1, 0.3, 1],
              y: [0, 8, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p 
          className="text-violet-300 text-sm mt-3 font-medium tracking-wide"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* CSS for blinking cursor */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { border-color: #8B5CF6; }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
}
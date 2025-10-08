import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { fadeInUp, staggerContainer, cardHover, easings, scrollReveal } from '@/lib/animations';
import ScrollFloatingText from './ScrollFloatingText';

const services = [
  {
    title: "WordPress Development",
    description: "Custom themes & plugins",
    details: "From custom WordPress themes to powerful plugins, we leverage cutting-edge technologies to deliver pixel-perfect, performance-optimized solutions that exceed expectations.",
    icon: "🎨",
    floatingTexts: ["Custom", "Themes", "Plugins", "CMS", "Dynamic"],
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Laravel Applications",
    description: "Powerful backend solutions",
    details: "Building robust, scalable backend architectures with Laravel framework, ensuring optimal performance, security, and maintainability for enterprise-grade applications.",
    icon: "⚡",
    floatingTexts: ["Backend", "API", "Database", "Secure", "Scalable"],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development",
    details: "Complete development lifecycle from concept to deployment, seamlessly integrating frontend elegance with backend power to create extraordinary digital experiences.",
    icon: "🚀",
    floatingTexts: ["Frontend", "Backend", "Deploy", "Integration", "Complete"],
    gradient: "from-blue-500/20 to-violet-500/20"
  }
];

const sectionFloatingTexts = [
  'WordPress', 'Laravel', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'PHP', 'MySQL'
];

export default function InteractiveServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]), {
    stiffness: 100,
    damping: 30
  });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <section ref={ref} id="services" className="py-32 relative overflow-hidden">
      {/* Floating text for services section */}
      <ScrollFloatingText texts={sectionFloatingTexts} section="services" />

      {/* Enhanced background elements with professional parallax */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-32 h-32 border border-violet-500/20 rounded-full backdrop-blur-sm"
          style={{ 
            y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 80, damping: 25 }),
            filter: "blur(0.5px)"
          }}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-24 h-24 border border-purple-500/20 rounded-lg backdrop-blur-sm"
          style={{ 
            y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 80, damping: 25 }),
            filter: "blur(0.5px)"
          }}
        />
        
        {/* Professional animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15), transparent 60%)",
              "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15), transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 60%)",
              "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15), transparent 60%)",
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15), transparent 60%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional depth layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-900/5 via-transparent to-purple-900/5"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={scrollReveal}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-tight"
            style={{ 
              filter: "drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))",
              textShadow: "0 0 80px rgba(139, 92, 246, 0.2)"
            }}
          >
            Our Craft
          </motion.h2>
          <motion.p 
            variants={scrollReveal}
            className="text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            Let's work together to turn your <span className="text-violet-400 font-medium bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">boldest ideas</span> into reality.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={scrollReveal}
              className="group relative"
              initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: index * 0.2, 
                duration: 1, 
                ease: easings.smooth 
              }}
              viewport={{ once: true }}
            >
              {/* Service-specific floating text with enhanced animations */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {service.floatingTexts.map((text, textIndex) => (
                  <motion.div
                    key={`${service.title}-${text}-${textIndex}`}
                    className="absolute text-xs font-light tracking-wide select-none opacity-0 group-hover:opacity-30"
                    style={{
                      left: `${15 + textIndex * 18}%`,
                      top: `${8 + textIndex * 22}%`,
                      background: `linear-gradient(${45 + textIndex * 30}deg, rgba(139, 92, 246, 0.8), rgba(147, 51, 234, 0.8))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: "blur(0.3px)"
                    }}
                    animate={{
                      y: [0, -15, 8, -8, 0],
                      x: [0, 8, -5, 3, 0],
                      opacity: [0, 0.3, 0.4, 0.3, 0],
                      scale: [0.8, 1.1, 0.9, 1.05, 0.8]
                    }}
                    transition={{
                      duration: 6 + textIndex * 0.5,
                      repeat: Infinity,
                      delay: textIndex * 0.8,
                      ease: easings.smooth
                    }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              <Card className={`
                relative bg-black/80 backdrop-blur-xl 
                border-2 border-gray-700/50 hover:border-violet-500/70
                transition-all duration-500 h-full overflow-hidden
                shadow-2xl hover:shadow-violet-500/30
                transform hover:scale-[1.02]
              `}>
                <motion.div 
                  className="relative z-10 h-full"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.4, ease: easings.smooth }
                  }}
                >
                  {/* Enhanced background overlay with gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  
                  {/* Professional glass effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  
                  <CardHeader className="relative text-center pb-6 pt-10 z-20">
                    <motion.div 
                      className="text-7xl mb-8"
                      whileHover={{ 
                        scale: 1.4, 
                        rotate: [0, -20, 20, 0],
                        filter: "brightness(1.3) drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))",
                        transition: { duration: 0.8, ease: easings.bounce }
                      }}
                      animate={{
                        y: [0, -8, 0],
                        filter: [
                          "brightness(1) drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
                          "brightness(1.1) drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))",
                          "brightness(1) drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <CardTitle className="text-3xl text-white mb-4 font-bold tracking-tight drop-shadow-lg">
                      <motion.span
                        className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                        whileHover={{
                          backgroundImage: "linear-gradient(45deg, #8B5CF6, #A855F7, #3B82F6)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.title}
                      </motion.span>
                    </CardTitle>
                    
                    <CardDescription className="text-violet-300 text-xl font-semibold tracking-wide drop-shadow-md">
                      <motion.span
                        whileHover={{
                          color: "#A855F7",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.description}
                      </motion.span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative px-8 pb-10 z-20">
                    <motion.div 
                      className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-violet-500/40 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)",
                        transition: { duration: 0.3, ease: easings.smooth }
                      }}
                    >
                      {/* Subtle inner glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                      />
                      
                      <p className="text-gray-100 leading-relaxed text-lg font-normal relative z-10">
                        {service.details}
                      </p>
                    </motion.div>
                    
                    {/* Enhanced interactive hover element */}
                    <motion.div
                      className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        boxShadow: [
                          "0 4px 15px rgba(139, 92, 246, 0.3)",
                          "0 8px 25px rgba(139, 92, 246, 0.5)",
                          "0 4px 15px rgba(139, 92, 246, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      whileHover={{ 
                        scale: 1.4,
                        rotate: 45,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.span 
                        className="text-white text-xl font-bold"
                        animate={{ rotate: [0, -180, -360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </CardContent>
                </motion.div>
                
                {/* Enhanced professional border effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #8B5CF6, #A855F7, #3B82F6)",
                    backgroundClip: "padding-box, border-box"
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
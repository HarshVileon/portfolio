import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, magneticHover } from '@/lib/animations';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function EnhancedContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 69, 219, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 219, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Ready to create something <span className="text-violet-400 font-medium">extraordinary</span>? 
            <br />Let's build the future of web experiences together.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div 
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <motion.div 
              variants={magneticHover}
              className="relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(139, 69, 219, 0.2), rgba(147, 51, 234, 0.2))",
                    "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(139, 69, 219, 0.2))",
                    "linear-gradient(45deg, rgba(139, 69, 219, 0.2), rgba(147, 51, 234, 0.2))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10 flex items-center space-x-6">
                <motion.div 
                  className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:iamharshsingh567@gmail.com" 
                    className="text-violet-300 hover:text-violet-200 transition-colors duration-300 text-xl font-medium group-hover:underline"
                    data-cursor-hover
                  >
                    iamharshsingh567@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInRight}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <motion.div 
              variants={magneticHover}
              className="relative bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 69, 219, 0.2))",
                    "linear-gradient(225deg, rgba(139, 69, 219, 0.2), rgba(59, 130, 246, 0.2))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 69, 219, 0.2))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10 flex items-center space-x-6">
                <motion.div 
                  className="p-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:+917352122592" 
                    className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-xl font-medium group-hover:underline"
                    data-cursor-hover
                  >
                    +91 73521 22592
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.a 
            href="mailto:iamharshsingh567@gmail.com"
            className="group inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-bold text-xl rounded-full relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-blue-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
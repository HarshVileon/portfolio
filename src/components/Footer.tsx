import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-violet-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-500/10 to-violet-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Team Harnish
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Crafting extraordinary digital experiences with passion and precision.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
          />
          
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light"
          >
            © 2025 Team Harnish. Crafted with passion and precision.
          </motion.p>
          
          {/* Floating elements */}
          <div className="absolute top-8 left-8">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 bg-violet-500/50 rounded-full"
            />
          </div>
          
          <div className="absolute top-12 right-12">
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-2 h-2 bg-purple-500/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
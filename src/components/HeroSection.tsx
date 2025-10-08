import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.h1 
            {...fadeInUp}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
          >
            Meet Team Harnish
          </motion.h1>
          
          <motion.h2 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl text-purple-300 font-light"
          >
            Full-Stack Software Developers
          </motion.h2>
          
          <motion.div 
            {...fadeInLeft}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-xl text-blue-300"
          >
            <span>Based in Ranchi, India</span>
            <span className="text-2xl">🇮🇳</span>
          </motion.div>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            With a passion for crafting dynamic, responsive websites and applications using WordPress and Laravel. 
            We have a strong background in both front-end and back-end development, dedicated to creating robust, 
            user-friendly solutions that meet your unique needs.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-8"
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
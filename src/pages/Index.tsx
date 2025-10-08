import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import InteractiveServicesSection from '@/components/InteractiveServicesSection';
import EnhancedContactSection from '@/components/EnhancedContactSection';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import FloatingWords from '@/components/FloatingWords';
import MouseFollowText from '@/components/MouseFollowText';
import SimpleLoadingScreen from '@/components/SimpleLoadingScreen';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    console.log('🎯 Loading complete - showing main content');
    setIsLoading(false);
  };

  useEffect(() => {
    console.log('📱 Index mounted - isLoading:', isLoading);
  }, []);

  useEffect(() => {
    console.log('🔄 Loading state changed to:', isLoading ? 'LOADING' : 'MAIN CONTENT');
    
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  if (isLoading) {
    console.log('🔄 Rendering loading screen');
    return <SimpleLoadingScreen onComplete={handleLoadingComplete} />;
  }

  console.log('🏠 Rendering main content');
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <FloatingWords />
      <MouseFollowText />
      <NavigationBar />
      
      <main>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <EnhancedHeroSection />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveServicesSection />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <EnhancedContactSection />
        </motion.div>
      </main>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SimpleLoadingScreenProps {
  onComplete: () => void;
}

export default function SimpleLoadingScreen({ onComplete }: SimpleLoadingScreenProps) {
  useEffect(() => {
    console.log('🚀 SimpleLoadingScreen mounted - starting 3 second timer');
    
    // Simple 3-second timer - no complex animations or state
    const timer = setTimeout(() => {
      console.log('⏰ 3 seconds elapsed - calling onComplete');
      onComplete();
    }, 3000);

    return () => {
      console.log('🧹 Cleaning up timer');
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          className="text-6xl font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Harnish
        </motion.h1>
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  );
}
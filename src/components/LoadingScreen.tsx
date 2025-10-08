import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    console.log('🚀 LoadingScreen mounted');
    
    // Step 1: Start immediately
    console.log('📝 Step 1: Starting animation');
    setCurrentStep(1);
    
    // Step 2: Show subtitle after 1 second
    const step2Timer = setTimeout(() => {
      console.log('📝 Step 2: Showing subtitle');
      setCurrentStep(2);
    }, 1000);

    // Step 3: Start progress after 1.5 seconds
    const step3Timer = setTimeout(() => {
      console.log('📝 Step 3: Starting progress');
      setCurrentStep(3);
      
      // Progress animation - much faster
      let currentProgress = 0;
      const progressInterval = setInterval(() => {
        currentProgress += 4; // Increase by 4% each time
        console.log(`📊 Progress: ${currentProgress}%`);
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          console.log('✅ Progress complete - calling onComplete');
          // Call onComplete immediately when progress reaches 100%
          setTimeout(() => {
            console.log('🎯 Executing onComplete callback');
            onComplete();
          }, 200);
        }
      }, 50); // Update every 50ms for smooth animation
      
    }, 1500);

    return () => {
      console.log('🧹 LoadingScreen cleanup');
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.02
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-purple-900/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(0, 0, 0, 1), rgba(147, 51, 234, 0.2))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(0, 0, 0, 1), rgba(139, 92, 246, 0.2))",
              "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(0, 0, 0, 1), rgba(147, 51, 234, 0.2))"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Company name */}
          <motion.div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-7xl font-black tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: currentStep >= 1 ? 1 : 0, y: currentStep >= 1 ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {['H', 'a', 'r', 'n', 'i', 's', 'h'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ 
                    opacity: currentStep >= 1 ? 1 : 0, 
                    y: currentStep >= 1 ? 0 : 50,
                    scale: currentStep >= 1 ? 1 : 0.8
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut"
                  }}
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))",
                    backgroundSize: "200% 200%"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="text-lg md:text-xl text-gray-300 font-light mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStep >= 2 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                initial={{ width: 0 }}
                animate={{ width: currentStep >= 2 ? "auto" : 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  borderRight: currentStep >= 2 ? "2px solid #8B5CF6" : "none",
                  animation: currentStep >= 2 ? "blink 1s infinite" : "none"
                }}
              >
                Crafting your digital experience
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Progress section */}
          <motion.div
            className="w-64 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentStep >= 3 ? 1 : 0, y: currentStep >= 3 ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Progress bar */}
            <div className="relative mb-4">
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  style={{
                    boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)"
                  }}
                />
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="absolute -top-6 right-0 text-violet-400 text-xs font-medium"
                animate={{ 
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.p
              className="text-gray-500 text-xs tracking-wide font-light"
              animate={{ 
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </div>

        {/* CSS for blinking cursor */}
        <style jsx>{`
          @keyframes blink {
            0%, 50% { border-color: #8B5CF6; opacity: 1; }
            51%, 100% { border-color: transparent; opacity: 0.5; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
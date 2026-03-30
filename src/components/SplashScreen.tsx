import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-8xl font-bold tracking-tighter text-white font-display">
            SP<span className="text-blue-500">.</span>
          </div>
        </motion.div>

        {/* Animated Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ 
              width: [0, 300 * i], 
              height: [0, 300 * i], 
              opacity: [0, 0.2, 0],
              rotate: [0, 180 * i]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="mt-24 w-64 h-1 bg-slate-900 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-[length:200%_auto]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <motion.p
          className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          System Initializing
        </motion.p>
        <div className="text-xs font-mono text-slate-500">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

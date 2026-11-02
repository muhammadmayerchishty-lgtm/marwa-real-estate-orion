import { motion } from 'motion/react';

export function AmbientHeroLight() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Primary Radial Glow Behind Headline */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(227, 194, 122, 0.22) 0%, rgba(168, 123, 52, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Secondary Soft Ambient Drift */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.12, 0.22, 0.12],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 123, 52, 0.18) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle Golden Architecture Horizon Ray */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 opacity-30"
        style={{
          background: 'linear-gradient(to top, rgba(168, 123, 52, 0.12) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

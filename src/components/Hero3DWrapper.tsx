import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SkylineSvgFallback } from './SkylineSvgFallback';

const LazyHero3DScene = React.lazy(() => import('./Hero3DScene'));

export function Hero3DWrapper() {
  const [shouldRender3D, setShouldRender3D] = useState<boolean | null>(null);

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setShouldRender3D(false);
      return;
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setShouldRender3D(false);
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // 2. Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setShouldRender3D(!!gl);
    } catch {
      setShouldRender3D(false);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (shouldRender3D === false) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        <SkylineSvgFallback />
      </motion.div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center opacity-70">
          <SkylineSvgFallback />
        </div>
      }
    >
      {shouldRender3D && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <LazyHero3DScene />
        </motion.div>
      )}
    </Suspense>
  );
}

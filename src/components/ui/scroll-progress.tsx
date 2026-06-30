"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for smooth scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
      {/* Faint background track */}
      <div className="absolute inset-0 bg-primary/10" />
      
      {/* Glowing neon progress line */}
      <motion.div
        className="absolute inset-0 origin-left bg-primary shadow-[0_0_15px_rgba(0,255,178,0.9),_0_0_5px_rgba(0,255,178,1)]"
        style={{ scaleX }}
      >
        {/* White hot tip at the end of the stream */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[1px] opacity-80" />
      </motion.div>
    </div>
  );
}

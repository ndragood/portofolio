"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export function CursorSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Always call hooks at the top level
  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 60%)`;
  const glowImage = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,255,178,0.035), transparent 40%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity: mounted ? 1 : 0, // Prevent hydration mismatch visually instead of unmounting
        // A faint, tech-style grid pattern
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V.5H40' fill='none' stroke='rgba(0, 255, 178, 0.05)' stroke-width='1'/%3E%3C/svg%3E")`,
        // The mask reveals the grid ONLY around the mouse cursor
        WebkitMaskImage: maskImage,
        maskImage: maskImage,
      }}
    >
      {/* A soft radial neon glow that follows the cursor */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: glowImage,
        }}
      />
    </motion.div>
  );
}

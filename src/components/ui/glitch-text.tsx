"use client";

import { useState, useEffect, useRef } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function GlitchText({ text, className = "", as: Component = "span" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]; // Correct character
            }
            if (text[index] === " ") return " "; // Preserve spaces
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
        setIsGlitching(false);
        setDisplayText(text); // Ensure it ends perfectly
      }

      iteration += 1 / 2; // Controls decoding speed
    }, 30);
  };

  useEffect(() => {
    // Initial glitch effect on mount
    setTimeout(startGlitch, 500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Component
      onMouseEnter={startGlitch}
      className={`cursor-crosshair transition-colors duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,178,0.5)] ${className}`}
    >
      {displayText}
    </Component>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const MARQUEE_TEXT = "AYUSH KUMAR — CREATIVE ENGINEER — AYUSH KUMAR — CREATIVE ENGINEER — ";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFinal, setShowFinal] = useState(true);
  
  const scrollValue = useMotionValue(0);
  const speedRef = useRef(1);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * 100));
      
      // Speed increases exponentially as progress increases
      speedRef.current = 1 + Math.pow(progress, 4) * 40;

      if (progress === 1) {
        clearInterval(timer);
        setIsFinished(true);
        
        // Wait 200ms before "violently" scaling out
        setTimeout(() => {
          setShowFinal(false);
        }, 300);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  useAnimationFrame((time, delta) => {
    if (isFinished) return;
    scrollValue.set(scrollValue.get() + delta * 0.1 * speedRef.current);
  });

  const Row = ({ direction = 1 }: { direction?: 1 | -1 }) => {
    const x = useTransform(scrollValue, (v) => `${(v * direction) % 50}%`);
    
    return (
      <motion.div 
        style={{ 
          x, 
          WebkitTextStroke: isFinished ? "none" : "1px rgba(255,255,255,0.1)",
          color: isFinished ? "#DFFF00" : "transparent"
        }}
        className="whitespace-nowrap transition-colors duration-200"
      >
        <span className="text-[10rem] md:text-[15rem] font-black uppercase leading-[0.8]">
          {MARQUEE_TEXT.repeat(10)}
        </span>
      </motion.div>
    );
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showFinal && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          exit={{ scale: 8, opacity: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.7, 0, 0.3, 1],
            type: "spring",
            damping: 20,
            stiffness: 100
          }}
          className="fixed inset-0 z-[2000] bg-[#050505] flex flex-col justify-center overflow-hidden select-none pointer-events-none"
        >
          {/* Kinetic Typography Rows */}
          <div className="flex flex-col gap-0 md:-gap-4 opacity-40">
            <Row direction={1} />
            <Row direction={-1} />
            <Row direction={1} />
            <Row direction={-1} />
            <Row direction={1} />
            <Row direction={-1} />
          </div>

          {/* Massive Center Counter */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <h2 className="text-white text-[25vw] md:text-[20rem] font-black leading-none tabular-nums mix-blend-difference drop-shadow-2xl">
              {count.toString().padStart(2, '0')}
            </h2>
          </div>

          {/* Technical Labels */}
          <div className="absolute top-10 left-10 flex flex-col font-mono text-[10px] text-zinc-800 tracking-[0.4em] uppercase">
             <span>Engine_Kinetic_Typo</span>
             <span>Ref_0.1.5_Overdrive</span>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col font-mono text-[10px] text-zinc-800 tracking-[0.4em] uppercase text-right">
             <span>Status: {isFinished ? "READY" : "LOADING..."}</span>
             <span>Load_Factor: {(speedRef.current).toFixed(2)}x</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

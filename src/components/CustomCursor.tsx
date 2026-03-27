"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    // GSAP quickSetters for high performance mapping
    const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySet = gsap.quickSetter(cursorRef.current, "y", "px");

    const handleMouseMove = (e: MouseEvent) => {
      xSet(e.clientX);
      ySet(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], [data-cursor]');
      if (isInteractive) {
        setIsHovering(true);
        const customText = isInteractive.getAttribute('data-cursor');
        if (customText) setHoverText(customText);
        
        gsap.to(cursorRef.current, { 
          scale: 3, 
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(badgeRef.current, { opacity: 0, scale: 0, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], [data-cursor]');
      if (isInteractive) {
        setIsHovering(false);
        setHoverText("");
        
        gsap.to(cursorRef.current, { 
          scale: 1, 
          backgroundColor: "white",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(badgeRef.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none flex flex-col items-center justify-center mix-blend-difference">
      {/* Outer Circle (Pointer) */}
      <div
        ref={cursorRef}
        className="w-2 h-2 rounded-full border border-white/20 bg-white origin-center flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        {/* Hover Text inside expanded cursor */}
        {isHovering && hoverText && (
           <span className="text-white text-[3px] font-black tracking-widest uppercase opacity-80 scale-[0.4]">
             {hoverText}
           </span>
        )}
      </div>

      {/* Pill Badge ("You" badge style) */}
      <div
        ref={badgeRef}
        className="absolute top-8 -translate-x-1/2 bg-[#DFFF00] text-black text-[10px] font-black px-2 py-0.5 rounded-full border border-black uppercase tracking-widest flex items-center gap-1"
      >
        <span className="w-1 h-1 bg-black rounded-full animate-pulse" />
        You
      </div>
    </div>
  );
}

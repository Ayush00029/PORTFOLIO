"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Standard ScrollTrigger registration
    gsap.registerPlugin(ScrollTrigger);
    
    // Sync ScrollTrigger with Lenis
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

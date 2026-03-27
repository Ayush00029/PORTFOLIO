"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [time, setTime] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 3D Perspective Tilt on Scroll
    gsap.to(cardRef.current, {
      rotateX: 50,
      scale: 0.85,
      opacity: 0.2, // This dims the hero as we scroll away
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Staggered Intro Animation
    gsap.from(".hero-reveal", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5
    });

  }, { scope: containerRef });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(new Intl.DateTimeFormat('en-IN', { 
        timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' 
      }).format(date));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[150vh] bg-black z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:2000px] bg-black">
        
        <div
           ref={cardRef}
           style={{ transformStyle: "preserve-3d" }}
           className="w-[96%] h-[92%] bg-[#050505] border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center relative origin-top shadow-2xl overflow-hidden"
        >
          <div className="hero-reveal absolute top-10 left-10 right-10 flex justify-between items-center z-20">
            <span className="text-white font-black tracking-widest text-xs">AYUSH KUMAR</span>
            <span className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase tabular-nums">
              AMRITSAR, IN — {time} IST
            </span>
          </div>

          <div className="relative flex flex-col items-center justify-center select-none">
            <h1 className="hero-reveal text-[18vw] font-black tracking-tighter leading-none text-white text-center">
              AYUSH
            </h1>
            <h1 
              className="hero-reveal text-[18vw] font-black tracking-tighter leading-none text-transparent text-center"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
              KUMAR
            </h1>
          </div>

          <p className="hero-reveal mt-12 text-zinc-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-center max-w-sm">
            Crafting scalable systems & AI experiences
          </p>

          <div className="hero-reveal absolute bottom-10 flex gap-20 text-[8px] font-mono text-white/5 uppercase tracking-[0.5em]">
             <span>Layer: Hero_01</span>
             <span>Ref: GSAP_ScrollTrigger_3D</span>
             <span>Status: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

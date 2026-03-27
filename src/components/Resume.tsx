"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parralax/Reveal for the resume section
    gsap.from(".resume-content", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-black py-40 px-4 md:px-12 flex items-center justify-center overflow-hidden border-t border-white/5"
    >
      <div className="resume-content flex flex-col items-center text-center max-w-4xl">
        <span className="text-[#DFFF00] font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
          Technical Documentation
        </span>
        
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12 leading-none">
          DOWNLOAD <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>MY CURRICULUM</span>
        </h2>

        <p className="text-zinc-500 text-sm md:text-md tracking-widest uppercase mb-16 max-w-lg leading-relaxed">
          Comprehensive archive of technical skills, professional history, and engineering benchmarks.
        </p>

        <a 
          href="/cv.pdf" 
          download="AYUSH_KUMAR_CV.pdf"
          className="group relative px-12 py-6 bg-white text-black font-black tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#DFFF00] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-4">
            Get Archive <span className="text-xl">➔</span>
          </span>
          {/* Scanning line animation */}
          <div className="absolute inset-0 bg-black/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </a>

        {/* Technical Data Overlay */}
        <div className="mt-20 flex gap-12 text-[8px] font-mono text-zinc-900 tracking-[0.4em] uppercase">
          <div className="flex flex-col gap-1 items-start">
             <span>File_Type: PDF</span>
             <span>Ref_ID: ARCH_0x82</span>
          </div>
          <div className="flex flex-col gap-1 items-start">
             <span>Status: Verified</span>
             <span>Last_Updated: March'24</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10" />
    </section>
  );
}

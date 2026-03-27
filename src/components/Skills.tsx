"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skillItems = [
  "C++ / DS & ALGO", 
  "PYTHON / SCRIPTING", 
  "JAVASCRIPT / TYPESCRIPT", 
  "REACT / NEXT.JS", 
  "NODE.JS / BACKEND", 
  "DJANGO / APIS", 
  "GENERATIVE AI / LLMS", 
  "OPENCV / CV", 
  "SQLITE / DATABASES"
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // We use .to() with initial classes for maximum visibility reliability
    gsap.set(".skills-reveal", { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(".skills-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          overwrite: true
        });
      },
      onLeaveBack: () => {
        gsap.to(".skills-reveal", { // Changed tl.from to gsap.to for correct onLeaveBack behavior
          opacity: 0,
          y: 20, // Changed from 30 to 20
          duration: 0.6, // Changed from 0.5 to 0.6
          stagger: 0.03, // Added stagger
          ease: "power2.out", // Changed ease
          overwrite: true // Kept overwrite
        });
      }
    });

    // The instruction provided a tl.from animation outside the onLeaveBack,
    // which is syntactically incorrect as a direct replacement.
    // Assuming the intent was to keep the ScrollTrigger as is,
    // and the tl.from was a separate animation or a misunderstanding.
    // For now, keeping the existing ScrollTrigger logic as per "Keep the robust GSAP trigger."
    // If a new tl.from animation is desired, its placement needs to be clarified.

    ScrollTrigger.refresh(); // Moved inside useGSAP
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 md:px-12 bg-black z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="skills-reveal flex flex-col gap-4">
            <span className="text-[#DFFF00] font-bold tracking-[0.4em] text-xs md:text-sm uppercase">Technical Stack</span>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              Hard <span className="text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>Skills</span>
            </h2>
          </div>
          <p className="skills-reveal text-zinc-500 text-sm md:text-lg font-medium max-w-sm tracking-wide leading-relaxed mb-4">
            Engineering robust systems and intelligent interfaces through a precision-driven technology stack.
          </p>
        </div>

        {/* Rectangular Grid - Previous Style Restored with White Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-zinc-900 overflow-hidden rounded-[2rem]">
          {skillItems.map((skill) => (
            <div 
              key={skill}
              data-cursor="SKILL"
              className="skills-reveal bg-black p-12 flex items-center justify-between group hover:bg-[#DFFF00] transition-colors duration-500 cursor-none border-r border-b border-zinc-900"
            >
              <div className="flex flex-col relative z-10">
                <span className="text-2xl md:text-4xl font-black text-white group-hover:text-black transition-colors tracking-tighter uppercase leading-none">
                  {skill.split(' / ')[0]}
                </span>
                <span className="text-[10px] font-bold text-white/50 group-hover:text-black/50 transition-colors tracking-[0.3em] uppercase mt-2">
                  {skill.split(' / ')[1]}
                </span>
              </div>
              <span className="text-white/10 group-hover:text-black/20 text-5xl font-black transition-colors relative z-10">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

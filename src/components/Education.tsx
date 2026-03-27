"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: "LOVELY PROFESSIONAL UNIVERSITY",
    degree: "B.TECH - COMPUTER SCIENCE AND ENGINEERING",
    duration: "2023 – PRESENT",
    location: "PHAGWARA, PUNJAB"
  },
  {
    institution: "D.A.V PUBLIC SCHOOL",
    degree: "INTERMEDIATE (80.3%)",
    duration: "2022 – 2023",
    location: "DALTONGANJ, JHARKHAND"
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".edu-reveal", { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(".edu-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          overwrite: true
        });
      }
    });

    gsap.from(".edu-line", {
      scaleY: 0,
      duration: 1.5,
      ease: "power4.inOut",
      transformOrigin: "top center",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 md:px-12 bg-black z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="edu-reveal mb-32">
          <span className="text-zinc-600 font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-4 block">Academic Background</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Educational <br/> <span className="text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>History</span>
          </h2>
        </div>

        <div className="edu-list relative flex flex-col gap-12">
          <div className="edu-line absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5" />

          {educationData.map((edu, index) => (
            <div 
              key={index}
              data-cursor="EDU"
              className={`edu-reveal flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-[-4px] md:left-1/2 md:-ml-1 top-10 w-2 h-2 bg-[#DFFF00] rounded-full z-10 hidden md:block" />

              <div className={`w-full md:w-[45%] bg-[#0a0a0a] border border-white/5 p-12 md:p-14 rounded-[2.5rem] hover:border-[#DFFF00]/50 transition-colors duration-500 shadow-2xl group`}>
                 <span className="text-[#DFFF00] text-xs font-black tracking-[0.2em] uppercase mb-8 block">
                   {edu.duration}
                 </span>
                 <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-none group-hover:text-[#DFFF00] transition-colors">
                   {edu.institution}
                 </h3>
                 <p className="text-zinc-500 font-black text-lg md:text-xl mb-12 uppercase tracking-tight">
                   {edu.degree}
                 </p>
                 <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                   {edu.location}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

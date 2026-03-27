"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ target }: { target: number }) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 95%",
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(obj.value).toString();
        }
      }
    });
  }, { scope: countRef });

  return <span ref={countRef} className="tabular-nums">0</span>;
};

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".stats-reveal", { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(".stats-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true
        });
      }
    });

    gsap.from(".stats-line", {
      scaleX: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 md:px-12 bg-black z-10 overflow-hidden min-h-[60vh]">
      <div className="stats-line absolute top-0 left-0 w-full h-px bg-white/5 origin-left" />
      <div className="stats-line absolute bottom-0 left-0 w-full h-px bg-white/5 origin-left" />
      
      <div className="max-w-7xl mx-auto py-32 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          <div data-cursor="CODE" className="stats-reveal flex flex-col items-center md:items-start justify-center px-12 group">
            <div className="text-8xl md:text-9xl font-black tracking-tighter mb-4 group-hover:text-[#DFFF00] transition-colors">
               <Counter target={200} />+
            </div>
            <p className="font-black text-xl tracking-widest uppercase">DSA Solutions</p>
            <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.4em]">CodeChef | 3★</p>
          </div>
          <div data-cursor="GENAI" className="stats-reveal flex flex-col items-center md:items-start justify-center md:border-l md:border-white/5 md:pl-16 px-12 group">
            <div className="text-8xl md:text-9xl font-black tracking-tighter mb-4 group-hover:text-[#DFFF00] transition-colors">
              <Counter target={3} />
            </div>
            <p className="font-black text-xl tracking-widest uppercase">Certifications</p>
            <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.4em]">GenAI | Cloud</p>
          </div>
          <div data-cursor="DEV" className="stats-reveal flex flex-col items-center md:items-start justify-center md:border-l md:border-white/5 md:pl-16 px-12 group">
            <div className="text-8xl md:text-9xl font-black tracking-tighter mb-4 group-hover:text-[#DFFF00] transition-colors">
              <Counter target={4} />
            </div>
            <p className="font-black text-xl tracking-widest uppercase">Languages</p>
            <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.4em]">Python | C++ | Java</p>
          </div>
        </div>
      </div>
    </section>
  );
}

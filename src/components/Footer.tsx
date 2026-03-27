"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".footer-reveal", { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 95%",
      onEnter: () => {
        gsap.to(".footer-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true
        });
      }
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative w-full bg-black py-40 px-6 md:px-12 border-t border-zinc-900 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          
          <div className="footer-reveal">
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
              Let's <br/> <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>Connect</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl max-w-sm font-medium leading-relaxed">
              Available for ambitious projects and innovative engineering collaborations worldwide.
            </p>
          </div>

          <div className="footer-reveal flex flex-col justify-end">
             <div className="flex flex-col gap-6">
                <a 
                  href="mailto:ayushkr0612@gmail.com" 
                  data-cursor="MAIL"
                  className="group flex items-center justify-between py-8 border-b border-zinc-900 hover:border-[#DFFF00] transition-colors cursor-none"
                >
                  <span className="text-xs font-black tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors uppercase">Email</span>
                  <span className="text-2xl md:text-4xl font-black text-white group-hover:text-[#DFFF00] transition-colors tracking-tighter">ayushkr0612@gmail.com</span>
                </a>
                
                <div className="flex justify-between items-center py-12">
                   <div className="flex gap-12">
                      <a href="#" data-cursor="LINKEDIN" className="text-zinc-600 hover:text-white transition-colors duration-500 cursor-none">
                        <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
                      </a>
                      <a href="#" data-cursor="GITHUB" className="text-zinc-600 hover:text-white transition-colors duration-500 cursor-none">
                        <Github className="w-8 h-8 md:w-10 md:h-10" />
                      </a>
                      <a href="#" data-cursor="SOCIAL" className="text-zinc-600 hover:text-white transition-colors duration-500 cursor-none">
                        <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                      </a>
                   </div>
                   <div className="text-right flex flex-col items-end">
                      <span className="text-[10px] font-black text-zinc-700 tracking-[0.4em] uppercase mb-1">Based in</span>
                      <span className="text-xs font-black text-white tracking-widest uppercase">Amritsar, India</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="footer-reveal border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <span className="text-[10px] font-black text-zinc-700 tracking-[0.6em] uppercase">
             © 2024 AYUSH KUMAR — ALL RIGHTS RESERVED
           </span>
           <div className="flex gap-12 text-[10px] font-black text-zinc-700 tracking-[0.4em] uppercase">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Status: Deployed</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

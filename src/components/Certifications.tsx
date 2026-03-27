"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "ChatGPT-4 Prompt Engineering & LLMs",
    issuer: "INFOSYS",
    date: "AUG 2025",
  },
  {
    title: "Generative AI Apps with No-Code Tools",
    issuer: "INFOSYS",
    date: "AUG 2025",
  },
  {
    title: "Master Generative AI & AI Tools",
    issuer: "INFOSYS",
    date: "JUL 2025",
  },
  {
    title: "Mastering Java I (Grade 'O')",
    issuer: "TRAINING CERTIFICATE",
    date: "JUL 2025",
  },
  {
    title: "Computer Communications",
    issuer: "UNIVERSITY OF COLORADO",
    date: "DEC 2024",
  },
];

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(".certs-reveal", { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(".certs-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          overwrite: true
        });
      },
      onLeaveBack: () => {
        gsap.to(".certs-reveal", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          overwrite: true
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-40 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="certs-reveal text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-32">
          Certs <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>& Lab</span>
        </h2>

        <div className="flex flex-col border-b border-zinc-900">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-cursor="CERT"
              className="certs-reveal group relative flex flex-col md:flex-row justify-between items-start md:items-center py-14 border-t border-zinc-900 transition-all duration-300 px-8 -mx-8 cursor-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#DFFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none z-0" />

              <div className="flex-1 relative z-10">
                <h3 className="text-2xl md:text-5xl font-black text-white group-hover:text-black transition-colors duration-500 tracking-tighter uppercase">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 md:px-12 relative z-10">
                <span className="text-[10px] md:text-xs font-black text-zinc-500 group-hover:text-black/70 transition-colors duration-500 uppercase tracking-[0.4em]">
                  {cert.issuer}
                </span>
              </div>

              <div className="mt-2 md:mt-0 flex items-center gap-10 relative z-10">
                <span className="font-mono text-zinc-500 text-sm md:text-base group-hover:text-black transition-colors duration-500 uppercase tracking-widest">
                  {cert.date}
                </span>
                <div className="hidden md:block">
                  <ArrowUpRight className="w-10 h-10 text-[#DFFF00] group-hover:text-black transition-colors duration-500" />
                </div>
                <ArrowUpRight className="block md:hidden w-6 h-6 text-[#DFFF00]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

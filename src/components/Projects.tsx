"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu, Zap, Shield, Database, Settings, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI-CODE REVIEWER",
    category: "GENERATIVE AI INTEGRATION",
    description: "Built a tool that instantly detects bugs and explains code complexity through a clean, split-screen UI.",
    metrics: ["React", "Node.js", "Express", "Gemini API"],
    image: "/ai_code_reviewer.png",
    specs: [
      { label: "ENGINE", value: "GEMINI 1.5 PRO" },
      { label: "RUNTIME", value: "NODE.JS" },
      { label: "ANALYSIS", value: "AI-POWERED" }
    ],
    challenge: "Handling large code files while keeping the feedback fast and accurate."
  },
  {
    title: "EVENT BOOKING",
    category: "FULL-STACK WEB ARCHITECTURE",
    description: "A highly scalable platform with real-time tracking to prevent overbooking and errors.",
    metrics: ["Next.js", "Django", "SQLite", "Tailwind CSS"],
    image: "/event_booking_system.png",
    specs: [
      { label: "AUTH", value: "JWT SECURE" },
      { label: "DATABASE", value: "SQLITE" },
      { label: "UPDATES", value: "REAL-TIME" }
    ],
    challenge: "Making sure thousands of people could book at once without any crashes."
  },
  {
    title: "AIR CANVAS",
    category: "COMPUTER VISION",
    description: "Built a touchless interface that lets you draw mid-air using complex finger gestures.",
    metrics: ["Python", "OpenCV", "MediaPipe"],
    image: "/air_canvas.png",
    specs: [
      { label: "CAMERA", value: "HD-TRACKING" },
      { label: "LATENCY", value: "ULTRA-LOW" },
      { label: "LOGIC", value: "OPENCV" }
    ],
    challenge: "Tracking hands perfectly even in low light or with fast movements."
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered reveal for cards
    gsap.from(".project-card-wrapper", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-list",
        start: "top 80%",
      }
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-black text-white px-4 md:px-12 py-24">
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-[8vw] font-black text-white/5 tracking-tighter uppercase leading-none select-none absolute top-10 left-10 opacity-10">
          FEATURED WORK
        </h2>
        <div className="flex flex-row items-center gap-6 overflow-hidden">
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            Featured
          </h2>
          <h2 
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Work
          </h2>
        </div>
      </div>

      <div className="projects-list flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <div key={i} className="project-card-wrapper w-full flex items-center justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column: Core Info */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] text-[#DFFF00] tracking-[0.4em] uppercase font-bold mb-6 font-mono">
                  {project.category} // ARCHIVE_V{i + 1}
                </span>
                <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85]">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-12 max-w-md font-medium">
                  {project.description}
                </p>

                {/* THE BIG CHALLENGE Section */}
                <div className="bg-zinc-900/40 p-6 border-l-2 border-[#DFFF00] mb-12">
                   <div className="flex items-center gap-2 mb-2">
                     <Zap className="w-3 h-3 text-[#DFFF00]" />
                     <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">The Big Challenge</span>
                   </div>
                   <p className="text-xs text-white/60 font-medium leading-relaxed italic">
                     "{project.challenge}"
                   </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((metric, index) => (
                    <span key={index} className="px-3 py-1 bg-zinc-800 text-[9px] font-bold tracking-widest text-white/40 uppercase rounded border border-white/5">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual & Specs */}
              <div className="flex flex-col justify-center gap-12">
                <div className="relative group">
                  <div className="aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-[#DFFF00]/30 transition-colors">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                         View Project <ArrowRight className="w-3 h-3" />
                       </button>
                    </div>
                  </div>
                </div>

                {/* TECHNICAL SPEC TABLE */}
                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-xl">
                  {project.specs.map((spec, index) => (
                    <div key={index} className="bg-zinc-900/50 p-6 flex flex-col justify-center">
                       <span className="text-[8px] font-mono text-white/20 mb-1 tracking-widest">{spec.label}</span>
                       <span className="text-[10px] font-bold text-white tracking-widest">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

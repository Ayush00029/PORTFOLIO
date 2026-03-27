"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, MapPin, Code, Globe, Zap } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="py-32 px-8 relative bg-black min-h-screen flex items-center overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Big Title & HUD */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-[1px] bg-[#DFFF00]" />
                 <span className="text-[10px] font-mono tracking-[0.4em] text-[#DFFF00] uppercase font-bold">IDENTITY_MODULE_V1</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                ABOUT <span className="text-zinc-800">ME</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 p-px">
               {[
                 { label: "NAME", value: "AYUSH KUMAR", icon: <User className="w-3 h-3" /> },
                 { label: "ORIGIN", value: "PUNJAB, INDIA", icon: <MapPin className="w-3 h-3" /> },
                 { label: "FOCUS", value: "SOFTWARE ENG", icon: <Code className="w-3 h-3" /> },
                 { label: "STATUS", value: "AVAILABLE_FOR_WORK", icon: <Globe className="w-3 h-3" /> }
               ].map((item, idx) => (
                 <div key={idx} className="bg-black p-6 group transition-colors hover:bg-zinc-900">
                    <div className="flex items-center gap-2 mb-2 text-white/20">
                      {item.icon}
                      <span className="text-[9px] font-mono tracking-widest">{item.label}</span>
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-[#DFFF00] transition-colors tracking-tight">
                      {item.value}
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-12 md:pt-0">
            <div className="relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-16 -left-8 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none">
                "
              </div>
              
              <div className="space-y-8 relative z-10">
                <p className="text-2xl md:text-4xl font-medium text-white leading-[1.2] tracking-tight">
                  I'm a developer who loves building things that are <span className="text-[#DFFF00]">fast, clean, and easy to use.</span>
                </p>
                
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Ever since I started coding, I've been fascinated by how we can use technology to 
                  solve problems. I don't just write code; I design experiences that feel right and work perfectly every time.
                </p>

                <div className="flex flex-wrap gap-12 pt-8 border-t border-white/5">
                   <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#DFFF00]">
                        <Zap className="w-4 h-4" />
                        <span className="text-[10px] font-black tracking-widest font-mono">CORE_PHILOSOPHY</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono italic">"COMPLEXITY IS THE ENEMY OF EXECUTION."</p>
                   </div>
                </div>

                <div className="pt-12">
                   <button className="group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden transition-all hover:border-[#DFFF00]">
                      <div className="absolute inset-0 bg-[#DFFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative text-[10px] font-black tracking-[0.3em] uppercase text-white group-hover:text-black">
                        DOWNLOAD DOSSIER —&gt;
                      </span>
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Line */}
        <div className="mt-32 flex items-center gap-8 justify-between border-t border-white/5 pt-8 overflow-hidden">
           <div className="flex gap-4 items-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
              ))}
           </div>
           <div className="text-[9px] font-mono text-white/10 tracking-[0.5em] whitespace-nowrap">
              DATA_STREAM_BYPASS_INITIATED // SEC_LEVEL_4
           </div>
           <div className="flex-1 h-px bg-white/5" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;

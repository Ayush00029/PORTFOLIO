"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Compass, Zap, Shield, Cpu, Code2 } from "lucide-react";

const roadmapData = [
  {
    year: "NOW",
    title: "STARTING MY JOURNEY",
    description: "Learning the best ways to build websites and apps. Focusing on making things look great and work smoothly.",
    icon: <Code2 className="w-5 h-5 text-[#DFFF00]" />,
    phase: "01"
  },
  {
    year: "1-2 YEARS",
    title: "GROWING AS A DEV",
    description: "Learning how to build bigger and faster systems. Understanding more about how data and servers work together.",
    icon: <Cpu className="w-5 h-5 text-white/60" />,
    phase: "02"
  },
  {
    year: "3-4 YEARS",
    title: "BECOMING AN EXPERT",
    description: "Starting to lead projects and helping other developers. Creating my own tools to solve common problems.",
    icon: <Zap className="w-5 h-5 text-white/60" />,
    phase: "03"
  },
  {
    year: "5+ YEARS",
    title: "BIG PICTURE GOALS",
    description: "Leading large teams and making a real impact with technology. Thinking of new ways to help people use computers.",
    icon: <Shield className="w-5 h-5 text-white/60" />,
    phase: "04"
  }
];

const MissionRoadmap = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-32 px-8 relative bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background Decorative HUD */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white" />
      </div>

      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Target className="w-4 h-4 text-[#DFFF00]" />
               <span className="text-[10px] font-mono tracking-[0.4em] text-[#DFFF00] uppercase">Strategic_Roadmap</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              MISSION <br />
              <span className="text-zinc-800">ROADMAP</span>
            </h2>
          </div>
          
          <div className="max-w-md text-right hidden md:block">
            <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-widest">
              My plan for the next five years. Moving from learning the basics to 
              becoming a skilled engineer who builds great things.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "circOut" }}
              viewport={{ once: true }}
              className="bg-black p-10 relative group hover:bg-zinc-900/40 transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-[10px] font-mono text-[#DFFF00] border-b border-[#DFFF00]/30 pb-1">
                  PHASE_{item.phase}
                </span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  {item.year}
                </span>
              </div>

              <div className="mb-8 p-4 w-fit bg-zinc-900 rounded-2xl group-hover:scale-110 group-hover:bg-[#DFFF00]/10 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-[#DFFF00] transition-colors">
                {item.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed font-medium mb-12">
                {item.description}
              </p>

              <div className="text-[10px] font-mono text-white/20 flex items-center justify-between mt-auto">
                <span>COORD: X-{index * 12} Y-046</span>
                <div className="w-2 h-2 rounded-full bg-[#DFFF00]/40 animate-pulse" />
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DFFF00] group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

        {/* Console Readout */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-8">
           <div className="flex gap-12 font-mono uppercase">
             <div>
                <span className="block text-[9px] text-white/30 mb-1">Status</span>
                <span className="text-[11px] text-[#DFFF00]">ACTIVE_ASCENSION</span>
             </div>
             <div>
                <span className="block text-[9px] text-white/30 mb-1">Velocity</span>
                <span className="text-[11px] text-white/60">STEADY_CLIMB</span>
             </div>
             <div>
                <span className="block text-[9px] text-white/30 mb-1">Vector</span>
                <span className="text-[11px] text-white/60">NORTH_STAR</span>
             </div>
           </div>

           <div className="flex items-center gap-6">
              <Compass className="w-6 h-6 text-white/20 animate-spin-slow" />
              <div className="bg-zinc-900/50 px-6 py-3 rounded-full border border-white/5">
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">
                  CALIBRATING FUTURE_STATE
                </span>
              </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionRoadmap;

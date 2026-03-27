"use client";

import { motion } from "framer-motion";
import { Activity, Code, Layers, Layout, Radio } from "lucide-react";

const workingProjects = [
  {
    title: "JOB_PORTAL_V2",
    phase: "Beta",
    description: "A comprehensive career platform with real-time job matching and secure application tracking.",
    progress: { architecture: 90, frontend: 85, backend: 70 },
    tags: ["NEXT.JS", "DJANGO", "POSTGRESQL"]
  }
];

export default function WorkingProjects() {
  return (
    <section className="relative w-full bg-black text-white px-4 md:px-12 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
             <div className="relative">
                <div className="w-2 h-2 bg-[#DFFF00] rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-[#DFFF00] rounded-full animate-ping" />
             </div>
             <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#DFFF00] uppercase">
                ACTIVE_RECON // WORK_IN_PROGRESS
             </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            THE <span className="text-zinc-800">LAB</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workingProjects.map((project, i) => (
            <div key={i} className="group relative bg-zinc-900/20 border border-white/5 p-8 md:p-12 hover:border-[#DFFF00]/30 transition-all duration-500 rounded-3xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-[#DFFF00] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-[#DFFF00]/10 text-[#DFFF00] text-[8px] font-mono font-bold uppercase rounded">
                    PHASE: {project.phase}
                  </span>
                </div>
                <Radio className="w-5 h-5 text-zinc-700 group-hover:text-[#DFFF00] transition-colors" />
              </div>

              <p className="text-zinc-500 text-sm md:text-md mb-12 font-medium leading-relaxed max-w-sm">
                {project.description}
              </p>

              {/* Progress Bars */}
              <div className="space-y-6 mb-12">
                <ProgressItem label="Architecture" value={project.progress.architecture} icon={<Layers className="w-3 h-3" />} />
                <ProgressItem label="Frontend" value={project.progress.frontend} icon={<Layout className="w-3 h-3" />} />
                <ProgressItem label="Backend" value={project.progress.backend} icon={<Code className="w-3 h-3" />} />
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressItem({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
        <div className="flex items-center gap-2">
           {icon}
           <span>{label}</span>
        </div>
        <span>{value}%</span>
      </div>
      <div className="h-[2px] w-full bg-zinc-800 relative overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute h-full bg-[#DFFF00] opacity-50" 
        />
      </div>
    </div>
  );
}

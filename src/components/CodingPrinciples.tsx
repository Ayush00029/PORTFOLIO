"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, UserCheck } from "lucide-react";

const principles = [
  {
    index: "01",
    label: "FAST_LOADS",
    title: "Fast and Smooth",
    description: "I make sure everything loads quickly. Nobody likes waiting for a slow website.",
    icon: <Zap className="w-5 h-5 text-[#DFFF00]" />
  },
  {
    index: "02",
    label: "CLEAN_CODE",
    title: "Clean and Simple",
    description: "I write code that is easy for anyone to read and understand. It stays organized.",
    icon: <Shield className="w-5 h-5 text-[#DFFF00]" />
  },
  {
    index: "03",
    label: "SMART_AI",
    title: "Smart with AI",
    description: "I use modern AI tools to help me build better projects much faster.",
    icon: <Sparkles className="w-5 h-5 text-[#DFFF00]" />
  },
  {
    index: "04",
    label: "EASY_TO_USE",
    title: "Easy for Everyone",
    description: "I focus on making things simple. Using technology should be easy for everyone.",
    icon: <UserCheck className="w-5 h-5 text-[#DFFF00]" />
  }
];

export default function CodingPrinciples() {
  return (
    <section className="relative w-full bg-black text-white px-4 md:px-12 py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
           <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-600 uppercase mb-4 block">
                SYSTEM_LOGIC // GOVERNING_PRINCIPLES
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                MY <span className="text-[#DFFF00]">PRINCIPLES</span>
              </h2>
           </div>
           <p className="max-w-xs text-zinc-500 text-xs font-medium leading-relaxed uppercase tracking-widest">
             A set of rules I follow to ensure every line of code adds maximum value.
           </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {principles.map((p, i) => (
            <motion.div 
               key={i}
               variants={{
                 hidden: { opacity: 0, y: 40 },
                 show: { opacity: 1, y: 0 }
               }}
               transition={{ 
                 type: "spring", 
                 stiffness: 100, 
                 damping: 20,
                 mass: 1
               }}
               whileHover={{ 
                 scale: 1.02,
                 backgroundColor: "rgba(24, 24, 27, 0.8)",
                 transition: { duration: 0.3 }
               }}
               className="bg-black p-12 transition-all duration-500 group flex flex-col h-full cursor-pointer relative"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-black text-zinc-800 group-hover:text-[#DFFF00] transition-colors duration-500 leading-none tracking-tighter">
                  {p.index}
                </span>
                <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-[#DFFF00]/10 transition-colors duration-500">
                  {p.icon}
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="w-8 h-[2px] bg-[#DFFF00]/20 mb-6 group-hover:w-16 transition-all duration-500" />
                <span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-4 block">
                   {p.label}
                </span>
                <h3 className="text-2xl font-black tracking-tighter mb-4 text-white uppercase leading-none group-hover:text-[#DFFF00] transition-colors">
                  {p.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

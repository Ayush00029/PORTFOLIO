"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Clock, Zap, Target } from "lucide-react";

export default function SystemStatusFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1, ease: "circOut" }}
      className="fixed bottom-0 left-0 right-0 z-[1002] bg-black/80 backdrop-blur-xl border-t border-white/5 px-6 py-3"
    >
      <div className="max-w-[2000px] mx-auto flex flex-wrap items-center justify-between gap-6 text-[9px] font-mono tracking-[0.2em] font-bold">
        
        {/* Availability Node */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-1.5 h-1.5 bg-[#DFFF00] rounded-full" />
              <div className="absolute inset-0 w-1.5 h-1.5 bg-[#DFFF00] rounded-full animate-ping" />
            </div>
            <span className="text-white uppercase">AVAILABILITY_NODE // ONLINE</span>
          </div>
          <div className="hidden md:block w-px h-3 bg-white/10" />
          <span className="hidden md:block text-zinc-600 uppercase">LOCATION: AMRITSAR, IN (ASIA/KOLKATA)</span>
        </div>

        {/* Global Stats */}
        <div className="flex items-center gap-8">
           {/* Focus */}
           <div className="hidden lg:flex items-center gap-2">
              <Target className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-500 uppercase">ACTIVE_FOCUS:</span>
              <span className="text-white uppercase transition-colors hover:text-[#DFFF00]">JOB_PORTAL_V2</span>
           </div>

           {/* Live Clock */}
           <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-500 uppercase">LOCAL_SYNC:</span>
              <span className="text-[#DFFF00] tabular-nums">{time}</span>
           </div>

           {/* System Signal */}
           <div className="hidden sm:flex items-center gap-2">
              <Globe className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-500 uppercase">SIGNAL:</span>
              <span className="text-white uppercase">UPLINK_STABLE</span>
           </div>
        </div>

        {/* Action / Branding */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-800 uppercase hidden md:block">PORTFOLIO_OS_V2.4</span>
          <div className="w-px h-3 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-2 text-[#DFFF00]">
             <Zap className="w-3 h-3 fill-[#DFFF00]" />
             <span className="uppercase">READY_TO_DEPLOY</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

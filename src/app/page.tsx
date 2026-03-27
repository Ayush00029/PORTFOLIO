"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import FluidGrid from "@/components/FluidGrid";
import Certifications from "@/components/Certifications";
import MissionRoadmap from "@/components/MissionRoadmap";
import WorkingProjects from "@/components/WorkingProjects";
import CodingPrinciples from "@/components/CodingPrinciples";
import SystemStatusFooter from "@/components/SystemStatusFooter";
import Preloader from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger);

const CornerMarker = ({ position }: { position: string }) => {
  const styles: Record<string, string> = {
    "top-left": "top-8 left-8 border-t border-l",
    "top-right": "top-8 right-8 border-t border-r",
    "bottom-left": "bottom-8 left-8 border-b border-l",
    "bottom-right": "bottom-8 right-8 border-b border-r"
  };
  return (
    <div className={`fixed w-8 h-8 border-white/20 z-[1001] pointer-events-none ${styles[position]}`} />
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isLoaded) return;

    // Scroll progress bar
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });

    // Content entry reveal
    gsap.from(mainContentRef.current, {
       opacity: 0,
       y: 40,
       duration: 1.5,
       ease: "expo.out",
       delay: 0.5
    });

    ScrollTrigger.refresh();
  }, [isLoaded]);

  return (
    <main className="min-h-screen bg-black w-full flex flex-col relative overflow-hidden">
      {/* 1. Initial HUD Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* 2. Main Site Archive - Mounts ONLY after preloader exit is complete */}
      {isLoaded && (
        <>
          <SystemStatusFooter />
          <div ref={mainContentRef} className="w-full relative flex flex-col">
          {/* Draftsman Corner Markers */}
          <CornerMarker position="top-left" />
          <CornerMarker position="top-right" />
          <CornerMarker position="bottom-left" />
          <CornerMarker position="bottom-right" />

          {/* GSAP Scroll Progress Bar */}
          <div
            ref={progressBarRef}
            className="fixed top-0 left-0 right-0 h-[1px] bg-[#DFFF00] origin-left z-[1000] scale-x-0"
          />

          {/* Grainy Noise Overlay */}
          <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.05] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <filter id="noiseFilter">
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="0.65" 
                  numOctaves="3" 
                  stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          <FluidGrid />

          <div className="relative z-10 flex flex-col w-full">
            <Hero />
            <About />
            <CodingPrinciples />
            <Skills />
            <Projects />
            <WorkingProjects />
            <Certifications />
            <Stats />
            <Education />
            <MissionRoadmap />
            <Resume />
            <Footer />
          </div>
        </div>
      </>
    )}
  </main>
);
}

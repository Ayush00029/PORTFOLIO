"use client";

import { useEffect, useRef } from "react";

export default function FluidGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const dots: { x: number; y: number; originX: number; originY: number }[] = [];
    const spacing = 40;

    for (let x = 0; x < width + spacing; x += spacing) {
      for (let y = 0; y < height + spacing; y += spacing) {
        dots.push({ x, y, originX: x, originY: y });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";

      dots.forEach((dot) => {
        const dx = mouse.x - dot.originX;
        const dy = mouse.y - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const offsetX = dx * force * 0.2;
          const offsetY = dy * force * 0.2;
          dot.x = dot.originX - offsetX;
          dot.y = dot.originY - offsetY;
          
          // Size reactive to mouse
          const size = 1 + force * 2;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          dot.x = dot.originX;
          dot.y = dot.originY;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
    />
  );
}

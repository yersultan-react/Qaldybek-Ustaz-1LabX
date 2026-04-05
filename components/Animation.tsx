"use client";

import { useEffect, useRef } from "react";
import { getX } from "@/lib/physics";

export default function Animation({ params }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let startTime = performance.now();

    function render(time: number) {
      const t = (time - startTime) / 1000;

      const omega = (2 * Math.PI) / params.T;
      const x = getX(t, params.A, omega, params.phi);

      // CLEAR
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // CENTER
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // LINE
      ctx.beginPath();
      ctx.moveTo(50, cy);
      ctx.lineTo(canvas.width - 50, cy);
      ctx.strokeStyle = "#555";
      ctx.lineWidth = 2;
      ctx.stroke();

      // BALL
      ctx.beginPath();
      ctx.arc(cx + x * 80, cy, 20, 0, Math.PI * 2);
      ctx.fillStyle = "#60a5fa";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#60a5fa";
      ctx.fill();

      // TEXT (live values)
      ctx.shadowBlur = 0;
      ctx.fillStyle = "white";
      ctx.font = "16px sans-serif";
      ctx.fillText(`t: ${t.toFixed(2)}s`, 20, 30);
      ctx.fillText(`x: ${x.toFixed(2)}m`, 20, 50);

      animationRef.current = requestAnimationFrame(render);
    }

    animationRef.current = requestAnimationFrame(render);

    // CLEANUP (IMPORTANT)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [params]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={220}
      className="glass w-full"
    />
  );
}
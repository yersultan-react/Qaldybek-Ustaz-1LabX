"use client";
import { useEffect, useRef } from "react";
import { getX } from "@/lib/physics";

export default function Graph({ params }: any) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);

    const omega = (2 * Math.PI) / params.T;

    ctx.beginPath();
    for (let i = 0; i < w; i++) {
      const t = i / 60;
      const y =
        h / 2 - getX(t, params.A, omega, params.phi) * 50;

      if (i === 0) ctx.moveTo(i, y);
      else ctx.lineTo(i, y);
    }

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;
    ctx.stroke();
  }, [params]);

  return <canvas ref={ref} width={800} height={300} className="glass" />;
}
'use client';
import React, { useRef, useEffect, useState } from 'react';
import { DataPoint } from '@/lib/types';

// We'll control redraw frequency
function LineChart({ data }: { data: DataPoint[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);

  // Resize handling (to avoid reflow lag)
  useEffect(() => {
    const resize = () => {
      if (canvasRef.current) setWidth(canvasRef.current.clientWidth);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = (canvas.width = canvas.clientWidth);
    const h = (canvas.height = 300);
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();

    // Batch draw, skip points to fit width
    const step = Math.max(1, Math.floor(data.length / w));
    for (let i = 0; i < data.length; i += step) {
      const x = (i / data.length) * w;
      const y = h - (data[i].value / 200) * h;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    ctx.strokeStyle = '#00b0ff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }, [data.length, width]); // 👈 only re-draw when data length or size changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 300,
        border: '1px solid #333',
        borderRadius: 6,
        background: '#000',
      }}
    />
  );
}

export default React.memo(LineChart);
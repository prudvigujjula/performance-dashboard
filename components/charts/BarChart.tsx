'use client';
import React, { useRef, useEffect } from 'react';
import { DataPoint } from '@/lib/types';

export default function BarChart({ data }: { data: DataPoint[] }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    const w = (c.width = c.clientWidth);
    const h = (c.height = 300);
    ctx.clearRect(0, 0, w, h);
    const step = Math.max(1, Math.floor(data.length / 100));
    const barW = w / (data.length / step);
    ctx.fillStyle = '#00b0ff';
    for (let i = 0; i < data.length; i += step) {
      const val = data[i].value / 200;
      ctx.fillRect(i / step * barW, h - val * h, barW * 0.8, val * h);
    }
  }, [data.length]);

  return <canvas ref={ref} style={{ width: '100%', height: 300, background: '#111' }} />;
}
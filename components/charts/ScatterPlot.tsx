'use client';
import React, { useRef, useEffect } from 'react';
import { DataPoint } from '@/lib/types';

export default function ScatterPlot({ data }: { data: DataPoint[] }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    const w = (c.width = c.clientWidth);
    const h = (c.height = 300);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#ff4081';
    const step = Math.max(1, Math.floor(data.length / 1000));
    for (let i = 0; i < data.length; i += step) {
      const x = (i / data.length) * w;
      const y = h - (data[i].value / 200) * h;
      ctx.fillRect(x, y, 2, 2);
    }
  }, [data.length]);
  return <canvas ref={ref} style={{ width: '100%', height: 300, background: '#000' }} />;
}
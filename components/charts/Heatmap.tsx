'use client';
import React, { useRef, useEffect } from 'react';
import { DataPoint } from '@/lib/types';

export default function Heatmap({ data }: { data: DataPoint[] }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    const w = (c.width = c.clientWidth);
    const h = (c.height = 300);
    const img = ctx.createImageData(w, h);
    for (let i = 0; i < data.length; i++) {
      const x = Math.floor((i / data.length) * w);
      const y = Math.floor(h - (data[i].value / 200) * h);
      const idx = (y * w + x) * 4;
      img.data[idx] = 255;
      img.data[idx + 1] = Math.floor(data[i].value);
      img.data[idx + 2] = 100;
      img.data[idx + 3] = 180;
    }
    ctx.putImageData(img, 0, 0);
  }, [data.length]);
  return <canvas ref={ref} style={{ width: '100%', height: 300 }} />;
}
'use client';
import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '@/lib/types';

export function usePerformanceMonitor(): PerformanceMetrics {
  const [fps, setFps] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);

  useEffect(() => {
    let last = performance.now(), frames = 0;
    const loop = () => {
      const now = performance.now();
      frames++;
      if (now - last >= 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    };
    loop();

    const memCheck = setInterval(() => {
      if ((performance as any).memory) {
        setMemoryUsage((performance as any).memory.usedJSHeapSize);
      }
    }, 1000);

    return () => clearInterval(memCheck);
  }, []);

  return { fps, memoryUsage, renderTime: 0 };
}
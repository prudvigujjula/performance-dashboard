'use client';
import React from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

export default function PerformanceMonitor() {
  const { fps, memoryUsage } = usePerformanceMonitor();
  return (
    <div style={{ padding: 10, background: '#111', color: '#0f0', fontFamily: 'monospace' }}>
      FPS: {fps} | Memory: {(memoryUsage / 1024 / 1024).toFixed(2)} MB
    </div>
  );
}
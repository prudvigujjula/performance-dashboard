'use client';
import { useMemo } from 'react';
export function useVirtualization<T>(data: T[], rowHeight = 30, containerHeight = 300) {
  const visibleCount = Math.ceil(containerHeight / rowHeight);
  const totalHeight = data.length * rowHeight;
  const startIndex = 0;
  return useMemo(() => ({
    visibleData: data.slice(startIndex, startIndex + visibleCount),
    totalHeight
  }), [data, visibleCount, totalHeight]);
}
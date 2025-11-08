'use client';
import React from 'react';
import { useVirtualization } from '@/hooks/useVirtualization';
import { DataPoint } from '@/lib/types';

export default function DataTable({ data }: { data: DataPoint[] }) {
  const { visibleData, totalHeight } = useVirtualization(data, 25, 200);
  return (
    <div style={{ height: 200, overflowY: 'auto', border: '1px solid #ccc' }}>
      <div style={{ height: totalHeight }}>
        {visibleData.map((d, i) => (
          <div key={i} style={{ height: 25, display: 'flex', gap: 10 }}>
            <span>{new Date(d.timestamp).toLocaleTimeString()}</span>
            <span>{d.value.toFixed(2)}</span>
            <span>{d.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
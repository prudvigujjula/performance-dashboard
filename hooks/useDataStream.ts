'use client';
import { useEffect, useState } from 'react';
import { DataPoint } from '@/lib/types';

export default function useDataStream(initialData: DataPoint[]) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        [...prev.slice(-9999), {
          timestamp: Date.now(),
          value: Math.random() * 200,
          category: Math.random() > 0.5 ? 'A' : 'B',
        }]
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return data;
}
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DataPoint } from '@/lib/types';

const DataContext = createContext<{ data: DataPoint[] }>({ data: [] });

export const DataProvider = ({ children, initialData }: { children: React.ReactNode; initialData: DataPoint[] }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let frame: number;
    const update = () => {
      setData(prev => [
        ...prev.slice(-9999),
        { timestamp: Date.now(), value: Math.random() * 200, category: Math.random() > 0.5 ? 'A' : 'B' },
      ]);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
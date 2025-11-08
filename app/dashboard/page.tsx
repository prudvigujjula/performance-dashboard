'use client';

import { useEffect, useState } from 'react';
import { generateInitialDataset } from '@/lib/dataGenerator';
import { DataProvider } from '@/components/providers/DataProvider';
import Dashboard from '@/components/ui/Dashboard';

export default function DashboardPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(generateInitialDataset(10000));
  }, []);

  if (!data.length) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <DataProvider initialData={data}>
      <Dashboard />
    </DataProvider>
  );
}
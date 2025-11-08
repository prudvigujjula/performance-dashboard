'use client';
import React, { useState, useMemo } from 'react';
import { useData } from '@/components/providers/DataProvider';
import { DataPoint } from '@/lib/types';

import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import ScatterPlot from '../charts/ScatterPlot';
import Heatmap from '../charts/Heatmap';

import DataTable from './DataTable';
import PerformanceMonitor from './PerformanceMonitor';
import FilterPanel from '../controls/FilterPanel';
import TimeRangeSelector from '../controls/TimeRangeSelector';

export default function Dashboard() {
  const { data } = useData();

  // Filters
  const [category, setCategory] = useState<'All' | 'A' | 'B'>('All');
  const [range, setRange] = useState<number>(60000); // 1 minute default

  // Filter and memoize dataset
  const filtered = useMemo(() => {
    return data.filter(
      (d: DataPoint) =>
        (category === 'All' || d.category === category) &&
        d.timestamp > Date.now() - range
    );
  }, [data, category, range]);

  return (
    <div
      style={{
        padding: 20,
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'monospace',
      }}
    >
      <PerformanceMonitor />

      <h1 style={{ color: '#00b0ff', marginBottom: 10 }}>
         Performance Dashboard
      </h1>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <FilterPanel category={category} setCategory={setCategory} />
        <TimeRangeSelector range={range} setRange={setRange} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          marginTop: 30,
        }}
      >
        <section>
          <h3 style={{ color: '#00b0ff' }}> Line Chart</h3>
          <LineChart data={filtered} />
        </section>

        <section>
          <h3 style={{ color: '#00b0ff' }}> Bar Chart</h3>
          <BarChart data={filtered} />
        </section>

        <section>
          <h3 style={{ color: '#00b0ff' }}> Scatter Plot</h3>
          <ScatterPlot data={filtered} />
        </section>

        <section>
          <h3 style={{ color: '#00b0ff' }}> Heatmap</h3>
          <Heatmap data={filtered} />
        </section>

        <section>
          <h3 style={{ color: '#00b0ff' }}> Data Table</h3>
          <DataTable data={filtered} />
        </section>
      </div>
    </div>
  );
}
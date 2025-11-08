'use client';
import React from 'react';

interface Props {
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeRangeSelector({ range, setRange }: Props) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <label>Time Range:</label>
      <select
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
      >
        <option value={60000}>1 min</option>
        <option value={300000}>5 min</option>
        <option value={3600000}>1 hour</option>
      </select>
    </div>
  );
}
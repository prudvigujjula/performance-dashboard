'use client';
import React from 'react';

type Category = 'All' | 'A' | 'B';

interface Props {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

export default function FilterPanel({ category, setCategory }: Props) {
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
      <label>Category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
    </div>
  );
}
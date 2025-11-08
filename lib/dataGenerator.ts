import { DataPoint } from './types';




export function generateInitialDataset(count = 10000): DataPoint[] {
  const now = Date.now();
  let seed = 42;
  function pseudoRandom() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  }

  return Array.from({ length: count }, (_, i) => ({
    timestamp: now - (count - i) * 100,
    value: Math.sin(i / 100) * 50 + 100 + pseudoRandom() * 10,
    category: i % 2 === 0 ? 'A' : 'B',
  }));
}
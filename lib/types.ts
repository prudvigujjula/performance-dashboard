export interface DataPoint {
  timestamp: number;
  value: number;
  category: string;
}

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'scatter' | 'heatmap';
  color: string;
  visible: boolean;
}
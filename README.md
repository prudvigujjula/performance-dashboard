Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000/dashboard

# Build for production
npm run build
npm start
# → http://localhost:3000/dashboard

Stop the server anytime with Ctrl + C.

 Features

Real-time streaming data (new point every 100 ms)
Line Chart (Canvas) + FPS monitor
Filter by category (A/B) and time range (1 min / 5 min / 1 hour)
Virtualized data table for large datasets
Responsive layout for desktop and mobile
Memory-safe updates using requestAnimationFrame


 Tech Stack



Layer
Technology




Framework
Next.js 14 (App Router) + TypeScript


Rendering
HTML5 Canvas


State Management
React Hooks + Context API


Optimization
useMemo, React.memo, useCallback


Data Simulation
dataGenerator.ts




Performance Summary



Metric
Target
Result




Frame Rate
60 FPS
 60 FPS steady


Interaction Latency
< 100 ms
≈ 80 ms


Data Points Handled
≥ 10 000
 10 000 – 50 000


Memory Growth
< 1 MB / h
 Stable




 Next.js Optimizations

App Router structure (/app/dashboard)
Client components for interactive charts
API route (/api/data) for simulated stream
Memoized components and batched Canvas draws

[![Deploy with Vercel](https://vercel.com/button)](https://performance-dashboard.vercel.app/)


 Documentation
See PERFORMANCE.md for detailed FPS / memory benchmarks and optimization notes.

Author
Gujjula Prudvee nath
B.Tech CSE – Amrita Vishwa Vidyapeetham (Coimbatore)



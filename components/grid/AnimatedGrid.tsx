"use client"
import { useEffect, useRef } from 'react';

function AnimatedGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const lines = grid.querySelectorAll('.grid-line');
    
    lines.forEach((line, index) => {
      const element = line as HTMLElement;
      element.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div ref={gridRef} className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="grid-line absolute h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-grid-pulse"
          style={{ left: `${(i + 1) * 5}%` }}
        />
      ))}
      
      {/* Horizontal lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="grid-line absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-grid-pulse"
          style={{ top: `${(i + 1) * 6.67}%` }}
        />
      ))}
    </div>
  );
}

export default AnimatedGrid;
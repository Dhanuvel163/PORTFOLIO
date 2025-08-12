"use client"
import { useEffect, useRef } from 'react';

function GeometricShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
      const element = shape as HTMLElement;
      const delay = index * 0.5;
      const duration = 8 + Math.random() * 4;
      
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="floating-shape absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rotate-45 animate-float-slow"></div>
      <div className="floating-shape absolute top-40 right-20 w-12 h-12 bg-primary/10 rounded-full animate-float-medium"></div>
      <div className="floating-shape absolute bottom-40 left-20 w-20 h-20 border-2 border-primary/15 animate-float-fast"></div>
      <div className="floating-shape absolute bottom-20 right-40 w-8 h-8 bg-primary/20 rotate-12 animate-float-slow"></div>
      <div className="floating-shape absolute top-60 left-1/3 w-14 h-14 border-2 border-primary/10 rounded-full animate-float-medium"></div>
      <div className="floating-shape absolute bottom-60 right-1/3 w-10 h-10 bg-primary/15 rotate-45 animate-float-fast"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-2xl animate-pulse-slower"></div>
    </div>
  );
}

export default GeometricShapes;
"use client"
import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  baseX: number;
  baseY: number;
}

function ParticleBackground({ 
  particleCount = 50, 
  colors = ['#9004ef', '#ffffff', '#f0f0f0'],
  className = "",
  scrollMultiplier = 0.5
}: {
  particleCount?: number;
  colors?: string[];
  className?: string;
  scrollMultiplier?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const scrollY = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const baseX = Math.random() * canvas.width;
        const baseY = Math.random() * canvas.height;
        particlesRef.current.push({
          x: baseX,
          y: baseY,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseX: baseX,
          baseY: baseY
        });
      }
    };

    const handleScroll = useCallback(() => {
      scrollY.current = window.scrollY;
    }, []);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Apply scroll-based movement
        const scrollOffset = scrollY.current * scrollMultiplier;
        const scrollInfluence = Math.sin(particle.baseX * 0.01) * scrollOffset * 0.1;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add scroll-based drift
        particle.x += scrollInfluence * 0.02;
        particle.y -= scrollOffset * 0.05 * (particle.size / 3);

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Reset particles that drift too far from scroll
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = particle.baseX;
        }
        if (particle.y > canvas.height + 50) {
          particle.y = -50;
          particle.x = particle.baseX;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 120 + Math.sin(scrollY.current * 0.001) * 20;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.3;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, colors, scrollMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}

export default ParticleBackground;
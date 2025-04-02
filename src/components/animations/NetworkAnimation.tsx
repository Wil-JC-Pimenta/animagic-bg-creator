
import React, { useEffect, useRef } from 'react';

interface NetworkAnimationProps {
  particleCount: number;
  colors: string[];
  maxDistance: number;
  particleSpeed: number;
  lineOpacity: number;
}

const NetworkAnimation: React.FC<NetworkAnimationProps> = ({
  particleCount = 100,
  colors = ['#ffffff'],
  maxDistance = 100,
  particleSpeed = 1.5,
  lineOpacity = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pointsRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
  }>>([]);

  // Initialize canvas and points
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 w-full h-full';
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(canvas);
    canvasRef.current = canvas;
    
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = containerRef.current?.clientWidth || window.innerWidth;
        canvasRef.current.height = containerRef.current?.clientHeight || window.innerHeight;
      }
    };
    
    // Set initial canvas size
    resizeCanvas();
    
    // Initialize points
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const points = [];
    
    for (let i = 0; i < particleCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    pointsRef.current = points;
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [particleCount, colors, particleSpeed]);
  
  // Update animation when parameters change
  useEffect(() => {
    if (!canvasRef.current || !pointsRef.current.length) return;
    
    // Update points speeds if needed
    pointsRef.current = pointsRef.current.map(point => ({
      ...point,
      vx: (point.vx / Math.abs(point.vx)) * particleSpeed * (Math.random() + 0.5),
      vy: (point.vy / Math.abs(point.vy)) * particleSpeed * (Math.random() + 0.5),
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
  }, [maxDistance, particleSpeed, lineOpacity, colors]);
  
  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const points = pointsRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw points
    points.forEach(point => {
      point.x += point.vx;
      point.y += point.vy;
      
      // Bounce off edges
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      
      // Draw point
      ctx.fillStyle = point.color;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw connections
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * lineOpacity;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  return (
    <div ref={containerRef} className="network-container absolute inset-0 w-full h-full z-0" />
  );
};

export default NetworkAnimation;

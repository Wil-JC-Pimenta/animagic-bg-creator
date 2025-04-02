
import React, { useEffect, useRef } from 'react';

interface GradientAnimationProps {
  colors: string[];
  duration: number;
  angle: number;
}

const GradientAnimation: React.FC<GradientAnimationProps> = ({ 
  colors = ['#ff6b6b', '#f8e71c', '#50e3c2'], 
  duration = 15,
  angle = 45
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.style.setProperty('--animation-duration', `${duration}s`);
    
    const gradientColors = colors.join(', ');
    container.style.background = `linear-gradient(${angle}deg, ${gradientColors})`;
    
  }, [colors, duration, angle]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full gradient-bg z-0"
    />
  );
};

export default GradientAnimation;

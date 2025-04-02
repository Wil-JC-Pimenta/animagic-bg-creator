
import React, { useEffect, useRef } from 'react';

interface StarsAnimationProps {
  starCount: number;
  backgroundColor: string;
  starColors: string[];
  speed: number;
  depth: number;
}

const StarsAnimation: React.FC<StarsAnimationProps> = ({
  starCount = 100,
  backgroundColor = '#121212',
  starColors = ['#ffffff', '#f0f0ff', '#fffaf0'],
  speed = 3,
  depth = 3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    container.style.backgroundColor = backgroundColor;
    
    // Create star layers for parallax effect
    for (let d = 0; d < depth; d++) {
      const layerCount = Math.floor(starCount / depth);
      const layerSpeed = speed * (1 - d * 0.2);
      const starSize = 1 + d * 0.5;
      
      const layer = document.createElement('div');
      layer.classList.add('star-layer');
      layer.style.zIndex = d.toString();
      layer.style.setProperty('--star-speed', `${layerSpeed}s`);
      
      for (let i = 0; i < layerCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * layerSpeed;
        const size = (Math.random() * 0.5 + 0.5) * starSize;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        star.style.animationDelay = `${delay}s`;
        
        if (Math.random() > 0.7) {
          star.classList.add('twinkle');
        }
        
        layer.appendChild(star);
      }
      
      container.appendChild(layer);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, [starCount, backgroundColor, starColors, speed, depth]);

  return (
    <div ref={containerRef} className="stars-container" />
  );
};

export default StarsAnimation;

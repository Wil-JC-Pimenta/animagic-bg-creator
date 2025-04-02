
import React, { useEffect, useRef } from 'react';

interface BlobAnimationProps {
  colors: string[];
  count: number;
  size: number;
  speed: number;
}

const BlobAnimation: React.FC<BlobAnimationProps> = ({
  colors = ['rgba(131, 58, 180, 0.7)', 'rgba(253, 29, 29, 0.7)', 'rgba(252, 176, 69, 0.7)'],
  count = 3,
  size = 40,
  speed = 15
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const blob = document.createElement('div');
      blob.classList.add('blob');
      
      const color = colors[i % colors.length];
      const randomSize = size * (0.7 + Math.random() * 0.6);
      const randomX = 20 + Math.random() * 60; // Percentage
      const randomY = 20 + Math.random() * 60; // Percentage
      const randomDelay = i * (speed / count);
      
      blob.style.background = color;
      blob.style.width = `${randomSize}px`;
      blob.style.height = `${randomSize}px`;
      blob.style.left = `${randomX}%`;
      blob.style.top = `${randomY}%`;
      blob.style.animationDuration = `${speed}s`;
      blob.style.animationDelay = `${randomDelay}s`;
      
      // Random blob shape
      const borderRadius = [
        40 + Math.random() * 60,
        40 + Math.random() * 60,
        40 + Math.random() * 60,
        40 + Math.random() * 60
      ].join('% ') + '%';
      
      blob.style.borderRadius = borderRadius;
      
      container.appendChild(blob);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, [count, colors, size, speed]);

  return (
    <div ref={containerRef} className="blobs-container" />
  );
};

export default BlobAnimation;

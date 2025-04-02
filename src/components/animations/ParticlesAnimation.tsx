
import React, { useEffect, useRef } from 'react';

interface ParticlesAnimationProps {
  particleCount: number;
  colors: string[];
  minSize: number;
  maxSize: number;
  speed: number;
}

const ParticlesAnimation: React.FC<ParticlesAnimationProps> = ({
  particleCount = 50,
  colors = ['#ffffff', '#ff6b6b', '#f8e71c', '#50e3c2'],
  minSize = 5,
  maxSize = 20,
  speed = 15
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    container.style.setProperty('--particle-duration', `${speed}s`);

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      
      // Random size between min and max
      const size = Math.random() * (maxSize - minSize) + minSize;
      
      // Random color from colors array
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random delay for animation
      const delay = Math.random() * speed;
      
      // Set styles
      particle.style.left = `${xPos}%`;
      particle.style.top = `${yPos}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.animationDelay = `${delay}s`;
      particle.style.opacity = '0';
      
      container.appendChild(particle);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, [particleCount, colors, minSize, maxSize, speed]);

  return (
    <div ref={containerRef} className="particles-container" />
  );
};

export default ParticlesAnimation;

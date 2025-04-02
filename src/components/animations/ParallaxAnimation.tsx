
import React, { useEffect, useRef } from 'react';

interface ParallaxAnimationProps {
  layerCount: number;
  images: string[];
  sensitivity: number;
}

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({
  layerCount = 3,
  images = ['circles', 'stars', 'dots'],
  sensitivity = 20
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create layers
    for (let i = 0; i < layerCount; i++) {
      const layer = document.createElement('div');
      layer.classList.add('parallax-layer');
      
      // Layer style
      const depth = (i + 1) / layerCount;
      const imageType = images[i % images.length];
      
      // Create pattern based on imageType
      let pattern = '';
      const color = `rgba(255, 255, 255, ${0.1 * (i + 1)})`;
      
      if (imageType === 'circles') {
        // Generate circles pattern
        for (let j = 0; j < 20; j++) {
          const size = Math.random() * 20 + 5;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          pattern += `<div style="position: absolute; top: ${y}%; left: ${x}%; width: ${size}px; height: ${size}px; border-radius: 50%; background: ${color};"></div>`;
        }
      } else if (imageType === 'stars') {
        // Generate stars pattern
        for (let j = 0; j < 30; j++) {
          const size = Math.random() * 3 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          pattern += `<div style="position: absolute; top: ${y}%; left: ${x}%; width: ${size}px; height: ${size}px; background: ${color};"></div>`;
        }
      } else if (imageType === 'dots') {
        // Generate dots pattern
        for (let j = 0; j < 50; j++) {
          const size = Math.random() * 4 + 2;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          pattern += `<div style="position: absolute; top: ${y}%; left: ${x}%; width: ${size}px; height: ${size}px; border-radius: 50%; background: ${color};"></div>`;
        }
      }
      
      layer.innerHTML = pattern;
      layer.style.zIndex = (0 - i).toString();
      container.appendChild(layer);
    }
    
    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const layers = containerRef.current.querySelectorAll('.parallax-layer');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (mouseX - centerX) / sensitivity;
      const deltaY = (mouseY - centerY) / sensitivity;
      
      layers.forEach((layer, index) => {
        const depth = (index + 1) / layers.length;
        const moveX = deltaX * depth;
        const moveY = deltaY * depth;
        
        (layer as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.innerHTML = '';
    };
  }, [layerCount, images, sensitivity]);

  return (
    <div ref={containerRef} className="parallax-container" />
  );
};

export default ParallaxAnimation;

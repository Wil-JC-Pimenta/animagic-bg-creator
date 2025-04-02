
import React, { useEffect, useRef } from 'react';

interface ColorTransitionAnimationProps {
  colors: string[];
  transitionSpeed: number;
  blendMode: string;
}

const ColorTransitionAnimation: React.FC<ColorTransitionAnimationProps> = ({
  colors = ['#ff5f6d', '#ffc371', '#4facfe', '#00f2fe'],
  transitionSpeed = 10,
  blendMode = 'normal'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create background element
    const background = document.createElement('div');
    background.classList.add('color-transition-bg');
    
    // Set CSS variables
    background.style.setProperty('--transition-speed', `${transitionSpeed}s`);
    background.style.mixBlendMode = blendMode;
    
    // Set keyframes
    const keyframes = colors.map((color, index) => {
      const percentage = Math.round((index / (colors.length - 1)) * 100);
      return `${percentage}% { background-color: ${color}; }`;
    }).join('\n');
    
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      @keyframes colorTransition {
        ${keyframes}
      }
    `;
    
    // Apply animation
    background.style.animation = `colorTransition ${transitionSpeed * colors.length}s infinite`;
    
    // Append elements
    container.appendChild(style);
    container.appendChild(background);
    
    return () => {
      container.innerHTML = '';
    };
  }, [colors, transitionSpeed, blendMode]);

  return (
    <div ref={containerRef} className="color-transition-container" />
  );
};

export default ColorTransitionAnimation;

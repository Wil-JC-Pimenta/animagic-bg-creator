
import React, { useEffect, useRef } from 'react';

interface GlitchAnimationProps {
  baseColor: string;
  glitchColors: string[];
  intensity: number;
  speed: number;
}

const GlitchAnimation: React.FC<GlitchAnimationProps> = ({
  baseColor = '#121212',
  glitchColors = ['#ff00ff', '#00ffff', '#ff0000'],
  intensity = 5,
  speed = 2
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';
    container.style.backgroundColor = baseColor;
    
    // Create base layer
    const baseLayer = document.createElement('div');
    baseLayer.classList.add('glitch-base');
    baseLayer.style.backgroundColor = baseColor;
    container.appendChild(baseLayer);
    
    // Create glitch layers
    for (let i = 0; i < glitchColors.length; i++) {
      const glitchLayer = document.createElement('div');
      glitchLayer.classList.add('glitch-layer');
      glitchLayer.style.backgroundColor = glitchColors[i];
      glitchLayer.style.mixBlendMode = 'overlay';
      glitchLayer.style.opacity = (0.5 / glitchColors.length).toString();
      glitchLayer.style.zIndex = (i + 1).toString();
      glitchLayer.style.animationDuration = `${speed * (1 + Math.random() * 0.5)}s`;
      glitchLayer.style.animationDelay = `${i * 0.1}s`;
      glitchLayer.style.setProperty('--glitch-intensity', `${intensity}px`);
      container.appendChild(glitchLayer);
    }

    // Create scan line effect
    const scanLines = document.createElement('div');
    scanLines.classList.add('scan-lines');
    container.appendChild(scanLines);
    
    return () => {
      container.innerHTML = '';
    };
  }, [baseColor, glitchColors, intensity, speed]);

  return (
    <div ref={containerRef} className="glitch-container" />
  );
};

export default GlitchAnimation;

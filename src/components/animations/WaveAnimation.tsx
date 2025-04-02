
import React, { useEffect, useRef } from 'react';

interface WaveAnimationProps {
  waveCount: number;
  colors: string[];
  speed: number;
  height: number;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({
  waveCount = 3,
  colors = ['rgba(80, 227, 194, 0.3)', 'rgba(80, 227, 194, 0.2)', 'rgba(80, 227, 194, 0.1)'],
  speed = 15,
  height = 30
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    container.style.setProperty('--wave-duration', `${speed}s`);

    for (let i = 0; i < waveCount; i++) {
      const wave = document.createElement('div');
      wave.classList.add('wave');
      
      // Create SVG wave
      const waveHeight = height * (1 - i * 0.2);
      const delay = i * (speed / waveCount);
      const color = colors[i % colors.length];
      
      wave.style.height = `${waveHeight}%`;
      wave.style.animationDelay = `${delay}s`;
      wave.style.bottom = `${i * 5}%`;
      wave.style.background = `linear-gradient(to bottom, transparent, ${color})`;
      wave.style.opacity = (1 - i * 0.2).toString();
      
      container.appendChild(wave);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, [waveCount, colors, speed, height]);

  return (
    <div ref={containerRef} className="wave-container" />
  );
};

export default WaveAnimation;

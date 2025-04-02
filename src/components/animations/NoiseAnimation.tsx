
import React, { useEffect, useRef } from 'react';

interface NoiseAnimationProps {
  baseColor: string;
  noiseOpacity: number;
  noiseSpeed: number;
  noiseSize: number;
}

const NoiseAnimation: React.FC<NoiseAnimationProps> = ({
  baseColor = '#121212',
  noiseOpacity = 0.2,
  noiseSpeed = 5,
  noiseSize = 100
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    container.style.backgroundColor = baseColor;
    
    // Create canvas for noise
    const canvas = document.createElement('canvas');
    canvas.className = 'noise-canvas';
    container.appendChild(canvas);
    canvasRef.current = canvas;
    
    // Setup canvas
    const ctx = canvas.getContext('2d')!;
    
    // Resize canvas
    const resizeCanvas = () => {
      if (canvas && ctx) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let time = 0;
    
    // Noise function
    const drawNoise = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw noise
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      const gridSize = noiseSize;
      const gridCellSize = Math.max(1, Math.floor(canvas.width / gridSize));
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          // Perlin-inspired noise (simplified)
          const value = Math.abs(Math.sin((i + time) * 0.1) * Math.cos((j + time) * 0.1)) * 255;
          
          // Fill grid cell
          for (let x = 0; x < gridCellSize; x++) {
            for (let y = 0; y < gridCellSize; y++) {
              const xPos = i * gridCellSize + x;
              const yPos = j * gridCellSize + y;
              
              if (xPos < canvas.width && yPos < canvas.height) {
                const pixelIndex = (yPos * canvas.width + xPos) * 4;
                data[pixelIndex] = 255;     // R
                data[pixelIndex + 1] = 255; // G
                data[pixelIndex + 2] = 255; // B
                data[pixelIndex + 3] = value * noiseOpacity; // A
              }
            }
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Update time
      time += 0.1 * noiseSpeed;
      
      // Request next frame
      animationFrameRef.current = requestAnimationFrame(drawNoise);
    };
    
    // Start animation
    drawNoise();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      container.innerHTML = '';
    };
  }, [baseColor, noiseOpacity, noiseSpeed, noiseSize]);

  return (
    <div ref={containerRef} className="noise-container" />
  );
};

export default NoiseAnimation;

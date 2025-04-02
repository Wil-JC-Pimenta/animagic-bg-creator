
import { useState } from 'react';
import { ParticlesState } from '@/types/animation';

export const useParticlesState = (): ParticlesState & {
  setParticleColors: (colors: string[]) => void;
  setParticleCount: (count: number) => void;
  setMinParticleSize: (size: number) => void;
  setMaxParticleSize: (size: number) => void;
  setParticleSpeed: (speed: number) => void;
} => {
  const [particleColors, setParticleColors] = useState<string[]>(['#ffffff', '#ff6b6b', '#f8e71c', '#50e3c2']);
  const [particleCount, setParticleCount] = useState<number>(50);
  const [minParticleSize, setMinParticleSize] = useState<number>(5);
  const [maxParticleSize, setMaxParticleSize] = useState<number>(20);
  const [particleSpeed, setParticleSpeed] = useState<number>(15);

  return {
    particleColors,
    particleCount,
    minParticleSize,
    maxParticleSize,
    particleSpeed,
    setParticleColors,
    setParticleCount,
    setMinParticleSize,
    setMaxParticleSize,
    setParticleSpeed
  };
};

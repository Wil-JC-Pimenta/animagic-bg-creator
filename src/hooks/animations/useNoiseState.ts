
import { useState } from 'react';
import { NoiseState } from '@/types/animation';

export const useNoiseState = (): NoiseState & {
  setNoiseBaseColor: (color: string) => void;
  setNoiseOpacity: (opacity: number) => void;
  setNoiseSpeed: (speed: number) => void;
  setNoiseSize: (size: number) => void;
} => {
  const [noiseBaseColor, setNoiseBaseColor] = useState<string>('#121212');
  const [noiseOpacity, setNoiseOpacity] = useState<number>(0.2);
  const [noiseSpeed, setNoiseSpeed] = useState<number>(5);
  const [noiseSize, setNoiseSize] = useState<number>(100);

  return {
    noiseBaseColor,
    noiseOpacity,
    noiseSpeed,
    noiseSize,
    setNoiseBaseColor,
    setNoiseOpacity,
    setNoiseSpeed,
    setNoiseSize
  };
};


import { useState } from 'react';
import { WaveState } from '@/types/animation';

export const useWaveState = (): WaveState & {
  setWaveColors: (colors: string[]) => void;
  setWaveCount: (count: number) => void;
  setWaveSpeed: (speed: number) => void;
  setWaveHeight: (height: number) => void;
} => {
  const [waveColors, setWaveColors] = useState<string[]>(['rgba(80, 227, 194, 0.3)', 'rgba(80, 227, 194, 0.2)', 'rgba(80, 227, 194, 0.1)']);
  const [waveCount, setWaveCount] = useState<number>(3);
  const [waveSpeed, setWaveSpeed] = useState<number>(15);
  const [waveHeight, setWaveHeight] = useState<number>(30);

  return {
    waveColors,
    waveCount,
    waveSpeed,
    waveHeight,
    setWaveColors,
    setWaveCount,
    setWaveSpeed,
    setWaveHeight
  };
};

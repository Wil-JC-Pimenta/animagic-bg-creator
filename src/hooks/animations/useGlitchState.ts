
import { useState } from 'react';
import { GlitchState } from '@/types/animation';

export const useGlitchState = (): GlitchState & {
  setGlitchBaseColor: (color: string) => void;
  setGlitchColors: (colors: string[]) => void;
  setGlitchIntensity: (intensity: number) => void;
  setGlitchSpeed: (speed: number) => void;
} => {
  const [glitchBaseColor, setGlitchBaseColor] = useState<string>('#121212');
  const [glitchColors, setGlitchColors] = useState<string[]>(['#ff00ff', '#00ffff', '#ff0000']);
  const [glitchIntensity, setGlitchIntensity] = useState<number>(5);
  const [glitchSpeed, setGlitchSpeed] = useState<number>(2);

  return {
    glitchBaseColor,
    glitchColors,
    glitchIntensity,
    glitchSpeed,
    setGlitchBaseColor,
    setGlitchColors,
    setGlitchIntensity,
    setGlitchSpeed
  };
};

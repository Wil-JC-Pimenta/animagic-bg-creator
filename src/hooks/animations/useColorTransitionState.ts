
import { useState } from 'react';
import { ColorTransitionState } from '@/types/animation';

export const useColorTransitionState = (): ColorTransitionState & {
  setColorTransitionColors: (colors: string[]) => void;
  setColorTransitionSpeed: (speed: number) => void;
  setColorTransitionBlendMode: (mode: string) => void;
} => {
  const [colorTransitionColors, setColorTransitionColors] = useState<string[]>(['#ff5f6d', '#ffc371', '#4facfe', '#00f2fe']);
  const [colorTransitionSpeed, setColorTransitionSpeed] = useState<number>(10);
  const [colorTransitionBlendMode, setColorTransitionBlendMode] = useState<string>('normal');

  return {
    colorTransitionColors,
    colorTransitionSpeed,
    colorTransitionBlendMode,
    setColorTransitionColors,
    setColorTransitionSpeed,
    setColorTransitionBlendMode
  };
};

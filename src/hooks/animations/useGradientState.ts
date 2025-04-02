
import { useState } from 'react';
import { GradientState } from '@/types/animation';

export const useGradientState = (): GradientState & {
  setGradientColors: (colors: string[]) => void;
  setGradientDuration: (duration: number) => void;
  setGradientAngle: (angle: number) => void;
} => {
  const [gradientColors, setGradientColors] = useState<string[]>(['#ff6b6b', '#f8e71c', '#50e3c2']);
  const [gradientDuration, setGradientDuration] = useState<number>(15);
  const [gradientAngle, setGradientAngle] = useState<number>(45);

  return {
    gradientColors,
    gradientDuration,
    gradientAngle,
    setGradientColors,
    setGradientDuration,
    setGradientAngle,
  };
};

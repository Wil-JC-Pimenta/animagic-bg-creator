
import { useState } from 'react';
import { StarsState } from '@/types/animation';

export const useStarsState = (): StarsState & {
  setStarCount: (count: number) => void;
  setStarBackgroundColor: (color: string) => void;
  setStarColors: (colors: string[]) => void;
  setStarSpeed: (speed: number) => void;
  setStarDepth: (depth: number) => void;
} => {
  const [starCount, setStarCount] = useState<number>(100);
  const [starBackgroundColor, setStarBackgroundColor] = useState<string>('#121212');
  const [starColors, setStarColors] = useState<string[]>(['#ffffff', '#f0f0ff', '#fffaf0']);
  const [starSpeed, setStarSpeed] = useState<number>(3);
  const [starDepth, setStarDepth] = useState<number>(3);

  return {
    starCount,
    starBackgroundColor,
    starColors,
    starSpeed,
    starDepth,
    setStarCount,
    setStarBackgroundColor,
    setStarColors,
    setStarSpeed,
    setStarDepth
  };
};

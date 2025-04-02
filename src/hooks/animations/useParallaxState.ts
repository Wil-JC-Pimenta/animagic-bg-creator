
import { useState } from 'react';
import { ParallaxState } from '@/types/animation';

export const useParallaxState = (): ParallaxState & {
  setParallaxLayers: (layers: number) => void;
  setParallaxImages: (images: string[]) => void;
  setParallaxSensitivity: (sensitivity: number) => void;
} => {
  const [parallaxLayers, setParallaxLayers] = useState<number>(3);
  const [parallaxImages, setParallaxImages] = useState<string[]>(['circles', 'stars', 'dots']);
  const [parallaxSensitivity, setParallaxSensitivity] = useState<number>(20);

  return {
    parallaxLayers,
    parallaxImages,
    parallaxSensitivity,
    setParallaxLayers,
    setParallaxImages,
    setParallaxSensitivity
  };
};

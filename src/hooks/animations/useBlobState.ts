
import { useState } from 'react';
import { BlobState } from '@/types/animation';

export const useBlobState = (): BlobState & {
  setBlobColors: (colors: string[]) => void;
  setBlobCount: (count: number) => void;
  setBlobSize: (size: number) => void;
  setBlobSpeed: (speed: number) => void;
} => {
  const [blobColors, setBlobColors] = useState<string[]>(['rgba(131, 58, 180, 0.7)', 'rgba(253, 29, 29, 0.7)', 'rgba(252, 176, 69, 0.7)']);
  const [blobCount, setBlobCount] = useState<number>(3);
  const [blobSize, setBlobSize] = useState<number>(40);
  const [blobSpeed, setBlobSpeed] = useState<number>(15);

  return {
    blobColors,
    blobCount,
    blobSize,
    blobSpeed,
    setBlobColors,
    setBlobCount,
    setBlobSize,
    setBlobSpeed
  };
};

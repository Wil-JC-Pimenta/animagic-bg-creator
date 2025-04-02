
import { useState } from 'react';
import { NetworkState } from '@/types/animation';

export const useNetworkState = (): NetworkState & {
  setNetworkColors: (colors: string[]) => void;
  setNetworkParticleCount: (count: number) => void;
  setNetworkMaxDistance: (distance: number) => void;
  setNetworkParticleSpeed: (speed: number) => void;
  setNetworkLineOpacity: (opacity: number) => void;
} => {
  const [networkColors, setNetworkColors] = useState<string[]>(['#ffffff', '#33ccff', '#ff99cc']);
  const [networkParticleCount, setNetworkParticleCount] = useState<number>(100);
  const [networkMaxDistance, setNetworkMaxDistance] = useState<number>(150);
  const [networkParticleSpeed, setNetworkParticleSpeed] = useState<number>(1.5);
  const [networkLineOpacity, setNetworkLineOpacity] = useState<number>(0.5);

  return {
    networkColors,
    networkParticleCount,
    networkMaxDistance,
    networkParticleSpeed,
    networkLineOpacity,
    setNetworkColors,
    setNetworkParticleCount,
    setNetworkMaxDistance,
    setNetworkParticleSpeed,
    setNetworkLineOpacity
  };
};

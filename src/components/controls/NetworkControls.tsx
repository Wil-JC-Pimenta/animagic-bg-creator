
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface NetworkControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  particleCount: number;
  setParticleCount: (count: number) => void;
  maxDistance: number;
  setMaxDistance: (distance: number) => void;
  particleSpeed: number;
  setParticleSpeed: (speed: number) => void;
  lineOpacity: number;
  setLineOpacity: (opacity: number) => void;
}

const NetworkControls: React.FC<NetworkControlsProps> = ({
  colors,
  setColors,
  particleCount,
  setParticleCount,
  maxDistance,
  setMaxDistance,
  particleSpeed,
  setParticleSpeed,
  lineOpacity,
  setLineOpacity
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ColorPicker 
        colors={colors} 
        onChange={setColors} 
        maxColors={3}
      />
      
      <Slider
        label="Particle Count"
        value={particleCount}
        onChange={setParticleCount}
        min={50}
        max={300}
        step={10}
        tooltip="Number of particles in the network"
      />
      
      <Slider
        label="Connection Distance"
        value={maxDistance}
        onChange={setMaxDistance}
        min={50}
        max={300}
        step={10}
        unit="px"
        tooltip="Maximum distance for particles to connect"
      />
      
      <Slider
        label="Particle Speed"
        value={particleSpeed}
        onChange={setParticleSpeed}
        min={0.5}
        max={3}
        step={0.1}
        tooltip="Speed of particle movement"
      />
      
      <Slider
        label="Line Opacity"
        value={lineOpacity}
        onChange={setLineOpacity}
        min={0.1}
        max={1}
        step={0.1}
        tooltip="Opacity of connection lines"
      />
    </div>
  );
};

export default NetworkControls;

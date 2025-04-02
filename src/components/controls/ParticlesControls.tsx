
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface ParticlesControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  particleCount: number;
  setParticleCount: (count: number) => void;
  minSize: number;
  setMinSize: (size: number) => void;
  maxSize: number;
  setMaxSize: (size: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

const ParticlesControls: React.FC<ParticlesControlsProps> = ({
  colors,
  setColors,
  particleCount,
  setParticleCount,
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
  speed,
  setSpeed
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ColorPicker 
        colors={colors} 
        onChange={setColors} 
        maxColors={5}
      />
      
      <Slider
        label="Particle Count"
        value={particleCount}
        onChange={setParticleCount}
        min={10}
        max={200}
        step={5}
        tooltip="Number of particles"
      />
      
      <Slider
        label="Minimum Size"
        value={minSize}
        onChange={(value) => {
          setMinSize(value);
          if (value > maxSize) {
            setMaxSize(value);
          }
        }}
        min={1}
        max={20}
        step={1}
        unit="px"
        tooltip="Smallest particle size"
      />
      
      <Slider
        label="Maximum Size"
        value={maxSize}
        onChange={(value) => {
          setMaxSize(value);
          if (value < minSize) {
            setMinSize(value);
          }
        }}
        min={5}
        max={50}
        step={1}
        unit="px"
        tooltip="Largest particle size"
      />
      
      <Slider
        label="Animation Speed"
        value={speed}
        onChange={setSpeed}
        min={5}
        max={30}
        step={1}
        unit="s"
        tooltip="Speed of particle movement"
      />
    </div>
  );
};

export default ParticlesControls;

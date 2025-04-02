
import React from 'react';
import Slider from './Slider';

interface NoiseControlsProps {
  baseColor: string;
  setBaseColor: (color: string) => void;
  noiseOpacity: number;
  setNoiseOpacity: (opacity: number) => void;
  noiseSpeed: number;
  setNoiseSpeed: (speed: number) => void;
  noiseSize: number;
  setNoiseSize: (size: number) => void;
}

const NoiseControls: React.FC<NoiseControlsProps> = ({
  baseColor,
  setBaseColor,
  noiseOpacity,
  setNoiseOpacity,
  noiseSpeed,
  setNoiseSpeed,
  noiseSize,
  setNoiseSize
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Background Color</label>
        <div className="flex gap-2">
          <input 
            type="color" 
            value={baseColor} 
            onChange={(e) => setBaseColor(e.target.value)} 
            className="h-10 w-10 rounded cursor-pointer"
          />
          <input 
            type="text" 
            value={baseColor} 
            onChange={(e) => setBaseColor(e.target.value)} 
            className="flex-1 px-3 py-2 bg-secondary border border-border rounded"
          />
        </div>
      </div>
      
      <Slider
        label="Noise Opacity"
        value={noiseOpacity}
        onChange={setNoiseOpacity}
        min={0.05}
        max={0.5}
        step={0.05}
        tooltip="Opacity of the noise effect"
      />
      
      <Slider
        label="Noise Speed"
        value={noiseSpeed}
        onChange={setNoiseSpeed}
        min={1}
        max={10}
        step={0.5}
        tooltip="Speed of the noise animation"
      />
      
      <Slider
        label="Noise Size"
        value={noiseSize}
        onChange={setNoiseSize}
        min={10}
        max={200}
        step={10}
        tooltip="Size of the noise pattern"
      />
    </div>
  );
};

export default NoiseControls;

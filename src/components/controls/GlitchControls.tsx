
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface GlitchControlsProps {
  baseColor: string;
  setBaseColor: (color: string) => void;
  glitchColors: string[];
  setGlitchColors: (colors: string[]) => void;
  intensity: number;
  setIntensity: (intensity: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

const GlitchControls: React.FC<GlitchControlsProps> = ({
  baseColor,
  setBaseColor,
  glitchColors,
  setGlitchColors,
  intensity,
  setIntensity,
  speed,
  setSpeed
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Base Color</label>
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
      
      <ColorPicker 
        colors={glitchColors} 
        onChange={setGlitchColors} 
        maxColors={3} 
        label="Glitch Colors"
      />
      
      <Slider
        label="Glitch Intensity"
        value={intensity}
        onChange={setIntensity}
        min={1}
        max={20}
        step={1}
        unit="px"
        tooltip="Intensity of the glitch effect"
      />
      
      <Slider
        label="Glitch Speed"
        value={speed}
        onChange={setSpeed}
        min={0.5}
        max={5}
        step={0.1}
        unit="s"
        tooltip="Speed of the glitch animation"
      />
    </div>
  );
};

export default GlitchControls;

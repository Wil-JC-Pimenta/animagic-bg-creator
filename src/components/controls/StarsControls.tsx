
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface StarsControlsProps {
  starCount: number;
  setStarCount: (count: number) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  starColors: string[];
  setStarColors: (colors: string[]) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  depth: number;
  setDepth: (depth: number) => void;
}

const StarsControls: React.FC<StarsControlsProps> = ({
  starCount,
  setStarCount,
  backgroundColor,
  setBackgroundColor,
  starColors,
  setStarColors,
  speed,
  setSpeed,
  depth,
  setDepth
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Background Color</label>
        <div className="flex gap-2">
          <input 
            type="color" 
            value={backgroundColor} 
            onChange={(e) => setBackgroundColor(e.target.value)} 
            className="h-10 w-10 rounded cursor-pointer"
          />
          <input 
            type="text" 
            value={backgroundColor} 
            onChange={(e) => setBackgroundColor(e.target.value)} 
            className="flex-1 px-3 py-2 bg-secondary border border-border rounded"
          />
        </div>
      </div>
      
      <ColorPicker 
        colors={starColors} 
        onChange={setStarColors} 
        maxColors={5} 
        label="Star Colors"
      />
      
      <Slider
        label="Star Count"
        value={starCount}
        onChange={setStarCount}
        min={20}
        max={500}
        step={10}
        tooltip="Number of stars"
      />
      
      <Slider
        label="Star Layers"
        value={depth}
        onChange={setDepth}
        min={1}
        max={5}
        step={1}
        tooltip="Number of depth layers (parallax effect)"
      />
      
      <Slider
        label="Twinkle Speed"
        value={speed}
        onChange={setSpeed}
        min={1}
        max={10}
        step={0.5}
        unit="s"
        tooltip="Speed of the twinkling animation"
      />
    </div>
  );
};

export default StarsControls;


import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface WaveControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  waveCount: number;
  setWaveCount: (count: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  height: number;
  setHeight: (height: number) => void;
}

const WaveControls: React.FC<WaveControlsProps> = ({
  colors,
  setColors,
  waveCount,
  setWaveCount,
  speed,
  setSpeed,
  height,
  setHeight
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ColorPicker 
        colors={colors} 
        onChange={setColors} 
        maxColors={5}
      />
      
      <Slider
        label="Wave Count"
        value={waveCount}
        onChange={setWaveCount}
        min={1}
        max={5}
        step={1}
        tooltip="Number of wave layers"
      />
      
      <Slider
        label="Wave Height"
        value={height}
        onChange={setHeight}
        min={10}
        max={50}
        step={5}
        unit="%"
        tooltip="Height of the waves"
      />
      
      <Slider
        label="Animation Speed"
        value={speed}
        onChange={setSpeed}
        min={5}
        max={30}
        step={1}
        unit="s"
        tooltip="Speed of wave movement"
      />
    </div>
  );
};

export default WaveControls;

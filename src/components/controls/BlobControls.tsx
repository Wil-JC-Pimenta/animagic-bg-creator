
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface BlobControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  count: number;
  setCount: (count: number) => void;
  size: number;
  setSize: (size: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

const BlobControls: React.FC<BlobControlsProps> = ({
  colors,
  setColors,
  count,
  setCount,
  size,
  setSize,
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
        label="Blob Count"
        value={count}
        onChange={setCount}
        min={1}
        max={8}
        step={1}
        tooltip="Number of blobs"
      />
      
      <Slider
        label="Blob Size"
        value={size}
        onChange={setSize}
        min={20}
        max={100}
        step={5}
        unit="px"
        tooltip="Size of the blobs"
      />
      
      <Slider
        label="Animation Speed"
        value={speed}
        onChange={setSpeed}
        min={5}
        max={30}
        step={1}
        unit="s"
        tooltip="Speed of the blob movement"
      />
    </div>
  );
};

export default BlobControls;

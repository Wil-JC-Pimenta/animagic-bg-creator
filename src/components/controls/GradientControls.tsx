
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';

interface GradientControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  duration: number;
  setDuration: (duration: number) => void;
  angle: number;
  setAngle: (angle: number) => void;
}

const GradientControls: React.FC<GradientControlsProps> = ({
  colors,
  setColors,
  duration,
  setDuration,
  angle,
  setAngle
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ColorPicker 
        colors={colors} 
        onChange={setColors} 
        maxColors={5}
      />
      
      <Slider
        label="Animation Speed"
        value={duration}
        onChange={setDuration}
        min={5}
        max={30}
        step={1}
        unit="s"
        tooltip="Duration of one full animation cycle"
      />
      
      <Slider
        label="Gradient Angle"
        value={angle}
        onChange={setAngle}
        min={0}
        max={360}
        step={5}
        unit="°"
        tooltip="Direction of the gradient"
      />
    </div>
  );
};

export default GradientControls;

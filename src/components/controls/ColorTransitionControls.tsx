
import React from 'react';
import ColorPicker from './ColorPicker';
import Slider from './Slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ColorTransitionControlsProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  transitionSpeed: number;
  setTransitionSpeed: (speed: number) => void;
  blendMode: string;
  setBlendMode: (mode: string) => void;
}

const ColorTransitionControls: React.FC<ColorTransitionControlsProps> = ({
  colors,
  setColors,
  transitionSpeed,
  setTransitionSpeed,
  blendMode,
  setBlendMode
}) => {
  const blendModes = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 
    'lighten', 'color-dodge', 'color-burn', 'hard-light', 
    'soft-light', 'difference', 'exclusion', 'hue', 
    'saturation', 'color', 'luminosity'
  ];

  return (
    <div className="flex flex-col gap-6">
      <ColorPicker 
        colors={colors} 
        onChange={setColors} 
        maxColors={6}
      />
      
      <Slider
        label="Transition Speed"
        value={transitionSpeed}
        onChange={setTransitionSpeed}
        min={2}
        max={20}
        step={0.5}
        unit="s"
        tooltip="Speed of color transitions"
      />
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Blend Mode</label>
        <Select value={blendMode} onValueChange={setBlendMode}>
          <SelectTrigger>
            <SelectValue placeholder="Select blend mode" />
          </SelectTrigger>
          <SelectContent>
            {blendModes.map((mode) => (
              <SelectItem key={mode} value={mode}>
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ColorTransitionControls;

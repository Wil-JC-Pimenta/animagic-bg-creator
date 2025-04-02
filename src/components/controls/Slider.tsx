
import React from 'react';
import { Slider as SliderComponent } from '@/components/ui/slider';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  tooltip?: string;
}

const Slider: React.FC<SliderProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  tooltip
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="text-sm text-muted-foreground">
          {value}{unit}
        </span>
      </div>
      <SliderComponent
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
      />
      {tooltip && (
        <p className="text-xs text-muted-foreground">{tooltip}</p>
      )}
    </div>
  );
};

export default Slider;

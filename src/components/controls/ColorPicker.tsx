
import React from 'react';
import { cn } from '@/lib/utils';

interface ColorPickerProps {
  colors: string[];
  onChange: (colors: string[]) => void;
  maxColors?: number;
  label?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ 
  colors, 
  onChange, 
  maxColors = 5,
  label = "Cores"
}) => {
  const addColor = () => {
    if (colors.length < maxColors) {
      onChange([...colors, '#ffffff']);
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 1) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      onChange(newColors);
    }
  };

  const updateColor = (index: number, color: string) => {
    const newColors = [...colors];
    newColors[index] = color;
    onChange(newColors);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        {colors.map((color, index) => (
          <div key={index} className="relative group">
            <input 
              type="color" 
              value={color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="w-8 h-8 rounded-md cursor-pointer border border-border overflow-hidden"
            />
            {colors.length > 1 && (
              <button 
                onClick={() => removeColor(index)}
                className="absolute -top-1 -right-1 w-4 h-4 bg-card rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {colors.length < maxColors && (
          <button 
            onClick={addColor}
            className={cn(
              "w-8 h-8 rounded-md border border-dashed border-border flex items-center justify-center text-muted-foreground hover:text-foreground",
              "transition-colors"
            )}
          >
            +
          </button>
        )}
      </div>
      <div className="text-xs text-muted-foreground">
        Clique para alterar as cores (máximo {maxColors})
      </div>
    </div>
  );
};

export default ColorPicker;

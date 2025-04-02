
import React from 'react';
import Slider from './Slider';

interface ParallaxControlsProps {
  layerCount: number;
  setLayerCount: (count: number) => void;
  sensitivity: number;
  setSensitivity: (sensitivity: number) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

const ParallaxControls: React.FC<ParallaxControlsProps> = ({
  layerCount,
  setLayerCount,
  sensitivity,
  setSensitivity,
  images,
  setImages
}) => {
  const imageOptions = ['circles', 'stars', 'dots'];
  
  const handleImageToggle = (image: string) => {
    if (images.includes(image)) {
      // If there's more than one image, remove it
      if (images.length > 1) {
        setImages(images.filter(i => i !== image));
      }
    } else {
      // Add the image
      setImages([...images, image]);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Layer Patterns</label>
        <div className="flex flex-wrap gap-2">
          {imageOptions.map((image) => (
            <button
              key={image}
              onClick={() => handleImageToggle(image)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                images.includes(image)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {image.charAt(0).toUpperCase() + image.slice(1)}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Select patterns for parallax layers</p>
      </div>
      
      <Slider
        label="Layer Count"
        value={layerCount}
        onChange={setLayerCount}
        min={1}
        max={5}
        step={1}
        tooltip="Number of parallax layers"
      />
      
      <Slider
        label="Mouse Sensitivity"
        value={sensitivity}
        onChange={setSensitivity}
        min={5}
        max={50}
        step={5}
        tooltip="Sensitivity to mouse movement"
      />
    </div>
  );
};

export default ParallaxControls;

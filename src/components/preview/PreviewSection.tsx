
import React from 'react';
import AnimationRenderer from './AnimationRenderer';

type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

interface PreviewSectionProps {
  animationType: AnimationType;
  gradientColors: string[];
  gradientDuration: number;
  gradientAngle: number;
  particleColors: string[];
  particleCount: number;
  minParticleSize: number;
  maxParticleSize: number;
  particleSpeed: number;
  waveColors: string[];
  waveCount: number;
  waveSpeed: number;
  waveHeight: number;
  parallaxLayers: number;
  parallaxImages: string[];
  parallaxSensitivity: number;
  networkColors: string[];
  networkParticleCount: number;
  networkMaxDistance: number;
  networkParticleSpeed: number;
  networkLineOpacity: number;
  blobColors: string[];
  blobCount: number;
  blobSize: number;
  blobSpeed: number;
  glitchBaseColor: string;
  glitchColors: string[];
  glitchIntensity: number;
  glitchSpeed: number;
  starCount: number;
  starBackgroundColor: string;
  starColors: string[];
  starSpeed: number;
  starDepth: number;
  noiseBaseColor: string;
  noiseOpacity: number;
  noiseSpeed: number;
  noiseSize: number;
  colorTransitionColors: string[];
  colorTransitionSpeed: number;
  colorTransitionBlendMode: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = (props) => {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 border border-border">
      <AnimationRenderer {...props} />
    </div>
  );
};

export default PreviewSection;

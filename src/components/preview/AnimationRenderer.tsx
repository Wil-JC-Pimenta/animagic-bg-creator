
import React from 'react';
import GradientAnimation from '@/components/animations/GradientAnimation';
import ParticlesAnimation from '@/components/animations/ParticlesAnimation';
import WaveAnimation from '@/components/animations/WaveAnimation';
import ParallaxAnimation from '@/components/animations/ParallaxAnimation';
import NetworkAnimation from '@/components/animations/NetworkAnimation';
import BlobAnimation from '@/components/animations/BlobAnimation';
import GlitchAnimation from '@/components/animations/GlitchAnimation';
import StarsAnimation from '@/components/animations/StarsAnimation';
import NoiseAnimation from '@/components/animations/NoiseAnimation';
import ColorTransitionAnimation from '@/components/animations/ColorTransitionAnimation';

type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

interface AnimationRendererProps {
  animationType: AnimationType;
  // Gradient props
  gradientColors?: string[];
  gradientDuration?: number;
  gradientAngle?: number;
  // Particles props
  particleColors?: string[];
  particleCount?: number;
  minParticleSize?: number;
  maxParticleSize?: number;
  particleSpeed?: number;
  // Wave props
  waveColors?: string[];
  waveCount?: number;
  waveSpeed?: number;
  waveHeight?: number;
  // Parallax props
  parallaxLayers?: number;
  parallaxImages?: string[];
  parallaxSensitivity?: number;
  // Network props
  networkColors?: string[];
  networkParticleCount?: number;
  networkMaxDistance?: number;
  networkParticleSpeed?: number;
  networkLineOpacity?: number;
  // Blob props
  blobColors?: string[];
  blobCount?: number;
  blobSize?: number;
  blobSpeed?: number;
  // Glitch props
  glitchBaseColor?: string;
  glitchColors?: string[];
  glitchIntensity?: number;
  glitchSpeed?: number;
  // Stars props
  starCount?: number;
  starBackgroundColor?: string;
  starColors?: string[];
  starSpeed?: number;
  starDepth?: number;
  // Noise props
  noiseBaseColor?: string;
  noiseOpacity?: number;
  noiseSpeed?: number;
  noiseSize?: number;
  // Color transition props
  colorTransitionColors?: string[];
  colorTransitionSpeed?: number;
  colorTransitionBlendMode?: string;
}

const AnimationRenderer: React.FC<AnimationRendererProps> = ({
  animationType,
  // Gradient props
  gradientColors = [],
  gradientDuration = 0,
  gradientAngle = 0,
  // Particles props
  particleColors = [],
  particleCount = 0,
  minParticleSize = 0,
  maxParticleSize = 0,
  particleSpeed = 0,
  // Wave props
  waveColors = [],
  waveCount = 0,
  waveSpeed = 0,
  waveHeight = 0,
  // Parallax props
  parallaxLayers = 0,
  parallaxImages = [],
  parallaxSensitivity = 0,
  // Network props
  networkColors = [],
  networkParticleCount = 0,
  networkMaxDistance = 0,
  networkParticleSpeed = 0,
  networkLineOpacity = 0,
  // Blob props
  blobColors = [],
  blobCount = 0,
  blobSize = 0,
  blobSpeed = 0,
  // Glitch props
  glitchBaseColor = '',
  glitchColors = [],
  glitchIntensity = 0,
  glitchSpeed = 0,
  // Stars props
  starCount = 0,
  starBackgroundColor = '',
  starColors = [],
  starSpeed = 0,
  starDepth = 0,
  // Noise props
  noiseBaseColor = '',
  noiseOpacity = 0,
  noiseSpeed = 0,
  noiseSize = 0,
  // Color transition props
  colorTransitionColors = [],
  colorTransitionSpeed = 0,
  colorTransitionBlendMode = ''
}) => {
  switch (animationType) {
    case 'gradient':
      return (
        <GradientAnimation 
          colors={gradientColors} 
          duration={gradientDuration} 
          angle={gradientAngle} 
        />
      );
    case 'particles':
      return (
        <ParticlesAnimation 
          particleCount={particleCount}
          colors={particleColors}
          minSize={minParticleSize}
          maxSize={maxParticleSize}
          speed={particleSpeed}
        />
      );
    case 'waves':
      return (
        <WaveAnimation 
          waveCount={waveCount}
          colors={waveColors}
          speed={waveSpeed}
          height={waveHeight}
        />
      );
    case 'parallax':
      return (
        <ParallaxAnimation 
          layerCount={parallaxLayers}
          images={parallaxImages}
          sensitivity={parallaxSensitivity}
        />
      );
    case 'network':
      return (
        <NetworkAnimation 
          particleCount={networkParticleCount}
          colors={networkColors}
          maxDistance={networkMaxDistance}
          particleSpeed={networkParticleSpeed}
          lineOpacity={networkLineOpacity}
        />
      );
    case 'blobs':
      return (
        <BlobAnimation
          colors={blobColors}
          count={blobCount}
          size={blobSize}
          speed={blobSpeed}
        />
      );
    case 'glitch':
      return (
        <GlitchAnimation
          baseColor={glitchBaseColor}
          glitchColors={glitchColors}
          intensity={glitchIntensity}
          speed={glitchSpeed}
        />
      );
    case 'stars':
      return (
        <StarsAnimation
          starCount={starCount}
          backgroundColor={starBackgroundColor}
          starColors={starColors}
          speed={starSpeed}
          depth={starDepth}
        />
      );
    case 'noise':
      return (
        <NoiseAnimation
          baseColor={noiseBaseColor}
          noiseOpacity={noiseOpacity}
          noiseSpeed={noiseSpeed}
          noiseSize={noiseSize}
        />
      );
    case 'colorTransition':
      return (
        <ColorTransitionAnimation
          colors={colorTransitionColors}
          transitionSpeed={colorTransitionSpeed}
          blendMode={colorTransitionBlendMode}
        />
      );
    default:
      return null;
  }
};

export default AnimationRenderer;

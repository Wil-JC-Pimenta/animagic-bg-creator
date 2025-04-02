
import React from 'react';
import ControlsWrapper from './ControlsWrapper';
import GradientControls from './GradientControls';
import ParticlesControls from './ParticlesControls';
import WaveControls from './WaveControls';
import ParallaxControls from './ParallaxControls';
import NetworkControls from './NetworkControls';
import BlobControls from './BlobControls';
import GlitchControls from './GlitchControls';
import StarsControls from './StarsControls';
import NoiseControls from './NoiseControls';
import ColorTransitionControls from './ColorTransitionControls';

type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

interface ControlsSectionProps {
  animationType: AnimationType;
  // Original animation settings
  gradientColors: string[];
  setGradientColors: (colors: string[]) => void;
  gradientDuration: number;
  setGradientDuration: (duration: number) => void;
  gradientAngle: number;
  setGradientAngle: (angle: number) => void;
  
  particleColors: string[];
  setParticleColors: (colors: string[]) => void;
  particleCount: number;
  setParticleCount: (count: number) => void;
  minParticleSize: number;
  setMinParticleSize: (size: number) => void;
  maxParticleSize: number;
  setMaxParticleSize: (size: number) => void;
  particleSpeed: number;
  setParticleSpeed: (speed: number) => void;
  
  waveColors: string[];
  setWaveColors: (colors: string[]) => void;
  waveCount: number;
  setWaveCount: (count: number) => void;
  waveSpeed: number;
  setWaveSpeed: (speed: number) => void;
  waveHeight: number;
  setWaveHeight: (height: number) => void;
  
  parallaxLayers: number;
  setParallaxLayers: (layers: number) => void;
  parallaxImages: string[];
  setParallaxImages: (images: string[]) => void;
  parallaxSensitivity: number;
  setParallaxSensitivity: (sensitivity: number) => void;
  
  networkColors: string[];
  setNetworkColors: (colors: string[]) => void;
  networkParticleCount: number;
  setNetworkParticleCount: (count: number) => void;
  networkMaxDistance: number;
  setNetworkMaxDistance: (distance: number) => void;
  networkParticleSpeed: number;
  setNetworkParticleSpeed: (speed: number) => void;
  networkLineOpacity: number;
  setNetworkLineOpacity: (opacity: number) => void;
  
  // New animation settings
  blobColors: string[];
  setBlobColors: (colors: string[]) => void;
  blobCount: number;
  setBlobCount: (count: number) => void;
  blobSize: number;
  setBlobSize: (size: number) => void;
  blobSpeed: number;
  setBlobSpeed: (speed: number) => void;
  
  glitchBaseColor: string;
  setGlitchBaseColor: (color: string) => void;
  glitchColors: string[];
  setGlitchColors: (colors: string[]) => void;
  glitchIntensity: number;
  setGlitchIntensity: (intensity: number) => void;
  glitchSpeed: number;
  setGlitchSpeed: (speed: number) => void;
  
  starCount: number;
  setStarCount: (count: number) => void;
  starBackgroundColor: string;
  setStarBackgroundColor: (color: string) => void;
  starColors: string[];
  setStarColors: (colors: string[]) => void;
  starSpeed: number;
  setStarSpeed: (speed: number) => void;
  starDepth: number;
  setStarDepth: (depth: number) => void;
  
  noiseBaseColor: string;
  setNoiseBaseColor: (color: string) => void;
  noiseOpacity: number;
  setNoiseOpacity: (opacity: number) => void;
  noiseSpeed: number;
  setNoiseSpeed: (speed: number) => void;
  noiseSize: number;
  setNoiseSize: (size: number) => void;
  
  colorTransitionColors: string[];
  setColorTransitionColors: (colors: string[]) => void;
  colorTransitionSpeed: number;
  setColorTransitionSpeed: (speed: number) => void;
  colorTransitionBlendMode: string;
  setColorTransitionBlendMode: (mode: string) => void;
}

const ControlsSection: React.FC<ControlsSectionProps> = (props) => {
  const renderControls = () => {
    const { animationType } = props;

    switch (animationType) {
      case 'gradient':
        return (
          <GradientControls 
            colors={props.gradientColors}
            setColors={props.setGradientColors}
            duration={props.gradientDuration}
            setDuration={props.setGradientDuration}
            angle={props.gradientAngle}
            setAngle={props.setGradientAngle}
          />
        );
      
      case 'particles':
        return (
          <ParticlesControls 
            colors={props.particleColors}
            setColors={props.setParticleColors}
            particleCount={props.particleCount}
            setParticleCount={props.setParticleCount}
            minSize={props.minParticleSize}
            setMinSize={props.setMinParticleSize}
            maxSize={props.maxParticleSize}
            setMaxSize={props.setMaxParticleSize}
            speed={props.particleSpeed}
            setSpeed={props.setParticleSpeed}
          />
        );
      
      case 'waves':
        return (
          <WaveControls 
            colors={props.waveColors}
            setColors={props.setWaveColors}
            waveCount={props.waveCount}
            setWaveCount={props.setWaveCount}
            speed={props.waveSpeed}
            setSpeed={props.setWaveSpeed}
            height={props.waveHeight}
            setHeight={props.setWaveHeight}
          />
        );
      
      case 'parallax':
        return (
          <ParallaxControls 
            layerCount={props.parallaxLayers}
            setLayerCount={props.setParallaxLayers}
            images={props.parallaxImages}
            setImages={props.setParallaxImages}
            sensitivity={props.parallaxSensitivity}
            setSensitivity={props.setParallaxSensitivity}
          />
        );
      
      case 'network':
        return (
          <NetworkControls 
            colors={props.networkColors}
            setColors={props.setNetworkColors}
            particleCount={props.networkParticleCount}
            setParticleCount={props.setNetworkParticleCount}
            maxDistance={props.networkMaxDistance}
            setMaxDistance={props.setNetworkMaxDistance}
            particleSpeed={props.networkParticleSpeed}
            setParticleSpeed={props.setNetworkParticleSpeed}
            lineOpacity={props.networkLineOpacity}
            setLineOpacity={props.setNetworkLineOpacity}
          />
        );
      
      case 'blobs':
        return (
          <BlobControls
            colors={props.blobColors}
            setColors={props.setBlobColors}
            count={props.blobCount}
            setCount={props.setBlobCount}
            size={props.blobSize}
            setSize={props.setBlobSize}
            speed={props.blobSpeed}
            setSpeed={props.setBlobSpeed}
          />
        );
      
      case 'glitch':
        return (
          <GlitchControls
            baseColor={props.glitchBaseColor}
            setBaseColor={props.setGlitchBaseColor}
            glitchColors={props.glitchColors}
            setGlitchColors={props.setGlitchColors}
            intensity={props.glitchIntensity}
            setIntensity={props.setGlitchIntensity}
            speed={props.glitchSpeed}
            setSpeed={props.setGlitchSpeed}
          />
        );
      
      case 'stars':
        return (
          <StarsControls
            starCount={props.starCount}
            setStarCount={props.setStarCount}
            backgroundColor={props.starBackgroundColor}
            setBackgroundColor={props.setStarBackgroundColor}
            starColors={props.starColors}
            setStarColors={props.setStarColors}
            speed={props.starSpeed}
            setSpeed={props.setStarSpeed}
            depth={props.starDepth}
            setDepth={props.setStarDepth}
          />
        );
      
      case 'noise':
        return (
          <NoiseControls
            baseColor={props.noiseBaseColor}
            setBaseColor={props.setNoiseBaseColor}
            noiseOpacity={props.noiseOpacity}
            setNoiseOpacity={props.setNoiseOpacity}
            noiseSpeed={props.noiseSpeed}
            setNoiseSpeed={props.setNoiseSpeed}
            noiseSize={props.noiseSize}
            setNoiseSize={props.setNoiseSize}
          />
        );
      
      case 'colorTransition':
        return (
          <ColorTransitionControls
            colors={props.colorTransitionColors}
            setColors={props.setColorTransitionColors}
            transitionSpeed={props.colorTransitionSpeed}
            setTransitionSpeed={props.setColorTransitionSpeed}
            blendMode={props.colorTransitionBlendMode}
            setBlendMode={props.setColorTransitionBlendMode}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <ControlsWrapper title="Personalizar Animação">
      {renderControls()}
    </ControlsWrapper>
  );
};

export default ControlsSection;

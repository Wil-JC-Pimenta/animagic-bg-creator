
import { AnimationType, AnimationSettings } from '@/types/animation';

export const createAnimationSettings = (
  animationType: AnimationType,
  state: Record<string, any>
): AnimationSettings => {
  switch (animationType) {
    case 'gradient':
      return {
        type: 'gradient',
        settings: {
          colors: state.gradientColors,
          duration: state.gradientDuration,
          angle: state.gradientAngle,
        },
      };
    case 'particles':
      return {
        type: 'particles',
        settings: {
          particleCount: state.particleCount,
          colors: state.particleColors,
          minSize: state.minParticleSize,
          maxSize: state.maxParticleSize,
          speed: state.particleSpeed,
        },
      };
    case 'waves':
      return {
        type: 'waves',
        settings: {
          waveCount: state.waveCount,
          colors: state.waveColors,
          speed: state.waveSpeed,
          height: state.waveHeight,
        },
      };
    case 'parallax':
      return {
        type: 'parallax',
        settings: {
          layerCount: state.parallaxLayers,
          images: state.parallaxImages,
          sensitivity: state.parallaxSensitivity,
        },
      };
    case 'network':
      return {
        type: 'network',
        settings: {
          particleCount: state.networkParticleCount,
          colors: state.networkColors,
          maxDistance: state.networkMaxDistance,
          particleSpeed: state.networkParticleSpeed,
          lineOpacity: state.networkLineOpacity,
        },
      };
    case 'blobs':
      return {
        type: 'blobs',
        settings: {
          colors: state.blobColors,
          count: state.blobCount,
          size: state.blobSize,
          speed: state.blobSpeed,
        },
      };
    case 'glitch':
      return {
        type: 'glitch',
        settings: {
          baseColor: state.glitchBaseColor,
          glitchColors: state.glitchColors,
          intensity: state.glitchIntensity,
          speed: state.glitchSpeed,
        },
      };
    case 'stars':
      return {
        type: 'stars',
        settings: {
          starCount: state.starCount,
          backgroundColor: state.starBackgroundColor,
          starColors: state.starColors,
          speed: state.starSpeed,
          depth: state.starDepth,
        },
      };
    case 'noise':
      return {
        type: 'noise',
        settings: {
          baseColor: state.noiseBaseColor,
          noiseOpacity: state.noiseOpacity,
          noiseSpeed: state.noiseSpeed,
          noiseSize: state.noiseSize,
        },
      };
    case 'colorTransition':
      return {
        type: 'colorTransition',
        settings: {
          colors: state.colorTransitionColors,
          transitionSpeed: state.colorTransitionSpeed,
          blendMode: state.colorTransitionBlendMode,
        },
      };
    default:
      return {
        type: 'gradient',
        settings: {
          colors: state.gradientColors,
          duration: state.gradientDuration,
          angle: state.gradientAngle,
        },
      };
  }
};

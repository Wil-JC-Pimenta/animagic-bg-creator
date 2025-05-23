
import { useState, useEffect } from 'react';
import { AnimationType, AnimationState } from '@/types/animation';
import { generateCode } from '@/utils/codeGenerator';
import { createAnimationSettings } from '@/utils/createAnimationSettings';

// Import individual state hooks
import { useGradientState } from './animations/useGradientState';
import { useParticlesState } from './animations/useParticlesState';
import { useWaveState } from './animations/useWaveState';
import { useParallaxState } from './animations/useParallaxState';
import { useNetworkState } from './animations/useNetworkState';
import { useBlobState } from './animations/useBlobState';
import { useGlitchState } from './animations/useGlitchState';
import { useStarsState } from './animations/useStarsState';
import { useNoiseState } from './animations/useNoiseState';
import { useColorTransitionState } from './animations/useColorTransitionState';
import { useCodeState } from './animations/useCodeState';

export const useAnimationState = (): AnimationState => {
  // Animation type state
  const [animationType, setAnimationType] = useState<AnimationType>('gradient');
  
  // Individual animation states
  const gradientState = useGradientState();
  const particlesState = useParticlesState();
  const waveState = useWaveState();
  const parallaxState = useParallaxState();
  const networkState = useNetworkState();
  const blobState = useBlobState();
  const glitchState = useGlitchState();
  const starsState = useStarsState();
  const noiseState = useNoiseState();
  const colorTransitionState = useColorTransitionState();
  const codeState = useCodeState();
  
  // Função para forçar a geração de código
  const generateAnimationCode = () => {
    // Combine all states into a single object to be used by createAnimationSettings
    const combinedState = {
      ...gradientState,
      ...particlesState,
      ...waveState,
      ...parallaxState,
      ...networkState,
      ...blobState,
      ...glitchState,
      ...starsState,
      ...noiseState,
      ...colorTransitionState
    };
    
    const animationSettings = createAnimationSettings(animationType, combinedState);
    const { html, css, js } = generateCode(animationSettings);
    
    console.log("Código gerado manualmente:", { html, css, js });
    
    // Set code values using the setters
    if (codeState.setHtmlCode) codeState.setHtmlCode(html);
    if (codeState.setCssCode) codeState.setCssCode(css);
    if (codeState.setJsCode) codeState.setJsCode(js);
  };
  
  // Update code when animation settings change
  useEffect(() => {
    console.log("Atualizando código para animação:", animationType);
    
    // Combine all states into a single object to be used by createAnimationSettings
    const combinedState = {
      ...gradientState,
      ...particlesState,
      ...waveState,
      ...parallaxState,
      ...networkState,
      ...blobState,
      ...glitchState,
      ...starsState,
      ...noiseState,
      ...colorTransitionState
    };
    
    const animationSettings = createAnimationSettings(animationType, combinedState);
    const { html, css, js } = generateCode(animationSettings);
    
    console.log("Código gerado automaticamente:", { html, css, js });
    
    // Set code values using the setters
    if (codeState.setHtmlCode) codeState.setHtmlCode(html);
    if (codeState.setCssCode) codeState.setCssCode(css);
    if (codeState.setJsCode) codeState.setJsCode(js);
  }, [
    animationType,
    // Gradient state
    gradientState.gradientColors, 
    gradientState.gradientDuration, 
    gradientState.gradientAngle,
    // Particles state
    particlesState.particleColors, 
    particlesState.particleCount, 
    particlesState.minParticleSize, 
    particlesState.maxParticleSize, 
    particlesState.particleSpeed,
    // Wave state
    waveState.waveColors, 
    waveState.waveCount, 
    waveState.waveSpeed, 
    waveState.waveHeight,
    // Parallax state
    parallaxState.parallaxLayers, 
    parallaxState.parallaxImages, 
    parallaxState.parallaxSensitivity,
    // Network state
    networkState.networkColors, 
    networkState.networkParticleCount, 
    networkState.networkMaxDistance, 
    networkState.networkParticleSpeed, 
    networkState.networkLineOpacity,
    // Blob state
    blobState.blobColors, 
    blobState.blobCount, 
    blobState.blobSize, 
    blobState.blobSpeed,
    // Glitch state
    glitchState.glitchBaseColor, 
    glitchState.glitchColors, 
    glitchState.glitchIntensity, 
    glitchState.glitchSpeed,
    // Stars state
    starsState.starCount, 
    starsState.starBackgroundColor, 
    starsState.starColors, 
    starsState.starSpeed, 
    starsState.starDepth,
    // Noise state
    noiseState.noiseBaseColor, 
    noiseState.noiseOpacity, 
    noiseState.noiseSpeed, 
    noiseState.noiseSize,
    // Color transition state
    colorTransitionState.colorTransitionColors, 
    colorTransitionState.colorTransitionSpeed, 
    colorTransitionState.colorTransitionBlendMode,
  ]);
  
  // Combine all states into the single AnimationState interface
  return {
    animationType,
    setAnimationType,
    ...gradientState,
    ...particlesState,
    ...waveState,
    ...parallaxState,
    ...networkState,
    ...blobState,
    ...glitchState,
    ...starsState,
    ...noiseState,
    ...colorTransitionState,
    ...codeState,
    generateAnimationCode // Adicionamos essa função para uso externo
  };
};

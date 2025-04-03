
export type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

export interface GradientState {
  gradientColors: string[];
  gradientDuration: number;
  gradientAngle: number;
}

export interface ParticlesState {
  particleColors: string[];
  particleCount: number;
  minParticleSize: number;
  maxParticleSize: number;
  particleSpeed: number;
}

export interface WaveState {
  waveColors: string[];
  waveCount: number;
  waveSpeed: number;
  waveHeight: number;
}

export interface ParallaxState {
  parallaxLayers: number;
  parallaxImages: string[];
  parallaxSensitivity: number;
}

export interface NetworkState {
  networkColors: string[];
  networkParticleCount: number;
  networkMaxDistance: number;
  networkParticleSpeed: number;
  networkLineOpacity: number;
}

export interface BlobState {
  blobColors: string[];
  blobCount: number;
  blobSize: number;
  blobSpeed: number;
}

export interface GlitchState {
  glitchBaseColor: string;
  glitchColors: string[];
  glitchIntensity: number;
  glitchSpeed: number;
}

export interface StarsState {
  starCount: number;
  starBackgroundColor: string;
  starColors: string[];
  starSpeed: number;
  starDepth: number;
}

export interface NoiseState {
  noiseBaseColor: string;
  noiseOpacity: number;
  noiseSpeed: number;
  noiseSize: number;
}

export interface ColorTransitionState {
  colorTransitionColors: string[];
  colorTransitionSpeed: number;
  colorTransitionBlendMode: string;
}

export interface CodeState {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  setHtmlCode?: (html: string) => void;
  setCssCode?: (css: string) => void;
  setJsCode?: (js: string) => void;
}

export interface AnimationState extends 
  GradientState, 
  ParticlesState, 
  WaveState, 
  ParallaxState, 
  NetworkState, 
  BlobState, 
  GlitchState, 
  StarsState, 
  NoiseState, 
  ColorTransitionState, 
  CodeState {
  animationType: AnimationType;
  setAnimationType: (type: AnimationType) => void;
  
  // State setters
  setGradientColors: (colors: string[]) => void;
  setGradientDuration: (duration: number) => void;
  setGradientAngle: (angle: number) => void;
  setParticleColors: (colors: string[]) => void;
  setParticleCount: (count: number) => void;
  setMinParticleSize: (size: number) => void;
  setMaxParticleSize: (size: number) => void;
  setParticleSpeed: (speed: number) => void;
  setWaveColors: (colors: string[]) => void;
  setWaveCount: (count: number) => void;
  setWaveSpeed: (speed: number) => void;
  setWaveHeight: (height: number) => void;
  setParallaxLayers: (layers: number) => void;
  setParallaxImages: (images: string[]) => void;
  setParallaxSensitivity: (sensitivity: number) => void;
  setNetworkColors: (colors: string[]) => void;
  setNetworkParticleCount: (count: number) => void;
  setNetworkMaxDistance: (distance: number) => void;
  setNetworkParticleSpeed: (speed: number) => void;
  setNetworkLineOpacity: (opacity: number) => void;
  setBlobColors: (colors: string[]) => void;
  setBlobCount: (count: number) => void;
  setBlobSize: (size: number) => void;
  setBlobSpeed: (speed: number) => void;
  setGlitchBaseColor: (color: string) => void;
  setGlitchColors: (colors: string[]) => void;
  setGlitchIntensity: (intensity: number) => void;
  setGlitchSpeed: (speed: number) => void;
  setStarCount: (count: number) => void;
  setStarBackgroundColor: (color: string) => void;
  setStarColors: (colors: string[]) => void;
  setStarSpeed: (speed: number) => void;
  setStarDepth: (depth: number) => void;
  setNoiseBaseColor: (color: string) => void;
  setNoiseOpacity: (opacity: number) => void;
  setNoiseSpeed: (speed: number) => void;
  setNoiseSize: (size: number) => void;
  setColorTransitionColors: (colors: string[]) => void;
  setColorTransitionSpeed: (speed: number) => void;
  setColorTransitionBlendMode: (mode: string) => void;
  
  // Function to manually generate animation code
  generateAnimationCode: () => void;
}

export interface GradientSettings {
  colors: string[];
  duration: number;
  angle: number;
}

export interface ParticlesSettings {
  particleCount: number;
  colors: string[];
  minSize: number;
  maxSize: number;
  speed: number;
}

export interface WaveSettings {
  waveCount: number;
  colors: string[];
  speed: number;
  height: number;
}

export interface ParallaxSettings {
  layerCount: number;
  images: string[];
  sensitivity: number;
}

export interface NetworkSettings {
  particleCount: number;
  colors: string[];
  maxDistance: number;
  particleSpeed: number;
  lineOpacity: number;
}

export interface BlobSettings {
  colors: string[];
  count: number;
  size: number;
  speed: number;
}

export interface GlitchSettings {
  baseColor: string;
  glitchColors: string[];
  intensity: number;
  speed: number;
}

export interface StarsSettings {
  starCount: number;
  backgroundColor: string;
  starColors: string[];
  speed: number;
  depth: number;
}

export interface NoiseSettings {
  baseColor: string;
  noiseOpacity: number;
  noiseSpeed: number;
  noiseSize: number;
}

export interface ColorTransitionSettings {
  colors: string[];
  transitionSpeed: number;
  blendMode: string;
}

export type AnimationSettings = 
  | { type: 'gradient'; settings: GradientSettings }
  | { type: 'particles'; settings: ParticlesSettings }
  | { type: 'waves'; settings: WaveSettings }
  | { type: 'parallax'; settings: ParallaxSettings }
  | { type: 'network'; settings: NetworkSettings }
  | { type: 'blobs'; settings: BlobSettings }
  | { type: 'glitch'; settings: GlitchSettings }
  | { type: 'stars'; settings: StarsSettings }
  | { type: 'noise'; settings: NoiseSettings }
  | { type: 'colorTransition'; settings: ColorTransitionSettings };

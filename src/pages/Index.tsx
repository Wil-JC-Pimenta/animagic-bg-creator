
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import AnimationSelector from '@/components/AnimationSelector';
import PreviewSection from '@/components/PreviewSection';
import ControlsSection from '@/components/ControlsSection';
import CodeExport from '@/components/CodeExport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimationState } from '@/hooks/useAnimationState';

const Index = () => {
  const animationState = useAnimationState();
  
  return (
    <MainLayout>
      {/* Animation Preview */}
      <PreviewSection 
        animationType={animationState.animationType}
        gradientColors={animationState.gradientColors}
        gradientDuration={animationState.gradientDuration}
        gradientAngle={animationState.gradientAngle}
        particleColors={animationState.particleColors}
        particleCount={animationState.particleCount}
        minParticleSize={animationState.minParticleSize}
        maxParticleSize={animationState.maxParticleSize}
        particleSpeed={animationState.particleSpeed}
        waveColors={animationState.waveColors}
        waveCount={animationState.waveCount}
        waveSpeed={animationState.waveSpeed}
        waveHeight={animationState.waveHeight}
        parallaxLayers={animationState.parallaxLayers}
        parallaxImages={animationState.parallaxImages}
        parallaxSensitivity={animationState.parallaxSensitivity}
        networkColors={animationState.networkColors}
        networkParticleCount={animationState.networkParticleCount}
        networkMaxDistance={animationState.networkMaxDistance}
        networkParticleSpeed={animationState.networkParticleSpeed}
        networkLineOpacity={animationState.networkLineOpacity}
        blobColors={animationState.blobColors}
        blobCount={animationState.blobCount}
        blobSize={animationState.blobSize}
        blobSpeed={animationState.blobSpeed}
        glitchBaseColor={animationState.glitchBaseColor}
        glitchColors={animationState.glitchColors}
        glitchIntensity={animationState.glitchIntensity}
        glitchSpeed={animationState.glitchSpeed}
        starCount={animationState.starCount}
        starBackgroundColor={animationState.starBackgroundColor}
        starColors={animationState.starColors}
        starSpeed={animationState.starSpeed}
        starDepth={animationState.starDepth}
        noiseBaseColor={animationState.noiseBaseColor}
        noiseOpacity={animationState.noiseOpacity}
        noiseSpeed={animationState.noiseSpeed}
        noiseSize={animationState.noiseSize}
        colorTransitionColors={animationState.colorTransitionColors}
        colorTransitionSpeed={animationState.colorTransitionSpeed}
        colorTransitionBlendMode={animationState.colorTransitionBlendMode}
      />
      
      {/* Animation Selector */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select Animation Type</CardTitle>
        </CardHeader>
        <CardContent>
          <AnimationSelector 
            selected={animationState.animationType} 
            onChange={animationState.setAnimationType} 
          />
        </CardContent>
      </Card>
      
      {/* Animation Controls and Code Export */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <ControlsSection 
          animationType={animationState.animationType}
          gradientColors={animationState.gradientColors}
          setGradientColors={animationState.setGradientColors}
          gradientDuration={animationState.gradientDuration}
          setGradientDuration={animationState.setGradientDuration}
          gradientAngle={animationState.gradientAngle}
          setGradientAngle={animationState.setGradientAngle}
          particleColors={animationState.particleColors}
          setParticleColors={animationState.setParticleColors}
          particleCount={animationState.particleCount}
          setParticleCount={animationState.setParticleCount}
          minParticleSize={animationState.minParticleSize}
          setMinParticleSize={animationState.setMinParticleSize}
          maxParticleSize={animationState.maxParticleSize}
          setMaxParticleSize={animationState.setMaxParticleSize}
          particleSpeed={animationState.particleSpeed}
          setParticleSpeed={animationState.setParticleSpeed}
          waveColors={animationState.waveColors}
          setWaveColors={animationState.setWaveColors}
          waveCount={animationState.waveCount}
          setWaveCount={animationState.setWaveCount}
          waveSpeed={animationState.waveSpeed}
          setWaveSpeed={animationState.setWaveSpeed}
          waveHeight={animationState.waveHeight}
          setWaveHeight={animationState.setWaveHeight}
          parallaxLayers={animationState.parallaxLayers}
          setParallaxLayers={animationState.setParallaxLayers}
          parallaxImages={animationState.parallaxImages}
          setParallaxImages={animationState.setParallaxImages}
          parallaxSensitivity={animationState.parallaxSensitivity}
          setParallaxSensitivity={animationState.setParallaxSensitivity}
          networkColors={animationState.networkColors}
          setNetworkColors={animationState.setNetworkColors}
          networkParticleCount={animationState.networkParticleCount}
          setNetworkParticleCount={animationState.setNetworkParticleCount}
          networkMaxDistance={animationState.networkMaxDistance}
          setNetworkMaxDistance={animationState.setNetworkMaxDistance}
          networkParticleSpeed={animationState.networkParticleSpeed}
          setNetworkParticleSpeed={animationState.setNetworkParticleSpeed}
          networkLineOpacity={animationState.networkLineOpacity}
          setNetworkLineOpacity={animationState.setNetworkLineOpacity}
          blobColors={animationState.blobColors}
          setBlobColors={animationState.setBlobColors}
          blobCount={animationState.blobCount}
          setBlobCount={animationState.setBlobCount}
          blobSize={animationState.blobSize}
          setBlobSize={animationState.setBlobSize}
          blobSpeed={animationState.blobSpeed}
          setBlobSpeed={animationState.setBlobSpeed}
          glitchBaseColor={animationState.glitchBaseColor}
          setGlitchBaseColor={animationState.setGlitchBaseColor}
          glitchColors={animationState.glitchColors}
          setGlitchColors={animationState.setGlitchColors}
          glitchIntensity={animationState.glitchIntensity}
          setGlitchIntensity={animationState.setGlitchIntensity}
          glitchSpeed={animationState.glitchSpeed}
          setGlitchSpeed={animationState.setGlitchSpeed}
          starCount={animationState.starCount}
          setStarCount={animationState.setStarCount}
          starBackgroundColor={animationState.starBackgroundColor}
          setStarBackgroundColor={animationState.setStarBackgroundColor}
          starColors={animationState.starColors}
          setStarColors={animationState.setStarColors}
          starSpeed={animationState.starSpeed}
          setStarSpeed={animationState.setStarSpeed}
          starDepth={animationState.starDepth}
          setStarDepth={animationState.setStarDepth}
          noiseBaseColor={animationState.noiseBaseColor}
          setNoiseBaseColor={animationState.setNoiseBaseColor}
          noiseOpacity={animationState.noiseOpacity}
          setNoiseOpacity={animationState.setNoiseOpacity}
          noiseSpeed={animationState.noiseSpeed}
          setNoiseSpeed={animationState.setNoiseSpeed}
          noiseSize={animationState.noiseSize}
          setNoiseSize={animationState.setNoiseSize}
          colorTransitionColors={animationState.colorTransitionColors}
          setColorTransitionColors={animationState.setColorTransitionColors}
          colorTransitionSpeed={animationState.colorTransitionSpeed}
          setColorTransitionSpeed={animationState.setColorTransitionSpeed}
          colorTransitionBlendMode={animationState.colorTransitionBlendMode}
          setColorTransitionBlendMode={animationState.setColorTransitionBlendMode}
        />
        
        {/* Code Export */}
        <div>
          <CodeExport 
            htmlCode={animationState.htmlCode}
            cssCode={animationState.cssCode}
            jsCode={animationState.jsCode}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;

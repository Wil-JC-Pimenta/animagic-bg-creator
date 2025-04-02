// Function to generate code for different animation types

type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

interface GradientSettings {
  colors: string[];
  duration: number;
  angle: number;
}

interface ParticlesSettings {
  particleCount: number;
  colors: string[];
  minSize: number;
  maxSize: number;
  speed: number;
}

interface WavesSettings {
  waveCount: number;
  colors: string[];
  speed: number;
  height: number;
}

interface ParallaxSettings {
  layerCount: number;
  images: string[];
  sensitivity: number;
}

interface NetworkSettings {
  particleCount: number;
  colors: string[];
  maxDistance: number;
  particleSpeed: number;
  lineOpacity: number;
}

interface BlobsSettings {
  colors: string[];
  count: number;
  size: number;
  speed: number;
}

interface GlitchSettings {
  baseColor: string;
  glitchColors: string[];
  intensity: number;
  speed: number;
}

interface StarsSettings {
  starCount: number;
  backgroundColor: string;
  starColors: string[];
  speed: number;
  depth: number;
}

interface NoiseSettings {
  baseColor: string;
  noiseOpacity: number;
  noiseSpeed: number;
  noiseSize: number;
}

interface ColorTransitionSettings {
  colors: string[];
  transitionSpeed: number;
  blendMode: string;
}

type AnimationSettings = 
  | { type: 'gradient'; settings: GradientSettings }
  | { type: 'particles'; settings: ParticlesSettings }
  | { type: 'waves'; settings: WavesSettings }
  | { type: 'parallax'; settings: ParallaxSettings }
  | { type: 'network'; settings: NetworkSettings }
  | { type: 'blobs'; settings: BlobsSettings }
  | { type: 'glitch'; settings: GlitchSettings }
  | { type: 'stars'; settings: StarsSettings }
  | { type: 'noise'; settings: NoiseSettings }
  | { type: 'colorTransition'; settings: ColorTransitionSettings };

interface GeneratedCode {
  html: string;
  css: string;
  js: string;
}

export const generateCode = (animation: AnimationSettings): GeneratedCode => {
  switch (animation.type) {
    case 'gradient':
      return generateGradientCode(animation.settings);
    case 'particles':
      return generateParticlesCode(animation.settings);
    case 'waves':
      return generateWavesCode(animation.settings);
    case 'parallax':
      return generateParallaxCode(animation.settings);
    case 'network':
      return generateNetworkCode(animation.settings);
    case 'blobs':
      return generateBlobsCode(animation.settings);
    case 'glitch':
      return generateGlitchCode(animation.settings);
    case 'stars':
      return generateStarsCode(animation.settings);
    case 'noise':
      return generateNoiseCode(animation.settings);
    case 'colorTransition':
      return generateColorTransitionCode(animation.settings);
    default:
      return {
        html: '',
        css: '',
        js: '',
      };
  }
};

const generateGradientCode = (settings: GradientSettings): GeneratedCode => {
  const { colors, duration, angle } = settings;
  const colorList = colors.join(', ');
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gradient Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="gradient-bg"></div>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(${angle}deg, ${colorList});
  background-size: 300% 300%;
  animation: gradientAnimation ${duration}s ease infinite;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,

    js: `// No JavaScript required for this animation!
// You can add interactivity here if needed.`,
  };
};

const generateParticlesCode = (settings: ParticlesSettings): GeneratedCode => {
  const { particleCount, colors, minSize, maxSize, speed } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Particles Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="particles-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

#particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: particleAnimation var(--duration) linear infinite;
}

@keyframes particleAnimation {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-50vh); opacity: 0; }
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('particles-container');
  const colors = ${JSON.stringify(colors)};
  const particleCount = ${particleCount};
  const minSize = ${minSize};
  const maxSize = ${maxSize};
  const speed = ${speed};
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    
    // Random size between min and max
    const size = Math.random() * (maxSize - minSize) + minSize;
    
    // Random color from colors array
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random delay for animation
    const delay = Math.random() * speed;
    
    // Set styles
    particle.style.left = \`\${xPos}%\`;
    particle.style.top = \`\${yPos}%\`;
    particle.style.width = \`\${size}px\`;
    particle.style.height = \`\${size}px\`;
    particle.style.backgroundColor = color;
    particle.style.setProperty('--duration', \`\${speed}s\`);
    particle.style.animationDelay = \`\${delay}s\`;
    
    container.appendChild(particle);
  }
});`,
  };
};

const generateWavesCode = (settings: WavesSettings): GeneratedCode => {
  const { waveCount, colors, speed, height } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wave Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="wave-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

#wave-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: ${height}%;
  animation: waveAnimation var(--duration) linear infinite;
}

@keyframes waveAnimation {
  0% { transform: translateX(-100%) translateY(0); }
  50% { transform: translateX(-50%) translateY(2%); }
  100% { transform: translateX(0%) translateY(0); }
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('wave-container');
  const waveCount = ${waveCount};
  const colors = ${JSON.stringify(colors)};
  const speed = ${speed};
  const height = ${height};
  
  // Create waves
  for (let i = 0; i < waveCount; i++) {
    createWave(i);
  }
  
  function createWave(index) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    
    // Wave properties
    const waveHeight = height * (1 - index * 0.2);
    const delay = index * (speed / waveCount);
    const color = colors[index % colors.length];
    
    // Set styles
    wave.style.height = \`\${waveHeight}%\`;
    wave.style.setProperty('--duration', \`\${speed}s\`);
    wave.style.animationDelay = \`\${delay}s\`;
    wave.style.bottom = \`\${index * 5}%\`;
    wave.style.background = \`linear-gradient(to bottom, transparent, \${color})\`;
    wave.style.opacity = (1 - index * 0.2).toString();
    
    container.appendChild(wave);
  }
});`,
  };
};

const generateParallaxCode = (settings: ParallaxSettings): GeneratedCode => {
  const { layerCount, images, sensitivity } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parallax Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="parallax-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

#parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  perspective: 1000px;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('parallax-container');
  const layerCount = ${layerCount};
  const images = ${JSON.stringify(images)};
  const sensitivity = ${sensitivity};
  
  // Create layers
  for (let i = 0; i < layerCount; i++) {
    createLayer(i);
  }
  
  function createLayer(index) {
    const layer = document.createElement('div');
    layer.classList.add('parallax-layer');
    
    // Layer properties
    const depth = (index + 1) / layerCount;
    const imageType = images[index % images.length];
    
    // Create pattern based on imageType
    let pattern = '';
    const color = \`rgba(255, 255, 255, \${0.1 * (index + 1)})\`;
    
    if (imageType === 'circles') {
      // Generate circles pattern
      for (let j = 0; j < 20; j++) {
        const size = Math.random() * 20 + 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const element = document.createElement('div');
        
        element.style.position = 'absolute';
        element.style.top = \`\${y}%\`;
        element.style.left = \`\${x}%\`;
        element.style.width = \`\${size}px\`;
        element.style.height = \`\${size}px\`;
        element.style.borderRadius = '50%';
        element.style.background = color;
        
        layer.appendChild(element);
      }
    } else if (imageType === 'stars') {
      // Generate stars pattern
      for (let j = 0; j < 30; j++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const element = document.createElement('div');
        
        element.style.position = 'absolute';
        element.style.top = \`\${y}%\`;
        element.style.left = \`\${x}%\`;
        element.style.width = \`\${size}px\`;
        element.style.height = \`\${size}px\`;
        element.style.background = color;
        
        layer.appendChild(element);
      }
    } else if (imageType === 'dots') {
      // Generate dots pattern
      for (let j = 0; j < 50; j++) {
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const element = document.createElement('div');
        
        element.style.position = 'absolute';
        element.style.top = \`\${y}%\`;
        element.style.left = \`\${x}%\`;
        element.style.width = \`\${size}px\`;
        element.style.height = \`\${size}px\`;
        element.style.borderRadius = '50%';
        element.style.background = color;
        
        layer.appendChild(element);
      }
    }
    
    layer.style.zIndex = (0 - index).toString();
    container.appendChild(layer);
  }
  
  // Add parallax effect
  document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.parallax-layer');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mouseX - centerX) / sensitivity;
    const deltaY = (mouseY - centerY) / sensitivity;
    
    layers.forEach(function(layer, index) {
      const depth = (index + 1) / layers.length;
      const moveX = deltaX * depth;
      const moveY = deltaY * depth;
      
      layer.style.transform = \`translate3d(\${moveX}px, \${moveY}px, 0)\`;
    });
  });
});`,
  };
};

const generateNetworkCode = (settings: NetworkSettings): GeneratedCode => {
  const { particleCount, colors, maxDistance, particleSpeed, lineOpacity } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Network Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="network-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

#network-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('network-container');
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  // Canvas dimensions
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  // Animation settings
  const particleCount = ${particleCount};
  const colors = ${JSON.stringify(colors)};
  const maxDistance = ${maxDistance};
  const particleSpeed = ${particleSpeed};
  const lineOpacity = ${lineOpacity};
  
  // Particles array
  const particles = [];
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * particleSpeed,
      vy: (Math.random() - 0.5) * particleSpeed,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      
      // Draw particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw connections between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * lineOpacity;
          ctx.strokeStyle = \`rgba(255, 255, 255, \${opacity})\`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  // Optional: Add mouse interaction
  let mouse = { x: null, y: null, radius: maxDistance * 0.5 };
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });
});`,
  };
};

const generateBlobsCode = (settings: BlobsSettings): GeneratedCode => {
  const { colors, count, size, speed } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blobs Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="blobs-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

#blobs-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  filter: blur(5px);
  opacity: 0.7;
  animation: blobMove var(--animation-duration) ease-in-out infinite;
}

@keyframes blobMove {
  0% { 
    transform: translate(0, 0) scale(1) rotate(0deg);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  33% { 
    transform: translate(5%, 5%) scale(1.1) rotate(120deg);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  66% { 
    transform: translate(-5%, -5%) scale(0.9) rotate(240deg);
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% { 
    transform: translate(0, 0) scale(1) rotate(360deg);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('blobs-container');
  const colors = ${JSON.stringify(colors)};
  const blobCount = ${count};
  const blobSize = ${size};
  const animationSpeed = ${speed};
  
  // Create blobs
  for (let i = 0; i < blobCount; i++) {
    createBlob(i);
  }
  
  function createBlob(index) {
    const blob = document.createElement('div');
    blob.classList.add('blob');
    
    // Blob properties
    const color = colors[index % colors.length];
    const randomSize = blobSize * (0.7 + Math.random() * 0.6);
    const randomX = 20 + Math.random() * 60; // Percentage
    const randomY = 20 + Math.random() * 60; // Percentage
    const randomDelay = index * (animationSpeed / blobCount);
    
    // Set styles
    blob.style.background = color;
    blob.style.width = \`\${randomSize}px\`;
    blob.style.height = \`\${randomSize}px\`;
    blob.style.left = \`\${randomX}%\`;
    blob.style.top = \`\${randomY}%\`;
    blob.style.setProperty('--animation-duration', \`\${animationSpeed}s\`);
    blob.style.animationDelay = \`\${randomDelay}s\`;
    
    // Random blob shape
    const borderRadius = [
      40 + Math.random() * 60,
      40 + Math.random() * 60,
      40 + Math.random() * 60,
      40 + Math.random() * 60
    ].join('% ') + '%';
    
    blob.style.borderRadius = borderRadius;
    
    container.appendChild(blob);
  }
});`,
  };
};

const generateGlitchCode = (settings: GlitchSettings): GeneratedCode => {
  const { baseColor, glitchColors, intensity, speed } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glitch Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="glitch-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: ${baseColor};
}

#glitch-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.glitch-base {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: glitchAnimation var(--animation-duration) infinite;
}

.scan-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 0.5%,
    transparent 1%
  );
  animation: scanLine 8s linear infinite;
  pointer-events: none;
}

@keyframes glitchAnimation {
  0% { transform: translate(0); }
  20% { transform: translate(calc(-1 * var(--glitch-intensity)), var(--glitch-intensity)); }
  40% { transform: translate(calc(-1 * var(--glitch-intensity)), calc(-1 * var(--glitch-intensity))); }
  60% { transform: translate(var(--glitch-intensity), var(--glitch-intensity)); }
  80% { transform: translate(var(--glitch-intensity), calc(-1 * var(--glitch-intensity))); }
  100% { transform: translate(0); }
}

@keyframes scanLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('glitch-container');
  const baseColor = "${baseColor}";
  const glitchColors = ${JSON.stringify(glitchColors)};
  const glitchIntensity = ${intensity};
  const glitchSpeed = ${speed};
  
  // Create base layer
  const baseLayer = document.createElement('div');
  baseLayer.classList.add('glitch-base');
  baseLayer.style.backgroundColor = baseColor;
  container.appendChild(baseLayer);
  
  // Create glitch layers
  for (let i = 0; i < glitchColors.length; i++) {
    const glitchLayer = document.createElement('div');
    glitchLayer.classList.add('glitch-layer');
    glitchLayer.style.backgroundColor = glitchColors[i];
    glitchLayer.style.mixBlendMode = 'overlay';
    glitchLayer.style.opacity = (0.5 / glitchColors.length).toString();
    glitchLayer.style.zIndex = (i + 1).toString();
    glitchLayer.style.setProperty('--animation-duration', \`\${glitchSpeed * (1 + Math.random() * 0.5)}s\`);
    glitchLayer.style.animationDelay = \`\${i * 0.1}s\`;
    glitchLayer.style.setProperty('--glitch-intensity', \`\${glitchIntensity}px\`);
    container.appendChild(glitchLayer);
  }
  
  // Create scan line effect
  const scanLines = document.createElement('div');
  scanLines.classList.add('scan-lines');
  container.appendChild(scanLines);
  
  // Function to randomly glitch the text
  function createRandomGlitches() {
    const layers = document.querySelectorAll('.glitch-layer');
    
    // Apply random transform to each layer
    layers.forEach(layer => {
      if (Math.random() > 0.7) {
        const randomX = (Math.random() - 0.5) * glitchIntensity * 2;
        const randomY = (Math.random() - 0.5) * glitchIntensity * 2;
        layer.style.transform = \`translate(\${randomX}px, \${randomY}px)\`;
        
        setTimeout(() => {
          layer.style.transform = 'translate(0, 0)';
        }, Math.random() * 200);
      }
    });
    
    // Schedule next glitch
    setTimeout(createRandomGlitches, 1000 + Math.random() * 2000);
  }
  
  // Start random glitches
  createRandomGlitches();
});`,
  };
};

const generateStarsCode = (settings: StarsSettings): GeneratedCode => {
  const { starCount, backgroundColor, starColors, speed, depth } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stars Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="stars-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: ${backgroundColor};
}

#stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.star-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  border-radius: 50%;
}

.twinkle {
  animation: twinkle var(--star-speed) infinite ease-in-out;
}

@keyframes twinkle {
  0% { opacity: 0.1; }
  50% { opacity: 1; }
  100% { opacity: 0.1; }
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('stars-container');
  const starCount = ${starCount};
  const backgroundColor = "${backgroundColor}";
  const starColors = ${JSON.stringify(starColors)};
  const starSpeed = ${speed};
  const layerDepth = ${depth};
  
  // Create star layers for parallax effect
  for (let d = 0; d < layerDepth; d++) {
    const layerCount = Math.floor(starCount / layerDepth);
    const layerSpeed = starSpeed * (1 - d * 0.2);
    const starSize = 1 + d * 0.5;
    
    const layer = document.createElement('div');
    layer.classList.add('star-layer');
    layer.style.zIndex = d.toString();
    
    for (let i = 0; i < layerCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * layerSpeed;
      const size = (Math.random() * 0.5 + 0.5) * starSize;
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      
      star.style.left = \`\${x}%\`;
      star.style.top = \`\${y}%\`;
      star.style.width = \`\${size}px\`;
      star.style.height = \`\${size}px\`;
      star.style.backgroundColor = color;
      star.style.boxShadow = \`0 0 \${size * 2}px \${color}\`;
      star.style.setProperty('--star-speed', \`\${layerSpeed}s\`);
      star.style.animationDelay = \`\${delay}s\`;
      
      if (Math.random() > 0.7) {
        star.classList.add('twinkle');
      }
      
      layer.appendChild(star);
    }
    
    container.appendChild(layer);
  }
  
  // Add parallax effect with mouse movement (optional)
  document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.star-layer');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mouseX - centerX) / 50;
    const deltaY = (mouseY - centerY) / 50;
    
    layers.forEach(function(layer, index) {
      const depth = (index + 1) / layers.length;
      const moveX = deltaX * depth;
      const moveY = deltaY * depth;
      
      layer.style.transform = \`translate3d(\${moveX}px, \${moveY}px, 0)\`;
    });
  });
});`,
  };
};

const generateNoiseCode = (settings: NoiseSettings): GeneratedCode => {
  const { baseColor, noiseOpacity, noiseSpeed, noiseSize } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Noise Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="noise-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: ${baseColor};
}

#noise-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('noise-container');
  const baseColor = "${baseColor}";
  const noiseOpacity = ${noiseOpacity};
  const noiseSpeed = ${noiseSpeed};
  const noiseSize = ${noiseSize};
  
  // Set container background
  container.style.backgroundColor = baseColor;
  
  // Create canvas for noise
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  // Resize canvas
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Animation variables
  let time = 0;
  
  // Animation loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create noise
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    const gridSize = noiseSize;
    const gridCellSize = Math.max(1, Math.floor(canvas.width / gridSize));
    
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        // Perlin-inspired noise (simplified)
        const value = Math.abs(Math.sin((i + time) * 0.1) * Math.cos((j + time) * 0.1)) * 255;
        
        // Fill grid cell
        for (let x = 0; x < gridCellSize; x++) {
          for (let y = 0; y < gridCellSize; y++) {
            const xPos = i * gridCellSize + x;
            const yPos = j * gridCellSize + y;
            
            if (xPos < canvas.width && yPos < canvas.height) {
              const pixelIndex = (yPos * canvas.width + xPos) * 4;
              data[pixelIndex] = 255;     // R
              data[pixelIndex + 1] = 255; // G
              data[pixelIndex + 2] = 255; // B
              data[pixelIndex + 3] = value * noiseOpacity; // A
            }
          }
        }
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Update time
    time += 0.1 * noiseSpeed;
    
    // Request next frame
    requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
});`,
  };
};

const generateColorTransitionCode = (settings: ColorTransitionSettings): GeneratedCode => {
  const { colors, transitionSpeed, blendMode } = settings;
  
  return {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Transition Background Animation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="color-transition-container"></div>
  
  <script src="script.js"></script>
</body>
</html>`,

    css: `body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#color-transition-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.color-transition-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: colorTransition var(--transition-duration) infinite;
  mix-blend-mode: ${blendMode};
}

@keyframes colorTransition {
  ${colors.map((color, index) => {
    const percentage = Math.round((index / (colors.length - 1)) * 100);
    return `${percentage}% { background-color: ${color}; }`;
  }).join('\n  ')}
}`,

    js: `document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('color-transition-container');
  const colors = ${JSON.stringify(colors)};
  const transitionSpeed = ${transitionSpeed};
  const blendMode = "${blendMode}";
  
  // Create background element
  const background = document.createElement('div');
  background.classList.add('color-transition-bg');
  
  // Set CSS variables
  background.style.setProperty('--transition-duration', \`\${transitionSpeed * colors.length}s\`);
  background.style.mixBlendMode = blendMode;
  
  // Add to container
  container.appendChild(background);
});`,
  };
};

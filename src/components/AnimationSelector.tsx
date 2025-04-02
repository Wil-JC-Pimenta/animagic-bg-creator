import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Palette, 
  Snowflake, 
  Waves, 
  Layers, 
  Network, 
  Circle, 
  Zap, 
  Stars, 
  Scan, 
  Paintbrush 
} from 'lucide-react';

type AnimationType = 'gradient' | 'particles' | 'waves' | 'parallax' | 'network' | 'blobs' | 'glitch' | 'stars' | 'noise' | 'colorTransition';

interface AnimationOption {
  id: AnimationType;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface AnimationSelectorProps {
  selected: AnimationType;
  onChange: (type: AnimationType) => void;
}

const AnimationSelector: React.FC<AnimationSelectorProps> = ({ selected, onChange }) => {
  const options: AnimationOption[] = [
    {
      id: 'gradient',
      label: 'Gradient',
      description: 'Smooth transitioning color gradients',
      icon: (
        <div className="w-full h-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-md animate-gradient">
          <div className="w-full h-full bg-black/20 rounded-md flex items-center justify-center">
            <Palette className="text-white h-8 w-8 opacity-70" />
          </div>
        </div>
      ),
    },
    {
      id: 'particles',
      label: 'Particles',
      description: 'Floating animated particles',
      icon: (
        <div className="w-full h-full bg-indigo-900 rounded-md relative overflow-hidden flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/80 animate-pulse-slow"
              style={{
                width: 4 + i * 2 + 'px',
                height: 4 + i * 2 + 'px',
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          <Snowflake className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'waves',
      label: 'Waves',
      description: 'Undulating wave animations',
      icon: (
        <div className="w-full h-full bg-cyan-900 rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-cyan-500/30 animate-wave rounded-t-2xl" />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-cyan-500/20 animate-wave rounded-t-2xl" style={{ animationDelay: '0.5s' }} />
          <Waves className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'parallax',
      label: 'Parallax',
      description: 'Depth effect that responds to mouse movement',
      icon: (
        <div className="w-full h-full bg-slate-900 rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/80 rounded-full" />
          <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white/60 rounded-full" />
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white/40 rounded-full animate-float" />
          <Layers className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'network',
      label: 'Network',
      description: 'Connected particles forming a dynamic network',
      icon: (
        <div className="w-full h-full bg-slate-900 rounded-md relative overflow-hidden flex items-center justify-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                width: 3 + 'px',
                height: 3 + 'px',
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
          <div className="absolute top-1/4 left-1/4 w-full h-0.5 bg-white/20 -rotate-45 origin-top-left" />
          <div className="absolute top-2/3 left-1/3 w-1/3 h-0.5 bg-white/20 -rotate-12" />
          <Network className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'blobs',
      label: 'Blobs',
      description: 'Organic shape animations',
      icon: (
        <div className="w-full h-full bg-purple-900 rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse-slow" />
          <Circle className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'glitch',
      label: 'Glitch',
      description: 'Digital distortion effects',
      icon: (
        <div className="w-full h-full bg-red-900/80 rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 translate-x-[2px]" />
          <div className="absolute inset-0 bg-red-500/20 -translate-x-[2px]" />
          <Zap className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'stars',
      label: 'Stars',
      description: 'Night sky with twinkling stars',
      icon: (
        <div className="w-full h-full bg-slate-900 rounded-md relative overflow-hidden flex items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/90 animate-pulse"
              style={{
                width: 2 + Math.random() * 2 + 'px',
                height: 2 + Math.random() * 2 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
          <Stars className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'noise',
      label: 'Noise',
      description: 'Dynamic noise patterns and granular effects',
      icon: (
        <div className="w-full h-full bg-gray-800 rounded-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
          }} />
          <Scan className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
    {
      id: 'colorTransition',
      label: 'Color Transition',
      description: 'Smooth color fades and transitions',
      icon: (
        <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-md relative overflow-hidden flex items-center justify-center animate-pulse-slow">
          <Paintbrush className="text-white h-8 w-8 opacity-70" />
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "flex flex-col items-center gap-2 p-4 rounded-lg border transition-all",
            "hover:border-primary",
            selected === option.id
              ? "border-primary bg-primary/5"
              : "border-border bg-secondary/50"
          )}
        >
          <div className="w-full aspect-video mb-2 overflow-hidden rounded-md">
            {option.icon}
          </div>
          <h3 className="font-medium">{option.label}</h3>
          <p className="text-xs text-muted-foreground text-center">
            {option.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default AnimationSelector;

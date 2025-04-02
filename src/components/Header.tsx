
import React from 'react';
import { Wand2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-primary">AnimaGic</h1>
          <span className="text-muted-foreground text-sm">Background Generator</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/your-username/animagic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Share
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

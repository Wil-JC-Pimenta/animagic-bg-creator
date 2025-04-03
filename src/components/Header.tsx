import React, { useState } from "react";
import { Wand2 } from "lucide-react";

const Header = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  // URL and message to be shared
  const shareUrl = encodeURIComponent(
    "https://animagic-bg-creator.vercel.app/"
  );
  const shareText = encodeURIComponent(
    '"Create amazing backgrounds for your projects with Animagic."!'
  );

  const telegramUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
  const whatsappUrl = `https://wa.me/?text=${shareUrl}`;

  return (
    <header className="border-b border-border py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-primary">AnimaGic</h1>
          <span className="text-muted-foreground text-sm">
            Background Generator
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-4 relative">
          <a
            href="https://github.com/Wil-JC-Pimenta/animagic-bg-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>

          <div className="relative">
            <button
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Share
            </button>
            {showShareOptions && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Telegram
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

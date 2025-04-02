
import React from 'react';
import Header from '@/components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6 relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text pb-1">
            AnimaGic Background Generator
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Crie backgrounds animados incríveis em HTML, CSS e JavaScript em segundos
          </p>
          
          {children}
        </div>
      </main>
      
      <footer className="border-t border-border py-4 mt-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>AnimaGic Background Generator &copy; {new Date().getFullYear()} - Gerador de Animações Completo</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

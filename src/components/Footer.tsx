import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-primary/40 bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-center">
        <p className="text-muted-foreground">
          Diseñado por{' '}
          <a
            href="https://advantx.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400 hover:opacity-90"
          >
            AdvantX
          </a>
        </p>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full border border-white/20" />
      </div>
    </footer>
  );
};

export default Footer;



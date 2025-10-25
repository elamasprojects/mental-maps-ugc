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
        <div className="mt-6 flex items-center justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5491157388695"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/20 text-green-400 hover:bg-white/10 transition"
            title="WhatsApp: +54 9 11 5738-8695"
          >
            {/* WhatsApp logo (inline SVG) */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.48 0 .13 5.34.13 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.72a11.92 11.92 0 0 0 5.78 1.5h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.48-8.37ZM12.07 21.3c-1.93 0-3.81-.52-5.46-1.49l-.39-.23-3.73 1.02 1-3.64-.25-.37a9.43 9.43 0 0 1-1.47-5.07c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.68 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43Zm5.4-7.04c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.42-1.7-1.58-1.98-.16-.29-.02-.44.13-.59.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.4 1.03 2.75 1.17 2.94.15.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



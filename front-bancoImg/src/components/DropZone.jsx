// components/DropZone.js
import React from 'react';

const DropZone = ({ onDrop }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div 
        onClick={onDrop}
        className="rounded-2xl border-2 border-dashed border-white/20 bg-ink-800/60 hover:bg-ink-700/50 transition p-6 lg:p-8 text-center hover-rise cursor-pointer"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 16V4M7 9l5-5 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="3" y="14" width="18" height="6" rx="2" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <div className="font-display text-lg font-bold text-white">Arrastra aquí tus imágenes</div>
            <div className="text-white/70 text-sm">o haz clic en "Subir"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropZone;
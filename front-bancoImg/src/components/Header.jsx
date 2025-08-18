// components/Header.js
import React from 'react';

const Header = ({ 
  currentProject, 
  albumTag, 
  onMobileMenu,
  onLayoutGrid,
  onLayoutList 
}) => {
  return (
    <header className="sticky top-0 z-10 bg-ink-900/80 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMobileMenu}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl grid place-items-center shadow-glow font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${currentProject?.color || '#1b96ff'}, rgba(255,255,255,.2))` }}
              >
                {currentProject?.name?.slice(0,1).toUpperCase() || 'P'}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="font-display text-xl font-extrabold leading-tight truncate text-white">
                    {currentProject?.name || 'Proyecto'}
                  </div>
                  {albumTag && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                      Álbum: {albumTag}
                    </span>
                  )}
                </div>
                <div className="text-white/60 text-xs line-clamp-1">
                  {currentProject?.desc || '—'}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={onLayoutGrid}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" 
              title="Cuadrícula"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
            <button 
              onClick={onLayoutList}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" 
              title="Lista"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
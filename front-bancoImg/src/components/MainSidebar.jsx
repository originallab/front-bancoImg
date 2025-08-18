// src/components/MainSidebar.jsx
import React from 'react';

const MainSidebar = ({ currentDashboard, onDashboardChange }) => {
  const dashboards = [
    { id: 'images', name: 'Banco de Imágenes', icon: '🖼️', color: '#1b96ff' },
    { id: 'videos', name:'Banco de imagenes- proyecto 1', icon: '🖼️', color: '#10b981' },
    { id: 'documents', name: 'Banco de imagenes- proyecto 2', icon: '🖼️', color: '#f59e0b' },
    { id: 'assets', name: 'Banco de imagenes- proyecto 3', icon: '🖼️', color: '#8b5cf6' },
    { id: 'analytics', name: 'Banco de imagenes- proyecto 4', icon: '🖼️', color: '#ef4444' }
  ];

  return (
    <aside className="w-[280px] min-w-[280px] bg-ink-900/90 border-r border-white/10 flex flex-col">
      {/* Brand */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-300 shadow-glow grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 18V6a2 2 0 0 1 2-2h6l6 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="white" strokeWidth="1.5"/>
              <path d="M12 4v4a2 2 0 0 0 2 2h4" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-xl leading-tight text-white">Demo- Banco de Imagenes</h1>
            <p className="text-white/60 text-sm">Media Center</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-white/50 mb-3">PROYECTOS VINCULADOS</div>
        <div className="space-y-1">
          {dashboards.map(dashboard => (
            <button
              key={dashboard.id}
              onClick={() => onDashboardChange(dashboard.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover-rise ${
                currentDashboard === dashboard.id 
                  ? 'bg-white/15 shadow-soft' 
                  : 'hover:bg-white/10'
              }`}
            >
              <span 
                className="w-10 h-10 rounded-lg grid place-items-center text-lg"
                style={{ background: `linear-gradient(135deg, ${dashboard.color}, rgba(255,255,255,.2))` }}
              >
                {dashboard.icon}
              </span>
              <div className="text-left">
                <div className="font-semibold text-white">{dashboard.name}</div>
                <div className="text-xs text-white/60">Gestión de archivos</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-white/10">
        <div className="text-xs text-white/50 text-center">
          Demo- Banco de Imagenes
        </div>
      </div>
    </aside>
  );
};

export default MainSidebar;
import React, { useState } from 'react';

const ProjectSidebar = ({ 
  projects, 
  currentProject, 
  albums, 
  onProjectChange,
  onNewProject,
  onNewAlbum,
  onAlbumSelect,
  showToast
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`relative h-full flex ${collapsed ? 'w-12' : 'w-[320px]'}`}>
      {/* Pestaña para expandir/colapsar */}
      <button 
        onClick={toggleCollapse}
        className={`absolute -left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-24 bg-ink-800/80 rounded-l-lg border-l border-t border-b border-white/10 flex items-center justify-center transition-all hover:bg-ink-700`}
        title={collapsed ? "Expandir" : "Colapsar"}
      >
        {collapsed ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Contenido del sidebar */}
      {!collapsed && (
        <aside className="w-[320px] min-w-[280px] bg-ink-800/80 glass border-r border-white/10 h-full flex flex-col transition-all duration-300 ease-in-out">
          {/* Botón para colapsar (dentro del sidebar) */}
          <button 
            onClick={toggleCollapse}
            className="absolute -right-3 top-4 z-50 w-6 h-6 bg-ink-700 rounded-full flex items-center justify-center shadow-lg hover:bg-ink-600 transition-all border border-white/10 hover:scale-110"
            title="Colapsar"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Contenido superior */}
          <div className="p-4 flex gap-2">
            <button 
              onClick={onNewProject}
              className="flex-1 bg-brand-500 hover:bg-brand-600 transition rounded-lg px-4 py-2.5 font-semibold hover-rise text-white"
            >
              + Nuevo proyecto
            </button>
            <button 
              onClick={() => showToast('Editar proyecto')}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition hover-rise" 
              title="Editar info del proyecto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 21h6l11-11-6-6L3 15v6Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Contenido con scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-3 pb-4">
              <div className="text-xs uppercase tracking-wide text-white/50 px-3 mb-2">Proyectos</div>
              <ul className="space-y-1">
                {projects.map(project => (
                  <li key={project.id}>
                    <button 
                      onClick={() => onProjectChange(project.id)}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition ${
                        project.id === currentProject?.id ? 'bg-white/15' : 'hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ background: project.color }}
                        ></span>
                        <span className="text-left truncate max-w-[190px] text-white">{project.name}</span>
                      </span>
                      {project.id === currentProject?.id && <span className="text-white/50 text-xs">Activo</span>}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-xs uppercase tracking-wide text-white/50 px-3 mb-2">Álbumes</div>
              <ul className="space-y-1 px-2">
                {albums.length === 0 ? (
                  <li className="text-white/50 text-sm px-3 py-2">Sin álbumes</li>
                ) : (
                  albums.map(album => (
                    <li key={album.id}>
                      <button 
                        onClick={() => onAlbumSelect(album.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition flex items-center justify-between text-white"
                      >
                        <span className="truncate">📁 {album.name}</span>
                        <span className="text-white/40 text-xs">Ver</span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
              
              <div className="px-2 mt-2 flex gap-2">
                <button 
                  onClick={onNewAlbum}
                  className="flex-1 bg-white/10 hover:bg-white/15 rounded-lg px-3 py-2 text-white"
                >
                  + Nuevo álbum
                </button>
                <button 
                  onClick={() => showToast('Gestionar álbumes')}
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15" 
                  title="Renombrar/Eliminar"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12h12M6 6h12M6 18h12" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default ProjectSidebar;
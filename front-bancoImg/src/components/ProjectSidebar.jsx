// components/ProjectSidebar.js
import React from 'react';

const ProjectSidebar = ({ 
  projects, 
  currentProject, 
  albums, 
  onProjectChange,
  onNewProject,
  onProjectInfo,
  onNewAlbum,
  onManageAlbums,
  onDeleteProject,
  onShowAll,
  onShowFavorites,
  onShowUntagged,
  onAlbumSelect
}) => {
  return (
    <aside className="w-[320px] min-w-[280px] bg-ink-800/80 glass border-r border-white/10 hidden md:flex md:flex-col">
      {/* Project Info */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl shadow-glow grid place-items-center"
            style={{ background: `linear-gradient(135deg, ${currentProject?.color || '#1b96ff'}, rgba(255,255,255,.2))` }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 18V6a2 2 0 0 1 2-2h6l6 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="white" strokeWidth="1.5"/>
              <path d="M12 4v4a2 2 0 0 0 2 2h4" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-xl leading-tight text-white">Image Bank Pro</h1>
            <p className="text-white/60 text-sm">por Canva Code</p>
          </div>
        </div>
        <div className="mt-4 text-xs text-white/70">Organiza imágenes por proyecto y álbum, con descripciones y etiquetas.</div>
      </div>

      {/* Project Actions */}
      <div className="p-4 flex gap-2">
        <button 
          onClick={onNewProject}
          className="flex-1 bg-brand-500 hover:bg-brand-600 transition rounded-lg px-4 py-2.5 font-semibold hover-rise text-white"
        >
          + Nuevo proyecto
        </button>
        <button 
          onClick={onProjectInfo}
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition hover-rise" 
          title="Editar info del proyecto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 21h6l11-11-6-6L3 15v6Z" stroke="white" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      {/* Projects List */}
      <div className="px-3 pb-4 overflow-y-auto">
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
            onClick={onManageAlbums}
            className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15" 
            title="Renombrar/Eliminar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 12h12M6 6h12M6 18h12" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>

        <div className="mt-6 text-xs uppercase tracking-wide text-white/50 px-3 mb-2">Vistas rápidas</div>
        <div className="space-y-1 px-2">
          <button 
            onClick={onShowAll}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400"></span>
              Todo (proyecto)
            </span>
            <span className="text-white/50">G</span>
          </button>
          <button 
            onClick={onShowFavorites}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Favoritos
            </span>
            <span className="text-white/50">F</span>
          </button>
          <button 
            onClick={onShowUntagged}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Sin etiquetas
            </span>
            <span className="text-white/50">U</span>
          </button>
        </div>

        {/* Danger zone */}
        <div className="mt-6 mx-2">
          <button 
            onClick={onDeleteProject}
            className="w-full bg-red-500/90 hover:bg-red-600 transition rounded-lg px-4 py-2.5 font-semibold text-white"
          >
            Eliminar proyecto
          </button>
          <p className="text-white/50 text-xs mt-2">Esto borra los datos locales de este proyecto (demo).</p>
        </div>
      </div>
    </aside>
  );
};

export default ProjectSidebar;
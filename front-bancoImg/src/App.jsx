// src/App.jsx - VERSIÓN COMPLETA
import React, { useState } from 'react';
import './styles.css';

const MainSidebar = ({ currentDashboard, onDashboardChange }) => {
  const dashboards = [
    { id: 'images', name: 'Banco de Imágenes', icon: '🖼️', color: '#1b96ff' },
    { id: 'videos', name: 'Banco de Videos', icon: '🎥', color: '#10b981' },
    { id: 'documents', name: 'Documentos', icon: '📄', color: '#f59e0b' },
    { id: 'assets', name: 'Assets', icon: '🎨', color: '#8b5cf6' },
    { id: 'analytics', name: 'Analytics', icon: '📊', color: '#ef4444' }
  ];

  return (
    <aside className="w-[280px] min-w-[280px] bg-ink-900/90 border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-300 shadow-glow grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 18V6a2 2 0 0 1 2-2h6l6 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="white" strokeWidth="1.5"/>
              <path d="M12 4v4a2 2 0 0 0 2 2h4" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-xl leading-tight text-white">Banco de Imagenes</h1>
            <p className="text-white/60 text-sm">por The Original Lab</p>
          </div>
        </div>
        <div className="mt-4 text-xs text-white/70">Organiza imágenes por proyecto y álbum, con descripciones y etiquetas.</div>
      </div>

      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-white/50 mb-3">Dashboards</div>
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

      <div className="mt-auto p-4 border-t border-white/10">
        <div className="text-xs text-white/50 text-center">
          Demo v1.0 - Canva Code
        </div>
      </div>
    </aside>
  );
};

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
  return (
    <aside className="w-[320px] min-w-[280px] bg-ink-800/80 glass border-r border-white/10 hidden md:flex md:flex-col">
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
            onClick={() => showToast('Gestionar álbumes')}
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
            onClick={() => showToast('Mostrar todo')}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400"></span>
              Todo (proyecto)
            </span>
            <span className="text-white/50">G</span>
          </button>
          <button 
            onClick={() => showToast('Mostrar favoritos')}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Favoritos
            </span>
            <span className="text-white/50">F</span>
          </button>
          <button 
            onClick={() => showToast('Mostrar sin etiquetas')}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Sin etiquetas
            </span>
            <span className="text-white/50">U</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ currentProject, albumTag }) => {
  return (
    <header className="sticky top-0 z-10 bg-ink-900/80 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-3">
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
            <button className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" title="Cuadrícula">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" title="Lista">
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

const Toolbar = ({ 
  searchValue,
  onSearchChange,
  albumFilter,
  onAlbumFilterChange,
  favoriteFilter,
  onFavoriteToggle,
  onUpload,
  albums,
  showToast
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-5 relative">
          <input 
            type="text" 
            placeholder="Buscar por nombre, descripción o etiqueta..." 
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 pr-10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5"/>
              <path d="M20 20l-3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="lg:col-span-3 flex gap-2">
          <select 
            value={albumFilter}
            onChange={(e) => onAlbumFilterChange(e.target.value)}
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          >
            <option value="">Todos los álbumes</option>
            {albums.map(album => (
              <option key={album.id} value={album.id}>{album.name}</option>
            ))}
          </select>
           {/*
          <select className="w-40 bg-white/10 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50">
          
            <option value="date_asc">Más antiguos</option>
            <option value="name_asc">Nombre A-Z</option>
            <option value="name_desc">Nombre Z-A</option>
            <option value="fav_desc">Favoritos primero</option>
          </select>
          */}
        </div>
  
          {/* <button 
            onClick={onFavoriteToggle}
            className={`px-4 py-3 rounded-xl flex items-center gap-2 transition ${
              favoriteFilter 
                ? 'bg-yellow-500/90 text-black' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 18l-6.16 3.24 1.18-6.88L2 9.76l6.92-1L12 2l3.08 6.76L22 9.76l-4.98 4.6 1.18 6.88z" stroke="currentColor" strokeWidth="1.3" fill="transparent"/>
            </svg>
            Favoritos
          </button>
        
          
          <button 
            onClick={() => showToast('Modo selección')}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            Seleccionar
          </button>
           */}
          
          <button 
            onClick={() => showToast('Filtros limpiados')}
            //className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-white"
          >
            Limpiar
          </button>
          <button 
            onClick={onUpload}
            className="bg-brand-500 hover:bg-brand-600 shadow-glow rounded-xl px-4 py-3 font-semibold text-white"
          >
            Subir
          </button>
          
        </div>
      </div>
 
  );
};

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

const TagsRow = ({ tags, selectedTag, onTagSelect }) => {
  if (!tags.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap gap-2 pb-4">
        <button
          onClick={() => onTagSelect(null)}
          className={`tag px-3 py-1.5 rounded-full border border-white/10 transition ${
            !selectedTag 
              ? 'bg-brand-500 text-white' 
              : 'bg-white/5 hover:bg-white/10 text-white'
          }`}
        >
          Todos
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`tag px-3 py-1.5 rounded-full border border-white/10 transition ${
              selectedTag === tag 
                ? 'bg-brand-500 text-white' 
                : 'bg-white/5 hover:bg-white/10 text-white'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
    </section>
  );
};

const Gallery = ({ images, showToast }) => {
  if (!images.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <div className="mt-10 text-center text-white/60">
          No hay imágenes todavía. Sube algunas para empezar.
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="hover-rise bg-ink-800/60 border border-white/10 rounded-xl overflow-hidden">
            <div className="relative group">
              <div 
                className="w-full h-44 grid place-items-center text-white font-bold text-4xl"
                style={{ background: `linear-gradient(135deg, ${img.color}, rgba(255,255,255,.2))` }}
              >
                🖼️
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button 
                  onClick={() => showToast(`${img.favorite ? 'Quitar' : 'Marcar'} favorito`)}
                  className={`px-2 py-1 rounded-lg ${
                    img.favorite 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  ★
                </button>
                <button 
                  onClick={() => showToast('Abrir imagen')}
                  className="px-2 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                >
                  Ver
                </button>
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="font-semibold line-clamp-1 text-white" title={img.name}>
                  {img.name}
                </div>
                <button 
                  onClick={() => showToast('Eliminar imagen')}
                  className="text-white/70 hover:text-red-400" 
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
              <p className="mt-1 text-sm text-white/60 line-clamp-2">
                {img.desc || 'Sin descripción'}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {img.tags?.slice(0,3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                    #{tag}
                  </span>
                ))}
                <span className="text-xs text-white/50">{img.w || 1200}×{img.h || 800}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Toast = ({ message }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-ink-700/90 border border-white/10 rounded-xl px-4 py-3 shadow-soft text-white">
        {message}
      </div>
    </div>
  );
};

const App = () => {
  const [currentDashboard, setCurrentDashboard] = useState('images');
  const [currentProject, setCurrentProject] = useState({
    id: '1',
    name: 'Portafolio Web',
    color: '#1b96ff',
    desc: 'Mockups y recursos web',
    coverAlbumId: ''
  });
  
  const [projects] = useState([
    { id: '1', name: 'Portafolio Web', color: '#1b96ff', desc: 'Mockups y recursos web', coverAlbumId: '' },
    { id: '2', name: 'Redes Sociales', color: '#f59e0b', desc: 'Creatividades para IG/FB', coverAlbumId: '' }
  ]);
  
  const [albums] = useState([
    { id: 'a1', name: 'Portada' },
    { id: 'a2', name: 'Bocetos' }
  ]);
  
  const [images] = useState([
    {
      id: 'img1',
      name: 'Mockup portada',
      desc: 'Hero principal del sitio',
      color: '#ef4444',
      tags: ['hero', 'mockup'],
      favorite: true,
      date: Date.now() - 86400000 * 2,
      w: 1200,
      h: 800,
      albumId: 'a1'
    },
    {
      id: 'img2',
      name: 'Hero 01',
      desc: 'Variación con CTA',
      color: '#10b981',
      tags: ['hero'],
      favorite: false,
      date: Date.now() - 86400000,
      w: 1000,
      h: 700,
      albumId: 'a1'
    },
    {
      id: 'img3',
      name: 'Wireframe UX',
      desc: 'Estructura del sitio',
      color: '#1b96ff',
      tags: ['ux', 'web'],
      favorite: false,
      date: Date.now(),
      w: 900,
      h: 900,
      albumId: 'a2'
    }
  ]);

  // Estados de UI
  const [toastMessage, setToastMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [albumFilter, setAlbumFilter] = useState('');
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleDashboardChange = (dashboardId) => {
    setCurrentDashboard(dashboardId);
    showToast(`Cambiado a ${dashboardId}`);
  };

  const handleProjectChange = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setCurrentProject(project);
    showToast('Proyecto cambiado');
  };

  // Obtener etiquetas únicas
  const allTags = [...new Set(images.flatMap(img => img.tags))];

  // Filtrar imágenes
  const filteredImages = images.filter(img => {
    if (searchValue && !img.name.toLowerCase().includes(searchValue.toLowerCase())) return false;
    if (albumFilter && img.albumId !== albumFilter) return false;
    if (favoriteFilter && !img.favorite) return false;
    if (selectedTag && !img.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="gradient-bg min-h-screen text-white font-body">
      {/* Demo banner */}
      <div className="marquee bg-brand-600/30 text-white/90 text-sm py-2 border-b border-white/10">
        <span>Visualizaciòn Demo del nuevo banco de imagenes</span>
      </div>

      <div className="flex min-h-[calc(100vh-40px)]">
        {/* Sidebar principal de navegación */}
        <MainSidebar 
          currentDashboard={currentDashboard}
          onDashboardChange={handleDashboardChange}
        />

        {/* Sidebar del proyecto (solo visible en dashboard de imágenes) */}
        {currentDashboard === 'images' && (
          <ProjectSidebar
            projects={projects}
            currentProject={currentProject}
            albums={albums}
            onProjectChange={handleProjectChange}
            onNewProject={() => showToast('Crear nuevo proyecto')}
            onNewAlbum={() => showToast('Crear nuevo álbum')}
            onAlbumSelect={(albumId) => setAlbumFilter(albumId)}
            showToast={showToast}
          />
        )}

        {/* Contenido principal */}
        <main className="flex-1 flex flex-col">
          {currentDashboard === 'images' ? (
            <>
              {/* Header */}
              <Header
                currentProject={currentProject}
                albumTag={albumFilter ? albums.find(a => a.id === albumFilter)?.name : null}
              />

              {/* Toolbar */}
              <Toolbar
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                albumFilter={albumFilter}
                onAlbumFilterChange={setAlbumFilter}
                favoriteFilter={favoriteFilter}
                onFavoriteToggle={() => setFavoriteFilter(!favoriteFilter)}
                onUpload={() => showToast('Subir archivos')}
                albums={albums}
                showToast={showToast}
              />

              {/* Drop zone */}
              <DropZone onDrop={() => showToast('Zona de arrastre clickeada')} />

              {/* Tags */}
              <TagsRow
                tags={allTags}
                selectedTag={selectedTag}
                onTagSelect={setSelectedTag}
              />

              {/* Gallery */}
              <Gallery
                images={filteredImages}
                showToast={showToast}
              />
            </>
          ) : (
            // Otros dashboards
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-2xl font-bold mb-2">Dashboard en construcción</h2>
                <p className="text-white/60">
                  {currentDashboard === 'videos' && 'Banco de Videos próximamente'}
                  {currentDashboard === 'documents' && 'Gestión de Documentos próximamente'}
                  {currentDashboard === 'assets' && 'Gestión de Assets próximamente'}
                  {currentDashboard === 'analytics' && 'Analytics próximamente'}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Toast */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
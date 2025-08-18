// components/Toolbar.js
import React from 'react';

const Toolbar = ({ 
  searchValue,
  onSearchChange,
  albumFilter,
  onAlbumFilterChange,
  sortValue,
  onSortChange,
  favoriteFilter,
  onFavoriteToggle,
  onSelectMode,
  onClearFilters,
  onUpload,
  onExport,
  onImport,
  albums
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
          <select 
            value={sortValue}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-40 bg-white/10 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          >
            <option value="date_desc">Recientes</option>
            <option value="date_asc">Más antiguos</option>
            <option value="name_asc">Nombre A-Z</option>
            <option value="name_desc">Nombre Z-A</option>
            <option value="fav_desc">Favoritos primero</option>
          </select>
        </div>
        <div className="lg:col-span-4 flex gap-2 justify-end">
          <button 
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
            onClick={onSelectMode}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            Seleccionar
          </button>
          
          <button 
            onClick={onUpload}
            className="bg-brand-500 hover:bg-brand-600 shadow-glow rounded-xl px-4 py-3 font-semibold text-white"
          >
            Subir
          </button>
          <button 
            onClick={onExport}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            Exportar
          </button>
          <button 
            onClick={onImport}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            Importar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
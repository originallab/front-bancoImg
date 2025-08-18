// components/Gallery.js
import React from 'react';

const Gallery = ({ 
  images, 
  layout, 
  selectMode, 
  selectedImages,
  onImageSelect,
  onImageOpen,
  onImageFavorite,
  onImageDelete 
}) => {
  if (!images.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <div className="mt-10 text-center text-white/60">
          No hay imágenes todavía. Sube algunas para empezar.
        </div>
      </section>
    );
  }

  const gridClass = layout === 'grid' 
    ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
    : 'grid grid-cols-1 gap-3';

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
      <div className={gridClass}>
        {images.map((img) => {
          const selected = selectedImages.has(img.id);
          
          if (layout === 'grid') {
            return (
              <div key={img.id} className="hover-rise bg-ink-800/60 border border-white/10 rounded-xl overflow-hidden">
                <div className="relative group">
                  <img 
                    src={img.src} 
                    alt={img.name} 
                    className="w-full h-44 object-cover bg-ink-700" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button 
                      onClick={() => onImageFavorite(img.id)}
                      className={`px-2 py-1 rounded-lg ${
                        img.favorite 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      ★
                    </button>
                    <button 
                      onClick={() => onImageOpen(img)}
                      className="px-2 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                    >
                      Ver
                    </button>
                  </div>
                  {selectMode && (
                    <label className="absolute top-2 left-2">
                      <input 
                        type="checkbox" 
                        checked={selected}
                        onChange={(e) => onImageSelect(img.id, e.target.checked)}
                        className="w-5 h-5 accent-brand-500"
                      />
                    </label>
                  )}
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold line-clamp-1 text-white" title={img.name}>
                      {img.name}
                    </div>
                    <button 
                      onClick={() => onImageDelete(img.id)}
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
                    <span className="text-xs text-white/50">{img.w || 0}×{img.h || 0}</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={img.id} className="hover-rise bg-ink-800/60 border border-white/10 rounded-xl overflow-hidden p-3 flex items-center gap-3">
                <img 
                  src={img.src} 
                  alt={img.name} 
                  className="w-24 h-24 object-cover rounded-lg bg-ink-700" 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold truncate text-white" title={img.name}>
                      {img.name}
                    </div>
                    <div className="flex items-center gap-2">
                      {selectMode && (
                        <input 
                          type="checkbox" 
                          checked={selected}
                          onChange={(e) => onImageSelect(img.id, e.target.checked)}
                          className="w-5 h-5 accent-brand-500"
                        />
                      )}
                      <button 
                        onClick={() => onImageOpen(img)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                      >
                        Ver
                      </button>
                      <button 
                        onClick={() => onImageFavorite(img.id)}
                        className={`px-3 py-1.5 rounded-lg ${
                          img.favorite 
                            ? 'bg-yellow-400 text-black' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        ★
                      </button>
                      <button 
                        onClick={() => onImageDelete(img.id)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-red-500/80 text-white"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-white/60 truncate">
                    {img.desc || 'Sin descripción'}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {img.tags?.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                        #{tag}
                      </span>
                    ))}
                    <span className="text-xs text-white/50">
                      {img.w || 0}×{img.h || 0} · {new Date(img.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Gallery;
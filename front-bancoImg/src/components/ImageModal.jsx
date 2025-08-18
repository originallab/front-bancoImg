// components/ImageModal.js
import React, { useState, useEffect } from 'react';

const ImageModal = ({ 
  show, 
  image,
  albums,
  onClose,
  onPrev,
  onNext,
  onSave,
  onDelete,
  onDownload,
  onFavorite
}) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('');
  const [albumId, setAlbumId] = useState('');

  useEffect(() => {
    if (image) {
      setName(image.name || '');
      setDesc(image.desc || '');
      setTags(image.tags?.join(', ') || '');
      setAlbumId(image.albumId || '');
    }
  }, [image]);

  if (!show || !image) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-40">
      <div className="relative max-w-6xl w-[95vw] md:w-[90vw] lg:w-[80vw] max-h-[90vh] bg-ink-800 rounded-2xl overflow-hidden border border-white/10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-ink-700/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500 grid place-items-center">🖼️</div>
            <div>
              <div className="font-semibold text-white">Vista previa</div>
              
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select 
              value={albumId}
              onChange={(e) => setAlbumId(e.target.value)}
              className="bg-white/10 border border-white/10 rounded-lg px-2 py-2 text-white focus:outline-none"
            >
              <option value="">Sin álbum</option>
              {albums.map(album => (
                <option key={album.id} value={album.id}>{album.name}</option>
              ))}
            </select>
            <button 
              onClick={onFavorite}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              ★
            </button>
            <button 
              onClick={onDownload}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              Descargar
            </button>
            <button 
              onClick={onClose}
              className="px-3 py-2 rounded-lg bg-red-500/90 hover:bg-red-600 text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
        <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 relative">
            <img 
              src={image.src} 
              alt="Vista previa" 
              className="max-h-[60vh] w-full object-contain rounded-xl bg-ink-700" 
            />
            <button 
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              ⟵
            </button>
            <button 
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              ⟶
            </button>
          </div>
          <div className="lg:col-span-4">
            <div className="space-y-3">
              <label className="text-sm text-white/70">Nombre</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
              />
              <label className="text-sm text-white/70">Descripción</label>
              <textarea 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="5" 
                className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
                placeholder="Describe la imagen..."
              />
              <label className="text-sm text-white/70">Etiquetas</label>
              <input 
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
                placeholder="Ej. banner, portada, producto" 
              />
              <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
                <div>Dimensiones: <span>{image.w || '—'}×{image.h || '—'}</span></div>
                <div>Fecha: <span>{new Date(image.date).toLocaleDateString()}</span></div>
              </div>
              <div className="flex gap-2 pt-1">
                <button 
                  onClick={() => onSave({ name, desc, tags: tags.split(',').map(t => t.trim()).filter(Boolean), albumId })}
                  className="flex-1 rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 font-semibold text-white"
                >
                  Guardar cambios
                </button>
                <button 
                  onClick={onDelete}
                  className="rounded-lg bg-red-500/90 hover:bg-red-600 px-4 py-2 text-white"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
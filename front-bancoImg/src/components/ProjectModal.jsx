// components/ProjectModal.js
import React, { useState, useEffect } from 'react';

const ProjectModal = ({ 
  show, 
  project,
  albums,
  onClose, 
  onSave 
}) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [color, setColor] = useState('#1b96ff');
  const [coverAlbum, setCoverAlbum] = useState('');

  useEffect(() => {
    if (project) {
      setName(project.name || '');
      setDesc(project.desc || '');
      setColor(project.color || '#1b96ff');
      setCoverAlbum(project.coverAlbumId || '');
    }
  }, [project]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-30">
      <div className="relative max-w-2xl w-[92vw] bg-ink-800 rounded-2xl overflow-hidden border border-white/10">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-ink-700/60">
          <div className="font-semibold text-white">Información del proyecto</div>
          <button 
            onClick={onClose}
            className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
          >
            Cerrar
          </button>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="text-sm text-white/70">Nombre</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
              placeholder="Ej. Campaña Verano" 
            />
            <label className="text-sm text-white/70">Descripción</label>
            <textarea 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="5" 
              className="w-full bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50" 
              placeholder="Breve descripción del proyecto..."
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm text-white/70">Color</label>
            <input 
              type="color" 
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-10 rounded-lg bg-white/10 border border-white/10 p-1" 
            />
            <label className="text-sm text-white/70 block mt-3">Álbum de portada</label>
            <select 
              value={coverAlbum}
              onChange={(e) => setCoverAlbum(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            >
              <option value="">Ninguno</option>
              {albums.map(album => (
                <option key={album.id} value={album.id}>{album.name}</option>
              ))}
            </select>
            <div className="text-xs text-white/60">
              Sugerencia: usa "Portada" para destacar un álbum en el encabezado.
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <button 
            onClick={() => onSave({ name, desc, color, coverAlbumId: coverAlbum })}
            className="bg-brand-500 hover:bg-brand-600 shadow-glow rounded-xl px-4 py-3 font-semibold text-white"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
// components/BulkBar.js
import React from 'react';

const BulkBar = ({
  show,
  selectedCount,
  onBulkFav,
  onBulkTag,
  onBulkAlbum,
  onBulkDelete,
  onCancel
}) => {
  if (!show) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-2">
      <div className="bg-ink-700/70 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
        <span className="text-white/80 text-sm">
          {selectedCount} seleccionada{selectedCount !== 1 ? 's' : ''}
        </span>
        <button 
          onClick={onBulkFav}
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          Marcar favorito
        </button>
        <button 
          onClick={onBulkTag}
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          Añadir etiquetas
        </button>
        <button 
          onClick={onBulkAlbum}
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          Mover a álbum
        </button>
        <button 
          onClick={onBulkDelete}
          className="px-3 py-2 rounded-lg bg-red-500/90 hover:bg-red-600 text-white"
        >
          Eliminar
        </button>
        <button 
          onClick={onCancel}
          className="ml-auto px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          Cancelar selección
        </button>
      </div>
    </div>
  );
};

export default BulkBar;
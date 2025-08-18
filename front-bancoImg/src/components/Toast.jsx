// components/Toast.js
import React from 'react';

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

export default Toast;
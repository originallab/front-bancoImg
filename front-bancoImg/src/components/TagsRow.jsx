// components/TagsRow.js
import React from 'react';

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

export default TagsRow;
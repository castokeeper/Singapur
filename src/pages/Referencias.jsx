import React, { useState } from 'react';
import { referenciasData } from '../data/referencias';
import Section from '../components/layout/Section';

const Referencias = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredReferences = activeCategory === 'all' 
    ? referenciasData.references
    : referenciasData.references.filter(ref => ref.category === activeCategory);
  
  return (
    <div>
      <Section
        id={referenciasData.id}
        title={referenciasData.title}
        subtitle={referenciasData.subtitle}
        paragraph={referenciasData.description}
        icon={referenciasData.icon}
        accent={referenciasData.accentColor}
      >
        {/* Navegación de categorías */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button 
              className={`px-4 py-2 rounded-lg transition ${activeCategory === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveCategory('all')}
            >
              Todas
            </button>
            
            {referenciasData.categories.map(cat => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                  activeCategory === cat.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`fas fa-${cat.icon}`}></i>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Lista de referencias */}
        <div className="space-y-6">
          {filteredReferences.map(ref => (
            <div key={ref.id} className="p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold">
                    {ref.id}
                  </span>
                  <div className="ml-2">
                    <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                      {ref.type === 'academic' && 'Académico'}
                      {ref.type === 'book' && 'Libro'}
                      {ref.type === 'official' && 'Oficial'}
                      {ref.type === 'report' && 'Informe'}
                      {ref.type === 'speech' && 'Discurso'}
                      {ref.type === 'article' && 'Artículo'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-3">{ref.text}</p>
              
              <div className="mt-3 text-sm">
                {ref.doi && (
                  <a 
                    href={`https://doi.org/${ref.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mr-4"
                  >
                    DOI: {ref.doi}
                  </a>
                )}
                
                {ref.isbn && (
                  <span className="text-gray-600 mr-4">ISBN: {ref.isbn}</span>
                )}
                
                {ref.url && (
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Enlace al recurso
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Referencias;
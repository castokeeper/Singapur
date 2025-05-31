import React, { useState, useEffect } from 'react';
import ReferenciasCard from '../components/sections/ReferenciasCard';

// Importación de ambos archivos de referencias
import { referenciasData } from '../data/referencias';
import { referencias } from '../data/referenciasData';

const Referencias = () => {
  const [filtro, setFiltro] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('todas');
  const [referenciasCompletas, setReferenciasCompletas] = useState([]);
  
  // Combinar y normalizar referencias de ambas fuentes al cargar el componente
  useEffect(() => {
    // Obtener referencias del objeto complejo en referencias.js
    const refsDeReferenciasJs = referenciasData.references.map(ref => ({
      id: ref.id.toString(),
      titulo: ref.text.split('.')[0].trim(),
      autores: ref.text.includes('(') ? ref.text.split('(')[0].trim() : '',
      año: ref.text.match(/\((\d{4})\)/) ? ref.text.match(/\((\d{4})\)/)[1] : '',
      tipo: getMappedType(ref.type),
      categoria: ref.category,
      url: ref.url || '',
      doi: ref.doi || '',
      isbn: ref.isbn || '',
      descripcion: ref.text
    }));
    
    // Combinar con las referencias del otro archivo
    const todasLasRefs = [...refsDeReferenciasJs, ...referencias];
    
    // Eliminar duplicados por ID si existen
    const refsUnicas = todasLasRefs.filter((ref, index, self) => 
      index === self.findIndex((r) => r.id === ref.id)
    );
    
    setReferenciasCompletas(refsUnicas);
  }, []);
  
  // Función para mapear tipos de referencia
  const getMappedType = (type) => {
    const mapping = {
      'academic': 'artículo',
      'book': 'libro',
      'official': 'documento oficial',
      'report': 'informe',
      'speech': 'discurso',
      'article': 'artículo',
      'web': 'sitio web'
    };
    return mapping[type] || 'referencia';
  };
  
  // Extraer categorías únicas de las referencias combinadas
  const categorias = referenciasCompletas.length > 0 
    ? ['todas', ...new Set(referenciasCompletas.map(ref => ref.categoria))]
    : ['todas'];
  
  // Filtrar referencias por texto y categoría
  const referenciasFiltradas = referenciasCompletas.filter(ref => {
    const coincideTexto = 
      (ref.titulo && ref.titulo.toLowerCase().includes(filtro.toLowerCase())) ||
      (ref.autores && ref.autores.toLowerCase().includes(filtro.toLowerCase())) ||
      (ref.descripcion && ref.descripcion.toLowerCase().includes(filtro.toLowerCase()));
    
    const coincideCategoria = categoriaSel === 'todas' || ref.categoria === categoriaSel;
    
    return coincideTexto && coincideCategoria;
  });
  
  return (
    <div>
      <div className="p-4 rounded-3 bg-light mb-4">
        <h1 className="display-5 fw-bold">Referencias</h1>
        <p className="fs-5">
          Fuentes bibliográficas y recursos consultados para la elaboración de este proyecto.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <p className="lead mb-4">
            Las siguientes referencias han sido utilizadas como fuentes de información para el desarrollo 
            del contenido presentado en este sitio sobre Singapur.
          </p>
          
          <div className="mb-4">
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Buscar por título o autor..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <select 
              className="form-select"
              value={categoriaSel}
              onChange={(e) => setCategoriaSel(e.target.value)}
            >
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria === 'todas' ? 'Todas las categorías' : 
                    referenciasData.categories.find(cat => cat.id === categoria)?.name || 
                    (categoria.charAt(0).toUpperCase() + categoria.slice(1))}
                </option>
              ))}
            </select>
          </div>

          {/* Filtrar referencias por tipo */}
          <h2 className="h3 mb-3">Libros y publicaciones académicas</h2>
          {referenciasFiltradas
            .filter(ref => ['libro', 'artículo', 'articulo', 'book', 'academic'].includes(ref.tipo?.toLowerCase()))
            .map((referencia, index) => (
              <ReferenciasCard 
                key={referencia.id || index} 
                {...referencia} 
                variant={index % 2 === 0 ? 'primary' : 'info'}
              />
            ))}

          <h2 className="h3 mb-3 mt-5">Informes y documentos oficiales</h2>
          {referenciasFiltradas
            .filter(ref => ['informe', 'documento oficial', 'report', 'official'].includes(ref.tipo?.toLowerCase()))
            .map((referencia, index) => (
              <ReferenciasCard 
                key={referencia.id || index} 
                {...referencia} 
                variant="success"
              />
            ))}

          <h2 className="h3 mb-3 mt-5">Recursos web y otros</h2>
          {referenciasFiltradas
            .filter(ref => !['libro', 'artículo', 'articulo', 'book', 'academic', 'informe', 'documento oficial', 'report', 'official'].includes(ref.tipo?.toLowerCase()))
            .map((referencia, index) => (
              <ReferenciasCard 
                key={referencia.id || index} 
                {...referencia} 
                variant="warning"
              />
            ))}
        </div>

        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h3 className="card-title h4">Metodología</h3>
              <p className="card-text">
                {referenciasData.description || 
                  "La información presentada en este proyecto ha sido cuidadosamente seleccionada a partir de fuentes académicas, libros especializados, publicaciones oficiales del gobierno de Singapur y recursos web reconocidos."}
              </p>
              <p className="card-text">
                Cada dato ha sido verificado utilizando múltiples fuentes para garantizar su 
                precisión y relevancia.
              </p>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title h4">Estadísticas</h3>
              <div className="row text-center">
                {referenciasData.stats && referenciasData.stats.map((stat, index) => (
                  <div key={index} className="col-6 mb-3">
                    <h4 className="display-6 fw-bold text-primary">{stat.value}</h4>
                    <p className="text-muted small">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-light">
            <div className="card-body">
              <h3 className="card-title h4">Citar este proyecto</h3>
              <p className="card-text">
                Si deseas citar este proyecto en tus trabajos académicos, puedes utilizar el 
                siguiente formato:
              </p>
              <div className="bg-white p-3 rounded border">
                <small className="text-muted">
                  "Singapur: Una mirada profunda" (2023). Proyecto web educativo sobre la 
                  cultura, economía y desarrollo de Singapur. [En línea] Disponible en: 
                  <span className="d-block mt-1">https://singapur-proyecto.web/</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referencias;
import React, { useState, useEffect } from 'react';
import ReferenciasCard from '../components/sections/ReferenciasCard';
import { useTheme } from '../context/ThemeContext';
import ImageGallery from '../components/ui/ImageGallery';

// Importar ambos: named export y default export
import referenciasData, { referenciasData as referenciasNamed } from '../data/referencias';

const Referencias = () => {
  const [filtro, setFiltro] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('todas');
  const [referenciasCompletas, setReferenciasCompletas] = useState([]);
  const { isDark } = useTheme();
  
  // Clases condicionales según el tema
  const headerClass = isDark ? 'p-4 rounded-3 bg-dark border border-secondary mb-4' : 'p-4 rounded-3 bg-light mb-4';
  const textClass = isDark ? 'text-light' : '';
  const formControlClass = isDark ? 'bg-dark text-light border-secondary' : '';
  const statNumberClass = isDark ? 'text-info' : 'text-primary';
  
  // Inicializar las referencias con mejor manejo de errores
  useEffect(() => {
    // Verificar qué versión de referenciasData está disponible
    const refData = referenciasData.referencias ? referenciasData : 
                   referenciasNamed.referencias ? referenciasNamed : 
                   { referencias: [] };
    
    // Verificar que referenciasData existe y tiene la estructura correcta
    if (refData && Array.isArray(refData.referencias)) {
      // Asegurarse de que todas las referencias tienen una categoría válida
      const refsNormalizadas = refData.referencias.map(ref => ({
        ...ref,
        id: ref.id || Math.random().toString(36).substring(2),
        categoria: ref.categoria || 'General', // Valor predeterminado si no hay categoría
        titulo: ref.titulo || 'Sin título',
        autor: ref.autor || 'Autor desconocido'
      }));
      setReferenciasCompletas(refsNormalizadas);
    } else {
      // Si no hay datos, inicializar con array vacío
      setReferenciasCompletas([]);
      console.error("No se pudieron cargar las referencias o el formato es incorrecto", refData);
    }
  }, []);
  
  // Filtrar referencias según categoría y texto de búsqueda
  const referenciasFiltradas = referenciasCompletas.filter(ref => {
    const matchCategoria = categoriaSel === 'todas' || ref.categoria === categoriaSel;
    const matchFiltro = filtro === '' || 
      ref.titulo?.toLowerCase().includes(filtro.toLowerCase()) ||
      ref.autor?.toLowerCase().includes(filtro.toLowerCase()) ||
      ref.descripcion?.toLowerCase().includes(filtro.toLowerCase());
    return matchCategoria && matchFiltro;
  });
  
  // Obtener categorías únicas para el filtro y eliminar valores undefined
  const categorias = referenciasCompletas.length > 0 
    ? [...new Set(referenciasCompletas.map(ref => ref.categoria).filter(Boolean))] 
    : [];
  
  // Contar referencias por categoría
  const contarPorCategoria = (cat) => {
    return referenciasCompletas.filter(ref => ref.categoria === cat).length;
  };

  // Renderizar tarjetas de referencias
  const renderizarTarjetas = () => {
    return referenciasFiltradas.map(ref => {
      return (
        <div className="col-lg-6 col-xl-4" key={ref.id || `ref-${Math.random()}`}>
          <ReferenciasCard 
            titulo={ref.titulo}
            autores={ref.autor}
            año={ref.año}
            editorial={ref.editorial}
            lugar={ref.lugar}
            url={ref.url}
            categoria={ref.categoria}
            descripcion={ref.descripcion}
            variant={
              ref.categoria === "historia" ? "primary" : 
              ref.categoria === "linguistica" ? "info" : 
              ref.categoria === "monetario" ? "success" : 
              ref.categoria === "festividades" ? "warning" : "secondary"
            }
          />
        </div>
      );
    });
  };
  
  return (
    <div className="referencias-page">
      <header className={headerClass}>
        <h1 className={`h2 mb-3 ${textClass}`}>Referencias y Fuentes</h1>
        <p className={textClass}>
          Esta sección incluye todas las fuentes consultadas para la creación de este proyecto sobre Singapur.
        </p>
        
        {/* Filtros */}
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control ${formControlClass}`}
              placeholder="Buscar por título, autor o descripción"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select 
              className={`form-select ${formControlClass}`}
              value={categoriaSel}
              onChange={(e) => setCategoriaSel(e.target.value)}
            >
              <option value="todas">Todas las categorías</option>
              {categorias && categorias.map(cat => (
                <option key={cat} value={cat}>
                  {cat && typeof cat === 'string' 
                    ? cat.charAt(0).toUpperCase() + cat.slice(1)
                    : 'General'} ({contarPorCategoria(cat)})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Estadísticas */}
        <div className="mt-3 d-flex flex-wrap gap-3">
          <div className={textClass}>
            <small>Total: <span className={statNumberClass}>{referenciasCompletas.length}</span></small>
          </div>
          <div className={textClass}>
            <small>Filtradas: <span className={statNumberClass}>{referenciasFiltradas.length}</span></small>
          </div>
        </div>
      </header>
      
      <div className="row g-4">
        {referenciasCompletas.length > 0 ? (
          renderizarTarjetas()
        ) : (
          <div className="col-12 text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando referencias...</p>
          </div>
        )}
        
        {referenciasCompletas.length > 0 && referenciasFiltradas.length === 0 && (
          <div className="col-12 text-center py-5">
            <p className={`lead ${textClass}`}>No se encontraron referencias que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referencias;
/**
 * Obtiene la ruta completa para un recurso (asset)
 * @param {string} path - Ruta relativa al directorio de assets
 * @returns {string} Ruta completa para el recurso
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  
  // Normalizar la ruta eliminando dobles barras y espacios
  let cleanPath = path.trim().replace(/\/+/g, '/');
  
  // Asegurarnos que todas las rutas empiecen con /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // Si la ruta comienza con /assets/images, quitar /assets
  if (cleanPath.startsWith('/assets/images/')) {
    cleanPath = cleanPath.replace('/assets', '');
  }
  
  // Si la ruta no incluye /images/ pero debería estar en esa carpeta
  if (!cleanPath.includes('/images/')) {
    cleanPath = '/images' + cleanPath;
  }
  
  return cleanPath;
};
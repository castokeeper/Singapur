/**
 * Obtiene la ruta correcta para un recurso de imagen
 * @param {string} path - Ruta relativa al directorio de imágenes
 * @returns {string} Ruta completa para el recurso
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  
  // Normalizar la ruta
  let cleanPath = path.trim();
  
  // Si la ruta no comienza con /, añadirlo
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  return cleanPath;
};
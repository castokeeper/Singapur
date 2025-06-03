/**
 * Obtiene la ruta completa para un recurso (asset)
 * @param {string} path - Ruta relativa al directorio de assets
 * @returns {string} Ruta completa para el recurso
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  
  // Asegurarnos de que la ruta comienza con '/'
  let cleanPath = path.trim();
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // No agregamos BASE_URL porque las rutas ya son absolutas desde la raíz
  return cleanPath;
};
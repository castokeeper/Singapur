/**
 * Obtiene la ruta completa para un recurso (asset)
 * @param {string} path - Ruta relativa al directorio de assets
 * @returns {string} Ruta completa para el recurso
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  
  // Normalizar la ruta eliminando dobles barras y espacios
  let cleanPath = path.trim().replace(/\/+/g, '/');
  
  // Detectar patrones de ruta para estandarizarlos
  if (cleanPath.startsWith('/images/')) {
    // Desde raíz: /images/algo.jpg -> ./assets/images/algo.jpg
    cleanPath = './assets' + cleanPath;
  } else if (cleanPath.startsWith('../assets/images/') || 
             cleanPath.startsWith('../images/')) {
    // Desde relativo: ../assets/images/algo.jpg -> ./assets/images/algo.jpg
    cleanPath = './' + cleanPath.replace(/^\.\.\//, '');
  } else if (!cleanPath.startsWith('./')) {
    // Ningún prefijo: algo.jpg -> ./assets/images/algo.jpg
    cleanPath = './assets/images/' + cleanPath;
  }
  
  return cleanPath;
};
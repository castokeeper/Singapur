/**
 * Obtiene la ruta correcta para un asset considerando la base URL
 * @param {string} path - Ruta del asset (con o sin / inicial)
 * @returns {string} - Ruta completa para cualquier entorno
 */
export const getAssetPath = (path) => {
  // Si no hay path, devolver string vacío
  if (!path) return '';
  
  // Eliminar slash inicial si existe para evitar doble slash
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // En desarrollo: usar directamente, en producción: añadir base
  return import.meta.env.BASE_URL + cleanPath;
};
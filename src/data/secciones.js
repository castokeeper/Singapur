import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos de las secciones principales del sitio
 */
export const seccionesData = [
  {
    id: "historia",
    titulo: "Historia y Desarrollo",
    descripcion: "Recorrido cronológico desde los orígenes coloniales hasta la Singapur contemporánea",
    color: "primary",
    icon: "landmark",
    imagenPreview: getAssetPath("/images/secciones/historia-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/historia-header.jpg")
  },
  {
    id: "identidad",
    titulo: "Identidad Multiétnica",
    descripcion: "Composición demográfica y convivencia de diferentes grupos étnicos y culturales",
    color: "danger",
    icon: "users",
    imagenPreview: getAssetPath("/images/secciones/identidad-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/identidad-header.jpg")
  },
  {
    id: "linguistica",
    titulo: "Identidad Lingüística",
    descripcion: "Multilingüismo oficial y evolución del Singlish como expresión cultural única",
    color: "primary",
    icon: "language",
    imagenPreview: getAssetPath("/images/secciones/linguistica-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/linguistica-header.jpg")
  },
  {
    id: "festividades",
    titulo: "Festividades y Tradiciones",
    descripcion: "Celebraciones multiculturales que reflejan la diversidad étnica de Singapur",
    color: "warning",
    icon: "calendar-alt",
    imagenPreview: getAssetPath("/images/secciones/festividades-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/festividades-header.jpg")
  },
  {
    id: "gastronomia",
    titulo: "Gastronomía",
    descripcion: "Fusión culinaria que refleja la mezcla de culturas y su evolución contemporánea",
    color: "info",
    icon: "utensils",
    imagenPreview: getAssetPath("/images/secciones/gastronomia-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/gastronomia-header.jpg")
  },
  {
    id: "monetario",
    titulo: "Sistema Monetario",
    descripcion: "El dólar de Singapur y el desarrollo como centro financiero global",
    color: "success",
    icon: "money-bill-wave",
    imagenPreview: getAssetPath("/images/secciones/monetario-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/monetario-header.jpg")
  },
  {
    id: "modernidad",
    titulo: "Modernidad y Visión",
    descripcion: "Transformación urbana y proyección de Singapur hacia el futuro",
    color: "success",
    icon: "city",
    imagenPreview: getAssetPath("/images/secciones/modernidad-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/modernidad-header.jpg")
  },
  {
    id: "referencias",
    titulo: "Referencias",
    descripcion: "Fuentes bibliográficas y recursos utilizados para la elaboración del sitio",
    color: "secondary",
    icon: "book",
    imagenPreview: getAssetPath("/images/secciones/referencias-preview.jpg"),
    imageHeader: getAssetPath("/images/secciones/referencias-header.jpg")
  }
];

/**
 * Mapa de colores para las secciones
 */
export const seccionesColores = {
  historia: "primary",
  identidad: "danger",
  linguistica: "primary",
  festividades: "warning",
  gastronomia: "info",
  monetario: "success",
  modernidad: "success",
  referencias: "secondary"
};

/**
 * Mapa de iconos para las secciones
 */
export const seccionesIconos = {
  historia: "landmark",
  identidad: "users",
  linguistica: "language",
  festividades: "calendar-alt",
  gastronomia: "utensils",
  monetario: "money-bill-wave",
  modernidad: "city",
  referencias: "book"
};

/**
 * Obtiene información de una sección por su ID
 * @param {string} id - Identificador de la sección
 * @returns {object} - Datos de la sección o undefined si no existe
 */
export const getSeccionById = (id) => {
  return seccionesData.find(seccion => seccion.id === id);
};

export default seccionesData;
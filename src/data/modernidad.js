import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos sobre la modernidad y visión de futuro de Singapur
 */
export const modernidadData = {
  // Información general
  titulo: "Modernidad y Visión",
  descripcion: "Transformación urbana y proyección de Singapur hacia el futuro",
  coverImage: getAssetPath("/images/modernidad/singapore_skyline_night.jpg"),
  
  // Pilares de desarrollo
  pilares: [
    {
      nombre: "Planificación a largo plazo",
      descripcion: "Visión estratégica con horizontes de 50 años en infraestructura y desarrollo urbano.",
      icon: "chart-line",
      importancia: "alta"
    },
    {
      nombre: "Uso eficiente del espacio",
      descripcion: "Optimización del limitado territorio mediante desarrollo vertical y recuperación de tierras al mar.",
      icon: "compress-arrows-alt",
      importancia: "alta"
    },
    {
      nombre: "Sostenibilidad ambiental",
      descripcion: "Integración de espacios verdes y tecnologías limpias en el desarrollo urbano.",
      icon: "leaf",
      importancia: "alta"
    },
    {
      nombre: "Innovación tecnológica",
      descripcion: "Adopción temprana de nuevas tecnologías para mejorar la eficiencia urbana y la calidad de vida.",
      icon: "microchip",
      importancia: "alta"
    }
  ],
  
  // Proyectos emblemáticos
  proyectos: [
    {
      nombre: "Gardens by the Bay",
      año: 2012,
      descripcion: "Parque costero de 101 hectáreas con invernaderos innovadores y árboles artificiales verticales.",
      imageSrc: getAssetPath("/images/modernidad/gardens-by-the-bay.jpg"),
      imageAlt: "Supertrees en Gardens by the Bay iluminados por la noche",
      importancia: "alta"
    },
    {
      nombre: "Marina Bay Sands",
      año: 2010,
      descripcion: "Complejo integrado con hotel, casino, centro comercial y el icónico SkyPark en forma de barco.",
      imageSrc: getAssetPath("/images/modernidad/marina-bay-sands.jpg"),
      imageAlt: "Edificio de Marina Bay Sands con su característica plataforma superior",
      importancia: "alta"
    },
    {
      nombre: "Aeropuerto Changi",
      año: "1981 (renovado constantemente)",
      descripcion: "Considerado el mejor aeropuerto del mundo, con la reciente adición de Jewel, un complejo con el waterfall interior más alto del mundo.",
      imageSrc: getAssetPath("/images/modernidad/changi-jewel.jpg"),
      imageAlt: "Cascada interior en Jewel Changi Airport",
      importancia: "alta"
    },
    {
      nombre: "Smart Nation",
      año: 2014,
      descripcion: "Iniciativa nacional para integrar tecnología digital en todos los aspectos de la sociedad y la economía.",
      imageSrc: getAssetPath("/images/modernidad/smart-nation.jpg"),
      imageAlt: "Panel de control urbano para la iniciativa Smart Nation",
      importancia: "media"
    }
  ],
  
  // Sostenibilidad urbana
  sostenibilidad: [
    {
      titulo: "Ciudad Jardín",
      descripcion: "Visión que ha guiado el desarrollo urbano desde los 60s, integrando la vegetación en el entorno construido.",
      imageSrc: getAssetPath("/images/modernidad/city-in-garden.jpg"),
      imageAlt: "Edificio con jardines verticales en Singapur",
      icon: "leaf"
    },
    {
      titulo: "Gestión del agua",
      descripcion: "Sistema NEWater que recicla aguas residuales hasta estándares potables, reduciendo la dependencia de importaciones.",
      imageSrc: getAssetPath("/images/modernidad/newater.jpg"),
      imageAlt: "Instalación de tratamiento de agua NEWater",
      icon: "water"
    },
    {
      titulo: "Movilidad sostenible",
      descripcion: "Sistema de cuotas vehiculares y transporte público eficiente que reduce la congestión y emisiones.",
      imageSrc: getAssetPath("/images/modernidad/mrt-system.jpg"),
      imageAlt: "Sistema de metro MRT de Singapur",
      icon: "subway"
    },
    {
      titulo: "Edificios verdes",
      descripcion: "Programa Green Mark que certifica edificios sostenibles, con más del 80% proyectados como verdes para 2030.",
      imageSrc: getAssetPath("/images/modernidad/green-buildings.jpg"),
      imageAlt: "Rascacielos con diseño sostenible en Singapur",
      icon: "building"
    }
  ],
  
  // Citas sobre modernidad y visión
  citas: [
    {
      texto: "Singapur es una ciudad creada a partir de la imaginación. Dentro de una generación, hemos pasado de un asentamiento de bajos ingresos a una metrópolis global que supera por mucho nuestro tamaño.",
      autor: "Lee Hsien Loong, Primer Ministro de Singapur",
      fuente: "Discurso en el Foro Económico Mundial, 2019",
      citationId: 14
    },
    {
      texto: "El éxito de Singapur se basa en nuestra capacidad de anticipar el futuro, adaptarnos rápidamente al cambio y reinventarnos constantemente.",
      autor: "Tharman Shanmugaratnam, Alto Comisionado de Singapur",
      fuente: "Foro de Políticas Públicas, 2022",
      citationId: 15
    }
  ],

  // Imágenes para galería
  imagenesModernidad: [
    {
      src: getAssetPath("/images/modernidad/gardens-by-the-bay.jpg"),
      alt: "Gardens by the Bay",
      caption: "Gardens by the Bay, símbolo de la innovación arquitectónica y sostenibilidad"
    },
    {
      src: getAssetPath("/images/modernidad/singapore-skyline.jpg"),
      alt: "Horizonte de Singapur",
      caption: "El moderno horizonte de Singapur, reflejo de su desarrollo económico"
    },
    {
      src: getAssetPath("/images/modernidad/changi-airport.jpg"),
      alt: "Aeropuerto Changi",
      caption: "El premiado aeropuerto Changi, considerado uno de los mejores del mundo"
    },
    {
      src: getAssetPath("/images/modernidad/smart-city.jpg"),
      alt: "Iniciativas Smart Nation",
      caption: "Tecnología urbana como parte de la iniciativa Smart Nation"
    }
  ]
};

// Línea de tiempo de desarrollo urbano
export const hitos = [
  {
    año: "1965",
    titulo: "Independencia",
    descripcion: "Separación de Malasia y fundación de la República independiente de Singapur bajo el liderazgo de Lee Kuan Yew.",
    importancia: "alta"
  },
  {
    año: "1972",
    titulo: "Estrategia industrial",
    descripcion: "Cambio de política hacia industrias intensivas en tecnología y atracción de inversión extranjera.",
    importancia: "media"
  },
  {
    año: "1980s",
    titulo: "Centro financiero",
    descripcion: "Desarrollo como centro financiero regional con la liberalización del sector bancario.",
    importancia: "media"
  },
  {
    año: "2000",
    titulo: "Focus en conocimiento",
    descripcion: "Transición hacia una economía basada en el conocimiento con inversiones en biotecnología y educación superior.",
    importancia: "media"
  },
  {
    año: "2014",
    titulo: "Smart Nation",
    descripcion: "Lanzamiento de la iniciativa Smart Nation para integrar tecnología en todos los aspectos de la vida urbana.",
    importancia: "alta"
  },
  {
    año: "2019",
    titulo: "Plan Verde 2030",
    descripcion: "Ambicioso plan de sostenibilidad para combatir el cambio climático y mantener la ciudad habitable.",
    importancia: "alta"
  }
];

export default modernidadData;
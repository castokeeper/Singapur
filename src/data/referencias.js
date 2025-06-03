import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos bibliográficos y referencias sobre Singapur
 */
export const referenciasData = {
  // Información general
  titulo: "Referencias y Bibliografía",
  descripcion: "Fuentes consultadas para la elaboración de este sitio",
  coverImage: getAssetPath("/images/referencias/singapore_library.jpg"),
  
  // Referencias bibliográficas
  referencias: [
    {
      id: 1,
      tipo: "libro",
      titulo: "From Third World to First: The Singapore Story",
      autor: "Lee Kuan Yew",
      año: 2000,
      editorial: "HarperCollins",
      descripcion: "Memorias del primer Primer Ministro de Singapur donde detalla el desarrollo del país desde la independencia.",
      isbn: "978-0060197766",
      categoria: "Historia",
      imageCover: getAssetPath("/images/referencias/book-lee-kuan-yew.jpg")
    },
    {
      id: 2,
      tipo: "libro",
      titulo: "Singapore: A Biography",
      autor: "Mark Ravinder Frost & Yu-Mei Balasingamchow",
      año: 2013,
      editorial: "Editions Didier Millet",
      descripcion: "Historia detallada de Singapur desde sus orígenes hasta la actualidad.",
      isbn: "978-9814385473",
      imageCover: getAssetPath("/images/referencias/book-singapore-biography.jpg")
    },
    {
      id: 3,
      tipo: "artículo",
      titulo: "The Linguistic Heritage of Singapore",
      autor: "Catherine Lim",
      año: 2019,
      fuente: "The Straits Times",
      url: "https://www.straitstimes.com/singapore/linguistics",
      descripcion: "Análisis sobre la evolución de la identidad lingüística en Singapur.",
      fecha_acceso: "15/02/2023"
    },
    {
      id: 4,
      tipo: "informe",
      titulo: "Singapore's National Day Rally Speech",
      autor: "Lee Hsien Loong",
      año: 2021,
      institucion: "Prime Minister's Office",
      url: "https://www.pmo.gov.sg/Newsroom/National-Day-Rally-2021",
      descripcion: "Discurso oficial donde se abordan temas de políticas lingüísticas.",
      fecha_acceso: "10/01/2023"
    },
    {
      id: 8,
      tipo: "conferencia",
      titulo: "Singapore as a Global Financial Hub",
      autor: "Ravi Menon",
      año: 2022,
      evento: "Foro Financiero Global",
      lugar: "Singapur",
      descripcion: "Presentación del director de la MAS sobre el sistema financiero de Singapur.",
      fecha_acceso: "05/03/2023"
    },
    {
      id: 9,
      tipo: "discurso",
      titulo: "Harmony in Diversity: Singapore's Cultural Model",
      autor: "Lawrence Wong",
      año: 2022,
      evento: "Día de la Armonía Racial",
      lugar: "Singapur",
      descripcion: "Discurso del Ministro de Finanzas sobre el modelo multicultural de Singapur.",
      fecha_acceso: "12/02/2023"
    },
    {
      id: 14,
      tipo: "discurso",
      titulo: "Singapore's Urban Transformation",
      autor: "Lee Hsien Loong",
      año: 2019,
      evento: "Foro Económico Mundial",
      lugar: "Davos",
      descripcion: "Presentación sobre la transformación urbana de Singapur.",
      fecha_acceso: "20/01/2023"
    },
    {
      id: 15,
      tipo: "informe",
      titulo: "Smart Nation Singapore: Progress Report",
      autor: "Smart Nation and Digital Government Office",
      año: 2021,
      institucion: "Gobierno de Singapur",
      url: "https://www.smartnation.gov.sg/report-2021",
      descripcion: "Informe oficial sobre los avances de la iniciativa Smart Nation.",
      fecha_acceso: "25/01/2023"
    },
    {
      id: 16,
      titulo: "Historia de Singapur: De colonia a potencia económica",
      autor: "Lee Kuan Yew",
      año: "2000",
      tipo: "libro",
      categoria: "Historia",
      url: "https://ejemplo.com/libro",
      isbn: "978-3-16-148410-0",
      descripcion: "Análisis completo del desarrollo histórico de Singapur"
    },
    {
      id: 17,
      titulo: "El modelo económico singapurense",
      autor: "Chen Wei Lin",
      año: "2018",
      tipo: "artículo",
      categoria: "Economía",
      url: "https://ejemplo.com/articulo",
      doi: "10.1000/xyz123",
      descripcion: "Estudio sobre las políticas económicas que impulsaron el desarrollo"
    }
  ],
  
  // Recursos adicionales
  recursos: [
    {
      titulo: "Visit Singapore",
      descripcion: "Portal oficial de turismo de Singapur",
      url: "https://www.visitsingapore.com",
      tipo: "sitio web",
      imageSrc: getAssetPath("/images/referencias/visit-singapore.jpg")
    },
    {
      titulo: "Singapore Government Portal",
      descripcion: "Portal oficial del Gobierno de Singapur",
      url: "https://www.gov.sg",
      tipo: "sitio web",
      imageSrc: getAssetPath("/images/referencias/singapore-gov.jpg")
    },
    {
      titulo: "National Archives of Singapore",
      descripcion: "Archivo histórico digital con documentos, fotografías y registros",
      url: "https://www.nas.gov.sg",
      tipo: "archivo",
      imageSrc: getAssetPath("/images/referencias/singapore-archives.jpg")
    },
    {
      titulo: "Monetary Authority of Singapore",
      descripcion: "Sitio oficial de la Autoridad Monetaria de Singapur",
      url: "https://www.mas.gov.sg",
      tipo: "institución",
      imageSrc: getAssetPath("/images/referencias/mas-website.jpg")
    }
  ],
  
  // Multimedia
  multimedia: [
    {
      titulo: "Singapore: Biophilic City",
      tipo: "documental",
      creador: "National Geographic",
      año: 2018,
      duracion: "45 minutos",
      descripcion: "Documental sobre la integración de naturaleza en el entorno urbano de Singapur",
      url: "https://www.nationalgeographic.com/singapore-biophilic",
      imageSrc: getAssetPath("/images/referencias/documentary-biophilic.jpg")
    },
    {
      titulo: "History of Singapore",
      tipo: "podcast",
      creador: "BBC World Service",
      año: 2020,
      episodios: 6,
      descripcion: "Serie de podcast sobre la historia y evolución de Singapur desde su fundación",
      url: "https://www.bbc.co.uk/programmes/singapore-history",
      imageSrc: getAssetPath("/images/referencias/podcast-history.jpg")
    }
  ],
  
  // Datos interesantes
  datosInteresantes: [
    {
      dato: "Singapur es uno de los tres únicos estados-ciudad supervivientes en el mundo, junto con Mónaco y el Vaticano.",
      fuente: "Departamento de Estadísticas de Singapur, 2022",
      categoria: "geografía"
    },
    {
      dato: "El aeropuerto Changi de Singapur ha sido nombrado el mejor del mundo por Skytrax durante ocho años consecutivos (2013-2020).",
      fuente: "Skytrax World Airport Awards, 2020",
      categoria: "infraestructura"
    },
    {
      dato: "Singapur tiene una de las densidades de millonarios más altas del mundo, con aproximadamente el 5% de los hogares clasificados como millonarios.",
      fuente: "Credit Suisse Global Wealth Report, 2021",
      categoria: "Economía"
    },
    {
      dato: "A pesar de su pequeño tamaño, Singapur es el cuarto centro financiero más importante del mundo, después de Nueva York, Londres y Hong Kong.",
      fuente: "Global Financial Centres Index, 2023",
      categoria: "Economía"
    },
    {
      dato: "El sistema de reserva de agua de Singapur, llamado 'Four National Taps', incluye agua de lluvia recolectada, agua importada de Malasia, agua reciclada (NEWater) y agua desalinizada.",
      fuente: "PUB, Agencia Nacional del Agua de Singapur, 2022",
      categoria: "sostenibilidad"
    }
  ],
  
  // Imágenes para galería
  imagenesReferencias: [
    {
      src: getAssetPath("/images/referencias/singapore-library.jpg"),
      alt: "Biblioteca Nacional de Singapur",
      caption: "Biblioteca Nacional, centro de recursos bibliográficos sobre Singapur"
    },
    {
      src: getAssetPath("/images/referencias/archives-building.jpg"),
      alt: "Archivos Nacionales de Singapur",
      caption: "Edificio de los Archivos Nacionales donde se conservan documentos históricos"
    },
    {
      src: getAssetPath("/images/referencias/research-materials.jpg"),
      alt: "Materiales de investigación",
      caption: "Colección de libros y documentos utilizados como fuentes para este proyecto"
    },
    {
      src: getAssetPath("/images/referencias/digital-resources.jpg"),
      alt: "Recursos digitales",
      caption: "Plataformas digitales con información oficial sobre Singapur"
    }
  ]
};

// Exportar como default también para compatibilidad
export default referenciasData;
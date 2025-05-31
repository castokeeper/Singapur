import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos de festividades y tradiciones de Singapur
 */
export const festividadesData = {
  // Información general
  titulo: "Festividades y Tradiciones",
  descripcion: "Celebraciones multiculturales que reflejan la diversidad étnica de Singapur",
  coverImage: getAssetPath("/images/festividades/chinese-new-year.jpg"),
  
  // Festividades principales
  festividades: [
    {
      id: "chino",
      nombre: "Año Nuevo Chino",
      fecha: "Enero/Febrero (según calendario lunar)",
      comunidad: "China",
      descripcion: "La celebración más importante para la comunidad china, incluye desfiles, danzas de león y reuniones familiares con intercambio de sobres rojos (hongbao).",
      imageSrc: getAssetPath("/images/festividades/chinese-new-year-celebration.jpg"),
      imageAlt: "Celebración del Año Nuevo Chino en Chinatown",
      importancia: "alta",
      tradiciones: [
        "Limpieza completa de la casa antes del año nuevo",
        "Cenas familiares con platos simbólicos",
        "Distribución de sobres rojos con dinero (hongbao)"
      ]
    },
    {
      id: "hari-raya",
      nombre: "Hari Raya Puasa",
      fecha: "Mayo/Junio (fin del Ramadán)",
      comunidad: "Malaya",
      descripcion: "Marca el fin del Ramadán con oraciones especiales, visitas familiares y platos tradicionales como rendang y ketupat.",
      imageSrc: getAssetPath("/images/festividades/hari-raya.jpg"),
      imageAlt: "Celebración de Hari Raya Puasa en Geylang Serai",
      importancia: "alta",
      tradiciones: [
        "Pedir perdón a los mayores",
        "Usar ropa nueva, típicamente en tonos pastel",
        "Visitar familiares y compartir comidas tradicionales"
      ]
    },
    {
      id: "deepavali",
      nombre: "Deepavali",
      fecha: "Octubre/Noviembre",
      comunidad: "India",
      descripcion: "Festival hindú de las luces que simboliza el triunfo del bien sobre el mal, con iluminación de lámparas y elaborados rangolis.",
      imageSrc: getAssetPath("/images/festividades/deepavali.jpg"),
      imageAlt: "Decoración de luces para Deepavali en Little India",
      importancia: "alta",
      tradiciones: [
        "Creación de rangolis (diseños decorativos en el suelo)",
        "Encender lámparas de aceite (diyas)",
        "Intercambio de dulces y regalos"
      ]
    },
    {
      id: "vesak",
      nombre: "Vesak",
      fecha: "Mayo (luna llena)",
      comunidad: "Budista",
      descripcion: "Celebración budista del nacimiento, iluminación y fallecimiento de Buda. Los templos se llenan de devotos para ceremonias y ofrendas.",
      imageSrc: getAssetPath("/images/festividades/vesak-day.jpg"),
      imageAlt: "Templo budista durante Vesak",
      importancia: "media",
      tradiciones: [
        "Liberación ritual de animales (normalmente pájaros o peces)",
        "Ofrendas de flores y incienso",
        "Meditación colectiva"
      ]
    },
    {
      id: "nacional",
      nombre: "Día Nacional",
      fecha: "9 de agosto",
      comunidad: "Nacional",
      descripcion: "Conmemora la independencia de Singapur en 1965 con un desfile militar, exhibiciones aéreas y espectáculos culturales masivos.",
      imageSrc: getAssetPath("/images/festividades/national-day.jpg"),
      imageAlt: "Celebración del Día Nacional de Singapur",
      importancia: "alta",
      tradiciones: [
        "Desfile Nacional (NDP)",
        "Fuegos artificiales en Marina Bay",
        "Exhibición de la Fuerza Aérea de Singapur"
      ]
    }
  ],
  
  // Espacios culturales destacados
  espaciosCulturales: [
    {
      nombre: "Chinatown",
      descripcion: "Centro histórico de la comunidad china, especialmente animado durante el Año Nuevo Chino.",
      imagen: getAssetPath("/images/lugares/chinatown.jpg")
    },
    {
      nombre: "Little India",
      descripcion: "Vibrante barrio que cobra especial vida durante Deepavali y otras festividades indias.",
      imagen: getAssetPath("/images/lugares/little-india.jpg")
    },
    {
      nombre: "Kampong Glam",
      descripcion: "Antiguo barrio malayo y zona central para las celebraciones de Hari Raya.",
      imagen: getAssetPath("/images/lugares/kampong-glam.jpg")
    },
    {
      nombre: "Marina Bay",
      descripcion: "Epicentro de las celebraciones del Día Nacional y cuenta regresiva de Año Nuevo.",
      imagen: getAssetPath("/images/lugares/marina-bay.jpg")
    }
  ],
  
  // Citas sobre las festividades
  citas: [
    {
      texto: "Las festividades en Singapur no son solo celebraciones, sino puentes culturales que permiten a los ciudadanos experimentar y apreciar las tradiciones de sus compatriotas de diferentes etnias.",
      autor: "Lawrence Wong, Ministro de Finanzas de Singapur",
      fuente: "Discurso del Día de la Armonía Racial, 2022",
      citationId: 9
    },
    {
      texto: "En nuestras celebraciones multiculturales encontramos la verdadera esencia de Singapur: diversa en tradiciones pero unida en espíritu.",
      autor: "Halimah Yacob, Presidenta de Singapur",
      fuente: "Mensaje del Año Nuevo Chino, 2023",
      citationId: 10
    }
  ],
  
  // Galería de imágenes
  imagenesFestividades: [
    {
      src: getAssetPath("/images/festividades/festival-chino.jpg"),
      alt: "Celebración del Año Nuevo Chino en Chinatown",
      caption: "Luces y decoraciones durante el Año Nuevo Chino en Chinatown"
    },
    {
      src: getAssetPath("/images/festividades/festival-deepavali.jpg"),
      alt: "Celebración de Deepavali en Little India",
      caption: "Colorida decoración de luces y rangolis para Deepavali"
    },
    {
      src: getAssetPath("/images/festividades/festival-hari-raya.jpg"),
      alt: "Celebración de Hari Raya Puasa",
      caption: "Familias celebrando Hari Raya en Geylang Serai"
    },
    {
      src: getAssetPath("/images/festividades/national-day-fireworks.jpg"),
      alt: "Fuegos artificiales del Día Nacional",
      caption: "Espectacular muestra de fuegos artificiales durante la celebración del Día Nacional"
    }
  ]
};

// Exportar también la línea de tiempo de eventos festivos
export const eventosFestivos = [
  {
    año: "Enero/Febrero",
    titulo: "Año Nuevo Chino",
    descripcion: "La celebración más importante para la comunidad china, incluye desfiles, danzas de león y reuniones familiares con intercambio de sobres rojos.",
    importancia: "alta"
  },
  {
    año: "Abril/Mayo",
    titulo: "Vesak",
    descripcion: "Celebración budista del nacimiento, iluminación y fallecimiento de Buda. Los templos se llenan de devotos para ceremonias y ofrendas.",
    importancia: "media"
  },
  {
    año: "Mayo/Junio",
    titulo: "Hari Raya Puasa",
    descripcion: "Marca el fin del Ramadán con oraciones especiales, visitas familiares y platos tradicionales como rendang y ketupat.",
    importancia: "alta"
  },
  {
    año: "Julio/Agosto",
    titulo: "Festival del Dragón Hambriento",
    descripcion: "Conocido por sus carreras de botes dragón y el consumo de zongzi (bollos de arroz glutinoso envueltos en hojas de bambú).",
    importancia: "media"
  },
  {
    año: "9 de Agosto",
    titulo: "Día Nacional",
    descripcion: "Conmemora la independencia de Singapur con un desfile militar, exhibiciones aéreas y espectáculos culturales masivos.",
    importancia: "alta"
  },
  {
    año: "Octubre/Noviembre",
    titulo: "Deepavali",
    descripcion: "Festival hindú de las luces que simboliza el triunfo del bien sobre el mal, con iluminación de lámparas y elaborados rangolis.",
    importancia: "alta"
  },
  {
    año: "Diciembre",
    titulo: "Navidad",
    descripcion: "Celebrada ampliamente con decoraciones en Orchard Road, conciertos y mercados navideños que reflejan la influencia occidental.",
    importancia: "media"
  }
];

export default festividadesData;
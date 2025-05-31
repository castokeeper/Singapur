import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos sobre el sistema monetario de Singapur
 */
export const monetarioData = {
  // Información general
  titulo: "Sistema Monetario",
  descripcion: "El dólar de Singapur y el centro financiero global",
  coverImage: getAssetPath("/images/monetario/singapore_financial_district.jpg"),
  
  // Información sobre el dólar de Singapur
  moneda: {
    nombre: "Dólar de Singapur",
    codigo: "SGD",
    simbolo: "S$",
    creacion: 1967,
    descripcion: "Moneda oficial de la República de Singapur, establecida tras la separación de Malasia. Es una de las monedas más estables y fuertes de Asia.",
    imageSrc: getAssetPath("/images/monetario/sgd-notes.jpg"),
    imageAlt: "Billetes del dólar de Singapur"
  },
  
  // Autoridad Monetaria
  autoridad: {
    nombre: "Autoridad Monetaria de Singapur (MAS)",
    fundacion: 1971,
    descripcion: "Funciona como banco central y regulador financiero. Gestiona la política monetaria principalmente a través del tipo de cambio en lugar de las tasas de interés.",
    particularidad: "A diferencia de muchos bancos centrales, la MAS controla la inflación mediante la gestión del tipo de cambio del SGD frente a una cesta ponderada de divisas de los principales socios comerciales de Singapur.",
    imageSrc: getAssetPath("/images/monetario/mas-building.jpg"),
    imageAlt: "Edificio de la Autoridad Monetaria de Singapur"
  },
  
  // Billetes y monedas
  mediosPago: [
    {
      tipo: "Billetes",
      descripcion: "Los billetes actuales presentan al primer presidente de Singapur, Yusof bin Ishak, y muestran diferentes aspectos de la identidad nacional. Están fabricados con tecnología polimérica para mayor durabilidad.",
      denominaciones: ["$2", "$5", "$10", "$50", "$100", "$1000"],
      imageSrc: getAssetPath("/images/monetario/currency-notes.jpg")
    },
    {
      tipo: "Monedas",
      descripcion: "Las monedas muestran motivos de la flora y fauna local, reflejando la biodiversidad de Singapur. La serie actual incluye el tema 'Edificios representativos'.",
      denominaciones: ["5¢", "10¢", "20¢", "50¢", "$1"],
      imageSrc: getAssetPath("/images/monetario/singapore-coins.jpg")
    }
  ],
  
  // Centro financiero
  centroFinanciero: {
    ranking: 4,
    descripcion: "Singapur se ha consolidado como uno de los principales centros financieros del mundo, compitiendo directamente con Nueva York, Londres y Hong Kong.",
    fortalezas: [
      "Estabilidad política y económica",
      "Marco regulatorio transparente y robusto",
      "Ubicación estratégica en Asia",
      "Infraestructura de clase mundial",
      "Talento altamente calificado"
    ],
    distritos: [
      {
        nombre: "Raffles Place",
        descripcion: "Distrito financiero central donde se ubican la mayoría de bancos internacionales y empresas financieras",
        imageSrc: getAssetPath("/images/monetario/raffles-place.jpg")
      },
      {
        nombre: "Marina Bay",
        descripcion: "Extensión moderna del centro financiero con edificios icónicos como Marina Bay Financial Centre",
        imageSrc: getAssetPath("/images/monetario/marina-bay-financial.jpg")
      }
    ]
  },
  
  // Áreas de liderazgo financiero
  areasLiderazgo: [
    {
      id: "banca-internacional",
      titulo: "Banca internacional",
      descripcion: "Más de 200 bancos tienen presencia en Singapur, incluyendo las principales instituciones financieras del mundo que utilizan la ciudad como base para sus operaciones en el sureste asiático.",
      imageSrc: getAssetPath("/images/monetario/banking-district.jpg"),
      imageAlt: "Distrito bancario de Singapur",
      icon: "university"
    },
    {
      id: "gestion-patrimonios",
      titulo: "Gestión de patrimonios",
      descripcion: "El país gestiona más de 4 billones de SGD en activos, posicionándose como el principal centro de gestión de patrimonios de Asia y atrayendo fortunas de toda la región.",
      imageSrc: getAssetPath("/images/monetario/wealth-management.jpg"),
      imageAlt: "Oficina de gestión de patrimonio en Singapur",
      icon: "chart-pie"
    },
    {
      id: "fintech-innovacion",
      titulo: "Hub Fintech",
      descripcion: "Con más de 1.400 empresas fintech, Singapur lidera la innovación financiera en áreas como pagos digitales, blockchain, seguros tecnológicos y banca digital.",
      imageSrc: getAssetPath("/images/monetario/singapore-fintech.jpg"),
      imageAlt: "Festival Fintech de Singapur",
      icon: "laptop-code"
    },
    {
      id: "marco-regulatorio",
      titulo: "Marco regulatorio",
      descripcion: "La MAS ha desarrollado un sistema regulatorio robusto pero flexible que equilibra la innovación con la estabilidad, incluyendo sandbox regulatorios para nuevas tecnologías financieras.",
      imageSrc: getAssetPath("/images/monetario/mas-regulation.jpg"),
      imageAlt: "Regulación financiera en Singapur",
      icon: "balance-scale"
    }
  ],
  
  // Citas sobre sistema monetario
  citas: [
    {
      texto: "El sistema financiero de Singapur representa uno de los mejores ejemplos de cómo una visión clara, políticas consistentes y adaptación a las tendencias globales pueden transformar un pequeño mercado local en un centro financiero de clase mundial.",
      autor: "Ravi Menon, Director Ejecutivo de la MAS",
      fuente: "Discurso en el Foro Financiero Global, 2022",
      citationId: 8
    },
    {
      texto: "La política monetaria basada en el tipo de cambio de Singapur es un enfoque poco convencional pero altamente efectivo para una economía pequeña y abierta, permitiendo controlar la inflación mientras mantiene competitivo al país en el comercio internacional.",
      autor: "Christine Lagarde, ex-Directora del FMI",
      fuente: "Visita a Singapur, 2019",
      citationId: 9
    }
  ],

  // Imágenes para galería
  imagenesBilletes: [
    {
      src: getAssetPath("/images/monetario/sgd-notes.jpg"),
      alt: "Billetes del dólar de Singapur",
      caption: "Serie actual de billetes del dólar singapurense con motivos nacionales"
    },
    {
      src: getAssetPath("/images/monetario/mas-building.jpg"), 
      alt: "Autoridad Monetaria de Singapur",
      caption: "El edificio de la Autoridad Monetaria de Singapur (MAS)"
    },
    {
      src: getAssetPath("/images/monetario/singapore-coins.jpg"),
      alt: "Monedas de Singapur",
      caption: "Serie actual de monedas del dólar singapurense"
    },
    {
      src: getAssetPath("/images/monetario/singapore-fintech.jpg"),
      alt: "Fintech en Singapur",
      caption: "Festival Fintech de Singapur, reflejo de la innovación financiera del país"
    }
  ]
};

// Línea de tiempo del sistema monetario
export const eventosMoney = [
  {
    año: "1967",
    titulo: "Creación del dólar singapurense",
    descripcion: "Tras su independencia, Singapur establece su propia moneda separándose del dólar malayo.",
    importancia: "alta"
  },
  {
    año: "1971",
    titulo: "Establecimiento de la MAS",
    descripcion: "Se crea la Autoridad Monetaria de Singapur (MAS) como banco central y regulador financiero.",
    importancia: "alta"
  },
  {
    año: "1985",
    titulo: "Política cambiaria",
    descripcion: "Adopción de una política cambiaria basada en bandas de fluctuación administradas.",
    importancia: "media"
  },
  {
    año: "2002",
    titulo: "Serie Portrait",
    descripcion: "Lanzamiento de la serie Portrait de billetes con medidas de seguridad avanzadas.",
    importancia: "media"
  },
  {
    año: "2011",
    titulo: "Core Inflation",
    descripcion: "MAS comienza a usar la inflación núcleo como indicador principal para la política monetaria.",
    importancia: "media"
  },
  {
    año: "2017",
    titulo: "Singapore FinTech Festival",
    descripcion: "Singapur establece el mayor festival fintech del mundo, reforzando su posición como hub fintech.",
    importancia: "alta"
  }
];

export default monetarioData;
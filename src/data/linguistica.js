import { getAssetPath } from '../utils/assetUtils';

/**
 * Datos sobre la identidad lingüística de Singapur
 */
export const linguisticaData = {
  // Información general
  titulo: "Identidad Lingüística",
  descripcion: "Multilingüismo oficial y evolución del Singlish como expresión cultural única",
  coverImage: getAssetPath("/images/linguistica/multilingual-signs.jpg"),

  // Idiomas oficiales
  idiomas: [
    {
      nombre: "Inglés",
      porcentaje: 48.3,
      estatus: "Lengua franca administrativa",
      descripcion: "Principal idioma de gobierno, negocios y educación. Facilita la comunicación entre los diversos grupos étnicos.",
      imageSrc: getAssetPath("/images/linguistica/english-classroom.jpg"),
      imageAlt: "Clase de inglés en una escuela de Singapur",
      importancia: "alta"
    },
    {
      nombre: "Mandarín",
      porcentaje: 29.9,
      estatus: "Idioma de la comunidad china",
      descripcion: "Unificador de los diversos dialectos chinos presentes en Singapur, promovido por la campaña 'Speak Mandarin'.",
      imageSrc: getAssetPath("/images/linguistica/mandarin-signs.jpg"),
      imageAlt: "Señalización en mandarín en Chinatown",
      importancia: "alta"
    },
    {
      nombre: "Malayo",
      porcentaje: 9.2,
      estatus: "Idioma nacional",
      descripcion: "Idioma ceremonial y de la comunidad malaya. El himno nacional está en malayo.",
      imageSrc: getAssetPath("/images/linguistica/malay-culture.jpg"),
      imageAlt: "Celebración cultural malaya en Singapur",
      importancia: "alta"
    },
    {
      nombre: "Tamil",
      porcentaje: 5.4,
      estatus: "Idioma de la comunidad india",
      descripcion: "Principal idioma indio reconocido oficialmente, representa a la comunidad tamil del sur de India.",
      imageSrc: getAssetPath("/images/linguistica/tamil-writing.jpg"),
      imageAlt: "Escritura tamil en un templo de Singapur",
      importancia: "media"
    }
  ],

  // Información sobre Singlish
  singlish: {
    descripcion: "Variante local del inglés que incorpora elementos de mandarín, dialectos chinos, malayo y tamil. Aunque no es promovido oficialmente, es una parte importante de la identidad nacional.",
    caracteristicas: [
      "Uso de partículas como 'lah', 'lor', 'meh' al final de oraciones",
      "Gramática simplificada, a menudo omitiendo verbos auxiliares",
      "Incorporación de vocabulario de múltiples idiomas",
      "Entonación característica derivada de lenguas chinas"
    ],
    reconocimiento: "A pesar de las campañas por un inglés estándar, el Singlish ha ganado reconocimiento como parte del patrimonio cultural de Singapur en las últimas décadas.",
    imageSrc: getAssetPath("/images/linguistica/singlish-example.jpg"),
    imageAlt: "Cartel con expresiones en Singlish"
  },

  // Ejemplos de Singlish para mostrar
  ejemplosSinglish: [
    {
      frase: "Can or not?",
      traduccion: "¿Es posible? / ¿Se puede hacer?",
      explicacion: "Forma abreviada de preguntar si algo es posible o permitido"
    },
    {
      frase: "Don't play play!",
      traduccion: "¡No te lo tomes a la ligera! / ¡Esto es serio!",
      explicacion: "Advierte que algo debe tomarse en serio"
    },
    {
      frase: "This one very shiok lah!",
      traduccion: "¡Esto está muy bueno/es muy placentero!",
      explicacion: "'Shiok' expresa satisfacción o placer, 'lah' añade énfasis"
    },
    {
      frase: "You wait long already is it?",
      traduccion: "¿Has estado esperando mucho tiempo?",
      explicacion: "El 'is it' final convierte la frase en una pregunta"
    }
  ],

  // Políticas lingüísticas
  politicas: [
    {
      nombre: "Speak Good English Movement",
      año: 2000,
      descripcion: "Campaña para promover el uso de inglés estándar y reducir la dependencia del Singlish en contextos formales.",
      imageSrc: getAssetPath("/images/linguistica/speak-good-english.jpg")
    },
    {
      nombre: "Speak Mandarin Campaign",
      año: 1979,
      descripcion: "Iniciativa para fomentar el uso del mandarín en lugar de dialectos chinos como el hokkien o cantonés.",
      imageSrc: getAssetPath("/images/linguistica/speak-mandarin.jpg")
    },
    {
      nombre: "Sistema educativo bilingüe",
      año: 1966,
      descripcion: "Política educativa que requiere que los estudiantes aprendan inglés y su 'lengua materna' según su etnia.",
      imageSrc: getAssetPath("/images/linguistica/bilingual-education.jpg")
    }
  ],

  // Citas sobre el multilingüismo
  citas: [
    {
      texto: "El Singlish no es solo un modo de hablar, sino una expresión de la singapuridad, reflejando las diversas influencias culturales que han dado forma a nuestra sociedad.",
      autor: "Catherine Lim, escritora singapurense",
      fuente: "The Straits Times, 2019",
      citationId: 3
    },
    {
      texto: "Nuestro bilingüismo es un activo estratégico en un mundo globalizado, permitiéndonos conectar con Oriente y Occidente.",
      autor: "Lee Hsien Loong, Primer Ministro de Singapur",
      fuente: "Discurso del Día Nacional, 2021",
      citationId: 4
    }
  ],

  // Imágenes para galería
  imagenesLinguistica: [
    {
      src: getAssetPath("/images/linguistica/multilingual-signs.jpg"),
      alt: "Señalización multilingüe en Singapur",
      caption: "Señalización en los cuatro idiomas oficiales en un espacio público"
    },
    {
      src: getAssetPath("/images/linguistica/singlish-dictionary.jpg"),
      alt: "Diccionario de Singlish",
      caption: "Publicación que documenta y explica expresiones típicas del Singlish"
    },
    {
      src: getAssetPath("/images/linguistica/language-classroom.jpg"),
      alt: "Aula de idiomas en Singapur",
      caption: "Estudiantes en una clase bilingüe, siguiendo la política educativa del país"
    },
    {
      src: getAssetPath("/images/linguistica/ethnic-languages.jpg"),
      alt: "Libros en diferentes idiomas",
      caption: "Literatura en los cuatro idiomas oficiales de Singapur"
    }
  ]
};

// Línea de tiempo de evolución lingüística
export const timelineLinguistico = [
  {
    año: "1819",
    titulo: "Fundación de Singapur",
    descripcion: "Establecimiento del puerto comercial por Stamford Raffles, iniciando la influencia del inglés.",
    importancia: "media"
  },
  {
    año: "1955",
    titulo: "Sistema educativo colonial",
    descripcion: "Segregación lingüística con escuelas separadas en inglés, chino, malayo y tamil.",
    importancia: "media"
  },
  {
    año: "1966",
    titulo: "Política bilingüe",
    descripcion: "Implementación de educación bilingüe obligatoria: inglés más un segundo idioma oficial.",
    importancia: "alta"
  },
  {
    año: "1979",
    titulo: "Speak Mandarin Campaign",
    descripcion: "Inicio de la campaña para promover el mandarín sobre los dialectos chinos.",
    importancia: "alta"
  },
  {
    año: "2000",
    titulo: "Speak Good English Movement",
    descripcion: "Lanzamiento de campaña para promover el uso del inglés estándar sobre el Singlish.",
    importancia: "media"
  },
  {
    año: "2010s",
    titulo: "Reconocimiento del Singlish",
    descripcion: "Creciente aceptación del Singlish como parte de la identidad cultural singapurense.",
    importancia: "media"
  }
];

export default linguisticaData;
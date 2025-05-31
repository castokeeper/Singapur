import { getAssetPath } from '../utils/assetUtils';

export const seccionesData = [
  {
    id: 'linguistica',
    titulo: 'Identidad Lingüística',
    descripcion: 'Exploración del panorama multilingüe de Singapur y cómo sus cuatro idiomas oficiales dan forma a su identidad cultural.',
    contenido: [
      {
        titulo: 'Multilingüismo Oficial',
        parrafos: [
          'Singapur reconoce cuatro idiomas oficiales: inglés, mandarín, malayo y tamil. Esta política refleja la diversidad étnica de la nación y su compromiso con el mantenimiento de las raíces culturales.',
          'El inglés funciona como la lengua franca en los negocios, el gobierno y la educación, facilitando la comunicación entre los diversos grupos étnicos y posicionando a Singapur en la economía global.',
        ],
        imagenes: [
          {
            src: "/images/merlion-statue.jpg", // Usando imagen existente en lugar de /images/linguistica/senales-multilingues.jpg
            alt: "Estatua del Merlion, símbolo de la identidad de Singapur",
            caption: "El Merlion representa tanto la herencia marina de Singapur como su nombre original Singapura ('ciudad del león')"
          }
        ],
        galeriaTitle: 'Multilingüismo en el espacio público'
      },
      {
        titulo: 'Singlish: El Inglés Singapurense',
        parrafos: [
          'El Singlish es una forma coloquial de inglés único de Singapur, que incorpora elementos del mandarín, dialectos chinos, malayo y tamil. Aunque no es oficialmente promovido por el gobierno, representa una parte importante de la identidad cultural singapurense.',
          'Este dialecto local incluye expresiones como "lah", "lor" y "meh" que añaden matices de significado, y ha evolucionado como una expresión de la identidad nacional compartida.'
        ],
        cita: {
          texto: 'El Singlish no es solo un modo de hablar, sino una expresión de la singapuridad, reflejando las diversas influencias culturales que han dado forma a nuestra sociedad.',
          autor: 'Catherine Lim, escritora singapurense',
          referencia: '3'
        }
      }
    ],
    datosClave: [
      { titulo: 'Idiomas oficiales', valor: 'Inglés, Mandarín, Malayo, Tamil' },
      { titulo: 'Lengua franca', valor: 'Inglés' },
      { titulo: 'Idioma nacional', valor: 'Malayo' },
      { titulo: 'Campaña lingüística', valor: 'Speak Good English Movement (desde 2000)' }
    ],
    timeline: [
      {
        year: 1819,
        title: 'Fundación de Singapur',
        description: 'Sir Stamford Raffles establece un puesto comercial británico, iniciando la influencia del idioma inglés.'
      },
      {
        year: 1959,
        title: 'Autogobierno',
        description: 'Singapur obtiene el autogobierno, comenzando a formular sus propias políticas lingüísticas.'
      },
      {
        year: 1965,
        title: 'Independencia',
        description: 'Tras la independencia, Singapur adopta una política de multilingüismo con inglés como lengua principal para los negocios y la administración.'
      },
      {
        year: 1979,
        title: 'Campaña "Habla Mandarín"',
        description: 'Lanzamiento de la campaña para promover el mandarín sobre los dialectos chinos.'
      }
    ],
    ubicaciones: [
      { 
        lat: 1.2966, 
        lng: 103.8464, 
        popup: '<strong>National Museum of Singapore</strong><br>Exhibiciones sobre la historia lingüística' 
      },
      { 
        lat: 1.2909, 
        lng: 103.7764, 
        popup: '<strong>Universidad Nacional de Singapur</strong><br>Centro de investigación lingüística' 
      }
    ]
  },
  
  {
    id: 'monetario',
    titulo: 'Sistema Monetario',
    descripcion: 'Análisis del dólar singapurense y el papel de Singapur como centro financiero internacional.',
    contenido: [
      {
        titulo: 'El Dólar Singapurense',
        parrafos: [
          'El dólar de Singapur (SGD) es una de las monedas más estables del Sudeste Asiático. Su estabilidad se debe en gran parte a la sólida economía del país y a las políticas monetarias prudentes implementadas por la Autoridad Monetaria de Singapur (MAS).',
          'A diferencia de muchos bancos centrales que utilizan las tasas de interés como herramienta principal, la MAS utiliza el tipo de cambio como instrumento principal de política monetaria, permitiendo que el SGD se aprecie o deprecie contra una canasta ponderada de monedas de los principales socios comerciales.'
        ],
        imagenes: [
          {
            src: getAssetPath('/images/singapore-skyline.jpg'),
            alt: "Horizonte financiero de Singapur",
            caption: "El distrito financiero de Singapur, centro del sistema monetario del país"
          }
        ]
      }
    ],
    datosClave: [
      { titulo: 'Moneda', valor: 'Dólar singapurense (SGD)' },
      { titulo: 'Autoridad emisora', valor: 'Autoridad Monetaria de Singapur (MAS)' },
      { titulo: 'Ranking financiero mundial', valor: '4º centro financiero (Global Financial Centres Index)' }
    ]
  },
  
  {
    id: 'festividades',
    titulo: 'Festividades y Celebraciones',
    descripcion: 'Las celebraciones multiculturales que reflejan la diversidad étnica y religiosa de Singapur.',
    contenido: [
      {
        titulo: 'Año Nuevo Chino',
        parrafos: [
          'El Año Nuevo Chino es una de las festividades más importantes de Singapur, particularmente para la comunidad china que constituye aproximadamente el 75% de la población. Las calles se adornan con linternas rojas y decoraciones festivas.',
          'Las celebraciones incluyen el intercambio de hongbao (sobres rojos con dinero), reuniones familiares con abundantes comidas, y el espectacular desfile Chingay.'
        ]
      }
    ],
    datosClave: [
      { titulo: 'Festividades principales', valor: 'Año Nuevo Chino, Hari Raya Puasa, Deepavali, Navidad' },
      { titulo: 'Fiesta Nacional', valor: '9 de agosto (Día Nacional)' }
    ]
  },
  
  {
    id: 'modernidad',
    titulo: 'Modernidad y Futuro',
    descripcion: 'La evolución de Singapur como nación tecnológicamente avanzada y su visión Smart Nation.',
    contenido: [
      {
        titulo: 'Smart Nation Initiative',
        parrafos: [
          'Lanzada en 2014, la iniciativa Smart Nation busca transformar Singapur mediante la tecnología para mejorar la vida, crear más oportunidades y construir comunidades más fuertes.',
          'Los proyectos incluyen sistemas de transporte inteligente, pagos digitales universales, y servicios públicos digitalizados que hacen de Singapur uno de los países más conectados del mundo.'
        ]
      }
    ],
    datosClave: [
      { titulo: 'Velocidad de internet', valor: 'Una de las más rápidas del mundo (promedio 200 Mbps)' },
      { titulo: 'Penetración de smartphones', valor: 'Más del 85% de la población' }
    ]
  }
];
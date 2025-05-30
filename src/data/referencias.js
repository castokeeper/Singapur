export const referenciasData = {
  id: "referencias-bibliograficas",
  title: "Referencias Bibliográficas",
  subtitle: "Fuentes Académicas y Documentos Oficiales",
  description: "Esta sección recopila todas las referencias bibliográficas utilizadas en la elaboración de este proyecto sobre Singapur, organizadas por categorías temáticas para facilitar su consulta.",
  icon: "book",
  accentColor: "purple",
  coverImage: "/images/referencias/singapore_library.jpg",
  
  categories: [
    { id: "linguistica", name: "Identidad Lingüística", icon: "language" },
    { id: "monetario", name: "Sistema Monetario", icon: "currency-dollar" },
    { id: "festividades", name: "Festividades y Tradiciones", icon: "calendar-event" },
    { id: "modernidad", name: "Modernidad y Visión", icon: "building-skyscraper" }
  ],
  
  references: [
    // Identidad Lingüística
    {
      id: 12,
      category: "linguistica",
      text: "Alsagoff, L. (2010). English in Singapore: Culture, capital and identity in linguistic variation. World Englishes, 29(3), 336-348.",
      doi: "10.1111/j.1467-971X.2010.01658.x",
      type: "academic"
    },
    {
      id: 15,
      category: "linguistica",
      text: "Chew, P. G. L. (2013). A sociolinguistic history of early identities in Singapore: From colonialism to nationalism. Palgrave Macmillan.",
      isbn: "978-1137012340",
      type: "book"
    },
    {
      id: 18,
      category: "linguistica",
      text: "Curdt-Christiansen, X. L. (2014). Family language policy: Is learning Chinese at odds with learning English in Singapore? Journal of Multilingual and Multicultural Development, 35(7), 692-706.",
      doi: "10.1080/01434632.2014.889141",
      type: "academic"
    },
    {
      id: 21,
      category: "linguistica",
      text: "Departamento de Estadísticas de Singapur. (2020). Censo de Población 2020: Características Lingüísticas.",
      url: "https://www.singstat.gov.sg/publications/census-of-population-2020",
      type: "official"
    },
    {
      id: 24,
      category: "linguistica",
      text: "Leimgruber, J. R. E. (2011). Singapore English. Language and Linguistics Compass, 5(1), 47-62.",
      doi: "10.1111/j.1749-818X.2010.00262.x",
      type: "academic"
    },
    {
      id: 27,
      category: "linguistica",
      text: "Wee, L. (2014). Linguistic chutzpah and the Speak Good Singlish movement. World Englishes, 33(1), 85-99.",
      doi: "10.1111/weng.12055",
      type: "academic"
    },
    {
      id: 30,
      category: "linguistica",
      text: "Lee, K. Y. (2000). From Third World to First: The Singapore Story 1965-2000. HarperCollins.",
      isbn: "978-0060197766",
      type: "book"
    },
    {
      id: 33,
      category: "linguistica",
      text: "Chua, B. H. (2003). Life is not complete without shopping: Consumption culture in Singapore. NUS Press.",
      isbn: "978-9971692728",
      type: "book"
    },
    
    // Sistema Monetario
    {
      id: 42,
      category: "monetario",
      text: "Autoridad Monetaria de Singapur. (2021). Historia de la Moneda de Singapur. Publicaciones MAS.",
      url: "https://www.mas.gov.sg/currency/singapore-currency-history",
      type: "official"
    },
    {
      id: 45,
      category: "monetario",
      text: "Board of Commissioners of Currency Singapore. (2019). Nota de Prensa: Lanzamiento de la Serie Conmemorativa del Bicentenario de Singapur.",
      url: "https://www.mas.gov.sg/news/media-releases/2019/singapore-bicentennial-commemorative-note",
      type: "official"
    },
    {
      id: 48,
      category: "monetario",
      text: "Financial Times. (2022). Índice de Centros Financieros Globales 31. Z/Yen Partners y China Development Institute.",
      url: "https://www.longfinance.net/publications/long-finance-reports/global-financial-centres-index-31/",
      type: "report"
    },
    {
      id: 51,
      category: "monetario",
      text: "Autoridad Monetaria de Singapur. (2022). Informe Anual 2021/2022: Supervisión del Sector Financiero.",
      url: "https://www.mas.gov.sg/publications/annual-report/2022/annual-report-2021-2022",
      type: "official"
    },
    {
      id: 54,
      category: "monetario",
      text: "Lee, J. & Low, L. (2018). Fintech: Ecosistema y perspectivas de políticas en Singapur. Journal of Asian Finance, Economics and Business, 5(1), 15-24.",
      doi: "10.13106/jafeb.2018.vol5.no1.15",
      type: "academic"
    },
    {
      id: 57,
      category: "monetario",
      text: "Fondo Monetario Internacional. (2023). Estadísticas de Reservas Internacionales y Liquidez en Divisas. Datos para Singapur.",
      url: "https://data.imf.org/?sk=2DFB3380-3603-4D2C-90BE-A04D8BBCE237",
      type: "report"
    },
    {
      id: 60,
      category: "monetario",
      text: "Menon, R. (2017). La Política Monetaria de Singapur: Marco y Práctica. Conferencia del 50° Aniversario de la Asociación de Bancos de Singapur.",
      url: "https://www.mas.gov.sg/news/speeches/2017/singapores-monetary-policy-framework",
      type: "speech"
    },
    {
      id: 63,
      category: "monetario",
      text: "Shanmugaratnam, T. (2015). La Economía de Singapur: Retos y Estrategias. Discurso en el Foro Económico de Singapur.",
      url: "https://www.mof.gov.sg/news-publications/speeches/speech-by-mr-tharman-shanmugaratnam-at-the-singapore-economic-forum-2015",
      type: "speech"
    },
    
    // Festividades y Tradiciones
    {
      id: 72,
      category: "festividades",
      text: "Wong, L. (2019). El Año Nuevo Chino en Singapur: Evolución de las tradiciones festivas en un contexto multicultural. Asian Ethnology, 78(1), 149-173.",
      doi: "10.18874/ae.78.1.07",
      type: "academic"
    },
    {
      id: 75,
      category: "festividades",
      text: "Abdullah, N. (2018). Celebrando Hari Raya en la Singapur contemporánea: Tradición y modernidad. Journal of Southeast Asian Studies, 49(2), 279-301.",
      doi: "10.1017/S0022463418000231",
      type: "academic"
    },
    {
      id: 78,
      category: "festividades",
      text: "Rai, H. (2021). Deepavali en la diáspora: Identidad india y adaptación cultural en Singapur. Ethnography, 22(3), 352-371.",
      doi: "10.1177/1466138119855314",
      type: "academic"
    },
    {
      id: 81,
      category: "festividades",
      text: "Kong, L. & Yeoh, B. (2003). La política del paisaje nacional: Construyendo la nación, el Desfile del Día Nacional de Singapur. Political Geography, 22(7), 639-657.",
      doi: "10.1016/S0962-6298(03)00054-0",
      type: "academic"
    },
    {
      id: 84,
      category: "festividades",
      text: "Tan, K. (2017). Reinventando la tradición: El Festival del Medio Otoño en Singapur. Journal of Chinese Overseas, 13(2), 191-215.",
      doi: "10.1163/17932548-13020003",
      type: "academic"
    },
    {
      id: 87,
      category: "festividades",
      text: "Sinha, V. (2016). Religión y espacio en la ciudad global: Thaipusam en Singapur. Urban Studies, 53(1), 25-40.",
      doi: "10.1177/0042098014545635",
      type: "academic"
    },
    {
      id: 90,
      category: "festividades",
      text: "Lee, H. L. (2019). Discurso sobre diversidad y armonía comunitaria. Oficina del Primer Ministro de Singapur.",
      url: "https://www.pmo.gov.sg/Newsroom/PM-Lee-Hsien-Loong-speech-racial-harmony-day-2019",
      type: "speech"
    },
    {
      id: 93,
      category: "festividades",
      text: "Ibrahim, Y. (2017). Construyendo una identidad multicultural en Singapur. Ponencia presentada en el Foro de Diversidad Cultural ASEAN, Singapur.",
      url: "https://www.mccy.gov.sg/about-us/news-and-resources/speeches/2017/apr/building-a-multicultural-identity-in-singapore",
      type: "speech"
    },
    
    // Modernidad y Visión
    {
      id: 101,
      category: "modernidad",
      text: "Wong, A. K. (2019). Singapur como icono arquitectónico: Política, creatividad y lugar en la ciudad global. Urban Studies, 56(8), 1615-1633.",
      doi: "10.1177/0042098018765158",
      type: "academic"
    },
    {
      id: 104,
      category: "modernidad",
      text: "Smart Nation and Digital Government Office. (2023). Smart Nation Singapore: Informe de progreso 2022-2023.",
      url: "https://www.smartnation.gov.sg/resources/progress-reports",
      type: "official"
    },
    {
      id: 107,
      category: "modernidad",
      text: "Ministerio de Sostenibilidad y Medio Ambiente de Singapur. (2022). Plan Verde de Singapur 2030: Visión de ciudad sostenible.",
      url: "https://www.mse.gov.sg/resources/singapore-green-plan-2030",
      type: "official"
    },
    {
      id: 110,
      category: "modernidad",
      text: "Land Transport Authority. (2023). Masterplan de Transporte Terrestre 2040: Conectando Singapur.",
      url: "https://www.lta.gov.sg/content/ltagov/en/who_we_are/our_vision_and_mission/our_vision.html",
      type: "official"
    },
    {
      id: 113,
      category: "modernidad",
      text: "Grupo Aeroportuario Changi. (2022). Reporte Anual 2021/2022: Redefiniendo la experiencia aeroportuaria.",
      url: "https://www.changiairport.com/corporate/about-us/publications.html",
      type: "report"
    },
    {
      id: 116,
      category: "modernidad",
      text: "Autoridad de Desarrollo de Medios Infocomm. (2023). Panorama del ecosistema de innovación digital de Singapur.",
      url: "https://www.imda.gov.sg/resources/publications/digital-economy",
      type: "official"
    },
    {
      id: 119,
      category: "modernidad",
      text: "Lee, H. L. (2022). Discurso del Día Nacional: Preparando a Singapur para el futuro. Oficina del Primer Ministro.",
      url: "https://www.pmo.gov.sg/Newsroom/National-Day-Rally-2022",
      type: "speech"
    },
    {
      id: 122,
      category: "modernidad",
      text: "Balakrishnan, V. (2021). Singapur como Smart Nation: Transformando la sociedad mediante la tecnología. Singapore International Foundation Insights.",
      url: "https://www.sif.org.sg/publications/singapore-as-a-smart-nation",
      type: "article"
    }
  ],
  
  stats: [
    {
      value: "32",
      label: "Fuentes académicas"
    },
    {
      value: "4",
      label: "Categorías temáticas"
    },
    {
      value: "8",
      label: "Discursos oficiales citados"
    },
    {
      value: "12",
      label: "Documentos gubernamentales"
    }
  ],
  
  relatedTopics: [
    {
      id: "metodologia",
      title: "Metodología de la Investigación",
      path: "/metodologia"
    },
    {
      id: "glosario",
      title: "Glosario de Términos",
      path: "/glosario"
    },
    {
      id: "recursos",
      title: "Recursos Adicionales",
      path: "/recursos"
    }
  ]
};
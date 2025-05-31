import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Componente que muestra información sobre festividades y tradiciones de Singapur
 */
const Festividades = () => {
  // Imágenes para la galería
  const imagenesFestividades = [
    {
      src: "/images/gardens-by-the-bay.jpg",
      alt: "Celebración del Año Nuevo Chino",
      caption: "Decoraciones durante las celebraciones del Año Nuevo Chino en Singapur"
    },
    {
      src: "/images/merlion-statue.jpg",
      alt: "Festival de Deepavali",
      caption: "Luces y decoraciones coloridas durante el Festival de Deepavali"
    }
  ];
  
  // Eventos para la línea de tiempo anual
  const timelineFestividades = [
    {
      year: "Enero-Febrero",
      title: "Año Nuevo Chino",
      description: "La festividad más importante para la comunidad china. Se celebra con desfiles, leones danzantes y reuniones familiares."
    },
    {
      year: "Abril-Mayo",
      title: "Vesak",
      description: "Festividad budista que conmemora el nacimiento, iluminación y muerte de Buda con ceremonias en templos."
    },
    {
      year: "Mayo-Junio",
      title: "Hari Raya Puasa",
      description: "Marca el fin del Ramadán para la comunidad musulmana con oraciones, festines y reuniones familiares."
    },
    {
      year: "Agosto",
      title: "Día Nacional",
      description: "Celebración de la independencia de Singapur con un gran desfile, espectáculos aéreos y fuegos artificiales."
    },
    {
      year: "Octubre-Noviembre",
      title: "Deepavali",
      description: "Festival de las luces hindú, celebrado con decoraciones brillantes en Little India y ceremonias religiosas."
    },
    {
      year: "Diciembre",
      title: "Navidad",
      description: "Celebrada ampliamente con decoraciones espectaculares en Orchard Road y eventos públicos."
    }
  ];

  return (
    <div className="festividades-tradiciones">
      <section className="mb-5">
        <h2 className="h3 mb-4">Calendario Multicultural</h2>
        <p className="mb-3">
          Singapur celebra festividades de todas sus principales comunidades étnicas y religiosas, 
          reflejando su rica diversidad cultural. Los días festivos oficiales incluyen celebraciones 
          chinas, malayas, indias y occidentales, creando un tapiz único de tradiciones compartidas.
        </p>
        
        <div className="table-responsive mb-4">
          <table className="table table-striped table-hover">
            <thead className="table-warning">
              <tr>
                <th>Festividad</th>
                <th>Origen</th>
                <th>Fecha</th>
                <th>Comunidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Año Nuevo Chino</td>
                <td>Chino</td>
                <td>Enero-Febrero (lunar)</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Hari Raya Puasa</td>
                <td>Islámico</td>
                <td>Variable (lunar)</td>
                <td>Malaya</td>
              </tr>
              <tr>
                <td>Deepavali</td>
                <td>Hindú</td>
                <td>Octubre-Noviembre</td>
                <td>India</td>
              </tr>
              <tr>
                <td>Navidad</td>
                <td>Cristiano</td>
                <td>25 de diciembre</td>
                <td>Occidental</td>
              </tr>
              <tr>
                <td>Vesak</td>
                <td>Budista</td>
                <td>Mayo (luna llena)</td>
                <td>China/Asia</td>
              </tr>
              <tr>
                <td>Día Nacional</td>
                <td>Singapur</td>
                <td>9 de agosto</td>
                <td>Todas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ImageGallery 
        images={imagenesFestividades} 
        title="Festividades en Singapur" 
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Año Nuevo Chino</h2>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p className="mb-3">
              El Año Nuevo Chino es una de las festividades más importantes de Singapur, particularmente 
              para la comunidad china que constituye aproximadamente el 75% de la población. Las calles 
              se adornan con linternas rojas y decoraciones festivas.
            </p>
            <p className="mb-3">
              Las celebraciones incluyen el intercambio de hongbao (sobres rojos con dinero), reuniones 
              familiares con abundantes comidas, y el espectacular desfile Chingay con carrozas, 
              bailarines y artistas de todo el mundo.
            </p>
            <div className="alert alert-warning">
              <div className="d-flex">
                <div className="me-3">
                  <i className="fas fa-dragon fa-2x"></i>
                </div>
                <div>
                  <h5 className="alert-heading">Lo yuen-hei (捞鱼生)</h5>
                  <p className="mb-0">
                    Una tradición única del Año Nuevo Chino en Singapur y Malasia es el "lo-hei" o 
                    "prosperidad lanzada", un plato festivo de pescado crudo y verduras que los comensales 
                    mezclan juntos con palillos mientras expresan buenos deseos para el año nuevo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-warning mb-4">
              <div className="card-header bg-warning text-white">
                Tradiciones del Año Nuevo Chino
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Reunión familiar en Nochevieja lunar</li>
                <li className="list-group-item">Intercambio de hongbao (sobres rojos)</li>
                <li className="list-group-item">Limpieza completa de la casa antes del año nuevo</li>
                <li className="list-group-item">Desfiles con danza del león y dragón</li>
                <li className="list-group-item">Decoraciones rojas y doradas para buena suerte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Hari Raya y Festividades Malayas</h2>
        <p className="mb-3">
          Para la comunidad malaya de Singapur, mayoritariamente musulmana, el Hari Raya Puasa 
          (que marca el fin del Ramadán) y el Hari Raya Haji son celebraciones significativas 
          que reúnen a familias y comunidades.
        </p>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Hari Raya Puasa</h5>
                <p className="card-text">
                  Marca el final del mes sagrado de Ramadán con oraciones en las mezquitas, 
                  seguidas de visitas a familiares y amigos. Es tradicional pedir perdón por 
                  ofensas pasadas y fortalecer lazos familiares.
                </p>
                <p className="card-text">
                  En Geylang Serai, se instala un bazar festivo con alimentos tradicionales, 
                  decoraciones y ropa. La zona se ilumina con decoraciones espectaculares.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Gastronomía festiva</h5>
                <p className="card-text">
                  Los platos tradicionales incluyen el ketupat (pastel de arroz en hojas de palma), 
                  rendang (carne en salsa de coco picante), y diversos kuih (pasteles tradicionales).
                </p>
                <p className="card-text">
                  Las casas se abren a visitantes con abundantes mesas de buffet, siguiendo 
                  la tradición de hospitalidad malaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="Las festividades en Singapur son un reflejo perfecto de nuestra identidad multicultural. Celebramos juntos, aprendemos de las tradiciones de los demás, y creamos un sentido único de unidad en la diversidad."
        author="Edwin Tong, Ministro de Cultura, Comunidad y Juventud"
        variant="warning"
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Deepavali: Festival de las Luces</h2>
        <p className="mb-3">
          Deepavali, también conocido como Diwali, es el festival hindú de las luces que simboliza 
          la victoria de la luz sobre la oscuridad y el bien sobre el mal. En Singapur, Little India 
          se transforma con espectaculares decoraciones y luces coloridas.
        </p>
        
        <div className="row align-items-center">
          <div className="col-md-8">
            <p>
              Las familias indias limpian y decoran sus hogares con rangoli (diseños coloridos), 
              encienden lámparas de aceite y velas, realizan oraciones (puja) e intercambian dulces 
              y regalos. Los templos hindúes están especialmente activos durante este periodo.
            </p>
            <p>
              El Bazar Festivo de Deepavali en Little India atrae a singapurenses de todas las etnias 
              que vienen a comprar dulces tradicionales, lámparas de aceite, artículos religiosos y ropa festiva.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Kolam/Rangoli</h5>
                <p className="card-text">
                  Diseños intrincados creados con arroz coloreado, harina o tiza en polvo, 
                  que adornan las entradas de los hogares para dar la bienvenida a las deidades.
                </p>
                <div className="mt-3">
                  <span className="badge bg-danger m-1">Rojo: Amor</span>
                  <span className="badge bg-warning m-1">Amarillo: Conocimiento</span>
                  <span className="badge bg-success m-1">Verde: Fertilidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Día Nacional de Singapur</h2>
        <p className="mb-3">
          El 9 de agosto marca el Día Nacional de Singapur, conmemorando su independencia de Malasia 
          en 1965. Es una celebración vibrante que une a todos los singapurenses independientemente 
          de su origen étnico o religioso.
        </p>

        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">National Day Parade (NDP)</h5>
            <p className="card-text">
              El evento principal es el gran desfile que incluye un desfile militar, actuaciones 
              multiculturales, espectáculos aéreos y un impresionante espectáculo de fuegos artificiales. 
              Cada año tiene un tema diferente que refleja los valores y aspiraciones nacionales.
            </p>
            <p className="card-text">
              Los singaporenses visten con orgullo los colores nacionales rojo y blanco, y los 
              HDB (bloques de viviendas públicas) están decorados con banderas. Las comunidades 
              organizan celebraciones locales que fomentan la cohesión social.
            </p>
          </div>
        </div>

        <div className="alert alert-warning">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-music fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Canciones nacionales</h5>
              <p className="mb-0">
                Las canciones patrióticas como "Majulah Singapura" (el himno nacional), "Count on Me, Singapore", 
                "Stand Up for Singapore" y "Home" son cantadas con entusiasmo durante este periodo. Se convierten 
                en sintonías populares en las semanas previas al Día Nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline 
        events={timelineFestividades} 
        title="Calendario anual de festividades" 
        variant="warning" 
      />
    </div>
  );
};

export default Festividades;
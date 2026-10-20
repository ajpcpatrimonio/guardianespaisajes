(() => {
  "use strict";

  // Los 14 puntos del mapa. Cambia nombres, descripciones, imágenes y coordenadas aquí.
  const places = [
    { id: 1, name: "Paisaje Cultural de Aranjuez", x: 42, y: 45, description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", year: "2001", location: "Aranjuez, Comunidad de Madrid, España", image: "https://www.alianzapaisajesculturales.org/wp-content/uploads/2018/05/Antonio-Castillo-L%C3%B3pez-3.jpg", caption: "Imagen e ilustración del mapa: Palacio Real de Aranjuez (Comunidad de Madrid, España).", game: "game1" },
    { id: 2, name: "La Alhambra y el Generalife", x: 48, y: 66, description: "La Alhambra, situada en Granada, es un conjunto monumental de origen nazarí que constituye uno de los principales referentes del patrimonio cultural español. Construida como ciudad palatina, refleja la arquitectura, el arte y la tradición islámica de al-Ándalus. Sus palacios, patios y jardines destacan por su belleza, sus elementos decorativos y la presencia del agua, esencial para su diseño y funcionamiento. El conjunto incluye también el Generalife, rodeado de jardines históricos. Tras la incorporación de Granada a la Corona de Castilla en 1492, experimentó diversas transformaciones. Actualmente, es un importante símbolo cultural y turístico, reconocido internacionalmente.", year: "1984", location: "La Alhambra, Granada, Andalucia, España", image: "https://www.alianzapaisajesculturales.org/wp-content/gallery/alhambra-de-granada/Alhambra_Expo_-7.jpg", caption: "Imagen e ilustración del mapa: La Alhambra (Granada, Andalucía, España).", game: "game2" },
    { id: 3, name: "El Palmeral de Elche", x: 60, y: 66, description: "El Palmeral de Elche, situado en la provincia de Alicante, es un paisaje cultural formado por miles de palmeras cuyo origen y desarrollo están estrechamente vinculados a la tradición agrícola de al-Ándalus. Su sistema de cultivo, diseñado durante la época islámica, combina palmeras y canales de riego para aprovechar el agua y crear condiciones favorables para la agricultura en un entorno árido. Este ingenioso sistema hidráulico tradicional continúa parcialmente en funcionamiento. Con más de 200.000 palmeras, constituye un paisaje singular integrado en la ciudad. Fue declarado Patrimonio Mundial por la UNESCO en el año 2000, por su valor histórico, cultural y agrícola.", year: "2000", location: "Elche, Alicante, Comunidad Valenciana, España", image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/el-palmeral-de-elche/Elche_Expo_-10.jpg", caption: "Imagen e ilustración del mapa: El Palmeral de Elche (Alicante, Comunidad Valenciana, España).", game: "game3" },
    { id: 4, name: "Ibiza: biodiversidad y cultura", x: 74, y: 58, description: "La isla de Ibiza, declarada Patrimonio Mundial por la UNESCO en 1999, destaca por la relación entre su patrimonio cultural y su riqueza natural. La isla conserva importantes vestigios de las civilizaciones fenicia y púnica, como el poblado de Sa Caleta y la necrópolis de Puig des Molins. También sobresale Dalt Vila, su recinto histórico amurallado, cuyas fortificaciones renacentistas reflejan la importancia estratégica de la isla en el Mediterráneo. Su valor patrimonial incluye las praderas de posidonia oceánica, fundamentales para la biodiversidad marina y la conservación de la transparencia de sus aguas. Estos elementos representan la estrecha conexión entre naturaleza e historia.", year: "1999", location: "Ibiza, Islas Baleares, España", image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/ibiza/Ibiza_Expo_-1.jpg", caption: "Imagen e ilustración del mapa: Recinto amurallada de la ciudad de Ibiza (Ibiza, Islas Baleares, España).", game: "game4" },
    { id: 5, name: "Paisaje Cultural de Sintra", x: 21, y: 54, description: "Sintra, situada cerca de Lisboa, Portugal, es un paisaje cultural declarado Patrimonio Mundial por la UNESCO en 1995. Destaca por la combinación de naturaleza, arquitectura y jardines históricos, que reflejan la evolución artística y cultural de la región a lo largo de los siglos. Sus palacios, villas, conventos y parques se integran en las laderas boscosas de la sierra, creando un entorno singular. Durante el siglo XIX, el romanticismo transformó especialmente este paisaje, con la construcción del Palacio da Pena y la creación de jardines con especies vegetales exóticas. Sintra constituye un ejemplo excepcional de la relación entre patrimonio natural y cultural.", year: "1995", location: "Sintra, Distrito de Lisboa, Portugal", image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/sintra/Palacio-Nacional-de-Sintra.-Fot.-Nuno-Tavares.jpg", caption: "Imagen e ilustración del mapa: Palacio Nacional de Sintra (Sintra, Distrito de Lisboa, Portugal).", game: "game5" },
    { id: 6, name: "Sierra de Tramontana", x: 83, y:52, description: "La Sierra de Tramontana, situada en la costa noroccidental de la isla de Mallorca, es un paisaje cultural declarado Patrimonio Mundial por la UNESCO en 2011. Representa un ejemplo excepcional de adaptación humana al entorno mediterráneo mediante técnicas agrícolas tradicionales. Sus laderas albergan bancales de piedra seca, olivares, huertas y sistemas hidráulicos que permiten aprovechar y distribuir el agua. Estas infraestructuras, vinculadas en parte a la tradición agrícola islámica, incluyen acequias, molinos y canales de riego. Sus caminos, construcciones rurales y terrazas reflejan siglos de interacción entre las comunidades humanas y la naturaleza, configurando un paisaje de gran valor histórico, cultural y ambiental.",  year: "2011", location: "Mallorca, Islas Baleares,España", image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/sierra-de-tramuntana/SerraTramuntana_Expo_-1.jpg", caption: "Imagen e ilustración del mapa: Sierra de Tramontana (Mallorca, Islas Baleares, España).",  game: "game6" },
    { id: 7, name: "Torre de Hércules", x: 22, y: 25, description: "La Torre de Hércules, situada en A Coruña, Galicia, es un faro de origen romano construido en el siglo I que continúa en funcionamiento en la actualidad. Declarada Patrimonio Mundial por la UNESCO en 2009, constituye un ejemplo excepcional de ingeniería y arquitectura de la Antigüedad. Su restauración en el siglo XVIII permitió recuperar su función como ayuda a la navegación, conservando elementos de su estructura original. Ubicada sobre un promontorio rocoso junto al océano Atlántico, se integra en un entorno natural de gran belleza, caracterizado por sus acantilados, su biodiversidad y sus vistas al litoral gallego. Es uno de los principales símbolos de la ciudad.", year: "2009", location: "A Coruña, Galicia, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/torre-de-hercules/TorreHercules_Expo_-8.jpg", caption: "Imagen e ilustración del mapa: Torre de Hércules (A Coruña, Galicia, España).", game: "game7" },
    { id: 8, name: "Valle del Madriu-Perafita-Claror", x: 65, y: 25,  description: "El Valle del Madriu-Perafita-Claror, situado en el sureste de Andorra, es un paisaje cultural declarado Patrimonio Mundial por la UNESCO en 2004. Sus montañas, bosques y lagos reflejan siglos de interacción entre las comunidades humanas y el entorno natural. El paisaje conserva huellas de actividades tradicionales como la agricultura, la ganadería y la siderurgia, visibles en sus bancales, muros de piedra seca, cabañas de pastores y antiguas instalaciones industriales. Su extensa red de caminos conecta estos elementos históricos con un entorno de gran biodiversidad, donde destacan los lagos de montaña y los recursos hídricos que han sustentado la vida en el valle.", year: "2004", location: "Andorra",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/la-val-del-madriu/ValldeMadriu_Expo_-8.jpg", caption: "Imagen e ilustración del mapa: Valle del Madriu-Perafita-Claror (Andorra).", game: "game8" },
    { id: 9, name: "Risco Caído y las Montañas Sagradas de Gran Canaria", x: 18, y: 83, description: "Risco Caído y las Montañas Sagradas de Gran Canaria, declarados Patrimonio Mundial por la UNESCO en 2019, constituyen un paisaje cultural que refleja la herencia de las poblaciones indígenas de origen amazige del norte de África. Situado en el centro montañoso de la isla, conserva importantes yacimientos arqueológicos, cuevas habitacionales, grabados rupestres y santuarios vinculados a sus creencias y conocimientos astronómicos. Sus bancales agrícolas, caminos tradicionales y sistemas de aprovechamiento del agua muestran la adaptación humana a un territorio abrupto. Este paisaje reúne valores naturales, históricos y espirituales que permiten comprender las formas de vida y las tradiciones ancestrales de Canarias.", year: "2019", location: "Gran Canaria, Islas Canarias, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/risco-caido-y-montanas-gran-canaria/RiscoCaido_Expo_-9.jpg", caption: "Imagen e ilustración del mapa: Risco Caído y las Montañas Sagradas de Gran Canaria (Gran Canaria, Islas Canarias, España).", game: "game9" },
    { id: 10, name: "Puente Vizcaya", x: 48, y: 20, description: "El Puente Bizkaia, situado entre Portugalete y Getxo, en Vizcaya, es el puente transbordador más antiguo del mundo y un referente de la arquitectura industrial de finales del siglo XIX. Diseñado por Alberto de Palacio y Ferdinand Arnodin, fue inaugurado en 1893 para conectar ambas orillas de la ría del Nervión sin interrumpir la navegación. Su estructura metálica y su barquilla suspendida constituyeron una innovación en la ingeniería de puentes. Declarado Patrimonio Mundial por la UNESCO en 2006, continúa en funcionamiento como medio de transporte y representa un símbolo del desarrollo industrial y tecnológico del País Vasco.", year: "2006", location: "Getxo, Portugalete, Vizcaya, País Vasco, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/puente-vizcaya/0038.Gonzalo-Elorza-Urreta.-PUENTE-scaled-1.jpg", caption: "Imagen e ilustración del mapa: Puente de Vizcaya (Getxo, Portugalete, Vizcaya, País Vasco, España).", game: "game10" },
    { id: 11, name: "Arquitectura Mudéjar de Aragón", x: 58, y: 45,  description: "La Arquitectura Mudéjar de Aragón, declarada Patrimonio Mundial por la UNESCO en 2001, constituye un ejemplo excepcional de la fusión de las tradiciones artísticas islámica y cristiana en la península ibérica. Desarrollada entre los siglos XII y XVII, destaca por el uso del ladrillo, la cerámica vidriada y los elaborados motivos geométricos y ornamentales. El conjunto incluye torres, iglesias y otros edificios históricos situados en localidades como Teruel, Zaragoza, Calatayud, Cervera de la Cañada y Tobed. Sus construcciones reflejan el intercambio de conocimientos entre culturas y la adaptación de técnicas islámicas a la arquitectura cristiana medieval, formando parte esencial del patrimonio histórico y artístico aragonés.", year: "2001", location: "Aragón, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/mudejar-de-aragon/Calatayud_Expo_-8.jpg", caption: "Imagen e ilustración del mapa: Torre de la Iglesia de la Virgen de Tobed (Tobed, Zaragoza, Aragón,España).", game: "game11" },
    { id: 12, name: "Menorca Talayótica", x: 94, y: 48, description: "Menorca Talayótica, declarada Patrimonio Mundial por la UNESCO en 2023, reúne un excepcional conjunto de yacimientos arqueológicos que testimonian la evolución de las sociedades prehistóricas de la isla. Sus construcciones de piedra, levantadas entre el segundo y el primer milenio a. C., incluyen talayots, navetas funerarias, santuarios de taula y asentamientos. Estos monumentos reflejan las creencias, la organización social y los conocimientos técnicos de las comunidades menorquinas, así como su relación con el territorio y el firmamento. Integrados en un paisaje mediterráneo bien conservado, constituyen un legado único para comprender la adaptación humana a las condiciones de insularidad y los recursos limitados",  year: "2023", location: "Menorca, Islas Baleares, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/menorca-talayotica/GalImg882.jpg", caption: "Imagen e ilustración del mapa: Poblado Talayótico del Talatí de Dalt (Mahón, Menorca, Islas Baleares,España).", game: "game12" },
    { id: 13, name: "Sitio de los Dólmenes de Antequera", x: 36, y: 75, description: "El Sitio de los Dólmenes de Antequera, declarado Patrimonio Mundial por la UNESCO en 2016, reúne tres monumentos megalíticos: los dólmenes de Menga y Viera y el tholos de El Romeral, junto con dos formaciones naturales emblemáticas, la Peña de los Enamorados y El Torcal. Construidos hace miles de años, estos monumentos funerarios destacan por sus enormes bloques de piedra y sus singulares soluciones arquitectónicas. Su orientación refleja la relación de las comunidades prehistóricas con el paisaje y los fenómenos astronómicos. El conjunto constituye un testimonio excepcional de las creencias, los conocimientos técnicos y la capacidad constructiva de las sociedades prehistóricas.", year: "2016", location: "Antequera, Málaga, Andalucia, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/dolmenes-de-antequera/IMG_8168.JPG", caption: "Imagen e ilustración del mapa: Tholos de El Romeral (Antequera, Málaga, Andalucía, España).", game: "game13" },
    { id: 14, name: "Monasterios de San Millán de Yuso y de Suso", x: 42, y: 32, description: "Los monasterios de San Millán de Yuso y de Suso, situados en San Millán de la Cogolla, La Rioja, fueron declarados Patrimonio Mundial por la UNESCO en 1997. Este conjunto monástico destaca por su importancia histórica, artística y lingüística, vinculada a los orígenes de la lengua española. En sus manuscritos se conservan las Glosas Emilianenses, anotaciones que constituyen uno de los testimonios más antiguos del romance hispánico. Además, el monasterio de Suso está relacionado con Gonzalo de Berceo, considerado el primer poeta conocido en lengua castellana. Ambos monasterios representan un importante centro de conservación y difusión de la cultura medieval.", year: "1997", location: "San Millán de la Cogolla, La Rioja, España",  image:"https://www.alianzapaisajesculturales.org/wp-content/gallery/monasterios-de-yuso-y-de-suso/02-Exteriores-Suso.jpg", caption: "Imagen e ilustración del mapa: Monasterio de Suso (San Millán de la Cogolla, La Rioja, España).", game: "game14" }
  ];
  const games = {


game1: {
  title: "Sopa de letras de Aranjuez",
  instructions: "Encuentra las nueve palabras relacionadas con el Paisaje Cultural de Aranjuez. Las palabras pueden aparecer en horizontal, vertical o diagonal. Selecciona la primera y la última letra de cada palabra.",
  html: String.raw`
<div class="game game-sopa">
  <header class="hero">
    <h1>Sopa de letras de Aranjuez</h1>
    <p>¡Encuentra todas las palabras escondidas!</p>
  </header>

  <main class="contenedor">
    <section class="columna" aria-labelledby="titulo-palabras">
      <h2 id="titulo-palabras">Palabras que debes encontrar</h2>
      <ul id="lista-palabras"></ul>

      <p class="instrucciones" id="instrucciones-sopa">
        Selecciona la primera y la última letra con el ratón o con la pantalla táctil.
        Las palabras pueden estar en horizontal, vertical o diagonal.
        También puedes utilizar el teclado: enfoca una letra y pulsa Intro o Espacio
        para marcar el inicio; después, selecciona la letra final.
      </p>

      <p id="mensaje" role="status" aria-live="polite" aria-atomic="true">
        ¡Empieza a buscar!
      </p>

      <button id="reiniciar" type="button">Volver a empezar</button>
    </section>

    <section class="columna" aria-labelledby="titulo-sopa">
      <h2 id="titulo-sopa">Encuentra las palabras</h2>
      <div
        id="sopa"
        role="group"
        aria-label="Cuadrícula de la sopa de letras de 15 filas y 15 columnas"
        aria-describedby="instrucciones-sopa"
      ></div>
    </section>
  </main>
</div>
`,
  css: String.raw`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
}

.game-sopa {
  --background: #f3f6f0;
  --dark: #183b2b;
  --green: #21834b;
  width: 100%;
  margin: 0 auto;
  padding: 18px;
  font-family: 'Poppins', Arial, sans-serif;
  color: #183b2b;
  background:
    linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url("https://commons.wikimedia.org/wiki/Special:FilePath/Palacio%20Real%20de%20Aranjuez%2004.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 14px;
}

.game-sopa .hero {
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px black;
  margin: 0 auto 22px;
  padding: 4px 8px;
}

.game-sopa h1 {
  font-size: clamp(23px, 4vw, 36px);
  line-height: 1.25;
  margin: 0 0 8px;
  overflow-wrap: anywhere;
}

.game-sopa .hero p {
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
}

.game-sopa .contenedor {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr);
  gap: 16px;
  max-width: 1150px;
  margin: auto;
  align-items: start;
}

.game-sopa .columna {
  min-width: 0;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.game-sopa h2 {
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
  margin: 0 0 18px;
}

.game-sopa #lista-palabras {
  list-style: none;
  padding: 0;
  margin: 0;
}

.game-sopa #lista-palabras li {
  margin: 10px 0;
  font-size: 14px;
  line-height: 1.45;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 9px;
  overflow-wrap: anywhere;
}

.game-sopa #lista-palabras li::before {
  content: "";
  width: 13px;
  height: 13px;
  border: 2px solid #183b2b;
  border-radius: 3px;
  flex-shrink: 0;
}

.game-sopa #lista-palabras li.encontrada {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  opacity: 0.8;
}

.game-sopa #lista-palabras li.encontrada::before {
  content: "✓";
  background: #183b2b;
  color: white;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
}

.game-sopa #sopa {
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  gap: 3px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y;
}

.game-sopa .letra {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: inherit;
  font-size: clamp(9px, 1.5vw, 16px);
  line-height: 1;
  font-weight: 800;
  color: #172b1d;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: crosshair;
  touch-action: pan-y;
}

.game-sopa .letra:focus-visible {
  outline: 3px solid #124d2c;
  outline-offset: 1px;
  position: relative;
  z-index: 2;
}

.game-sopa .letra.seleccionada {
  background: #ffe16a;
  border-color: #705500;
}

.game-sopa .letra.encontrada {
  background: var(--color-palabra, #bce8bd);
  color: #152719;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  border-color: #354d39;
}

.game-sopa .instrucciones {
  font-size: 12px;
  line-height: 1.65;
  margin-top: 22px;
}

.game-sopa #mensaje {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.6;
  min-height: 42px;
  overflow-wrap: anywhere;
}

.game-sopa button {
  max-width: 100%;
  padding: 11px 16px;
  border: 2px solid #263b2b;
  border-radius: 20px;
  background: #263b2b;
  color: white;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.game-sopa button:hover {
  background: #426448;
  border-color: #426448;
}

.game-sopa button:focus-visible {
  outline: 3px solid #124d2c;
  outline-offset: 3px;
}

@media (max-width: 700px) {
  .game-sopa {
    padding: 12px;
    background-attachment: scroll;
  }

  .game-sopa .contenedor {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }

  .game-sopa .columna {
    padding: 15px;
  }

  .game-sopa #sopa {
    gap: 2px;
  }

  .game-sopa .letra {
    font-size: clamp(8px, 2.5vw, 14px);
    border-radius: 2px;
  }

  .game-sopa #lista-palabras li {
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  .game-sopa {
    padding: 8px;
  }

  .game-sopa .columna {
    padding: 10px;
  }

  .game-sopa #sopa {
    gap: 1px;
  }

  .game-sopa .letra {
    font-size: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .game-sopa *,
  .game-sopa *::before,
  .game-sopa *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (forced-colors: active) {
  .game-sopa .letra,
  .game-sopa button {
    border: 1px solid ButtonText;
  }

  .game-sopa .letra:focus-visible,
  .game-sopa button:focus-visible {
    outline: 3px solid Highlight;
  }
}
`,
  js: String.raw`
const palabras = [
  "Jardín",
  "Palacio",
  "Pavos reales",
  "Botánica",
  "Tajo",
  "Bosque",
  "Mariblanca",
  "Plaza toros",
  "Hidráulica"
];

const tamano = 15;
const sopa = document.getElementById("sopa");
const lista = document.getElementById("lista-palabras");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

let tablero = [];
let encontradas = new Map();
let inicio = null;
let seleccion = [];
let seleccionTeclado = null;
let arrastrando = false;

const direcciones = [
  [0, 1], [0, -1],
  [1, 0], [-1, 0],
  [1, 1], [-1, -1],
  [1, -1], [-1, 1]
];

const colores = [
  "#ff9999", "#ffd580", "#a8e6a1",
  "#91d8ff", "#d5a6ff", "#ffb3dc",
  "#8de0d0", "#f4e68a", "#c6c6c6"
];

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toUpperCase();
}

function crearTablero() {
  tablero = Array.from(
    { length: tamano },
    () => Array(tamano).fill("")
  );
}

function colocarPalabra(palabra) {
  const texto = normalizar(palabra);

  for (let intento = 0; intento < 1000; intento++) {
    const [dr, dc] =
      direcciones[Math.floor(Math.random() * direcciones.length)];

    const fila = Math.floor(Math.random() * tamano);
    const columna = Math.floor(Math.random() * tamano);

    const finalFila = fila + (texto.length - 1) * dr;
    const finalColumna = columna + (texto.length - 1) * dc;

    if (
      finalFila < 0 || finalFila >= tamano ||
      finalColumna < 0 || finalColumna >= tamano
    ) continue;

    let valido = true;

    for (let i = 0; i < texto.length; i++) {
      const f = fila + i * dr;
      const c = columna + i * dc;

      if (tablero[f][c] && tablero[f][c] !== texto[i]) {
        valido = false;
        break;
      }
    }

    if (!valido) continue;

    for (let i = 0; i < texto.length; i++) {
      tablero[fila + i * dr][columna + i * dc] = texto[i];
    }

    return true;
  }

  return false;
}

function rellenarHuecos() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let f = 0; f < tamano; f++) {
    for (let c = 0; c < tamano; c++) {
      if (!tablero[f][c]) {
        tablero[f][c] =
          letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }
}

function crearLista() {
  lista.innerHTML = "";

  palabras.forEach((palabra, indice) => {
    const li = document.createElement("li");
    li.id = "palabra-" + indice;
    li.textContent = palabra;
    lista.appendChild(li);
  });
}

function dibujarTablero() {
  sopa.innerHTML = "";

  for (let f = 0; f < tamano; f++) {
    for (let c = 0; c < tamano; c++) {
      const celda = document.createElement("button");

      celda.type = "button";
      celda.className = "letra";
      celda.textContent = tablero[f][c];
      celda.dataset.fila = f;
      celda.dataset.columna = c;
      celda.setAttribute(
        "aria-label",
        "Fila " + (f + 1) + ", columna " + (c + 1) +
        ", letra " + tablero[f][c]
      );
      celda.setAttribute("aria-pressed", "false");

      celda.addEventListener("click", () => seleccionarConTeclado(celda));

      sopa.appendChild(celda);
    }
  }
}

function obtenerCelda(f, c) {
  return sopa.querySelector(
    '[data-fila="' + f + '"][data-columna="' + c + '"]'
  );
}

function obtenerLinea(a, b) {
  if (!a || !b) return [];

  const df = b[0] - a[0];
  const dc = b[1] - a[1];

  if (
    df !== 0 &&
    dc !== 0 &&
    Math.abs(df) !== Math.abs(dc)
  ) {
    return [];
  }

  const pasos = Math.max(Math.abs(df), Math.abs(dc));
  const vf = Math.sign(df);
  const vc = Math.sign(dc);

  return Array.from({ length: pasos + 1 }, (_, i) => [
    a[0] + i * vf,
    a[1] + i * vc
  ]);
}

function limpiarSeleccionVisual() {
  sopa.querySelectorAll(".seleccionada").forEach(celda => {
    celda.classList.remove("seleccionada");
    celda.setAttribute("aria-pressed", "false");
  });
}

function mostrarSeleccion(final) {
  limpiarSeleccionVisual();

  seleccion = obtenerLinea(inicio, final);

  seleccion.forEach(([f, c]) => {
    const celda = obtenerCelda(f, c);
    if (celda) {
      celda.classList.add("seleccionada");
      celda.setAttribute("aria-pressed", "true");
    }
  });
}

function comprobarPalabra() {
  if (!seleccion.length) return;

  const texto = seleccion
    .map(([f, c]) => tablero[f][c])
    .join("");

  const inverso = texto.split("").reverse().join("");

  const indice = palabras.findIndex((palabra, i) =>
    !encontradas.has(i) &&
    [normalizar(palabra)].some(p => p === texto || p === inverso)
  );

  if (indice === -1) {
    mensaje.textContent =
      "No es una palabra pendiente de la lista. ¡Prueba otra!";
    return;
  }

  const color = colores[indice % colores.length];
  encontradas.set(indice, color);

  seleccion.forEach(([f, c]) => {
    const celda = obtenerCelda(f, c);
    if (celda) {
      celda.classList.remove("seleccionada");
      celda.classList.add("encontrada");
      celda.style.setProperty("--color-palabra", color);
      celda.setAttribute("aria-label",
        "Letra " + tablero[f][c] + ", palabra encontrada");
      celda.setAttribute("aria-pressed", "false");
    }
  });

  const elementoPalabra = document.getElementById("palabra-" + indice);
  if (elementoPalabra) {
    elementoPalabra.classList.add("encontrada");
    elementoPalabra.setAttribute("aria-label", palabras[indice] + ", encontrada");
  }

  mensaje.textContent =
    "¡Muy bien! Has encontrado " + palabras[indice] +
    ". Llevas " + encontradas.size + " de " + palabras.length + " palabras.";

  if (encontradas.size === palabras.length) {
    mensaje.textContent =
      "¡Enhorabuena! Has encontrado las nueve palabras. ¡Reto completado!";
  }
}

function coordenadas(celda) {
  if (!celda || !celda.classList.contains("letra")) return null;

  return [
    Number(celda.dataset.fila),
    Number(celda.dataset.columna)
  ];
}

function seleccionarConTeclado(celda) {
  const punto = coordenadas(celda);
  if (!punto) return;

  if (!seleccionTeclado) {
    seleccionTeclado = punto;
    inicio = punto;
    mostrarSeleccion(punto);
    mensaje.textContent =
      "Inicio marcado. Ahora selecciona la última letra de la palabra.";
    return;
  }

  const final = punto;
  const linea = obtenerLinea(seleccionTeclado, final);

  if (!linea.length) {
    seleccionTeclado = punto;
    inicio = punto;
    mostrarSeleccion(punto);
    mensaje.textContent =
      "Las letras deben estar en línea recta. Nuevo inicio marcado.";
    return;
  }

  seleccion = linea;
  limpiarSeleccionVisual();
  seleccion.forEach(([f, c]) => {
    const celdaLinea = obtenerCelda(f, c);
    if (celdaLinea) celdaLinea.classList.add("seleccionada");
  });

  comprobarPalabra();

  seleccionTeclado = null;
  inicio = null;
  seleccion = [];
  limpiarSeleccionVisual();
}

sopa.addEventListener("pointerdown", evento => {
  if (evento.pointerType === "mouse" && evento.button !== 0) return;

  const celda = evento.target.closest(".letra");
  const punto = coordenadas(celda);

  if (!punto) return;

  arrastrando = true;
  inicio = punto;
  seleccionTeclado = null;
  mostrarSeleccion(punto);
});

document.addEventListener("pointermove", evento => {
  if (!arrastrando || !inicio) return;

  const elemento = document.elementFromPoint(
    evento.clientX,
    evento.clientY
  );

  const punto = coordenadas(elemento && elemento.closest(".letra"));

  if (punto) mostrarSeleccion(punto);
});

document.addEventListener("pointerup", evento => {
  if (!arrastrando || !inicio) return;

  const elemento = document.elementFromPoint(
    evento.clientX,
    evento.clientY
  );

  const final = coordenadas(elemento && elemento.closest(".letra"));

  arrastrando = false;
  limpiarSeleccionVisual();

  if (final) {
    seleccion = obtenerLinea(inicio, final);

    if (seleccion.length > 0) {
      comprobarPalabra();
    } else {
      mensaje.textContent =
        "Selecciona una línea horizontal, vertical o diagonal.";
    }
  }

  inicio = null;
  seleccion = [];
});

function iniciarJuego() {
  encontradas = new Map();
  inicio = null;
  seleccion = [];
  seleccionTeclado = null;
  arrastrando = false;

  let correcto = false;

  for (let intento = 0; intento < 100; intento++) {
    crearTablero();

    const ordenadas = [...palabras].sort(
      (a, b) => normalizar(b).length - normalizar(a).length
    );

    correcto = ordenadas.every(colocarPalabra);

    if (correcto) break;
  }

  if (!correcto) {
    mensaje.textContent =
      "No se pudo crear la sopa de letras. Pulsa volver a empezar.";
    return;
  }

  rellenarHuecos();
  crearLista();
  dibujarTablero();

  mensaje.textContent = "¡Empieza a buscar!";
}

botonReiniciar.addEventListener("click", iniciarJuego);

iniciarJuego();
`
},

game2: {
  title: "Palabra Misteriosa",
  instructions: "Descifra los cinco secretos de la Alhambra de Granada. Lee las pistas y escribe la respuesta. Cada enigma vale hasta 100 puntos; desbloquear nuevas pistas reduce la puntuación posible.",

  html: String.raw`
    <div class="game-alhambra">
      <header class="hero">
        <div class="ornament" aria-hidden="true">✦ ❋ ✦</div>
        <p class="eyebrow">UNA AVENTURA HISTÓRICA</p>
        <h1>Palabra Misteriosa</h1>
        <p class="subtitle">El secreto de la Alhambra de Granada</p>
        <div class="ornament" aria-hidden="true">❧ ❖ ❧</div>
      </header>

      <nav class="progress" aria-label="Progreso del juego">
        <div class="progress-line"></div>
        <div id="steps" class="steps"></div>
      </nav>

      <main class="layout">
        <section class="main-card">
          <div class="section-heading">
            <span class="castle-icon" aria-hidden="true">♜</span>
            <div>
              <p class="eyebrow">ENIGMA <span id="level">01</span> / 05</p>
              <h2 id="questionTitle">Palabra misteriosa 1</h2>
            </div>
          </div>

          <div id="clues" class="clues"></div>

          <div class="hint-area">
            <button id="hintBtn" class="secondary-btn" type="button">
              ✦ Desbloquear siguiente pista
            </button>
            <p id="hintStatus" aria-live="polite">Pista 1 de 3 disponible.</p>
          </div>

          <form id="answerForm">
            <label for="answer">¿Qué palabra es?</label>
            <div class="answer-row">
              <input
                id="answer"
                type="text"
                placeholder="Escribe tu respuesta..."
                autocomplete="off"
                required
                aria-describedby="feedback"
              />
              <button class="primary-btn" type="submit">Comprobar ↗</button>
            </div>
          </form>

          <div id="feedback" class="feedback" role="status" aria-live="polite"></div>

          <div class="card-footer">
            <span>❖ Piensa como un explorador</span>
            <span id="pointsPreview">Puntos posibles: 100</span>
          </div>
        </section>

        <aside class="sidebar">
          <section class="side-card">
            <span class="side-icon" aria-hidden="true">☼</span>
            <h3>Tu misión</h3>
            <p>
              Descifra los cinco secretos de la Alhambra.
              Lee las pistas, demuestra lo que sabes y
              consigue la máxima puntuación.
            </p>
          </section>

          <section class="side-card score-card">
            <div class="score-heading">
              <h3>Tu aventura</h3>
              <span aria-hidden="true">✧</span>
            </div>
            <div class="score-number" id="score" aria-live="polite">000</div>
            <p>puntos conseguidos</p>
            <div
              class="mini-progress"
              role="progressbar"
              aria-label="Enigmas resueltos"
              aria-valuemin="0"
              aria-valuemax="5"
              aria-valuenow="0"
              id="scoreProgress"
            >
              <div id="scoreBar"></div>
            </div>
            <div class="score-details">
              <span>Enigmas resueltos</span>
              <strong id="solved">0 / 5</strong>
            </div>
          </section>

          <section class="side-card quote-card">
            <div class="mini-mosaic" aria-hidden="true">✦ ❖ ✦</div>
            <h3>Un lugar, mil historias</h3>
            <p>
              Entre jardines, torres y palacios, cada rincón
              guarda un secreto del pasado nazarí.
            </p>
            <span class="signature">Granada · Andalucía</span>
          </section>
        </aside>
      </main>

      <footer class="footer">
        <span aria-hidden="true">✦</span> ALHAMBRA DE GRANADA
        <span aria-hidden="true">✦</span>
        <p>Un viaje por la historia, una palabra cada vez.</p>
      </footer>

      <section id="endScreen" class="end-screen" hidden aria-labelledby="endTitle">
        <div class="end-card">
          <p class="eyebrow">FIN DE LA AVENTURA</p>
          <div class="end-symbol" aria-hidden="true">✧</div>
          <h2 id="endTitle">¡Has descubierto los secretos!</h2>
          <p id="finalMessage"></p>
          <div class="final-score" id="finalScore"></div>
          <p id="finalDetails"></p>
          <button id="restartBtn" class="primary-btn" type="button">
            ↻ Volver a jugar
          </button>
        </div>
      </section>
    </div>
  `,

  css: String.raw`
    .game-alhambra {
      --green: #173e36;
      --green-light: #28594d;
      --cream: #f8f0df;
      --paper: #fffaf0;
      --gold: #c59b55;
      --terracotta: #b95838;
      --ink: #27382f;
      --muted: #6b6559;

      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      position: relative;
      padding: 16px;
      box-sizing: border-box;
      font-family: 'DM Sans', Arial, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(ellipse at 20% 10%, #497568 0, transparent 40%),
        radial-gradient(ellipse at 90% 80%, #365f50 0, transparent 40%),
        #16372f;
      border-radius: 12px;
      overflow: hidden;
      isolation: isolate;
    }

    .game-alhambra *,
    .game-alhambra *::before,
    .game-alhambra *::after {
      box-sizing: border-box;
    }

    .game-alhambra button,
    .game-alhambra input {
      font: inherit;
    }

    .game-alhambra button {
      cursor: pointer;
    }

    .game-alhambra button:focus-visible,
    .game-alhambra input:focus-visible {
      outline: 3px solid var(--gold);
      outline-offset: 3px;
    }

    .game-alhambra h1,
    .game-alhambra h2,
    .game-alhambra h3,
    .game-alhambra p {
      margin-top: 0;
    }

    .game-alhambra h1,
    .game-alhambra h2,
    .game-alhambra h3,
    .game-alhambra .signature,
    .game-alhambra .step,
    .game-alhambra .score-number,
    .game-alhambra .final-score {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }

    .game-alhambra .hero {
      text-align: center;
      color: var(--cream);
      padding: 22px 12px 10px;
    }

    .game-alhambra .ornament {
      color: var(--gold);
      letter-spacing: 8px;
      font-size: 19px;
    }

    .game-alhambra .eyebrow {
      font-family: 'DM Sans', Arial, sans-serif;
      font-size: 10px;
      letter-spacing: 2px;
      font-weight: 700;
      color: var(--terracotta);
      margin: 0 0 5px;
    }

    .game-alhambra .hero .eyebrow {
      color: #f0d7a2;
      margin-top: 15px;
    }

    .game-alhambra h1 {
      font-size: clamp(36px, 6vw, 64px);
      line-height: 1;
      margin: 10px 0;
      font-weight: 600;
      letter-spacing: -1px;
    }

    .game-alhambra .subtitle {
      color: #f0e3c8;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .game-alhambra .progress {
      width: min(490px, 95%);
      margin: 26px auto 32px;
      position: relative;
    }

    .game-alhambra .progress-line {
      height: 2px;
      background: #a38a5b;
      position: absolute;
      left: 9%;
      right: 9%;
      top: 21px;
    }

    .game-alhambra .steps {
      display: flex;
      justify-content: space-between;
      position: relative;
      gap: 8px;
    }

    .game-alhambra .step {
      width: 44px;
      height: 44px;
      flex: 0 0 44px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      border: 1px solid #c9b78e;
      color: #f3e5c7;
      background: #23483e;
      font-size: 19px;
    }

    .game-alhambra .step.active {
      background: var(--gold);
      border-color: #f4dc9f;
      color: #263b31;
      box-shadow: 0 0 0 4px #c59b5528;
    }

    .game-alhambra .step.done {
      background: #f6edd9;
      color: var(--green);
    }

    .game-alhambra .layout {
      display: grid;
      grid-template-columns: minmax(0, 1.85fr) minmax(200px, .8fr);
      gap: 17px;
      align-items: start;
    }

    .game-alhambra .main-card,
    .game-alhambra .side-card,
    .game-alhambra .end-card {
      background: var(--paper);
      border: 1px solid #e7d7b6;
      border-radius: 13px;
      box-shadow: 0 18px 40px #071e1730;
      color: var(--ink);
    }

    .game-alhambra .main-card {
      padding: clamp(18px, 3vw, 32px);
      position: relative;
      overflow: hidden;
      min-width: 0;
    }

    .game-alhambra .main-card::before,
    .game-alhambra .end-card::before {
      content: "✦  ❖  ✦  ❖  ✦";
      display: block;
      text-align: center;
      color: #c3a46d;
      font-size: 11px;
      letter-spacing: 5px;
      margin-bottom: 22px;
    }

    .game-alhambra .section-heading {
      display: flex;
      gap: 14px;
      align-items: center;
      padding-bottom: 19px;
      border-bottom: 1px solid #dfd0b0;
      margin-bottom: 23px;
    }

    .game-alhambra .castle-icon {
      font-size: 38px;
      color: var(--terracotta);
    }

    .game-alhambra .section-heading h2 {
      font-size: clamp(25px, 3.5vw, 35px);
      line-height: 1.05;
      margin: 0;
    }

    .game-alhambra .section-heading .eyebrow {
      margin-bottom: 7px;
    }

    .game-alhambra .clues {
      display: grid;
      gap: 10px;
    }

    .game-alhambra .clue {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 13px;
      border-radius: 9px;
      background: #f2eadb;
      border: 1px solid transparent;
      line-height: 1.6;
      font-size: 13px;
    }

    .game-alhambra .clue.locked {
      background: #eee8dc;
      color: #625d53;
      border: 1px dashed #c9b995;
    }

    .game-alhambra .clue-number {
      flex: 0 0 29px;
      width: 29px;
      height: 29px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: white;
      background: var(--terracotta);
      font-weight: 700;
      font-size: 12px;
    }

    .game-alhambra .clue.locked .clue-number {
      background: #8c806b;
    }

    .game-alhambra .clue p {
      margin: 1px 0 0;
      overflow-wrap: anywhere;
    }

    .game-alhambra .hint-area {
      margin: 17px 0 26px;
      text-align: center;
    }

    .game-alhambra .secondary-btn {
      background: transparent;
      color: var(--green);
      border: 1px solid #9baf9d;
      border-radius: 7px;
      padding: 10px 13px;
      font-size: 12px;
      font-weight: 700;
    }

    .game-alhambra .secondary-btn:hover:not(:disabled) {
      background: #e5eee5;
    }

    .game-alhambra .secondary-btn:disabled {
      opacity: .65;
      cursor: not-allowed;
    }

    .game-alhambra #hintStatus {
      font-size: 11px;
      color: var(--muted);
      margin: 8px 0 0;
    }

    .game-alhambra form label {
      display: block;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 25px;
      font-weight: 600;
      font-style: italic;
      margin-bottom: 11px;
    }

    .game-alhambra .answer-row {
      display: flex;
      gap: 9px;
    }

    .game-alhambra .answer-row input {
      min-width: 0;
      width: 100%;
      flex: 1;
      padding: 13px;
      border: 1px solid #c9c0ac;
      border-radius: 7px;
      background: #fffdf7;
      color: var(--ink);
      font-size: 13px;
    }

    .game-alhambra .answer-row input::placeholder {
      color: #70695d;
    }

    .game-alhambra .primary-btn {
      border: 0;
      border-radius: 7px;
      padding: 12px 15px;
      background: var(--green);
      color: white;
      font-weight: 600;
      font-size: 12px;
      box-shadow: 0 4px 10px #173e3619;
    }

    .game-alhambra .primary-btn:hover {
      background: var(--green-light);
    }

    .game-alhambra .primary-btn:disabled {
      opacity: .65;
      cursor: not-allowed;
    }

    .game-alhambra .feedback {
      min-height: 24px;
      font-size: 13px;
      line-height: 1.5;
      margin-top: 14px;
      font-weight: 600;
      overflow-wrap: anywhere;
    }

    .game-alhambra .feedback.success {
      color: #206344;
    }

    .game-alhambra .feedback.error {
      color: #a33b27;
    }

    .game-alhambra .card-footer {
      border-top: 1px solid #e5dac4;
      padding-top: 16px;
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 10px;
      color: var(--muted);
    }

    .game-alhambra .sidebar {
      display: grid;
      gap: 13px;
      min-width: 0;
    }

    .game-alhambra .side-card {
      padding: 19px;
    }

    .game-alhambra .side-icon {
      display: inline-grid;
      place-items: center;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      background: #e9efdf;
      color: var(--green);
      font-size: 21px;
      margin-bottom: 9px;
    }

    .game-alhambra .side-card h3 {
      font-size: 24px;
      margin-bottom: 7px;
    }

    .game-alhambra .side-card p {
      color: #5e594e;
      font-size: 12px;
      line-height: 1.7;
      margin-bottom: 0;
    }

    .game-alhambra .score-card {
      background: #f0ead9;
    }

    .game-alhambra .score-heading,
    .game-alhambra .score-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .game-alhambra .score-heading h3 {
      font-size: 21px;
      margin: 0;
    }

    .game-alhambra .score-heading span {
      color: var(--terracotta);
    }

    .game-alhambra .score-number {
      font-size: 48px;
      font-weight: 700;
      color: var(--green);
      line-height: 1.2;
      margin-top: 12px;
    }

    .game-alhambra .score-card > p {
      font-size: 11px;
      margin: 0 0 15px;
    }

    .game-alhambra .mini-progress {
      height: 5px;
      background: #d7cfba;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 17px;
    }

    .game-alhambra .mini-progress div {
      height: 100%;
      width: 0;
      background: var(--terracotta);
      transition: width .3s ease;
    }

    .game-alhambra .score-details {
      font-size: 11px;
      color: #5f594e;
    }

    .game-alhambra .score-details strong {
      color: var(--green);
    }

    .game-alhambra .quote-card {
      text-align: center;
      background: #f5eee0;
    }

    .game-alhambra .mini-mosaic {
      color: var(--terracotta);
      letter-spacing: 7px;
      font-size: 19px;
      margin-bottom: 12px;
    }

    .game-alhambra .quote-card h3 {
      font-size: 22px;
    }

    .game-alhambra .signature {
      display: block;
      font-style: italic;
      color: #8b3c25;
      margin-top: 15px;
      font-size: 17px;
    }

    .game-alhambra .footer {
      text-align: center;
      color: #f0e3c8;
      letter-spacing: 2px;
      font-size: 10px;
      padding: 28px 0 5px;
    }

    .game-alhambra .footer span {
      color: var(--gold);
      margin: 0 8px;
    }

    .game-alhambra .footer p {
      letter-spacing: .5px;
      color: #e0e4d9;
      font-size: 11px;
      margin: 9px 0 0;
    }

    .game-alhambra .end-screen {
      position: absolute;
      inset: 0;
      z-index: 5;
      padding: 20px;
      display: grid;
      place-items: center;
      background: #102b25f2;
      overflow-y: auto;
      border-radius: 12px;
    }

    .game-alhambra .end-screen[hidden] {
      display: none;
    }

    .game-alhambra .end-card {
      text-align: center;
      width: min(500px, 100%);
      padding: 30px 22px;
    }

    .game-alhambra .end-symbol {
      font-size: 48px;
      color: var(--gold);
    }

    .game-alhambra .end-card h2 {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .game-alhambra .end-card p {
      color: #5e594e;
      line-height: 1.7;
    }

    .game-alhambra .final-score {
      font-size: 56px;
      font-weight: 700;
      color: var(--green);
      margin: 14px 0;
    }

    .game-alhambra .end-card .primary-btn {
      margin-top: 10px;
    }

    @media (max-width: 760px) {
      .game-alhambra {
        padding: 10px;
      }

      .game-alhambra .layout {
        grid-template-columns: 1fr;
      }

      .game-alhambra .hero {
        padding-top: 14px;
      }

      .game-alhambra .subtitle {
        letter-spacing: 1px;
        font-size: 10px;
      }

      .game-alhambra .progress {
        margin: 22px auto 26px;
      }

      .game-alhambra .step {
        width: 36px;
        height: 36px;
        flex-basis: 36px;
      }

      .game-alhambra .progress-line {
        top: 17px;
      }

      .game-alhambra .main-card {
        padding: 18px 14px;
      }

      .game-alhambra .answer-row {
        flex-direction: column;
      }

      .game-alhambra .answer-row input,
      .game-alhambra .answer-row button {
        width: 100%;
      }

      .game-alhambra .card-footer {
        flex-direction: column;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .game-alhambra *,
      .game-alhambra *::before,
      .game-alhambra *::after {
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.querySelector(".game-alhambra");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const enigmas = [
        {
          respuesta: "alcazaba",
          alternativas: ["la alcazaba", "alcazaba de la alhambra"],
          pistas: [
            "Soy el corazón militar de la Alhambra, una fortaleza desde la que se vigilaba y defendía la ciudad.",
            "Mis murallas y torres forman una de las partes más antiguas del conjunto monumental.",
            "Mi nombre comienza por A y soy el recinto fortificado de la Alhambra."
          ],
          explicacion: "La Alcazaba era el recinto militar de la Alhambra."
        },
        {
          respuesta: "generalife",
          alternativas: ["el generalife", "palacio del generalife"],
          pistas: [
            "Estoy rodeado de vegetación exuberante, acequias y fuentes. Fui el palacio de recreo de los monarcas nazaríes.",
            "Mi nombre está ligado a los huertos y jardines que me rodean.",
            "Mi nombre suele relacionarse con la expresión «jardín del arquitecto»."
          ],
          explicacion: "El Generalife era la residencia de recreo de los sultanes nazaríes."
        },
        {
          respuesta: "patio de los arrayanes",
          alternativas: [
            "el patio de los arrayanes",
            "patio de arrayanes",
            "los arrayanes"
          ],
          pistas: [
            "Soy un famoso espacio de los Palacios Nazaríes, con una gran alberca rectangular.",
            "Mi alberca refleja los edificios que me rodean y crea una imagen casi simétrica.",
            "Llevo el nombre de un arbusto aromático de hoja verde, también conocido como mirto."
          ],
          explicacion: "El Patio de los Arrayanes destaca por su alberca y sus arbustos."
        },
        {
          respuesta: "palacio de carlos v",
          alternativas: [
            "el palacio de carlos v",
            "palacio carlos v",
            "carlos v",
            "palacio del emperador carlos v"
          ],
          pistas: [
            "Fui construido en el siglo XVI por orden de un emperador.",
            "Mi exterior es cuadrado, pero en mi interior encontrarás un patio circular rodeado de columnas.",
            "Llevo el nombre de Carlos V, el emperador que impulsó mi construcción."
          ],
          explicacion: "El Palacio de Carlos V es una obra renacentista situada junto a los Palacios Nazaríes."
        },
        {
          respuesta: "torre de la vela",
          alternativas: [
            "la torre de la vela",
            "torre vela",
            "vela"
          ],
          pistas: [
            "Soy una de las torres más emblemáticas de la Alcazaba y destaco en el perfil de Granada.",
            "Desde mi terraza se disfrutan vistas panorámicas de Granada y de sus barrios históricos.",
            "Mi campana está vinculada a la celebración del 2 de enero en Granada."
          ],
          explicacion: "La Torre de la Vela es una de las torres más conocidas de la Alcazaba."
        }
      ];

      let indice = 0;
      let puntuacion = 0;
      let resueltos = 0;
      let pistasMostradas = 1;
      let respondido = false;
      let puntosRonda = 100;

      const $ = id => root.querySelector("#" + id);

      function normalizar(texto) {
        return texto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[.,!?¿¡:;'"“”]/g, "")
          .replace(/\s+/g, " ")
          .trim();
      }

      function crearProgreso() {
        $("steps").innerHTML = enigmas.map((_, i) => {
          const estado = i === indice
            ? "active"
            : i < indice ? "done" : "";
          const contenido = i < indice ? "✓" : i + 1;

          return '<div class="step ' + estado + '" aria-label="Enigma ' +
            (i + 1) + (i < indice ? ", resuelto" : i === indice ? ", actual" : "") +
            '">' + contenido + '</div>';
        }).join("");
      }

      function actualizarMarcador() {
        $("score").textContent = String(puntuacion).padStart(3, "0");
        $("solved").textContent = resueltos + " / " + enigmas.length;
        $("scoreBar").style.width =
          (resueltos / enigmas.length) * 100 + "%";
        $("scoreProgress").setAttribute("aria-valuenow", resueltos);
      }

      function mostrarEnigma() {
        const enigma = enigmas[indice];

        pistasMostradas = 1;
        respondido = false;
        puntosRonda = 100;

        $("level").textContent = String(indice + 1).padStart(2, "0");
        $("questionTitle").textContent = "Palabra misteriosa " + (indice + 1);
        $("answer").value = "";
        $("answer").disabled = false;
        $("feedback").textContent = "";
        $("feedback").className = "feedback";
        $("hintBtn").disabled = false;
        $("hintBtn").textContent = "✦ Desbloquear siguiente pista";
        $("hintStatus").textContent = "Pista 1 de 3 disponible.";
        $("pointsPreview").textContent = "Puntos posibles: 100";

        $("clues").innerHTML = enigma.pistas.map((pista, i) =>
          '<article class="clue ' + (i === 0 ? "" : "locked") +
          '" data-clue="' + i + '">' +
          '<span class="clue-number">' + (i + 1) + '</span>' +
          '<p>' + (i === 0 ? pista :
            "Pista todavía bloqueada. ¡Puedes descubrirla!") + '</p>' +
          '</article>'
        ).join("");

        crearProgreso();
        actualizarMarcador();
      }

      function desbloquearPista() {
        if (respondido || pistasMostradas >= 3) return;

        const enigma = enigmas[indice];
        const pistaIndex = pistasMostradas;
        const tarjeta = root.querySelector('[data-clue="' + pistaIndex + '"]');

        if (!tarjeta) return;

        tarjeta.classList.remove("locked");
        tarjeta.querySelector("p").textContent = enigma.pistas[pistaIndex];

        pistasMostradas++;
        puntosRonda = Math.max(20, 100 - (pistasMostradas - 1) * 20);

        $("hintStatus").textContent =
          "Has descubierto " + pistasMostradas + " de 3 pistas.";
        $("pointsPreview").textContent = "Puntos posibles: " + puntosRonda;

        if (pistasMostradas === 3) {
          $("hintBtn").disabled = true;
          $("hintBtn").textContent = "✓ Todas las pistas descubiertas";
        }
      }

      function comprobarRespuesta(evento) {
        evento.preventDefault();

        if (respondido) return;

        const respuestaUsuario = normalizar($("answer").value);

        if (!respuestaUsuario) {
          $("feedback").textContent =
            "Escribe una respuesta antes de comprobarla.";
          $("feedback").className = "feedback error";
          $("answer").focus();
          return;
        }

        const enigma = enigmas[indice];
        const respuestasAceptadas = [
          enigma.respuesta,
          ...enigma.alternativas
        ].map(normalizar);

        if (respuestasAceptadas.includes(respuestaUsuario)) {
          respondido = true;
          puntuacion += puntosRonda;
          resueltos++;

          $("feedback").textContent =
            "¡Correcto! +" + puntosRonda + " puntos. " + enigma.explicacion;
          $("feedback").className = "feedback success";
          $("answer").disabled = true;
          $("hintBtn").disabled = true;
          $("hintStatus").textContent = "¡Enigma resuelto!";
          $("pointsPreview").textContent =
            "Has ganado " + puntosRonda + " puntos.";

          actualizarMarcador();

          $("answerForm").querySelector('button[type="submit"]').textContent =
            indice === enigmas.length - 1
              ? "Ver resultado ↗"
              : "Siguiente enigma ↗";

          crearProgreso();
        } else {
          $("feedback").textContent =
            "No es esa palabra todavía. Revisa las pistas e inténtalo de nuevo.";
          $("feedback").className = "feedback error";
          $("answer").focus();
        }
      }

      function siguientePaso(evento) {
        evento.preventDefault();

        if (!respondido) {
          comprobarRespuesta(evento);
          return;
        }

        if (indice < enigmas.length - 1) {
          indice++;
          $("answerForm").querySelector('button[type="submit"]').textContent =
            "Comprobar ↗";
          mostrarEnigma();
          $("answer").focus();
        } else {
          terminarJuego();
        }
      }

      function terminarJuego() {
        $("endScreen").hidden = false;
        $("finalScore").textContent = puntuacion + " / 500";

        let mensaje;

        if (puntuacion >= 450) {
          mensaje = "¡Impresionante! Eres un auténtico guardián de los secretos de la Alhambra.";
        } else if (puntuacion >= 300) {
          mensaje = "¡Muy bien! Conoces la historia de Granada y sus monumentos.";
        } else {
          mensaje = "¡Aventura completada! Has descubierto los cinco lugares. Cada partida es una nueva oportunidad para aprender.";
        }

        $("finalMessage").textContent = mensaje;
        $("finalDetails").textContent =
          "Has resuelto " + resueltos + " de 5 enigmas y conseguido " +
          puntuacion + " puntos.";

        $("restartBtn").focus();
      }

      function reiniciarJuego() {
        indice = 0;
        puntuacion = 0;
        resueltos = 0;
        $("endScreen").hidden = true;

        $("answerForm").querySelector('button[type="submit"]').textContent =
          "Comprobar ↗";

        mostrarEnigma();
        $("answer").focus();
      }

      $("hintBtn").addEventListener("click", desbloquearPista);
      $("answerForm").addEventListener("submit", siguientePaso);
      $("restartBtn").addEventListener("click", reiniciarJuego);

      mostrarEnigma();
    })();
  `
},
    
game3: {
  title: "El ahorcado",
  instructions: "Adivina la palabra secreta relacionada con el Palmeral de Elche. Tienes seis oportunidades.",
  html: String.raw`<div class="contenedor">
  <header class="encabezado">
    <div>
      <h1>☀️ El ahorcado</h1>
      <p>Adivina la palabra secreta</p>
    </div>
    <div class="contador">
      <span>Errores</span>
      <strong id="numeroErrores">0 / 6</strong>
    </div>
  </header>

  <main class="zona-juego">
    <section class="zona-dibujo">
      <svg id="maniqui" viewBox="0 0 280 300"
           role="img" aria-label="Dibujo del maniquí del ahorcado">
        <path class="madera" d="M25 275 H150"/>
        <path class="madera" d="M65 275 V25 H180"/>
        <path class="madera" d="M110 25 L65 65"/>
        <path class="cuerda" d="M180 25 V67"/>

        <g id="parte1" class="parte">
          <ellipse class="piel" cx="180" cy="90" rx="27" ry="30"/>
          <path class="cara" d="M164 84 L174 87"/>
          <path class="cara" d="M187 87 L197 84"/>
          <circle class="ojo" cx="170" cy="94" r="2.8"/>
          <circle class="ojo" cx="191" cy="94" r="2.8"/>
          <path class="cara" d="M169 108 Q180 98 191 108"/>
        </g>

        <g id="parte2" class="parte">
          <path class="piel" d="M164 119 Q180 113 196 119 L202 176 Q180 188 158 176 Z"/>
          <path class="detalle" d="M180 125 V174"/>
        </g>

        <g id="parte3" class="parte">
          <path class="piel-linea" d="M163 126 L145 155 L151 177"/>
          <circle class="articulacion" cx="145" cy="155" r="5"/>
        </g>

        <g id="parte4" class="parte">
          <path class="piel-linea" d="M197 126 L215 155 L209 177"/>
          <circle class="articulacion" cx="215" cy="155" r="5"/>
        </g>

        <g id="parte5" class="parte">
          <path class="piel-linea" d="M166 180 L157 220 L151 255"/>
          <circle class="articulacion" cx="157" cy="220" r="5"/>
          <path class="piel-linea" d="M151 255 L140 258"/>
        </g>

        <g id="parte6" class="parte">
          <path class="piel-linea" d="M194 180 L203 220 L209 255"/>
          <circle class="articulacion" cx="203" cy="220" r="5"/>
          <path class="piel-linea" d="M209 255 L220 258"/>
        </g>
      </svg>
    </section>

    <aside class="zona-errores">
      <h2>❌ Letras incorrectas</h2>
      <div id="letrasIncorrectas" aria-live="polite">Ninguna todavía</div>
    </aside>
  </main>

  <section class="zona-palabra">
    <p class="instruccion" id="instruccion">¡Elige una letra!</p>
    <div id="palabra" aria-label="Palabra secreta"></div>
    <p id="mensaje" role="status" aria-live="polite"></p>
  </section>

  <section class="zona-teclado">
    <h2>Elige una letra</h2>
    <div id="teclado" aria-label="Teclado de letras"></div>
  </section>

  <button id="reiniciar" type="button">🔄 Nueva partida</button>
</div>`,
  css: String.raw`* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  padding: 16px 12px;
  background: #fff2b8;
  font-family: "Trebuchet MS", Arial, sans-serif;
  color: #5b4029;
}

button {
  font: inherit;
}

.contenedor {
  position: relative;
  width: 100%;
  max-width: 850px;
  margin: auto;
  padding: 25px;
  background: #fffbea;
  border: 3px solid #e8c96d;
  border-radius: 24px;
  box-shadow: 0 8px 20px #8c6c3320;
}

.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border-bottom: 2px dashed #e7cd83;
  padding-bottom: 15px;
}

.encabezado h1 {
  margin: 0;
  color: #9b682d;
  font-size: clamp(24px, 4vw, 34px);
}

.encabezado p {
  margin-bottom: 0;
  color: #8a775d;
}

.contador {
  min-width: 100px;
  padding: 12px;
  text-align: center;
  background: #ffe49a;
  border-radius: 14px;
}

.contador span,
.contador strong {
  display: block;
}

.contador strong {
  margin-top: 5px;
  font-size: 20px;
}

.zona-juego {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 200px;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.zona-dibujo {
  min-width: 0;
  text-align: center;
  background: #fff6d6;
  border-radius: 18px;
  padding: 10px;
}

#maniqui {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.madera {
  fill: none;
  stroke: #98602f;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cuerda {
  fill: none;
  stroke: #ad8a5c;
  stroke-width: 4;
  stroke-linecap: round;
}

.parte {
  visibility: hidden;
}

.piel {
  fill: #c99b70;
  stroke: #885c3c;
  stroke-width: 2.5;
}

.piel-linea {
  fill: none;
  stroke: #b78357;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.articulacion {
  fill: #d5ab7f;
  stroke: #885c3c;
  stroke-width: 2;
}

.cara {
  fill: none;
  stroke: #64432f;
  stroke-width: 2.5;
  stroke-linecap: round;
}

.ojo {
  fill: #513727;
}

.detalle {
  fill: none;
  stroke: #986b49;
  stroke-width: 2;
}

.zona-errores {
  align-self: start;
  min-height: 150px;
  padding: 15px;
  background: #fff1d7;
  border: 2px solid #d8ae65;
  border-radius: 15px;
  overflow-wrap: anywhere;
}

.zona-errores h2 {
  margin-top: 0;
  font-size: 17px;
}

#letrasIncorrectas {
  min-height: 60px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.8;
  color: #b84b38;
}

.zona-palabra {
  margin: 25px 0;
  text-align: center;
}

.instruccion {
  color: #8a775d;
}

#palabra {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
}

.casilla {
  width: 35px;
  min-width: 20px;
  height: 43px;
  border-bottom: 3px solid #ad793e;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
}

#mensaje {
  min-height: 25px;
  font-size: 18px;
  font-weight: bold;
}

.zona-teclado {
  text-align: center;
}

.zona-teclado h2 {
  font-size: 19px;
}

#teclado {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  margin: 15px 0 25px;
}

#teclado button {
  min-width: 40px;
  min-height: 40px;
  padding: 6px;
  border: 1px solid #d5b66b;
  border-radius: 10px;
  background: #ffe49a;
  color: #624522;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

#teclado button:hover:not(:disabled) {
  background: #f4cf65;
  transform: translateY(-2px);
}

#teclado button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

#reiniciar {
  display: block;
  margin: 0 auto;
  padding: 13px 22px;
  border: none;
  border-radius: 12px;
  background: #a36c35;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

#reiniciar:hover {
  background: #825126;
}

button:focus-visible {
  outline: 3px solid #175eaa;
  outline-offset: 3px;
}

@media (max-width: 560px) {
  .contenedor {
    padding: 15px;
  }

  .zona-juego {
    grid-template-columns: 1fr;
  }

  .zona-errores {
    min-height: auto;
  }

  .zona-dibujo svg {
    max-width: 250px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (forced-colors: active) {
  button:focus-visible {
    outline: 3px solid Highlight;
  }
}`,
  js: String.raw`const palabras = [
  "palmeras",
  "dátiles",
  "sol",
  "cerámica",
  "sombra",
  "regadío",
  "artificial",
  "elche",
  "alcudia",
  "ilicitanos",
  "fenicios",
  "cultural",
  "patrimonio",
  "islámica",
  "tradicional"
];

const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const partes = [
  "parte1",
  "parte2",
  "parte3",
  "parte4",
  "parte5",
  "parte6"
];

let palabraSecreta = "";
let letrasUsadas = [];
let letrasIncorrectas = [];
let fallos = 0;
let terminado = false;

const zonaPalabra = document.getElementById("palabra");
const zonaTeclado = document.getElementById("teclado");
const zonaErrores = document.getElementById("numeroErrores");
const zonaIncorrectas = document.getElementById("letrasIncorrectas");
const zonaMensaje = document.getElementById("mensaje");
const zonaInstruccion = document.getElementById("instruccion");

function normalizar(letra) {
  return letra.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function iniciarJuego() {
  const indice = Math.floor(Math.random() * palabras.length);
  palabraSecreta = palabras[indice].toUpperCase();

  letrasUsadas = [];
  letrasIncorrectas = [];
  fallos = 0;
  terminado = false;

  zonaPalabra.replaceChildren();
  zonaTeclado.replaceChildren();
  zonaErrores.textContent = "0 / 6";
  zonaIncorrectas.textContent = "Ninguna todavía";
  zonaMensaje.textContent = "";
  zonaInstruccion.textContent = "¡Elige una letra!";

  partes.forEach(id => {
    document.getElementById(id).style.visibility = "hidden";
  });

  for (let i = 0; i < palabraSecreta.length; i++) {
    const casilla = document.createElement("span");
    casilla.className = "casilla";
    casilla.textContent = "";
    zonaPalabra.appendChild(casilla);
  }

  for (const letra of alfabeto) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = letra;
    boton.setAttribute("aria-label", "Letra " + letra);

    boton.addEventListener("click", () => {
      probarLetra(letra, boton);
    });

    zonaTeclado.appendChild(boton);
  }
}

function probarLetra(letra, boton) {
  if (terminado || letrasUsadas.includes(letra)) {
    return;
  }

  letrasUsadas.push(letra);
  boton.disabled = true;

  const palabraNormalizada = normalizar(palabraSecreta);
  const letraNormalizada = normalizar(letra);

  if (palabraNormalizada.includes(letraNormalizada)) {
    mostrarLetras();
  } else {
    fallos++;
    letrasIncorrectas.push(letra);
    zonaErrores.textContent = fallos + " / 6";
    zonaIncorrectas.textContent = letrasIncorrectas.join(" · ");

    const parte = partes[fallos - 1];
    document.getElementById(parte).style.visibility = "visible";
  }

  comprobarFinal();
}

function mostrarLetras() {
  const letrasPalabra = [...palabraSecreta];
  const casillas = zonaPalabra.querySelectorAll(".casilla");

  casillas.forEach((casilla, indice) => {
    const letraOriginal = letrasPalabra[indice];

    if (letrasUsadas.includes(normalizar(letraOriginal))) {
      casilla.textContent = letraOriginal;
    }
  });
}

function comprobarFinal() {
  const ganaste = [...normalizar(palabraSecreta)]
    .every(letra => letrasUsadas.includes(letra));

  if (ganaste) {
    terminado = true;
    zonaMensaje.textContent = "🎉 ¡Muy bien! Has acertado.";
    zonaInstruccion.textContent = "¡Palabra descubierta!";
    desactivarTeclado();
  } else if (fallos >= 6) {
    terminado = true;
    mostrarPalabraCompleta();

    zonaMensaje.textContent =
      "¡Fin de la partida! La palabra era " + palabraSecreta + ".";

    zonaInstruccion.textContent = "¡Puedes probar otra vez!";
    desactivarTeclado();
  }
}

function mostrarPalabraCompleta() {
  const casillas = zonaPalabra.querySelectorAll(".casilla");

  casillas.forEach((casilla, indice) => {
    casilla.textContent = [...palabraSecreta][indice];
  });
}

function desactivarTeclado() {
  zonaTeclado.querySelectorAll("button").forEach(boton => {
    boton.disabled = true;
  });
}

document.getElementById("reiniciar").addEventListener(
  "click",
  iniciarJuego
);

iniciarJuego();`
},

game4: {
  title: "Quiz futurista: Ibiza",
  instructions: "Lee cada afirmación y selecciona VERDADERO o FALSO. También puedes utilizar las teclas V y F. Tras responder, verás una explicación. La voz es opcional y las opciones de accesibilidad están disponibles en el desplegable.",

  html: String.raw`
    <div id="game4-root" class="g4-game">
      <header class="g4-header">
        <div class="g4-heading">
          <p class="g4-eyebrow">ARENA DE CONOCIMIENTO</p>
          <h2>❄ Quiz futurista</h2>
          <p>Edición especial: Ibiza</p>
        </div>
        <div class="g4-scoreboard" aria-label="Progreso del juego">
          <span>Puntos: <strong id="g4-score">0</strong></span>
          <span>Pregunta: <strong id="g4-progress">1/8</strong></span>
        </div>
      </header>

      <section class="g4-answers" aria-label="Selecciona tu respuesta">
        <button type="button" id="g4-trueBtn" class="g4-answer g4-true">
          ✓ VERDADERO
        </button>
        <button type="button" id="g4-falseBtn" class="g4-answer g4-false">
          ✕ FALSO
        </button>
      </section>

      <p class="g4-help">Responde también con las teclas V y F.</p>

      <section class="g4-panel" aria-label="Pregunta del juego">
        <div class="g4-tags">
          <span id="g4-category">Geografía</span>
          <span>♿ ACCESIBLE</span>
        </div>

        <h3 id="g4-question" tabindex="-1">Preparando pregunta...</h3>

        <div id="g4-pictures" class="g4-pictures">
          <div class="g4-picture">
            <span aria-hidden="true">🏝️</span>
            <b>IBIZA</b>
          </div>
          <div class="g4-picture">
            <span aria-hidden="true">🧭</span>
            <b>MEDITERRÁNEO</b>
          </div>
        </div>

        <div class="g4-text-info">
          <strong id="g4-detail-title">INFORMACIÓN</strong>
          <p id="g4-detail" aria-live="polite">
            Lee la afirmación y decide si es verdadera o falsa.
          </p>
        </div>

        <div class="g4-voice-actions">
          <button type="button" id="g4-speakBtn" class="g4-secondary">
            🔊 Leer texto
          </button>
          <button type="button" id="g4-repeatBtn" class="g4-secondary">
            ↻ Repetir pregunta
          </button>
        </div>

        <p id="g4-feedback" class="g4-feedback" role="status" aria-live="polite">
          Elige verdadero o falso para responder.
        </p>

        <div class="g4-actions">
          <button type="button" id="g4-nextBtn" class="g4-next" disabled>
            Siguiente →
          </button>
        </div>
      </section>

      <details class="g4-settings">
        <summary>⚙️ Opciones de accesibilidad</summary>

        <div class="g4-settings-content">
          <label class="g4-option">
            <input type="checkbox" id="g4-captions" checked>
            <span>Mostrar texto de apoyo</span>
          </label>

          <label class="g4-option">
            <input type="checkbox" id="g4-voiceEnabled">
            <span>Activar voz del navegador</span>
          </label>

          <label class="g4-option">
            <input type="checkbox" id="g4-easyMode" checked>
            <span>Modo fácil de entender</span>
          </label>

          <label class="g4-option">
            <input type="checkbox" id="g4-contrast">
            <span>Alto contraste</span>
          </label>

          <label class="g4-option">
            <input type="checkbox" id="g4-reduceMotion">
            <span>Reducir animaciones</span>
          </label>

          <p id="g4-subtitle" class="g4-subtitle" aria-live="polite">
            El texto de apoyo está activado.
          </p>

          <p id="g4-voiceStatus" class="g4-voice-status"
             role="status" aria-live="polite">
            Puedes jugar con los botones o el teclado.
          </p>
        </div>
      </details>

      <footer class="g4-footer">
        QUIZ FUTURISTA · IBIZA
      </footer>
    </div>
  `,

  css: String.raw`
    #game4-root {
      --g4-bg: #050817;
      --g4-text: #f5f8ff;
      --g4-muted: #c6d4ee;
      --g4-cyan: #28dcff;
      --g4-green: #35ff75;
      --g4-red: #ff6678;

      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      color: var(--g4-text);
      background: radial-gradient(ellipse at top, #163a78 0%, transparent 55%), var(--g4-bg);
      border-radius: 12px;
      font: 14px/1.45 Arial, Helvetica, sans-serif;
    }

    #game4-root *,
    #game4-root *::before,
    #game4-root *::after {
      box-sizing: border-box;
    }

    #game4-root button,
    #game4-root input {
      font: inherit;
    }

    #game4-root button {
      cursor: pointer;
    }

    #game4-root button:focus-visible,
    #game4-root input:focus-visible,
    #game4-root summary:focus-visible {
      outline: 3px solid #fff176;
      outline-offset: 3px;
    }

    #game4-root button:disabled {
      opacity: .55;
      cursor: not-allowed;
    }

    #game4-root .g4-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
      padding: 3px 2px 10px;
      border-bottom: 1px solid #2476a8;
    }

    #game4-root .g4-heading h2 {
      margin: 0;
      color: var(--g4-text);
      font-size: 1.4rem;
      line-height: 1.2;
    }

    #game4-root .g4-heading p {
      margin: 3px 0 0;
    }

    #game4-root .g4-eyebrow {
      margin: 0 0 3px;
      color: var(--g4-cyan);
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    #game4-root .g4-scoreboard {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    #game4-root .g4-scoreboard span {
      padding: 5px 8px;
      background: #102448;
      border: 1px solid #267eb1;
      border-radius: 8px;
      font-size: .78rem;
      white-space: nowrap;
    }

    #game4-root .g4-answers {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 10px;
    }

    #game4-root .g4-answer {
      min-height: 54px;
      padding: 8px 5px;
      border: 2px solid;
      border-radius: 9px;
      background: #070d20;
      font-size: 1rem;
      font-weight: 900;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-true {
      color: var(--g4-green);
      border-color: var(--g4-green);
    }

    #game4-root .g4-false {
      color: var(--g4-red);
      border-color: var(--g4-red);
    }

    #game4-root .g4-answer:hover:not(:disabled) {
      filter: brightness(1.25);
    }

    #game4-root .g4-help {
      margin: 5px 0;
      color: var(--g4-muted);
      text-align: center;
      font-size: .78rem;
    }

    #game4-root .g4-panel {
      min-width: 0;
      margin-top: 8px;
      padding: 11px;
      background: linear-gradient(145deg, #0b1938, #080d20);
      border: 1px solid #2476a8;
      border-radius: 11px;
    }

    #game4-root .g4-tags {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 5px;
      color: #9cefff;
      font-size: .7rem;
      font-weight: 700;
    }

    #game4-root #g4-question {
      margin: 9px 0;
      color: var(--g4-text);
      font-size: 1.1rem;
      line-height: 1.35;
    }

    #game4-root .g4-pictures {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
    }

    #game4-root .g4-picture {
      display: flex;
      min-width: 0;
      min-height: 55px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 7px;
      padding: 7px;
      background: linear-gradient(145deg, #12386c, #141d47);
      border: 1px solid var(--g4-cyan);
      border-radius: 9px;
      text-align: center;
    }

    #game4-root .g4-picture span {
      font-size: 1.7rem;
      line-height: 1;
    }

    #game4-root .g4-picture b {
      color: #b5f4ff;
      font-size: .72rem;
      letter-spacing: .4px;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-text-info {
      margin-top: 8px;
      padding: 9px;
      background: #092753;
      border: 1px solid #187fc4;
      border-radius: 8px;
    }

    #game4-root .g4-text-info strong {
      color: #9cefff;
      font-size: .7rem;
      letter-spacing: .4px;
    }

    #game4-root .g4-text-info p {
      margin: 3px 0 0;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-voice-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 8px;
    }

    #game4-root .g4-secondary,
    #game4-root .g4-next {
      min-height: 38px;
      padding: 7px 10px;
      color: #fff;
      background: #103768;
      border: 1px solid var(--g4-cyan);
      border-radius: 8px;
      font-size: .8rem;
      font-weight: 700;
    }

    #game4-root .g4-secondary:hover:not(:disabled),
    #game4-root .g4-next:hover:not(:disabled) {
      background: #17518c;
    }

    #game4-root .g4-feedback {
      min-height: 0;
      margin: 8px 0 0;
      padding: 9px;
      background: #081c36;
      border-left: 4px solid var(--g4-cyan);
      border-radius: 5px;
      font-size: .87rem;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-feedback.g4-good {
      border-color: var(--g4-green);
    }

    #game4-root .g4-feedback.g4-bad {
      border-color: var(--g4-red);
    }

    #game4-root .g4-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 8px;
    }

    #game4-root .g4-next {
      background: #075ab0;
    }

    #game4-root .g4-settings {
      margin-top: 8px;
      background: #09152e;
      border: 1px solid #2476a8;
      border-radius: 9px;
    }

    #game4-root .g4-settings summary {
      padding: 9px 11px;
      color: #9cefff;
      font-size: .85rem;
      font-weight: 700;
      cursor: pointer;
    }

    #game4-root .g4-settings-content {
      padding: 0 9px 9px;
    }

    #game4-root .g4-option {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 5px 0;
      padding: 7px;
      background: #0b1938;
      border: 1px solid #243f64;
      border-radius: 7px;
      font-size: .83rem;
      cursor: pointer;
    }

    #game4-root .g4-option input {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      accent-color: #21d7ff;
    }

    #game4-root .g4-subtitle {
      margin: 7px 0;
      padding: 8px;
      background: #020712;
      border: 1px dashed var(--g4-cyan);
      border-radius: 7px;
      font-size: .8rem;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-voice-status {
      margin: 6px 0 0;
      color: var(--g4-muted);
      font-size: .78rem;
      overflow-wrap: anywhere;
    }

    #game4-root .g4-footer {
      padding: 8px 2px 2px;
      color: var(--g4-muted);
      text-align: center;
      font-size: .65rem;
      letter-spacing: .5px;
    }

    #game4-root.g4-high-contrast {
      --g4-bg: #000;
      --g4-text: #fff;
      --g4-muted: #fff;
      --g4-cyan: #0ff;
      --g4-green: #0f0;
      --g4-red: #ff6464;
      background: #000;
    }

    #game4-root.g4-high-contrast .g4-panel,
    #game4-root.g4-high-contrast .g4-option,
    #game4-root.g4-high-contrast .g4-feedback,
    #game4-root.g4-high-contrast .g4-settings {
      background: #000;
      border-color: #fff;
    }

    #game4-root.g4-reduce-motion *,
    #game4-root.g4-reduce-motion *::before,
    #game4-root.g4-reduce-motion *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }

    @media (max-width: 400px) {
      #game4-root .g4-header {
        align-items: flex-start;
      }

      #game4-root .g4-scoreboard {
        width: 100%;
      }

      #game4-root .g4-picture {
        flex-direction: column;
        gap: 3px;
      }

      #game4-root .g4-voice-actions {
        display: grid;
        grid-template-columns: 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #game4-root *,
      #game4-root *::before,
      #game4-root *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.getElementById("game4-root");

      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const preguntas = [
        {
          texto: "Ibiza está situada al sur de las Islas Baleares.",
          facil: "Ibiza está al sur de las Islas Baleares.",
          correcta: true,
          explicacion: "Ibiza forma parte de las Islas Baleares."
        },
        {
          texto: "La posición de Ibiza favoreció las rutas de navegación del Mediterráneo.",
          facil: "La posición de Ibiza ayudó a conectar rutas marítimas.",
          correcta: true,
          explicacion: "Su posición favoreció el paso de distintas culturas."
        },
        {
          texto: "La actividad salinera de Ibiza comenzó en el siglo VI antes de Cristo.",
          facil: "La producción de sal comenzó en el siglo seis antes de Cristo.",
          correcta: true,
          explicacion: "Esa es la fecha indicada en el material original del juego."
        },
        {
          texto: "Ibiza fue declarada Patrimonio de la Humanidad por la UNESCO en 1999.",
          facil: "Ibiza recibió la declaración de Patrimonio de la Humanidad en 1999.",
          correcta: true,
          explicacion: "La declaración se produjo el 4 de diciembre de 1999."
        },
        {
          texto: "El olivo mencionado en el documento alcanza los 12 metros de altura.",
          facil: "El olivo mencionado mide 12 metros de alto.",
          correcta: true,
          explicacion: "Esa es la altura indicada en el material original."
        },
        {
          texto: "Ibiza es conocida por sus fiestas y locales de ocio.",
          facil: "Ibiza es conocida por sus fiestas.",
          correcta: true,
          explicacion: "Ibiza cuenta con discotecas, bares y beach clubs."
        },
        {
          texto: "Es Canaret siempre fue fácil de encontrar y tenía muchos accesos públicos.",
          facil: "Es Canaret siempre fue fácil de encontrar.",
          correcta: false,
          explicacion: "Según el material del juego, durante décadas el acceso era limitado."
        },
        {
          texto: "Es Canaret conserva su esencia de lugar escondido aunque existe un paso habilitado.",
          facil: "Ahora hay un paso para llegar a Es Canaret.",
          correcta: true,
          explicacion: "El material del juego indica que el lugar mantiene su carácter escondido."
        }
      ];

      const $ = id => root.querySelector("#g4-" + id);

      const botonV = $("trueBtn");
      const botonF = $("falseBtn");
      const botonSiguiente = $("nextBtn");
      const preguntaEl = $("question");
      const puntuacionEl = $("score");
      const progresoEl = $("progress");
      const respuestaEl = $("feedback");
      const categoriaEl = $("category");
      const detalleEl = $("detail");
      const detalleTitulo = $("detail-title");
      const subtituloEl = $("subtitle");
      const voiceStatus = $("voiceStatus");
      const pictures = $("pictures");
      const picturesOriginal = pictures.innerHTML;

      let indice = 0;
      let puntos = 0;
      let yaRespondido = false;
      let terminado = false;

      function obtenerTextoPregunta() {
        const p = preguntas[indice];
        return $("easyMode").checked ? p.facil : p.texto;
      }

      function hablar(texto) {
        if (!$("voiceEnabled").checked) {
          voiceStatus.textContent =
            "Activa la voz en las opciones de accesibilidad para escuchar los textos.";
          return;
        }

        if (
          !("speechSynthesis" in window) ||
          !("SpeechSynthesisUtterance" in window)
        ) {
          voiceStatus.textContent =
            "La voz no está disponible en este navegador. Puedes seguir jugando leyendo los textos.";
          return;
        }

        window.speechSynthesis.cancel();

        const voz = new SpeechSynthesisUtterance(texto);
        voz.lang = "es-ES";
        voz.rate = $("easyMode").checked ? 0.85 : 1;

        voz.onerror = () => {
          voiceStatus.textContent =
            "No se ha podido reproducir la voz. Puedes seguir leyendo los textos.";
        };

        window.speechSynthesis.speak(voz);
        voiceStatus.textContent = "Reproduciendo el texto en voz alta.";
      }

      function actualizarTextoApoyo(texto) {
        const mostrar = $("captions").checked;
        subtituloEl.hidden = !mostrar;

        if (mostrar) {
          subtituloEl.textContent = texto;
        }
      }

      function mostrarPregunta() {
        yaRespondido = false;
        terminado = false;

        preguntaEl.textContent = obtenerTextoPregunta();
        categoriaEl.textContent = "Geografía · Pregunta " + (indice + 1);
        puntuacionEl.textContent = puntos;
        progresoEl.textContent = (indice + 1) + "/" + preguntas.length;

        detalleTitulo.textContent = "INFORMACIÓN";
        detalleEl.textContent =
          "Lee la afirmación y decide si es verdadera o falsa.";

        respuestaEl.className = "g4-feedback";
        respuestaEl.textContent =
          "Elige VERDADERO o FALSO para responder.";

        botonV.disabled = false;
        botonF.disabled = false;
        botonSiguiente.disabled = true;
        botonSiguiente.textContent =
          indice === preguntas.length - 1
            ? "Ver resultado →"
            : "Siguiente →";

        pictures.innerHTML = picturesOriginal;
        actualizarTextoApoyo(preguntaEl.textContent);

        voiceStatus.textContent =
          "Puedes jugar con los botones o las teclas V y F.";
      }

      function responder(valor) {
        if (yaRespondido || terminado) return;

        yaRespondido = true;

        const p = preguntas[indice];
        const acierto = valor === p.correcta;

        if (acierto) puntos++;

        const solucion = p.correcta ? "VERDADERO" : "FALSO";
        const mensaje = acierto
          ? "¡Correcto! " + p.explicacion
          : "La respuesta correcta es " + solucion + ". " + p.explicacion;

        respuestaEl.className =
          "g4-feedback " + (acierto ? "g4-good" : "g4-bad");
        respuestaEl.textContent = mensaje;

        detalleTitulo.textContent = "EXPLICACIÓN";
        detalleEl.textContent = p.explicacion;

        puntuacionEl.textContent = puntos;
        botonV.disabled = true;
        botonF.disabled = true;
        botonSiguiente.disabled = false;

        actualizarTextoApoyo(preguntaEl.textContent + " " + mensaje);

        if ($("voiceEnabled").checked) hablar(mensaje);
      }

      function avanzar() {
        if (terminado) {
          reiniciar();
          return;
        }

        if (!yaRespondido) return;

        if (indice < preguntas.length - 1) {
          indice++;
          mostrarPregunta();
          preguntaEl.focus();
          return;
        }

        terminado = true;

        preguntaEl.textContent = "¡Misión completada!";
        categoriaEl.textContent = "RESULTADO";

        pictures.innerHTML =
          '<div class="g4-picture"><span aria-hidden="true">🏆</span>' +
          '<b>' + puntos + " / " + preguntas.length + " PUNTOS</b></div>";

        detalleTitulo.textContent = "TU RESULTADO";
        detalleEl.textContent =
          "Has conseguido " + puntos + " de " + preguntas.length +
          " puntos. Puedes volver a jugar cuando quieras.";

        respuestaEl.className = "g4-feedback g4-good";
        respuestaEl.textContent =
          "¡Gracias por jugar! Pulsa «Jugar otra vez» para intentarlo de nuevo.";

        botonV.disabled = true;
        botonF.disabled = true;
        botonSiguiente.disabled = false;
        botonSiguiente.textContent = "Jugar otra vez ↻";

        actualizarTextoApoyo(respuestaEl.textContent);

        if ($("voiceEnabled").checked) hablar(respuestaEl.textContent);

        preguntaEl.focus();
      }

      function reiniciar() {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        indice = 0;
        puntos = 0;
        yaRespondido = false;
        terminado = false;

        mostrarPregunta();
        preguntaEl.focus();
      }

      botonV.addEventListener("click", () => responder(true));
      botonF.addEventListener("click", () => responder(false));
      botonSiguiente.addEventListener("click", avanzar);

      $("speakBtn").addEventListener("click", () => {
        hablar(
          yaRespondido
            ? respuestaEl.textContent
            : preguntaEl.textContent
        );
      });

      $("repeatBtn").addEventListener("click", () => {
        hablar(preguntaEl.textContent);
      });

      $("easyMode").addEventListener("change", () => {
        if (!terminado) {
          preguntaEl.textContent = obtenerTextoPregunta();
          actualizarTextoApoyo(preguntaEl.textContent);
        }
      });

      $("captions").addEventListener("change", () => {
        actualizarTextoApoyo(
          yaRespondido ? respuestaEl.textContent : preguntaEl.textContent
        );
      });

      $("voiceEnabled").addEventListener("change", event => {
        if (!event.target.checked && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          voiceStatus.textContent =
            "Voz desactivada. Puedes seguir leyendo los textos.";
        } else if (event.target.checked) {
          voiceStatus.textContent =
            "Voz activada. Utiliza los botones para escuchar las frases.";
        }
      });

      $("contrast").addEventListener("change", event => {
        root.classList.toggle("g4-high-contrast", event.target.checked);
      });

      $("reduceMotion").addEventListener("change", event => {
        root.classList.toggle("g4-reduce-motion", event.target.checked);
      });

      function manejarTeclado(event) {
        if (!root.contains(document.activeElement)) return;
        if (event.ctrlKey || event.altKey || event.metaKey) return;

        const tag = document.activeElement.tagName;
        if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;

        if (event.key.toLowerCase() === "v") {
          event.preventDefault();
          responder(true);
        } else if (event.key.toLowerCase() === "f") {
          event.preventDefault();
          responder(false);
        } else if (event.key === "Enter" && yaRespondido) {
          event.preventDefault();
          avanzar();
        }
      }

      document.addEventListener("keydown", manejarTeclado);

      mostrarPregunta();
    })();
  `
},
    game5: {
  title: "🔎 El año misterioso",
  instructions: "Descubre los dos años ocultos siguiendo las tres pistas de cada nivel.",

  html: String.raw`
    <div class="game-game5">
      <section class="screen start-screen" aria-labelledby="g5-start-title">
        <div class="start-card">
          <h1 id="g5-start-title">EL AÑO MISTERIOSO</h1>
          <p>Descubre el año oculto siguiendo las tres pistas de cada nivel.</p>
          <button type="button" class="game-btn start-btn">COMENZAR</button>
        </div>
      </section>

      <section class="screen game-screen" hidden aria-label="Juego">
        <div class="level-indicator">
          NIVEL <span class="level-number">1</span> / 2
        </div>

        <main class="game-content">
          <div class="question-box">
            <div class="box-title">PREGUNTA</div>
            <p class="question"></p>
          </div>

          <div class="clues-box">
            <div class="box-title">PISTAS</div>
            <ol class="clues"></ol>
          </div>

          <div class="answer-box">
            <label class="answer-label">¿CUÁL ES EL AÑO?</label>
            <div class="answer-area">
              <input
                type="number"
                class="answer"
                aria-label="Escribe el año"
                placeholder="Escribe el año..."
                autocomplete="off"
                inputmode="numeric"
              >
              <button type="button" class="game-btn check-btn">COMPROBAR</button>
            </div>
            <p class="feedback" aria-live="polite"></p>
          </div>
        </main>
      </section>

      <section class="screen end-screen" hidden aria-labelledby="g5-end-title">
        <div class="end-card">
          <h1 id="g5-end-title">¡MISTERIO RESUELTO!</h1>
          <p>Has descubierto los dos años misteriosos.</p>
          <p class="final-message">1995 · 1755</p>
          <button type="button" class="game-btn restart-btn">JUGAR DE NUEVO</button>
        </div>
      </section>
    </div>
  `,

  css: String.raw`
    .game-game5 {
      position: relative;
      isolation: isolate;
      width: 100%;
      min-height: 480px;
      overflow: hidden;
      font-family: Helvetica, Arial, sans-serif;
      color: #432991;
      background-image:
        linear-gradient(rgba(55, 48, 120, 0.58), rgba(55, 48, 120, 0.58)),
        url("https://media1.thrillophilia.com/filestore/wxtmbnti8xi7nl4nnsye7m4ti40u_ji06ve38vu1lys8wcc78r75mcbpd_17b.jpg?w=340&dpr=2");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 12px;
    }

    .game-game5 *,
    .game-game5 *::before,
    .game-game5 *::after {
      box-sizing: border-box;
    }

    .game-game5 [hidden] {
      display: none !important;
    }

    .game-game5 .screen {
      position: relative;
      z-index: 1;
      width: 100%;
      min-height: 480px;
    }

    .game-game5 .start-screen,
    .game-game5 .end-screen {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 16px;
    }

    .game-game5 .start-card,
    .game-game5 .end-card {
      width: min(560px, 100%);
      padding: clamp(24px, 5vw, 45px);
      text-align: center;
      background: #D5D1E6;
      border: 3px solid #432991;
      border-radius: 8px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }

    .game-game5 .start-card h1,
    .game-game5 .end-card h1 {
      margin: 0 0 20px;
      color: #432991;
      font-size: clamp(24px, 4vw, 32px);
      letter-spacing: 1px;
      line-height: 1.2;
    }

    .game-game5 .start-card p,
    .game-game5 .end-card p {
      color: #432991;
      font-size: 17px;
      line-height: 1.5;
    }

    .game-game5 .game-btn {
      padding: 13px 22px;
      border: 2px solid #432991;
      border-radius: 5px;
      background: #432991;
      color: #fff;
      font-family: inherit;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.2s ease;
    }

    .game-game5 .game-btn:hover:not(:disabled) {
      background: #5741ae;
      transform: translateY(-2px);
    }

    .game-game5 .game-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .game-game5 button:focus-visible,
    .game-game5 input:focus-visible {
      outline: 3px solid #111827;
      outline-offset: 3px;
    }

    .game-game5 .game-screen {
      padding: 24px;
      overflow-y: auto;
    }

    .game-game5 .level-indicator {
      display: table;
      margin: 0 0 20px auto;
      padding: 10px 18px;
      background: #D5D1E6;
      color: #432991;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .game-game5 .game-content {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      width: min(1100px, 100%);
      margin: 0 auto;
      animation: g5-appear 0.5s ease;
    }

    .game-game5 .question-box,
    .game-game5 .clues-box {
      min-width: 0;
      min-height: 170px;
      padding: 22px;
      background: #D5D1E6;
      color: #432991;
      border-radius: 5px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    }

    .game-game5 .box-title {
      padding-bottom: 10px;
      border-bottom: 2px solid #432991;
      color: #432991;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .game-game5 .question {
      margin: 15px 0 0;
      font-size: clamp(18px, 2.4vw, 23px);
      line-height: 1.4;
    }

    .game-game5 .clues {
      margin: 15px 0 0;
      padding-left: 24px;
    }

    .game-game5 .clues li {
      margin-bottom: 12px;
      font-size: 16px;
      line-height: 1.4;
    }

    .game-game5 .answer-box {
      grid-column: 1 / -1;
      min-width: 0;
      padding: 22px;
      background: #F6E58D;
      border-radius: 5px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    }

    .game-game5 .answer-label {
      display: block;
      margin-bottom: 15px;
      color: #432991;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .game-game5 .answer-area {
      display: flex;
      gap: 12px;
    }

    .game-game5 .answer {
      flex: 1;
      width: 100%;
      min-width: 0;
      padding: 13px 16px;
      border: 2px solid #432991;
      border-radius: 5px;
      background: #fffdf0;
      color: #432991;
      font-family: inherit;
      font-size: 18px;
    }

    .game-game5 .answer::placeholder {
      color: #71678f;
    }

    .game-game5 .feedback {
      min-height: 24px;
      margin: 15px 0 0;
      color: #432991;
      font-size: 15px;
      font-weight: bold;
      line-height: 1.5;
    }

    .game-game5 .feedback.correct {
      color: #17632b;
    }

    .game-game5 .feedback.incorrect {
      color: #8b2525;
    }

    .game-game5 .final-message {
      margin: 25px 0 !important;
      font-size: 30px !important;
      font-weight: bold;
      letter-spacing: 4px;
    }

    @keyframes g5-appear {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 700px) {
      .game-game5 .game-screen {
        padding: 18px 12px;
      }

      .game-game5 .game-content {
        grid-template-columns: 1fr;
      }

      .game-game5 .answer-box {
        grid-column: auto;
      }

      .game-game5 .answer-area {
        flex-direction: column;
      }

      .game-game5 .question-box,
      .game-game5 .clues-box,
      .game-game5 .answer-box {
        padding: 18px;
      }

      .game-game5 .question {
        font-size: 18px;
      }

      .game-game5 .clues li {
        font-size: 15px;
      }
    }

    @media (max-width: 400px) {
      .game-game5 .start-card,
      .game-game5 .end-card {
        padding: 24px 16px;
      }

      .game-game5 .final-message {
        font-size: 25px !important;
        letter-spacing: 2px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .game-game5 .game-content {
        animation: none;
      }

      .game-game5 .game-btn {
        transition: none;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.querySelector(".game-game5");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const levels = [
        {
          question: "¿En qué año se nombró Patrimonio de la UNESCO?",
          clues: [
            "Es un municipio costero portugués.",
            "Tiene un paisajismo y arquitectura romántica.",
            "Fue decidido entre las primeras 30 reuniones del Comité de Patrimonio de la Humanidad de la UNESCO."
          ],
          answer: 1995
        },
        {
          question: "¿En qué año sucedió el acontecimiento que hizo que se volviera a hablar de Sintra?",
          clues: [
            "Desastre natural.",
            "Generó su posterior auge.",
            "Antes del reinado de Fernando de Sajonia-Coburgo-Gotha."
          ],
          answer: 1755
        }
      ];

      const startScreen = root.querySelector(".start-screen");
      const gameScreen = root.querySelector(".game-screen");
      const endScreen = root.querySelector(".end-screen");

      const startBtn = root.querySelector(".start-btn");
      const restartBtn = root.querySelector(".restart-btn");
      const checkBtn = root.querySelector(".check-btn");

      const levelNumber = root.querySelector(".level-number");
      const question = root.querySelector(".question");
      const clues = root.querySelector(".clues");
      const answerInput = root.querySelector(".answer");
      const feedback = root.querySelector(".feedback");

      let currentLevel = 0;
      let advanceTimeout = null;

      function clearAdvanceTimeout() {
        if (advanceTimeout !== null) {
          clearTimeout(advanceTimeout);
          advanceTimeout = null;
        }
      }

      function startGame() {
        clearAdvanceTimeout();
        currentLevel = 0;
        startScreen.hidden = true;
        endScreen.hidden = true;
        gameScreen.hidden = false;
        loadLevel();
      }

      function loadLevel() {
        const level = levels[currentLevel];

        levelNumber.textContent = String(currentLevel + 1);
        question.textContent = level.question;
        clues.replaceChildren();

        level.clues.forEach(clue => {
          const li = document.createElement("li");
          li.textContent = clue;
          clues.appendChild(li);
        });

        answerInput.value = "";
        answerInput.disabled = false;
        checkBtn.disabled = false;
        feedback.textContent = "";
        feedback.className = "feedback";

        answerInput.focus();
      }

      function checkAnswer() {
        if (answerInput.disabled) return;

        const rawAnswer = answerInput.value.trim();

        if (!rawAnswer) {
          feedback.textContent = "Introduce un año para continuar.";
          feedback.className = "feedback incorrect";
          answerInput.focus();
          return;
        }

        const userAnswer = Number(rawAnswer);
        const correctAnswer = levels[currentLevel].answer;

        if (userAnswer === correctAnswer) {
          feedback.textContent = "¡Correcto! Has resuelto el misterio.";
          feedback.className = "feedback correct";

          answerInput.disabled = true;
          checkBtn.disabled = true;

          advanceTimeout = setTimeout(() => {
            advanceTimeout = null;

            if (currentLevel < levels.length - 1) {
              currentLevel++;
              loadLevel();
            } else {
              gameScreen.hidden = true;
              endScreen.hidden = false;
              root.querySelector(".restart-btn").focus();
            }
          }, 1200);
        } else {
          feedback.textContent =
            "Respuesta incorrecta. Observa de nuevo las tres pistas.";
          feedback.className = "feedback incorrect";

          if (typeof answerInput.animate === "function") {
            answerInput.animate(
              [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(5px)" },
                { transform: "translateX(0)" }
              ],
              { duration: 350 }
            );
          }

          answerInput.select();
        }
      }

      function restartGame() {
        clearAdvanceTimeout();
        startGame();
      }

      startBtn.addEventListener("click", startGame);
      checkBtn.addEventListener("click", checkAnswer);
      restartBtn.addEventListener("click", restartGame);

      answerInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });
    })();
  `
},
game6: {
  title: "Serra de Tramuntana · Juego de memoria",
  instructions: "Explora Mallorca, encuentra las parejas de imágenes y completa los cinco niveles para desbloquear el desafío secreto.",

  html: String.raw`
<div class="game-game6">
  <header class="g6-topbar">
    <button type="button" class="g6-home" hidden>← Mapa</button>
    <div class="g6-brand">SERRA <span>·</span> TRAMUNTANA</div>
    <span class="g6-top-note">MALLORCA · JUEGO DE MEMORIA</span>
  </header>

  <main class="g6-screen">
    <section class="g6-map-screen">
      <div class="g6-map-heading">
        <p class="g6-eyebrow">EXPLORA · OBSERVA · DESCUBRE</p>
        <h2>Selecciona un nivel</h2>
        <p>Explora los paisajes y tesoros naturales de la Serra de Tramuntana.</p>
      </div>

      <div class="g6-photo-map" role="group" aria-label="Mapa de los niveles de la Serra de Tramuntana">
        <div class="g6-map-shade"></div>
        <div class="g6-map-title">SERRA DE TRAMUNTANA
          <small>MALLORCA · ILLES BALEARS</small>
        </div>
        <div class="g6-map-place g6-forest">BOSC · FAUNA</div>
        <div class="g6-map-place g6-coast">COSTA</div>
        <div class="g6-map-place g6-mountain">SERRA</div>
        <div class="g6-map-place g6-fields">CULTIUS</div>
        <div class="g6-map-place g6-village">POBLE</div>

        <div class="g6-marker g6-marker-1" data-level="1">
          <button type="button" class="g6-pin" aria-label="Nivel 1: Fauna">1</button>
          <span>Fauna</span>
        </div>
        <div class="g6-marker g6-marker-2" data-level="2">
          <button type="button" class="g6-pin" aria-label="Nivel 2: La costa" disabled>🔒</button>
          <span>La costa</span>
        </div>
        <div class="g6-marker g6-marker-3" data-level="3">
          <button type="button" class="g6-pin" aria-label="Nivel 3: La sierra" disabled>🔒</button>
          <span>La sierra</span>
        </div>
        <div class="g6-marker g6-marker-4" data-level="4">
          <button type="button" class="g6-pin" aria-label="Nivel 4: La flora" disabled>🔒</button>
          <span>La flora</span>
        </div>
        <div class="g6-marker g6-marker-5" data-level="5">
          <button type="button" class="g6-pin" aria-label="Nivel 5: El pueblo" disabled>🔒</button>
          <span>El pueblo</span>
        </div>

        <div class="g6-secret-marker">
          <button type="button" class="g6-pin" aria-label="Nivel secreto: El secreto de la Tramuntana" disabled>?</button>
        </div>
      </div>

      <div class="g6-map-footer">
        <div class="g6-progress-info">
          <strong class="g6-progress-text" aria-live="polite">0 / 5 niveles completados</strong>
          <div class="g6-progress-track" role="progressbar" aria-label="Progreso de la expedición" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0">
            <div class="g6-progress-bar"></div>
          </div>
        </div>
        <p>Encuentra todas las parejas para desbloquear el siguiente destino.</p>
      </div>
    </section>

    <section class="g6-game-screen" hidden>
      <div class="g6-hero">
        <div class="g6-hero-shade"></div>
        <div class="g6-hero-copy">
          <p class="g6-eyebrow g6-level-eyebrow">DESTINO 01</p>
          <h2 class="g6-level-title">La fauna de la Serra</h2>
          <p class="g6-level-description"></p>
        </div>
      </div>

      <div class="g6-stats">
        <div class="g6-stat"><span>MOVIMIENTOS</span><strong class="g6-moves">0</strong></div>
        <div class="g6-stat"><span>PAREJAS RESTANTES</span><strong class="g6-remaining">10</strong></div>
        <div class="g6-stat"><span>TIEMPO</span><strong class="g6-timer">00:00</strong></div>
      </div>

      <div class="g6-memory-board" aria-label="Tablero del juego de memoria"></div>
      <p class="g6-game-hint" role="status" aria-live="polite">Observa bien las imágenes antes de girar las cartas.</p>
    </section>

    <section class="g6-complete-screen" hidden>
      <div class="g6-complete-card">
        <div class="g6-complete-icon" aria-hidden="true">🏆</div>
        <p class="g6-eyebrow">EXPEDICIÓN FINALIZADA</p>
        <h2>¡NIVEL COMPLETADO!</h2>
        <p class="g6-complete-message"></p>
        <div class="g6-complete-stats">
          <div><span>Movimientos</span><strong class="g6-final-moves">0</strong></div>
          <div><span>Tiempo</span><strong class="g6-final-time">00:00</strong></div>
        </div>
        <p class="g6-unlock-message" aria-live="polite"></p>
        <button type="button" class="g6-return main-btn">Volver al mapa</button>
        <button type="button" class="g6-next secondary-btn" hidden>Continuar la aventura →</button>
      </div>
    </section>
  </main>

  <footer class="g6-footer">
    <span>MALLORCA · ILLES BALEARS</span>
    <span>Una aventura por la Serra de Tramuntana</span>
  </footer>
</div>
`,

  css: String.raw`
.game-game6 {
  --g6-ink: #20291f;
  --g6-green: #345340;
  --g6-cream: #f7f3e9;
  --g6-gold: #d6b775;
  box-sizing: border-box;
  width: 100%;
  color: var(--g6-ink);
  background: #f1eee5;
  font-family: "DM Sans", Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  border-radius: 8px;
}
.game-game6 *,
.game-game6 *::before,
.game-game6 *::after { box-sizing: border-box; }
.game-game6 [hidden] { display: none !important; }
.game-game6 button { font: inherit; cursor: pointer; }
.game-game6 button:focus-visible {
  outline: 3px solid #bd8f43;
  outline-offset: 3px;
}
.game-game6 .g6-topbar {
  min-height: 58px;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  background: #fffdf7;
  border-bottom: 1px solid #ded9ca;
}
.game-game6 .g6-brand {
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 12px;
}
.game-game6 .g6-brand span { color: #b88b4d; }
.game-game6 .g6-top-note,
.game-game6 .g6-eyebrow,
.game-game6 .g6-footer {
  font-size: 10px;
  letter-spacing: 1.3px;
  color: #737b6f;
}
.game-game6 .g6-home {
  padding: 7px 12px;
  border: 1px solid #d8d2c3;
  border-radius: 20px;
  background: white;
  color: var(--g6-ink);
}
.game-game6 .g6-screen { padding: 22px; }
.game-game6 .g6-map-heading { margin-bottom: 18px; }
.game-game6 .g6-map-heading h2 {
  margin: 5px 0 7px;
  font-size: clamp(24px, 3vw, 34px);
  color: #20291f;
}
.game-game6 .g6-map-heading p:last-child {
  color: #6d7568;
  font-size: 13px;
  line-height: 1.6;
}
.game-game6 .g6-eyebrow { margin: 0; }
.game-game6 .g6-photo-map {
  position: relative;
  height: clamp(350px, 45vw, 510px);
  min-height: 340px;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid #d2d0bd;
  border-radius: 9px;
  background: #627966 url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85") center 52% / cover no-repeat;
}
.game-game6 .g6-photo-map::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1500&q=80") right bottom / 48% 45% no-repeat;
  clip-path: polygon(66% 57%,100% 42%,100% 100%,53% 100%);
  opacity: .94;
}
.game-game6 .g6-map-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,#14261c77 0%,transparent 36%,#15271d77 100%);
  pointer-events: none;
}
.game-game6 .g6-map-title {
  position: absolute;
  left: 22px;
  top: 20px;
  color: white;
  font-size: clamp(13px, 2vw, 21px);
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px #0008;
}
.game-game6 .g6-map-title small {
  display: block;
  margin-top: 5px;
  font-size: 9px;
  letter-spacing: 1.5px;
  font-weight: 500;
}
.game-game6 .g6-map-place {
  position: absolute;
  color: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 7px #000;
  pointer-events: none;
}
.game-game6 .g6-forest { left: 7%; top: 56%; }
.game-game6 .g6-coast { right: 9%; bottom: 12%; }
.game-game6 .g6-mountain { left: 45%; top: 38%; }
.game-game6 .g6-fields { left: 42%; bottom: 12%; }
.game-game6 .g6-village { right: 13%; top: 48%; }
.game-game6 .g6-marker {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  text-shadow: 0 2px 6px #000;
}
.game-game6 .g6-pin {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 3px solid #fff9e8;
  border-radius: 50%;
  color: white;
  font-size: 15px;
  font-weight: 700;
  background: #365b45;
  box-shadow: 0 4px 14px #0005;
  transition: transform .2s, background .2s;
}
.game-game6 .g6-marker:not(.g6-locked) .g6-pin:hover {
  transform: scale(1.1);
  background: #b88b4d;
}
.game-game6 .g6-marker.g6-locked .g6-pin {
  background: #626c62;
  cursor: not-allowed;
  opacity: .9;
}
.game-game6 .g6-marker.g6-completed .g6-pin { background: #b88b4d; }
.game-game6 .g6-marker-1 { left: 15%; top: 49%; }
.game-game6 .g6-marker-2 { right: 18%; bottom: 19%; }
.game-game6 .g6-marker-3 { left: 48%; top: 30%; }
.game-game6 .g6-marker-4 { left: 45%; bottom: 14%; }
.game-game6 .g6-marker-5 { right: 12%; top: 43%; }
.game-game6 .g6-secret-marker {
  position: absolute;
  z-index: 5;
  bottom: 8px;
  left: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s;
}
.game-game6 .g6-secret-marker.g6-secret-unlocked {
  opacity: 1;
  pointer-events: auto;
}
.game-game6 .g6-secret-marker .g6-pin {
  width: 30px;
  height: 30px;
  font-size: 11px;
  background: #574f42;
}
.game-game6 .g6-map-footer {
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}
.game-game6 .g6-map-footer strong { font-size: 12px; }
.game-game6 .g6-map-footer > p {
  font-size: 12px;
  line-height: 1.5;
  color: #737b6f;
  text-align: right;
}
.game-game6 .g6-progress-track {
  width: 220px;
  max-width: 100%;
  height: 5px;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 8px;
  background: #dedbce;
}
.game-game6 .g6-progress-bar {
  width: 0;
  height: 100%;
  background: #527858;
  transition: width .4s;
}
.game-game6 .g6-hero {
  min-height: 205px;
  display: flex;
  align-items: end;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 24px;
  margin-bottom: 18px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-color: #4b6250;
}
.game-game6 .g6-hero-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg,#122319e8,#12231930),linear-gradient(0deg,#1223198c,transparent 70%);
}
.game-game6 .g6-hero-copy { max-width: 720px; color: white; }
.game-game6 .g6-hero-copy .g6-eyebrow { color: #e3d1a7; }
.game-game6 .g6-hero-copy h2 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(27px, 4vw, 40px);
  line-height: 1.15;
  margin: 7px 0;
  color: white;
}
.game-game6 .g6-hero-copy p:last-child {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}
.game-game6 .g6-stats {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  margin-bottom: 18px;
  border: 1px solid #e2dece;
  border-radius: 7px;
  background: #fffdf8;
}
.game-game6 .g6-stat {
  padding: 12px 5px;
  text-align: center;
  border-right: 1px solid #e9e4d8;
}
.game-game6 .g6-stat:last-child { border-right: 0; }
.game-game6 .g6-stat span,
.game-game6 .g6-complete-stats span {
  display: block;
  font-size: 9px;
  letter-spacing: .7px;
  color: #7d8375;
  margin-bottom: 7px;
}
.game-game6 .g6-stat strong { font-size: 21px; }
.game-game6 .g6-memory-board {
  display: grid;
  grid-template-columns: repeat(5,minmax(0,1fr));
  gap: 9px;
  max-width: 1080px;
  margin: auto;
}
.game-game6 .g6-memory-board.cols-6 { grid-template-columns: repeat(6,minmax(0,1fr)); }
.game-game6 .g6-memory-board.cols-7 { grid-template-columns: repeat(7,minmax(0,1fr)); }
.game-game6 .g6-memory-board.cols-8 { grid-template-columns: repeat(8,minmax(0,1fr)); }
.game-game6 .g6-memory-card {
  position: relative;
  display: block;
  min-width: 0;
  aspect-ratio: 1;
  border: 0;
  border-radius: 7px;
  padding: 0;
  background: transparent;
  perspective: 900px;
}
.game-game6 .g6-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform .45s ease;
}
.game-game6 .g6-memory-card.g6-flipped .g6-card-inner,
.game-game6 .g6-memory-card.g6-matched .g6-card-inner {
  transform: rotateY(180deg);
}
.game-game6 .g6-card-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 7px;
  border: 1px solid #d7d2c3;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.game-game6 .g6-card-back {
  background: linear-gradient(135deg,#294634e8,#526d4ee8),url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=75") center/cover;
}
.game-game6 .g6-card-back::after {
  content: "✳";
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #d4c294;
  border-radius: 50%;
  color: #f4e4b8;
  font-size: 23px;
}
.game-game6 .g6-card-front {
  transform: rotateY(180deg);
  background: #fffdf7;
  flex-direction: column;
  justify-content: flex-start;
}
.game-game6 .g6-card-front img {
  display: block;
  width: 100%;
  height: 78%;
  min-height: 0;
  object-fit: cover;
  background: #e1e0d4;
}
.game-game6 .g6-card-name {
  display: flex;
  flex: 1;
  width: 100%;
  padding: 4px 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #354a36;
  font-size: clamp(8px,.95vw,11px);
  line-height: 1.2;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.game-game6 .g6-memory-card.g6-matched {
  opacity: 0;
  transform: scale(.7);
  pointer-events: none;
  visibility: hidden;
}
.game-game6 .g6-game-hint {
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  color: #596353;
  margin: 18px 0 5px;
}
.game-game6 .g6-complete-screen {
  min-height: 390px;
  display: grid;
  place-items: center;
}
.game-game6 .g6-complete-card {
  width: min(100%,520px);
  padding: 32px 24px;
  text-align: center;
  background: #fffdf7;
  border: 1px solid #e3dece;
  border-radius: 12px;
}
.game-game6 .g6-complete-icon { font-size: 48px; }
.game-game6 .g6-complete-card h2 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 28px;
  color: #20291f;
}
.game-game6 .g6-complete-card > p:not(.g6-eyebrow) {
  color: #646d60;
  font-size: 13px;
  line-height: 1.7;
}
.game-game6 .g6-complete-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 18px 0;
}
.game-game6 .g6-complete-stats strong { font-size: 23px; }
.game-game6 .g6-unlock-message {
  color: #426346 !important;
  font-weight: 700;
}
.game-game6 .main-btn,
.game-game6 .secondary-btn {
  display: block;
  width: 100%;
  padding: 13px;
  margin-top: 10px;
  border-radius: 5px;
  font-weight: 600;
}
.game-game6 .main-btn {
  border: 1px solid #233b30;
  color: white;
  background: #233b30;
}
.game-game6 .secondary-btn {
  border: 1px solid #cfc8b6;
  color: #20291f;
  background: transparent;
}
.game-game6 .g6-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 9px;
  padding: 15px 18px;
  border-top: 1px solid #e2dece;
  background: #fffdf7;
  font-size: 9px;
}
@media (max-width: 650px) {
  .game-game6 .g6-screen { padding: 14px 10px 22px; }
  .game-game6 .g6-topbar { padding: 11px; }
  .game-game6 .g6-brand { font-size: 10px; letter-spacing: 1px; }
  .game-game6 .g6-top-note { font-size: 8px; letter-spacing: .5px; }
  .game-game6 .g6-photo-map { height: 390px; min-height: 350px; }
  .game-game6 .g6-map-title { left: 12px; top: 14px; font-size: 12px; letter-spacing: 1px; }
  .game-game6 .g6-map-place { font-size: 8px; letter-spacing: .3px; }
  .game-game6 .g6-pin { width: 34px; height: 34px; }
  .game-game6 .g6-marker { font-size: 9px; }
  .game-game6 .g6-marker-1 { left: 8%; }
  .game-game6 .g6-marker-2 { right: 12%; }
  .game-game6 .g6-marker-3 { left: 42%; }
  .game-game6 .g6-marker-4 { left: 39%; }
  .game-game6 .g6-marker-5 { right: 4%; }
  .game-game6 .g6-map-footer { align-items: flex-start; flex-direction: column; gap: 8px; }
  .game-game6 .g6-map-footer > p { text-align: left; margin: 0; }
  .game-game6 .g6-progress-track { width: min(220px,75vw); }
  .game-game6 .g6-hero { min-height: 185px; padding: 16px; }
  .game-game6 .g6-stat { padding: 10px 2px; }
  .game-game6 .g6-stat span { font-size: 7px; letter-spacing: .2px; }
  .game-game6 .g6-stat strong { font-size: 17px; }
  .game-game6 .g6-memory-board { gap: 5px; }
  .game-game6 .g6-memory-board.cols-6 { grid-template-columns: repeat(4,minmax(0,1fr)); }
  .game-game6 .g6-memory-board.cols-7,
  .game-game6 .g6-memory-board.cols-8 { grid-template-columns: repeat(5,minmax(0,1fr)); }
  .game-game6 .g6-card-name { font-size: 8px; }
  .game-game6 .g6-footer { font-size: 7px; }
}
@media (prefers-reduced-motion: reduce) {
  .game-game6 *,
  .game-game6 *::before,
  .game-game6 *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`,

  js: String.raw`
(() => {
  const root = document.querySelector(".game-game6");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const $ = selector => root.querySelector(selector);
  const $$ = selector => [...root.querySelectorAll(selector)];

  const mapScreen = $(".g6-map-screen");
  const gameScreen = $(".g6-game-screen");
  const completeScreen = $(".g6-complete-screen");
  const board = $(".g6-memory-board");
  const homeBtn = $(".g6-home");
  const secretMarker = $(".g6-secret-marker");

  const levels = [
    {
      title: "La fauna de la Serra",
      description: "Explora los bosques mediterráneos y descubre la fauna de Mallorca.",
      hero: "photo-1441974231531-c6227db76b6e",
      cols: 5,
      pairs: [
        ["Águila calzada", "eagle bird"],
        ["Buitre negro", "black vulture bird"],
        ["Cabra salvaje", "wild mountain goat"],
        ["Lagartija balear", "lizard closeup"],
        ["Ferreret", "small frog wildlife"],
        ["Gineta", "genet wild animal"],
        ["Erizo", "hedgehog animal"],
        ["Tortuga mediterránea", "tortoise wildlife"],
        ["Búho", "owl wildlife"],
        ["Murciélago", "bat wildlife"]
      ]
    },
    {
      title: "La costa de Mallorca",
      description: "Descubre las calas, los acantilados y el Mediterráneo de la Tramuntana.",
      hero: "photo-1500375592092-40eb2168fd21",
      cols: 6,
      pairs: [
        ["Cala Deià", "Mallorca Cala Deia beach"],
        ["Sa Foradada", "Sa Foradada Mallorca coast"],
        ["Cala Tuent", "Cala Tuent Mallorca"],
        ["Port de Sóller", "Port de Soller Mallorca harbor"],
        ["Sa Calobra", "Sa Calobra Mallorca beach"],
        ["Cala Banyalbufar", "Banyalbufar Mallorca coast"],
        ["Cala Estellencs", "Estellencs Mallorca coast"],
        ["Cala Sant Vicenç", "Cala Sant Vicenc Mallorca"],
        ["Cala en Basset", "Cala en Basset Mallorca"],
        ["Cap de Formentor", "Cap de Formentor cliffs"],
        ["Cala Bóquer", "Cala Boquer Mallorca"],
        ["Acantilados de la Tramuntana", "Mallorca Mediterranean cliffs"]
      ]
    },
    {
      title: "Las cumbres de la Tramuntana",
      description: "Reconoce los paisajes de piedra, los barrancos y las cumbres de Mallorca.",
      hero: "photo-1464822759023-fed622ff2c3b",
      cols: 8,
      pairs: [
        ["Puig Major", "Puig Major Mallorca mountain"],
        ["Massanella", "Massanella Mallorca mountain"],
        ["Puig Tomir", "Puig Tomir Mallorca"],
        ["Serra d'Alfàbia", "Alfabia Mallorca mountains"],
        ["Torrent de Pareis", "Torrent de Pareis gorge"],
        ["Puig de Galatzó", "Galatzo Mallorca mountain"],
        ["Coll de Sóller", "Coll de Soller mountain road"],
        ["Lluc", "Lluc Mallorca mountain landscape"],
        ["Sa Gubia", "Sa Gubia Mallorca cliffs"],
        ["Coma des Cairats", "Mallorca mountain hiking trail"],
        ["Coll de sa Batalla", "Coll de sa Batalla Mallorca"],
        ["Penyal des Migdia", "Mallorca rocky mountain peak"],
        ["Barranc de Biniaraix", "Biniaraix Mallorca stone trail"],
        ["Puig de l'Ofre", "Puig de l Ofre Mallorca"],
        ["Mirador de ses Barques", "Ses Barques Mallorca viewpoint"],
        ["Crestas de la sierra", "Mallorca Tramuntana rocky ridges"]
      ]
    },
    {
      title: "La flora mediterránea",
      description: "Entre olivares, encinares y plantas aromáticas se esconden 20 parejas.",
      hero: "photo-1472396961693-142e6e269027",
      cols: 8,
      pairs: [
        ["Encina", "holm oak tree"],
        ["Olivo", "ancient olive tree"],
        ["Pino carrasco", "Mediterranean pine tree"],
        ["Romero", "rosemary herb plant"],
        ["Lavanda", "lavender purple flowers"],
        ["Margarita", "white daisy flower"],
        ["Adelfa", "oleander pink flower"],
        ["Almendro", "almond tree blossoms"],
        ["Tomillo", "thyme herb plant"],
        ["Esparto", "Mediterranean esparto grass"],
        ["Chumbera", "prickly pear cactus fruit"],
        ["Mirto", "myrtle green leaves berries"],
        ["Ciclamen", "cyclamen pink flower"],
        ["Siempreviva", "Mediterranean everlasting flower"],
        ["Orquídea silvestre", "wild Mediterranean orchid"],
        ["Palmito", "Mediterranean dwarf palm"],
        ["Madroño", "strawberry tree red fruit"],
        ["Helecho", "fern forest plant"],
        ["Hipérico", "yellow St Johns wort flower"],
        ["Lentisco", "mastic Mediterranean shrub"]
      ]
    },
    {
      title: "Las casas de piedra",
      description: "Observa las fachadas tradicionales. Cada detalle puede marcar la diferencia.",
      hero: "photo-1510798831971-661eb04b3739",
      cols: 8,
      pairs: [
        ["Casa de piedra A", "Mallorca traditional stone house facade"],
        ["Casa de piedra B", "Mallorca rustic house wooden shutters"],
        ["Casa de piedra C", "Deia Mallorca stone village house"],
        ["Casa de piedra D", "Valldemossa stone house facade"],
        ["Casa de piedra E", "Mallorca old house terracotta roof"],
        ["Casa de piedra F", "Mallorca village stone doorway"],
        ["Casa de piedra G", "Banyalbufar traditional stone house"],
        ["Casa de piedra H", "Fornalutx stone house facade"],
        ["Casa de piedra I", "Mallorca old stone house chimney"],
        ["Casa de piedra J", "Mallorca arched stone doorway"],
        ["Casa de piedra K", "Mallorca house wrought iron balcony"],
        ["Casa de piedra L", "Mallorca narrow window stone house"],
        ["Casa de piedra M", "Mallorca beige stone village house"],
        ["Casa de piedra N", "Mallorca traditional wooden door house"],
        ["Casa de piedra O", "Mallorca old terracotta roof house"],
        ["Casa de piedra P", "Mallorca small shuttered windows house"],
        ["Casa de piedra Q", "Mallorca two storey stone house"],
        ["Casa de piedra R", "Mallorca grey stone facade house"],
        ["Casa de piedra S", "Mallorca rustic house garden"],
        ["Casa de piedra T", "Mallorca stone house roof eaves"]
      ]
    },
    {
      title: "El secreto de la Tramuntana",
      description: "Un último reto fotográfico para los auténticos exploradores de Mallorca.",
      hero: "photo-1472396961693-142e6e269027",
      cols: 6,
      pairs: [
        ["Llave antigua", "antique iron key"],
        ["Mapa antiguo", "old vintage map"],
        ["Moneda antigua", "old Mediterranean coin"],
        ["Brújula", "antique brass compass"],
        ["Vasija de barro", "traditional terracotta pottery"],
        ["Farol de montaña", "old rustic lantern"],
        ["Santuario de Lluc", "Santuari de Lluc Mallorca"],
        ["Burro mallorquín", "Mallorca donkey animal"],
        ["Antigua carbonera", "traditional charcoal kiln Mallorca"],
        ["Cesta de olivas", "olive harvest wicker basket"],
        ["Hito de piedra", "old stone trail marker"],
        ["Noche en la sierra", "Mallorca Tramuntana night landscape"]
      ]
    }
  ];

  let unlocked = 1;
  const completed = new Set();
  let currentLevel = 0;
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let matchedPairs = 0;
  let elapsed = 0;
  let clock = null;
  let mismatchTimeout = null;
  let matchTimeout = null;
  let gameToken = 0;

  function stopClock() {
    if (clock !== null) clearInterval(clock);
    clock = null;
  }

  function clearGameTimeouts() {
    if (mismatchTimeout !== null) clearTimeout(mismatchTimeout);
    if (matchTimeout !== null) clearTimeout(matchTimeout);
    mismatchTimeout = null;
    matchTimeout = null;
  }

  function formatTime(seconds) {
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
      String(seconds % 60).padStart(2, "0");
  }

  function startClock() {
    stopClock();
    elapsed = 0;
    $(".g6-timer").textContent = "00:00";
    clock = setInterval(() => {
      elapsed++;
      $(".g6-timer").textContent = formatTime(elapsed);
    }, 1000);
  }

  function updateMap() {
    $$(".g6-marker").forEach(marker => {
      const n = Number(marker.dataset.level);
      const button = marker.querySelector("button");
      const locked = n > unlocked;
      const isCompleted = completed.has(n);

      marker.classList.toggle("g6-locked", locked);
      marker.classList.toggle("g6-completed", isCompleted);
      button.disabled = locked;
      button.textContent = isCompleted ? "✓" : locked ? "🔒" : String(n);
      button.setAttribute(
        "aria-label",
        "Nivel " + n + ": " + levels[n - 1].title +
        (isCompleted ? ", completado" : locked ? ", bloqueado" : ", disponible")
      );
    });

    const secretButton = secretMarker.querySelector("button");
    const secretUnlocked = completed.size >= 5;
    secretMarker.classList.toggle("g6-secret-unlocked", secretUnlocked);
    secretButton.disabled = !secretUnlocked;
    secretButton.setAttribute(
      "aria-label",
      secretUnlocked ? "Jugar al nivel secreto" : "Nivel secreto bloqueado"
    );

    const count = Math.min(5, completed.size);
    $(".g6-progress-text").textContent = count + " / 5 niveles completados";
    $(".g6-progress-bar").style.width = (count / 5 * 100) + "%";
    $(".g6-progress-track").setAttribute("aria-valuenow", String(count));
  }

  function showMap() {
    gameToken++;
    stopClock();
    clearGameTimeouts();
    mapScreen.hidden = false;
    gameScreen.hidden = true;
    completeScreen.hidden = true;
    homeBtn.hidden = true;
    updateMap();
  }

  function photoURL(query, seed) {
    return "https://loremflickr.com/480/360/" +
      encodeURIComponent(query) + "?lock=" + seed;
  }

  function setImageFallback(img, query, seed) {
    img.src = photoURL(query, seed);
    img.onerror = () => {
      img.onerror = null;
      img.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=480&q=70";
    };
  }

  function startLevel(n) {
    if (n < 1 || n > 6 || n > unlocked) return;
    if (n === 6 && completed.size < 5) return;

    currentLevel = n;
    gameToken++;
    const token = gameToken;
    stopClock();
    clearGameTimeouts();

    const level = levels[n - 1];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;

    mapScreen.hidden = true;
    gameScreen.hidden = false;
    completeScreen.hidden = true;
    homeBtn.hidden = false;

    $(".g6-level-eyebrow").textContent =
      n === 6 ? "DESTINO SECRETO" : "DESTINO " + String(n).padStart(2, "0");
    $(".g6-level-title").textContent = level.title;
    $(".g6-level-description").textContent = level.description;
    $(".g6-hero").style.backgroundImage =
      'url("https://images.unsplash.com/' + level.hero +
      '?auto=format&fit=crop&w=1600&q=85")';

    $(".g6-moves").textContent = "0";
    $(".g6-remaining").textContent = String(level.pairs.length);
    $(".g6-game-hint").textContent =
      "Encuentra dos imágenes idénticas para eliminar la pareja.";

    board.className = "g6-memory-board cols-" + level.cols;
    board.replaceChildren();

    const cards = level.pairs.flatMap((pair, index) => [
      { id: index, name: pair[0], query: pair[1], seed: index + 1 },
      { id: index, name: pair[0], query: pair[1], seed: index + 1 }
    ]);

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach((card, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "g6-memory-card";
      button.setAttribute("aria-label", "Carta oculta " + (index + 1));
      button.setAttribute("aria-pressed", "false");

      const inner = document.createElement("div");
      inner.className = "g6-card-inner";

      const back = document.createElement("div");
      back.className = "g6-card-face g6-card-back";
      back.setAttribute("aria-hidden", "true");

      const front = document.createElement("div");
      front.className = "g6-card-face g6-card-front";

      const img = document.createElement("img");
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      setImageFallback(img, card.query, card.seed);

      const label = document.createElement("span");
      label.className = "g6-card-name";
      label.textContent = card.name;

      front.append(img, label);
      inner.append(back, front);
      button.append(inner);
      button.dataset.id = String(card.id);
      button.dataset.name = card.name;
      button.addEventListener("click", () => flipCard(button, token));
      board.append(button);
    });

    startClock();
  }

  function flipCard(card, token) {
    if (
      token !== gameToken ||
      lockBoard ||
      card.classList.contains("g6-flipped") ||
      card.classList.contains("g6-matched")
    ) return;

    card.classList.add("g6-flipped");
    card.setAttribute("aria-label", card.dataset.name);
    card.setAttribute("aria-pressed", "true");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;
    moves++;
    $(".g6-moves").textContent = String(moves);

    if (firstCard.dataset.id === secondCard.dataset.id) {
      lockBoard = true;
      const a = firstCard;
      const b = secondCard;

      matchTimeout = setTimeout(() => {
        matchTimeout = null;
        if (token !== gameToken) return;

        a.classList.add("g6-matched");
        b.classList.add("g6-matched");
        a.disabled = true;
        b.disabled = true;
        a.setAttribute("aria-label", "Pareja encontrada: " + a.dataset.name);
        b.setAttribute("aria-label", "Pareja encontrada: " + b.dataset.name);

        matchedPairs++;
        $(".g6-remaining").textContent = String(
          levels[currentLevel - 1].pairs.length - matchedPairs
        );

        firstCard = null;
        secondCard = null;
        lockBoard = false;
        $(".g6-game-hint").textContent = "¡Pareja encontrada! Sigue buscando.";

        if (matchedPairs === levels[currentLevel - 1].pairs.length) {
          finishLevel(token);
        }
      }, 350);
    } else {
      lockBoard = true;
      $(".g6-game-hint").textContent =
        "No coinciden. Fíjate en los detalles e inténtalo de nuevo.";

      const a = firstCard;
      const b = secondCard;

      mismatchTimeout = setTimeout(() => {
        mismatchTimeout = null;
        if (token !== gameToken) return;

        a.classList.remove("g6-flipped");
        b.classList.remove("g6-flipped");
        a.setAttribute("aria-label", "Carta oculta");
        b.setAttribute("aria-label", "Carta oculta");
        a.setAttribute("aria-pressed", "false");
        b.setAttribute("aria-pressed", "false");

        firstCard = null;
        secondCard = null;
        lockBoard = false;
        $(".g6-game-hint").textContent =
          "Sigue buscando las parejas idénticas.";
      }, 900);
    }
  }

  function finishLevel(token) {
    if (token !== gameToken) return;

    stopClock();
    completed.add(currentLevel);

    if (currentLevel < 5) {
      unlocked = Math.max(unlocked, currentLevel + 1);
    } else if (currentLevel === 5) {
      unlocked = 6;
    }

    updateMap();
    gameScreen.hidden = true;
    completeScreen.hidden = false;
    homeBtn.hidden = true;

    $(".g6-final-moves").textContent = String(moves);
    $(".g6-final-time").textContent = formatTime(elapsed);

    if (currentLevel === 6) {
      $(".g6-complete-card h2").textContent = "¡EXPEDICIÓN COMPLETADA!";
      $(".g6-complete-message").textContent =
        "¡Has superado el desafío secreto de la Tramuntana!";
      $(".g6-unlock-message").textContent =
        "Has descubierto todos los secretos de Mallorca.";
      $(".g6-next").hidden = true;
    } else {
      $(".g6-complete-card h2").textContent = "¡NIVEL COMPLETADO!";
      $(".g6-complete-message").textContent =
        "Has completado «" + levels[currentLevel - 1].title +
        "» en " + moves + " movimientos y " + formatTime(elapsed) + ".";

      $(".g6-unlock-message").textContent = currentLevel === 5
        ? "¡Has desbloqueado el nivel secreto!"
        : "¡Nivel " + (currentLevel + 1) + " desbloqueado!";

      $(".g6-next").hidden = false;
      $(".g6-next").textContent = currentLevel === 5
        ? "Descubrir el secreto →"
        : "Siguiente nivel →";
    }
  }

  $$(".g6-marker").forEach(marker => {
    marker.querySelector("button").addEventListener("click", () => {
      startLevel(Number(marker.dataset.level));
    });
  });

  secretMarker.querySelector("button").addEventListener("click", () => {
    if (completed.size >= 5) startLevel(6);
  });

  homeBtn.addEventListener("click", showMap);
  $(".g6-return").addEventListener("click", showMap);

  $(".g6-next").addEventListener("click", () => {
    if (currentLevel === 5) startLevel(6);
    else if (currentLevel < 5) startLevel(currentLevel + 1);
  });

  updateMap();
})();
`
},

game7: {
  title: "🏛️ La Torre de Hércules",
  instructions: "Completa las tres oraciones sobre la Torre de Hércules colocando las palabras en sus huecos. Comprueba cada oración antes de continuar.",

  html: String.raw`
    <div class="game-game7">
      <section class="g7-play">
        <header class="g7-header">
          <div>
            <span class="g7-eyebrow">MINIJUEGO · A CORUÑA</span>
            <h2>La Torre de <span>Hércules</span></h2>
          </div>
          <span class="g7-progress-badge" id="g7-progress">
            Oración 1 de 3
          </span>
        </header>

        <div class="g7-intro-game">
          <h3 id="g7-current-title">Un faro romano</h3>
          <p>
            Arrastra cada palabra hasta su hueco o pulsa una palabra y después
            el hueco correspondiente. Comprueba tus respuestas antes de avanzar.
          </p>
        </div>

        <section class="g7-sentences" id="g7-sentences"
          aria-label="Oración que debes completar"></section>

        <section class="g7-word-bank" aria-labelledby="g7-bank-title">
          <div class="g7-bank-header">
            <h3 id="g7-bank-title">Banco de palabras</h3>
            <span id="g7-word-count"></span>
          </div>
          <p class="g7-bank-instructions">
            Utiliza las palabras disponibles para completar esta oración.
          </p>
          <div class="g7-word-list" id="g7-word-bank"></div>
        </section>

        <div class="g7-game-footer">
          <p class="g7-feedback" id="g7-feedback"
            role="status" aria-live="polite">
            Arrastra las palabras o selecciónalas para empezar.
          </p>
          <div class="g7-actions">
            <button type="button" class="g7-button g7-secondary"
              id="g7-reset">
              Reiniciar
            </button>
            <button type="button" class="g7-button g7-primary"
              id="g7-check">
              Comprobar oración →
            </button>
            <button type="button" class="g7-button g7-primary"
              id="g7-next" hidden>
              Siguiente oración →
            </button>
          </div>
        </div>

        <section class="g7-result" id="g7-result" hidden
          aria-live="polite">
          <h3 id="g7-result-title">¡Reto completado!</h3>
          <p id="g7-result-message"></p>
          <button type="button" class="g7-button g7-primary"
            id="g7-play-again">
            Volver a jugar
          </button>
        </section>
      </section>
    </div>
  `,

  css: String.raw`
    .game-game7 {
      width: 100%;
      padding: 8px 5px 16px;
      color: #26343c;
      font-family: "Trebuchet MS", Arial, sans-serif;
      text-align: left;
      overflow-wrap: anywhere;
    }

    .game-game7 *,
    .game-game7 *::before,
    .game-game7 *::after {
      box-sizing: border-box;
    }

    .game-game7 [hidden] {
      display: none !important;
    }

    .game-game7 button {
      font: inherit;
    }

    .game-game7 button:focus-visible {
      outline: 3px solid #267eaa;
      outline-offset: 3px;
    }

    .game-game7 .g7-header,
    .game-game7 .g7-bank-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .game-game7 .g7-header {
      padding-bottom: 18px;
      border-bottom: 1px solid #dce3e6;
    }

    .game-game7 .g7-eyebrow {
      color: #399acb;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }

    .game-game7 .g7-header h2 {
      margin: 8px 0 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(22px, 4vw, 31px);
      font-weight: 500;
    }

    .game-game7 .g7-header h2 span {
      color: #399acb;
    }

    .game-game7 .g7-progress-badge {
      padding: 9px 12px;
      border: 1px solid #d7e5eb;
      border-radius: 30px;
      background: #fff;
      color: #347da0;
      font-size: 11px;
      white-space: nowrap;
    }

    .game-game7 .g7-intro-game {
      padding: 21px 0 15px;
    }

    .game-game7 .g7-intro-game h3,
    .game-game7 .g7-bank-header h3 {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 23px;
      font-weight: 500;
    }

    .game-game7 .g7-intro-game p,
    .game-game7 .g7-bank-instructions {
      color: #657680;
      font-size: 13px;
      line-height: 1.7;
    }

    .game-game7 .g7-intro-game p {
      margin: 9px 0 0;
    }

    .game-game7 .g7-sentences {
      display: grid;
      gap: 12px;
    }

    .game-game7 .g7-sentence-card {
      min-width: 0;
      padding: 18px;
      border: 1px solid #dfe6e8;
      border-radius: 15px;
      background: #fff;
      box-shadow: 0 4px 16px #415a6908;
    }

    .game-game7 .g7-sentence-top {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 13px;
    }

    .game-game7 .g7-sentence-number {
      color: #399acb;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .game-game7 .g7-sentence-hint {
      color: #84939b;
      font-size: 11px;
    }

    .game-game7 .g7-sentence-text {
      margin: 0;
      font-size: 14px;
      line-height: 2.6;
    }

    .game-game7 .g7-slot {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 36px;
      margin: 2px 3px;
      padding: 6px 9px;
      border: 1px dashed #64bce7;
      border-radius: 8px;
      background: #e7f5fc;
      color: #347da0;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      vertical-align: middle;
      overflow-wrap: anywhere;
      white-space: normal;
    }

    .game-game7 .g7-slot:hover,
    .game-game7 .g7-slot.drag-over {
      border-color: #399acb;
      background: #d6eefa;
    }

    .game-game7 .g7-slot.filled {
      border: 1px solid #8bd0f1;
      background: #c7ebfb;
      color: #174e68;
    }

    .game-game7 .g7-slot.correct {
      border: 1px solid #85ad88;
      background: #dce8d8;
      color: #1c3020;
    }

    .game-game7 .g7-slot.incorrect {
      border: 1px solid #cb8f80;
      background: #f3d8d1;
      color: #45231e;
    }

    .game-game7 .g7-word-bank {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #dfe6e8;
      border-radius: 15px;
      background: #fff;
    }

    .game-game7 .g7-bank-header {
      align-items: flex-start;
    }

    .game-game7 .g7-bank-header h3 {
      font-size: 22px;
    }

    .game-game7 #g7-word-count {
      color: #657680;
      font-size: 11px;
      text-align: right;
    }

    .game-game7 .g7-bank-instructions {
      margin: 9px 0 15px;
    }

    .game-game7 .g7-word-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .game-game7 .g7-word-chip {
      padding: 9px 12px;
      border: 1px solid #8bd0f1;
      border-radius: 10px;
      background: #c7ebfb;
      color: #174e68;
      font-size: 12px;
      font-weight: 600;
      cursor: grab;
    }

    .game-game7 .g7-word-chip:hover {
      background: #b5e3f8;
    }

    .game-game7 .g7-word-chip.selected,
    .game-game7 .g7-word-chip[aria-pressed="true"] {
      outline: 2px solid #399acb;
      outline-offset: 2px;
    }

    .game-game7 .g7-word-chip:active {
      cursor: grabbing;
    }

    .game-game7 .g7-game-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-top: 17px;
    }

    .game-game7 .g7-feedback {
      margin: 0;
      color: #526772;
      font-size: 12px;
      line-height: 1.7;
    }

    .game-game7 .g7-actions {
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      gap: 8px;
    }

    .game-game7 .g7-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 42px;
      padding: 11px 15px;
      border: 1px solid transparent;
      border-radius: 11px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.4;
      cursor: pointer;
      transition: transform .15s, background .15s;
    }

    .game-game7 .g7-button:hover {
      transform: translateY(-1px);
    }

    .game-game7 .g7-primary {
      border-color: #8bd0f1;
      background: #c7ebfb;
      color: #174e68;
    }

    .game-game7 .g7-primary:hover {
      background: #b5e3f8;
    }

    .game-game7 .g7-secondary {
      border-color: #c9d8df;
      background: #fff;
      color: #347da0;
    }

    .game-game7 .g7-result {
      margin-top: 20px;
      padding: 22px;
      border: 1px solid #b9dff0;
      border-radius: 15px;
      background: #f0f9fd;
      text-align: center;
    }

    .game-game7 .g7-result h3 {
      margin-top: 0;
      color: #286d90;
      font-family: Georgia, "Times New Roman", serif;
    }

    .game-game7 .g7-result p {
      color: #465e6b;
      line-height: 1.7;
    }

    @media (max-width: 520px) {
      .game-game7 .g7-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .game-game7 .g7-game-footer {
        align-items: stretch;
        flex-direction: column;
      }

      .game-game7 .g7-actions {
        width: 100%;
      }

      .game-game7 .g7-actions .g7-button {
        flex: 1;
      }

      .game-game7 .g7-sentence-card {
        padding: 14px;
      }

      .game-game7 .g7-word-bank {
        padding: 15px;
      }

      .game-game7 .g7-slot {
        min-width: 72px;
        padding: 5px 6px;
        font-size: 10px;
      }

      .game-game7 .g7-bank-header {
        flex-direction: column;
      }

      .game-game7 #g7-word-count {
        text-align: left;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .game-game7 *,
      .game-game7 *::before,
      .game-game7 *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.querySelector(".game-game7");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const puzzle = [
        {
          title: "Un faro romano",
          parts: [
            "La Torre de Hércules sirve como ",
            " y emblema de la entrada al ",
            " de La Coruña (noroeste) desde el ",
            " de nuestra era, cuando los ",
            " lo construyeron con el nombre de ",
            "."
          ],
          answers: [
            "faro",
            "puerto",
            "siglo I",
            "romanos",
            "Farum Brigantium"
          ]
        },
        {
          title: "La estructura de la torre",
          parts: [
            "Este faro monumental de ",
            " está edificado sobre una roca de ",
            " de altura. La torre consta de ",
            " que se van estrechando hacia la cúspide y el primero de ellos corresponde a la estructura del ",
            ". Adyacente a su base, se halla un pequeño edificio romano de forma ",
            "."
          ],
          answers: [
            "55 metros",
            "57 metros",
            "tres niveles",
            "faro romano",
            "rectangular"
          ]
        },
        {
          title: "Excavaciones y antigüedad",
          parts: [
            "Los ",
            " del faro se pusieron al descubierto durante una serie de ",
            " llevadas a cabo en el ",
            ". Desde la ",
            " hasta el ",
            ", numerosas leyendas han ido jalonando la historia de la Torre de Hércules. Es el único faro de la ",
            " que ha conservado en cierta medida su integridad estructural y que sigue desempeñando la misma función."
          ],
          answers: [
            "cimientos romanos",
            "excavaciones arqueológicas",
            "decenio de 1990",
            "Edad Media",
            "siglo XIX",
            "Antigüedad grecorromana"
          ]
        }
      ];

      const normalize = text =>
        text.trim().toLocaleLowerCase("es-ES");

      const titleElement = root.querySelector("#g7-current-title");
      const progressElement = root.querySelector("#g7-progress");
      const sentencesElement = root.querySelector("#g7-sentences");
      const bankElement = root.querySelector("#g7-word-bank");
      const wordCountElement = root.querySelector("#g7-word-count");
      const feedbackElement = root.querySelector("#g7-feedback");
      const checkButton = root.querySelector("#g7-check");
      const nextButton = root.querySelector("#g7-next");
      const resetButton = root.querySelector("#g7-reset");
      const resultElement = root.querySelector("#g7-result");
      const resultTitle = root.querySelector("#g7-result-title");
      const resultMessage = root.querySelector("#g7-result-message");

      let current = 0;
      let placements = {};
      let selectedWord = null;
      let draggedWord = null;
      let checked = false;
      let scores = [0, 0, 0];

      function getWords() {
        return puzzle[current].answers.map((text, index) => ({
          id: "word-" + current + "-" + index,
          text
        }));
      }

      function getWord(id) {
        return getWords().find(word => word.id === id);
      }

      function slotId(index) {
        return "slot-" + current + "-" + index;
      }

      function showFeedback(message) {
        feedbackElement.textContent = message;
      }

      function renderSentence() {
        const sentence = puzzle[current];
        const card = document.createElement("article");
        card.className = "g7-sentence-card";

        const top = document.createElement("div");
        top.className = "g7-sentence-top";

        const number = document.createElement("span");
        number.className = "g7-sentence-number";
        number.textContent =
          "ORACIÓN " + String(current + 1).padStart(2, "0");

        const hint = document.createElement("span");
        hint.className = "g7-sentence-hint";
        hint.textContent = sentence.answers.length + " huecos";

        top.append(number, hint);

        const paragraph = document.createElement("p");
        paragraph.className = "g7-sentence-text";

        sentence.parts.forEach((part, index) => {
          paragraph.appendChild(document.createTextNode(part));

          if (index >= sentence.answers.length) return;

          const id = slotId(index);
          const wordId = placements[id];
          const word = wordId ? getWord(wordId) : null;
          const expected = sentence.answers[index];

          const slot = document.createElement("button");
          slot.type = "button";
          slot.className = "g7-slot";
          slot.dataset.slotId = id;

          if (word) {
            slot.textContent = word.text;
            slot.classList.add("filled");
            slot.setAttribute(
              "aria-label",
              "Hueco " + (index + 1) + ": " + word.text +
              ". Pulsa para retirar la palabra."
            );

            if (checked) {
              const correct = normalize(word.text) === normalize(expected);
              slot.classList.add(correct ? "correct" : "incorrect");
              slot.setAttribute(
                "aria-label",
                "Hueco " + (index + 1) + ": " + word.text +
                (correct ? ". Correcto." : ". Incorrecto.")
              );
            }
          } else {
            slot.textContent = "Hueco " + (index + 1);
            slot.setAttribute("aria-label", "Hueco vacío " + (index + 1));
          }

          slot.addEventListener("click", () => {
            if (selectedWord) {
              placeWord(selectedWord, id);
            } else if (placements[id]) {
              delete placements[id];
              checked = false;
              nextButton.hidden = true;
              checkButton.hidden = false;
              showFeedback("Palabra retirada. Puedes colocarla de nuevo.");
              renderGame();
            } else {
              showFeedback("Selecciona una palabra y después un hueco.");
            }
          });

          slot.addEventListener("dragover", event => {
            event.preventDefault();
            slot.classList.add("drag-over");
          });

          slot.addEventListener("dragleave", () => {
            slot.classList.remove("drag-over");
          });

          slot.addEventListener("drop", event => {
            event.preventDefault();
            slot.classList.remove("drag-over");

            const id = event.dataTransfer.getData("text/plain")
              || draggedWord;

            if (id) placeWord(id, slot.dataset.slotId);
          });

          paragraph.appendChild(slot);
        });

        card.append(top, paragraph);
        sentencesElement.replaceChildren(card);
      }

      function renderBank() {
        bankElement.replaceChildren();

        const words = getWords();
        const placed = new Set(Object.values(placements));
        const available = words.filter(word => !placed.has(word.id));

        wordCountElement.textContent =
          available.length + (available.length === 1
            ? " palabra disponible"
            : " palabras disponibles");

        if (available.length === 0) {
          const message = document.createElement("p");
          message.className = "g7-bank-instructions";
          message.textContent =
            "Has colocado todas las palabras. ¡Comprueba la oración!";
          bankElement.appendChild(message);
          return;
        }

        available.forEach(word => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "g7-word-chip";
          chip.textContent = word.text;
          chip.draggable = true;
          chip.setAttribute(
            "aria-pressed",
            selectedWord === word.id ? "true" : "false"
          );

          if (selectedWord === word.id) {
            chip.classList.add("selected");
          }

          chip.addEventListener("click", () => {
            selectedWord = selectedWord === word.id ? null : word.id;
            showFeedback(
              selectedWord
                ? word.text + " seleccionada. Pulsa el hueco correspondiente."
                : "Selección cancelada."
            );
            renderGame();
          });

          chip.addEventListener("dragstart", event => {
            draggedWord = word.id;
            selectedWord = null;
            event.dataTransfer.setData("text/plain", word.id);
            event.dataTransfer.effectAllowed = "move";
          });

          chip.addEventListener("dragend", () => {
            draggedWord = null;
            root.querySelectorAll(".g7-slot.drag-over").forEach(slot => {
              slot.classList.remove("drag-over");
            });
          });

          bankElement.appendChild(chip);
        });
      }

      function placeWord(wordId, destination) {
        if (!getWord(wordId) || checked) return;

        // Impide utilizar la misma palabra en dos huecos.
        Object.keys(placements).forEach(id => {
          if (placements[id] === wordId) delete placements[id];
        });

        placements[destination] = wordId;
        selectedWord = null;
        checked = false;
        nextButton.hidden = true;
        checkButton.hidden = false;

        showFeedback("Palabra colocada. Continúa completando la oración.");
        renderGame();
      }

      function countCorrect() {
        let correct = 0;

        puzzle[current].answers.forEach((answer, index) => {
          const word = getWord(placements[slotId(index)]);

          if (word && normalize(word.text) === normalize(answer)) {
            correct++;
          }
        });

        return correct;
      }

      function renderGame() {
        titleElement.textContent = puzzle[current].title;
        progressElement.textContent =
          "Oración " + (current + 1) + " de " + puzzle.length;

        renderSentence();
        renderBank();
      }

      checkButton.addEventListener("click", () => {
        const total = puzzle[current].answers.length;
        const filled = Object.keys(placements).length;
        const missing = total - filled;

        if (missing > 0) {
          showFeedback(
            "Te " + (missing === 1 ? "falta " : "faltan ") +
            missing + (missing === 1 ? " hueco por completar." : " huecos por completar.")
          );
          return;
        }

        checked = true;
        const correct = countCorrect();
        scores[current] = correct;

        renderGame();

        if (correct === total) {
          showFeedback(
            "¡Perfecto! Has acertado las " + total +
            " palabras de esta oración."
          );
        } else {
          showFeedback(
            "Has acertado " + correct + " de " + total +
            ". Las respuestas incorrectas aparecen en rosa. " +
            "Puedes corregirlas y volver a comprobar."
          );
        }

        checkButton.hidden = true;
        nextButton.hidden = false;
        nextButton.textContent = current === puzzle.length - 1
          ? "Ver resultado final →"
          : "Siguiente oración →";
      });

      nextButton.addEventListener("click", () => {
        if (!checked) return;

        if (current < puzzle.length - 1) {
          current++;
          placements = {};
          selectedWord = null;
          draggedWord = null;
          checked = false;

          checkButton.hidden = false;
          checkButton.textContent = "Comprobar oración →";
          nextButton.hidden = true;

          showFeedback("Completa los huecos de esta nueva oración.");
          renderGame();
          return;
        }

        const totalCorrect = scores.reduce((sum, score) => sum + score, 0);
        const totalQuestions = puzzle.reduce(
          (sum, sentence) => sum + sentence.answers.length, 0
        );

        resultTitle.textContent = totalCorrect === totalQuestions
          ? "🏆 ¡Reto superado!"
          : "🏛️ ¡Has terminado el recorrido!";

        resultMessage.textContent =
          "Has conseguido " + totalCorrect + " de " + totalQuestions +
          " respuestas correctas (" +
          Math.round(totalCorrect / totalQuestions * 100) +
          "%). Puedes volver a jugar para mejorar tu resultado.";

        resultElement.hidden = false;
        checkButton.hidden = true;
        nextButton.hidden = true;
        resetButton.hidden = true;
      });

      function resetGame() {
        current = 0;
        placements = {};
        selectedWord = null;
        draggedWord = null;
        checked = false;
        scores = [0, 0, 0];

        resultElement.hidden = true;
        checkButton.hidden = false;
        resetButton.hidden = false;
        checkButton.textContent = "Comprobar oración →";
        nextButton.hidden = true;

        showFeedback("Arrastra las palabras o selecciónalas para empezar.");
        renderGame();
      }

      resetButton.addEventListener("click", resetGame);
      root.querySelector("#g7-play-again").addEventListener("click", resetGame);

      renderGame();
    })();
  `
},

    
game8: {
  title: "MadriuMente",
  instructions: "¡Pon a prueba tus conocimientos sobre el Valle del Madriu-Perafita-Claror! Responde a tres preguntas de dificultad progresiva: fácil, medio y difícil. Cada respuesta correcta suma un punto.",
  html: String.raw`
<div class="game">
  <header class="hero">
    <div class="mountain" aria-hidden="true">🏔️</div>
    <p class="eyebrow">TRIVIAL · ANDORRA</p>
    <h1>Madriu<span>Mente</span></h1>
    <p class="subtitle">
      ¿Cuánto sabes sobre el Valle del Madriu-Perafita-Claror?
    </p>

    <div class="progress-info">
      <span id="progress-text">Pregunta 1 de 3</span>
      <span id="score-text">Puntos: 0/3</span>
    </div>

    <div
      class="progress-bar"
      role="progressbar"
      aria-label="Progreso del trivial"
      aria-valuemin="0"
      aria-valuemax="3"
      aria-valuenow="1"
      id="progress-bar"
    >
      <div id="progress-fill"></div>
    </div>
  </header>

  <main id="quiz">
    <section class="question-card easy" id="question-card">
      <div class="question-top">
        <span class="level" id="level">NIVEL FÁCIL</span>
        <span class="question-number" id="number">01 / 03</span>
      </div>

      <h2 id="question" tabindex="-1">
        ¿Dónde está situado el Valle del Madriu-Perafita-Claror?
      </h2>

      <p class="instruction" id="answer-instruction">
        Elige una respuesta:
      </p>

      <div
        id="answers"
        class="answers"
        role="group"
        aria-labelledby="answer-instruction"
      ></div>

      <p id="feedback" class="feedback" aria-live="polite"></p>

      <button id="next-btn" class="next-btn" type="button" disabled>
        Comprobar respuesta
      </button>
    </section>
  </main>

  <section id="results" class="results hidden" aria-labelledby="result-title">
    <div class="result-icon" aria-hidden="true">🏆</div>
    <p class="eyebrow">FIN DEL TRIVIAL</p>
    <h2 id="result-title" tabindex="-1">¡Buen trabajo!</h2>
    <p id="result-message"></p>

    <div class="final-score">
      <span>Tu puntuación</span>
      <strong id="final-score">0/3</strong>
    </div>

    <button id="restart-btn" class="next-btn" type="button">
      ↻ Jugar de nuevo
    </button>
  </section>

  <footer>
    <span aria-hidden="true">🌿</span>
    Descubre, aprende y conquista el Madriu.
  </footer>
</div>
`,
  css: String.raw`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

:root {
  --background: #f3f6f0;
  --dark: #183b2b;
  --green: #21834b;
  --red: #dc3545;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  min-height: 100%;
  padding: 24px 14px;
  font-family: 'Poppins', sans-serif;
  background:
    radial-gradient(circle at top left, #dcebd8, transparent 38%),
    var(--background);
  color: var(--dark);
}

button {
  font: inherit;
}

.game {
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 10px 12px 25px;
}

.mountain {
  font-size: 48px;
  margin-bottom: 5px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #588067;
  margin: 8px 0;
}

h1 {
  font-size: clamp(34px, 8vw, 48px);
  margin: 0;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.2;
}

h1 span {
  color: #4b9665;
}

.subtitle {
  color: #64746a;
  font-size: 14px;
  line-height: 1.6;
  max-width: 430px;
  margin: 12px auto 22px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.progress-bar {
  height: 7px;
  width: 100%;
  border-radius: 20px;
  background: #dce5dc;
  overflow: hidden;
}

#progress-fill {
  height: 100%;
  width: 33.333%;
  border-radius: 20px;
  background: #4b9665;
  transition: width 0.35s ease;
}

.question-card,
.results {
  background: var(--white);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 12px 35px #24452b12;
  border-top: 7px solid #155b36;
  animation: appear 0.35s ease;
}

.question-card.easy {
  border-top-color: #155b36;
}

.question-card.medium {
  border-top-color: #ef941c;
}

.question-card.hard {
  border-top-color: #d93445;
}

.question-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.level {
  display: inline-block;
  border-radius: 8px;
  padding: 7px 11px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  background: #e2f0e5;
  color: #155b36;
}

.medium .level {
  background: #fff0d9;
  color: #a65c00;
}

.hard .level {
  background: #ffe3e6;
  color: #b51e30;
}

.question-number {
  font-size: 12px;
  color: #657268;
  font-weight: 600;
}

h2 {
  font-size: clamp(20px, 5vw, 25px);
  line-height: 1.45;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
}

.instruction {
  font-size: 13px;
  color: #657268;
  margin: 20px 0 12px;
}

.answers {
  display: grid;
  gap: 11px;
}

.answer {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  text-align: left;
  background: #f8faf7;
  border: 2px solid #e7ece5;
  border-radius: 13px;
  padding: 14px;
  font-family: inherit;
  font-size: 14px;
  color: #294434;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s,
    transform 0.2s;
}

.answer:hover:not(:disabled) {
  border-color: #83b792;
  transform: translateY(-2px);
}

.answer:focus-visible,
.next-btn:focus-visible {
  outline: 3px solid #2868bd;
  outline-offset: 3px;
}

.answer-text {
  flex: 1;
}

.answer-icon {
  font-size: 20px;
  font-weight: 800;
  flex-shrink: 0;
}

.answer.correct {
  background: #e7f7ec;
  border-color: #28a65a;
  color: #176c37;
}

.answer.wrong {
  background: #fff0f0;
  border-color: #e14b55;
  color: #b62332;
}

.answer:disabled {
  cursor: default;
}

.feedback {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
  min-height: 22px;
  margin: 16px 0 10px;
}

.feedback.success {
  color: #176c37;
}

.feedback.error {
  color: #b51e30;
}

.next-btn {
  width: 100%;
  border: none;
  border-radius: 13px;
  background: #183b2b;
  color: white;
  padding: 15px 18px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.next-btn:hover:not(:disabled) {
  background: #28583c;
  transform: translateY(-2px);
}

.next-btn:disabled {
  background: #b9c5ba;
  color: #263c2b;
  cursor: not-allowed;
}

.results {
  text-align: center;
}

.hidden {
  display: none !important;
}

.result-icon {
  font-size: 54px;
  margin-bottom: 12px;
}

.results h2 {
  font-size: 28px;
}

#result-message {
  color: #58695d;
  font-size: 14px;
  line-height: 1.7;
}

.final-score {
  background: #f0f6ef;
  padding: 20px;
  border-radius: 16px;
  margin: 22px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.final-score span {
  font-size: 12px;
  color: #58695d;
}

.final-score strong {
  font-size: 38px;
  color: #21834b;
}

footer {
  text-align: center;
  font-size: 11px;
  color: #596b5e;
  padding: 24px 5px 5px;
  line-height: 1.6;
}

footer span {
  margin-right: 5px;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 420px) {
  body {
    padding: 18px 10px;
  }

  .question-card,
  .results {
    padding: 21px 17px;
    border-radius: 19px;
  }

  .answer {
    padding: 12px 10px;
    font-size: 13px;
  }

  .progress-info {
    font-size: 11px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (forced-colors: active) {
  .answer,
  .next-btn,
  .question-card,
  .results {
    border: 1px solid ButtonText;
  }

  .answer:focus-visible,
  .next-btn:focus-visible {
    outline: 2px solid Highlight;
  }
}
`,
  js: String.raw`
const preguntas = [
  {
    nivel: "FÁCIL",
    clase: "easy",
    texto: "1. ¿Dónde está situado el Valle del Madriu-Perafita-Claror?",
    respuestas: ["a. Galicia", "b. Andorra", "c. Murcia"],
    correcta: 1
  },
  {
    nivel: "MEDIO",
    clase: "medium",
    texto: "2. ¿En qué año fue incluido en la lista de Patrimonio de la Humanidad?",
    respuestas: ["a. 2006", "b. 2001", "c. 2004"],
    correcta: 2
  },
  {
    nivel: "DIFÍCIL",
    clase: "hard",
    texto: "3. ¿Cuál es la fragua más antigua?",
    respuestas: [
      "a. Fraga de Madriu",
      "b. Fraga Rossell",
      "c. Fraga del Valle"
    ],
    correcta: 0
  }
];

let actual = 0;
let puntos = 0;
let respondida = false;

const pregunta = document.getElementById("question");
const nivel = document.getElementById("level");
const numero = document.getElementById("number");
const opciones = document.getElementById("answers");
const tarjeta = document.getElementById("question-card");
const mensaje = document.getElementById("feedback");
const boton = document.getElementById("next-btn");
const barraProgreso = document.getElementById("progress-bar");

function mostrarPregunta() {
  respondida = false;
  const p = preguntas[actual];

  tarjeta.className = "question-card " + p.clase;
  pregunta.textContent = p.texto;
  nivel.textContent = "NIVEL " + p.nivel;
  numero.textContent = String(actual + 1).padStart(2, "0") + " / 03";

  document.getElementById("progress-text").textContent =
    "Pregunta " + (actual + 1) + " de " + preguntas.length;

  document.getElementById("score-text").textContent =
    "Puntos: " + puntos + "/" + preguntas.length;

  document.getElementById("progress-fill").style.width =
    ((actual + 1) / preguntas.length * 100) + "%";

  barraProgreso.setAttribute("aria-valuenow", actual + 1);

  opciones.innerHTML = "";
  mensaje.textContent = "";
  mensaje.className = "feedback";
  boton.disabled = true;
  boton.textContent = "Comprueba tu respuesta";

  p.respuestas.forEach((respuesta, i) => {
    const opcion = document.createElement("button");
    opcion.className = "answer";
    opcion.type = "button";
    opcion.setAttribute("aria-label", "Respuesta " + respuesta);

    const texto = document.createElement("span");
    texto.className = "answer-text";
    texto.textContent = respuesta;

    const icono = document.createElement("span");
    icono.className = "answer-icon";
    icono.setAttribute("aria-hidden", "true");

    opcion.append(texto, icono);
    opcion.addEventListener("click", () => comprobar(i));
    opciones.appendChild(opcion);
  });
}

function comprobar(seleccionada) {
  if (respondida) return;
  respondida = true;

  const p = preguntas[actual];
  const botones = opciones.querySelectorAll(".answer");

  botones.forEach((opcion, i) => {
    opcion.disabled = true;
    const icono = opcion.querySelector(".answer-icon");

    if (i === p.correcta) {
      opcion.classList.add("correct");
      icono.textContent = "✓";
    } else if (i === seleccionada) {
      opcion.classList.add("wrong");
      icono.textContent = "✗";
    }
  });

  if (seleccionada === p.correcta) {
    puntos++;
    mensaje.textContent = "¡Correcto! 🎉";
    mensaje.className = "feedback success";
  } else {
    mensaje.textContent =
      "¡Incorrecto! La respuesta correcta es " +
      p.respuestas[p.correcta] + ".";
    mensaje.className = "feedback error";
  }

  document.getElementById("score-text").textContent =
    "Puntos: " + puntos + "/" + preguntas.length;

  boton.disabled = false;
  boton.textContent =
    actual === preguntas.length - 1
      ? "Ver resultado 🏆"
      : "Siguiente pregunta →";
}

boton.addEventListener("click", () => {
  if (!respondida) return;

  if (actual < preguntas.length - 1) {
    actual++;
    mostrarPregunta();
    pregunta.focus();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("final-score").textContent =
      puntos + "/" + preguntas.length;

    document.getElementById("result-title").textContent =
      puntos === 3 ? "¡Perfecto! 🏆" :
      puntos === 2 ? "¡Muy bien! 🌿" :
      puntos === 1 ? "¡Buen comienzo! 💚" :
      "¡A seguir explorando! 🏔️";

    document.getElementById("result-message").textContent =
      "Has conseguido " + puntos +
      " de 3 puntos. ¡Gracias por jugar a MadriuMente!";

    document.getElementById("result-title").focus();
  }
});

document.getElementById("restart-btn").addEventListener("click", () => {
  actual = 0;
  puntos = 0;
  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  mostrarPregunta();
  pregunta.focus();
});

mostrarPregunta();
`
},

game9: {
  title: "Wordle Canario",
  instructions: "Adivina la palabra de 6 letras en 6 intentos. Si descubres JULIAN, desbloquearás una sorpresa. Si escribes CASINO, accederás a la tragaperras.",
  html: String.raw`
    <div id="game9-root" tabindex="0" aria-label="Juego Wordle Canario">
      <h1 class="g9-titulo">WORDLE CANARIO</h1>
      <p class="g9-instrucciones">Adivina la palabra de 6 letras en 6 intentos.</p>

      <div id="g9-tablero"
           role="grid"
           aria-label="Tablero de seis intentos y seis letras"></div>

      <p id="g9-mensaje" role="status" aria-live="polite"></p>
      <div id="g9-teclado" aria-label="Teclado del juego"></div>
      <button type="button" id="g9-reiniciar">Nueva partida</button>

      <div class="g9-pantalla" id="g9-pantalla-jackpot"
           role="dialog" aria-modal="true" aria-labelledby="g9-jackpot-titulo">
        <div class="g9-contenido">
          <div class="g9-jackpot">JACKPOT</div>
          <h2 id="g9-jackpot-titulo">🎉 ¡HAS ENCONTRADO A JULIAN! 🎉</h2>
          <button type="button" class="g9-accion" id="g9-volver-julian">
            Volver al juego
          </button>
        </div>
      </div>

      <div class="g9-pantalla" id="g9-pantalla-casino"
           role="dialog" aria-modal="true" aria-labelledby="g9-casino-titulo">
        <div class="g9-contenido">
          <div class="g9-jackpot">🎰 ¡777! 🎰</div>
          <h2 id="g9-casino-titulo">¡A JUGAR A LA TRAGAPERRAS!</h2>
          <p>¡Prueba tu suerte y consigue tres símbolos iguales!</p>

          <div id="g9-tragaperras">
            <div id="g9-rodillos" aria-label="Resultado de los rodillos">
              <div class="g9-rodillo" id="g9-r1">🍒</div>
              <div class="g9-rodillo" id="g9-r2">🔔</div>
              <div class="g9-rodillo" id="g9-r3">🍋</div>
            </div>

            <button type="button" id="g9-tirar">🎰 GIRAR</button>
            <p id="g9-resultado" role="status" aria-live="polite">¡Mucha suerte!</p>

            <div id="g9-estadisticas">
              Tiradas restantes: <b id="g9-tiradas">10</b><br>
              Puntos: <b id="g9-puntos">0</b>
            </div>
          </div>

          <p class="g9-pequeno">
            Tienes 10 tiradas por partida. Los puntos son solo para jugar.
          </p>

          <button type="button" class="g9-accion" id="g9-otra-partida">
            🔄 Otra partida
          </button>
          <button type="button" class="g9-accion" id="g9-volver-wordle">
            Volver al Wordle
          </button>
        </div>
      </div>
    </div>
  `,

  css: String.raw`
    #game9-root {
      position: relative;
      isolation: isolate;
      box-sizing: border-box;
      width: 100%;
      min-height: 440px;
      padding: 16px 10px;
      overflow: hidden;
      border-radius: 12px;
      color: #fff;
      text-align: center;
      font-family: Arial, sans-serif;
      background:
        linear-gradient(#0007, #000b),
        url("https://alzolainmobiliaria.com/wp-content/uploads/2024/05/Risco-Caido-y-las-Montanas-Sagradas-1.png")
        center / cover no-repeat;
    }

    #game9-root *,
    #game9-root *::before,
    #game9-root *::after {
      box-sizing: border-box;
    }

    #game9-root button {
      font: inherit;
      cursor: pointer;
    }

    #game9-root button:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }

    #game9-root .g9-titulo {
      margin: 8px 0 12px;
      font-size: clamp(24px, 5vw, 32px);
      text-shadow: 0 2px 6px #000;
    }

    #game9-root .g9-instrucciones {
      margin: 10px auto;
      max-width: 420px;
    }

    #game9-root #g9-tablero {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 48px));
      gap: 5px;
      justify-content: center;
      margin: 18px auto;
    }

    #game9-root .g9-celda {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: 2px solid #ffffff99;
      background: #2229;
      font-size: 24px;
      font-weight: bold;
    }

    #game9-root .g9-correcta {
      background: #398b45;
      border-color: #398b45;
    }

    #game9-root .g9-cercana {
      background: #c9a52a;
      border-color: #c9a52a;
    }

    #game9-root .g9-fallida {
      background: #555;
      border-color: #555;
    }

    #game9-root #g9-mensaje {
      min-height: 24px;
      margin: 10px 0;
      font-weight: bold;
    }

    #game9-root #g9-teclado {
      width: min(440px, 100%);
      margin: 12px auto;
      padding: 0 4px;
    }

    #game9-root .g9-fila-teclas {
      display: flex;
      justify-content: center;
      gap: 4px;
      margin: 5px 0;
    }

    #game9-root .g9-tecla {
      flex: 1;
      min-width: 0;
      max-width: 42px;
      padding: 12px 0;
      border: 0;
      border-radius: 5px;
      background: #ddd;
      color: #111;
      font-size: 14px;
      font-weight: bold;
    }

    #game9-root .g9-tecla.g9-grande {
      max-width: 76px;
      padding-inline: 5px;
      font-size: 11px;
    }

    #game9-root #g9-reiniciar,
    #game9-root .g9-accion {
      margin: 8px 4px;
      padding: 11px 16px;
      border: 0;
      border-radius: 8px;
      background: #f4ca38;
      color: #171717;
      font-weight: bold;
    }

    #game9-root .g9-pantalla {
      display: none;
      position: absolute;
      inset: 0;
      z-index: 5;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      padding: 16px 10px;
      background: #090b0df5;
    }

    #game9-root .g9-pantalla.g9-visible {
      display: flex;
    }

    #game9-root .g9-contenido {
      width: min(460px, 100%);
      margin: auto;
    }

    #game9-root .g9-jackpot {
      color: #ffdf38;
      font-size: clamp(38px, 10vw, 72px);
      font-weight: 1000;
      text-shadow: 0 0 20px #ff7b00;
    }

    #game9-root #g9-tragaperras {
      max-width: 390px;
      margin: 18px auto;
      padding: 18px 10px;
      border: 5px solid #ffdc53;
      border-radius: 22px;
      background: linear-gradient(145deg, #a51024, #4d0610);
      box-shadow: 0 0 25px #ffbf33aa;
    }

    #game9-root #g9-rodillos {
      display: flex;
      justify-content: center;
      gap: 6px;
    }

    #game9-root .g9-rodillo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85px;
      height: 90px;
      border: 4px solid #ffc82e;
      border-radius: 12px;
      background: #fff9e9;
      color: #171717;
      font-size: 44px;
      box-shadow: inset 0 0 10px #888;
    }

    #game9-root #g9-tirar {
      width: 100%;
      margin-top: 15px;
      padding: 14px;
      border: 0;
      border-radius: 10px;
      background: #ffe044;
      color: #241100;
      font-size: 20px;
      font-weight: 900;
    }

    #game9-root #g9-tirar:disabled {
      opacity: .45;
      cursor: not-allowed;
    }

    #game9-root #g9-resultado {
      min-height: 28px;
      margin: 12px 0;
      font-weight: bold;
    }

    #game9-root #g9-estadisticas {
      font-size: 16px;
      line-height: 1.8;
    }

    #game9-root .g9-pequeno {
      color: #ddd;
      font-size: 14px;
    }

    @media (max-width: 380px) {
      #game9-root #g9-tablero {
        grid-template-columns: repeat(6, minmax(0, 42px));
        gap: 4px;
      }

      #game9-root .g9-celda {
        width: 42px;
        height: 42px;
        font-size: 21px;
      }

      #game9-root .g9-rodillo {
        width: 75px;
        height: 82px;
        font-size: 38px;
      }

      #game9-root .g9-tecla {
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #game9-root *,
      #game9-root *::before,
      #game9-root *::after {
        scroll-behavior: auto !important;
        animation: none !important;
        transition: none !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.getElementById("game9-root");
      if (!root || root.dataset.iniciado === "true") return;
      root.dataset.iniciado = "true";

      const $ = (id) => root.querySelector("#g9-" + id);

      const palabrasNormales = [
        "TEJEDA", "GALDAR", "AGAETE", "PIEDRA", "CASINO"
      ];
      const simbolos = ["🍒", "🍋", "🔔", "🍇", "⭐", "7️⃣"];

      let secreto = "";
      let fila = 0;
      let columna = 0;
      let terminado = false;
      let letras = [];
      let colores = [];
      let teclas = {};
      let tiradasRestantes = 10;
      let puntuacion = 0;
      let tragaperrasBloqueada = false;
      let temporizador = null;

      const tablero = $("tablero");
      const teclado = $("teclado");
      const mensaje = $("mensaje");

      function elegirPalabra() {
        // 1 % de posibilidades de que la palabra sea JULIAN.
        if (Math.random() < 0.01) return "JULIAN";
        return palabrasNormales[
          Math.floor(Math.random() * palabrasNormales.length)
        ];
      }

      function crearTablero() {
        tablero.innerHTML = "";
        letras = Array.from({ length: 6 }, () => Array(6).fill(""));
        colores = Array.from({ length: 6 }, () => Array(6).fill(""));
        fila = 0;
        columna = 0;
        terminado = false;

        for (let f = 0; f < 6; f++) {
          for (let c = 0; c < 6; c++) {
            const celda = document.createElement("div");
            celda.className = "g9-celda";
            celda.id = "g9-c" + f + c;
            celda.setAttribute("role", "gridcell");
            celda.setAttribute("aria-label",
              "Intento " + (f + 1) + ", letra " + (c + 1));
            tablero.appendChild(celda);
          }
        }
      }

      function crearTeclado() {
        teclado.innerHTML = "";
        teclas = {};

        const filas = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

        filas.forEach((cadena, indice) => {
          const div = document.createElement("div");
          div.className = "g9-fila-teclas";

          if (indice === 2) {
            div.appendChild(crearTecla("⌫", "g9-grande", borrarLetra));
          }

          for (const letra of cadena) {
            const tecla = crearTecla(
              letra, "", () => ponerLetra(letra)
            );
            teclas[letra] = tecla;
            div.appendChild(tecla);
          }

          if (indice === 2) {
            div.appendChild(crearTecla(
              "ENTER", "g9-grande", enviarPalabra
            ));
          }

          teclado.appendChild(div);
        });
      }

      function crearTecla(texto, clase, accion) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "g9-tecla " + clase;
        boton.textContent = texto;
        boton.setAttribute("aria-label",
          texto === "⌫" ? "Borrar última letra" :
          texto === "ENTER" ? "Comprobar palabra" : texto
        );
        boton.addEventListener("click", accion);
        return boton;
      }

      function actualizarCelda(f, c) {
        const celda = $("c" + f + c);
        celda.textContent = letras[f][c];

        celda.classList.remove(
          "g9-correcta", "g9-cercana", "g9-fallida"
        );

        if (colores[f][c]) {
          celda.classList.add("g9-" + colores[f][c]);
        }
      }

      function ponerLetra(letra) {
        if (terminado || columna >= 6) return;

        letras[fila][columna] = letra;
        actualizarCelda(fila, columna);
        columna++;
        mensaje.textContent = "";
      }

      function borrarLetra() {
        if (terminado || columna === 0) return;

        columna--;
        letras[fila][columna] = "";
        actualizarCelda(fila, columna);
        mensaje.textContent = "";
      }

      function enviarPalabra() {
        if (terminado) return;

        if (columna < 6) {
          mensaje.textContent = "Escribe las 6 letras primero.";
          return;
        }

        const intento = letras[fila].join("");

        // CASINO activa inmediatamente la tragaperras.
        if (intento === "CASINO") {
          terminado = true;
          $("pantalla-casino").classList.add("g9-visible");
          reiniciarTragaperras();
          $("tirar").focus();
          return;
        }

        const disponibles = secreto.split("");
        const estados = Array(6).fill("fallida");

        // Primero se marcan las letras en la posición correcta.
        for (let i = 0; i < 6; i++) {
          if (intento[i] === secreto[i]) {
            estados[i] = "correcta";
            disponibles[i] = null;
          }
        }

        // Después, las letras que están en otra posición.
        for (let i = 0; i < 6; i++) {
          if (estados[i] === "correcta") continue;

          const pos = disponibles.indexOf(intento[i]);
          if (pos !== -1) {
            estados[i] = "cercana";
            disponibles[pos] = null;
          }
        }

        for (let i = 0; i < 6; i++) {
          colores[fila][i] = estados[i];
          actualizarCelda(fila, i);

          const tecla = teclas[intento[i]];
          if (!tecla) continue;

          if (estados[i] === "correcta") {
            tecla.style.background = "#398b45";
          } else if (
            estados[i] === "cercana" &&
            tecla.dataset.estado !== "correcta"
          ) {
            tecla.style.background = "#c9a52a";
          } else if (
            estados[i] === "fallida" &&
            !tecla.dataset.estado
          ) {
            tecla.style.background = "#555";
          }

          if (estados[i] === "correcta" ||
              estados[i] === "cercana" ||
              estados[i] === "fallida") {
            const prioridad = {
              fallida: 1,
              cercana: 2,
              correcta: 3
            };

            const anterior = tecla.dataset.estado || "";
            if (!anterior ||
                prioridad[estados[i]] > prioridad[anterior]) {
              tecla.dataset.estado = estados[i];
            }
          }

          tecla.style.color = "white";
        }

        if (intento === secreto) {
          terminado = true;

          if (secreto === "JULIAN") {
            $("pantalla-jackpot").classList.add("g9-visible");
            $("volver-julian").focus();
          } else {
            mensaje.textContent = "¡Correcto! 🎉";
          }
          return;
        }

        fila++;
        columna = 0;

        if (fila >= 6) {
          terminado = true;
          mensaje.textContent =
            "Se acabaron los intentos. La palabra era " + secreto + ".";
        } else {
          mensaje.textContent = "Inténtalo de nuevo.";
        }
      }

      function nuevaPartida() {
        detenerAnimacion();
        root.querySelectorAll(".g9-pantalla").forEach((pantalla) => {
          pantalla.classList.remove("g9-visible");
        });

        secreto = elegirPalabra();
        crearTablero();
        crearTeclado();
        mensaje.textContent = "";
      }

      function reiniciarTragaperras() {
        detenerAnimacion();
        tiradasRestantes = 10;
        puntuacion = 0;
        tragaperrasBloqueada = false;

        $("tiradas").textContent = tiradasRestantes;
        $("puntos").textContent = puntuacion;
        $("resultado").textContent = "¡Mucha suerte!";
        $("tirar").disabled = false;
        $("r1").textContent = "🍒";
        $("r2").textContent = "🔔";
        $("r3").textContent = "🍋";
      }

      function detenerAnimacion() {
        if (temporizador !== null) {
          clearInterval(temporizador);
          temporizador = null;
        }
        tragaperrasBloqueada = false;
      }

      function tirada() {
        if (tiradasRestantes <= 0 || tragaperrasBloqueada) return;

        tragaperrasBloqueada = true;
        $("tirar").disabled = true;
        $("resultado").textContent = "Girando...";

        const rodillos = [$("r1"), $("r2"), $("r3")];
        let vueltas = 0;

        temporizador = setInterval(() => {
          rodillos.forEach((rodillo) => {
            rodillo.textContent =
              simbolos[Math.floor(Math.random() * simbolos.length)];
          });

          vueltas++;

          if (vueltas >= 10) {
            clearInterval(temporizador);
            temporizador = null;
            finalizarTirada(rodillos);
          }
        }, 100);
      }

      function finalizarTirada(rodillos) {
        const resultado = rodillos.map(() =>
          simbolos[Math.floor(Math.random() * simbolos.length)]
        );

        rodillos.forEach((rodillo, indice) => {
          rodillo.textContent = resultado[indice];
        });

        tiradasRestantes--;

        let premio = 0;
        let texto = "¡Prueba otra vez!";

        if (resultado.every((simbolo) => simbolo === "7️⃣")) {
          premio = 1000;
          texto = "🎉 ¡¡¡JACKPOT!!! ¡TRES SIETES!";
        } else if (
          resultado[0] === resultado[1] &&
          resultado[1] === resultado[2]
        ) {
          premio = 200;
          texto = "🏆 ¡TRES IGUALES! +200 puntos";
        } else if (
          resultado[0] === resultado[1] ||
          resultado[1] === resultado[2] ||
          resultado[0] === resultado[2]
        ) {
          premio = 25;
          texto = "✨ ¡Dos símbolos iguales! +25 puntos";
        }

        puntuacion += premio;
        $("tiradas").textContent = tiradasRestantes;
        $("puntos").textContent = puntuacion;
        $("resultado").textContent = texto;

        tragaperrasBloqueada = false;
        $("tirar").disabled = tiradasRestantes === 0;

        if (tiradasRestantes === 0) {
          $("resultado").textContent +=
            " Fin de la partida. Puntuación: " + puntuacion + ".";
        }
      }

      $("reiniciar").addEventListener("click", nuevaPartida);
      $("tirar").addEventListener("click", tirada);
      $("otra-partida").addEventListener("click", reiniciarTragaperras);

      $("volver-julian").addEventListener("click", nuevaPartida);
      $("volver-wordle").addEventListener("click", nuevaPartida);

      // El teclado físico solo funciona mientras el juego tiene el foco.
      root.addEventListener("keydown", (evento) => {
        if (
          $("pantalla-casino").classList.contains("g9-visible") ||
          $("pantalla-jackpot").classList.contains("g9-visible")
        ) return;

        if (evento.key === "Enter") {
          evento.preventDefault();
          enviarPalabra();
        } else if (evento.key === "Backspace") {
          evento.preventDefault();
          borrarLetra();
        } else if (/^[a-zA-ZñÑ]$/.test(evento.key)) {
          ponerLetra(evento.key.toUpperCase());
        }
      });

      // Permite usar el teclado físico tras hacer clic en el tablero.
      root.addEventListener("pointerdown", () => {
        root.focus({ preventScroll: true });
      });

      nuevaPartida();
    })();
  `
},

game10: {
  title: "El reto del Puente Bizkaia",
  instructions: "¡Descifra las palabras del Puente Colgante! Ordena las letras, utiliza las pistas y consigue puntos antes de que se agote el tiempo.",

  html: String.raw`
    <div id="game10-root" class="g10-game" tabindex="-1">
      <div class="g10-bridge-icon" aria-hidden="true">🌉</div>
      <h1 class="g10-title">El reto del Puente Bizkaia</h1>
      <p class="g10-subtitle">¡Descifra las palabras del Puente Colgante!</p>

      <div class="g10-stats" aria-label="Estadísticas de la partida">
        <div class="g10-stat">
          <small>⭐ PUNTOS</small>
          <strong id="g10-score">0</strong>
        </div>
        <div class="g10-stat">
          <small>🏆 RONDA</small>
          <strong id="g10-round">1</strong>
        </div>
        <div class="g10-stat">
          <small>⏱️ TIEMPO</small>
          <strong id="g10-time">30</strong>
        </div>
      </div>

      <div class="g10-difficulty" role="group" aria-label="Nivel de dificultad">
        <button type="button" class="g10-level active" data-level="facil" aria-pressed="true">
          Fácil
        </button>
        <button type="button" class="g10-level" data-level="medio" aria-pressed="false">
          Medio
        </button>
        <button type="button" class="g10-level" data-level="dificil" aria-pressed="false">
          Difícil
        </button>
      </div>

      <div class="g10-info">
        <span aria-hidden="true">📍</span>
        <span>Explora la historia y los secretos del puente</span>
      </div>

      <p class="g10-label">ORDENA LAS LETRAS</p>
      <div class="g10-letters" id="g10-letters"
           aria-label="Letras desordenadas"></div>

      <p class="g10-label" id="g10-category">Categoría: Puente Bizkaia</p>

      <div id="g10-hint" class="g10-hint">
        ¡Demuestra que eres un experto del puente!
      </div>

      <label class="g10-sr-only" for="g10-answer">Escribe la palabra correcta</label>
      <input
        id="g10-answer"
        type="text"
        placeholder="Escribe la palabra..."
        autocomplete="off"
        autocapitalize="characters"
        maxlength="30"
        aria-describedby="g10-category g10-hint g10-message"
      >

      <div class="g10-actions">
        <button type="button" class="g10-btn g10-check" id="g10-check">
          ✓ Comprobar
        </button>
        <button type="button" class="g10-btn g10-hint-btn" id="g10-hintButton">
          💡 Pista (-5 pts)
        </button>
      </div>

      <button type="button" class="g10-btn g10-next" id="g10-next" hidden>
        Siguiente palabra ➜
      </button>

      <div id="g10-message" class="g10-message" role="status" aria-live="polite"></div>

      <div class="g10-progress" role="progressbar"
           aria-label="Tiempo restante"
           aria-valuemin="0" aria-valuemax="30" aria-valuenow="30"
           id="g10-progress">
        <div id="g10-bar"></div>
      </div>

      <button type="button" class="g10-restart" id="g10-restart">
        ↻ Reiniciar partida
      </button>

      <p class="g10-footer">🌊 Portugalete · Getxo · Ría de Bilbao</p>
    </div>
  `,

  css: String.raw`
    #game10-root {
      box-sizing: border-box;
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
      padding: 26px;
      border: 1px solid #ffffff35;
      border-radius: 22px;
      background: linear-gradient(135deg, #092c46, #126783, #55b9bd);
      color: #fff;
      font-family: "Trebuchet MS", Arial, sans-serif;
      text-align: center;
      box-shadow: 0 15px 40px #00172255;
      line-height: 1.45;
    }

    #game10-root *,
    #game10-root *::before,
    #game10-root *::after {
      box-sizing: border-box;
    }

    #game10-root button,
    #game10-root input {
      font-family: inherit;
    }

    #game10-root button {
      cursor: pointer;
      transition: transform .15s, filter .15s;
    }

    #game10-root button:hover:not(:disabled) {
      transform: translateY(-2px);
      filter: brightness(1.1);
    }

    #game10-root button:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    #game10-root button:focus-visible,
    #game10-root input:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }

    #game10-root .g10-bridge-icon {
      margin-bottom: 8px;
      font-size: 44px;
    }

    #game10-root .g10-title {
      margin: 0;
      color: #ffe58a;
      font-size: clamp(23px, 5vw, 30px);
      line-height: 1.25;
    }

    #game10-root .g10-subtitle {
      margin: 12px 0 24px;
      color: #c4e8f0;
    }

    #game10-root .g10-stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 22px;
    }

    #game10-root .g10-stat {
      min-width: 0;
      padding: 12px 5px;
      border: 1px solid #ffffff20;
      border-radius: 14px;
      background: #ffffff10;
    }

    #game10-root .g10-stat small {
      display: block;
      margin-bottom: 5px;
      color: #b8dce9;
      font-size: 11px;
    }

    #game10-root .g10-stat strong {
      color: #ffe58a;
      font-size: 22px;
    }

    #game10-root .g10-difficulty {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    #game10-root .g10-level {
      padding: 9px 16px;
      border: 1px solid #ffffff35;
      border-radius: 20px;
      background: #ffffff0c;
      color: #fff;
    }

    #game10-root .g10-level.active {
      border-color: #55d1dc;
      background: #168ca4;
    }

    #game10-root .g10-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 22px;
      padding: 12px;
      border-radius: 12px;
      background: #ffffff0b;
      color: #c4e8f0;
      font-size: 13px;
    }

    #game10-root .g10-label {
      color: #c4e8f0;
      font-size: 12px;
      letter-spacing: 1px;
    }

    #game10-root .g10-letters {
      display: flex;
      min-height: 72px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 7px;
      margin: 15px 0;
    }

    #game10-root .g10-letter {
      display: grid;
      width: 36px;
      height: 46px;
      flex: 0 1 36px;
      place-items: center;
      border: 1px solid #a1edf0;
      border-radius: 9px;
      background: linear-gradient(145deg, #39bdc9, #11728e);
      box-shadow: 0 4px 0 #08495f;
      color: #fff;
      font-size: 19px;
      font-weight: bold;
    }

    #game10-root .g10-hint {
      min-height: 24px;
      margin: 10px 0 16px;
      color: #ffe58a;
      font-size: 14px;
    }

    #game10-root #g10-answer {
      display: block;
      width: 100%;
      min-width: 0;
      padding: 14px;
      border: 2px solid #ffffff30;
      border-radius: 13px;
      background: #ffffff0c;
      color: #fff;
      text-align: center;
      font-size: 18px;
      letter-spacing: 1px;
    }

    #game10-root #g10-answer:focus {
      border-color: #55d1dc;
    }

    #game10-root #g10-answer::placeholder {
      color: #b7cbd3;
      font-size: 14px;
      letter-spacing: normal;
    }

    #game10-root .g10-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 12px;
    }

    #game10-root .g10-btn {
      min-width: 0;
      padding: 12px 8px;
      border: 0;
      border-radius: 12px;
      font-size: 13px;
      font-weight: bold;
    }

    #game10-root .g10-check {
      background: #ffe58a;
      color: #12334a;
    }

    #game10-root .g10-hint-btn {
      border: 1px solid #ffffff30;
      background: #17475c;
      color: #fff;
    }

    #game10-root .g10-next {
      width: 100%;
      margin-top: 10px;
      background: #57e0bd;
      color: #093d43;
    }

    #game10-root [hidden] {
      display: none !important;
    }

    #game10-root .g10-message {
      min-height: 28px;
      margin-top: 15px;
      font-weight: bold;
    }

    #game10-root .g10-progress {
      height: 6px;
      margin-top: 24px;
      overflow: hidden;
      border-radius: 10px;
      background: #ffffff20;
    }

    #game10-root #g10-bar {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #57e0bd, #ffe58a);
      transition: width .25s linear;
    }

    #game10-root .g10-restart {
      margin-top: 12px;
      border: 0;
      background: transparent;
      color: #c4e8f0;
      text-decoration: underline;
    }

    #game10-root .g10-footer {
      margin-top: 20px;
      color: #b2d7e0;
      font-size: 12px;
    }

    #game10-root .g10-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 400px) {
      #game10-root {
        padding: 20px 13px;
        border-radius: 15px;
      }

      #game10-root .g10-stat small {
        font-size: 10px;
      }

      #game10-root .g10-stat strong {
        font-size: 19px;
      }

      #game10-root .g10-letter {
        width: 29px;
        height: 40px;
        flex-basis: 29px;
        font-size: 16px;
      }

      #game10-root .g10-actions {
        grid-template-columns: 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #game10-root *,
      #game10-root *::before,
      #game10-root *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.getElementById("game10-root");
      if (!root || root.dataset.iniciado === "true") return;
      root.dataset.iniciado = "true";

      const $ = (id) => root.querySelector("#g10-" + id);

      const words = {
        facil: [
          {
            word: "PUENTE",
            category: "Construcción",
            hint: "Permite cruzar de un lado a otro."
          },
          {
            word: "RIA",
            category: "Geografía",
            hint: "Entrada del mar en la desembocadura de un río."
          },
          {
            word: "GETXO",
            category: "Localidades",
            hint: "Municipio situado en uno de los extremos del puente."
          },
          {
            word: "TORRE",
            category: "Estructura",
            hint: "Gran estructura vertical que sostiene los cables."
          },
          {
            word: "AGUA",
            category: "Naturaleza",
            hint: "Está debajo del puente."
          },
          {
            word: "BARCO",
            category: "Transporte",
            hint: "Navega por la ría."
          },
          {
            word: "VISTA",
            category: "Turismo",
            hint: "Lo que disfrutas al mirar desde lo alto."
          },
          {
            word: "RIELES",
            category: "Estructura",
            hint: "Guían el movimiento del mecanismo móvil."
          }
        ],

        medio: [
          {
            word: "PORTUGALETE",
            category: "Localidades",
            hint: "Municipio vizcaíno situado en el otro extremo del puente."
          },
          {
            word: "GONDOLA",
            category: "Transporte",
            hint: "Plataforma que transporta personas y vehículos."
          },
          {
            word: "CABLES",
            category: "Estructura",
            hint: "Elementos que sujetan y sostienen el conjunto."
          },
          {
            word: "BIZKAIA",
            category: "Territorio",
            hint: "Territorio histórico vasco donde está el puente."
          },
          {
            word: "ALTURA",
            category: "Arquitectura",
            hint: "Distancia vertical que impresiona a los visitantes."
          },
          {
            word: "TURISMO",
            category: "Visitas",
            hint: "Actividad de quienes visitan el puente."
          },
          {
            word: "HIERRO",
            category: "Materiales",
            hint: "Metal asociado a la estructura histórica."
          },
          {
            word: "MECANISMO",
            category: "Ingeniería",
            hint: "Conjunto de piezas que permite mover la plataforma."
          }
        ],

        dificil: [
          {
            word: "TRANSPORTADOR",
            category: "Ingeniería",
            hint: "Describe la función del puente que desplaza pasajeros entre ambas orillas."
          },
          {
            word: "ARQUITECTURA",
            category: "Construcción",
            hint: "Arte y técnica de diseñar edificios y estructuras."
          },
          {
            word: "PATRIMONIO",
            category: "Historia",
            hint: "Bien cultural reconocido por su valor histórico."
          },
          {
            word: "PORTUGALETE",
            category: "Localidades",
            hint: "Ciudad de Bizkaia junto a la que se encuentra el puente."
          },
          {
            word: "TRANSBORDADOR",
            category: "Ingeniería",
            hint: "Tipo de puente móvil que transporta personas de una orilla a otra."
          },
          {
            word: "SUSPENDIDO",
            category: "Estructura",
            hint: "Describe algo que se mantiene colgado."
          },
          {
            word: "GUGGENHEIM",
            category: "Turismo",
            hint: "Famoso museo de Bilbao, en el mismo territorio histórico."
          },
          {
            word: "INDUSTRIAL",
            category: "Historia",
            hint: "Adjetivo relacionado con el desarrollo económico que impulsó la ría."
          }
        ]
      };

      let level = "facil";
      let deck = [];
      let current = null;
      let score = 0;
      let round = 1;
      let time = 30;
      let timer = null;
      let hintUsed = false;
      let locked = false;
      let seen = new Set();

      function normalize(text) {
        return text.trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase();
      }

      function shuffleWord(word) {
        const letters = Array.from(word);

        // Mezcla las letras y evita mostrar la palabra ya ordenada
        // siempre que exista una combinación distinta.
        for (let attempt = 0; attempt < 12; attempt++) {
          for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
          }

          if (letters.join("") !== word) return letters;
        }

        const first = letters.shift();
        letters.push(first);

        if (letters.join("") === word && letters.length > 1) {
          [letters[0], letters[1]] = [letters[1], letters[0]];
        }

        return letters;
      }

      function updateStats() {
        $("score").textContent = score;
        $("round").textContent = round;
        $("time").textContent = time;
        $("bar").style.width = (time / 30 * 100) + "%";
        $("progress").setAttribute("aria-valuenow", time);
      }

      function stopTimer() {
        if (timer !== null) {
          clearInterval(timer);
          timer = null;
        }
      }

      function startTimer() {
        stopTimer();
        time = 30;
        updateStats();

        timer = setInterval(() => {
          if (time > 0) time--;
          updateStats();

          if (time <= 0) {
            stopTimer();
            locked = true;

            $("message").textContent = "⏰ ¡Se acabó el tiempo!";
            $("message").style.color = "#ff8293";
            $("hint").textContent = "La palabra era: " + current.word;
            $("next").hidden = false;
            $("check").disabled = true;
            $("hintButton").disabled = true;
            $("answer").disabled = true;
            $("next").focus();
          }
        }, 1000);
      }

      function newGame() {
        stopTimer();
        score = 0;
        round = 1;
        seen = new Set();
        deck = words[level].slice();
        nextWord();
      }

      function nextWord() {
        stopTimer();

        if (seen.size >= deck.length) {
          seen = new Set();
        }

        const available = deck.filter((word) => !seen.has(word.word));
        current = available[Math.floor(Math.random() * available.length)];
        seen.add(current.word);

        hintUsed = false;
        locked = false;

        const lettersContainer = $("letters");
        lettersContainer.replaceChildren();

        shuffleWord(current.word).forEach((letter, index) => {
          const tile = document.createElement("span");
          tile.className = "g10-letter";
          tile.textContent = letter;
          tile.setAttribute("aria-label", "Letra " + (index + 1));
          lettersContainer.appendChild(tile);
        });

        $("category").textContent = "Categoría: " + current.category;
        $("hint").textContent = "¡Descubre el secreto del puente!";
        $("answer").value = "";
        $("answer").disabled = false;
        $("check").disabled = false;
        $("hintButton").disabled = false;
        $("next").hidden = true;
        $("message").textContent = "";
        $("message").style.color = "#57e0bd";

        updateStats();
        startTimer();
        $("answer").focus();
      }

      function checkAnswer() {
        if (locked) return;

        const answer = normalize($("answer").value);

        if (!answer) {
          $("message").textContent = "✍️ ¡Escribe una palabra primero!";
          $("message").style.color = "#ffe58a";
          return;
        }

        if (answer === normalize(current.word)) {
          locked = true;
          stopTimer();

          const points = hintUsed ? 5 : 10;
          score += points;

          $("message").textContent = "🎉 ¡Correcto! +" + points + " puntos";
          $("message").style.color = "#57e0bd";
          $("hint").textContent = "¡Muy bien! La palabra era " + current.word;
          $("next").hidden = false;
          $("check").disabled = true;
          $("hintButton").disabled = true;
          $("answer").disabled = true;

          updateStats();
          $("next").focus();
        } else {
          $("message").textContent = "❌ No es correcto. ¡Inténtalo otra vez!";
          $("message").style.color = "#ff8293";

          score = Math.max(0, score - 1);
          updateStats();
        }
      }

      function showHint() {
        if (locked || hintUsed) return;

        hintUsed = true;
        score = Math.max(0, score - 5);
        $("hint").textContent = "💡 " + current.hint;
        $("hintButton").disabled = true;

        updateStats();
      }

      $("check").addEventListener("click", checkAnswer);
      $("hintButton").addEventListener("click", showHint);

      $("answer").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();

          if (!$("next").hidden) {
            round++;
            nextWord();
          } else {
            checkAnswer();
          }
        }
      });

      $("next").addEventListener("click", () => {
        round++;
        nextWord();
      });

      $("restart").addEventListener("click", newGame);

      root.querySelectorAll(".g10-level").forEach((button) => {
        button.addEventListener("click", () => {
          level = button.dataset.level;

          root.querySelectorAll(".g10-level").forEach((other) => {
            const active = other === button;
            other.classList.toggle("active", active);
            other.setAttribute("aria-pressed", String(active));
          });

          newGame();
        });
      });

      newGame();
    })();
  `
},
game11: {
    title: "RompeMudéjares",
    instructions: "Reconstruye la belleza del arte mudéjar aragonés. ¡Coloca las 16 piezas en su posición correcta! Arrastra una pieza sobre otra para intercambiarlas. Cada pista cuesta 7 puntos y coloca al menos 3 piezas correctamente.",

    html: String.raw`
        <div id="game11-root" class="g11-shell">
            <header class="g11-header">
                <p class="g11-eyebrow">ARQUITECTURA · ARAGÓN</p>
                <h2 class="g11-title">RompeMudéjares</h2>
                <p class="g11-subtitle">
                    Reconstruye la belleza del arte mudéjar aragonés.
                    ¡Coloca las 16 piezas en su posición correcta!
                </p>
            </header>

            <section class="g11-panel" aria-label="Juego de rompecabezas">
                <div class="g11-info">
                    <p id="g11-message" role="status" aria-live="polite">
                        Arrastra una pieza sobre otra para intercambiarlas.
                    </p>

                    <div class="g11-counter">
                        <span>Movimientos</span>
                        <strong id="g11-moves">0</strong>
                    </div>

                    <div class="g11-counter">
                        <span>Puntos</span>
                        <strong id="g11-points">0</strong>
                    </div>
                </div>

                <div
                    id="g11-puzzleBoard"
                    class="g11-board"
                    role="group"
                    aria-label="Tablero de rompecabezas de 16 piezas"
                ></div>

                <div class="g11-controls">
                    <button id="g11-hintButton" type="button">
                        Pista (7 puntos)
                    </button>

                    <button id="g11-restartButton" type="button">
                        Nueva imagen
                    </button>
                </div>

                <p class="g11-hint">
                    Cada pista coloca al menos 3 piezas correctamente.
                    Completa el puzle para ganar 10 puntos.
                </p>
            </section>

            <footer id="g11-credits" class="g11-credits">
                Los créditos de la imagen aparecerán aquí.
            </footer>
        </div>
    `,

    css: String.raw`
        #game11-root {
            --g11-fondo: #06152e;
            --g11-panel: #0b1e3c;
            --g11-azul-pieza: #102c50;
            --g11-naranja: #ff922b;
            --g11-amarillo: #ffd34f;
            --g11-texto: #f5f7ff;
            --g11-secundario: #b9c8df;

            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            padding: 12px;
            color: var(--g11-texto);
            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;

            background:
                radial-gradient(
                    circle at top,
                    #163e6b 0%,
                    #07172f 48%,
                    #030a18 100%
                );

            border-radius: 16px;
        }

        #game11-root *,
        #game11-root *::before,
        #game11-root *::after {
            box-sizing: border-box;
        }

        #game11-root .g11-header {
            text-align: center;
            margin-bottom: 18px;
        }

        #game11-root .g11-eyebrow {
            color: var(--g11-amarillo);
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 3px;
            margin: 0 0 8px;
        }

        #game11-root .g11-title {
            margin: 8px 0;
            font-size: clamp(23px, 4vw, 36px);
            line-height: 1.2;
            color: var(--g11-amarillo);
        }

        #game11-root .g11-subtitle {
            max-width: 600px;
            margin: 0 auto;
            color: var(--g11-secundario);
            line-height: 1.5;
            font-size: 14px;
        }

        #game11-root .g11-panel {
            padding: clamp(10px, 2.5vw, 22px);
            background: rgba(9, 26, 52, 0.92);
            border: 1px solid rgba(255, 211, 79, 0.2);
            border-radius: 16px;
        }

        #game11-root .g11-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 14px;
        }

        #game11-root #g11-message {
            flex: 1 1 100%;
            margin: 0;
            color: var(--g11-secundario);
            line-height: 1.5;
            font-size: 13px;
        }

        #game11-root .g11-counter {
            display: flex;
            align-items: center;
            gap: 7px;
            color: var(--g11-secundario);
            font-size: 12px;
        }

        #game11-root .g11-counter strong {
            min-width: 32px;
            padding: 6px 9px;
            text-align: center;
            color: var(--g11-amarillo);
            background: #142e50;
            border-radius: 8px;
            font-size: 16px;
        }

        #game11-root .g11-board {
            width: 100%;
            max-width: 600px;
            margin: 0 auto 18px;

            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(4, minmax(0, 1fr));
            aspect-ratio: 4 / 3;
            gap: 4px;
            padding: 6px;

            background: #030d20;
            border: 2px solid var(--g11-naranja);
            border-radius: 12px;
            box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4);
        }

        #game11-root .g11-slot {
            min-width: 0;
            min-height: 0;
            overflow: hidden;
            background: var(--g11-fondo);
            border-radius: 4px;
        }

        #game11-root .g11-piece {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;

            background-color: var(--g11-azul-pieza);
            background-repeat: no-repeat;
            background-size: 400% 400%;

            border: 2px solid var(--g11-naranja);
            border-radius: 5px;

            cursor: grab;
            touch-action: none;
            user-select: none;

            transition:
                border-color 0.2s,
                box-shadow 0.2s,
                filter 0.2s;
        }

        #game11-root .g11-piece:active {
            cursor: grabbing;
        }

        #game11-root .g11-piece.g11-correct {
            border-color: var(--g11-amarillo);
            box-shadow: inset 0 0 0 1px rgba(255, 211, 79, 0.5);
        }

        #game11-root .g11-piece.g11-is-drag-source {
            opacity: 0.3;
        }

        .g11-drag-ghost {
            position: fixed !important;
            z-index: 999999;
            pointer-events: none;
            margin: 0;
            opacity: 0.95;
            transform: scale(1.05);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        #game11-root .g11-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        #game11-root .g11-controls button {
            padding: 10px 15px;
            color: #17213a;
            background: var(--g11-amarillo);
            border: 2px solid var(--g11-naranja);
            border-radius: 10px;
            font-size: 13px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s, background 0.2s;
        }

        #game11-root .g11-controls button:hover:not(:disabled) {
            background: #ffe17d;
            transform: translateY(-1px);
        }

        #game11-root .g11-controls button:focus-visible {
            outline: 3px solid white;
            outline-offset: 3px;
        }

        #game11-root .g11-controls button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        #game11-root .g11-hint {
            margin: 12px 0 0;
            color: var(--g11-secundario);
            font-size: 12px;
            line-height: 1.5;
            text-align: center;
        }

        #game11-root .g11-credits {
            margin: 16px auto 0;
            text-align: center;
            font-size: 11px;
            line-height: 1.8;
            color: var(--g11-secundario);
            overflow-wrap: anywhere;
        }

        #game11-root .g11-credits a {
            color: var(--g11-amarillo);
        }

        #game11-root .g11-board.g11-solved {
            border-color: var(--g11-amarillo);
            box-shadow: 0 0 20px rgba(255, 211, 79, 0.35);
        }

        #game11-root .g11-board.g11-solved .g11-piece {
            border-color: var(--g11-amarillo);
        }

        @media (max-width: 420px) {
            #game11-root {
                padding: 8px;
            }

            #game11-root .g11-panel {
                padding: 8px;
            }

            #game11-root .g11-board {
                gap: 3px;
                padding: 4px;
            }

            #game11-root .g11-piece {
                border-width: 1px;
            }

            #game11-root .g11-controls button {
                padding: 9px 11px;
                font-size: 12px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            #game11-root .g11-piece,
            #game11-root .g11-controls button {
                transition: none;
            }
        }
    `,

    js: String.raw`
        (() => {
            const root = document.getElementById("game11-root");
            if (!root || root.dataset.initialized === "true") return;
            root.dataset.initialized = "true";

            const images = [
                {
                    name: "Torre de San Martín, Teruel",
                    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Torre_mud%C3%A9jar_de_San_Mart%C3%ADn%2C_Teruel_%28Spain%29.JPG?width=1280",
                    page: "https://commons.wikimedia.org/wiki/File:Torre_mud%C3%A9jar_de_San_Mart%C3%ADn,_Teruel_(Spain).JPG",
                    author: "Jome",
                    license: "CC BY-SA 3.0 ES",
                    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/es/"
                },
                {
                    name: "Torre de San Andrés, Calatayud",
                    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Torre_mudejar.JPG?width=1200",
                    page: "https://commons.wikimedia.org/wiki/File:Torre_mudejar.JPG",
                    author: "Juan Royo",
                    license: "CC BY-SA 3.0",
                    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                {
                    name: "Torre de El Salvador, Teruel",
                    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Torre_de_El_Salvador_06.jpg?width=1200",
                    page: "https://commons.wikimedia.org/wiki/File:Torre_de_El_Salvador_06.jpg",
                    author: "Tagarino",
                    license: "CC BY-SA 3.0",
                    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
                },
                {
                    name: "Decoración mudéjar de La Seo, Zaragoza",
                    url: "https://commons.wikimedia.org/wiki/Special:FilePath/La_Seo_de_Zaragoza_-_Muro_de_la_Parroquieta_%28decoracion%29.JPG?width=1280",
                    page: "https://commons.wikimedia.org/wiki/File:La_Seo_de_Zaragoza_-_Muro_de_la_Parroquieta_(decoracion).JPG",
                    author: "Dorieo",
                    license: "CC BY-SA 3.0",
                    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
                }
            ];

            const GRID_SIZE = 4;
            const TOTAL_PIECES = GRID_SIZE * GRID_SIZE;
            const POINTS_PER_WIN = 10;
            const HINT_COST = 7;
            const HINT_PIECES = 3;

            const board = root.querySelector("#g11-puzzleBoard");
            const message = root.querySelector("#g11-message");
            const movesDisplay = root.querySelector("#g11-moves");
            const pointsDisplay = root.querySelector("#g11-points");
            const restartButton = root.querySelector("#g11-restartButton");
            const hintButton = root.querySelector("#g11-hintButton");
            const credits = root.querySelector("#g11-credits");

            let moves = 0;
            let points = 0;
            let currentImageIndex = 0;
            let puzzleCompleted = false;
            let dragState = null;

            function updateMoves() {
                movesDisplay.textContent = String(moves);
            }

            function updatePoints() {
                pointsDisplay.textContent = String(points);
            }

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            function createPiece(correctIndex, image) {
                const piece = document.createElement("div");
                piece.className = "g11-piece";
                piece.dataset.correct = String(correctIndex);

                const row = Math.floor(correctIndex / GRID_SIZE);
                const col = correctIndex % GRID_SIZE;
                const x = (col / (GRID_SIZE - 1)) * 100;
                const y = (row / (GRID_SIZE - 1)) * 100;

                piece.style.backgroundImage = 'url("' + image.url + '")';
                piece.style.backgroundSize = "400% 400%";
                piece.style.backgroundPosition = x + "% " + y + "%";

                piece.setAttribute("role", "img");
                piece.setAttribute(
                    "aria-label",
                    image.name + ", fragmento " + (correctIndex + 1)
                );
                piece.setAttribute("tabindex", "0");

                piece.addEventListener("pointerdown", onPointerDown);

                return piece;
            }

            function updateCredits(image) {
                credits.replaceChildren();
                credits.append("Fotografía: ");

                const photoLink = document.createElement("a");
                photoLink.href = image.page;
                photoLink.target = "_blank";
                photoLink.rel = "noopener noreferrer";
                photoLink.textContent = image.name;
                credits.append(photoLink);

                credits.append(". Autor: " + image.author + ". ");

                const licenseLink = document.createElement("a");
                licenseLink.href = image.licenseUrl;
                licenseLink.target = "_blank";
                licenseLink.rel = "noopener noreferrer";
                licenseLink.textContent = "Licencia " + image.license;
                credits.append(licenseLink);

                credits.append(". Fuente: Wikimedia Commons.");
            }

            function createPuzzle(changeImage = false) {
                cancelCurrentDrag();

                if (changeImage) {
                    const otherImages = images
                        .map((image, index) => index)
                        .filter(index => index !== currentImageIndex);

                    currentImageIndex = otherImages[
                        Math.floor(Math.random() * otherImages.length)
                    ];
                }

                const selectedImage = images[currentImageIndex];

                board.replaceChildren();
                board.classList.remove("g11-solved");
                puzzleCompleted = false;
                hintButton.disabled = false;

                const order = shuffle(
                    Array.from({ length: TOTAL_PIECES }, (_, index) => index)
                );

                if (order.every((value, index) => value === index)) {
                    [order[0], order[1]] = [order[1], order[0]];
                }

                order.forEach((correctIndex, position) => {
                    const slot = document.createElement("div");
                    slot.className = "g11-slot";
                    slot.dataset.position = String(position);

                    slot.appendChild(createPiece(correctIndex, selectedImage));
                    board.appendChild(slot);
                });

                moves = 0;
                updateMoves();
                updatePoints();
                refreshCorrectPieces();
                updateCredits(selectedImage);

                message.textContent =
                    "Imagen: " + selectedImage.name +
                    ". ¡Ordena las 16 piezas!";
            }

            function countCorrectPieces() {
                const slots = board.querySelectorAll(".g11-slot");

                return Array.from(slots).filter(slot => {
                    const piece = slot.querySelector(".g11-piece");
                    return Number(slot.dataset.position) ===
                        Number(piece.dataset.correct);
                }).length;
            }

            function refreshCorrectPieces() {
                board.querySelectorAll(".g11-slot").forEach(slot => {
                    const piece = slot.querySelector(".g11-piece");
                    const isCorrect =
                        Number(slot.dataset.position) ===
                        Number(piece.dataset.correct);

                    piece.classList.toggle("g11-correct", isCorrect);
                });
            }

            function checkWin() {
                return countCorrectPieces() === TOTAL_PIECES;
            }

            function completePuzzleIfNeeded() {
                if (puzzleCompleted || !checkWin()) return false;

                puzzleCompleted = true;
                points += POINTS_PER_WIN;
                updatePoints();

                board.classList.add("g11-solved");
                hintButton.disabled = true;

                message.textContent =
                    "¡Enhorabuena! Has completado " +
                    images[currentImageIndex].name +
                    ". +" + POINTS_PER_WIN +
                    " puntos. Total: " + points + ".";

                return true;
            }

            function onPointerDown(event) {
                if (puzzleCompleted || dragState) return;
                if (event.pointerType === "mouse" && event.button !== 0) return;

                event.preventDefault();

                const piece = event.currentTarget;
                const sourceSlot = piece.parentElement;
                const rect = piece.getBoundingClientRect();
                const ghost = piece.cloneNode(true);

                ghost.classList.remove("g11-is-drag-source");
                ghost.classList.add("g11-drag-ghost");
                ghost.style.width = rect.width + "px";
                ghost.style.height = rect.height + "px";
                ghost.style.left = rect.left + "px";
                ghost.style.top = rect.top + "px";

                document.body.appendChild(ghost);
                piece.classList.add("g11-is-drag-source");

                dragState = { piece, sourceSlot, ghost };

                document.addEventListener("pointermove", onPointerMove);
                document.addEventListener("pointerup", onPointerUp);
                document.addEventListener("pointercancel", onPointerUp);
            }

            function onPointerMove(event) {
                if (!dragState) return;

                dragState.ghost.style.left =
                    (event.clientX - dragState.ghost.offsetWidth / 2) + "px";
                dragState.ghost.style.top =
                    (event.clientY - dragState.ghost.offsetHeight / 2) + "px";
            }

            function onPointerUp(event) {
                if (!dragState) return;

                const { piece, sourceSlot, ghost } = dragState;
                ghost.remove();
                piece.classList.remove("g11-is-drag-source");

                document.removeEventListener("pointermove", onPointerMove);
                document.removeEventListener("pointerup", onPointerUp);
                document.removeEventListener("pointercancel", onPointerUp);

                dragState = null;

                if (event.type === "pointercancel") return;

                const element = document.elementFromPoint(
                    event.clientX,
                    event.clientY
                );

                const targetSlot = element && element.closest("#game11-root .g11-slot");

                if (!targetSlot || targetSlot === sourceSlot) return;

                const targetPiece = targetSlot.querySelector(".g11-piece");
                if (!targetPiece) return;

                sourceSlot.appendChild(targetPiece);
                targetSlot.appendChild(piece);

                moves++;
                updateMoves();
                refreshCorrectPieces();

                if (!completePuzzleIfNeeded()) {
                    message.textContent =
                        "Sigue colocando las piezas en el orden correcto.";
                }
            }

            function useHint() {
                if (puzzleCompleted) return;

                if (points < HINT_COST) {
                    message.textContent =
                        "No tienes suficientes puntos. Necesitas " +
                        HINT_COST + " y tienes " + points +
                        ". Completa un puzle para ganar puntos.";
                    return;
                }

                const correctBefore = countCorrectPieces();
                points -= HINT_COST;
                updatePoints();

                let swaps = 0;

                while (
                    countCorrectPieces() - correctBefore < HINT_PIECES &&
                    !checkWin() &&
                    swaps < TOTAL_PIECES
                ) {
                    const slots = Array.from(
                        board.querySelectorAll(".g11-slot")
                    );

                    const wrongSlot = slots.find(slot => {
                        const piece = slot.querySelector(".g11-piece");
                        return Number(slot.dataset.position) !==
                            Number(piece.dataset.correct);
                    });

                    if (!wrongSlot) break;

                    const piece = wrongSlot.querySelector(".g11-piece");
                    const destinationPosition = Number(piece.dataset.correct);

                    const destinationSlot = slots.find(slot =>
                        Number(slot.dataset.position) === destinationPosition
                    );

                    if (!destinationSlot || destinationSlot === wrongSlot) break;

                    const displacedPiece =
                        destinationSlot.querySelector(".g11-piece");

                    if (!displacedPiece) break;

                    destinationSlot.appendChild(piece);
                    wrongSlot.appendChild(displacedPiece);
                    swaps++;
                }

                moves += swaps;
                updateMoves();
                refreshCorrectPieces();

                const corrected = countCorrectPieces() - correctBefore;

                if (completePuzzleIfNeeded()) return;

                message.textContent =
                    "¡Pista utilizada! " + corrected +
                    " piezas nuevas colocadas correctamente. Te quedan " +
                    points + " puntos.";
            }

            function cancelCurrentDrag() {
                if (!dragState) return;

                dragState.ghost.remove();
                dragState.piece.classList.remove("g11-is-drag-source");

                document.removeEventListener("pointermove", onPointerMove);
                document.removeEventListener("pointerup", onPointerUp);
                document.removeEventListener("pointercancel", onPointerUp);

                dragState = null;
            }

            restartButton.addEventListener("click", () => createPuzzle(true));
            hintButton.addEventListener("click", useHint);

            updatePoints();
            createPuzzle();
        })();
    `
},
    game12: {
  title: "🧩 El puzzle de la Menorca Talayótica",
  instructions: "Encuentra la afirmación falsa en cada ronda y consigue los tres puntos.",

  html: String.raw`
    <div class="game-game12">
      <header class="game-header">
        <h1>🧩 El puzzle de la Menorca Talayótica</h1>
        <p>¡Encuentra la respuesta falsa de cada página!</p>
        <div class="progress" id="g12-progress" aria-live="polite">Ronda 1 de 3</div>
      </header>

      <main class="game-main">
        <section class="page pink active" data-page="1">
          <h2>Ronda 1 · ¿Qué es?</h2>
          <p class="instructions">Elige la afirmación falsa.</p>
          <div class="puzzle">
            <button type="button" class="piece top" data-false="false">Espacios funerarios</button>
            <button type="button" class="piece left" data-false="false">Paisaje cultural</button>
            <div class="piece center">¿QUÉ ES?</div>
            <button type="button" class="piece right" data-false="true">Propiedad privada</button>
            <button type="button" class="piece bottom" data-false="false">Lugar sagrado</button>
          </div>
          <p class="status" aria-live="polite"></p>
          <div class="navigation">
            <button type="button" class="nav-btn prev-btn" disabled>← Anterior</button>
            <button type="button" class="check-btn">Comprobar</button>
            <button type="button" class="nav-btn next-btn">Siguiente →</button>
          </div>
        </section>

        <section class="page blue" data-page="2" hidden>
          <h2>Ronda 2 · ¿Qué contiene?</h2>
          <p class="instructions">Elige la afirmación falsa.</p>
          <div class="puzzle">
            <button type="button" class="piece top" data-false="false">Naveta des Tudons</button>
            <button type="button" class="piece left" data-false="false">Talayots</button>
            <div class="piece center">CONTIENE</div>
            <button type="button" class="piece right" data-false="true">Estatuas</button>
            <button type="button" class="piece bottom" data-false="false">Recintos de taula</button>
          </div>
          <p class="status" aria-live="polite"></p>
          <div class="navigation">
            <button type="button" class="nav-btn prev-btn">← Anterior</button>
            <button type="button" class="check-btn">Comprobar</button>
            <button type="button" class="nav-btn next-btn">Siguiente →</button>
          </div>
        </section>

        <section class="page green" data-page="3" hidden>
          <h2>Ronda 3 · Datos curiosos</h2>
          <p class="instructions">Elige el dato falso.</p>
          <div class="puzzle">
            <button type="button" class="piece top" data-false="false">Creado 1200 a. C.</button>
            <button type="button" class="piece left" data-false="false">280 yacimientos</button>
            <div class="piece center">DATOS<br>CURIOSOS</div>
            <button type="button" class="piece right" data-false="false">Está en Menorca</button>
            <button type="button" class="piece bottom" data-false="true">Que se encuentran en París</button>
          </div>
          <p class="status" aria-live="polite"></p>
          <div class="navigation">
            <button type="button" class="nav-btn prev-btn">← Anterior</button>
            <button type="button" class="check-btn">Comprobar</button>
            <button type="button" class="nav-btn finish-btn">Ver resultado 🏆</button>
          </div>
        </section>
      </main>

      <section class="result" hidden aria-labelledby="g12-result-title">
        <h2 id="g12-result-title">🏆 ¡Juego terminado!</h2>
        <p class="score"></p>
        <p class="message" aria-live="polite"></p>
        <button type="button" class="restart-btn">Volver a jugar 🔄</button>
      </section>
    </div>
  `,

  css: String.raw`
    .game-game12 {
      box-sizing: border-box;
      width: 100%;
      padding: 12px 8px 24px;
      font-family: "Trebuchet MS", Arial, sans-serif;
      color: #342d43;
      text-align: center;
    }

    .game-game12 *,
    .game-game12 *::before,
    .game-game12 *::after {
      box-sizing: border-box;
    }

    .game-game12 .game-header {
      max-width: 800px;
      margin: 0 auto 24px;
    }

    .game-game12 .game-header h1 {
      margin: 8px 0 12px;
      color: #49355c;
      font-size: clamp(23px, 4vw, 34px);
      line-height: 1.2;
    }

    .game-game12 .game-header p {
      line-height: 1.5;
    }

    .game-game12 .progress {
      display: inline-block;
      margin-top: 8px;
      padding: 8px 17px;
      border-radius: 30px;
      background: #eee7f8;
      font-weight: bold;
    }

    .game-game12 .page {
      --dark: #a82f68;
      --light: #f5c6db;
      display: none;
      max-width: 800px;
      margin: auto;
      padding: 22px 14px;
      background: #fff;
      border: 2px solid #eee5ec;
      border-radius: 24px;
      box-shadow: 0 8px 25px #40304a10;
    }

    .game-game12 .page.active {
      display: block;
      animation: g12-appear 0.3s ease;
    }

    .game-game12 .page[hidden],
    .game-game12 .result[hidden] {
      display: none !important;
    }

    .game-game12 .pink {
      --dark: #a82f68;
      --light: #f5c6db;
    }

    .game-game12 .blue {
      --dark: #173f78;
      --light: #c3e1ff;
    }

    .game-game12 .green {
      --dark: #205c42;
      --light: #c9edcf;
    }

    .game-game12 .page h2 {
      margin-top: 4px;
      color: var(--dark);
    }

    .game-game12 .instructions {
      color: #71697b;
    }

    .game-game12 .puzzle {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(3, minmax(95px, auto));
      gap: 9px;
      max-width: 590px;
      margin: 30px auto;
      overflow: visible;
    }

    .game-game12 .piece {
      --piece-color: var(--light);
      position: relative;
      isolation: isolate;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 0;
      min-height: 95px;
      padding: 13px 8px;
      border: 2px solid #fff;
      border-radius: 12px;
      background: var(--piece-color);
      color: #263349;
      font-family: inherit;
      font-size: clamp(12px, 2.1vw, 16px);
      font-weight: bold;
      line-height: 1.35;
      overflow-wrap: anywhere;
      cursor: pointer;
      box-shadow: 0 3px 7px #00000013;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .game-game12 .piece:not(.center)::before,
    .game-game12 .piece:not(.center)::after {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--piece-color);
      z-index: -1;
      pointer-events: none;
    }

    .game-game12 .piece:not(.center)::before {
      top: -13px;
      left: calc(50% - 12px);
    }

    .game-game12 .piece:not(.center)::after {
      top: calc(50% - 12px);
      right: -13px;
    }

    .game-game12 .piece.top::before {
      display: none;
    }

    .game-game12 .piece.left::after,
    .game-game12 .piece.bottom::after {
      display: none;
    }

    .game-game12 .piece.top {
      grid-column: 2;
      grid-row: 1;
    }

    .game-game12 .piece.left {
      grid-column: 1;
      grid-row: 2;
    }

    .game-game12 .piece.center {
      grid-column: 2;
      grid-row: 2;
      background: var(--dark);
      color: #fff;
      font-size: clamp(14px, 2.5vw, 19px);
      cursor: default;
      border: 0;
      border-radius: 14px;
      box-shadow: 0 4px 10px #00000018;
    }

    .game-game12 .piece.right {
      grid-column: 3;
      grid-row: 2;
    }

    .game-game12 .piece.bottom {
      grid-column: 2;
      grid-row: 3;
    }

    .game-game12 .piece:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px #0000001b;
    }

    .game-game12 .piece:focus-visible,
    .game-game12 button:focus-visible {
      outline: 3px solid #111827;
      outline-offset: 3px;
    }

    .game-game12 .piece.selected {
      outline: 4px solid var(--dark);
      outline-offset: -5px;
    }

    .game-game12 .piece.correct {
      --piece-color: #b8e8c1;
      background: #b8e8c1;
      border-color: #288347;
      color: #164e29;
    }

    .game-game12 .piece.incorrect {
      --piece-color: #ffd0cc;
      background: #ffd0cc;
      border-color: #cf4949;
      color: #812727;
    }

    .game-game12 .piece:disabled {
      cursor: default;
      opacity: 1;
    }

    .game-game12 .status {
      min-height: 28px;
      margin: 12px auto;
      font-weight: bold;
      line-height: 1.5;
    }

    .game-game12 .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    .game-game12 .nav-btn,
    .game-game12 .check-btn,
    .game-game12 .restart-btn {
      padding: 12px 17px;
      border: none;
      border-radius: 12px;
      font-family: inherit;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
    }

    .game-game12 .nav-btn {
      background: #eae5f0;
      color: #413451;
    }

    .game-game12 .check-btn,
    .game-game12 .restart-btn {
      background: #49355c;
      color: #fff;
    }

    .game-game12 .nav-btn:hover:not(:disabled),
    .game-game12 .check-btn:hover,
    .game-game12 .restart-btn:hover {
      transform: translateY(-2px);
    }

    .game-game12 .nav-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .game-game12 .result {
      max-width: 600px;
      margin: 25px auto;
      padding: 25px 18px;
      border-radius: 22px;
      background: #eee7f8;
      line-height: 1.6;
    }

    .game-game12 .result h2 {
      color: #49355c;
    }

    @keyframes g12-appear {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 480px) {
      .game-game12 {
        padding: 8px 2px 20px;
      }

      .game-game12 .page {
        padding: 18px 7px;
      }

      .game-game12 .puzzle {
        gap: 5px;
        grid-template-rows: repeat(3, minmax(82px, auto));
        margin: 24px auto;
      }

      .game-game12 .piece {
        min-height: 82px;
        padding: 8px 4px;
        border-radius: 10px;
      }

      .game-game12 .piece:not(.center)::before,
      .game-game12 .piece:not(.center)::after {
        width: 18px;
        height: 18px;
      }

      .game-game12 .piece:not(.center)::before {
        top: -10px;
        left: calc(50% - 9px);
      }

      .game-game12 .piece:not(.center)::after {
        top: calc(50% - 9px);
        right: -10px;
      }

      .game-game12 .navigation {
        gap: 7px;
      }

      .game-game12 .nav-btn,
      .game-game12 .check-btn,
      .game-game12 .restart-btn {
        padding: 11px 10px;
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .game-game12 .page.active {
        animation: none;
      }

      .game-game12 .piece,
      .game-game12 .nav-btn,
      .game-game12 .check-btn,
      .game-game12 .restart-btn {
        transition: none;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.querySelector(".game-game12");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const pages = [...root.querySelectorAll(".page")];
      const progress = root.querySelector("#g12-progress");
      const result = root.querySelector(".result");
      const scoreText = root.querySelector(".score");
      const message = root.querySelector(".message");

      let currentPage = 0;

      const answers = pages.map(() => ({
        selected: null,
        checked: false,
        correct: false
      }));

      function showPage(index) {
        currentPage = Math.max(0, Math.min(index, pages.length - 1));

        pages.forEach((page, i) => {
          const isActive = i === currentPage;
          page.classList.toggle("active", isActive);
          page.hidden = !isActive;
        });

        progress.textContent =
          "Ronda " + (currentPage + 1) + " de " + pages.length;

        result.hidden = true;

        pages.forEach((page, i) => {
          const prev = page.querySelector(".prev-btn");
          const next = page.querySelector(".next-btn");

          if (prev) prev.disabled = i === 0;
          if (next) next.disabled = i === pages.length - 1;
        });
      }

      pages.forEach((page, index) => {
        const pieces = [...page.querySelectorAll(".piece:not(.center)")];
        const status = page.querySelector(".status");
        const state = answers[index];

        pieces.forEach(piece => {
          piece.setAttribute("aria-pressed", "false");

          piece.addEventListener("click", () => {
            if (state.checked) return;

            pieces.forEach(item => {
              item.classList.remove("selected");
              item.setAttribute("aria-pressed", "false");
            });

            piece.classList.add("selected");
            piece.setAttribute("aria-pressed", "true");
            state.selected = piece;

            status.textContent =
              "Has seleccionado: " + piece.textContent.trim();
          });
        });

        page.querySelector(".check-btn").addEventListener("click", () => {
          if (state.checked) {
            status.textContent = state.correct
              ? "✅ ¡Respuesta correcta!"
              : "❌ La respuesta falsa está marcada en verde.";
            return;
          }

          if (!state.selected) {
            status.textContent = "⚠️ Selecciona una pieza primero.";
            return;
          }

          state.checked = true;
          state.correct = state.selected.dataset.false === "true";

          pieces.forEach(piece => {
            piece.disabled = true;
            piece.classList.remove("selected");
            piece.setAttribute("aria-pressed", "false");

            if (piece.dataset.false === "true") {
              piece.classList.add("correct");
            }
          });

          if (state.correct) {
            status.textContent = "🎉 ¡Muy bien! Has encontrado la falsa.";
          } else {
            state.selected.classList.add("incorrect");
            status.textContent =
              "❌ No es esa. La pieza verde es la respuesta falsa.";
          }
        });

        const prev = page.querySelector(".prev-btn");
        const next = page.querySelector(".next-btn");

        if (prev) {
          prev.addEventListener("click", () => showPage(index - 1));
        }

        if (next) {
          next.addEventListener("click", () => showPage(index + 1));
        }
      });

      root.querySelector(".finish-btn").addEventListener("click", () => {
        const firstUnanswered = answers.findIndex(answer => !answer.checked);

        if (firstUnanswered !== -1) {
          showPage(firstUnanswered);
          pages[firstUnanswered].querySelector(".status").textContent =
            "⚠️ Responde y comprueba esta ronda antes de ver el resultado.";
          return;
        }

        const score = answers.filter(answer => answer.correct).length;

        pages.forEach(page => {
          page.classList.remove("active");
          page.hidden = true;
        });

        progress.textContent = "¡Juego completado!";
        result.hidden = false;
        scoreText.textContent = "Has acertado " + score + " de 3 rondas.";

        if (score === 3) {
          message.textContent =
            "¡Excelente! Has encontrado todas las respuestas falsas. 🏆";
        } else if (score === 2) {
          message.textContent =
            "¡Muy bien! Solo te ha faltado una respuesta.";
        } else {
          message.textContent =
            "¡Buen intento! Puedes volver a jugar para mejorar tu puntuación.";
        }
      });

      root.querySelector(".restart-btn").addEventListener("click", () => {
        answers.forEach((answer, index) => {
          answer.selected = null;
          answer.checked = false;
          answer.correct = false;

          const page = pages[index];
          page.querySelector(".status").textContent = "";

          page.querySelectorAll(".piece:not(.center)").forEach(piece => {
            piece.disabled = false;
            piece.classList.remove("selected", "correct", "incorrect");
            piece.setAttribute("aria-pressed", "false");
          });
        });

        showPage(0);
      });

      showPage(0);
    })();
  `
},
game13: {
    title: "Los dólmenes de Antequera",
    instructions: "Arrastra cada nombre hasta la fotografía correspondiente. También puedes seleccionar un nombre y después pulsar el cuadro donde quieras colocarlo. Identifica los cinco elementos del paisaje cultural de Antequera.",

    html: String.raw`
        <div id="game13-root" class="g13-museum">
            <header class="g13-header">
                <p class="g13-eyebrow">ARQUEOLOGÍA · ANDALUCÍA</p>
                <h2 class="g13-title">Los dólmenes de Antequera</h2>
                <p class="g13-subtitle">
                    Arrastra cada nombre hasta el cuadro que corresponda.
                    ¡Descubre los monumentos y paisajes de Antequera!
                </p>

                <div class="g13-level-controls" aria-label="Opciones del juego">
                    <button id="g13-levelX" class="g13-level-button g13-active"
                        type="button" aria-pressed="true">
                        Nivel X
                    </button>
                    <button id="g13-levelY" class="g13-level-button"
                        type="button" aria-pressed="false">
                        Nivel Y
                    </button>
                    <button id="g13-resetButton" class="g13-reset-button"
                        type="button">
                        Reiniciar
                    </button>
                </div>

                <p id="g13-message" role="status" aria-live="polite">
                    ¡Vamos a descubrir el museo!
                </p>
            </header>

            <main class="g13-layout">
                <aside class="g13-name-panel" aria-labelledby="g13-names-title">
                    <h3 id="g13-names-title">Nombres</h3>
                    <p class="g13-help">
                        Selecciona un nombre y pulsa su fotografía,
                        o arrástralo hasta el recuadro.
                    </p>
                    <div id="g13-nameList" class="g13-name-list"></div>
                </aside>

                <section class="g13-gallery" aria-label="Fotografías del paisaje cultural">
                    <article class="g13-artwork">
                        <div class="g13-antique-frame">
                            <div class="g13-photo-area">
                                <img
                                    src="https://www.alianzapaisajesculturales.org/wp-content/gallery/dolmenes-de-antequera/IMG_8168.JPG"
                                    alt="Fotografía del Dolmen de Menga"
                                    loading="lazy"
                                >
                            </div>
                        </div>
                        <button class="g13-drop-zone"
                            type="button" data-answer="menga"
                            aria-label="Colocar el nombre correspondiente al Dolmen de Menga">
                            Suelta aquí
                        </button>
                    </article>

                    <article class="g13-artwork">
                        <div class="g13-antique-frame">
                            <div class="g13-photo-area">
                                <img
                                    src="https://www.recordrentacar.com/blog/wp-content/uploads/2014/01/Dolmen-de-Viera.jpg"
                                    alt="Fotografía del Dolmen de Viera"
                                    loading="lazy"
                                >
                            </div>
                        </div>
                        <button class="g13-drop-zone"
                            type="button" data-answer="viera"
                            aria-label="Colocar el nombre correspondiente al Dolmen de Viera">
                            Suelta aquí
                        </button>
                    </article>

                    <article class="g13-artwork">
                        <div class="g13-antique-frame">
                            <div class="g13-photo-area">
                                <img
                                    src="https://www.alianzapaisajesculturales.org/wp-content/gallery/dolmenes-de-antequera/IMG_8178.JPG"
                                    alt="Paisaje de El Torcal de Antequera"
                                    loading="lazy"
                                >
                            </div>
                        </div>
                        <button class="g13-drop-zone"
                            type="button" data-answer="torcal"
                            aria-label="Colocar el nombre correspondiente a El Torcal">
                            Suelta aquí
                        </button>
                    </article>

                    <article class="g13-artwork">
                        <div class="g13-antique-frame">
                            <div class="g13-photo-area">
                                <img
                                    src="https://www.alianzapaisajesculturales.org/wp-content/gallery/dolmenes-de-antequera/IMG_8169.JPG"
                                    alt="Fotografía del Tholos de El Romeral"
                                    loading="lazy"
                                >
                            </div>
                        </div>
                        <button class="g13-drop-zone"
                            type="button" data-answer="romeral"
                            aria-label="Colocar el nombre correspondiente al Tholos de El Romeral">
                            Suelta aquí
                        </button>
                    </article>

                    <article class="g13-artwork">
                        <div class="g13-antique-frame">
                            <div class="g13-photo-area">
                                <img
                                    src="https://www.alianzapaisajesculturales.org/wp-content/uploads/2024/11/11-Valor-excepcional-pena-de-los-enamorados-1600x900-1.jpg"
                                    alt="La Peña de los Enamorados"
                                    loading="lazy"
                                >
                            </div>
                        </div>
                        <button class="g13-drop-zone"
                            type="button" data-answer="pena"
                            aria-label="Colocar el nombre correspondiente a La Peña de los Enamorados">
                            Suelta aquí
                        </button>
                    </article>
                </section>
            </main>
        </div>
    `,

    css: String.raw`
        #game13-root {
            --g13-burgundy: #641b2d;
            --g13-dark: #4b1421;
            --g13-gold: #e4c16a;
            --g13-border-gold: #d4af5a;
            --g13-cream: #f8edcf;
            --g13-text-dark: #24160b;

            width: 100%;
            padding: 16px;
            color: var(--g13-cream);
            background: var(--g13-burgundy);
            border-radius: 14px;
            font-family: Georgia, "Times New Roman", serif;
            box-sizing: border-box;
        }

        #game13-root *,
        #game13-root *::before,
        #game13-root *::after {
            box-sizing: border-box;
        }

        #game13-root .g13-header {
            text-align: center;
            margin-bottom: 22px;
        }

        #game13-root .g13-eyebrow {
            color: var(--g13-gold);
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 3px;
            margin: 0 0 8px;
        }

        #game13-root .g13-title {
            color: var(--g13-gold);
            font-size: clamp(23px, 4vw, 36px);
            line-height: 1.2;
            margin: 8px 0;
            text-shadow: 2px 3px 3px #2d1015;
        }

        #game13-root .g13-subtitle {
            max-width: 620px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 1.5;
        }

        #game13-root .g13-level-controls {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            margin: 16px 0 10px;
        }

        #game13-root .g13-level-controls button {
            padding: 9px 16px;
            border: 2px solid var(--g13-border-gold);
            border-radius: 7px;
            background: #f4e5bd;
            color: var(--g13-text-dark);
            font-family: inherit;
            font-size: 13px;
            font-weight: bold;
            cursor: pointer;
        }

        #game13-root .g13-level-controls button:hover,
        #game13-root .g13-level-controls button.g13-active {
            background: #d4ad4f;
            box-shadow: 0 0 8px #e7c875;
        }

        #game13-root .g13-level-controls .g13-reset-button {
            background: #f7f1e6;
        }

        #game13-root button:focus-visible {
            outline: 3px solid white;
            outline-offset: 3px;
        }

        #game13-root #g13-message {
            min-height: 24px;
            margin: 10px 0 0;
            color: #ffe6a0;
            font-weight: bold;
            font-size: 13px;
            line-height: 1.5;
        }

        #game13-root .g13-layout {
            display: grid;
            grid-template-columns: minmax(140px, 190px) minmax(0, 1fr);
            align-items: start;
            gap: 18px;
        }

        #game13-root .g13-name-panel {
            min-width: 0;
            padding: 14px 10px;
            text-align: center;
            border: 2px solid var(--g13-border-gold);
            border-radius: 12px;
            background: var(--g13-dark);
            box-shadow: 0 5px 15px #300b14;
        }

        #game13-root .g13-name-panel h3 {
            margin: 0 0 8px;
            color: var(--g13-gold);
            font-size: 19px;
        }

        #game13-root .g13-help {
            color: var(--g13-cream);
            font-size: 12px;
            line-height: 1.45;
            margin: 0 0 12px;
        }

        #game13-root .g13-name-list {
            display: flex;
            flex-direction: column;
            gap: 9px;
        }

        #game13-root .g13-name-card {
            width: 100%;
            padding: 10px 7px;
            border: 1px solid #b9a16a;
            border-radius: 7px;
            background: #f5f0e5;
            color: #000;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 12px;
            font-weight: bold;
            line-height: 1.35;
            cursor: grab;
            user-select: none;
            touch-action: manipulation;
            box-shadow: 0 3px 5px #250c11;
        }

        #game13-root .g13-name-card:hover {
            background: #ead6a5;
        }

        #game13-root .g13-name-card.g13-selected {
            outline: 3px solid #ffe17d;
            outline-offset: 2px;
            background: #ead6a5;
        }

        #game13-root .g13-name-card.g13-dragging {
            opacity: 0.45;
        }

        #game13-root .g13-name-card:disabled {
            cursor: default;
            opacity: 0.35;
        }

        #game13-root .g13-gallery {
            min-width: 0;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 22px 12px;
            align-items: center;
        }

        #game13-root .g13-artwork {
            grid-column: span 2;
            min-width: 0;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 66px;
            align-items: center;
            gap: 7px;
        }

        #game13-root .g13-artwork:nth-child(4) {
            grid-column: 2 / span 2;
        }

        #game13-root .g13-artwork:nth-child(5) {
            grid-column: 4 / span 2;
        }

        #game13-root .g13-antique-frame {
            min-width: 0;
            padding: 5px;
            border: 4px ridge #c9a34b;
            border-radius: 3px;
            background: linear-gradient(
                135deg,
                #f4df91,
                #a77925 22%,
                #e5c567 40%,
                #80551c 60%,
                #e8c76c 80%,
                #a77829
            );
            box-shadow:
                0 0 0 2px #684719,
                0 5px 12px #260b12,
                inset 0 0 0 2px #f6dfa0;
        }

        #game13-root .g13-photo-area {
            width: 100%;
            height: 125px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #f3ead8;
            border: 2px solid #745321;
        }

        #game13-root .g13-photo-area img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        #game13-root .g13-drop-zone {
            min-width: 0;
            min-height: 64px;
            width: 100%;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow-wrap: anywhere;
            text-align: center;
            border: 2px dashed #d8b65e;
            border-radius: 6px;
            background: #fffdf7;
            color: #777;
            font-family: Arial, sans-serif;
            font-size: 11px;
            line-height: 1.3;
            cursor: pointer;
            box-shadow: inset 0 0 5px #d8c9a8;
        }

        #game13-root .g13-drop-zone.g13-drag-over {
            background: #f3df9f;
            border: 2px solid #ffdf72;
        }

        #game13-root .g13-drop-zone.g13-correct {
            background: #e5efd9;
            color: #172e11;
            border: 2px solid #8aaa69;
            font-weight: bold;
            cursor: default;
        }

        #game13-root .g13-drop-zone.g13-incorrect {
            background: #f6d6d6;
            border-color: #b23c3c;
        }

        #game13-root.g13-level-y .g13-drop-zone {
            min-height: 50px;
            font-size: 10px;
        }

        @media (max-width: 900px) {
            #game13-root .g13-layout {
                grid-template-columns: 1fr;
            }

            #game13-root .g13-name-panel {
                width: 100%;
            }

            #game13-root .g13-name-list {
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
            }

            #game13-root .g13-name-card {
                width: auto;
                max-width: 180px;
                flex: 1 1 130px;
            }

            #game13-root .g13-photo-area {
                height: 145px;
            }
        }

        @media (max-width: 600px) {
            #game13-root {
                padding: 10px;
            }

            #game13-root .g13-gallery {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 18px 10px;
            }

            #game13-root .g13-artwork,
            #game13-root .g13-artwork:nth-child(4),
            #game13-root .g13-artwork:nth-child(5) {
                grid-column: auto;
                grid-template-columns: minmax(0, 1fr);
            }

            #game13-root .g13-photo-area {
                height: 155px;
            }

            #game13-root .g13-drop-zone {
                min-height: 42px;
                font-size: 12px;
            }
        }

        @media (max-width: 360px) {
            #game13-root .g13-gallery {
                grid-template-columns: 1fr;
            }

            #game13-root .g13-photo-area {
                height: 210px;
            }
        }
    `,

    js: String.raw`
        (() => {
            const root = document.getElementById("game13-root");
            if (!root || root.dataset.initialized === "true") return;
            root.dataset.initialized = "true";

            const nameList = root.querySelector("#g13-nameList");
            const message = root.querySelector("#g13-message");
            const levelXButton = root.querySelector("#g13-levelX");
            const levelYButton = root.querySelector("#g13-levelY");
            const resetButton = root.querySelector("#g13-resetButton");
            const zones = Array.from(root.querySelectorAll(".g13-drop-zone"));

            const originalNames = [
                { id: "menga", text: "Dolmen de Menga" },
                { id: "viera", text: "Dolmen de Viera" },
                { id: "torcal", text: "El Torcal" },
                { id: "romeral", text: "Tholos de El Romeral" },
                { id: "pena", text: "La Peña de Los Enamorados" }
            ];

            let currentLevel = "X";
            let draggedName = null;
            let selectedNameId = null;
            let completed = 0;

            function shuffle(array) {
                const shuffled = [...array];

                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }

                return shuffled;
            }

            function updateSelection() {
                nameList.querySelectorAll(".g13-name-card").forEach(button => {
                    const selected = button.dataset.name === selectedNameId;
                    button.classList.toggle("g13-selected", selected);
                    button.setAttribute("aria-pressed", String(selected));
                });
            }

            function createNameCards() {
                nameList.replaceChildren();

                shuffle(originalNames).forEach(item => {
                    const button = document.createElement("button");
                    button.className = "g13-name-card";
                    button.textContent = item.text;
                    button.dataset.name = item.id;
                    button.type = "button";
                    button.draggable = true;
                    button.setAttribute("aria-pressed", "false");

                    button.addEventListener("click", () => {
                        if (button.disabled) return;

                        selectedNameId =
                            selectedNameId === item.id ? null : item.id;

                        updateSelection();

                        if (selectedNameId) {
                            message.textContent =
                                "Nombre seleccionado: " + item.text +
                                ". Ahora pulsa el cuadro correspondiente.";
                        } else {
                            message.textContent =
                                "Selecciona un nombre o arrástralo hasta su cuadro.";
                        }
                    });

                    button.addEventListener("dragstart", event => {
                        draggedName = button;
                        selectedNameId = item.id;
                        event.dataTransfer.setData("text/plain", item.id);
                        event.dataTransfer.effectAllowed = "move";
                        button.classList.add("g13-dragging");
                        updateSelection();
                    });

                    button.addEventListener("dragend", () => {
                        button.classList.remove("g13-dragging");
                        draggedName = null;

                        zones.forEach(zone =>
                            zone.classList.remove("g13-drag-over")
                        );
                    });

                    nameList.appendChild(button);
                });
            }

            function placeName(zone, nameId) {
                if (!nameId || zone.classList.contains("g13-correct")) return;

                const nameButton = nameList.querySelector(
                    '[data-name="' + nameId + '"]'
                );

                if (!nameButton || nameButton.disabled) return;

                const expectedId = zone.dataset.answer;

                zone.classList.remove("g13-incorrect");

                if (nameId === expectedId) {
                    zone.textContent = nameButton.textContent;
                    zone.classList.add("g13-correct");
                    zone.setAttribute("aria-label", "Correcto: " + nameButton.textContent);
                    zone.setAttribute("aria-disabled", "true");

                    nameButton.disabled = true;
                    nameButton.setAttribute("aria-label", nameButton.textContent + ", colocado correctamente");

                    completed++;
                    selectedNameId = null;
                    updateSelection();

                    if (completed === originalNames.length) {
                        message.textContent =
                            "¡Enhorabuena! Has completado el museo de los dólmenes de Antequera.";
                    } else {
                        message.textContent =
                            "¡Correcto! Has identificado " + nameButton.textContent +
                            ". Sigue con los demás cuadros.";
                    }
                } else {
                    zone.classList.add("g13-incorrect");
                    message.textContent =
                        "Ese nombre no corresponde a esta fotografía. ¡Prueba con otro!";

                    window.setTimeout(() => {
                        zone.classList.remove("g13-incorrect");
                    }, 700);
                }
            }

            function setupDropZones() {
                zones.forEach(zone => {
                    zone.addEventListener("dragover", event => {
                        event.preventDefault();

                        if (!zone.classList.contains("g13-correct")) {
                            zone.classList.add("g13-drag-over");
                            event.dataTransfer.dropEffect = "move";
                        }
                    });

                    zone.addEventListener("dragleave", () => {
                        zone.classList.remove("g13-drag-over");
                    });

                    zone.addEventListener("drop", event => {
                        event.preventDefault();
                        zone.classList.remove("g13-drag-over");

                        const id = event.dataTransfer.getData("text/plain");
                        placeName(zone, id);
                    });

                    zone.addEventListener("click", () => {
                        if (selectedNameId) {
                            placeName(zone, selectedNameId);
                        }
                    });

                    zone.addEventListener("keydown", event => {
                        if (
                            (event.key === "Enter" || event.key === " ") &&
                            selectedNameId
                        ) {
                            event.preventDefault();
                            placeName(zone, selectedNameId);
                        }
                    });
                });
            }

            function setLevel(level) {
                currentLevel = level;

                levelXButton.classList.toggle("g13-active", level === "X");
                levelYButton.classList.toggle("g13-active", level === "Y");

                levelXButton.setAttribute("aria-pressed", String(level === "X"));
                levelYButton.setAttribute("aria-pressed", String(level === "Y"));

                root.classList.toggle("g13-level-y", level === "Y");

                resetGame();
            }

            function resetGame() {
                completed = 0;
                draggedName = null;
                selectedNameId = null;

                zones.forEach(zone => {
                    zone.textContent = "Suelta aquí";
                    zone.classList.remove(
                        "g13-correct",
                        "g13-incorrect",
                        "g13-drag-over"
                    );
                    zone.removeAttribute("aria-disabled");

                    const original = originalNames.find(
                        item => item.id === zone.dataset.answer
                    );

                    zone.setAttribute(
                        "aria-label",
                        "Colocar el nombre correspondiente a " +
                        (original ? original.text : "esta fotografía")
                    );
                });

                createNameCards();

                message.textContent =
                    currentLevel === "X"
                        ? "Nivel X: identifica los cinco elementos del paisaje cultural."
                        : "Nivel Y: ¡pon a prueba tus conocimientos sobre Antequera!";
            }

            levelXButton.addEventListener("click", () => setLevel("X"));
            levelYButton.addEventListener("click", () => setLevel("Y"));
            resetButton.addEventListener("click", resetGame);

            setupDropZones();
            resetGame();
        })();
    `
},
game14: {
  title: "El crucigrama de San Millán",
  instructions: "Resuelve las diez palabras del crucigrama utilizando las pistas horizontales y verticales. Pulsa una pista para seleccionar la palabra y escribe una letra en cada casilla. ¡PAISAJE y UNESCO también tendrás que descubrirlas!",

  html: String.raw`
    <div id="game14-root" class="g14-game-shell">
      <header class="g14-hero">
        <p class="g14-eyebrow">RETO DE PATRIMONIO</p>
        <h2>El crucigrama de San Millán</h2>
        <p>Descubre las palabras escondidas en la historia de los monasterios.</p>
      </header>

      <main class="g14-layout">
        <section class="g14-panel" aria-label="Tablero del crucigrama">
          <div class="g14-panel-heading">
            <h3>El tablero</h3>
            <span id="g14-progress" aria-label="Palabras resueltas">0/10</span>
          </div>

          <div id="g14-crossword" class="g14-crossword"
               role="group" aria-label="Casillas del crucigrama"></div>

          <div class="g14-actions">
            <button type="button" id="g14-checkBtn">Comprobar</button>
            <button type="button" id="g14-revealBtn" class="g14-secondary">Ver soluciones</button>
            <button type="button" id="g14-resetBtn" class="g14-secondary">Reiniciar</button>
          </div>

          <p id="g14-message" aria-live="polite" role="status">
            ¡Selecciona una casilla y empieza!
          </p>
        </section>

        <section class="g14-panel g14-clues" aria-label="Pistas del crucigrama">
          <h3>Las pistas</h3>
          <p class="g14-hint">Pulsa una pista para seleccionar la palabra correspondiente.</p>

          <h4>Horizontales →</h4>
          <ol id="g14-acrossClues"></ol>

          <h4>Verticales ↓</h4>
          <ol id="g14-downClues"></ol>
        </section>
      </main>

      <footer class="g14-footer">
        Monasterios de San Millán de Yuso y de Suso · La Rioja
      </footer>
    </div>
  `,

  css: String.raw`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=Playfair+Display:wght@600;700&display=swap');

    #game14-root {
      box-sizing: border-box;
      width: 100%;
      color: #34433f;
      font-family: 'DM Sans', Arial, sans-serif;
      font-size: 14px;
    }

    #game14-root *,
    #game14-root *::before,
    #game14-root *::after {
      box-sizing: border-box;
    }

    #game14-root .g14-game-shell {
      width: 100%;
      max-width: 1050px;
      margin: 0 auto;
      padding: 12px 0;
    }

    #game14-root .g14-hero {
      text-align: center;
      margin: 0 auto 22px;
    }

    #game14-root .g14-eyebrow {
      color: #527562;
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 700;
      margin: 0 0 8px;
    }

    #game14-root .g14-hero h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(24px, 4vw, 36px);
      line-height: 1.2;
      margin: 8px 0 12px;
      color: #34433f;
    }

    #game14-root .g14-hero p:last-child,
    #game14-root .g14-hint {
      color: #68776e;
      line-height: 1.6;
    }

    #game14-root .g14-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
      gap: 16px;
      align-items: start;
    }

    #game14-root .g14-panel {
      min-width: 0;
      background: #fffdf8;
      padding: 18px;
      border: 1px solid #e5e9df;
      border-radius: 16px;
      box-shadow: 0 6px 18px rgba(52, 67, 63, 0.08);
    }

    #game14-root .g14-panel-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    #game14-root .g14-panel h3 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 19px;
      margin: 0 0 12px;
    }

    #game14-root .g14-panel-heading h3 {
      margin-bottom: 10px;
    }

    #game14-root #g14-progress {
      flex: 0 0 auto;
      color: #365744;
      background: #e8f1e8;
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
    }

    #game14-root .g14-crossword {
      display: grid;
      grid-template-columns: repeat(17, minmax(0, 1fr));
      gap: 2px;
      margin: 12px 0 18px;
      width: 100%;
    }

    #game14-root .g14-cell {
      position: relative;
      min-width: 0;
      aspect-ratio: 1;
      background: #ffffff;
      border: 1px solid #c5d4c6;
      border-radius: 3px;
    }

    #game14-root .g14-cell input {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 0;
      border: 0;
      border-radius: 3px;
      outline: none;
      background: transparent;
      text-align: center;
      text-transform: uppercase;
      color: #34433f;
      font: 700 clamp(8px, 1.25vw, 14px) 'DM Sans', Arial, sans-serif;
      padding: 5px 0 0;
      margin: 0;
    }

    #game14-root .g14-cell:focus-within,
    #game14-root .g14-cell.g14-active,
    #game14-root .g14-cell.g14-in-word {
      background: #dcece0;
    }

    #game14-root .g14-cell:focus-within {
      outline: 2px solid #527562;
      outline-offset: 1px;
      z-index: 1;
    }

    #game14-root .g14-cell.g14-block {
      background: transparent;
      border-color: transparent;
    }

    #game14-root .g14-cell .g14-num {
      position: absolute;
      top: 1px;
      left: 2px;
      font-size: 8px;
      line-height: 1;
      color: #526b59;
      pointer-events: none;
    }

    #game14-root .g14-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    #game14-root button {
      background: #527562;
      color: #ffffff;
      border: 2px solid transparent;
      border-radius: 8px;
      padding: 9px 11px;
      font: 700 12px 'DM Sans', Arial, sans-serif;
      line-height: 1.4;
      cursor: pointer;
    }

    #game14-root button:hover {
      background: #3e614d;
    }

    #game14-root button:focus-visible {
      outline: 3px solid #d3a63b;
      outline-offset: 3px;
    }

    #game14-root button.g14-secondary {
      background: #edf2eb;
      color: #34433f;
      border-color: #edf2eb;
    }

    #game14-root button.g14-secondary:hover {
      background: #dce8da;
    }

    #game14-root #g14-message {
      color: #365744;
      font-size: 13px;
      line-height: 1.5;
      min-height: 22px;
      margin: 14px 0 0;
    }

    #game14-root .g14-clues h3 {
      margin-top: 0;
    }

    #game14-root .g14-clues h4 {
      margin: 20px 0 8px;
      color: #527562;
      font-size: 13px;
    }

    #game14-root .g14-clues ol {
      padding-left: 25px;
      margin: 0;
    }

    #game14-root .g14-clues li {
      padding: 3px 0;
      margin-bottom: 5px;
      line-height: 1.45;
    }

    #game14-root .g14-clue-button {
      display: block;
      width: 100%;
      text-align: left;
      background: #f3f6ef;
      color: #34433f;
      font-weight: 400;
      line-height: 1.45;
      padding: 8px;
    }

    #game14-root .g14-clue-button:hover {
      background: #e7eee3;
    }

    #game14-root .g14-clue-button.g14-selected {
      background: #dcece0;
      border-color: #789b85;
    }

    #game14-root .g14-clue-button.g14-solved::after {
      content: " ✓";
      color: #365744;
      font-weight: 700;
    }

    #game14-root .g14-footer {
      text-align: center;
      color: #68776e;
      font-size: 11px;
      line-height: 1.5;
      margin: 18px 0 0;
    }

    @media (max-width: 650px) {
      #game14-root .g14-layout {
        grid-template-columns: minmax(0, 1fr);
      }

      #game14-root .g14-panel {
        padding: 13px;
      }

      #game14-root .g14-crossword {
        gap: 1px;
      }

      #game14-root .g14-cell .g14-num {
        font-size: 6px;
      }

      #game14-root .g14-cell input {
        font-size: clamp(7px, 2.4vw, 12px);
        padding-top: 4px;
      }

      #game14-root .g14-actions button {
        flex: 1 1 auto;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #game14-root *,
      #game14-root *::before,
      #game14-root *::after {
        scroll-behavior: auto !important;
        animation: none !important;
        transition: none !important;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.getElementById("game14-root");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const SIZE = 17;

      const entries = [
        {
          n: 1,
          dir: "across",
          answer: "MONASTERIOS",
          clue: "¿Qué tipo de edificios son los de San Millán?",
          r: 12,
          c: 4
        },
        {
          n: 2,
          dir: "across",
          answer: "PAISAJE",
          clue: "¿En qué se convirtió el territorio de administración monástica?",
          r: 8,
          c: 3
        },
        {
          n: 3,
          dir: "across",
          answer: "LENGUA",
          clue: "¿Qué aparece como primer ejemplo histórico en este lugar?",
          r: 5,
          c: 6
        },
        {
          n: 4,
          dir: "across",
          answer: "CULTURAL",
          clue: "¿Qué tipo de vida sobresaliente tuvo su germen en San Millán?",
          r: 6,
          c: 8
        },
        {
          n: 5,
          dir: "across",
          answer: "RIOJA",
          clue: "¿Qué región española se menciona en el resumen?",
          r: 13,
          c: 6
        },
        {
          n: 6,
          dir: "down",
          answer: "SUSO",
          clue: "¿Qué monasterio acompaña al de Yuso?",
          r: 8,
          c: 6
        },
        {
          n: 7,
          dir: "down",
          answer: "YUSO",
          clue: "¿Qué monasterio acompaña al de Suso?",
          r: 10,
          c: 8
        },
        {
          n: 8,
          dir: "down",
          answer: "ESPANOLA",
          clue: "Completa: lengua española. Escribe sin tilde.",
          r: 5,
          c: 7
        },
        {
          n: 9,
          dir: "down",
          answer: "UNESCO",
          clue: "¿Con qué organización se constituyó la fundación en 1988?",
          r: 6,
          c: 9
        },
        {
          n: 10,
          dir: "down",
          answer: "PATRIMONIO",
          clue: "¿Qué de la humanidad se declara protegido en la zona?",
          r: 7,
          c: 4
        }
      ];

      const board = root.querySelector("#g14-crossword");
      const progress = root.querySelector("#g14-progress");
      const message = root.querySelector("#g14-message");
      const acrossClues = root.querySelector("#g14-acrossClues");
      const downClues = root.querySelector("#g14-downClues");

      const inputs = new Map();
      const positions = new Map();
      const grid = Array.from(
        { length: SIZE },
        () => Array(SIZE).fill(null)
      );

      const key = (r, c) => r + "," + c;

      function clean(value) {
        return value
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase()
          .replace(/[^A-Z]/g, "");
      }

      function getPositions(entry) {
        return Array.from(entry.answer).map((letter, i) => ({
          r: entry.r + (entry.dir === "down" ? i : 0),
          c: entry.c + (entry.dir === "across" ? i : 0),
          letter
        }));
      }

      for (const entry of entries) {
        const cells = getPositions(entry);
        positions.set(entry.n, cells);

        for (const p of cells) {
          if (
            p.r < 0 || p.r >= SIZE ||
            p.c < 0 || p.c >= SIZE
          ) {
            message.textContent = "No se ha podido construir el tablero.";
            return;
          }

          const existing = grid[p.r][p.c];

          if (existing && existing.letter !== p.letter) {
            message.textContent = "Hay un error en el diseño del crucigrama.";
            return;
          }

          if (!grid[p.r][p.c]) {
            grid[p.r][p.c] = {
              letter: p.letter,
              entries: []
            };
          }

          grid[p.r][p.c].entries.push(entry.n);
        }
      }

      for (const entry of entries) {
        const hasCrossing = positions.get(entry.n).some(p =>
          grid[p.r][p.c].entries.length > 1
        );

        if (!hasCrossing) {
          message.textContent = "No se ha podido construir el crucigrama.";
          return;
        }
      }

      function getInput(p) {
        return inputs.get(key(p.r, p.c));
      }

      const numberAt = new Map();
      entries.forEach(entry => {
        numberAt.set(key(entry.r, entry.c), entry.n);
      });

      let activeWord = 1;

      // Crear el tablero.
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          const data = grid[r][c];

          if (!data) {
            const blank = document.createElement("div");
            blank.className = "g14-cell g14-block";
            blank.setAttribute("aria-hidden", "true");
            board.appendChild(blank);
            continue;
          }

          const cell = document.createElement("div");
          cell.className = "g14-cell";

          if (numberAt.has(key(r, c))) {
            const number = document.createElement("span");
            number.className = "g14-num";
            number.textContent = numberAt.get(key(r, c));
            cell.appendChild(number);
          }

          const input = document.createElement("input");
          input.type = "text";
          input.maxLength = 1;
          input.autocomplete = "off";
          input.spellcheck = false;
          input.inputMode = "text";
          input.dataset.r = r;
          input.dataset.c = c;
          input.dataset.words = data.entries.join(",");
          input.setAttribute(
            "aria-label",
            "Fila " + (r + 1) + ", columna " + (c + 1) +
            (numberAt.has(key(r, c)) ? ", inicio de palabra " + numberAt.get(key(r, c)) : "")
          );

          cell.appendChild(input);
          board.appendChild(cell);
          inputs.set(key(r, c), input);

          input.addEventListener("focus", () => selectCell(input));

          input.addEventListener("input", () => {
            const value = clean(input.value);
            input.value = value.slice(-1);
            updateProgress();

            if (input.value) moveNext(input);
          });

          input.addEventListener("keydown", event => {
            if (event.key === "Backspace" && !input.value) {
              const cells = positions.get(activeWord);
              const index = cells.findIndex(p => getInput(p) === input);

              if (index > 0) {
                event.preventDefault();
                getInput(cells[index - 1]).focus();
              }
            }

            if (event.key === "ArrowRight") {
              event.preventDefault();
              moveToAdjacent(input, 0, 1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              moveToAdjacent(input, 0, -1);
            } else if (event.key === "ArrowDown") {
              event.preventDefault();
              moveToAdjacent(input, 1, 0);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              moveToAdjacent(input, -1, 0);
            }
          });
        }
      }

      function moveToAdjacent(input, rowDelta, colDelta) {
        const r = Number(input.dataset.r) + rowDelta;
        const c = Number(input.dataset.c) + colDelta;
        const next = inputs.get(key(r, c));
        if (next) next.focus();
      }

      // Crear las pistas.
      for (const entry of entries) {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.type = "button";
        button.className = "g14-clue-button";
        button.dataset.word = entry.n;
        button.textContent = entry.n + ". " + entry.clue;
        button.setAttribute("aria-label", entry.n + ". " + entry.clue);

        button.addEventListener("click", () => {
          activeWord = entry.n;
          const firstInput = getInput(positions.get(entry.n)[0]);
          if (firstInput) firstInput.focus();
        });

        li.appendChild(button);

        (entry.dir === "across" ? acrossClues : downClues).appendChild(li);
      }

      function selectCell(input) {
        const available = input.dataset.words.split(",").map(Number);

        if (!available.includes(activeWord)) {
          activeWord = available[0];
        }

        root.querySelectorAll(".g14-cell").forEach(cell => {
          cell.classList.remove("g14-active", "g14-in-word");
        });

        positions.get(activeWord).forEach(p => {
          const target = getInput(p);
          if (target) target.parentElement.classList.add("g14-in-word");
        });

        input.parentElement.classList.add("g14-active");

        root.querySelectorAll(".g14-clue-button").forEach(button => {
          button.classList.toggle(
            "g14-selected",
            Number(button.dataset.word) === activeWord
          );
        });
      }

      function moveNext(input) {
        const cells = positions.get(activeWord);
        const index = cells.findIndex(p => getInput(p) === input);

        for (let i = index + 1; i < cells.length; i++) {
          const next = getInput(cells[i]);
          if (next) {
            next.focus();
            return;
          }
        }
      }

      function isCorrect(entry) {
        return positions.get(entry.n).every((p, i) => {
          const input = getInput(p);
          return input && clean(input.value) === entry.answer[i];
        });
      }

      function updateProgress() {
        const solved = entries.filter(isCorrect).length;
        progress.textContent = solved + "/10";

        root.querySelectorAll(".g14-clue-button").forEach(button => {
          const entry = entries.find(
            e => e.n === Number(button.dataset.word)
          );

          if (entry) {
            button.classList.toggle("g14-solved", isCorrect(entry));
          }
        });
      }

      root.querySelector("#g14-checkBtn").addEventListener("click", () => {
        updateProgress();

        const solved = entries.filter(isCorrect).length;

        message.textContent = solved === 10
          ? "¡Enhorabuena! ¡Has completado el crucigrama! 🎉"
          : "Tienes " + solved + " de 10 palabras correctas. ¡Sigue intentándolo!";
      });

      root.querySelector("#g14-revealBtn").addEventListener("click", () => {
        entries.forEach(entry => {
          positions.get(entry.n).forEach((p, i) => {
            const input = getInput(p);
            if (input) input.value = entry.answer[i];
          });
        });

        updateProgress();
        message.textContent = "¡Soluciones completadas!";
      });

      root.querySelector("#g14-resetBtn").addEventListener("click", () => {
        inputs.forEach(input => {
          input.value = "";
        });

        activeWord = 1;
        updateProgress();
        message.textContent = "Partida reiniciada. ¡Todas las palabras están por descubrir!";
        const firstInput = getInput(positions.get(1)[0]);
        if (firstInput) firstInput.focus();
      });

      updateProgress();
      const firstInput = getInput(positions.get(1)[0]);
      if (firstInput) firstInput.focus();
    })();
  `
}
  };

  const pointsLayer = document.getElementById("map-points");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("place-modal");
  const closeButton = document.getElementById("modal-close");
  const playButton = document.getElementById("play-game");
  const backButton = document.getElementById("back-to-place");
  const placeView = document.getElementById("place-view");
  const gameView = document.getElementById("game-view");
  const title = document.getElementById("modal-title");
  const subtitle = document.getElementById("modal-subtitle");
  const image = document.getElementById("place-image");
  const caption = document.getElementById("place-caption");
  const description = document.getElementById("place-description");
  const sheetYear = document.getElementById("sheet-year");
  const sheetLocation = document.getElementById("sheet-location");
  const gameTitle = document.getElementById("game-title");
  const gameInstructions = document.getElementById("game-instructions");
  const gameCounter = document.getElementById("game-counter");
  const gameMount = document.getElementById("game-mount");

  let selectedPlace = null;
  let previousFocus = null;

  function openPlace(place, trigger) {
    selectedPlace = place;
    previousFocus = trigger || document.activeElement;
    title.textContent = `${place.id}. ${place.name}`;
    subtitle.textContent = place.subtitle;
    image.src = place.image;
    image.alt = `Imagen ilustrativa de ${place.name}`;
    caption.textContent = place.caption;
    sheetYear.textContent = place.year;
    sheetLocation.textContent = place.location;
    description.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = place.name;
    const paragraph = document.createElement("p");
    paragraph.textContent = place.description;
    description.append(heading, paragraph);
    placeView.hidden = false;
    gameView.hidden = true;
    stopGame();
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closeModal() {
    stopGame();
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  function stopGame() {
    const frame = gameMount.querySelector("iframe");
    if (frame) frame.src = "about:blank";
    gameMount.replaceChildren();
  }

  function startGame() {
    if (!selectedPlace) return;
    const game = games[selectedPlace.game];
    if (!game) return;
    gameTitle.textContent = game.title;
    gameInstructions.textContent = game.instructions;
    gameCounter.textContent = `Punto ${selectedPlace.id} de 14`;
    gameMount.replaceChildren();

    const frame = document.createElement("iframe");
    frame.className = "game-frame";
    frame.title = `Minijuego: ${game.title}`;
    frame.setAttribute("sandbox", "allow-scripts allow-forms allow-modals");
    frame.setAttribute("loading", "eager");
    frame.srcdoc = buildGameDocument(game);
    gameMount.appendChild(frame);

    placeView.hidden = true;
    gameView.hidden = false;
    frame.addEventListener("load", () => {
      try { frame.contentWindow.focus(); } catch (_) {}
    }, { once: true });
    backButton.focus();
  }

  function buildGameDocument(game) {
    // El código de cada minijuego se ejecuta en un documento aislado.
    // Evita que sus estilos o sus variables alteren el mapa principal.
    const safeCss = game.css.replace(/<\/style/gi, "<\\/style");
    const safeJs = game.js.replace(/<\/script/gi, "<\\/script");
    const safeHtml = game.html.replace(/<\/body/gi, "<\\/body");
    return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; min-height: 100%; }
  body { padding: 16px; font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; color: #20332b; background: #fffdf7; }
  button, input, select, textarea { font: inherit; }
  button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 3px solid #125ec5; outline-offset: 3px; }
  img, svg, canvas, video { max-width: 100%; }
  ${safeCss}
</style>
</head>
<body>
${safeHtml}
<script>
try {
${safeJs}
} catch (error) {
  const errorBox = document.createElement("p");
  errorBox.setAttribute("role", "alert");
  errorBox.textContent = "No se ha podido iniciar este minijuego. Revisa su código JavaScript.";
  document.body.appendChild(errorBox);
  console.error(error);
}
<\/script>
</body>
</html>`;
  }

  places.forEach(place => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-pin";
    button.textContent = place.id;
    button.style.left = `${place.x}%`;
    button.style.top = `${place.y}%`;
    button.setAttribute("aria-label", `Abrir punto ${place.id}: ${place.name}`);
    button.addEventListener("click", () => openPlace(place, button));
    pointsLayer.appendChild(button);
  });

  playButton.addEventListener("click", startGame);
  backButton.addEventListener("click", () => {
    stopGame();
    gameView.hidden = true;
    placeView.hidden = false;
    playButton.focus();
  });
  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !backdrop.hidden) closeModal();
    if (event.key === "Tab" && !backdrop.hidden) {
      const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe')].filter(el => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();

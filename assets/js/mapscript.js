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
  title: "🧩 El puzzle de la Menorca Talayótica",
  instructions: "Encuentra la afirmación falsa en cada ronda y consigue los tres puntos.",

  html: String.raw`
    <div class="game-game4">
      <header class="game-header">
        <h1>🧩 El puzzle de la Menorca Talayótica</h1>
        <p>¡Encuentra la respuesta falsa de cada página!</p>
        <div class="progress" id="g4-progress" aria-live="polite">
          Ronda 1 de 3
        </div>
      </header>

      <main class="game-main">
        <section class="page pink active" data-page="1">
          <h2>Ronda 1 · ¿Qué es?</h2>
          <p class="instructions">Elige la afirmación falsa.</p>

          <div class="puzzle">
            <button type="button" class="piece top" data-false="false">
              Espacios funerarios
            </button>
            <button type="button" class="piece left" data-false="false">
              Paisaje cultural
            </button>
            <div class="piece center">¿QUÉ ES?</div>
            <button type="button" class="piece right" data-false="true">
              Propiedad privada
            </button>
            <button type="button" class="piece bottom" data-false="false">
              Lugar sagrado
            </button>
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
            <button type="button" class="piece top" data-false="false">
              Naveta des Tudons
            </button>
            <button type="button" class="piece left" data-false="false">
              Talayots
            </button>
            <div class="piece center">CONTIENE</div>
            <button type="button" class="piece right" data-false="true">
              Estatuas
            </button>
            <button type="button" class="piece bottom" data-false="false">
              Recintos de taula
            </button>
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
            <button type="button" class="piece top" data-false="false">
              Creado 1200 a. C.
            </button>
            <button type="button" class="piece left" data-false="false">
              280 yacimientos
            </button>
            <div class="piece center">DATOS<br>CURIOSOS</div>
            <button type="button" class="piece right" data-false="false">
              Está en Menorca
            </button>
            <button type="button" class="piece bottom" data-false="true">
              Que se encuentran en París
            </button>
          </div>

          <p class="status" aria-live="polite"></p>

          <div class="navigation">
            <button type="button" class="nav-btn prev-btn">← Anterior</button>
            <button type="button" class="check-btn">Comprobar</button>
            <button type="button" class="nav-btn finish-btn">Ver resultado 🏆</button>
          </div>
        </section>
      </main>

      <section class="result" hidden aria-labelledby="g4-result-title">
        <h2 id="g4-result-title">🏆 ¡Juego terminado!</h2>
        <p class="score"></p>
        <p class="message" aria-live="polite"></p>
        <button type="button" class="restart-btn">Volver a jugar 🔄</button>
      </section>
    </div>
  `,

  css: String.raw`
    .game-game4 {
      box-sizing: border-box;
      width: 100%;
      padding: 12px 8px 24px;
      font-family: "Trebuchet MS", Arial, sans-serif;
      color: #342d43;
      text-align: center;
    }

    .game-game4 *,
    .game-game4 *::before,
    .game-game4 *::after {
      box-sizing: border-box;
    }

    .game-game4 .game-header {
      max-width: 800px;
      margin: 0 auto 24px;
    }

    .game-game4 .game-header h1 {
      margin: 8px 0 12px;
      color: #49355c;
      font-size: clamp(23px, 4vw, 34px);
      line-height: 1.2;
    }

    .game-game4 .game-header p {
      line-height: 1.5;
    }

    .game-game4 .progress {
      display: inline-block;
      margin-top: 8px;
      padding: 8px 17px;
      border-radius: 30px;
      background: #eee7f8;
      font-weight: bold;
    }

    .game-game4 .page {
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

    .game-game4 .page.active {
      display: block;
      animation: g4-appear 0.3s ease;
    }

    .game-game4 .page[hidden],
    .game-game4 .result[hidden] {
      display: none !important;
    }

    .game-game4 .pink {
      --dark: #a82f68;
      --light: #f5c6db;
    }

    .game-game4 .blue {
      --dark: #173f78;
      --light: #c3e1ff;
    }

    .game-game4 .green {
      --dark: #205c42;
      --light: #c9edcf;
    }

    .game-game4 .page h2 {
      margin-top: 4px;
      color: var(--dark);
    }

    .game-game4 .instructions {
      color: #71697b;
    }

    .game-game4 .puzzle {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(3, minmax(95px, auto));
      gap: 9px;
      max-width: 590px;
      margin: 30px auto;
      overflow: visible;
    }

    .game-game4 .piece {
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

    .game-game4 .piece:not(.center)::before,
    .game-game4 .piece:not(.center)::after {
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

    .game-game4 .piece:not(.center)::before {
      top: -13px;
      left: calc(50% - 12px);
    }

    .game-game4 .piece:not(.center)::after {
      top: calc(50% - 12px);
      right: -13px;
    }

    .game-game4 .piece.top::before {
      display: none;
    }

    .game-game4 .piece.left::after,
    .game-game4 .piece.bottom::after {
      display: none;
    }

    .game-game4 .piece.top {
      grid-column: 2;
      grid-row: 1;
    }

    .game-game4 .piece.left {
      grid-column: 1;
      grid-row: 2;
    }

    .game-game4 .piece.center {
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

    .game-game4 .piece.right {
      grid-column: 3;
      grid-row: 2;
    }

    .game-game4 .piece.bottom {
      grid-column: 2;
      grid-row: 3;
    }

    .game-game4 .piece:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px #0000001b;
    }

    .game-game4 .piece:focus-visible,
    .game-game4 button:focus-visible {
      outline: 3px solid #111827;
      outline-offset: 3px;
    }

    .game-game4 .piece.selected {
      outline: 4px solid var(--dark);
      outline-offset: -5px;
    }

    .game-game4 .piece.correct {
      --piece-color: #b8e8c1;
      background: #b8e8c1;
      border-color: #288347;
      color: #164e29;
    }

    .game-game4 .piece.incorrect {
      --piece-color: #ffd0cc;
      background: #ffd0cc;
      border-color: #cf4949;
      color: #812727;
    }

    .game-game4 .piece:disabled {
      cursor: default;
      opacity: 1;
    }

    .game-game4 .status {
      min-height: 28px;
      margin: 12px auto;
      font-weight: bold;
      line-height: 1.5;
    }

    .game-game4 .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    .game-game4 .nav-btn,
    .game-game4 .check-btn,
    .game-game4 .restart-btn {
      padding: 12px 17px;
      border: none;
      border-radius: 12px;
      font-family: inherit;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
    }

    .game-game4 .nav-btn {
      background: #eae5f0;
      color: #413451;
    }

    .game-game4 .check-btn,
    .game-game4 .restart-btn {
      background: #49355c;
      color: #fff;
    }

    .game-game4 .nav-btn:hover:not(:disabled),
    .game-game4 .check-btn:hover,
    .game-game4 .restart-btn:hover {
      transform: translateY(-2px);
    }

    .game-game4 .nav-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .game-game4 .result {
      max-width: 600px;
      margin: 25px auto;
      padding: 25px 18px;
      border-radius: 22px;
      background: #eee7f8;
      line-height: 1.6;
    }

    .game-game4 .result h2 {
      color: #49355c;
    }

    @keyframes g4-appear {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 480px) {
      .game-game4 {
        padding: 8px 2px 20px;
      }

      .game-game4 .page {
        padding: 18px 7px;
      }

      .game-game4 .puzzle {
        gap: 5px;
        grid-template-rows: repeat(3, minmax(82px, auto));
        margin: 24px auto;
      }

      .game-game4 .piece {
        min-height: 82px;
        padding: 8px 4px;
        border-radius: 10px;
      }

      .game-game4 .piece:not(.center)::before,
      .game-game4 .piece:not(.center)::after {
        width: 18px;
        height: 18px;
      }

      .game-game4 .piece:not(.center)::before {
        top: -10px;
        left: calc(50% - 9px);
      }

      .game-game4 .piece:not(.center)::after {
        top: calc(50% - 9px);
        right: -10px;
      }

      .game-game4 .navigation {
        gap: 7px;
      }

      .game-game4 .nav-btn,
      .game-game4 .check-btn,
      .game-game4 .restart-btn {
        padding: 11px 10px;
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .game-game4 .page.active {
        animation: none;
      }

      .game-game4 .piece,
      .game-game4 .nav-btn,
      .game-game4 .check-btn,
      .game-game4 .restart-btn {
        transition: none;
      }
    }
  `,

  js: String.raw`
    (() => {
      const root = document.querySelector(".game-game4");
      if (!root || root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";

      const pages = [...root.querySelectorAll(".page")];
      const progress = root.querySelector("#g4-progress");
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
    game5: {
      title: "Minijuego 5",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 5 pendiente</h4><p>El juego del punto 5 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 5.`
    },
    game6: {
      title: "Minijuego 6",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 6 pendiente</h4><p>El juego del punto 6 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 6.`
    },
    game7: {
      title: "Minijuego 7",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 7 pendiente</h4><p>El juego del punto 7 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 7.`
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
      title: "Minijuego 9",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 9 pendiente</h4><p>El juego del punto 9 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 9.`
    },
    game10: {
      title: "Minijuego 10",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 10 pendiente</h4><p>El juego del punto 10 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 10.`
    },
    game11: {
      title: "Minijuego 11",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 11 pendiente</h4><p>El juego del punto 11 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 11.`
    },
    game12: {
      title: "Minijuego 12",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 12 pendiente</h4><p>El juego del punto 12 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 12.`
    },
    game13: {
      title: "Minijuego 13",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 13 pendiente</h4><p>El juego del punto 13 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 13.`
    },
    game14: {
      title: "Minijuego 14",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 14 pendiente</h4><p>El juego del punto 14 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 14.`
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

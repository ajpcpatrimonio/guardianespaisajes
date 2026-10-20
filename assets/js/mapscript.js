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
    game2: {
      title: "Minijuego 2",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 2 pendiente</h4><p>El juego del punto 2 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 2.`
    },
    game1: {
      title: "Minijuego 3",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 3 pendiente</h4><p>El juego del punto 3 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 3.`
    },
    game4: {
      title: "Minijuego 4",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 4 pendiente</h4><p>El juego del punto 4 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 4.`
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

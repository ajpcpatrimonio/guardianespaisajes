(() => {
  "use strict";

  const IMAGE_URL = "https://www.alianzapaisajesculturales.org/wp-content/uploads/2018/05/Antonio-Castillo-L%C3%B3pez-3.jpg";

  // Los 14 puntos del mapa. Cambia nombres, descripciones, imágenes y coordenadas aquí.
  const places = [
    { id: 1, name: "Paisaje Cultural de Aranjuez", x: 21, y: 20, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game1" },
    { id: 2, name: "Jardines históricos", x: 25, y: 29, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game2" },
    { id: 3, name: "Palacio Real", x: 43, y: 37, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game3" },
    { id: 4, name: "Río Tajo", x: 53, y: 58, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game4" },
    { id: 5, name: "Río Jarama", x: 76, y: 45, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game5" },
    { id: 6, name: "Huertas históricas", x: 13, y: 76, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game6" },
    { id: 7, name: "Paseos arbolados", x: 70, y: 82, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game7" },
    { id: 8, name: "Fuentes monumentales", x: 63, y: 25, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game8" },
    { id: 9, name: "Paisaje agrícola", x: 30, y: 83, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game9" },
    { id: 10, name: "Arquitectura histórica", x: 48, y: 27, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game10" },
    { id: 11, name: "Sistema hidráulico", x: 83, y: 28, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game11" },
    { id: 12, name: "Biodiversidad", x: 85, y: 66, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game12" },
    { id: 13, name: "Patrimonio y memoria", x: 36, y: 52, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game13" },
    { id: 14, name: "Urbanismo ilustrado", x: 57, y: 73, subtitle: "Una obra excepcional donde se unen naturaleza, agua y arquitectura.", description: "El Paisaje Cultural de Aranjuez destaca por ser una excepcional obra de arte donde la arquitectura, la naturaleza y la intervención humana se fusionan en perfecta armonía a orillas de los ríos Tajo y Jarama. Declarado Patrimonio de la Humanidad por la UNESCO en 2001, este singular espacio representa la máxima expresión del urbanismo ilustrado y los jardines históricos en España, integrando la majestuosidad de su Palacio Real con intrincados sistemas hidráulicos, huertas tradicionales y sotos centenarios que transformaron un entorno árido en un oasis residencial para la monarquía española.", recognition: "Patrimonio Mundial", year: "UNESCO · 2001", values: "Naturaleza, agua y arquitectura", image: IMAGE_URL, game: "game14" }
  ];

  /*
   * ZONAS DE LOS 14 MINIJUEGOS
   * Cada juego está aislado en un iframe: su HTML, CSS y JavaScript no interfieren
   * con el mapa ni con los otros juegos.
   *
   * Cuando recibas un minijuego, pega el contenido de sus tres paneles en el
   * objeto gameN correspondiente: html, css y js.
   *
   * Nota: pega el CONTENIDO de los paneles, no las etiquetas <html>, <head>,
   * <body>, <style> ni <script>. Si el código usa bibliotecas externas,
   * añade sus enlaces CDN dentro del HTML del minijuego.
   *
   * Si el JavaScript recibido contiene etiquetas <script>, quítalas antes de
   * pegarlo. El código se ejecutará dentro del iframe del juego.
   *
   * Para que el pegado sea directo, estos bloques usan String.raw`...`.
   * Si el código que recibas contiene el carácter de acento grave `, cámbialo
   * por una comilla normal o escápalo como \` dentro de ese bloque.
   */
  const games = {
    game1: {
      title: "Reconstruye el paisaje",
      instructions: "Desliza las 16 piezas hasta reconstruir la fotografía de Aranjuez. Puedes jugar con ratón, pantalla táctil o teclado.",
      html: String.raw`<main class="game-container">
  <header class="game-header">
    <p class="eyebrow">PATRIMONIO CULTURAL</p>
    <h1>Reconstruye el paisaje</h1>
    <p class="intro">
      Desliza las piezas hasta reconstruir la fotografía.
      Puedes utilizar el ratón, la pantalla táctil o el teclado.
    </p>
  </header>

  <section class="game-layout" aria-label="Juego de rompecabezas">
    <div class="puzzle-section">
      <div class="board-heading">
        <h2>El rompecabezas</h2>
        <span class="piece-count">16 piezas · 4 × 4</span>
      </div>
      <div id="puzzle" class="puzzle-board" role="group"
        aria-label="Tablero de rompecabezas de cuatro filas y cuatro columnas"></div>
      <p class="keyboard-help" id="keyboard-instructions-visible">
        <strong>Cómo jugar:</strong> selecciona una pieza situada junto
        al espacio vacío para moverla. Con el teclado, enfoca una pieza
        y utiliza las flechas cuando el movimiento sea posible.
      </p>
      <div class="options">
        <label class="toggle-option">
          <input type="checkbox" id="show-numbers">
          Mostrar números de las piezas
        </label>
      </div>
    </div>
    <aside class="game-sidebar" aria-label="Información de la partida">
      <div class="stats">
        <div class="stat">
          <span class="stat-label">Movimientos</span>
          <strong id="moves">0</strong>
        </div>
        <div class="stat">
          <span class="stat-label">Tiempo</span>
          <strong id="timer">00:00</strong>
        </div>
      </div>
      <div class="controls">
        <button id="shuffle" class="button button-primary" type="button">Mezclar piezas</button>
        <button id="restart" class="button button-secondary" type="button">Reiniciar partida</button>
      </div>
      <p id="status" class="status-message" role="status" aria-live="polite" aria-atomic="true">
        Pulsa «Mezclar piezas» para comenzar.
      </p>
      <div class="reference">
        <h2>Imagen original</h2>
        <img
          src="https://www.alianzapaisajesculturales.org/wp-content/uploads/2018/05/Antonio-Castillo-L%C3%B3pez-3.jpg"
          alt="Vista aérea de un conjunto monumental rodeado de jardines y edificios, con globos aerostáticos sobrevolando el paisaje."
          class="reference-image">
        <p class="image-credit">
          Fotografía original:
          <a href="https://www.alianzapaisajesculturales.org/wp-content/uploads/2018/05/Antonio-Castillo-L%C3%B3pez-3.jpg"
             target="_blank" rel="noopener noreferrer">Alianza de Paisajes Culturales</a>
        </p>
      </div>
    </aside>
  </section>
  <footer class="game-footer">
    <p>Explora, observa y descubre el patrimonio cultural.</p>
  </footer>
</main>`,
      css: String.raw`:root {
  --color-bg: #f5f3ed;
  --color-surface: #ffffff;
  --color-text: #202b35;
  --color-muted: #4b5965;
  --color-primary: #174d43;
  --color-primary-hover: #10382f;
  --color-border: #aab5b0;
  --color-focus: #c24b00;
}
* { box-sizing: border-box; }
body {
  margin: 0; background: var(--color-bg); color: var(--color-text);
  font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.6;
}
button, input { font: inherit; }
.game-container { width: min(1100px, 100%); margin: 0 auto; padding: 20px 16px; }
.game-header { max-width: 720px; margin-bottom: 24px; }
.game-container .eyebrow { color: var(--color-primary); font-size: .82rem; font-weight: 800; letter-spacing: .12em; }
.game-container h1 { margin: 0 0 12px; font-size: clamp(1.8rem, 5vw, 2.7rem); line-height: 1.15; }
.intro { max-width: 650px; color: var(--color-muted); }
.game-layout { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(220px, .8fr); gap: 20px; align-items: start; }
.puzzle-section, .game-sidebar { min-width: 0; }
.board-heading { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 14px; }
.game-container h2 { margin: 0; font-size: 1.2rem; }
.piece-count { color: var(--color-muted); font-size: .9rem; }
.puzzle-board {
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 3px;
  width: 100%; aspect-ratio: 1; padding: 3px; overflow: hidden;
  background: #24332f; border: 2px solid #24332f; border-radius: 8px;
}
.puzzle-tile {
  position: relative; min-width: 0; min-height: 0; padding: 0; border: 0; border-radius: 2px;
  background-color: #d5dcd8;
  background-image: url("https://www.alianzapaisajesculturales.org/wp-content/uploads/2018/05/Antonio-Castillo-L%C3%B3pez-3.jpg");
  background-repeat: no-repeat; background-size: 400% 400%; cursor: pointer; touch-action: manipulation;
}
.puzzle-tile:hover:not(:disabled) { filter: brightness(1.1); }
.puzzle-tile:focus-visible, .button:focus-visible, input:focus-visible, a:focus-visible {
  outline: 4px solid var(--color-focus); outline-offset: 3px; z-index: 2;
}
.puzzle-tile:disabled { cursor: default; }
.puzzle-tile.empty { background-image: none; background-color: #24332f; cursor: default; }
.tile-number {
  display: none; position: absolute; top: 4px; left: 4px; min-width: 26px; min-height: 26px;
  padding: 2px 5px; border-radius: 5px; background: #fff; color: #17221f;
  font-size: .85rem; font-weight: 800; line-height: 1.5; text-align: center; box-shadow: 0 1px 4px #0006;
}
.show-numbers .tile-number { display: block; }
.keyboard-help { margin: 16px 0; color: var(--color-muted); font-size: .92rem; }
.options { margin-top: 12px; }
.toggle-option { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.toggle-option input { width: 20px; height: 20px; accent-color: var(--color-primary); }
.game-sidebar { display: flex; flex-direction: column; gap: 18px; padding: 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; }
.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.stat { padding: 10px; background: var(--color-bg); border-radius: 8px; }
.stat-label { display: block; color: var(--color-muted); font-size: .82rem; }
.stat strong { display: block; font-size: 1.5rem; font-variant-numeric: tabular-nums; }
.controls { display: grid; gap: 10px; }
.button { width: 100%; min-height: 44px; padding: 10px 12px; border: 2px solid var(--color-primary); border-radius: 8px; font-weight: 700; cursor: pointer; }
.button-primary { background: var(--color-primary); color: #fff; }
.button-primary:hover { background: var(--color-primary-hover); }
.button-secondary { background: #fff; color: var(--color-primary); }
.button-secondary:hover { background: #eaf0ed; }
.status-message { min-height: 52px; margin: 0; padding: 12px; background: #eaf0ed; border-left: 4px solid var(--color-primary); border-radius: 4px; overflow-wrap: anywhere; }
.reference h2 { margin-bottom: 10px; }
.reference-image { display: block; width: 100%; height: auto; border-radius: 8px; }
.image-credit { margin-bottom: 0; color: var(--color-muted); font-size: .82rem; overflow-wrap: anywhere; }
.game-container a { color: #174d43; text-decoration-thickness: 2px; text-underline-offset: 3px; }
.game-footer { margin-top: 24px; padding-top: 12px; border-top: 1px solid var(--color-border); color: var(--color-muted); text-align: center; }
@media (max-width: 650px) {
  .game-layout { grid-template-columns: 1fr; gap: 20px; }
  .game-sidebar { padding: 14px; }
  .game-container { padding: 14px 8px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
@media (forced-colors: active) {
  .puzzle-tile:focus-visible, .button:focus-visible { outline: 3px solid Highlight; }
  .button-primary { border: 2px solid ButtonText; }
}`,
      js: String.raw`const SIZE = 4;
const TOTAL = SIZE * SIZE;
const puzzle = document.getElementById("puzzle");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");
const shuffleButton = document.getElementById("shuffle");
const restartButton = document.getElementById("restart");
const showNumbers = document.getElementById("show-numbers");

let board = [];
let moves = 0;
let seconds = 0;
let timerInterval = null;
let started = false;
let completed = false;

function isSolved() {
  return board.every((value, index) => value === (index === TOTAL - 1 ? 0 : index + 1));
}

function getAdjacent(index) {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  const adjacent = [];
  if (row > 0) adjacent.push(index - SIZE);
  if (row < SIZE - 1) adjacent.push(index + SIZE);
  if (col > 0) adjacent.push(index - 1);
  if (col < SIZE - 1) adjacent.push(index + 1);
  return adjacent;
}

function updateStats() {
  movesDisplay.textContent = String(moves);
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerDisplay.textContent = minutes + ":" + secs;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  if (started || completed) return;
  started = true;
  timerInterval = setInterval(() => {
    seconds++;
    updateStats();
  }, 1000);
}

function resetStats() {
  stopTimer();
  moves = 0;
  seconds = 0;
  started = false;
  completed = false;
  updateStats();
}

function renderBoard(focusIndex = -1) {
  puzzle.replaceChildren();
  puzzle.classList.toggle("show-numbers", showNumbers.checked);

  board.forEach((value, index) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "puzzle-tile";
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;

    if (value === 0) {
      tile.classList.add("empty");
      tile.disabled = true;
      tile.setAttribute("aria-label", "Espacio vacío");
      tile.setAttribute("tabindex", "-1");
    } else {
      const originalIndex = value - 1;
      const originalRow = Math.floor(originalIndex / SIZE);
      const originalCol = originalIndex % SIZE;
      tile.style.backgroundPosition =
        (originalCol * 100 / (SIZE - 1)) + "% " + (originalRow * 100 / (SIZE - 1)) + "%";
      tile.setAttribute(
        "aria-label",
        "Pieza " + value + ", fila " + (originalRow + 1) + ", columna " + (originalCol + 1) +
        ". Posición actual: fila " + (row + 1) + ", columna " + (col + 1) + "."
      );
      tile.setAttribute("aria-describedby", "keyboard-instructions-visible");
      const number = document.createElement("span");
      number.className = "tile-number";
      number.setAttribute("aria-hidden", "true");
      number.textContent = String(value);
      tile.appendChild(number);
      tile.addEventListener("click", () => moveTile(index));
      tile.addEventListener("keydown", event => {
        const directions = { ArrowUp: -SIZE, ArrowDown: SIZE, ArrowLeft: -1, ArrowRight: 1 };
        if (!(event.key in directions)) return;
        const target = index + directions[event.key];
        if ((event.key === "ArrowLeft" && col === 0) ||
            (event.key === "ArrowRight" && col === SIZE - 1)) return;
        if (target >= 0 && target < TOTAL && board[target] === 0) {
          event.preventDefault();
          moveTile(index);
        }
      });
    }
    puzzle.appendChild(tile);
  });

  if (focusIndex >= 0 && board[focusIndex] !== 0) {
    puzzle.children[focusIndex]?.focus();
  }
}

function moveTile(index) {
  if (completed) return;
  const emptyIndex = board.indexOf(0);
  if (!getAdjacent(emptyIndex).includes(index)) {
    statusDisplay.textContent = "Movimiento no válido. Elige una pieza junto al espacio vacío.";
    return;
  }
  startTimer();
  [board[index], board[emptyIndex]] = [board[emptyIndex], board[index]];
  moves++;
  updateStats();

  if (isSolved()) {
    completed = true;
    stopTimer();
    renderBoard();
    statusDisplay.textContent =
      "¡Enhorabuena! Has reconstruido la imagen en " + moves +
      " movimientos y " + timerDisplay.textContent + ".";
    return;
  }
  renderBoard(index);
  statusDisplay.textContent = "Movimiento " + moves + ". Sigue reconstruyendo la imagen.";
}

function shuffleBoard() {
  stopTimer();
  board = Array.from({ length: TOTAL }, (_, index) => index === TOTAL - 1 ? 0 : index + 1);
  let emptyIndex = TOTAL - 1;
  let lastIndex = -1;

  for (let i = 0; i < 250; i++) {
    let options = getAdjacent(emptyIndex).filter(index => index !== lastIndex);
    if (options.length === 0) options = getAdjacent(emptyIndex);
    const nextIndex = options[Math.floor(Math.random() * options.length)];
    [board[emptyIndex], board[nextIndex]] = [board[nextIndex], board[emptyIndex]];
    lastIndex = emptyIndex;
    emptyIndex = nextIndex;
  }

  if (isSolved()) {
    const index = getAdjacent(TOTAL - 1)[0];
    [board[TOTAL - 1], board[index]] = [board[index], board[TOTAL - 1]];
  }
  resetStats();
  renderBoard();
  statusDisplay.textContent = "Rompecabezas mezclado. ¡Encuentra el orden correcto!";
}

function restartGame() {
  stopTimer();
  board = Array.from({ length: TOTAL }, (_, index) => index === TOTAL - 1 ? 0 : index + 1);
  resetStats();
  renderBoard();
  statusDisplay.textContent = "Tablero restaurado. Pulsa «Mezclar piezas» para jugar.";
}

shuffleButton.addEventListener("click", shuffleBoard);
restartButton.addEventListener("click", restartGame);
showNumbers.addEventListener("change", () => {
  const focusedIndex = Array.prototype.indexOf.call(puzzle.children, document.activeElement);
  renderBoard(focusedIndex >= 0 ? focusedIndex : -1);
});
restartGame();`
    },
    game2: {
      title: "Minijuego 2",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 2 pendiente</h4><p>El juego del punto 2 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 2.`
    },
    game3: {
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
      title: "Minijuego 8",
      instructions: "Completa el reto de este punto.",
      html: String.raw`<section class="game-placeholder"><h4>Minijuego 8 pendiente</h4><p>El juego del punto 8 se mostrará aquí cuando pegues su código HTML, CSS y JavaScript en este bloque.</p></section>`,
      css: String.raw`body { font-family: system-ui, sans-serif; padding: 1rem; }`,
      js: String.raw`// Pega aquí el JavaScript del minijuego 8.`
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
  const description = document.getElementById("place-description");
  const sheetRecognition = document.getElementById("sheet-recognition");
  const sheetYear = document.getElementById("sheet-year");
  const sheetValues = document.getElementById("sheet-values");
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
    image.src = place.image || IMAGE_URL;
    image.alt = `Imagen ilustrativa de ${place.name}`;
    sheetRecognition.textContent = place.recognition;
    sheetYear.textContent = place.year;
    sheetValues.textContent = place.values;
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

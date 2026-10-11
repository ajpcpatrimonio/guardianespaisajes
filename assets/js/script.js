
const photos = [
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/puentevizcaya.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/SanMillanYusoSuso.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/Alhambra.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/Aranjuez.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/TerritorioMudejar.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/Sintra.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/PalmeralElche.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/MenorcaTalayotica.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/DolmenesAntequera.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/Ibiza.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/RiscoCaidoGranCanaria.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/SerraTramuntana.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/TorreHercules.jpg",
  "https://raw.githubusercontent.com/ajpcpatrimonio/guardianespaisajes/refs/heads/main/assets/img/ValldeMadriuPerafitaClaror.jpg",
];

const layers = [
  document.querySelector(".background-one"),
  document.querySelector(".background-two"),
  document.querySelector(".background-three")
];

let currentIndex = 0;
let currentLayer = 0;

// Preparar las capas
layers.forEach((layer, index) => {
  layer.classList.remove("active", "exit");
  layer.style.opacity = "";
  layer.style.transform = "";
  layer.style.transition = "";
  layer.style.backgroundImage = `url("${photos[index]}")`;
});

// Mostrar la primera imagen
layers[0].classList.add("active");

function changeBackground() {
  const nextIndex = (currentIndex + 1) % photos.length;
  const nextLayer = (currentLayer + 1) % layers.length;

  const outgoing = layers[currentLayer];
  const incoming = layers[nextLayer];

  // Preparar la siguiente imagen
  incoming.classList.remove("active", "exit");
  incoming.style.opacity = "";
  incoming.style.transform = "";
  incoming.style.transition = "";
  incoming.style.backgroundImage = `url("${photos[nextIndex]}")`;

  // Forzar el inicio de la transición
  void incoming.offsetWidth;

  // Cambiar las imágenes
  outgoing.classList.remove("active");
  outgoing.classList.add("exit");
  incoming.classList.add("active");

  currentIndex = nextIndex;
  currentLayer = nextLayer;
}

// Cambiar cada 3 segundos indefinidamente
setInterval(changeBackground, 3000);

// Botón para ir a la siguiente pantalla
document.querySelector("#next-screen").addEventListener("click", () => {
  window.location.href = "mapa.html";
});

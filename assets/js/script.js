
const photos = [
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=85"
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
  window.location.href = "siguiente-pantalla.html";
});

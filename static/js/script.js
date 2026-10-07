// 1. Array con las rutas de las imágenes (pueden ser rutas locales como "img/foto1.jpg")
const imagenes = [
  "static/images/Soporte.jfif", // Imagen 0
  "static/images/Conectividad.jfif", // Imagen 1
  "static/images/Desarrollo.jfif", // Imagen 2
  "static/images/Seguridad.jfif"  // Imagen 3
];

// 2. Variable para saber en qué imagen estamos (empezamos en la primera)
let indiceActual = 0;

// 3. La función que mueve el carrusel
function cambiarImagen(direccion) {
  // Sumamos o restamos dependiendo del botón que se hizo clic
  indiceActual = indiceActual + direccion;

  // Si nos pasamos de la última imagen, volvemos al principio (0)
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  // Si retrocedemos antes de la primera imagen, vamos a la última
  else if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  // Capturamos la etiqueta <img id="imagen-carrusel"> y le cambiamos su atributo 'src'
  document.getElementById("imagen-carrusel").src = imagenes[indiceActual];
}


const likeButton = document.querySelector("#like1");
const likeCounter = document.querySelector("#like_Counter1");

if (likeButton && likeCounter) {
  likeButton.addEventListener("click", function () {
    if(likeCounter = 24){
      likeCounter.innertext = `25`;
    }
  });
}
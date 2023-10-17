window.addEventListener('scroll', function() {
  var imageHeight = document.querySelector('.full-screen-image-wrapper').offsetHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition > imageHeight) {
    document.querySelector('.black-overlay').style.display = 'block';
  } else {
    document.querySelector('.black-overlay').style.display = 'none';
  }
});
// Obtén el enlace original y el nuevo enlace por su ID
const reservacionLink = document.getElementById('reservacion-link');
const nuevoEnlace = document.getElementById('nuevo-enlace');

// Agrega un controlador de eventos al enlace original
reservacionLink.addEventListener('click', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    reservacionLink.style.display = 'none'; // Oculta el enlace original
    nuevoEnlace.style.display = 'block'; // Muestra el nuevo enlace
});

function flipImage() {
    var imagen = document.getElementById("img1");
    var texto = document.getElementById("texto");
  
    // Añadir clase 'flipped' a la imagen para aplicar el efecto de giro
    imagen.parentElement.classList.add("flipped");
  
    // Mostrar el texto
    texto.style.display = "block";
  
    // Quitar la clase 'flipped' después de 3 segundos
    setTimeout(function() {
      imagen.parentElement.classList.remove("flipped");
      // Ocultar el texto después de quitar la clase 'flipped'
      setTimeout(function() {
        texto.style.display = "none";
      }, 800);
    }, 3000);
  }
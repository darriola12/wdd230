document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, etc.
  
    // Mostrar el banner solo si es lunes (1), martes (2) o miércoles (3)
    if (currentDay >= 1 && currentDay <= 3) {
      var banner = document.getElementById("banner");
      banner.style.display = "block";
      banner.classList.add("fadeIn"); // Agregar clase para la animación de transición
    }
    
  });



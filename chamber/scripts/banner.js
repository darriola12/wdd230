document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); 
  
    if (currentDay >= 1 && currentDay <= 3) {
      var banner = document.getElementById("banner");
      banner.style.display = "block";
      banner.classList.add("fadeIn"); 
    }
    var closeButton = document.getElementById("banner_tag");
    closeButton.addEventListener("click", function() {
      banner.style.display = "none";
    });


  });




const modeButton = document.querySelector(".slider.round");
const main = document.querySelector("main");

modeButton.addEventListener("click",() => {
    if (modeButton.parentElement.querySelector("input").checked) {
        main.style.background = "#eee";
        main.style.color = "#000";
    } else {
        main.style.background = "#000";
        main.style.color = "#fff";
    }


})
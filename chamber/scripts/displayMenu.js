const display = document.querySelector(".container2");
const  cuadrada = document.querySelector("#grid");
const  lista = document.querySelector("#list");


cuadrada.addEventListener("click", () => 
{
    display.classList.add("grid");
    display.classList.remove("list")
})


lista.addEventListener("click", () => 
{
    display.classList.add("list");
    display.classList.remove("grid");
})



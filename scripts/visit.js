localStorage.setItem("visit", 0 );
const visitCounter = document.querySelector(".visits");

let numberVisit = Number(window.localStorage.getItem("visit")) || 0;

if (numberVisit != 0)
{
    visitCounter.textContent = numberVisit;

}
else
{
    visitCounter.textContent = `This is your first visit. 🥳 Welcome!`;
}

numberVisit++;

localStorage.setItem("visit", numberVisit);

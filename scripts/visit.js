localStorage.setItem("visit", 0 );
const visit = document.querySelector(".visits");

let numberVisit = Number(window.localStorage.getItem("visit")) || 0;

if (numberVisit !==0)
{
    visit.textContent == numberVisit;

}
else
{
    visit.textContent = `This is your first visit. 🥳 Welcome!`;
}

visit++;

localStorage.setItem("visit", numberVisit);


if (!localStorage.getItem("visit")) {
    localStorage.setItem("visit", 0);
}

const visitCounter = document.querySelector(".visits");

let numberVisit = Number(localStorage.getItem("visit"));

if (numberVisit !== 0) {
    visitCounter.textContent = numberVisit;
} else {
    visitCounter.textContent = `This is your first visit. 🥳 Welcome!`;
}

numberVisit++; 

localStorage.setItem("visit", numberVisit); 

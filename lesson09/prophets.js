const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const card = document.querySelector("#cards");

const getProphets = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let section = document.createElement("section");
        let name = document.createElement("h2");
        let portrait = document.createElement("img");

        name.textContent = prophet.fullname;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.fullname);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        section.appendChild(fullName);
        section.appendChild(portrait);

        card.appendChild(section);
    });
}

getProphets();

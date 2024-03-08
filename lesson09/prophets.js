const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const card = document.querySelector("#cards");

const getProphets = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    }catch(error)
    {
        console.error("sorry", error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let section = document.createElement("section");
        let portrait = document.createElement("img");
        let fullname = document.createElement("h2");

        fullname.textContent = prophet.name;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.name );
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        section.appendChild(fullname);
        section.appendChild(portrait);

        card.appendChild(section);
    });
}

getProphets();

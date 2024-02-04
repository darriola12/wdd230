const options = 
{
    weekday : "long",
    year : "numeric",
    month: "long",
    day: "numeric"
}

const date = document.querySelector("#currentDate");
date.innerHTML = new Date().toLocaleDateString("en-US", options);

const lastmodied = document.querySelector("#lastModified");
lastmodied.innerHTML = `last time modifed: ${new Date(document.lastModified)}`

const day = lastModified.getDate();
const year = lastModified.getFullyear();

lastModified.innerHTML = `last time modified: ${day}/ ${year}`;


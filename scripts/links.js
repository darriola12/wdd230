const likesURL= "https://darriola12.github.io/wdd230/chamber/data/links.json";

const getURL = async () => {
    try {
        const getUrl = await fetch(likesURL);
        const getJSON = await getUrl.json(); 
        console.log(getJSON);
        displaylinks(getJSON.lessons);
        
    } catch (error) {
        console.error("Oops, something went wrong", error);
    }

    function displaylinks(lessons) {
        const optionCard = document.getElementById("option_card");

        lessons.forEach(element => {
            const listItem = document.createElement("li");
            listItem.classList.add("option_card");
            const anchor = document.createElement("a");
            anchor.href = element.link[0].url;
            anchor.textContent = element.lesson;
            listItem.appendChild(anchor);
            optionCard.appendChild(listItem);
        });
    }
}

getURL();

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

    function displaylinks(weeks) {
        const getdiv = document.querySelector("#section2");

        weeks.forEach(week => {
            const newUl = document.createElement("ul");
            const newIl = document.createElement("li");
            newIl.classList("description");
            const newA = document.createElement("a");

            newA.href = week.link[0].url;
            newA.textContent = week.link[0].title;

            newIl.textContent = `Week: ${week.lesson} | `;
            newIl.appendChild(newA);

            newUl.appendChild(newIl);
            getdiv.appendChild(newUl);
        });
    }
} 

getURL();
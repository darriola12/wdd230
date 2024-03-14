const wather_icon = document.querySelector(".weather-icon");
const current_temp = document.querySelector(".current_temp");
const caption  = document.querySelector("figcaption");

// coordinates = 10.097342813741907, -84.38302550624111
const url = "https://api.openweathermap.org/data/2.5/weather?lat=10.09&lon=-84.38&appid=1abbefa9b9edd623e602cf9306e0657c&units=imperial&units=imperial";

// call the API
async function getWeather() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getWeather();

function displayResults(data) {
    current_temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    wather_icon.setAttribute('src', iconsrc)
    wather_icon.setAttribute('alt', desc)
    captionDesc.textContent = desc;
}


const wather_icon = document.querySelector(".weather-icon");
const current_temp = document.querySelector(".current_temp");
const caption  = document.querySelector("figcaption");

// coordinates = 10.297763872080644,  -85.84115989786345
const url = "https://api.openweathermap.org/data/2.5/weather?lat=10.29&lon=-85.84&appid=1abbefa9b9edd623e602cf9306e0657c&units=imperial&units=imperial";
const forecastDiv = document.querySelector(`#forecast`);
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=10.29&lon=-85.84&appid=bb5de5d3b5542a168c6a4a0d75756bd0&units=imperial&units=imperial";
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
    caption.textContent = desc;
}


async function forecasting() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            console.log("working");
            const data = await response.json();
            displayingForecast(data);
        }
        else {
            throw Error(await response.text());
        }

    }
    catch (error) {
        console.log(error);
    }
}
forecasting();


function displayingForecast(data) {
    forecastDiv.innerHTML = "";
    let counter = 0;
    let nextDays = new Date();
    nextDays.setDate(nextDays.getDate() + 1);
    nextDays.setHours(12, 0, 0, 0);


    for (const forecast of data.list) {
        const forecastDay = new Date(forecast.dt * 1000);
        forecastDay.setHours(12, 0, 0, 0);

        if (forecastDay.getDate() === nextDays.getDate() && counter < 3) {

            const forecastTemp = `${forecast.main.temp.toFixed(0)}&deg;F`;
            const descriptions = forecast.weather[0].description;
            const weatherIcon = forecast.weather[0].icon;
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `<p>${forecastDay.toDateString()}</p>
            <p>Weather: ${forecastTemp}<p>
            <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${descriptions}">
            <p>${descriptions}</p>`;

            forecastDiv.appendChild(forecastItem);
            counter++;
            nextDays.setDate(nextDays.getDate() + 1);
        }
        if (counter === 3) {
            break;
        }
    }
}






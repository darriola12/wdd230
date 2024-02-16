
const button = document.querySelector("#calculateWind");


function formula(temperature, windSpeed)
{
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)

}

button.addEventListener("click", () => 
{
    let wind = Number(document.querySelector("#windInput").value);
    let  temperature =  Number(document.querySelector("#temperatureInput").value); 
    document.querySelector("#result").value = formula(temperature,wind);

})






 
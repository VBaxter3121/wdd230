const currentTemp = document.querySelector("#current-temp");
const windSpeed = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");
const windChill = document.querySelector("#windchill");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Southampton,uk&appid=7296403ac5ac02c14a0103bb660827bd&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;

    arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    desc = arr.join(" ");

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    weatherDesc.textContent = desc;

    windSpeed.textContent = weatherData.wind.speed.toFixed(0);

    // Calculate and display windchill

    const tempCel = weatherData.main.temp.toFixed(0);
    const speed = weatherData.wind.speed.toFixed(0);

    if (tempCel > 10 || speed < 3) {
        windChill.innerHTML = "N/A";
    } else {
        const tempFah = tempCel * 9 / 5 + 32;
        let windchillFah = 35.74 + 0.6215 * tempFah - 35.75 * speed ** 0.16 + 0.4275 * tempFah * speed ** 0.16;
        let windchillCel = ((windchillFah - 32) * 5 / 9).toFixed(1);
        windChill.innerHTML = `${windchillCel}&deg;C`;
    }
}

apiFetch()
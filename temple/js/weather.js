export async function weather() {
    const URL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.983254&lon=-77.095621&appid=7296403ac5ac02c14a0103bb660827bd&units=imperial";
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    console.log(data);

    let alert = data.alerts;
    if (alert != undefined) {
        let alertName = data.alerts.event;
        let alertDesc = data.alerts.description;
        const header = document.querySelector("header");
        const logo = document.querySelector(".logo");
        const popup = document.createElement("div");
        popup.setAttribute("class", "popup");
        const popupHeading = document.createElement("h2");
        const popupText = document.createElement("p");
        const popupClose = document.createElement("button");
        popupHeading.textContent = alertName;
        popupText.textContent = alertDesc;
        popupClose.innerHTML = `<span class="popup-close">&#10005;</span>`

        popupText.appendChild(popupClose);
        
        popup.appendChild(popupHeading);
        popup.appendChild(popupText);

        header.insertBefore(popup, logo)
    }

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let tomorrowStr = ""
    let afterTomorrowStr = ""

    if (currentDay < 5) {
        tomorrowStr = dayNames[currentDay + 1];
        afterTomorrowStr = dayNames[currentDay + 2];
    } else if (currentDay == 5) {
        tomorrowStr = dayNames[currentDay + 1];
        afterTomorrowStr = dayNames[currentDay + 2 - 7];
    } else if (currentDay == 6) {
        tomorrowStr = dayNames[currentDay + 1 - 7];
        afterTomorrowStr = dayNames[currentDay + 2 - 7];
    }

    let today = extractData(data, 0);
    let tomorrow = extractData(data, 1);
    let afterTomorrow = extractData(data, 2);

    let days = [today, tomorrow, afterTomorrow];

    const currentWeather = document.querySelector("#current-weather");

    let tomorrowDiv = document.querySelector("#tomorrow");
    let afterTomorrowDiv = document.querySelector("#after-tomorrow");

    const tomorrowHeader = document.createElement("h4");
    const afterTomorrowHeader = document.createElement("h4");
    tomorrowHeader.textContent = tomorrowStr;
    afterTomorrowHeader.textContent = afterTomorrowStr;
    tomorrowDiv.appendChild(tomorrowHeader);
    afterTomorrowDiv.appendChild(afterTomorrowHeader);
    console.log(afterTomorrowStr)

    days.forEach((day) => {

        let temp = document.createElement("p");
        let img = document.createElement("img");
        let desc = document.createElement("p");
        let hum = document.createElement("p");

        let arr = day[2].split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        day[2] = arr.join(" ");

        temp.textContent = `Temperature: ${day[0]}`;
        img.setAttribute("src", day[1]);
        img.setAttribute("alt", day[2]);
        desc.textContent = day[2];
        hum.textContent = `Humidity: ${day[3]}`;
        
        switch (day) {
            case today:
                currentWeather.appendChild(temp)
                currentWeather.appendChild(img)
                currentWeather.appendChild(desc)
                currentWeather.appendChild(hum)
                break;
            case tomorrow:
                tomorrowDiv.appendChild(temp)
                tomorrowDiv.appendChild(img)
                tomorrowDiv.appendChild(desc)
                tomorrowDiv.appendChild(hum)
                break;
            case afterTomorrow:
                afterTomorrowDiv.appendChild(temp)
                afterTomorrowDiv.appendChild(img)
                afterTomorrowDiv.appendChild(desc)
                afterTomorrowDiv.appendChild(hum)
                break;
        }
    })
}

function extractData(data, day) {
    let temperature = data.daily[day].temp.day;
    let icon = `http://openweathermap.org/img/wn/${data.daily[day].weather[0].icon}@2x.png`
    let description = data.daily[day].weather[0].description;
    let humidity = data.daily[day].humidity;

    let weatherInfo = [temperature, icon, description, humidity];
    return weatherInfo;
}

export function closePopup() {
    document.querySelector(".popup").style.display = "none";
}
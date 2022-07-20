import { templeCards, openCard, likeClick } from "./temple.js"
import { toggle } from "./hamburger.js"
import { weather, closePopup } from "./weather.js"
import { stateSelect } from "./form.js"

// Hamburger button
const hamburger = document.querySelector("#hamburger");
hamburger.onclick = toggle;

// Page specific scripts
let pageTitle = document.title.split("|");
pageTitle = pageTitle[1].trim();

// Copyright/Last Updated
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const modified = document.querySelector(".modified");
let lastUpdated = new Date(document.lastModified);
let [modDay, modDate, modMonth, modYear, modHour, modMinute, modSecond] = [
    lastUpdated.getDay(),
    lastUpdated.getDate(),
    lastUpdated.getMonth(),
    lastUpdated.getFullYear(),
    lastUpdated.getHours(),
    lastUpdated.getMinutes(),
    lastUpdated.getSeconds()
];
modified.innerHTML = `&copy; Vincent Baxter - Last Updated: ${weekday[modDay]}, ${modDate} ${months[modMonth]} ${modYear} ${modHour}:${modMinute}:${modSecond}`;

switch(pageTitle) {
    case "Homepage":
        // Home script
        weather()
        await delay(100)
        try {
            document.querySelector(".popup-close").addEventListener("click", closePopup)
        } catch {
            ""
        }
        break;
    case "Temples":
        // Temples script
        templeCards()
        document.querySelector("#temple-cards").addEventListener("click", openCard)
        document.querySelector("#temple-cards").addEventListener("click", likeClick)
        // Getting the IDs from local storage and selecting the elements created in temple.js
        // gave me so many problems, that after several hours, this is the only solution I could
        // find. I'm sure the solution lies with promises or async functions or something, but I'm pressed for
        // time and there is more important stuff to do. This works for now.
        await delay(100)
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            let buttonChildren = document.querySelector(`#${value}`).children;
            for (let element of buttonChildren) {
                if (element.className == "off") {
                    element.classList.add("on");
                    element.classList.remove("off");
                } else if (element.className == "on") {
                    element.classList.add("off");
                    element.classList.remove("on");
                }
            };
        }
        break;
    case "Reservations":
        // Form script
        document.querySelector("#country-select").addEventListener("click", stateSelect)
}   

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
// Menu
function toggleMenu() {
    document.querySelector("#main-nav").classList.toggle("open");
    document.querySelector("#hamburger").classList.toggle("open");
}

const hamburger = document.querySelector("#hamburger");
hamburger.onclick = toggleMenu;

// Date
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const fullDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let [day, date, month, year] = [
    fullDate.getDay(),
    fullDate.getDate(),
    fullDate.getMonth(),
    fullDate.getFullYear()
];
const htmlDate = document.querySelector("#date");
htmlDate.innerHTML = `${weekday[day]}, ${date} ${months[month]} ${year}`

// Copyright/Last Updated
const copyright = document.querySelector(".copyright");
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
copyright.innerHTML = `<li>&copy; ${year} Southampton Chamber</li><li>Vincent Baxter</li><li>WDD 230 Project</li>`;
modified.innerHTML = `Last Updated: ${weekday[modDay]}, ${modDate} ${months[modMonth]} ${modYear} ${modHour}:${modMinute}:${modSecond}`;

// Banner
if (day == 1 || day == 2) {
    const banner = document.querySelector("#banner");
    banner.style.display = "block";
    console.log("Test")
}
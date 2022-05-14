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
let [modDay, modDate, modMonth, modYear] = [
    lastUpdated.getDay(),
    lastUpdated.getDate(),
    lastUpdated.getMonth(),
    lastUpdated.getFullYear()
];
copyright.innerHTML = `<li>&copy; ${year} Southampton Chamber</li><li>Vincent Baxter</li><li>WDD 230 Project</li>`;
modified.innerHTML = `Last Updated: ${weekday[modDay]}, ${modDate} ${months[modMonth]} ${modYear}`;


/*let copyright_text = `Copyright \u00A9 ${new Date().getFullYear()} Vincent Baxter - England`
let copyright = document.querySelector("#portal-copyright")
copyright.textContent = copyright_text

let updated_text = `Last updated: ${document.lastModified}`
let last_updated = document.querySelector("#portal-last-modified")
last_updated.textContent = updated_text*/
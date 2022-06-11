// Days since last visit
let lastVisit = Number(window.localStorage.getItem("lastVisit"));
let currentVisit = Date.now();
const daysParagraph = document.querySelector("#days-since");
if (lastVisit == "") {
    daysParagraph.textContent = "N/A"
} else {
    let daysSince = currentVisit - lastVisit;
    daysSince = (daysSince / 86400000).toFixed(0);
    console.log(`Minutes since last page load: ${daysSince}`);
    daysParagraph.textContent = daysSince;
}
localStorage.setItem("lastVisit", currentVisit);
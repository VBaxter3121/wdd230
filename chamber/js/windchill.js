const tempCel = document.querySelector("#temp").innerHTML;
const speed = document.querySelector("#windspeed").innerHTML;

const tempFah = tempCel * 9 / 5 + 32;
let windchillFah = 35.74 + 0.6215 * tempFah - 35.75 * speed ** 0.16 + 0.4275 * tempFah * speed ** 0.16;
windchillCel = ((windchillFah - 32) * 5 / 9).toFixed(1);

if (tempCel > 10 || speed < 3) {
    windchillCel = "N/A"
}
document.querySelector("#windchill").innerHTML = windchillCel
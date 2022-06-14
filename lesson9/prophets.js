const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let portrait = document.createElement("img");
    let birth = document.createElement("p");

    // Select correct ending for ordinal number
    let ordinal = ""
    switch(prophet.order) {
        case 1:
            ordinal = "st"
            break;
        case 2:
            ordinal = "nd"
            break;
        case 3:
            ordinal = "rd"
            break;
        default:
            ordinal = "th"
    }

    name.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}, the ${prophet.order}${ordinal} President of the Church`);
    portrait.setAttribute("loading", "lazy");
    birth.innerHTML = `Date of birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`

    card.appendChild(name);
    card.appendChild(birth);
    card.appendChild(portrait);

    document.querySelector("div.cards").appendChild(card);
}
const requestURL = "json/directory.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = (jsonObject["businesses"]);
        let spotlightBusinesses = businesses.filter(business => {
            if (business.membership == "Gold" || business.membership == "Silver") {
                return business;
            }
        })
        console.log(spotlightBusinesses);
        chooseRandomly(spotlightBusinesses);
    })

function chooseRandomly(spotlightBusinesses) {
    const number = spotlightBusinesses.length;
    let spot1 = Math.floor(Math.random() * number);
    let spot2 = spot1;
    let spot3 = spot1;

    while (spot2 == spot1) {
        spot2 = Math.floor(Math.random() * number);
    }
    while (spot3 == spot1 || spot3 == spot2) {
        spot3 = Math.floor(Math.random() * number);
    }
    displayBusinesses(spotlightBusinesses[spot1], ".spot1");
    displayBusinesses(spotlightBusinesses[spot2], ".spot2");
    displayBusinesses(spotlightBusinesses[spot3], ".spot3");
}

function displayBusinesses(spotlight, position) {
    const spot = document.querySelector(position);
    const title = document.createElement("h2");
    const logo = document.createElement("img");
    const details = document.createElement("p");

    title.textContent = spotlight.name;
    logo.setAttribute("src", spotlight.image);
    logo.setAttribute("alt", `${spotlight.name} logo`)
    details.innerHTML = `<a href="#">${spotlight.url}</a> | ${spotlight.phone}`;

    spot.appendChild(title);
    spot.appendChild(logo);
    spot.appendChild(details);
}
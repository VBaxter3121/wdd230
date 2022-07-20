export function templeCards() {
    const requestURL = "json/temples.json";

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = (jsonObject["temples"]);
        temples.forEach(displayTemples);
    })
}

function displayTemples(temple) {
    const templeCards = document.querySelector("#temple-cards");

    const card = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const email = document.createElement("p");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const services = document.createElement("p");
    const history = document.createElement("p");
    const schedule = document.createElement("p");
    const closures = document.createElement("p");
    const likeButton = document.createElement("button");

    let templeServices = temple.services.split("|");
    let templeHistory = temple.history.split("|");

    templeServices = templeServices.join("<br>");
    templeHistory = templeHistory.join("<br>");

    title.textContent = temple.name;
    img.setAttribute("src", temple.image)
    img.setAttribute("alt", `Photo of ${temple.name}`)
    email.textContent = temple.email;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    services.innerHTML = templeServices;
    history.innerHTML = templeHistory;
    schedule.innerHTML = temple.schedule;
    closures.textContent = temple.closures;
    likeButton.innerHTML = `<span class="on">♡</span><span class="off">♥</span>`;

    card.setAttribute("id", temple.id);
    email.setAttribute("class", "temple-p");
    address.setAttribute("class", "temple-p");
    phone.setAttribute("class", "temple-p");
    services.setAttribute("class", "temple-p");
    history.setAttribute("class", "temple-p");
    schedule.setAttribute("class", "temple-p");
    closures.setAttribute("class", "temple-p");
    likeButton.setAttribute("id", `${temple.id}-button`)

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(email);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(schedule);
    card.appendChild(closures);
    card.appendChild(likeButton);

    templeCards.appendChild(card);
}

export function openCard(e) {
    let target = e.target.id;
    if (target == "") {
        target = e.target.parentNode.id;
    } else if (target === "temple-cards") {
        target = "";
    }
    const cardChildren = document.querySelector(`#${target}`).children;
    for (let element of cardChildren) {
        if (element.className == "temple-p") {
                element.classList.add("temple-p-show");
                element.classList.remove("temple-p");
            } else if (element.className == "temple-p-show") {
                element.classList.add("temple-p");
                element.classList.remove("temple-p-show");
            }
        };
}

export function likeClick(e) {
    let target = e.target.id;
    if (target == "") {
        target = e.target.parentNode.id;
    } else if (target === "temple-cards") {
        target = "";
    }
    likeToggle(target);
}

function likeToggle(target) {
    const buttonChildren = document.querySelector(`#${target}`).children;
    for (let element of buttonChildren) {
        if (element.className == "off") {
            element.classList.add("on");
            element.classList.remove("off");
            localStorage.setItem(`liked ${target}`, `${target}`);
        } else if (element.className == "on") {
            element.classList.add("off");
            element.classList.remove("on");
            localStorage.removeItem(`liked ${target}`, `${target}`);
        }
    };
}
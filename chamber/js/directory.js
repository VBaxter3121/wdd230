// JSON
const requestURL = "json/directory.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = (jsonObject["businesses"]);
        businesses.forEach(displayBusinesses);
    })

function displayBusinesses(business) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let image = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let businessURL = document.createElement("a");

    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    businessURL.textContent = business.url;
    businessURL.setAttribute("href", business.url);

    image.setAttribute("src", business.image);
    image.setAttribute("alt", `${business.name}'s logo`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(businessURL);

    document.querySelector(".cards").appendChild(card);
}

// Grid/List view
const businessList = document.querySelector("#businesses");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

gridBtn.addEventListener("click", () => {
    businessList.classList.remove("list");
    businessList.classList.add("cards");
})

listBtn.addEventListener("click", () => {
    businessList.classList.remove("cards");
    businessList.classList.add("list");
})
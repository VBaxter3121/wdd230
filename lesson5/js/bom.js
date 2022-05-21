const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
    if (input.value != "") {
        let newListItem = document.createElement("li");
        let deleteButton = document.createElement("button");
        newListItem.textContent = input.value;
        deleteButton.textContent = "❌"
        input.value = "";
        newListItem.appendChild(deleteButton);
        list.appendChild(newListItem);
        input.focus();

        deleteButton.addEventListener("click", () => list.removeChild(newListItem));
    }
});


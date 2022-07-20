export function stateSelect() {
    if (document.querySelector("#country-select").value == "US") {
        document.querySelector("#state").classList.add("state-shown")
        document.querySelector("#state-select").attributes.required = "";
    } else {
        document.querySelector("#state").classList.remove("state-shown")
        document.querySelector("#state-select").attributes.required = "required";
    }
}
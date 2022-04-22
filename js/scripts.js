let copyright_text = `Copyright \u00A9 ${new Date().getFullYear()} Vincent Baxter - England`
let copyright = document.querySelector("#portal-copyright")
copyright.textContent = copyright_text

let updated_text = `Last updated: ${document.lastModified}`
let last_updated = document.querySelector("#portal-last-modified")
last_updated.textContent = updated_text
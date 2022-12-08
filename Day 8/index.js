const inputEl = document.getElementById("time-in")
const submitBtn = document.getElementById("submit-btn")
const display = document.getElementById("display-msg")

submitBtn.addEventListener("click", function () {
    display.style.visibility = "visible"
    if (!inputEl.value) {
        display.textContent = "Please enter a valid time."
    } else if (inputEl.value.length < 5 || inputEl.value.charAt(2) != ":") {
        display.textContent = "Please enter hours and minutes with a colon in between."
    } else {
        display.textContent = validTime(inputEl.value)
    }
})

function validTime(str) {
    if (str.substring(0,2) < 24 && str.substring(3) < 60)
        return `Santa will come at ${str}. Better have cookies!`;
    else
        return "Santa says, 'Think again!'"
}
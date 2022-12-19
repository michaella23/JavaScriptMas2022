const centuryForm = document.getElementById("century-form");
const yearInput = document.getElementById("year");
const winterScene = document.getElementById("winter");

centuryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderImage(yearInput.value);
    });

function centuryFromYear(num) {
    const century = Math.floor(num/100);
    const actualCentury = num % 100 === 0 ? century : century + 1;
    return actualCentury;
}

function renderImage(num) {
    document.body.classList.remove("initial");
    winterScene.style.visibility = "visible";
    document.body.style.backgroundImage = `url("images/${centuryFromYear(num)}th.png")`;
    winterScene.innerHTML = `Winter in the ${centuryFromYear(num) < 21 ? centuryFromYear(num) + "th" : centuryFromYear(num) + "st"} century`
}
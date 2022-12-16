const dasherAndCo = document.getElementById("dasher-and-co");
const cometAndCo = document.getElementById("comet-and-co");


function insertDashes(str) {
    let newArr = [];
    let splitOne = str.split(" ");
    for (let i = 0; i < splitOne.length; i++) {
        newArr.push(splitOne[i].split("").join("-"));
    }
    return newArr.join(" · ");
}

dasherAndCo.textContent = insertDashes(dasherAndCo.textContent);
cometAndCo.textContent = insertDashes(cometAndCo.textContent);
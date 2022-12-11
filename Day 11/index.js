const messages = document.getElementById("messages");
const xmasMessages = ["!luj doG", "!elataN nouB", "!samtsirhC yrreM", "!dadivaN zileF", "!lëoN xueyoJ", "!usamusirukīreM"];

// render original messages from the aliens
function renderAlienMsgs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let alienMsg = document.createElement("li");
        alienMsg.textContent = arr[i];
        messages.appendChild(alienMsg)
    }
}

renderAlienMsgs(xmasMessages)

// reverse a string
function reverseString(str){
    return str.split("").reverse().join("");
}

// reverse every string in an array
function reverseStringsInArray(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(reverseString(arr[i]));
    }
    return newArr;
}

// translate messages from the aliens
const translateBtn = document.getElementById("translate-btn");
translateBtn.addEventListener("click", () => {
    let translated = reverseStringsInArray(xmasMessages)
    messages.innerHTML = ""
    renderAlienMsgs(translated)
})
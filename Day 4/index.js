const shushButton = document.querySelector(".whisper");
shushButton.addEventListener("click", renderPhrase);
const phraseArray = ["PLEASE STOP SHOUTING.","MA'AM, this is a Wendy's!", "that's MY purse!!! I don't Know YOu!", "Will you EVER Shut UP?", "I'M GONNA TELL Mom!!!", "GIVE ME ALL YOUR CooKIES!", "I! FREAKIN! LOVE! JAVASCRIPTMAS!"];


function whisper(notSoLoud) {
    if (!notSoLoud || notSoLoud.trim().length === 0) {
        return "This string is empty.";
    } else if (notSoLoud.includes("!")) {
        let quieter = notSoLoud.replaceAll("!", ".");
        return `shh... ${quieter.toLowerCase()}`;
    } else {
        return `shh... ${notSoLoud.toLowerCase()}`;
    }
}

function renderPhrase() {
    let random = Math.floor(Math.random() * phraseArray.length);
    shushButton.textContent = `${whisper(phraseArray[random])}`;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("that's MY purse! I don't Know YOu!"));
console.log(whisper("!!!"));
console.log(whisper("    "));
console.log(whisper(""));
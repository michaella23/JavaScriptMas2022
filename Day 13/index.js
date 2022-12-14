const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "purple_heart": "💜",
    "cat": "🐱",
    "dog": "🐕",
    "green_heart": "💚",
    "red_heart": "❤️",
    "black_heart": "🖤",
    "white_heart": "🤍",
    "christmas": "🎄",
    "house": "🏠",
    "mouse": "🐁",
    "stockings": "🧦",
    "santa": "🎅",
    "children": "🧒🧒🧒",
    "beds": "🛏🛏",
    "sugar_plums": "🫐",
    "poop": "💩",
    "butt": "🍑",
    "chicken": "🐔",
    "pants": "👖",
    "snowman": "⛄",
    "halloween": "🎃",
    "turd": "💩",
    "pee": "🟡",
    "boogers": "🦠"
}

function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        const inputWord = word.split("").slice(1, -1).join("");
        return inputWord in emojis ? emojis[inputWord] : inputWord;
    } else {
        return word;
    }
}

function emojifyPhrase(phrase){
    return phrase.split(" ").map((wordInPhrase) => {
        return emojifyWord(wordInPhrase)
    }).join(" ");
}

const poem = document.querySelector(".poem")
const form = document.getElementById("form")
const nounOne = document.getElementById("noun1");
const nounTwo = document.getElementById("noun2");
const nounThree = document.getElementById("noun3");
const nounFour = document.getElementById("noun4");
const nounFive = document.getElementById("noun5");
const nounSix = document.getElementById("noun6");
const nounSeven = document.getElementById("noun7");
const nounEight = document.getElementById("noun8");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    poem.classList.add("margin");
    poem.textContent = `Twas the night before ${emojifyWord(nounOne.value)}, when all through the ${emojifyWord(nounTwo.value)} not a creature was stirring, not even a ${emojifyWord(nounThree.value)}. The ${emojifyWord(nounFour.value)} were hung by the chimney with care, in hopes that ${emojifyWord(nounFive.value)} soon would be there. The ${emojifyWord(nounSix.value)} were nestled all snug in their ${emojifyWord(nounSeven.value)}, while visions of ${emojifyWord(nounEight.value)} danced in their heads.`;
    // poem.textContent = emojifyPhrase(`Twas the night before ${nounOne.value}, when all through the ${nounTwo.value} not a creature was stirring, not even a ${nounThree.value}. The ${nounFour.value} were hung by the chimney with care, in hopes that ${nounFive.value} soon would be there. The ${nounSix.value} were nestled all snug in their ${nounSeven.value}, while visions of ${nounEight.value} danced in their heads.`);
})

function renderPhrase(phrase) {
    document.body.innerHTML += `<p>${phrase}</p>`;
}

// Test cases
// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :purple_heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));
// console.log(emojifyPhrase("I :heart: :flowers:"));

// Test case
// renderPhrase("Dammit, Bobby!");

// renderPhrase(emojifyPhrase("I :white_heart: JavaScriptmas!"));
// renderPhrase(emojifyPhrase("I :red_heart: JavaScriptmas!"));
// renderPhrase(emojifyPhrase("I :green_heart: JavaScriptmas!"));
// renderPhrase(emojifyPhrase("I :black_heart: JavaScriptmas!"));
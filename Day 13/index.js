const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "purple_heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕",
    "green_heart": "💚",
    "red_heart": "❤️",
    "black_heart": "🖤",
    "white_heart": "🤍"
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

// Test cases
// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :purple_heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));
// console.log(emojifyPhrase("I :heart: :flowers:"));

function renderPhrase(phrase) {
    document.body.innerHTML += `<p>${phrase}</p>`;
}

// Test case
// renderPhrase("Dammit, Bobby!");

renderPhrase(emojifyPhrase("I :white_heart: JavaScriptmas!"));
renderPhrase(emojifyPhrase("I :red_heart: JavaScriptmas!"));
renderPhrase(emojifyPhrase("I :green_heart: JavaScriptmas!"));
renderPhrase(emojifyPhrase("I :black_heart: JavaScriptmas!"));
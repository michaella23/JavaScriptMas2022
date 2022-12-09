const title = document.querySelector("h1");

function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.substr(1);
}

function toTitleCase(str){
    let wordsArr = str.split(' ');
    let capitalizedArr = [];
    for (let i = 0; i < wordsArr.length; i++) {
        capitalizedArr.push(capitalizeWord(wordsArr[i]));
    }
    return capitalizedArr.join(' ');
}

function renderTitle() {
   title.textContent = toTitleCase("the best gifts for everyone on your list ✨");
}

renderTitle();

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
console.log(toTitleCase("everthing, everywhere, all at once"));
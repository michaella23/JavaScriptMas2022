const main = document.querySelector('main')

function panic(worry) {
    let bigWorry = worry.toUpperCase();
    let screamyWorry = bigWorry.split(' ').join(' 😱 ') + "!"
    main.innerHTML = `<h1>${screamyWorry}</h1>`;
}

// Test your function

// panic("winter is coming")
panic("that's the last of the coffee")
// panic("mom? dad?")
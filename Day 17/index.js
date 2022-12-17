const main = document.querySelector("main");

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr) {
    // Method 1 - works for this case, but not multiple nested arrays
    // const newArr = [];
    // arr.forEach((index) => {
    //     Array.isArray(index) ? 
    //     index.forEach((item) => newArr.push(item)) : 
    //     newArr.push(index)
    //     });
    // return newArr;
    
    // Method 2 - built-in method
    // return arr.flat(Infinity);
    
    // Method 3 - reduce + recursion for multiple nested arrays
    const newArr = arr.reduce((acc, value) => {
        Array.isArray(value) ? acc = acc.concat(flatten(value)) : acc.push(value);
        return acc;
        }, []);
    return newArr;
}

function render(arr) {
    arr.forEach((item) => {
        main.innerHTML += `<div class="gift"s>${item}</div>`;
    })
    main.innerHTML += `<img src="pumpkin.png" alt="black & white cat in santa hat" class="pumpkin" />`
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
render(flatten(kittyPrizes));
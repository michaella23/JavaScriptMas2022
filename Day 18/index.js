const main = document.querySelector("main");

function candies(children, candy) {
    const childrenArr = new Array(children).fill("🧒");
    const candyArr = new Array(candy).fill("🍫");
    const piecesCandy = new Array(Math.floor(candy/children)).fill("🍫").join(" ");
    
    childrenArr.forEach((child) => {
        main.innerHTML += `
            <div class="flex">
                <p>${child}</p>
                <p>${piecesCandy}</p>
            </div>
        `});
    document.body.innerHTML += `
        <p>Santa has ${candy} candies. 🎅</p>
        <p class="total-candy">${candyArr.join(" ")}</p>
        <p>Each child will get ${Math.floor(candy/children)}, and ${candy % children} will be left over for Santa!</p>
        `;
    
    // original challenge was to determine how many candies would be distributed - this return statement is all that is required.
    return Math.floor(candy/children) * children;
}

console.log(candies(3, 10));
//console.log(candies(4, 18));
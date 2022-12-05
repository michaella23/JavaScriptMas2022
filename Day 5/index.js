import products from "./data.js";

const body = document.querySelector("body");

function getSaleItems(data) { 
    // only sweets!   
    let shoppingCart = data.filter(({item, price, type}) => {
        return type === "sweet";
    }).map(({item, price, type}) => {
        return {item, price};
    })
    // render to DOM
    shoppingCart.forEach(({item, price}) => {
        body.innerHTML += `
            <div class="candy">
                <p>${item}</p>
                <p>$${price}</p>
            <div>
            `
    })
};

getSaleItems(products);
import products from "./data.js";

function sortProducts(data){
    const sorted = data.sort((a,b) => a.price - b.price);
    
    sorted.map((x) =>
    document.body.innerHTML += `
        <div class="flex">
            <p class="product">${x.product}</p>
            <p>${x.price === 0 ? 'FREE!' : '$' + x.price}</p>
        </div>
    `)
    
    return sorted;
}

const listByCheapest = sortProducts(products);
listByCheapest.forEach((x) => console.log(x.product, x.price));
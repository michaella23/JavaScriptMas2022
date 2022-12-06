function getRandomNumberOfTacos() {
    let tacoAmount = Math.floor(Math.random() * 10 + 1);
    const tacoArray = new Array(tacoAmount).fill("🌮");
    return tacoArray;
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map((taco) => {
        return `<div class="taco">${taco}</div>`
    }).join('')
    return orderTacos;
}

function orderTacos() {
    document.getElementById('tray').innerHTML = putTacosOnTray()
}
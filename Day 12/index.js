const menu = document.getElementById("menu");

const holidayFoods = ['🥡', '🍰','🥂'];

menu.innerHTML = holidayFoods.map((foodItem) => `<div class="food">${foodItem}</div>`).join("");
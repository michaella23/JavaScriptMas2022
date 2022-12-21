const list = document.querySelector(".list");
const employees = Array.from({length:100}, (e, i) => i + 1);

function awardBonuses(){    
    for (let i = 0; i < employees.length; i++) {
        let bonus = "";
        if (employees[i] % 3 === 0 && employees[i] % 5 === 0) {
            bonus = "JACKPOT! 🤑 1 Million and a Yacht ⛵";
        } else if (employees[i] % 3 === 0) {
            bonus = "Vacation! 🏖";
        } else if (employees[i] % 5 === 0) {
            bonus = "$100,000 bonus! 💰";
        } else {
            bonus = "😦";
        }
        let para = document.createElement("p");
        para.textContent = `${i + 1}: ${bonus}`; 
        list.appendChild(para);
    }
}

awardBonuses();
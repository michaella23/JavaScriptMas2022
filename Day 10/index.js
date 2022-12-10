const xmasList = document.getElementById("xmas-list")

function sortByLength(strs) {
    return strs.sort((a,b) => a.length - b.length)
}

function printXmasList(arr) {
    let sortedList = sortByLength(arr)
    sortedList.forEach((item) => {
        let toy = document.createElement("li");
        toy.innerText = item;
        xmasList.appendChild(toy);
    })
    
}

printXmasList(["ball", "roller blades", "dollhouse", "yo-yo", "Rubik's cube (3x3)", "giant Teddy bear", "hoverboard"])
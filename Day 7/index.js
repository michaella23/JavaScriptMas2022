const sincerePhrase = document.getElementById("sincere-phrase");

function altCaps(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += i % 2 == 0 ? str.charAt(i).toLowerCase() : str.charAt(i).toUpperCase();
    }
    return newStr;
}

function grinchify() {
    sincerePhrase.textContent = altCaps("Christmas is my favorite.") + " 👿";
}


grinchify();